(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partylogin-coucilemail-coucilemail-module"],{

/***/ "Ic3b":
/*!************************************************************!*\
  !*** ./src/app/partylogin/coucilemail/coucilemail.page.ts ***!
  \************************************************************/
/*! exports provided: CoucilemailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoucilemailPage", function() { return CoucilemailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coucilemail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coucilemail.page.html */ "ZaFJ");
/* harmony import */ var _coucilemail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coucilemail.page.scss */ "Lh/o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CoucilemailPage = class CoucilemailPage {
    constructor() { }
    ngOnInit() {
    }
};
CoucilemailPage.ctorParameters = () => [];
CoucilemailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coucilemail',
        template: _raw_loader_coucilemail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coucilemail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoucilemailPage);



/***/ }),

/***/ "Lh/o":
/*!**************************************************************!*\
  !*** ./src/app/partylogin/coucilemail/coucilemail.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VjaWxlbWFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ZaFJ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partylogin/coucilemail/coucilemail.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>coucilemail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "ZxvG":
/*!**********************************************************************!*\
  !*** ./src/app/partylogin/coucilemail/coucilemail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CoucilemailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoucilemailPageRoutingModule", function() { return CoucilemailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _coucilemail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coucilemail.page */ "Ic3b");




const routes = [
    {
        path: '',
        component: _coucilemail_page__WEBPACK_IMPORTED_MODULE_3__["CoucilemailPage"]
    }
];
let CoucilemailPageRoutingModule = class CoucilemailPageRoutingModule {
};
CoucilemailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoucilemailPageRoutingModule);



/***/ }),

/***/ "mCOi":
/*!**************************************************************!*\
  !*** ./src/app/partylogin/coucilemail/coucilemail.module.ts ***!
  \**************************************************************/
/*! exports provided: CoucilemailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoucilemailPageModule", function() { return CoucilemailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _coucilemail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coucilemail-routing.module */ "ZxvG");
/* harmony import */ var _coucilemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coucilemail.page */ "Ic3b");







let CoucilemailPageModule = class CoucilemailPageModule {
};
CoucilemailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coucilemail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoucilemailPageRoutingModule"]
        ],
        declarations: [_coucilemail_page__WEBPACK_IMPORTED_MODULE_6__["CoucilemailPage"]]
    })
], CoucilemailPageModule);



/***/ })

}]);
//# sourceMappingURL=partylogin-coucilemail-coucilemail-module-es2015.js.map