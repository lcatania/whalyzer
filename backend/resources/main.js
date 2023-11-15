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
/* harmony import */ var _home_lolo_Projects_docky_docky_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-drag-scroll */ 9594);
/* harmony import */ var _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/state-to-color.pipe */ 9709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const _c0 = ["map"];
function AppComponent_For_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Conditional_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const colIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.entitySelected($event, rowIndex_r4, colIndex_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colIndex_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + (ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8] == null ? null : ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8].icon) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("pixel-border absolute top-0 right-2 w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8] == null ? null : ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8].state));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8] == null ? null : ctx_r10.midTileLayer[rowIndex_r4][colIndex_r8].name, " ");
  }
}
function AppComponent_For_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.baseSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_For_4_For_2_Conditional_1_Template, 5, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIndex_r8 = ctx.$index;
    const rowIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r6.midTileLayer[rowIndex_r4][colIndex_r8] ? 1 : -1);
  }
}
function AppComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, AppComponent_For_4_For_2_Template, 2, 1, "div", 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](1, row_r3);
  }
}
function AppComponent_Conditional_5_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", port_r24.privatePort, " : ", port_r24.publicPort, "");
  }
}
function AppComponent_Conditional_5_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No ports exposed :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_Conditional_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mount_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", mount_r27.destination, " : ", mount_r27.source, "");
  }
}
function AppComponent_Conditional_5_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No mounts :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Conditional_5_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.dismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 15)(11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ports:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](19, AppComponent_Conditional_5_For_20_Template, 2, 2, "span", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"], false, AppComponent_Conditional_5_ForEmpty_21_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Mounts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](24, AppComponent_Conditional_5_For_25_Template, 2, 2, "span", 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"], false, AppComponent_Conditional_5_ForEmpty_26_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("pixel-border w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx_r2.selectedContainer.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.selectedContainer.state, " (", ctx_r2.selectedContainer.status, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.selectedContainer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.selectedContainer.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](19, ctx_r2.selectedContainer.ports);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](24, ctx_r2.selectedContainer.mounts);
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
    this.isCreateContainerModalVisible = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_lolo_Projects_docky_docky_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        _this.midTileLayer[containerCoords.ROW][containerCoords.COL] = undefined;
        delete _this.currentContainerCoords[data.detail];
      });
      yield Neutralino.events.on("NETWORK_LIST", data => {});
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
  dismissModal() {
    this.isCreateContainerModalVisible = false;
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
  entitySelected(event, rowIndex, colIndex) {
    const entity = this.midTileLayer[rowIndex][colIndex];
    if (this.isContainer(entity)) {
      this.isCreateContainerModalVisible = true;
      this.selectedContainer = entity;
    }
    event.stopPropagation();
  }
  isContainer(entity) {
    if (!entity || !("image" in entity)) return false;
    return true;
  }
  baseSelected() {
    return (0,_home_lolo_Projects_docky_docky_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("BASE");
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 1,
    consts: [[1, "w-screen", "h-screen", "flex", "flex-col", "overflow-visible"], ["map", ""], ["class", "pixel-border absolute top-0 left-0 w-2/4 h-full bg-sky-200 z-30"], [1, "w-full", "h-full", "flex"], [1, "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-black", "hover:bg-green-200", "bg-green-300", "relative", 3, "click"], ["class", "group aspect-square w-[64px] h-[64px] flex items-center justify-center text-white absolute z-10", 3, "background-image"], [1, "group", "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-white", "absolute", "z-10", 3, "click"], [1, "group-hover:opacity-100", "pixel-border", "bg-gray-100", "p-1", "min-w-[100px]", "flex", "justify-center", "text-zinc-900", "opacity-0", "transition-opacity", "absolute", "-top-10"], ["class", " aspect-square w-[64px] h-[64px] flex items-center justify-center text-black hover:bg-green-200 bg-green-300  relative"], [1, "pixel-border", "absolute", "top-0", "left-0", "w-2/4", "h-full", "bg-sky-200", "z-30"], [1, "flex", "flex-col", "h-full"], [1, "h-16", "w-full", "flex", "justify-between", "items-center", "px-6"], [1, "flex", "gap-x-5", "items-center"], [1, "text-2xl"], [1, "base-button", "w-8", "h-8", 3, "click"], [1, "flex-1", "flex-col", "flex", "gap-y-3", "px-5"], [1, "text-3xl"], ["placeholder", "Awesome Container", "readonly", "", 1, "pixel-border", "base-input", 3, "value"], [1, "flex", "justify-end", "items-center", "gap-x-8", "pe-6", "h-20", "w-full"], ["class", "text-2xl"], ["class", "w-full h-full flex"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "drag-scroll")(1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](3, AppComponent_For_4_Template, 3, 0, "div", 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_Conditional_5_Template, 28, 10, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](3, ctx.baseTileLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](5, ctx.isCreateContainerModalVisible ? 5 : -1);
      }
    },
    dependencies: [ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__.DragScrollModule, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__.DragScrollComponent, _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__.ContainerStateToColorPipe],
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
const appConfig = {
  providers: []
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