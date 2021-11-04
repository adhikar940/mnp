(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assembly2-assembly2-module"],{

/***/ "/waR":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assembly2/assembly2.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>assembly2</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h2>Assembly MLA - {{z1}}</h2>\n\n    <h6 *ngFor=\"let item of z\" >\n  <h5  *ngIf=\"(item.State_name) === (z2)\">\n    <h1 *ngFor=\"let i of item.Assembly_Candidates\">\n<h3  *ngIf=\"(i.MLA_name) === (z1)\">\n  <img src=\"{{zz}}{{i.photo}}\" width=\"400\" height=\"500\"  >\n        <dd style=\"color:darkolivegreen\"> Gender - {{i.gender}}</dd><br>\n      <dd style=\"color:Tomato\">   Party - {{i.party_name}}</dd><br>\n      <dd style=\"color:brown\">   Constituency - {{i.constituency_name}}</dd><br>\n      <!-- <dd style=\"color:green\">   District - {{i.Districts}}</dd><br> -->\n      <dd style=\"color:brown\">   Father - {{i.fathers_Name}}</dd><br>\n      <dd style=\"color:green\">   Spouse - {{i.Spouse_Name}}</dd><br>\n        <dd style=\"color:chocolate\">   Education - {{i.Highest_Education}},{{i.University}}</dd><br>\n      <dd style=\"color:indigo\">   Address - {{i.address}}</dd><br>\n      <dd style=\"color:maroon\">   Email -  {{i.Email_address}}</dd><br>\n      <dd style=\"color:teal\">   Mobile - {{i.Mobile}}</dd><br>\n  </h3>\n  </h1>\n</h5>\n  </h6>\n</ion-content>\n");

/***/ }),

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

/***/ "IeUA":
/*!***********************************************!*\
  !*** ./src/app/assembly2/assembly2.module.ts ***!
  \***********************************************/
/*! exports provided: Assembly2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assembly2PageModule", function() { return Assembly2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assembly2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assembly2-routing.module */ "fkBY");
/* harmony import */ var _assembly2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assembly2.page */ "vXXf");







let Assembly2PageModule = class Assembly2PageModule {
};
Assembly2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assembly2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Assembly2PageRoutingModule"]
        ],
        declarations: [_assembly2_page__WEBPACK_IMPORTED_MODULE_6__["Assembly2Page"]]
    })
], Assembly2PageModule);



/***/ }),

/***/ "fkBY":
/*!*******************************************************!*\
  !*** ./src/app/assembly2/assembly2-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Assembly2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assembly2PageRoutingModule", function() { return Assembly2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assembly2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assembly2.page */ "vXXf");




const routes = [
    {
        path: '',
        component: _assembly2_page__WEBPACK_IMPORTED_MODULE_3__["Assembly2Page"]
    }
];
let Assembly2PageRoutingModule = class Assembly2PageRoutingModule {
};
Assembly2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Assembly2PageRoutingModule);



/***/ }),

/***/ "vXXf":
/*!*********************************************!*\
  !*** ./src/app/assembly2/assembly2.page.ts ***!
  \*********************************************/
/*! exports provided: Assembly2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assembly2Page", function() { return Assembly2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assembly2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assembly2.page.html */ "/waR");
/* harmony import */ var _assembly2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assembly2.page.scss */ "wH8U");
/* harmony import */ var _assembly_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assembly.service */ "e4YJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/k */ "Ew1Z");







let Assembly2Page = class Assembly2Page {
    constructor(user, route, router) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.z = [];
        this.user.am().subscribe(data => {
            console.warn(data);
            this.z = data;
        });
        this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.zz = this.zz.slice(0, -1);
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.z1 = params.get('id');
            this.z2 = params.get('state');
        });
    }
    ;
};
Assembly2Page.ctorParameters = () => [
    { type: _assembly_service__WEBPACK_IMPORTED_MODULE_3__["AssemblyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Assembly2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-assembly2',
        template: _raw_loader_assembly2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assembly2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Assembly2Page);



/***/ }),

/***/ "wH8U":
/*!***********************************************!*\
  !*** ./src/app/assembly2/assembly2.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2VtYmx5Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSw4QkFBQTtFQUNGLGVBQUE7QUFFRiIsImZpbGUiOiJhc3NlbWJseTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggY3lhbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjo1cHhcbn1cbmltZzpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgdHJhbnNpdGlvbjogNXM7XG59XG5oMntcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggZ3JlZW47XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=assembly2-assembly2-module-es2015.js.map