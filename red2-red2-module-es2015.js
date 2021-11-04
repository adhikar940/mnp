(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["red2-red2-module"],{

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

/***/ "Fl0w":
/*!*************************************!*\
  !*** ./src/app/red2/red2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWQyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "HJ9z":
/*!*************************************!*\
  !*** ./src/app/red2/red2.module.ts ***!
  \*************************************/
/*! exports provided: Red2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Red2PageModule", function() { return Red2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _red2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./red2-routing.module */ "PUEk");
/* harmony import */ var _red2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./red2.page */ "NfTH");







let Red2PageModule = class Red2PageModule {
};
Red2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _red2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Red2PageRoutingModule"]
        ],
        declarations: [_red2_page__WEBPACK_IMPORTED_MODULE_6__["Red2Page"]]
    })
], Red2PageModule);



/***/ }),

/***/ "IMHX":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/red2/red2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Red</ion-title>\n  </ion-toolbar>\n</ion-header>\n<style>\n  h2 {\n    text-align: center;\n  }  </style>\n<ion-content >\n  <b style=\"color:blue\" > <h2>Winning Candidates </h2></b>\n    <ion-list *ngFor=\"let i of k2\">\n    <ion-item >\n<ion-label style=\"color:green\">\n  <ion-button shape=\"round\" size=\"default\" expand=\"block\" fill=\"outline\" (click)=\"btnClicked('assembly1',i.State_name)\">\n    {{i.State_name}}-{{i.Assembly_Candidates.length}}</ion-button>\n  </ion-label>\n    </ion-item>\n\n  </ion-list>\n  </ion-content >\n");

/***/ }),

/***/ "NfTH":
/*!***********************************!*\
  !*** ./src/app/red2/red2.page.ts ***!
  \***********************************/
/*! exports provided: Red2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Red2Page", function() { return Red2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_red2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./red2.page.html */ "IMHX");
/* harmony import */ var _red2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./red2.page.scss */ "Fl0w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assembly_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assembly.service */ "e4YJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let Red2Page = class Red2Page {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.k2 = [];
        this.user.am().subscribe(data => {
            this.k2 = data;
        });
    }
    ngOnInit() {
    }
    btnClicked(k3, k4) {
        this.router.navigate([k3, k4]);
    }
};
Red2Page.ctorParameters = () => [
    { type: _assembly_service__WEBPACK_IMPORTED_MODULE_4__["AssemblyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Red2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-red2',
        template: _raw_loader_red2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_red2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Red2Page);



/***/ }),

/***/ "PUEk":
/*!*********************************************!*\
  !*** ./src/app/red2/red2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Red2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Red2PageRoutingModule", function() { return Red2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _red2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./red2.page */ "NfTH");




const routes = [
    {
        path: '',
        component: _red2_page__WEBPACK_IMPORTED_MODULE_3__["Red2Page"]
    }
];
let Red2PageRoutingModule = class Red2PageRoutingModule {
};
Red2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Red2PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=red2-red2-module-es2015.js.map