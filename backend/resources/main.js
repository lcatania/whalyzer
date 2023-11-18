"use strict";
(self["webpackChunkdocky"] = self["webpackChunkdocky"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_lolo_Projects_whalyzer_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-drag-scroll */ 9594);
/* harmony import */ var _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/state-to-color.pipe */ 9709);
/* harmony import */ var _partials_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/container-dialog/container-dialog.component */ 826);
/* harmony import */ var _partials_command_palette_command_palette_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/command-palette/command-palette.component */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const _c0 = ["map"];
function AppComponent_For_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Conditional_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const colIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.entitySelected($event, rowIndex_r5, colIndex_r9));
    })("mouseenter", function AppComponent_For_4_For_2_Conditional_1_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const colIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.mouseEnterContainer(ctx_r17.midTileLayer[rowIndex_r5][colIndex_r9], _r12));
    })("mouseleave", function AppComponent_For_4_For_2_Conditional_1_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const colIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.mouseLeaveContainer(ctx_r20.midTileLayer[rowIndex_r5][colIndex_r9]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIndex_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
    const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + (ctx_r11.midTileLayer[rowIndex_r5][colIndex_r9] == null ? null : ctx_r11.midTileLayer[rowIndex_r5][colIndex_r9].icon) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("pixel-border absolute top-0 right-2 w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r11.midTileLayer[rowIndex_r5][colIndex_r9] == null ? null : ctx_r11.midTileLayer[rowIndex_r5][colIndex_r9].state));
  }
}
function AppComponent_For_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.baseSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_For_4_For_2_Conditional_1_Template, 4, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIndex_r9 = ctx.$index;
    const rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", rowIndex_r5.toString() + colIndex_r9.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, ctx_r7.midTileLayer[rowIndex_r5][colIndex_r9] ? 1 : -1);
  }
}
function AppComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, AppComponent_For_4_For_2_Template, 2, 2, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](1, row_r4);
  }
}
function AppComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "line", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function AppComponent_For_7_Template__svg_line_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const connection_r28 = restoredCtx.$implicit;
      const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.mouseEnterConnection(connection_r28, _r31));
    })("mouseleave", function AppComponent_For_7_Template__svg_line_mouseleave_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const connection_r28 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.mouseLeaveConnection(connection_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const connection_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("x1", connection_r28.x1)("y1", connection_r28.y1)("x2", connection_r28.x2)("y2", connection_r28.y2)("stroke", connection_r28.isHovered ? "red" : "black");
  }
}
function AppComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r3.tooltip.top - 20 + "px")("left", ctx_r3.tooltip.left - 20 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.tooltip.content);
  }
}
const CONTAINER_IMAGE = '../assets/container.png';
class AppComponent {
  constructor() {
    this.ROWS = 30;
    this.COLS = 30;
    this.baseTileLayer = [];
    this.midTileLayer = [];
    this.currentContainerCoords = {};
    this.networks = [];
    this.connections = [];
    this.tooltip = undefined;
    this.isContainerDialogVisible = false;
    this.isCommandPaletteVisible = false;
  }
  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.isCommandPaletteVisible = false;
    }
    if (event.key === 'p' && event.ctrlKey) {
      this.isCommandPaletteVisible = true;
    }
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_lolo_Projects_whalyzer_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let xIndex = 0; xIndex <= _this.ROWS; xIndex++) {
        _this.baseTileLayer.push([]);
        _this.midTileLayer.push([]);
        for (let yIndex = 0; yIndex <= _this.COLS; yIndex++) {
          _this.baseTileLayer[xIndex].push({});
          _this.midTileLayer[xIndex].push(undefined);
        }
      }
      yield Neutralino.events.on("CONTAINER_LIST", data => {
        //Generate Containers in random places in boundaries
        Object.values(_this.currentContainerCoords).forEach(coords => {
          _this.midTileLayer[coords.ROW][coords.COL] = undefined;
        });
        _this.currentContainerCoords = {};
        if (data.detail.length === 0) return;
        _this.createContainersInBoundaries(data.detail);
      });
      yield Neutralino.extensions.dispatch("js.neutralino.sampleextension", "GET_CONTAINER_LIST", undefined);
      yield Neutralino.events.on("NEW_CONTAINER", data => {
        //Generate Containers in random places in boundaries
        if (!data.detail) return;
        _this.createContainersInBoundaries([data.detail]);
      });
      yield Neutralino.events.on("CONTAINER_UPDATE", data => {
        const targetContainerCoords = _this.currentContainerCoords[data.detail.id];
        if (!targetContainerCoords) return;
        let targetContainer = _this.midTileLayer[targetContainerCoords.ROW][targetContainerCoords.COL];
        if (!targetContainer) return;
        targetContainer.state = data.detail.state;
        targetContainer.status = data.detail.status;
      });
      yield Neutralino.events.on("REMOVE_CONTAINER", data => {
        const containerCoords = _this.currentContainerCoords[data.detail];
        if (!containerCoords) return;
        _this.connections = _this.connections.filter(c => c.from !== data.detail && c.to !== data.detail);
        _this.midTileLayer[containerCoords.ROW][containerCoords.COL] = undefined;
        delete _this.currentContainerCoords[data.detail];
      });
      yield Neutralino.events.on("NETWORK_LIST", data => {
        data.detail.forEach(n => {
          const index = _this.networks.findIndex(n => n.name === n.name);
          if (index !== -1) {
            const newContainerInNetwork = n.containers.filter(c => !Object.keys(_this.networks[index].containers).includes(c));
            let containerPairs = [];
            if (newContainerInNetwork.length === 0) return;
            for (let index = 0; index < n.containers.length; index++) {
              const firstElement = n.containers[index];
              for (let secondIndex = 0; secondIndex < newContainerInNetwork.length; secondIndex++) {
                const secondElement = newContainerInNetwork[secondIndex];
                if (firstElement === secondElement) continue;
                containerPairs.push({
                  firstContainer: firstElement,
                  secondContainer: secondElement
                });
              }
            }
            _this.networks[index].containers = n.containers.reduce((map, id) => {
              map[id] = _this.currentContainerCoords[id];
              return map;
            }, {});
            _this.createNetworkConnection(n.name, containerPairs);
          } else {
            _this.networks.push({
              name: n.name,
              containers: n.containers.reduce((map, id) => {
                map[id] = _this.currentContainerCoords[id];
                return map;
              }, {})
            });
            const containerPairs = [];
            for (let index = 0; index < n.containers.length; index++) {
              const firstElement = n.containers[index];
              for (let secondIndex = 0; secondIndex < n.containers.length; secondIndex++) {
                const secondElement = n.containers[secondIndex];
                if (index === secondIndex) continue;
                if (containerPairs.findIndex(cp => cp.firstContainer === secondElement && cp.secondContainer === firstElement) > -1) continue;
                containerPairs.push({
                  firstContainer: firstElement,
                  secondContainer: secondElement
                });
              }
            }
            _this.createNetworkConnection(n.name, containerPairs);
          }
        });
      });
    })();
  }
  addContainer(row, col, container) {
    let entity;
    entity = {
      ...container,
      icon: CONTAINER_IMAGE
    };
    this.midTileLayer[row][col] = entity;
  }
  getVisibleTiles() {
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
      if (rowBoudings.top >= -15 && rowBoudings.bottom <= (mapBoundings.bottom < 0 ? mapBoundings.height + mapBoundings.bottom : mapBoundings.bottom) + 15) {
        if (!firstVisibleRow) {
          firstVisibleRow = row;
          firstVisibleRowIndex = index;
        }
      }
      // If the child is outside the viewport
      else {
        if (!firstVisibleRow) continue;
        if (!lastVisibleRowIndex) {
          lastVisibleRowIndex = index - 1;
          break;
        }
      }
    }
    if (!firstVisibleRow) return undefined;
    for (let index = 0; index < firstVisibleRow.children.length; index++) {
      const tile = firstVisibleRow.children[index];
      const tileBoudings = tile.getBoundingClientRect();
      if (tileBoudings.left >= 0 && tileBoudings.right <= (mapBoundings.right < 0 ? mapBoundings.width + mapBoundings.left : mapBoundings.width - 16)) {
        if (firstVisibleColIndex === undefined) firstVisibleColIndex = index;
      } else {
        if (firstVisibleColIndex === undefined) continue;
        if (!lastVisibleColIndex) lastVisibleColIndex = index;
        break;
      }
    }
    return {
      firstVisibleColIndex: firstVisibleColIndex ?? 0,
      firstVisibleRowIndex: firstVisibleRowIndex ?? 0,
      lastVisibleColIndex: lastVisibleColIndex ?? 0,
      lastVisibleRowIndex: lastVisibleRowIndex ?? 0
    };
  }
  createContainersInBoundaries(services) {
    let result = [];
    const visibleTileBoundaries = this.getVisibleTiles();
    if (!visibleTileBoundaries) return [];
    const centerRow = Math.floor((visibleTileBoundaries.firstVisibleRowIndex ?? 0) + (visibleTileBoundaries.lastVisibleRowIndex ?? 0) / 2);
    const centerCol = Math.floor((visibleTileBoundaries.firstVisibleColIndex ?? 0) + (visibleTileBoundaries.lastVisibleColIndex ?? 0) / 2);
    let radius = 3;
    let maxRow = centerRow + radius;
    let maxCol = centerCol + radius;
    let minRow = centerRow - radius;
    let minCol = centerCol - radius;
    let randomRow = 0;
    let randomCol = 0;
    services.forEach(value => {
      do {
        randomRow = Math.floor(Math.random() * (maxRow - minRow + 1)) + minRow;
        randomCol = Math.floor(Math.random() * (maxCol - minCol + 1)) + minCol;
      } while (this.midTileLayer[randomRow][randomCol]);
      this.addContainer(randomRow, randomCol, value);
      this.currentContainerCoords[value.id] = {
        ROW: randomRow,
        COL: randomCol
      };
      ++radius;
    });
    return result;
  }
  createNetworkConnection(networkName, containerPairs) {
    for (let index = 0; index < containerPairs.length; index++) {
      const newConn = containerPairs[index];
      const firstDOM = this.getDOMElementFromCoords(this.currentContainerCoords[newConn.firstContainer]);
      if (!firstDOM) continue;
      const secondDOM = this.getDOMElementFromCoords(this.currentContainerCoords[newConn.secondContainer]);
      if (!secondDOM) continue;
      const firstBounds = firstDOM.getBoundingClientRect();
      const secondBounds = secondDOM.getBoundingClientRect();
      this.connections.push({
        name: networkName,
        from: newConn.firstContainer,
        to: newConn.secondContainer,
        x1: firstBounds.x + 32,
        x2: secondBounds.x + 32,
        y1: firstBounds.y + 16,
        y2: secondBounds.y + 16,
        isHovered: false
      });
    }
  }
  getDOMElementFromCoords(coords) {
    return document.getElementById(coords.ROW.toString() + coords.COL.toString());
  }
  entitySelected(event, rowIndex, colIndex) {
    const entity = this.midTileLayer[rowIndex][colIndex];
    if (!entity) return;
    this.isContainerDialogVisible = true;
    this.selectedContainer = entity;
    event.stopPropagation();
  }
  baseSelected() {
    console.log("BASE");
  }
  mouseLeaveConnection(connection) {
    this.connections.forEach(c => {
      c.isHovered = false;
    });
    this.tooltip = undefined;
  }
  mouseEnterConnection(connection, element) {
    this.connections.forEach(c => {
      if (c.name === connection.name) c.isHovered = true;
    });
    const elementBounds = element.getBoundingClientRect();
    this.tooltip = {
      content: connection.name,
      left: elementBounds.left - 20 + elementBounds.width / 2,
      top: elementBounds.top + elementBounds.height / 2
    };
  }
  mouseLeaveContainer(container) {
    if (!container) return;
    this.tooltip = undefined;
  }
  mouseEnterContainer(container, element) {
    if (!container) return;
    this.tooltip = {
      content: container.name,
      left: element.getBoundingClientRect().left,
      top: element.getBoundingClientRect().top
    };
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
      }
    },
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 4,
    consts: [[1, "w-screen", "h-screen", "flex", "flex-col", "overflow-visible", "relative"], ["map", ""], [1, "absolute", "w-screen", "h-screen", "z-20", "pointer-events-none"], ["class", "pixel-border bg-gray-100 p-1 min-w-[100px] z-20 flex justify-center text-zinc-900 absolute", 3, "top", "left"], [3, "isVisible", "isVisibleChange"], [3, "container", "isVisible", "isVisibleChange"], [1, "w-full", "h-full", "flex"], [1, "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-black", "hover:bg-green-200", "bg-green-300", "relative", 3, "id", "click"], ["class", "aspect-square w-[64px] h-[64px] flex items-center justify-center text-white absolute z-10", 3, "background-image"], [1, "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-white", "absolute", "z-10", 3, "click", "mouseenter", "mouseleave"], ["cell", ""], ["class", " aspect-square w-[64px] h-[64px] flex items-center justify-center text-black hover:bg-green-200 bg-green-300  relative", 3, "id"], ["stroke-width", "4px", 1, "pointer-events-auto", 3, "mouseenter", "mouseleave"], ["conn", ""], [1, "pixel-border", "bg-gray-100", "p-1", "min-w-[100px]", "z-20", "flex", "justify-center", "text-zinc-900", "absolute"], [1, "text-xl"], ["class", "w-full h-full flex"], ["class", "pointer-events-auto", "stroke-width", "4px"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "drag-scroll")(1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](3, AppComponent_For_4_Template, 3, 0, "div", 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](6, AppComponent_For_7_Template, 2, 5, ":svg:line", 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AppComponent_Conditional_8_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-command-palette", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisibleChange", function AppComponent_Template_app_command_palette_isVisibleChange_9_listener($event) {
          return ctx.isCommandPaletteVisible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-container-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisibleChange", function AppComponent_Template_app_container_dialog_isVisibleChange_10_listener($event) {
          return ctx.isContainerDialogVisible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](3, ctx.baseTileLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](6, ctx.connections);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](8, ctx.tooltip ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isVisible", ctx.isCommandPaletteVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("container", ctx.selectedContainer)("isVisible", ctx.isContainerDialogVisible);
      }
    },
    dependencies: [ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__.DragScrollModule, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__.DragScrollComponent, _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__.ContainerStateToColorPipe, _partials_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ContainerDialogComponent, _partials_command_palette_command_palette_component__WEBPACK_IMPORTED_MODULE_3__.CommandPaletteComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 850);

const appConfig = {
  providers: [(0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_0__.provideAnimationsAsync)()]
};

/***/ }),

/***/ 5233:
/*!*************************************!*\
  !*** ./src/app/models/Container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerState: () => (/* binding */ ContainerState)
/* harmony export */ });
var ContainerState;
(function (ContainerState) {
  ContainerState["RUNNING"] = "running";
  ContainerState["CREATED"] = "created";
  ContainerState["RESTARTING"] = "restarting";
  ContainerState["EXITED"] = "exited";
  ContainerState["PAUSED"] = "paused";
  ContainerState["DEAD"] = "dead";
})(ContainerState || (ContainerState = {}));

/***/ }),

/***/ 530:
/*!***********************************************************************!*\
  !*** ./src/app/partials/command-palette/command-palette.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandPaletteComponent: () => (/* binding */ CommandPaletteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


function CommandPaletteComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 3)(3, "li", 4)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "start \"name\" => Start a container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "stop \"name\" => Stop a running container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "pause \"name\" => Pause a running container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "remove \"name\" => Destroy a stopped container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class CommandPaletteComponent {
  constructor() {
    this.isVisible = false;
    this.isVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CommandPaletteComponent_Factory(t) {
    return new (t || CommandPaletteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CommandPaletteComponent,
    selectors: [["app-command-palette"]],
    inputs: {
      isVisible: "isVisible"
    },
    outputs: {
      isVisibleChange: "isVisibleChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 1,
    consts: [[1, "absolute", "top-5", "right-5", "rounded-md", "bg-black", "w-[42px]", "h-[42px]", "flex", "flex-col", "text-white", "justify-center", "items-center", "text-3xl", "font-bold", "leading-[10px]", 3, "click"], ["class", "absolute z-30 bottom-5 rounded-md left-0 w-full h-48 bg-black flex flex-col justify-end  p-3"], [1, "absolute", "z-30", "bottom-5", "rounded-md", "left-0", "w-full", "h-48", "bg-black", "flex", "flex-col", "justify-end", "p-3"], [1, "text-white", "px-3"], [1, "text-2xl"], [1, "flex"], [1, "text-2xl", "text-white"], ["autofocus", "true", 1, "w-full", "bg-black", "text-white", "text-2xl", "outline-none", "px-5"], ["commandInput", ""]],
    template: function CommandPaletteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandPaletteComponent_Template_button_click_0_listener() {
          return ctx.isVisible = !ctx.isVisible;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommandPaletteComponent_Conditional_5_Template, 20, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](5, ctx.isVisible ? 5 : -1);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 826:
/*!*************************************************************************!*\
  !*** ./src/app/partials/container-dialog/container-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerDialogComponent: () => (/* binding */ ContainerDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/state-to-color.pipe */ 9709);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 501);




function ContainerDialogComponent_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", port_r9.privatePort, " : ", port_r9.publicPort, "");
  }
}
function ContainerDialogComponent_Conditional_0_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No ports exposed :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mount_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", mount_r12.destination, " : ", mount_r12.source, "");
  }
}
function ContainerDialogComponent_Conditional_0_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No mounts :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContainerDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContainerDialogComponent_Conditional_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ports:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](19, ContainerDialogComponent_Conditional_0_For_20_Template, 2, 2, "span", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"], false, ContainerDialogComponent_Conditional_0_ForEmpty_21_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Mounts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](24, ContainerDialogComponent_Conditional_0_For_25_Template, 2, 2, "span", 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"], false, ContainerDialogComponent_Conditional_0_ForEmpty_26_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ContainerDialogComponent_Conditional_0_Conditional_28_Template, 2, 0, "button", 11)(29, ContainerDialogComponent_Conditional_0_Conditional_29_Template, 2, 0, "button", 11)(30, ContainerDialogComponent_Conditional_0_Conditional_30_Template, 2, 0, "button", 12)(31, ContainerDialogComponent_Conditional_0_Conditional_31_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slideInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("pixel-border w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, ctx_r0.container.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.container.state, " (", ctx_r0.container.status, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.container.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.container.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](19, ctx_r0.container.ports);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](24, ctx_r0.container.mounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](28, ctx_r0.container.state === "paused" ? 28 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](29, ctx_r0.container.state === "running" ? 29 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](30, ctx_r0.container.state === "running" || ctx_r0.container.state === "paused" ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](31, ctx_r0.container.state === "exited" ? 31 : -1);
  }
}
class ContainerDialogComponent {
  constructor() {
    this.isVisible = false;
    this.isVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  closeDialog() {
    this.isVisibleChange.emit(false);
  }
  static #_ = this.ɵfac = function ContainerDialogComponent_Factory(t) {
    return new (t || ContainerDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContainerDialogComponent,
    selectors: [["app-container-dialog"]],
    inputs: {
      container: "container",
      isVisible: "isVisible"
    },
    outputs: {
      isVisibleChange: "isVisibleChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "pixel-border absolute top-0 left-0 w-2/4 h-full bg-sky-200 z-30"], [1, "pixel-border", "absolute", "top-0", "left-0", "w-2/4", "h-full", "bg-sky-200", "z-30"], [1, "flex", "flex-col", "h-full"], [1, "h-16", "w-full", "flex", "justify-between", "items-center", "px-6"], [1, "flex", "gap-x-5", "items-center"], [1, "text-2xl"], [1, "base-button", "w-8", "h-8", 3, "click"], [1, "flex-1", "flex-col", "flex", "gap-y-3", "px-5"], [1, "text-3xl"], ["placeholder", "Awesome Container", "readonly", "", 1, "pixel-border", "base-input", 3, "value"], [1, "flex", "justify-end", "items-center", "gap-x-8", "pe-6", "h-20", "w-full"], ["class", "base-button bg-yellow-200 border-yellow-500"], ["class", "base-button bg-red-200 border-red-500"], ["class", "base-button bg-green-400"], [1, "base-button", "bg-yellow-200", "border-yellow-500"], [1, "base-button", "bg-red-200", "border-red-500"], [1, "base-button", "bg-green-400"], ["class", "text-2xl"]],
    template: function ContainerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContainerDialogComponent_Conditional_0_Template, 32, 15, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.isVisible ? 0 : -1);
      }
    },
    dependencies: [_pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_0__.ContainerStateToColorPipe],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        transform: "translateX(-100%)"
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('150ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        transform: 0
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('150ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        transform: "translateX(-100%)"
      }))])])]
    }
  });
}

/***/ }),

/***/ 9709:
/*!**********************************************!*\
  !*** ./src/app/pipes/state-to-color.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerStateToColorPipe: () => (/* binding */ ContainerStateToColorPipe)
/* harmony export */ });
/* harmony import */ var _models_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Container */ 5233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ContainerStateToColorPipe {
  transform(value) {
    if (!value) return "";
    switch (value) {
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.CREATED:
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.RUNNING:
        return "bg-green-400";
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.PAUSED:
        return "bg-yellow-400";
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.RESTARTING:
        return "bg-blue-400";
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.DEAD:
        return "bg-white";
      case _models_Container__WEBPACK_IMPORTED_MODULE_0__.ContainerState.EXITED:
        return "bg-red-400";
    }
  }
  static #_ = this.ɵfac = function ContainerStateToColorPipe_Factory(t) {
    return new (t || ContainerStateToColorPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "stateToColor",
    type: ContainerStateToColorPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.config */ 7110);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6401);



Neutralino.init();
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map