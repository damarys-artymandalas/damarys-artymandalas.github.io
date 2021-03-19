(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\damarys\src\main.ts */"zUnb");


/***/ }),

/***/ "23ro":
/*!***************************************************!*\
  !*** ./src/app/servicos/tarot/tarot.component.ts ***!
  \***************************************************/
/*! exports provided: TarotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarotComponent", function() { return TarotComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entidades/Card.Mini.Entidade */ "J7wA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../card-youtube/card-youtube.component */ "Ij8Q");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../card/card.component */ "mJ8H");








function TarotComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx_r0.cardLayout == null ? null : ctx_r0.cardLayout.chart.cols)("rowspan", ctx_r0.cardLayout == null ? null : ctx_r0.cardLayout.chart.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titulo", card_r1.Titulo)("subtitulo", card_r1.SubTitulo)("imagem", card_r1.Imagem)("descricao", card_r1.Descricao);
} }
class TarotComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.urlYoutube = 'https://www.youtube.com/embed/H7JCj9SlAiU';
        this.cardLayout = {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 2 },
            table: { cols: 1, rows: 4 },
        };
    }
    ngOnInit() {
        this.urlYoutube = 'https://www.youtube.com/embed/H7JCj9SlAiU';
        this.miniCards = [];
        this.miniCards.push(_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__["MiniCard"].ObterCardContato());
        this.miniCards.push(_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__["MiniCard"].ObterCardTaro());
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small] || state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                this.cardLayout = {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 1 },
                    table: { cols: 1, rows: 6 },
                };
            }
            else if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium]) {
                this.cardLayout = {
                    columns: 4,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 4, rows: 1 },
                    table: { cols: 4, rows: 6 },
                };
            }
            else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
                this.cardLayout = {
                    columns: 2,
                    miniCard: { cols: 1, rows: 2 },
                    chart: { cols: 1, rows: 1 },
                    table: { cols: 2, rows: 6 },
                };
            }
        });
    }
}
TarotComponent.ɵfac = function TarotComponent_Factory(t) { return new (t || TarotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
TarotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TarotComponent, selectors: [["app-tarot"]], decls: 7, vars: 7, consts: [[1, "grid-container"], ["rowHeight", "250px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [3, "url", "titulo", "subtitulo", "imagem", "descricao"], [3, "titulo", "subtitulo", "imagem", "descricao"]], template: function TarotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TarotComponent_mat_grid_tile_2_Template, 4, 6, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-card-youtube", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Chart Content Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx.cardLayout == null ? null : ctx.cardLayout.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.miniCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx.cardLayout == null ? null : ctx.cardLayout.table.cols)("rowspan", ctx.cardLayout == null ? null : ctx.cardLayout.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", ctx.urlYoutube)("titulo", "Astrologia em forma de Arte")("subtitulo", "#Tarot #OSegredo");
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_5__["CardYoutubeComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: [".grid-container {\r\n    margin: 20px;\r\n  }\r\n  \r\n  .dashboard-card {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n  \r\n  .more-button {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .dashboard-card-content {\r\n    text-align: center;\r\n  }\r\n  \r\n  a:link{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:visited{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:hover{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:active{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcm90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYOztFQUVBO0lBQ0Esb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWDs7RUFFQTtJQUNBLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1g7O0VBRUE7SUFDQSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYIiwiZmlsZSI6InRhcm90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubW9yZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBhOmxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOnZpc2l0ZWR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTphY3RpdmV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "8JZr":
/*!*************************************************************!*\
  !*** ./src/app/servicos/mapaastral/mapaastral.component.ts ***!
  \*************************************************************/
/*! exports provided: MapaastralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaastralComponent", function() { return MapaastralComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entidades/Card.Mini.Entidade */ "J7wA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../card/card.component */ "mJ8H");








function MapaastralComponent_mat_grid_tile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 6, ctx_r0.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 8, ctx_r0.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", card_r1.Titulo)("subtitulo", card_r1.SubTitulo)("imagem", card_r1.Imagem)("descricao", card_r1.Descricao);
} }
class MapaastralComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.urlYoutube = 'https://www.youtube.com/embed/GkN8g2qlues';
        /** Based on the screen size, switch from standard to one column per row */
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    table: { cols: 1, rows: 2 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 2, rows: 1 },
                table: { cols: 2, rows: 2 },
            };
        }));
    }
    ngOnInit() {
        this.miniCardContato = [];
        this.miniCardContato.push(src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_2__["MiniCard"].ObterCardContato());
    }
}
MapaastralComponent.ɵfac = function MapaastralComponent_Factory(t) { return new (t || MapaastralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MapaastralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MapaastralComponent, selectors: [["app-mapaastral"]], decls: 4, vars: 4, consts: [[1, "grid-container"], ["rowHeight", "245px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [3, "titulo", "subtitulo", "imagem", "descricao"]], template: function MapaastralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MapaastralComponent_mat_grid_tile_3_Template, 6, 10, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.miniCardContato);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBhYXN0cmFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entidades/Card.Mini.Entidade */ "J7wA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card-youtube/card-youtube.component */ "Ij8Q");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");








function HomeComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx_r0.cardLayout == null ? null : ctx_r0.cardLayout.chart.cols)("rowspan", ctx_r0.cardLayout == null ? null : ctx_r0.cardLayout.chart.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titulo", card_r1.Titulo)("subtitulo", card_r1.SubTitulo)("imagem", card_r1.Imagem)("descricao", card_r1.Descricao);
} }
class HomeComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.urlYoutube = 'https://www.youtube.com/embed/H7JCj9SlAiU';
        this.cardLayout = {
            columns: 1,
            miniCard: { cols: 1, rows: 1 },
            chart: { cols: 1, rows: 2 },
            table: { cols: 1, rows: 4 },
        };
    }
    ngOnInit() {
        this.miniCards = [];
        this.miniCards.push(_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__["MiniCard"].ObterCardContato());
        this.miniCards.push(_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__["MiniCard"].ObterCardServicos());
        this.miniCards.push(_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_1__["MiniCard"].ObterCardProdutos());
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge
        ]).subscribe((state) => {
            if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small] || state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall]) {
                this.cardLayout = {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 1 },
                    table: { cols: 1, rows: 6 },
                };
            }
            else if (state.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium]) {
                this.cardLayout = {
                    columns: 4,
                    miniCard: { cols: 2, rows: 1 },
                    chart: { cols: 4, rows: 1 },
                    table: { cols: 4, rows: 6 },
                };
            }
            else { // (state.breakpoints[Breakpoints.XLarge] || state.breakpoints[Breakpoints.Large]) {
                this.cardLayout = {
                    columns: 3,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 1 },
                    table: { cols: 3, rows: 6 },
                };
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 7, consts: [[1, "grid-container"], ["rowHeight", "260px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [3, "url", "titulo", "subtitulo", "imagem", "descricao"], [3, "titulo", "subtitulo", "imagem", "descricao"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_mat_grid_tile_2_Template, 4, 6, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-card-youtube", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Chart Content Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", ctx.cardLayout == null ? null : ctx.cardLayout.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.miniCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", ctx.cardLayout == null ? null : ctx.cardLayout.table.cols)("rowspan", ctx.cardLayout == null ? null : ctx.cardLayout.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", ctx.urlYoutube)("titulo", "Astrologia em forma de Arte")("subtitulo", "#Dinheiro #OSegredo");
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_5__["CardYoutubeComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: [".grid-container {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\na:link{\r\n  text-decoration:none;\r\n  color:white;\r\n  }\r\n\r\na:visited{\r\n  text-decoration:none;\r\n  color:white;\r\n  }\r\n\r\na:hover{\r\n  text-decoration:none;\r\n  color:white;\r\n  }\r\n\r\na:active{\r\n  text-decoration:none;\r\n  color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1g7O0FBRUE7RUFDQSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYOztBQUVBO0VBQ0Esb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWDs7QUFFQTtFQUNBLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1giLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmE6bGlua3tcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgYTp2aXNpdGVke1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICBhOmFjdGl2ZXtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB9Il19 */"], encapsulation: 2 });


/***/ }),

/***/ "AYM4":
/*!***************************************************************!*\
  !*** ./src/app/servicos/constelacao/constelacao.component.ts ***!
  \***************************************************************/
/*! exports provided: ConstelacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstelacaoComponent", function() { return ConstelacaoComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/entidades/Card.Mini.Entidade */ "J7wA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../card-gallery/card-gallery.component */ "vtnr");
/* harmony import */ var _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../card-youtube/card-youtube.component */ "Ij8Q");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../card/card.component */ "mJ8H");











function ConstelacaoComponent_mat_grid_tile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx_r0.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 8, ctx_r0.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("titulo", card_r2.Titulo)("subtitulo", card_r2.SubTitulo)("imagem", card_r2.Imagem)("descricao", card_r2.Descricao);
} }
function ConstelacaoComponent_mat_grid_tile_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx_r1.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 8, ctx_r1.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("titulo", card_r3.Titulo)("subtitulo", card_r3.SubTitulo)("imagem", card_r3.Imagem)("descricao", card_r3.Descricao);
} }
class ConstelacaoComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.urlYoutube = 'https://www.youtube.com/embed/GkN8g2qlues';
        /** Based on the screen size, switch from standard to one column per row */
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    table: { cols: 1, rows: 2 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 2, rows: 1 },
                table: { cols: 2, rows: 2 },
            };
        }));
    }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/01.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/02.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/03.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/04.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/05.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '../../assets/imagens/Terapia/Constelacao/06.jpg', thumb: '../../assets/imagens/Terapia/Constelacao/06.jpg' }),
        ];
        this.miniCards = [];
        this.miniCards.push(src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_3__["MiniCard"].ObterCardConstelacaoPrincipal());
        this.miniCards.push(src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_3__["MiniCard"].ObterCardConstelacaoBonecos());
        this.miniCardContato = [];
        this.miniCardContato.push(src_app_entidades_Card_Mini_Entidade__WEBPACK_IMPORTED_MODULE_3__["MiniCard"].ObterCardContato());
    }
}
ConstelacaoComponent.ɵfac = function ConstelacaoComponent_Factory(t) { return new (t || ConstelacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
ConstelacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ConstelacaoComponent, selectors: [["app-constelacao"]], decls: 13, vars: 21, consts: [[1, "grid-container"], ["rowHeight", "245px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], ["title", "Card 9", 3, "images"], [3, "url", "titulo", "subtitulo", "imagem", "descricao"], [3, "titulo", "subtitulo", "imagem", "descricao"]], template: function ConstelacaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConstelacaoComponent_mat_grid_tile_3_Template, 6, 10, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-card-gallery", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-card-youtube", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ConstelacaoComponent_mat_grid_tile_12_Template, 6, 10, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 11, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.miniCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, ctx.cardLayout)) == null ? null : tmp_2_0.table.cols)("rowspan", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, ctx.cardLayout)) == null ? null : tmp_3_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 17, ctx.cardLayout)) == null ? null : tmp_5_0.table.cols)("rowspan", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 19, ctx.cardLayout)) == null ? null : tmp_6_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("url", ctx.urlYoutube)("titulo", "O que \u00E9 Constela\u00E7\u00E3o")("subtitulo", "#Dinheiro #OSegredo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.miniCardContato);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_7__["CardGalleryComponent"], _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_8__["CardYoutubeComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".grid-container {\r\n    margin: 20px;\r\n  }\r\n  \r\n  .dashboard-card {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n  \r\n  .more-button {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n  \r\n  .dashboard-card-content {\r\n    text-align: center;\r\n  }\r\n  \r\n  a:link{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:visited{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:hover{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n  \r\n  a:active{\r\n    text-decoration:none;\r\n    color:white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0ZWxhY2FvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYOztFQUVBO0lBQ0Esb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWDs7RUFFQTtJQUNBLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1g7O0VBRUE7SUFDQSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYIiwiZmlsZSI6ImNvbnN0ZWxhY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubW9yZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBhOmxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOnZpc2l0ZWR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTphY3RpdmV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgfSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ij8Q":
/*!********************************************************!*\
  !*** ./src/app/card-youtube/card-youtube.component.ts ***!
  \********************************************************/
/*! exports provided: CardYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardYoutubeComponent", function() { return CardYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CardYoutubeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardYoutubeComponent_mat_card_subtitle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitulo);
} }
class CardYoutubeComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    SubtituloExist() {
        if (this.subtitulo == undefined || this.subtitulo == null || this.subtitulo == '') {
            return false;
        }
        if (this.subtitulo.trim().length === 0) {
            return false;
        }
        return true;
    }
    ImagemExists() {
        if (this.imagem == undefined || this.imagem == null || this.imagem == '') {
            return false;
        }
        if (this.imagem.trim().length === 0) {
            return false;
        }
        return true;
    }
}
CardYoutubeComponent.ɵfac = function CardYoutubeComponent_Factory(t) { return new (t || CardYoutubeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
CardYoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardYoutubeComponent, selectors: [["app-card-youtube"]], inputs: { titulo: "titulo", subtitulo: "subtitulo", imagem: "imagem", descricao: "descricao", url: "url" }, decls: 8, vars: 4, consts: [[1, "dashboard-card"], ["id", "avatar", 4, "ngIf"], [4, "ngIf"], ["width", "100%", 3, "src"], ["id", "avatar"], ["mat-card-avatar", "", 3, "src"]], template: function CardYoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardYoutubeComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardYoutubeComponent_mat_card_subtitle_5_Template, 2, 1, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ImagemExists());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SubtituloExist());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.SafeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"]], styles: [".dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0.96;\r\n   }\r\n \r\n \r\n .dashboard-card-content[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    max-height: 100%;\r\n }\r\n \r\n \r\n mat-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    max-height: 530px;\r\n }\r\n \r\n \r\n mat-card-content[_ngcontent-%COMP%]{\r\n     height: 91%;\r\n }\r\n \r\n \r\n mat-card-header[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: row;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n }\r\n \r\n \r\n .mat-card-avatar[_ngcontent-%COMP%] {\r\n   height: 60px;\r\n   width: 60px; \r\n   border-radius: 50%;\r\n   align-items: flex flex-start;\r\n }\r\n \r\n \r\n iframe[_ngcontent-%COMP%]{\r\n     height: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQteW91dHViZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csa0JBQWtCO0lBQ2xCLGFBQWE7R0FDZDs7O0NBR0Y7SUFDRyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7OztDQUVBO0lBQ0csYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOzs7Q0FFQTtLQUNJLFdBQVc7Q0FDZjs7O0NBQ0E7R0FDRSxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLDhCQUE4QjtHQUM5QixtQkFBbUI7Q0FDckI7OztDQUVBO0dBQ0UsWUFBWTtHQUNaLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsNEJBQTRCO0NBQzlCOzs7Q0FFQTtLQUNJLFlBQVk7Q0FDaEIiLCJmaWxlIjoiY2FyZC15b3V0dWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuOTY7XHJcbiAgIH1cclxuIFxyXG4gXHJcbiAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiB9XHJcbiBcclxuIG1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNTMwcHg7XHJcbiB9XHJcbiBcclxuIG1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICAgaGVpZ2h0OiA5MSU7XHJcbiB9XHJcbiBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgIGhlaWdodDogNjBweDtcclxuICAgd2lkdGg6IDYwcHg7IFxyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIGFsaWduLWl0ZW1zOiBmbGV4IGZsZXgtc3RhcnQ7XHJcbiB9XHJcblxyXG4gaWZyYW1le1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuIH0iXX0= */"] });


/***/ }),

/***/ "J7wA":
/*!*************************************************!*\
  !*** ./src/app/entidades/Card.Mini.Entidade.ts ***!
  \*************************************************/
/*! exports provided: MiniCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCard", function() { return MiniCard; });
/* harmony import */ var _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.Entidade */ "n1m+");

class MiniCard {
    static ObterCardContato() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]('Entre em Contato, Tire Dúvidas e Agende!', 'Contatos:', './../assets/imagens/damarys1.jpg', `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: damarisc.reges@gmail.com<br>
         WhatsApp: <a style='color: #FFFFFF' target="_blank" href="https://api.whatsapp.com/send?phone=5562992188233&text=Ol%C3%A1,%20atrav%C3%A9s%20do%20site%20Damarys-Artymandalas%20encontrei%20seu%20contato.%20Pode%20me%20ajudar?">(62) 99218-8233</a> <br>  
         &nbsp;Instagram: <a style='color: #FFFFFF' target="_blank" href="https://www.instagram.com/damarys_artymandalas/"> @damarys_artymandalas</a><br>
         &nbsp;&nbsp;YoutTube: <a style='color: #FFFFFF' target="_blank" href="https://www.youtube.com/user/Damaris8648"> Damarys C. Reges</a><br>
         &nbsp;&nbsp;Telegram: <a style='color: #FFFFFF' target="_blank" href="https://t.me/joinchat/HJzs4lbcTA5gHpSX"> Astro Day</a><br>
        `);
    }
    static ObterCardProdutos() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]("Produtos", "Arte feita com muito amor e luz! Entregas para todo Brasil", './../assets/imagens/mandala_saojorge.png', `<li>Mandalas</li>
        <li>Japamalas</li>
        <li>Colares</li>
        <li>Conjuntos</li>
        `);
    }
    static ObterCardServicos() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]("Mapa Astral, Tarot, Constelação", "Desvendando o Inconciente...", './../assets/imagens/tarot.jpeg', `<p>Venha projetar seu <b>inconsciente</b> para analisar e interagir com o seu rico <b>mundo interior</b>. Definindo posições, hierarquias afim de ter uma vida próspera e equilibrada,
        baseando na sua pessoa <b>única</b> que você é!</p> 
        Fazendo isso através das cartas, constelações familiar, individual, Mapa Astral, etc...`);
    }
    static ObterCardConstelacaoPrincipal() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]("Constelação Sistêmica ou Familiar", "Entendendo os movimentos...", './../assets/imagens/Terapia/Constelacao/imagem.jpg', `<p>A constelação familiar é uma prática terapêutica que busca resolver conflitos <b>familiares</b> que atravessam gerações. 
        Num primeiro olhar, a técnica tem conteúdos parecidos aos do psicodrama, 
          por conta da dramatização de situações, e da psicoterapia breve, pela ação rápida</p> 
        Fazendo isso através das cartas, constelações familiar, individual, Mapa Astral, etc...`);
    }
    static ObterCardConstelacaoBonecos() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]("Constelação Sistêmica ou Familiar", "Alternativo...", './../assets/imagens/Terapia/Constelacao/imagem.jpg', `<p>Para quem tem vergonha, ou não consegue quantidade de pessoas para realizar o movimento existe a possibilidade de realizar através de bonecos (Playmobil).</p>`);
    }
    static ObterCardTaro() {
        return new _Card_Entidade__WEBPACK_IMPORTED_MODULE_0__["Card"]("Tarot", "pensamentos, palavras e atitudes...", './../assets/imagens/taro.jpg', `<p>"<i>O dedo aponta a lua, o sábio olha a lua, o tolo vê só o dedo.</i>” Provérbio chinês. </p>
            <p><b>Tarô</b> é um mapa de viagem, um caminho para o <b>autoconhecimento</b>, cujo objetivo é nos inspirar e ajudar a construir 
           um projeto de vida equilibrado para nós, para os que nos cercam; para a <b>humanidade</b> e para o <b>planeta</b>. 
           Ao abrir uma leitura de <b>Tarô</b> observamos o que está disponível e o que é percebido por nós, além do que temos 
           em <b>potencial</b> e ainda não conseguimos perceber. Apura nosso poder inato para promover mudanças de 
           <b>pensamentos, palavras e atitudes</b></p>`);
    }
    static LinkTaro() {
        return "https://youtu.be/H7JCj9SlAiU";
    }
    static LinkConstelacaoFamiliar() {
        return "https://youtu.be/GkN8g2qlues";
    }
}


/***/ }),

/***/ "KhvX":
/*!************************************************!*\
  !*** ./src/app/produtos/produtos.component.ts ***!
  \************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProdutosComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/01.jpg', thumb: '../../assets/imagens/Colar/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/02.jpg', thumb: '../../assets/imagens/Colar/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/03.jpg', thumb: '../../assets/imagens/Colar/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/04.jpg', thumb: '../../assets/imagens/Colar/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/05.jpg', thumb: '../../assets/imagens/Colar/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/06.jpg', thumb: '../../assets/imagens/Colar/06.jpg' }),
        ];
    }
}
ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) { return new (t || ProdutosComponent)(); };
ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProdutosComponent, selectors: [["app-produtos"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function ProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InByb2R1dG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "PCq5":
/*!***********************************************************!*\
  !*** ./src/app/produtos/pulseiras/pulseiras.component.ts ***!
  \***********************************************************/
/*! exports provided: PulseirasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseirasComponent", function() { return PulseirasComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PulseirasComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/01.jpg', thumb: '../../assets/imagens/pulseiras/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/02.jpg', thumb: '../../assets/imagens/pulseiras/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/03.jpg', thumb: '../../assets/imagens/pulseiras/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/04.jpg', thumb: '../../assets/imagens/pulseiras/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/05.jpg', thumb: '../../assets/imagens/pulseiras/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/pulseiras/06.jpg', thumb: '../../assets/imagens/pulseiras/06.jpg' })
            // ... more items
        ];
    }
}
PulseirasComponent.ɵfac = function PulseirasComponent_Factory(t) { return new (t || PulseirasComponent)(); };
PulseirasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PulseirasComponent, selectors: [["app-pulseiras"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function PulseirasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bHNlaXJhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJwdWxzZWlyYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImdhbGxlcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navegacao_navegacao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navegacao/navegacao.component */ "Yx6W");


class AppComponent {
    constructor() {
        this.title = 'Damarys Artymandalas';
        this.HomeTitle = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navegacao");
    } }, directives: [_navegacao_navegacao_component__WEBPACK_IMPORTED_MODULE_1__["NavegacaoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WYoS":
/*!************************************************!*\
  !*** ./src/app/servicos/servicos.component.ts ***!
  \************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../card/card.component */ "mJ8H");







function ServicosComponent_mat_grid_tile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Mini Card Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r0.cardLayout)) == null ? null : tmp_0_0.miniCard.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r0.cardLayout)) == null ? null : tmp_1_0.miniCard.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Card ", i_r2, "");
} }
function ServicosComponent_mat_grid_tile_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Chart Content Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r1.cardLayout)) == null ? null : tmp_0_0.chart.cols)("rowspan", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r1.cardLayout)) == null ? null : tmp_1_0.chart.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Card ", i_r3, "");
} }
const _c0 = function () { return [1, 2, 3, 4]; };
const _c1 = function () { return [5, 6, 7, 8]; };
class ServicosComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    chart: { cols: 1, rows: 2 },
                    table: { cols: 1, rows: 4 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 1, rows: 1 },
                chart: { cols: 2, rows: 1 },
                table: { cols: 4, rows: 3 },
            };
        }));
    }
}
ServicosComponent.ɵfac = function ServicosComponent_Factory(t) { return new (t || ServicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
ServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServicosComponent, selectors: [["app-servicos"]], decls: 11, vars: 13, consts: [[1, "grid-container"], ["rowHeight", "200px", 3, "cols"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], ["title", "Card 9"], [3, "title"]], template: function ServicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ServicosComponent_mat_grid_tile_3_Template, 6, 7, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Table Content Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ServicosComponent_mat_grid_tile_10_Template, 6, 7, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cols", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx.cardLayout)) == null ? null : tmp_0_0.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colspan", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, ctx.cardLayout)) == null ? null : tmp_2_0.table.cols)("rowspan", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, ctx.cardLayout)) == null ? null : tmp_3_0.table.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c1));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNvcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Yx6W":
/*!**************************************************!*\
  !*** ./src/app/navegacao/navegacao.component.ts ***!
  \**************************************************/
/*! exports provided: NavegacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegacaoComponent", function() { return NavegacaoComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















function NavegacaoComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.head);
} }
class NavegacaoComponent {
    constructor(breakpointObserver, sanitizer, http) {
        this.breakpointObserver = breakpointObserver;
        this.sanitizer = sanitizer;
        this.http = http;
        this.head = "";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.head = "Seja bem vindo!";
    }
    AtualizaCabecalho(valor) {
        this.head = valor;
    }
    coloque() {
        window.open("https://www.sadhana.com.br/ceu.htm", "coloque", "scrollbars=yes,width=560,height=400");
    }
    mostraceu() {
        let ceuref = document.location.href;
        let posic = ceuref.indexOf("sadhana.com.br");
        if (posic > 1) {
            ceuref = "";
        }
        ceuref = escape(ceuref);
        window.open("https://www.sadhana.com.br/cgi-local/mapas/mapanow.cgi?indic=39099&ref=" + ceuref, "mapa", "scrollbars=yes,width=670,height=530");
    }
}
NavegacaoComponent.ɵfac = function NavegacaoComponent_Factory(t) { return new (t || NavegacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NavegacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavegacaoComponent, selectors: [["app-navegacao"]], decls: 58, vars: 21, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", 3, "routerLink", "click"], ["mat-list-item", "", 3, "matMenuTriggerFor"], ["xPosition", "after"], ["menuServicos", "matMenu"], ["mat-menu-item", "", 3, "routerLink", "click"], ["mat-list-item", "", 3, "matMenuTriggerFor", "click"], ["afterMenu", "matMenu"], ["align", "center"], ["href", "#", 1, "fa", "fa-facebook"], ["target", "_blank", "href", "damarisc.reges@gmail.com", "name", "google", 1, "fa", "fa-google"], ["target", "_blank", "href", "https://www.youtube.com/user/Damaris8648", 1, "fa", "fa-youtube"], ["target", "_blank", "href", "https://www.instagram.com/day_astrologymdalas/", 1, "fa", "fa-instagram"], ["target", "_blank", "href", "https://api.whatsapp.com/send?phone=5562992188233&text=Ol%C3%A1,%20atrav%C3%A9s%20do%20site%20Damarys-Artymandalas%20encontrei%20seu%20contato.%20Pode%20me%20ajudar?", 1, "fa", "fa-whatsapp"], ["target", "_blank", "href", "https://t.me/joinchat/HJzs4lbcTA5gHpSX", 1, "fa", "fa-telegram"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["color", "primary"], ["mat-card-avatar", "", "src", "./../assets/imagens/damarys1.jpg"], [4, "ngIf"], ["mat-card-avatar", "", "src", "./../assets/imagens/damarys2.jpeg"]], template: function NavegacaoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_a_click_9_listener() { return ctx.AtualizaCabecalho("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "menu_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Servi\u00E7os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_17_listener() { return ctx.AtualizaCabecalho("Constela\u00E7\u00E3o"); })("click", function NavegacaoComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Constela\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_19_listener() { return ctx.AtualizaCabecalho("Tarot"); })("click", function NavegacaoComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Tarot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_21_listener() { return ctx.AtualizaCabecalho("Mapa Astral"); })("click", function NavegacaoComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Mapa Astral");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_a_click_23_listener() { return ctx.AtualizaCabecalho("Produtos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "menu_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Produtos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-menu", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_29_listener() { return ctx.AtualizaCabecalho("Mandalas"); })("click", function NavegacaoComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Mandalas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_31_listener() { return ctx.AtualizaCabecalho("Japamalas"); })("click", function NavegacaoComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Japamalas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_33_listener() { return ctx.AtualizaCabecalho("Colares"); })("click", function NavegacaoComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Colares");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_35_listener() { return ctx.AtualizaCabecalho("Pulseiras"); })("click", function NavegacaoComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pulseiras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_37_listener() { return ctx.AtualizaCabecalho("Conjuntos"); })("click", function NavegacaoComponent_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.mode === "over" ? _r0.toggle() : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Conjuntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavegacaoComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-toolbar", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Day - Astrologymdalas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, NavegacaoComponent_span_55_Template, 2, 1, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 17, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 19, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "servicos/constelacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "servicos/tarot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "servicos/mapaastral");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "produtos/mandala");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "produtos/japamala");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "produtos/colar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "produtos/pulseira");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "produtos/conjuntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".sidenav-container {\r\n  height: 100%;\r\n  background-image: url('bkgroundHighDefinition.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n  height: 100px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.mat-card-avatar {\r\n  height: 150px;\r\n  width: 150px; \r\n  border-radius: 50%;\r\n  align-items: flex flex-start;\r\n}\r\n\r\na{\r\n  color: azure;\r\n}\r\n\r\n.fa {  \r\n  width: 25px;\r\n  padding: 20px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin: 5px 2px;\r\n  color: white;\r\n  border-radius: 50%; \r\n}\r\n\r\n.fa-facebook {\r\n  background: #3B5998;\r\n}\r\n\r\n.fa-google {\r\n  background: #dd4b39;\r\n}\r\n\r\n.fa-youtube {\r\n  background: #bb0000;\r\n}\r\n\r\n.fa-instagram {\r\n  background: #8a3ab9;\r\n}\r\n\r\n.fa-whatsapp {\r\n  background: #4FCE5D;\r\n}\r\n\r\n.fa-telegram {\r\n  background: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmVnYWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1EQUF3RTtFQUN4RSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5hdmVnYWNhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvYmtncm91bmRIaWdoRGVmaW5pdGlvbi5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6IGF6dXJlO1xyXG59XHJcblxyXG4uZmEgeyAgXHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbn1cclxuXHJcbi5mYS1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxufVxyXG5cclxuLmZhLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG5cclxuLmZhLXlvdXR1YmUge1xyXG4gIGJhY2tncm91bmQ6ICNiYjAwMDA7XHJcbn1cclxuLmZhLWluc3RhZ3JhbSB7XHJcbiAgYmFja2dyb3VuZDogIzhhM2FiOTtcclxufVxyXG5cclxuLmZhLXdoYXRzYXBwIHtcclxuICBiYWNrZ3JvdW5kOiAjNEZDRTVEO1xyXG59XHJcbi5mYS10ZWxlZ3JhbSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navegacao_navegacao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navegacao/navegacao.component */ "Yx6W");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./servicos/servicos.component */ "WYoS");
/* harmony import */ var _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./produtos/produtos.component */ "KhvX");
/* harmony import */ var _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card-youtube/card-youtube.component */ "Ij8Q");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _produtos_colar_colar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./produtos/colar/colar.component */ "kCnM");
/* harmony import */ var _produtos_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./produtos/conjuntos/conjuntos.component */ "q/Dj");
/* harmony import */ var _produtos_japamala_japamala_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./produtos/japamala/japamala.component */ "ZaGs");
/* harmony import */ var _produtos_mandalas_mandalas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./produtos/mandalas/mandalas.component */ "eWl1");
/* harmony import */ var _produtos_pulseiras_pulseiras_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./produtos/pulseiras/pulseiras.component */ "PCq5");
/* harmony import */ var _servicos_mapaastral_mapaastral_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./servicos/mapaastral/mapaastral.component */ "8JZr");
/* harmony import */ var _servicos_tarot_tarot_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./servicos/tarot/tarot.component */ "23ro");
/* harmony import */ var _servicos_constelacao_constelacao_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./servicos/constelacao/constelacao.component */ "AYM4");
/* harmony import */ var _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./card-gallery/card-gallery.component */ "vtnr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            ng_gallery__WEBPACK_IMPORTED_MODULE_20__["GalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navegacao_navegacao_component__WEBPACK_IMPORTED_MODULE_5__["NavegacaoComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
        _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_17__["ServicosComponent"],
        _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_18__["ProdutosComponent"],
        _card_youtube_card_youtube_component__WEBPACK_IMPORTED_MODULE_19__["CardYoutubeComponent"],
        _produtos_colar_colar_component__WEBPACK_IMPORTED_MODULE_21__["ColarComponent"],
        _produtos_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_22__["ConjuntosComponent"],
        _produtos_japamala_japamala_component__WEBPACK_IMPORTED_MODULE_23__["JapamalaComponent"],
        _produtos_mandalas_mandalas_component__WEBPACK_IMPORTED_MODULE_24__["MandalasComponent"],
        _produtos_pulseiras_pulseiras_component__WEBPACK_IMPORTED_MODULE_25__["PulseirasComponent"],
        _servicos_mapaastral_mapaastral_component__WEBPACK_IMPORTED_MODULE_26__["MapaastralComponent"],
        _servicos_tarot_tarot_component__WEBPACK_IMPORTED_MODULE_27__["TarotComponent"],
        _servicos_constelacao_constelacao_component__WEBPACK_IMPORTED_MODULE_28__["ConstelacaoComponent"],
        _card_gallery_card_gallery_component__WEBPACK_IMPORTED_MODULE_29__["CardGalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        ng_gallery__WEBPACK_IMPORTED_MODULE_20__["GalleryModule"]] }); })();


/***/ }),

/***/ "ZaGs":
/*!*********************************************************!*\
  !*** ./src/app/produtos/japamala/japamala.component.ts ***!
  \*********************************************************/
/*! exports provided: JapamalaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JapamalaComponent", function() { return JapamalaComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class JapamalaComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/01.jpg', thumb: '../../assets/imagens/Japamala/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/02.jpg', thumb: '../../assets/imagens/Japamala/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/03.jpg', thumb: '../../assets/imagens/Japamala/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/04.jpg', thumb: '../../assets/imagens/Japamala/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/05.jpg', thumb: '../../assets/imagens/Japamala/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/06.jpg', thumb: '../../assets/imagens/Japamala/06.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/07.jpg', thumb: '../../assets/imagens/Japamala/07.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Japamala/08.jpg', thumb: '../../assets/imagens/Japamala/08.jpg' }),
        ];
    }
}
JapamalaComponent.ɵfac = function JapamalaComponent_Factory(t) { return new (t || JapamalaComponent)(); };
JapamalaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JapamalaComponent, selectors: [["app-japamala"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function JapamalaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphcGFtYWxhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImphcGFtYWxhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "eWl1":
/*!*********************************************************!*\
  !*** ./src/app/produtos/mandalas/mandalas.component.ts ***!
  \*********************************************************/
/*! exports provided: MandalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandalasComponent", function() { return MandalasComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MandalasComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/01.jpg', thumb: '../../assets/imagens/Mandalas/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/02.jpg', thumb: '../../assets/imagens/Mandalas/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/03.jpg', thumb: '../../assets/imagens/Mandalas/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/04.jpg', thumb: '../../assets/imagens/Mandalas/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/05.jpg', thumb: '../../assets/imagens/Mandalas/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/06.jpg', thumb: '../../assets/imagens/Mandalas/06.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/07.jpg', thumb: '../../assets/imagens/Mandalas/07.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Mandalas/08.png', thumb: '../../assets/imagens/Mandalas/08.png' }),
        ];
    }
}
MandalasComponent.ɵfac = function MandalasComponent_Factory(t) { return new (t || MandalasComponent)(); };
MandalasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MandalasComponent, selectors: [["app-mandalas"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function MandalasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmRhbGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6Im1hbmRhbGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "kCnM":
/*!***************************************************!*\
  !*** ./src/app/produtos/colar/colar.component.ts ***!
  \***************************************************/
/*! exports provided: ColarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColarComponent", function() { return ColarComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ColarComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/01.jpg', thumb: '../../assets/imagens/Colar/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/02.jpg', thumb: '../../assets/imagens/Colar/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/03.jpg', thumb: '../../assets/imagens/Colar/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/04.jpg', thumb: '../../assets/imagens/Colar/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/05.jpg', thumb: '../../assets/imagens/Colar/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Colar/06.jpg', thumb: '../../assets/imagens/Colar/06.jpg' }),
        ];
    }
}
ColarComponent.ɵfac = function ColarComponent_Factory(t) { return new (t || ColarComponent)(); };
ColarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColarComponent, selectors: [["app-colar"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function ColarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImNvbGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardComponent_mat_card_subtitle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitulo);
} }
class CardComponent {
    constructor() { }
    ngOnInit() { }
    SubtituloExist() {
        if (this.subtitulo == undefined || this.subtitulo == null || this.subtitulo == '') {
            return false;
        }
        if (this.subtitulo.trim().length === 0) {
            return false;
        }
        return true;
    }
    ImagemExists() {
        if (this.imagem == undefined || this.imagem == null || this.imagem == '') {
            return false;
        }
        if (this.imagem.trim().length === 0) {
            return false;
        }
        return true;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { titulo: "titulo", subtitulo: "subtitulo", imagem: "imagem", descricao: "descricao" }, decls: 9, vars: 5, consts: [[1, "dashboard-card"], ["id", "avatar", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["id", "avatar"], ["mat-card-avatar", "", 3, "src"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_mat_card_subtitle_5_Template, 2, 1, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ImagemExists());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SubtituloExist());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.descricao, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.descricao, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"]], styles: [".more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n }\r\n \r\n .dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n   }\r\n \r\n .dashboard-card-content[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    text-align: center;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 100%;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n }\r\n \r\n mat-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: aliceblue;\r\n }\r\n \r\n mat-card-header[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: row;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n }\r\n \r\n .mat-card-avatar[_ngcontent-%COMP%] {\r\n   height: 60px;\r\n   width: 60px; \r\n   border-radius: 50%;\r\n   align-items: flex flex-start;\r\n }\r\n \r\n \r\n \r\n mat-card-actions[_ngcontent-%COMP%]{\r\n     align-items: baseline;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztDQUNkOztDQUVBO0lBQ0csa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7R0FDYjs7Q0FHRjtJQUNHLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCOztDQUVBO0lBQ0csYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7O0NBRUE7R0FDRSxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLDhCQUE4QjtHQUM5QixtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSxZQUFZO0dBQ1osV0FBVztHQUNYLGtCQUFrQjtHQUNsQiw0QkFBNEI7Q0FDOUI7O0NBRUE7Ozt1QkFHc0I7O0NBRXJCO0tBQ0cscUJBQXFCO0VBQ3hCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gfVxyXG4gXHJcbiAuZGFzaGJvYXJkLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICB9XHJcbiBcclxuIFxyXG4gLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gfVxyXG4gXHJcbiBtYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiB9XHJcblxyXG4gbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5tYXQtY2FyZC1hdmF0YXIge1xyXG4gICBoZWlnaHQ6IDYwcHg7XHJcbiAgIHdpZHRoOiA2MHB4OyBcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBhbGlnbi1pdGVtczogZmxleCBmbGV4LXN0YXJ0O1xyXG4gfVxyXG5cclxuIC8qIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxyXG4gIDwvbWF0LWNhcmQtYWN0aW9ucz4gKi9cclxuXHJcbiAgbWF0LWNhcmQtYWN0aW9uc3tcclxuICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "n1m+":
/*!********************************************!*\
  !*** ./src/app/entidades/Card.Entidade.ts ***!
  \********************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(titulo, Subtitulo, urlImagem, descricao) {
        this.Titulo = titulo;
        this.SubTitulo = Subtitulo;
        this.Imagem = urlImagem;
        this.Descricao = descricao;
    }
}


/***/ }),

/***/ "q/Dj":
/*!***********************************************************!*\
  !*** ./src/app/produtos/conjuntos/conjuntos.component.ts ***!
  \***********************************************************/
/*! exports provided: ConjuntosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjuntosComponent", function() { return ConjuntosComponent; });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConjuntosComponent {
    constructor() { }
    ngOnInit() {
        // Set gallery items array
        this.images = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/01.jpg', thumb: '../../assets/imagens/Conjuntos/01.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/02.jpg', thumb: '../../assets/imagens/Conjuntos/02.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/03.jpg', thumb: '../../assets/imagens/Conjuntos/03.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/04.jpg', thumb: '../../assets/imagens/Conjuntos/04.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/05.jpg', thumb: '../../assets/imagens/Conjuntos/05.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_0__["ImageItem"]({ src: '../../assets/imagens/Conjuntos/06.jpg', thumb: '../../assets/imagens/Conjuntos/06.jpg' }),
        ];
    }
}
ConjuntosComponent.ɵfac = function ConjuntosComponent_Factory(t) { return new (t || ConjuntosComponent)(); };
ConjuntosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConjuntosComponent, selectors: [["app-conjuntos"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function ConjuntosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [ng_gallery__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]], styles: ["gallery[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 85%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmp1bnRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJjb25qdW50b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImdhbGxlcnl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _produtos_colar_colar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produtos/colar/colar.component */ "kCnM");
/* harmony import */ var _produtos_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos/conjuntos/conjuntos.component */ "q/Dj");
/* harmony import */ var _produtos_japamala_japamala_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtos/japamala/japamala.component */ "ZaGs");
/* harmony import */ var _produtos_mandalas_mandalas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produtos/mandalas/mandalas.component */ "eWl1");
/* harmony import */ var _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtos/produtos.component */ "KhvX");
/* harmony import */ var _produtos_pulseiras_pulseiras_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./produtos/pulseiras/pulseiras.component */ "PCq5");
/* harmony import */ var _servicos_constelacao_constelacao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicos/constelacao/constelacao.component */ "AYM4");
/* harmony import */ var _servicos_mapaastral_mapaastral_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicos/mapaastral/mapaastral.component */ "8JZr");
/* harmony import */ var _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicos/servicos.component */ "WYoS");
/* harmony import */ var _servicos_tarot_tarot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicos/tarot/tarot.component */ "23ro");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'servicos', component: _servicos_servicos_component__WEBPACK_IMPORTED_MODULE_10__["ServicosComponent"] },
    { path: 'produtos', component: _produtos_produtos_component__WEBPACK_IMPORTED_MODULE_6__["ProdutosComponent"] },
    { path: 'produtos/colar', component: _produtos_colar_colar_component__WEBPACK_IMPORTED_MODULE_2__["ColarComponent"] },
    { path: 'produtos/conjuntos', component: _produtos_conjuntos_conjuntos_component__WEBPACK_IMPORTED_MODULE_3__["ConjuntosComponent"] },
    { path: 'produtos/japamala', component: _produtos_japamala_japamala_component__WEBPACK_IMPORTED_MODULE_4__["JapamalaComponent"] },
    { path: 'produtos/mandala', component: _produtos_mandalas_mandalas_component__WEBPACK_IMPORTED_MODULE_5__["MandalasComponent"] },
    { path: 'produtos/pulseira', component: _produtos_pulseiras_pulseiras_component__WEBPACK_IMPORTED_MODULE_7__["PulseirasComponent"] },
    { path: 'servicos/mapaastral', component: _servicos_mapaastral_mapaastral_component__WEBPACK_IMPORTED_MODULE_9__["MapaastralComponent"] },
    { path: 'servicos/constelacao', component: _servicos_constelacao_constelacao_component__WEBPACK_IMPORTED_MODULE_8__["ConstelacaoComponent"] },
    { path: 'servicos/tarot', component: _servicos_tarot_tarot_component__WEBPACK_IMPORTED_MODULE_11__["TarotComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtnr":
/*!********************************************************!*\
  !*** ./src/app/card-gallery/card-gallery.component.ts ***!
  \********************************************************/
/*! exports provided: CardGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGalleryComponent", function() { return CardGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gallery */ "4Pm/");




function CardGalleryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardGalleryComponent_mat_card_subtitle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitulo);
} }
class CardGalleryComponent {
    constructor() { }
    ngOnInit() {
    }
    SubtituloExist() {
        if (this.subtitulo == undefined || this.subtitulo == null || this.subtitulo == '') {
            return false;
        }
        if (this.subtitulo.trim().length === 0) {
            return false;
        }
        return true;
    }
    ImagemExists() {
        if (this.imagem == undefined || this.imagem == null || this.imagem == '') {
            return false;
        }
        if (this.imagem.trim().length === 0) {
            return false;
        }
        return true;
    }
}
CardGalleryComponent.ɵfac = function CardGalleryComponent_Factory(t) { return new (t || CardGalleryComponent)(); };
CardGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardGalleryComponent, selectors: [["app-card-gallery"]], inputs: { images: "images", titulo: "titulo", subtitulo: "subtitulo", imagem: "imagem", descricao: "descricao" }, decls: 8, vars: 4, consts: [[1, "dashboard-card"], ["id", "avatar", 4, "ngIf"], [4, "ngIf"], [3, "items"], ["id", "avatar"], ["mat-card-avatar", "", 3, "src"]], template: function CardGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardGalleryComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardGalleryComponent_mat_card_subtitle_5_Template, 2, 1, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "gallery", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ImagemExists());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SubtituloExist());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.images);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"]], styles: [".more-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n }\r\n \r\n .dashboard-card[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    opacity: 0.9;\r\n   }\r\n \r\n .dashboard-card-content[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    text-align: center;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    max-height: 90%;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n }\r\n \r\n mat-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n }\r\n \r\n mat-card-header[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   flex-direction: row;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n }\r\n \r\n .mat-card-avatar[_ngcontent-%COMP%] {\r\n   height: 60px;\r\n   width: 60px; \r\n   border-radius: 50%;\r\n   align-items: flex flex-start;\r\n }\r\n \r\n \r\n \r\n mat-card-actions[_ngcontent-%COMP%]{\r\n     align-items: baseline;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7R0FDYjs7Q0FHRjtJQUNHLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCOztDQUVBO0lBQ0csYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7Q0FFQTtHQUNFLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsOEJBQThCO0dBQzlCLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLFlBQVk7R0FDWixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLDRCQUE0QjtDQUM5Qjs7Q0FFQTs7O3VCQUdzQjs7Q0FFckI7S0FDRyxxQkFBcUI7RUFDeEIiLCJmaWxlIjoiY2FyZC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9yZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogMTBweDtcclxuIH1cclxuIFxyXG4gLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgfVxyXG4gXHJcbiBcclxuIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gfVxyXG4gXHJcbiBtYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIH1cclxuXHJcbiBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgIGhlaWdodDogNjBweDtcclxuICAgd2lkdGg6IDYwcHg7IFxyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIGFsaWduLWl0ZW1zOiBmbGV4IGZsZXgtc3RhcnQ7XHJcbiB9XHJcblxyXG4gLyogPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPiAqL1xyXG5cclxuICBtYXQtY2FyZC1hY3Rpb25ze1xyXG4gICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map