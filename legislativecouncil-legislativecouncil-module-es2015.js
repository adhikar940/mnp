(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legislativecouncil-legislativecouncil-module"],{

/***/ "69pI":
/*!*************************************************************************!*\
  !*** ./src/app/legislativecouncil/legislativecouncil-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LegislativecouncilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegislativecouncilPageRoutingModule", function() { return LegislativecouncilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _legislativecouncil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legislativecouncil.page */ "Jt0c");




const routes = [
    {
        path: '',
        component: _legislativecouncil_page__WEBPACK_IMPORTED_MODULE_3__["LegislativecouncilPage"]
    }
];
let LegislativecouncilPageRoutingModule = class LegislativecouncilPageRoutingModule {
};
LegislativecouncilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LegislativecouncilPageRoutingModule);



/***/ }),

/***/ "EI6K":
/*!*****************************************************************!*\
  !*** ./src/app/legislativecouncil/legislativecouncil.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n\nimg {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n\nion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n\nion-grid ion-row:first-child {\n  font-weight: bold;\n}\n\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\n\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlZ2lzbGF0aXZlY291bmNpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUVFO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ047O0FBT0U7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPRTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU1JO0VBRUUsaUJBQUE7QUFMTjs7QUFPSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTE47O0FBT0k7RUFDRSw2QkFBQTtBQUxOOztBQVFJO0VBQ0UsOEJBQUE7QUFOTiIsImZpbGUiOiJsZWdpc2xhdGl2ZWNvdW5jaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gIH1cbiAgaW1ne1xuXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOjVweFxuICB9XG4gIGltZzpob3ZlcntcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICAgIHRyYW5zaXRpb246IDVzO1xuICB9XG4gIC8vIGgye1xuICAvLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLy8gICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgLy8gICAgZm9udC1zaXplOiA2MHB4O1xuXG4gIC8vIH1cbiAgaDJ7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA2cHggY3lhbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuXG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcblxuICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuIl19 */");

/***/ }),

/***/ "JsKL":
/*!*****************************************************************!*\
  !*** ./src/app/legislativecouncil/legislativecouncil.module.ts ***!
  \*****************************************************************/
/*! exports provided: LegislativecouncilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegislativecouncilPageModule", function() { return LegislativecouncilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _legislativecouncil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legislativecouncil-routing.module */ "69pI");
/* harmony import */ var _legislativecouncil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legislativecouncil.page */ "Jt0c");







let LegislativecouncilPageModule = class LegislativecouncilPageModule {
};
LegislativecouncilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _legislativecouncil_routing_module__WEBPACK_IMPORTED_MODULE_5__["LegislativecouncilPageRoutingModule"]
        ],
        declarations: [_legislativecouncil_page__WEBPACK_IMPORTED_MODULE_6__["LegislativecouncilPage"]]
    })
], LegislativecouncilPageModule);



/***/ }),

/***/ "Jt0c":
/*!***************************************************************!*\
  !*** ./src/app/legislativecouncil/legislativecouncil.page.ts ***!
  \***************************************************************/
/*! exports provided: LegislativecouncilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegislativecouncilPage", function() { return LegislativecouncilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_legislativecouncil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./legislativecouncil.page.html */ "McP1");
/* harmony import */ var _legislativecouncil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legislativecouncil.page.scss */ "EI6K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _legislativecouncil1_legislativecouncil1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../legislativecouncil1/legislativecouncil1.page */ "y1As");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/k */ "Ew1Z");









let LegislativecouncilPage = class LegislativecouncilPage {
    constructor(user, router, modalctrl) {
        this.user = user;
        this.router = router;
        this.modalctrl = modalctrl;
        this.index = 0;
        this.council = [];
        this.legislative = [];
        this.State_name = {};
        this.dis1 = [];
        this.co = {};
        this.const = [];
        this.items = [];
        this.item1 = [];
        this.user.statedistrict().subscribe(data => {
            this.items = data;
        });
        this.user.legislativecouncil().subscribe(data => {
            this.council = data;
            // console.log(this.council.length);
            for (let i = 0; i < this.council.length; i++) {
                // console.log(data[i].State_name)
                if (data[i].State_name == 'Andhra Pradesh' || data[i].State_name == 'Telangana' || data[i].State_name == 'Uttar Pradesh' || data[i].State_name == 'Bihar' || data[i].State_name == 'Maharashtra' || data[i].State_name == 'Karnataka') {
                    this.legislative.push(data[i]);
                }
                // console.log(this.legislative);
            }
        });
        this.zz = _data_k__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.zz = this.zz.slice(0, -1);
    }
    ngOnInit() {
    }
    // btnClicked(co){
    //   for(let i=0;i<co.Legislative_Council_Candidates.length;i++){
    //     // console.log(co.Legislative_Council_Candidates[i].Districts);
    //     this.dis1=co.Legislative_Council_Candidates[i];
    //     console.log(this.dis1)
    //   }
    // }
    Getselected(co) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(co);
            alert("submitted");
            const modal = yield this.modalctrl.create({
                component: _legislativecouncil1_legislativecouncil1_page__WEBPACK_IMPORTED_MODULE_6__["Legislativecouncil1Page"],
                componentProps: { legislativecouncil: co }
            });
            yield modal.present();
            console.log(co);
            console.log("selector: ", co);
        });
    }
    btnClicked() {
        this.index = 10;
        this.user.council(this.state).subscribe(data => {
            this.item1 = data;
        });
    }
};
LegislativecouncilPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
LegislativecouncilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legislativecouncil',
        template: _raw_loader_legislativecouncil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legislativecouncil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LegislativecouncilPage);



/***/ }),

/***/ "McP1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legislativecouncil/legislativecouncil.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>legislativecouncil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<br>\n<br>\n<ion-item>\n      <ion-label><b><h1 style=\"color:blue; font-size:30px\"><b><center>Legistlative Council Candidates</center></b></h1></b></ion-label>\n</ion-item>\n  <ion-item>\n    <ion-label style=\"color:Maroon\"><b>State</b></ion-label>\n\n    <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\"  [(ngModel)]=\"state\">\n  <div *ngFor=\"let item of items\">\n    <div  *ngIf=\"(item.State_name) === 'Andhra Pradesh'||(item.State_name) === 'Uttar Pradesh'||(item.State_name)=='Telangana'||(item.State_name)=='Bihar'||(item.State_name)=='Maharashtra'||(item.State_name)=='Karnataka'\">\n      <ion-select-option value={{item.id}}>{{ item.State_name }}</ion-select-option> </div>\n</div>\n    </ion-select>\n</ion-item>\n<ion-button color=\"medium\" (click)=\"btnClicked()\" >Submit</ion-button>\n<ion-grid class=\"padding\">\n<ion-row *ngIf=\"index\">\n  <ion-col size=\"3.5\"><b style=\"color:Olive; font-size:20px\">Photo</b></ion-col>\n  <ion-col size=\"2.5\"><b style=\"color:Olive; font-size:20px\">MLA Name</b></ion-col>\n  <ion-col size=\"2.5\"><b style=\"color:Olive; font-size:20px\">Party</b></ion-col>\n  <ion-col size=\"3.5\"><b style=\"color:Olive; font-size:20px\">Elected</b></ion-col>\n</ion-row>\n<div *ngFor=\"let i of item1\">\n<ion-row >\n<ion-col  size=\"3.5\" [routerLink]=\"['/legislativecouncil1',i.id]\" ><img src=\"{{z}}{{i.photo}}\" alt=\"No Image\" width=\"130\" height=\"130\"> </ion-col>\n<ion-col  size=\"2.5\" [routerLink]=\"['/legislativecouncil1',i.id]\"><b>{{i.MLC_name}} </b></ion-col>\n<ion-col  size=\"2.5\">{{i.party}}</ion-col>\n<ion-col  size=\"3.5\">{{i.elected}}</ion-col>\n</ion-row>\n  </div>\n</ion-grid>\n<!--\n  <ion-chip>\n    <h1 style=\"color:blue; font-size:150%;  \">The states having the Legistlative councils are Andhra Pradesh, Karnataka, Telangana, Maharashtra, Bihar, and Uttar Pradesh </h1>\n\n  </ion-chip >\n  <h6 *ngFor=\"let item of council\" >\n<ion-grid  *ngIf=\"(item.State_name) === 'Andhra Pradesh'||(item.State_name) === 'Uttar Pradesh'||(item.State_name)=='Telangana'||(item.State_name)=='Bihar'||(item.State_name)=='Maharashtra'||(item.State_name)=='Karnataka'\">\n    <h2 style=\"color:blue;text-align: center;\">{{item.State_name}}</h2>\n<br>\n<br>\n<ion-row >\n<ion-col size=\"1\"><b>Sl.no</b></ion-col>\n  <ion-col size=\"2.5\"><b>Photo</b></ion-col>\n  <ion-col size=\"2.5\"><b>MLC Name</b></ion-col>\n  <ion-col size=\"2.5\"><b>Party</b></ion-col>\n  <ion-col size=\"3.5\"><b>Elected</b></ion-col>\n</ion-row>\n<ion-row *ngFor=\"let i of item.Legislative_Council_Candidates; index as m\">\n  <ion-col  size=\"1\">{{m+1}}</ion-col>\n  <ion-col  size=\"2.5\" [routerLink]=\"['/legislativecouncil1',i.MLC_name,item.State_name,i.chldid]\"><img src=\"{{zz}}{{i.photo}}\" alt=\"No Image\" width=\"130\" height=\"130\"> </ion-col>\n  <ion-col  size=\"2.5\" [routerLink]=\"['/legislativecouncil1',i.MLC_name,item.State_name,i.chldid]\"><b>{{i.MLC_name}} </b></ion-col>\n  <ion-col  size=\"2.5\">{{i.party}}</ion-col>\n  <ion-col  size=\"3.5\">{{elected}}</ion-col>\n\n</ion-row>\n  </ion-grid>\n    </h6>\n-->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=legislativecouncil-legislativecouncil-module-es2015.js.map