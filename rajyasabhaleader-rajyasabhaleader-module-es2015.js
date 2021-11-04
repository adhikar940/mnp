(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rajyasabhaleader-rajyasabhaleader-module"],{

/***/ "2/jz":
/*!*************************************************************!*\
  !*** ./src/app/rajyasabhaleader/rajyasabhaleader.module.ts ***!
  \*************************************************************/
/*! exports provided: RajyasabhaleaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RajyasabhaleaderPageModule", function() { return RajyasabhaleaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rajyasabhaleader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rajyasabhaleader-routing.module */ "pueS");
/* harmony import */ var _rajyasabhaleader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rajyasabhaleader.page */ "eDlP");







let RajyasabhaleaderPageModule = class RajyasabhaleaderPageModule {
};
RajyasabhaleaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rajyasabhaleader_routing_module__WEBPACK_IMPORTED_MODULE_5__["RajyasabhaleaderPageRoutingModule"]
        ],
        declarations: [_rajyasabhaleader_page__WEBPACK_IMPORTED_MODULE_6__["RajyasabhaleaderPage"]]
    })
], RajyasabhaleaderPageModule);



/***/ }),

/***/ "829c":
/*!*************************************************************!*\
  !*** ./src/app/rajyasabhaleader/rajyasabhaleader.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jhanlhc2FiaGFsZWFkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRixlQUFBO0FBRUYiLCJmaWxlIjoicmFqeWFzYWJoYWxlYWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjVweFxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbmgye1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xuXG59XG4iXX0= */");

/***/ }),

/***/ "HxZq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rajyasabhaleader/rajyasabhaleader.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>rajyasabhaleader</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<h3 *ngFor=\"let j of k\">\n<b style=\"color:blue\" > <h2>{{j.Full_Name}} </h2></b>\n<br>\n<img src=\"{{zz}}{{j.photo}}\" width=\"500\" height=\"400\"  >\n      <dd style=\"color:darkolivegreen\"> Gender - {{j.gender}}</dd><br>\n    <dd style=\"color:Tomato\">   Party - {{j.party_name}}</dd><br>\n    <dd style=\"color:brown\">   Father - {{j.fathers_Name}}</dd><br>\n    <dd style=\"color:green\">   Spouse - {{j.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{j.Highest_Education}},{{j.University}}</dd><br>\n    <dd style=\"color:indigo\">   Address - {{j.Address}}</dd><br>\n    <dd style=\"color:maroon\">   Email -  {{j.Email_address}}</dd><br>\n    <dd style=\"color:teal\">   Mobile - {{j.Mobile}}</dd><br>\n  </h3>\n</ion-content>\n");

/***/ }),

/***/ "eDlP":
/*!***********************************************************!*\
  !*** ./src/app/rajyasabhaleader/rajyasabhaleader.page.ts ***!
  \***********************************************************/
/*! exports provided: RajyasabhaleaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RajyasabhaleaderPage", function() { return RajyasabhaleaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rajyasabhaleader_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rajyasabhaleader.page.html */ "HxZq");
/* harmony import */ var _rajyasabhaleader_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rajyasabhaleader.page.scss */ "829c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/k */ "Ew1Z");







let RajyasabhaleaderPage = class RajyasabhaleaderPage {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.k = [];
        this.z = [];
        this.k2 = [];
        this.selected = null;
        this.user.rajleader().subscribe(data => {
            console.warn(data);
            this.k = data;
        });
        this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.zz = this.zz.slice(0, -1);
    }
    ngOnInit() {
    }
};
RajyasabhaleaderPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RajyasabhaleaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rajyasabhaleader',
        template: _raw_loader_rajyasabhaleader_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rajyasabhaleader_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RajyasabhaleaderPage);



/***/ }),

/***/ "pueS":
/*!*********************************************************************!*\
  !*** ./src/app/rajyasabhaleader/rajyasabhaleader-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RajyasabhaleaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RajyasabhaleaderPageRoutingModule", function() { return RajyasabhaleaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rajyasabhaleader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rajyasabhaleader.page */ "eDlP");




const routes = [
    {
        path: '',
        component: _rajyasabhaleader_page__WEBPACK_IMPORTED_MODULE_3__["RajyasabhaleaderPage"]
    }
];
let RajyasabhaleaderPageRoutingModule = class RajyasabhaleaderPageRoutingModule {
};
RajyasabhaleaderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RajyasabhaleaderPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=rajyasabhaleader-rajyasabhaleader-module-es2015.js.map