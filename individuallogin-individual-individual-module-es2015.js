(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individuallogin-individual-individual-module"],{

/***/ "T5Rf":
/*!*****************************************************************!*\
  !*** ./src/app/individuallogin/individual/individual.module.ts ***!
  \*****************************************************************/
/*! exports provided: IndividualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPageModule", function() { return IndividualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _individual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual-routing.module */ "lMfy");
/* harmony import */ var _individual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual.page */ "MuSt");







let IndividualPageModule = class IndividualPageModule {
};
IndividualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _individual_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndividualPageRoutingModule"]
        ],
        declarations: [_individual_page__WEBPACK_IMPORTED_MODULE_6__["IndividualPage"]]
    })
], IndividualPageModule);



/***/ }),

/***/ "lMfy":
/*!*************************************************************************!*\
  !*** ./src/app/individuallogin/individual/individual-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: IndividualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPageRoutingModule", function() { return IndividualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _individual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./individual.page */ "MuSt");




const routes = [
    {
        path: '',
        component: _individual_page__WEBPACK_IMPORTED_MODULE_3__["IndividualPage"]
    }
];
let IndividualPageRoutingModule = class IndividualPageRoutingModule {
};
IndividualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndividualPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=individuallogin-individual-individual-module-es2015.js.map