(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state-state-module"],{

/***/ "9RCi":
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/*! exports provided: StatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatePageModule", function() { return StatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _state_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-routing.module */ "CDRd");
/* harmony import */ var _state_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state.page */ "FdtJ");







let StatePageModule = class StatePageModule {
};
StatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _state_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatePageRoutingModule"]
        ],
        declarations: [_state_page__WEBPACK_IMPORTED_MODULE_6__["StatePage"]]
    })
], StatePageModule);



/***/ }),

/***/ "Bc2E":
/*!***************************************!*\
  !*** ./src/app/state/state.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "BpSl":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/state/state.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>state</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"color:blue;text-align: center;\">States</h1>\n  <div *ngFor=\"let k of s\">\n  <ion-button  shape=\"round\"size=\"default\" expand=\"block\" fill=\"outline\"  (click)=\"Getselected(k)\">\n    {{k.State}}</ion-button></div>\n</ion-content>\n");

/***/ }),

/***/ "CDRd":
/*!***********************************************!*\
  !*** ./src/app/state/state-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatePageRoutingModule", function() { return StatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _state_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.page */ "FdtJ");




const routes = [
    {
        path: '',
        component: _state_page__WEBPACK_IMPORTED_MODULE_3__["StatePage"]
    }
];
let StatePageRoutingModule = class StatePageRoutingModule {
};
StatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatePageRoutingModule);



/***/ }),

/***/ "FdtJ":
/*!*************************************!*\
  !*** ./src/app/state/state.page.ts ***!
  \*************************************/
/*! exports provided: StatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatePage", function() { return StatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_state_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./state.page.html */ "BpSl");
/* harmony import */ var _state_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.page.scss */ "Bc2E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _state1_state1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state1/state1.page */ "fUWi");








let StatePage = class StatePage {
    constructor(user, route, router, modalctrl) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.modalctrl = modalctrl;
        this.s = [];
        this.k = {};
        this.user.states().subscribe(data => {
            console.log(data);
            this.s = data;
        });
    }
    ngOnInit() {
    }
    Getselected(k) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(k);
            const modal = yield this.modalctrl.create({
                component: _state1_state1_page__WEBPACK_IMPORTED_MODULE_7__["State1Page"],
                componentProps: { states: k }
            });
            yield modal.present();
            //   console.log(k)
            // console.log("selector: ", k );
        });
    }
};
StatePage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
StatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-state',
        template: _raw_loader_state_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_state_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatePage);



/***/ })

}]);
//# sourceMappingURL=state-state-module-es2015.js.map