(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individuallogin-loksabhaindividual-loksabhaindividual-module"],{

/***/ "1MeY":
/*!*****************************************************************************************!*\
  !*** ./src/app/individuallogin/loksabhaindividual/loksabhaindividual-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoksabhaindividualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoksabhaindividualPageRoutingModule", function() { return LoksabhaindividualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loksabhaindividual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loksabhaindividual.page */ "9a4S");




const routes = [
    {
        path: '',
        component: _loksabhaindividual_page__WEBPACK_IMPORTED_MODULE_3__["LoksabhaindividualPage"]
    }
];
let LoksabhaindividualPageRoutingModule = class LoksabhaindividualPageRoutingModule {
};
LoksabhaindividualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoksabhaindividualPageRoutingModule);



/***/ }),

/***/ "9a4S":
/*!*******************************************************************************!*\
  !*** ./src/app/individuallogin/loksabhaindividual/loksabhaindividual.page.ts ***!
  \*******************************************************************************/
/*! exports provided: LoksabhaindividualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoksabhaindividualPage", function() { return LoksabhaindividualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loksabhaindividual_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loksabhaindividual.page.html */ "axQU");
/* harmony import */ var _loksabhaindividual_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loksabhaindividual.page.scss */ "BHHG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoksabhaindividualPage = class LoksabhaindividualPage {
    constructor() { }
    ngOnInit() {
    }
};
LoksabhaindividualPage.ctorParameters = () => [];
LoksabhaindividualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loksabhaindividual',
        template: _raw_loader_loksabhaindividual_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loksabhaindividual_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoksabhaindividualPage);



/***/ }),

/***/ "BHHG":
/*!*********************************************************************************!*\
  !*** ./src/app/individuallogin/loksabhaindividual/loksabhaindividual.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2tzYWJoYWluZGl2aWR1YWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "axQU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individuallogin/loksabhaindividual/loksabhaindividual.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>loksabhaindividual</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "bCPh":
/*!*********************************************************************************!*\
  !*** ./src/app/individuallogin/loksabhaindividual/loksabhaindividual.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoksabhaindividualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoksabhaindividualPageModule", function() { return LoksabhaindividualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loksabhaindividual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loksabhaindividual-routing.module */ "1MeY");
/* harmony import */ var _loksabhaindividual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loksabhaindividual.page */ "9a4S");







let LoksabhaindividualPageModule = class LoksabhaindividualPageModule {
};
LoksabhaindividualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loksabhaindividual_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoksabhaindividualPageRoutingModule"]
        ],
        declarations: [_loksabhaindividual_page__WEBPACK_IMPORTED_MODULE_6__["LoksabhaindividualPage"]]
    })
], LoksabhaindividualPageModule);



/***/ })

}]);
//# sourceMappingURL=individuallogin-loksabhaindividual-loksabhaindividual-module-es2015.js.map