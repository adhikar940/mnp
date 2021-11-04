(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state1-state1-module"],{

/***/ "Ew1Z":
/*!***************************!*\
  !*** ./src/app/data/k.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//export default "http://127.0.0.1:8000/";
/* harmony default export */ __webpack_exports__["default"] = ("https://k.adhikar.net/");


/***/ }),

/***/ "N5ig":
/*!*****************************************!*\
  !*** ./src/app/state1/state1.module.ts ***!
  \*****************************************/
/*! exports provided: State1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State1PageModule", function() { return State1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _state1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state1-routing.module */ "R8kK");
/* harmony import */ var _state1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state1.page */ "fUWi");







let State1PageModule = class State1PageModule {
};
State1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _state1_routing_module__WEBPACK_IMPORTED_MODULE_5__["State1PageRoutingModule"]
        ],
        declarations: [_state1_page__WEBPACK_IMPORTED_MODULE_6__["State1Page"]]
    })
], State1PageModule);



/***/ }),

/***/ "R8kK":
/*!*************************************************!*\
  !*** ./src/app/state1/state1-routing.module.ts ***!
  \*************************************************/
/*! exports provided: State1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State1PageRoutingModule", function() { return State1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _state1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state1.page */ "fUWi");




const routes = [
    {
        path: '',
        component: _state1_page__WEBPACK_IMPORTED_MODULE_3__["State1Page"]
    }
];
let State1PageRoutingModule = class State1PageRoutingModule {
};
State1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], State1PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=state1-state1-module-es2015.js.map