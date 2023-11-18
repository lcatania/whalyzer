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
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-drag-scroll */ 9594);
/* harmony import */ var _pipes_state_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/state-to-color.pipe */ 9709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const _c0 = ["map"];
function AppComponent_For_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Conditional_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const colIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const rowIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.entitySelected($event, rowIndex_r7, colIndex_r11));
    })("mouseenter", function AppComponent_For_4_For_2_Conditional_1_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
      const colIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const rowIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.mouseEnterContainer(ctx_r19.midTileLayer[rowIndex_r7][colIndex_r11], _r14));
    })("mouseleave", function AppComponent_For_4_For_2_Conditional_1_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const colIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const rowIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.mouseLeaveContainer(ctx_r22.midTileLayer[rowIndex_r7][colIndex_r11]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIndex_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const rowIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + (ctx_r13.midTileLayer[rowIndex_r7][colIndex_r11] == null ? null : ctx_r13.midTileLayer[rowIndex_r7][colIndex_r11].icon) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("pixel-border absolute top-0 right-2 w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r13.midTileLayer[rowIndex_r7][colIndex_r11] == null ? null : ctx_r13.midTileLayer[rowIndex_r7][colIndex_r11].state));
  }
}
function AppComponent_For_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_For_4_For_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.baseSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_For_4_For_2_Conditional_1_Template, 4, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIndex_r11 = ctx.$index;
    const rowIndex_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", rowIndex_r7.toString() + colIndex_r11.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r9.midTileLayer[rowIndex_r7][colIndex_r11] ? 1 : -1);
  }
}
function AppComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, AppComponent_For_4_For_2_Template, 2, 2, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](1, row_r6);
  }
}
function AppComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "line", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function AppComponent_For_7_Template__svg_line_mouseenter_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const connection_r30 = restoredCtx.$implicit;
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.mouseEnterConnection(connection_r30, _r33));
    })("mouseleave", function AppComponent_For_7_Template__svg_line_mouseleave_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const connection_r30 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.mouseLeaveConnection(connection_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const connection_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("x1", connection_r30.x1)("y1", connection_r30.y1)("x2", connection_r30.x2)("y2", connection_r30.y2)("stroke", connection_r30.isHovered ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("x1", connection_r30.x1)("y1", connection_r30.y1)("x2", connection_r30.x2)("y2", connection_r30.y2);
  }
}
function AppComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r3.hoveredContainer.top - 20 + "px")("left", ctx_r3.hoveredContainer.left - 20 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.hoveredContainer.name);
  }
}
function AppComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r4.hoveredConnection.top - 20 + "px")("left", ctx_r4.hoveredConnection.left - 20 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.hoveredConnection.name);
  }
}
function AppComponent_Conditional_10_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const port_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", port_r41.privatePort, " : ", port_r41.publicPort, "");
  }
}
function AppComponent_Conditional_10_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No ports exposed :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_Conditional_10_For_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mount_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", mount_r44.destination, " : ", mount_r44.source, "");
  }
}
function AppComponent_Conditional_10_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No mounts :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "stateToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Conditional_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.dismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 22)(11, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ports:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](19, AppComponent_Conditional_10_For_20_Template, 2, 2, "span", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"], false, AppComponent_Conditional_10_ForEmpty_21_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Mounts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](24, AppComponent_Conditional_10_For_25_Template, 2, 2, "span", 27, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"], false, AppComponent_Conditional_10_ForEmpty_26_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 25)(28, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("pixel-border w-[10px] h-[10px] " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx_r5.selectedContainer.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r5.selectedContainer.state, " (", ctx_r5.selectedContainer.status, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r5.selectedContainer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r5.selectedContainer.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](19, ctx_r5.selectedContainer.ports);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](24, ctx_r5.selectedContainer.mounts);
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
    this.isCreateContainerModalVisible = false;
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
    this.isCreateContainerModalVisible = true;
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
    this.hoveredContainer = undefined;
    this.hoveredConnection = undefined;
  }
  mouseEnterConnection(connection, element) {
    this.connections.forEach(c => {
      if (c.name === connection.name) c.isHovered = true;
    });
    const elementBounds = element.getBoundingClientRect();
    this.hoveredConnection = {
      name: connection.name,
      left: elementBounds.left - 20 + elementBounds.width / 2,
      top: elementBounds.top + elementBounds.height / 2
    };
  }
  mouseLeaveContainer(container) {
    if (!container) return;
    this.hoveredConnection = undefined;
    this.hoveredConnection = undefined;
  }
  mouseEnterContainer(container, element) {
    if (!container) return;
    this.hoveredContainer = {
      name: container.name,
      left: element.getBoundingClientRect().left,
      top: element.getBoundingClientRect().top
    };
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
    decls: 11,
    vars: 3,
    consts: [[1, "w-screen", "h-screen", "flex", "flex-col", "overflow-visible"], ["map", ""], [1, "absolute", "w-screen", "h-screen", "z-20", "pointer-events-none"], ["class", "pixel-border bg-gray-100 p-1 min-w-[100px] z-20 flex justify-center text-zinc-900 absolute", 3, "top", "left"], ["class", "pixel-border absolute top-0 left-0 w-2/4 h-full bg-sky-200 z-30"], [1, "w-full", "h-full", "flex"], [1, "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-black", "hover:bg-green-200", "bg-green-300", "relative", 3, "id", "click"], ["class", "aspect-square w-[64px] h-[64px] flex items-center justify-center text-white absolute z-10", 3, "background-image"], [1, "aspect-square", "w-[64px]", "h-[64px]", "flex", "items-center", "justify-center", "text-white", "absolute", "z-10", 3, "click", "mouseenter", "mouseleave"], ["cell", ""], ["class", " aspect-square w-[64px] h-[64px] flex items-center justify-center text-black hover:bg-green-200 bg-green-300  relative", 3, "id"], ["stroke-width", "4px"], ["stroke-width", "50px", "stroke", "transparent", 1, "pointer-events-auto", 3, "mouseenter", "mouseleave"], ["conn", ""], [1, "pixel-border", "bg-gray-100", "p-1", "min-w-[100px]", "z-20", "flex", "justify-center", "text-zinc-900", "absolute"], [1, "text-xl"], [1, "pixel-border", "absolute", "top-0", "left-0", "w-2/4", "h-full", "bg-sky-200", "z-30"], [1, "flex", "flex-col", "h-full"], [1, "h-16", "w-full", "flex", "justify-between", "items-center", "px-6"], [1, "flex", "gap-x-5", "items-center"], [1, "text-2xl"], [1, "base-button", "w-8", "h-8", 3, "click"], [1, "flex-1", "flex-col", "flex", "gap-y-3", "px-5"], [1, "text-3xl"], ["placeholder", "Awesome Container", "readonly", "", 1, "pixel-border", "base-input", 3, "value"], [1, "flex", "justify-end", "items-center", "gap-x-8", "pe-6", "h-20", "w-full"], [1, "base-button"], ["class", "text-2xl"], ["class", "w-full h-full flex"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "drag-scroll")(1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](3, AppComponent_For_4_Template, 3, 0, "div", 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](6, AppComponent_For_7_Template, 3, 9, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_Conditional_8_Template, 3, 5, "div", 3)(9, AppComponent_Conditional_9_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppComponent_Conditional_10_Template, 30, 10, "div", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](3, ctx.baseTileLayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](6, ctx.connections);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](8, ctx.hoveredContainer ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](9, ctx.hoveredConnection ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](10, ctx.isCreateContainerModalVisible ? 10 : -1);
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