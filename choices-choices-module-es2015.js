(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choices-choices-module"],{

/***/ "EmJI":
/*!*******************************************!*\
  !*** ./src/app/choices/choices.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nob2ljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFISiIsImZpbGUiOiJjaG9pY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxufVxuIl19 */");

/***/ }),

/***/ "MGs2":
/*!***************************************************!*\
  !*** ./src/app/choices/choices-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChoicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesPageRoutingModule", function() { return ChoicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choices.page */ "X4mn");




const routes = [
    {
        path: '',
        component: _choices_page__WEBPACK_IMPORTED_MODULE_3__["ChoicesPage"]
    }
];
let ChoicesPageRoutingModule = class ChoicesPageRoutingModule {
};
ChoicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChoicesPageRoutingModule);



/***/ }),

/***/ "NMOl":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choices/choices.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>choices</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-row>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"btnclick()\">\n      Change Password<br/>\n    </ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"logout()\">\n      Logout<br/>\n    </ion-button>\n  </ion-col>\n</ion-row>\n<center>\n<h4>For any suggestions/complaints/queries mail us at adhikar940@gmail.com </h4>\n</center>\n  <ion-card [routerLink]=\"['/states','lokc']\" >\n    <img src=\"assets/loksabha.jpg\"  width=\"1000\" height=\"300\" >\n    <div class=\"card-title\" >Loksabha Members</div>\n\n  </ion-card>\n\n  <ion-card routerLink=\"/partycandidates\">\n    <img  src=\"assets/Rajya-Sabha.jpg\"  width=\"1000\" height=\"300\" >\n    <div class=\"card-title\" >RajyaSabha Members</div>\n\n  </ion-card>\n\n  <ion-card [routerLink]=\"['/states','ac']\">\n    <img  src=\"assets/assembly.jpg\" width=\"1000\" height=\"300\">\n    <div class=\"card-title\" >Legistlative Assembly Members</div>\n  </ion-card>\n  <ion-card routerLink=\"/council\">\n    <img  src=\"assets/coucil.jpg\" width=\"1000\" height=\"300\">\n    <div class=\"card-title\" >Legislative Council Members</div>\n  </ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "WWo0":
/*!*******************************************!*\
  !*** ./src/app/choices/choices.module.ts ***!
  \*******************************************/
/*! exports provided: ChoicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesPageModule", function() { return ChoicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choices-routing.module */ "MGs2");
/* harmony import */ var _choices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choices.page */ "X4mn");







let ChoicesPageModule = class ChoicesPageModule {
};
ChoicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choices_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoicesPageRoutingModule"]
        ],
        declarations: [_choices_page__WEBPACK_IMPORTED_MODULE_6__["ChoicesPage"]]
    })
], ChoicesPageModule);



/***/ }),

/***/ "X4mn":
/*!*****************************************!*\
  !*** ./src/app/choices/choices.page.ts ***!
  \*****************************************/
/*! exports provided: ChoicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesPage", function() { return ChoicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choices_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choices.page.html */ "NMOl");
/* harmony import */ var _choices_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choices.page.scss */ "EmJI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ChoicesPage = class ChoicesPage {
    constructor(navCtrl, router, alertCtrl, route) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    ;
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                message: '<strong>Do you want to Logout !</strong>',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            localStorage.clear();
                            this.navCtrl.navigateBack('/login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    btnclick() {
        this.navCtrl.navigateBack('/changepassword');
    }
};
ChoicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ChoicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choices',
        template: _raw_loader_choices_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choices_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChoicesPage);



/***/ })

}]);
//# sourceMappingURL=choices-choices-module-es2015.js.map