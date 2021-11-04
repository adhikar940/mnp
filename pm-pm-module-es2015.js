(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pm-pm-module"],{

/***/ "1MuQ":
/*!*********************************!*\
  !*** ./src/app/pm/pm.page.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  color: blue;\n}\n\nion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\n\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\n\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFTjs7QUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHTjs7QUFESTtFQUNFLDZCQUFBO0FBR047O0FBQUk7RUFDRSw4QkFBQTtBQUVOIiwiZmlsZSI6InBtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcblxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGN5YW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46NXB4XG59XG5pbWc6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zaXRpb246IDVzO1xufVxuaDJ7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IGdyZWVuO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBjb2xvcjpibHVlO1xufVxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbiAgXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzJkZDM2ZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gIH1cbi8vICAgaDJ7XG4vLyAgICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gICAgIHRleHQtYWxpZ246Y2VudGVyO1xuLy8gICAgIGNvbG9yOmJsdWU7XG4gIFxuLy8gICB9XG4gICJdfQ== */");

/***/ }),

/***/ "4QwO":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pm/pm.page.html ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>pm</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<h3 *ngFor=\"let j of k\">\n<b style=\"color:blue\" > <h2>{{j.Full_Name}} </h2></b>\n<br>\n\n<img src=\"{{zz}}{{j.photo}}\" width=\"500\" height=\"400\"  >\n      <dd style=\"color:darkolivegreen\"> Gender - {{j.gender}}</dd><br>\n    <dd style=\"color:Tomato\">   Party - {{j.party_name}}</dd><br>\n    <dd style=\"color:brown\">   Father - {{j.fathers_Name}}</dd><br>\n    <dd style=\"color:green\">   Spouse - {{j.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{j.Highest_Education}},{{j.University}}</dd><br>\n    <dd style=\"color:indigo\">   Address - {{j.Address}}</dd><br>\n    <dd style=\"color:maroon\">   Email -  {{j.Email_address}}</dd><br>\n    <dd style=\"color:teal\">   Mobile - {{j.Mobile}}</dd><br>\n  </h3>\n  <ion-grid class=\"padding\" >\n    <ion-row>\n  <!-- <ion-col size=\"1\">Sl.no</ion-col> -->\n      <ion-col size=\"6\">Date</ion-col>\n      <ion-col size=\"6\">Video</ion-col>\n\n    </ion-row>\n    <ion-row *ngFor=\"let k1 of mk\">\n      <ion-col size=\"6\" >{{k1.Date}}</ion-col>\n      <ion-col  size=\"6\" onclick=\"window.open('k1.videolink', '_system', 'location=yes'); return false;\">{{k1.videolink}}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "Jp+Z":
/*!*******************************!*\
  !*** ./src/app/pm/pm.page.ts ***!
  \*******************************/
/*! exports provided: PmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmPage", function() { return PmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pm.page.html */ "4QwO");
/* harmony import */ var _pm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pm.page.scss */ "1MuQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/k */ "Ew1Z");







let PmPage = class PmPage {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.k = [];
        this.z = [];
        this.k2 = [];
        this.mk = [];
        this.selected = null;
        this.user.pm().subscribe(data => {
            console.warn(data);
            this.k = data;
        });
        this.user.mankibath().subscribe(res => {
            console.log(res);
            this.mk = res;
        });
        this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.zz = this.zz.slice(0, -1);
    }
    ngOnInit() {
    }
};
PmPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pm',
        template: _raw_loader_pm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PmPage);



/***/ }),

/***/ "afUH":
/*!*****************************************!*\
  !*** ./src/app/pm/pm-routing.module.ts ***!
  \*****************************************/
/*! exports provided: PmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmPageRoutingModule", function() { return PmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pm.page */ "Jp+Z");




const routes = [
    {
        path: '',
        component: _pm_page__WEBPACK_IMPORTED_MODULE_3__["PmPage"]
    }
];
let PmPageRoutingModule = class PmPageRoutingModule {
};
PmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PmPageRoutingModule);



/***/ }),

/***/ "iBhr":
/*!*********************************!*\
  !*** ./src/app/pm/pm.module.ts ***!
  \*********************************/
/*! exports provided: PmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmPageModule", function() { return PmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pm-routing.module */ "afUH");
/* harmony import */ var _pm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pm.page */ "Jp+Z");







let PmPageModule = class PmPageModule {
};
PmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pm_routing_module__WEBPACK_IMPORTED_MODULE_5__["PmPageRoutingModule"]
        ],
        declarations: [_pm_page__WEBPACK_IMPORTED_MODULE_6__["PmPage"]]
    })
], PmPageModule);



/***/ })

}]);
//# sourceMappingURL=pm-pm-module-es2015.js.map