(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["green-green-module"],{

/***/ "/leK":
/*!***************************************!*\
  !*** ./src/app/green/green.module.ts ***!
  \***************************************/
/*! exports provided: GreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenPageModule", function() { return GreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _green_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./green-routing.module */ "uWiW");
/* harmony import */ var _green_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./green.page */ "QAAQ");







let GreenPageModule = class GreenPageModule {
};
GreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _green_routing_module__WEBPACK_IMPORTED_MODULE_5__["GreenPageRoutingModule"]
        ],
        declarations: [_green_page__WEBPACK_IMPORTED_MODULE_6__["GreenPage"]]
    })
], GreenPageModule);



/***/ }),

/***/ "E+1a":
/*!***************************************!*\
  !*** ./src/app/green/green.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\nh1 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ047QUFDSTtFQUNFLDZCQUFBO0FBQ047QUFFSTtFQUNFLDhCQUFBO0FBQU47QUFHRTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRixlQUFBO0FBQUo7QUFFRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImdyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG4gIFxuICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMyZGQzNmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gIFxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICB9XG4gIGgye1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggZ3JlZW47XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG4gIGgxe1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDZweCBjeWFuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxufVxuICAiXX0= */");

/***/ }),

/***/ "QAAQ":
/*!*************************************!*\
  !*** ./src/app/green/green.page.ts ***!
  \*************************************/
/*! exports provided: GreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenPage", function() { return GreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_green_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./green.page.html */ "djLB");
/* harmony import */ var _green_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./green.page.scss */ "E+1a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GreenPage = class GreenPage {
    constructor() { }
    Getselected(selected_value) {
        // alert("")
        console.log(selected_value);
        console.log("selector: ", selected_value);
    }
    ngOnInit() {
    }
};
GreenPage.ctorParameters = () => [];
GreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-green',
        template: _raw_loader_green_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_green_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GreenPage);



/***/ }),

/***/ "djLB":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/green/green.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Green</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4 style=\"text-align:center\">Please Select State Here</h4>\n  <ion-item style=\"border-radius: 100px;\">\n  <ion-label>State Name:</ion-label>\n  <ion-select [(ngModel)]=\"selected_value\" placeholder=\"Select State\"(ionChange)=\"Getselected(selected_value)\" [ngModelOptions]=\"{standalone: true}\"> \n    <ion-select-option value=\"West Bengal\">West Bengal</ion-select-option>\n    <ion-select-option value=\"Assam\">Assam</ion-select-option>\n    <ion-select-option value=\"Kerala(140)\">Kerala(140)</ion-select-option>\n    <ion-select-option value=\"Tamilnadu(234)\"> Tamilnadu(234) </ion-select-option>\n    <ion-select-option value=\"Puducherry(30)\">Puducherry(30)</ion-select-option>\n </ion-select></ion-item>\n <div *ngIf=\"selected_value=='West Bengal'\">\n  <h1 style=\"color:blue;text-align: center;\" >West Bengal (294) </h1>\n <ion-grid class=\"padding\" >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >30 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">4</ion-col>\n    <ion-col  size=\"3\" >44 </ion-col>\n    <ion-col  size=\"4\">10-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">5</ion-col>\n    <ion-col  size=\"3\" >45 </ion-col>\n    <ion-col  size=\"4\">17-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">6</ion-col>\n    <ion-col  size=\"3\" >43 </ion-col>\n    <ion-col  size=\"4\">22-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">7</ion-col>\n    <ion-col  size=\"3\" >36 </ion-col>\n    <ion-col  size=\"4\">26-4-21(Monday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">8</ion-col>\n    <ion-col  size=\"3\" >35</ion-col>\n    <ion-col  size=\"4\">29-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row></ion-grid></div>\n  <div *ngIf=\"selected_value=='Assam'\">\n    <h1 style=\"color:blue;text-align: center;\" >Assam (126) </h1>\n    <ion-grid class=\"padding\"  >\n    <ion-row>\n    <ion-col size=\"1\">Phase</ion-col>\n      <ion-col size=\"3\">Seats</ion-col>\n      <ion-col size=\"4\">Date of voting</ion-col>\n      <ion-col size=\"4\">Date of Counting</ion-col>\n  \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">1</ion-col>\n      <ion-col  size=\"3\" >47 </ion-col>\n      <ion-col  size=\"4\">1-4-21(Saturday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">2</ion-col>\n      <ion-col  size=\"3\" >39 </ion-col>\n      <ion-col  size=\"4\">27-3-21(Thursday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">3</ion-col>\n      <ion-col  size=\"3\" >40 </ion-col>\n      <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    </ion-grid>\n\n  </div>\n  <div *ngIf=\"selected_value=='Kerala(140)' || selected_value=='Tamilnadu(234)' || selected_value=='Puducherry(30)'\">\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Kerala(140)'\">Kerala(140)</h1>\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Tamilnadu(234)'\">Tamilnadu(234) </h1>\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Puducherry(30)'\">Puducherry(30)</h1>\n    \n<ion-grid class=\"padding\"  >\n<ion-row>\n<ion-col size=\"1\">Phase</ion-col>\n  <ion-col size=\"3\">Seats</ion-col>\n  <ion-col size=\"4\">Date of voting</ion-col>\n  <ion-col size=\"4\">Date of Counting</ion-col>\n</ion-row>\n<ion-row >\n  <ion-col  size=\"1\">1</ion-col>\n  <ion-col  size=\"3\" >All </ion-col>\n  <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n  <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n</ion-row>\n</ion-grid></div>\n    <!-- <h2>Election schedule</h2>\n    <h1 color='blue' >West Bengal (294) </h1>\n  <ion-grid class=\"padding\"  >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >30 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">4</ion-col>\n    <ion-col  size=\"3\" >44 </ion-col>\n    <ion-col  size=\"4\">10-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">5</ion-col>\n    <ion-col  size=\"3\" >45 </ion-col>\n    <ion-col  size=\"4\">17-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">6</ion-col>\n    <ion-col  size=\"3\" >43 </ion-col>\n    <ion-col  size=\"4\">22-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">7</ion-col>\n    <ion-col  size=\"3\" >36 </ion-col>\n    <ion-col  size=\"4\">26-4-21(Monday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">8</ion-col>\n    <ion-col  size=\"3\" >35</ion-col>\n    <ion-col  size=\"4\">29-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  </ion-grid>\n    <h1 color='blue' >Assam (126) </h1>\n  <ion-grid class=\"padding\"  >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >47 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  </ion-grid>\n  <h1 color='blue' >Kerala(140), Tamilnadu(234) and Puducherry(30)</h1>\n<ion-grid class=\"padding\"  >\n<ion-row>\n<ion-col size=\"1\">Phase</ion-col>\n  <ion-col size=\"3\">Seats</ion-col>\n  <ion-col size=\"4\">Date of voting</ion-col>\n  <ion-col size=\"4\">Date of Counting</ion-col>\n</ion-row>\n<ion-row >\n  <ion-col  size=\"1\">1</ion-col>\n  <ion-col  size=\"3\" >All </ion-col>\n  <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n  <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n</ion-row>\n</ion-grid> -->\n</ion-content>\n");

/***/ }),

/***/ "uWiW":
/*!***********************************************!*\
  !*** ./src/app/green/green-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenPageRoutingModule", function() { return GreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _green_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./green.page */ "QAAQ");




const routes = [
    {
        path: '',
        component: _green_page__WEBPACK_IMPORTED_MODULE_3__["GreenPage"]
    }
];
let GreenPageRoutingModule = class GreenPageRoutingModule {
};
GreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GreenPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=green-green-module-es2015.js.map