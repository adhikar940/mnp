(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lokpartycandidate-lokpartycandidate-module"],{

/***/ "0PaW":
/*!***************************************************************!*\
  !*** ./src/app/lokpartycandidate/lokpartycandidate.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2twYXJ0eWNhbmRpZGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "5d8x":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lokpartycandidate/lokpartycandidate.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Loksabha Candidates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"btnclick()\">\n      Change Password<br/>\n    </ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"logout()\">\n      Logout<br/>\n    </ion-button>\n  </ion-col>\n</ion-row>\n  <!-- <ion-button shape=\"round\" size=\"default\" expand=\"block\" (click)=\"logout()\" class=\"btn btn-sm\" color=\"danger\" fill=\"outline\">Logout</ion-button> -->\n\n\n <ion-item>\n   <ion-list>\n    <ion-grid class=\"padding\" >\n      <h1 style=\"color:green;\">&emsp;Loksabha candidates of  party</h1>\n      <br>\n      <ion-row>\n    <ion-col size=\"1\" style=\"color:purple;\"><b>Sl.no</b></ion-col>\n        <ion-col size=\"2\"  style=\"color:purple;\"><b>State</b></ion-col>\n        <ion-col size=\"2\"  style=\"color:purple;\"><b>State</b></ion-col>\n        <ion-col size=\"2\"  style=\"color:purple;\"><b>State</b></ion-col>\n        <ion-col size=\"2\"  style=\"color:purple;\"><b>State</b></ion-col>\n        <ion-col size=\"2\"  style=\"color:purple;\"><b>MP Name</b></ion-col>\n        <ion-col size=\"2\" style=\"color:purple;\"><b>Add</b></ion-col>\n       </ion-row>\n<br>\n      <ion-row >\n        <ion-col size=\"1\" style=\"color:maroon;\">1</ion-col>\n        <ion-col size=\"2\" style=\"color:darkgreen;\">2</ion-col>\n        <ion-col size=\"2\" style=\"color:darkgreen;\">3</ion-col>\n        <ion-col size=\"2\" style=\"color:darkgreen;\">4</ion-col>\n        <ion-col size=\"2\" style=\"color:darkgreen;\">5</ion-col>\n        <ion-col size=\"2\" style=\"color:darkviolet;\">6</ion-col>\n        <ion-col size=\"2\" >\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n   </ion-list>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "VN55":
/*!*************************************************************!*\
  !*** ./src/app/lokpartycandidate/lokpartycandidate.page.ts ***!
  \*************************************************************/
/*! exports provided: LokpartycandidatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokpartycandidatePage", function() { return LokpartycandidatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lokpartycandidate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lokpartycandidate.page.html */ "5d8x");
/* harmony import */ var _lokpartycandidate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lokpartycandidate.page.scss */ "0PaW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LokpartycandidatePage = class LokpartycandidatePage {
    constructor() { }
    ngOnInit() {
    }
};
LokpartycandidatePage.ctorParameters = () => [];
LokpartycandidatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lokpartycandidate',
        template: _raw_loader_lokpartycandidate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lokpartycandidate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LokpartycandidatePage);



/***/ }),

/***/ "sAG+":
/*!***********************************************************************!*\
  !*** ./src/app/lokpartycandidate/lokpartycandidate-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LokpartycandidatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokpartycandidatePageRoutingModule", function() { return LokpartycandidatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lokpartycandidate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lokpartycandidate.page */ "VN55");




const routes = [
    {
        path: '',
        component: _lokpartycandidate_page__WEBPACK_IMPORTED_MODULE_3__["LokpartycandidatePage"]
    }
];
let LokpartycandidatePageRoutingModule = class LokpartycandidatePageRoutingModule {
};
LokpartycandidatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LokpartycandidatePageRoutingModule);



/***/ }),

/***/ "u+Dc":
/*!***************************************************************!*\
  !*** ./src/app/lokpartycandidate/lokpartycandidate.module.ts ***!
  \***************************************************************/
/*! exports provided: LokpartycandidatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LokpartycandidatePageModule", function() { return LokpartycandidatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lokpartycandidate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lokpartycandidate-routing.module */ "sAG+");
/* harmony import */ var _lokpartycandidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lokpartycandidate.page */ "VN55");







let LokpartycandidatePageModule = class LokpartycandidatePageModule {
};
LokpartycandidatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lokpartycandidate_routing_module__WEBPACK_IMPORTED_MODULE_5__["LokpartycandidatePageRoutingModule"]
        ],
        declarations: [_lokpartycandidate_page__WEBPACK_IMPORTED_MODULE_6__["LokpartycandidatePage"]]
    })
], LokpartycandidatePageModule);



/***/ })

}]);
//# sourceMappingURL=lokpartycandidate-lokpartycandidate-module-es2015.js.map