(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carporation-carporation-module"],{

/***/ "FrPF":
/*!***************************************************!*\
  !*** ./src/app/carporation/carporation.module.ts ***!
  \***************************************************/
/*! exports provided: CarporationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarporationPageModule", function() { return CarporationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _carporation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carporation-routing.module */ "nuU/");
/* harmony import */ var _carporation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carporation.page */ "RcTp");







let CarporationPageModule = class CarporationPageModule {
};
CarporationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carporation_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarporationPageRoutingModule"]
        ],
        declarations: [_carporation_page__WEBPACK_IMPORTED_MODULE_6__["CarporationPage"]]
    })
], CarporationPageModule);



/***/ }),

/***/ "HD3e":
/*!***************************************************!*\
  !*** ./src/app/carporation/carporation.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnBvcmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImNhcnBvcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDZweCBjeWFuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgXG4gIH0iXX0= */");

/***/ }),

/***/ "RcTp":
/*!*************************************************!*\
  !*** ./src/app/carporation/carporation.page.ts ***!
  \*************************************************/
/*! exports provided: CarporationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarporationPage", function() { return CarporationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carporation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carporation.page.html */ "uHnN");
/* harmony import */ var _carporation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carporation.page.scss */ "HD3e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _carporation1_carporation1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carporation1/carporation1.page */ "+DP6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let CarporationPage = class CarporationPage {
    constructor(user, modalctrl) {
        this.user = user;
        this.modalctrl = modalctrl;
        this.corporations = [];
        this.corp = {};
        this.corp1 = [];
        this.user.corporations().subscribe(data => {
            console.log(data);
            this.corporations = data;
        });
    }
    ngOnInit() {
    }
    GetSelected(corp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(corp);
            const modal = yield this.modalctrl.create({
                component: _carporation1_carporation1_page__WEBPACK_IMPORTED_MODULE_5__["Carporation1Page"],
                componentProps: { carporation: corp }
            });
            // await modal.present();
            // for(let i=0;i<corp.Corporation_Details.length;i++){
            //   // console.log(corp.Corporation_Details[i].District);
            //   this.corp1.push(corp.Corporation_Details[i].District);
            //   console.log(this.corp1)
            // }
            console.log("selector", corp);
            this.corp1 = corp;
            yield modal.present();
            // console.log(this.corp1)
        });
    }
};
CarporationPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
CarporationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carporation',
        template: _raw_loader_carporation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carporation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarporationPage);

// async Getselected(k)
//   {
//     console.log(k)
//     const modal= await this.modalctrl.create({
//     component: State1Page,
//     componentProps:{states:k}
//     });
//     await modal.present();
//   //   console.log(k)
//   // console.log("selector: ", k );
//   }


/***/ }),

/***/ "nuU/":
/*!***********************************************************!*\
  !*** ./src/app/carporation/carporation-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CarporationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarporationPageRoutingModule", function() { return CarporationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _carporation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carporation.page */ "RcTp");




const routes = [
    {
        path: '',
        component: _carporation_page__WEBPACK_IMPORTED_MODULE_3__["CarporationPage"]
    }
];
let CarporationPageRoutingModule = class CarporationPageRoutingModule {
};
CarporationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarporationPageRoutingModule);



/***/ }),

/***/ "uHnN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carporation/carporation.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>carporation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h2 style=\"text-align: center;color:blue\"> Corporation States </h2>\n<ion-list>\n  <div *ngFor=\"let corp of corporations\">\n    <ion-button shape=\"round\"   fill=\"outline\" size=\"default\" expand=\"block\" (click)=\"GetSelected(corp)\">\n      {{corp.State_name}}-{{corp.Corporation_Details.length}}\n      \n    </ion-button>\n  </div>\n</ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=carporation-carporation-module-es2015.js.map