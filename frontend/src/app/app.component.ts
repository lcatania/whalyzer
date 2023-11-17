import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';
import { Tile } from './models/Tile';
import { Container } from './models/Container';
import { ContainerStateToColorPipe } from './pipes/state-to-color.pipe';
import { Network, NetworkConnection } from './models/Network';

const CONTAINER_IMAGE = '../assets/container.png'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, DragScrollModule, ContainerStateToColorPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ROWS = 30;
  COLS = 30;

  baseTileLayer: Array<Array<Tile>> = [];
  midTileLayer: Array<Array<Container | undefined>> = [];
  currentContainerCoords: { [key: string]: { ROW: number, COL: number } } = {};
  selectedContainer!: Container
  networks: Network[] = [];
  connections: NetworkConnection[] = [];
  hoveredContainer!: { name: string, top: number, left: number } | undefined;
  hoveredConnection!: { name: string, top: number, left: number } | undefined;


  @ViewChild('map', { static: false }) map!: ElementRef<HTMLDivElement>;

  isCreateContainerModalVisible: boolean = false;

  async ngOnInit() {
    for (let xIndex = 0; xIndex <= this.ROWS; xIndex++) {
      this.baseTileLayer.push([]);
      this.midTileLayer.push([]);
      for (let yIndex = 0; yIndex <= this.COLS; yIndex++) {
        this.baseTileLayer[xIndex].push({
        })
        this.midTileLayer[xIndex].push(undefined)
      }
    }
    await Neutralino.events.on("CONTAINER_LIST", (data: CustomEvent<Container[]>) => {
      //Generate Containers in random places in boundaries
      Object.values(this.currentContainerCoords).forEach(coords => {
        this.midTileLayer[coords.ROW][coords.COL] = undefined
      })
      this.currentContainerCoords = {};
      if (data.detail.length === 0)
        return;
      this.createContainersInBoundaries(data.detail);
    })
    await Neutralino.extensions.dispatch("js.neutralino.sampleextension", "GET_CONTAINER_LIST", undefined)
    await Neutralino.events.on("NEW_CONTAINER", (data: CustomEvent<Container>) => {
      //Generate Containers in random places in boundaries
      if (!data.detail)
        return;
      this.createContainersInBoundaries([data.detail]);
    })
    await Neutralino.events.on("CONTAINER_UPDATE", (data: CustomEvent<Container>) => {
      const targetContainerCoords = this.currentContainerCoords[data.detail.id];
      if (!targetContainerCoords)
        return;
      let targetContainer = this.midTileLayer[targetContainerCoords.ROW][targetContainerCoords.COL];
      if (!targetContainer)
        return;
      targetContainer.state = data.detail.state;
      targetContainer.status = data.detail.status;
    })
    await Neutralino.events.on("REMOVE_CONTAINER", (data: CustomEvent<string>) => {
      const containerCoords = this.currentContainerCoords[data.detail];
      if (!containerCoords)
        return;
      this.midTileLayer[containerCoords.ROW][containerCoords.COL] = undefined
      delete this.currentContainerCoords[data.detail]
    })
    await Neutralino.events.on("NETWORK_LIST", (data: CustomEvent<{ name: string, containers: string[] }[]>) => {
      data.detail.forEach((n) => {
        const index = this.networks.findIndex((n) => n.name === n.name);
        if (index !== -1) {
          this.networks[index].containers = n.containers.map((key) => this.currentContainerCoords[key])
        }
        else {
          this.networks.push({
            name: n.name,
            containers: n.containers.map((key) => this.currentContainerCoords[key])
          })
          this.createNetworkConnection(n.name, n.containers);
        }
      })
    })

  }

  addContainer(row: number, col: number, container: Container) {
    let entity: Container;
    entity = {
      ...container,
      icon: CONTAINER_IMAGE,
    } as Container;
    this.midTileLayer[row][col] = entity;
  }

  dismissModal() {
    this.isCreateContainerModalVisible = false;
  }

  getVisibleTiles(): { firstVisibleRowIndex: number, lastVisibleRowIndex: number, firstVisibleColIndex: number, lastVisibleColIndex: number } | undefined {
    const mapBoundings = this.map.nativeElement.getBoundingClientRect();
    let firstVisibleRow = undefined;
    let firstVisibleRowIndex = undefined;
    let lastVisibleRowIndex = undefined;

    let firstVisibleColIndex = undefined;
    let lastVisibleColIndex = undefined;

    for (let index = 0; index < this.map.nativeElement.children.length; index++) {
      const row = this.map.nativeElement.children[index];
      const rowBoudings = row.getBoundingClientRect();

      // If the child is in the viewport
      if (rowBoudings.top >= -15 && rowBoudings.bottom <= ((mapBoundings.bottom < 0 ? (mapBoundings.height + mapBoundings.bottom) : mapBoundings.bottom)) + 15) {
        if (!firstVisibleRow) {
          firstVisibleRow = row;
          firstVisibleRowIndex = index;
        }
      }
      // If the child is outside the viewport
      else {
        if (!firstVisibleRow)
          continue;
        if (!lastVisibleRowIndex) {
          lastVisibleRowIndex = index - 1;
          break;
        }

      }
    }

    if (!firstVisibleRow)
      return undefined;

    for (let index = 0; index < firstVisibleRow.children.length; index++) {
      const tile = firstVisibleRow.children[index];
      const tileBoudings = tile.getBoundingClientRect();
      if (tileBoudings.left >= 0 && tileBoudings.right <= (mapBoundings.right < 0 ? (mapBoundings.width + mapBoundings.left) : mapBoundings.width - 16)) {
        if (firstVisibleColIndex === undefined)
          firstVisibleColIndex = index;
      }
      else {
        if (firstVisibleColIndex === undefined)
          continue;
        if (!lastVisibleColIndex)
          lastVisibleColIndex = index;
        break;
      }
    }

    return { firstVisibleColIndex: firstVisibleColIndex ?? 0, firstVisibleRowIndex: firstVisibleRowIndex ?? 0, lastVisibleColIndex: lastVisibleColIndex ?? 0, lastVisibleRowIndex: lastVisibleRowIndex ?? 0 }
  }

  createContainersInBoundaries(services: Container[]): { row: number, col: number }[] {
    let result: { row: number, col: number }[] = []

    const visibleTileBoundaries = this.getVisibleTiles();

    if (!visibleTileBoundaries)
      return [];

    const centerRow = Math.floor((visibleTileBoundaries.firstVisibleRowIndex ?? 0) + ((visibleTileBoundaries.lastVisibleRowIndex ?? 0) / 2));
    const centerCol = Math.floor((visibleTileBoundaries.firstVisibleColIndex ?? 0) + ((visibleTileBoundaries.lastVisibleColIndex ?? 0) / 2));
    let radius = 3;
    let maxRow = centerRow + radius;
    let maxCol = centerCol + radius;
    let minRow = centerRow - radius;
    let minCol = centerCol - radius;

    let randomRow: number = 0;
    let randomCol: number = 0;

    services.forEach((value) => {
      do {
        randomRow = Math.floor(Math.random() * (maxRow - minRow + 1)) + minRow;
        randomCol = Math.floor(Math.random() * (maxCol - minCol + 1)) + minCol;
      } while (this.midTileLayer[randomRow][randomCol]);
      this.addContainer(randomRow, randomCol, value)
      this.currentContainerCoords[value.id] = { ROW: randomRow, COL: randomCol };
      ++radius;
    });
    return result;
  }

  createNetworkConnection(networkName: string, containers: string[]) {

    for (let index = 0; index < containers.length; index++) {
      const firstElement = containers[index];
      const firstDOM = this.getDOMElementFromCoords(this.currentContainerCoords[firstElement]);
      if (!firstDOM)
        continue;
      const firstBounds = firstDOM?.getBoundingClientRect();
      for (let secondIndex = 0; secondIndex < containers.length; secondIndex++) {

        if (index === secondIndex)
          continue;
        const secondElement = containers[secondIndex];
        const secondDOM = this.getDOMElementFromCoords(this.currentContainerCoords[secondElement]);
        if (!secondDOM)
          continue
        const secondBounds = secondDOM.getBoundingClientRect();
        this.connections.push({
          name: networkName,
          x1: firstBounds.x + 32,
          x2: secondBounds.x + 32,
          y1: firstBounds.y + 16,
          y2: secondBounds.y + 16,
          isHovered: false
        })
      }
    }
  }

  getDOMElementFromCoords(coords: { COL: number, ROW: number }): HTMLElement | null {
    return document.getElementById(coords.ROW.toString() + coords.COL.toString());
  }

  entitySelected(event: MouseEvent, rowIndex: number, colIndex: number) {
    const entity = this.midTileLayer[rowIndex][colIndex];
    if (!entity)
      return;
    this.isCreateContainerModalVisible = true
    this.selectedContainer = entity;
    event.stopPropagation();
  }

  baseSelected() {
    console.log("BASE");
  }

  mouseLeaveConnection(connection: NetworkConnection) {
    connection.isHovered = false;
    this.hoveredConnection = undefined;
  }

  mouseEnterConnection(connection: NetworkConnection, element: unknown) {
    connection.isHovered = true;
    this.hoveredConnection = {
      name: connection.name,
      left: (element as SVGLineElement).getBoundingClientRect().left + ((element as SVGLineElement).getTotalLength() / 2),
      top: (element as SVGLineElement).getBoundingClientRect().bottom  - ((element as SVGLineElement).getTotalLength() / 2)
    };
  }

  mouseLeaveContainer(container: Container | undefined) {
    if (!container)
      return;
    this.hoveredConnection = undefined;
  }

  mouseEnterContainer(container: Container | undefined, element: HTMLDivElement) {
    if (!container)
      return;
    this.hoveredContainer = {
      name: container.name,
      left: element.getBoundingClientRect().left,
      top: element.getBoundingClientRect().top
    };
  }

}
