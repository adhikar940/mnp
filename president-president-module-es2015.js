(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["president-president-module"],{

/***/ "4oio":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/president/president.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>president</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<h3 *ngFor=\"let j of k\">\n<b style=\"color:blue\" > <h2>{{j.Full_Name}} </h2></b>\n<br>\n\n<img src=\"{{zz}}{{j.photo}}\" width=\"500\" height=\"400\"  >\n      <dd style=\"color:darkolivegreen\"> Gender - {{j.gender}}</dd><br>\n\n    <dd style=\"color:brown\">   Father - {{j.fathers_Name}}</dd><br>\n    <dd style=\"color:green\">   Spouse - {{j.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{j.Highest_Education}},{{j.University}}</dd><br>\n    <dd style=\"color:indigo\">   Address - {{j.Address}}</dd><br>\n    <dd style=\"color:maroon\">   Email -  {{j.Email_address}}</dd><br>\n    <dd style=\"color:teal\">   Mobile - {{j.Mobile}}</dd><br>\n  </h3>\n</ion-content>\n");

/***/ }),

/***/ "B3d5":
/*!***********************************************!*\
  !*** ./src/app/president/president.module.ts ***!
  \***********************************************/
/*! exports provided: PresidentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentPageModule", function() { return PresidentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _president_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./president-routing.module */ "uPXP");
/* harmony import */ var _president_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./president.page */ "xqFr");







let PresidentPageModule = class PresidentPageModule {
};
PresidentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _president_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresidentPageRoutingModule"]
        ],
        declarations: [_president_page__WEBPACK_IMPORTED_MODULE_6__["PresidentPage"]]
    })
], PresidentPageModule);



/***/ }),

/***/ "uPXP":
/*!*******************************************************!*\
  !*** ./src/app/president/president-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PresidentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentPageRoutingModule", function() { return PresidentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _president_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./president.page */ "xqFr");




const routes = [
    {
        path: '',
        component: _president_page__WEBPACK_IMPORTED_MODULE_3__["PresidentPage"]
    }
];
let PresidentPageRoutingModule = class PresidentPageRoutingModule {
};
PresidentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PresidentPageRoutingModule);



/***/ }),

/***/ "vZeT":
/*!***********************************************!*\
  !*** ./src/app/president/president.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  margin-left: 80px;\n}\n\na {\n  color: black;\n}\n\n.box1 {\n  width: 50%;\n}\n\n.box2 {\n  overflow: hidden;\n  position: relative;\n  right: 100px;\n}\n\nimg {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n\niframe {\n  margin-left: 115px;\n  margin-top: 50px;\n  box-shadow: 0px 0px 20px darkcyan;\n  border-radius: 20px;\n}\n\n/* media querry */\n\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container {\n    width: 350%;\n    display: block;\n    text-align: center;\n  }\n\n  .box1 {\n    text-align: right;\n    font-size: 30px;\n  }\n\n  iframe {\n    position: relative;\n    right: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZXNpZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFDQTtFQUNTLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRVQ7O0FBQ0E7RUFFSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSw4QkFBQTtFQUNGLGVBQUE7QUFDRjs7QUFFQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQ0g7O0FBRUEsaUJBQUE7O0FBRUE7RUFFSTtJQUNHLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUFETDs7RUFJRTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFQUROOztFQUdFO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0VBQU47QUFDRiIsImZpbGUiOiJwcmVzaWRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuXG59XG5he1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5ib3gxe1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5ib3gye1xuICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgIHJpZ2h0OiAxMDBweDtcbiB9XG5cbmltZ3tcblxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGN5YW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46NXB4XG5cblxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbmgye1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xuXG59XG5pZnJhbWV7XG4gICBtYXJnaW4tbGVmdDogMTE1cHg7XG4gICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGRhcmtjeWFuO1xuICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogbWVkaWEgcXVlcnJ5ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MTRweCkgYW5kIChtYXgtd2lkdGg6NzM2cHgpe1xuXG4gICAgLmNvbnRhaW5lcntcbiAgICAgICB3aWR0aDogMzUwJTtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICB9XG4gICAgLmJveDF7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIGlmcmFtZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogMTAwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "xqFr":
/*!*********************************************!*\
  !*** ./src/app/president/president.page.ts ***!
  \*********************************************/
/*! exports provided: PresidentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentPage", function() { return PresidentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_president_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./president.page.html */ "4oio");
/* harmony import */ var _president_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./president.page.scss */ "vZeT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/k */ "Ew1Z");







let PresidentPage = class PresidentPage {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.k = [];
        this.z = [];
        this.k2 = [];
        this.selected = null;
        this.user.president().subscribe(data => {
            this.k = data;
        });
        this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.zz = this.zz.slice(0, -1);
    }
    ngOnInit() {
    }
};
PresidentPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PresidentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-president',
        template: _raw_loader_president_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_president_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PresidentPage);



/***/ })

}]);
//# sourceMappingURL=president-president-module-es2015.js.map