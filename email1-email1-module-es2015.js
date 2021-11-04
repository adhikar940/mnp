(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email1-email1-module"],{

/***/ "RS2t":
/*!***************************************!*\
  !*** ./src/app/email1/email1.page.ts ***!
  \***************************************/
/*! exports provided: Email1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email1Page", function() { return Email1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email1.page.html */ "fwqK");
/* harmony import */ var _email1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email1.page.scss */ "bPNK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








let Email1Page = class Email1Page {
    constructor(navParms, user, router, navCtrl) {
        this.navParms = navParms;
        this.user = user;
        this.router = router;
        this.navCtrl = navCtrl;
        this.email = navParms.get('email');
        this.id = navParms.get('id');
        this.email1 = navParms.get('email1');
    }
    btnclick(reemail) {
        console.log(reemail);
        if (reemail == this.email) {
            this.user.emailForm(this.email, this.email1, this.id).subscribe((res) => {
                console.log(res);
                if (res.m == "This email alerady exists") {
                    this.user.toast("This email is already exists", 'bottom', 2000, 'normalToast');
                }
                if (res.m == "Failed to deliver the mail, Hemce the account not created. This may due to invalid email. Kindly provide a Valid email") {
                    this.user.toast("Failed to deliver the mail, Hemce the account not …ue to invalid email. Kindly provide a Valid email", 'bottom', 2000, 'normalToast');
                }
                if (res.m == "This party is already activated") {
                    this.user.toast("This party is already activated", 'bottom', 2000, 'noramlToast');
                }
            });
        }
        else {
            // this.user.toast('This is not matched with previous email','bottom',2000,'normalToast');
            this.navCtrl.navigateBack('/emailform');
        }
    }
    ngOnInit() {
    }
};
Email1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
Email1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-email1',
        template: _raw_loader_email1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Email1Page);



/***/ }),

/***/ "V2C6":
/*!*************************************************!*\
  !*** ./src/app/email1/email1-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Email1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email1PageRoutingModule", function() { return Email1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email1.page */ "RS2t");




const routes = [
    {
        path: '',
        component: _email1_page__WEBPACK_IMPORTED_MODULE_3__["Email1Page"]
    }
];
let Email1PageRoutingModule = class Email1PageRoutingModule {
};
Email1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Email1PageRoutingModule);



/***/ }),

/***/ "bPNK":
/*!*****************************************!*\
  !*** ./src/app/email1/email1.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbDEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fwqK":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/email1/email1.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>emailform</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"color:blue;text-align:center;\">Please enter email here</h2>\n  <ion-item style=\"border-radius: 50px;\">\n    <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n\n<ion-input id=\"email\" required email placeholder=\"Enter party's mail\" type=\"text\" class=\"form-control\"\nname=\"email\" [(ngModel)] =\"email\" >\n</ion-input>\n  </ion-item> <br/>\n  \n   <div style=\"text-align: center;\"> <ion-button color=\"secondary\" (click)=\"btnclick(email)\">Activate</ion-button></div>\n  \n</ion-content> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>confirmemail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"color:blue;text-align:center;\">Please Re-enter email here</h2>\n  <ion-item style=\"border-radius: 50px;\">\n    <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n    <ion-input id=\"email\" required email placeholder=\"Enter party's mail\" type=\"text\" class=\"form-control\" name=\"reemail\" [(ngModel)]=\"reemail\">\n    </ion-input>\n  </ion-item>\n  <br/>\n  <div style=\"text-align: center;\">\n     <ion-button color=\"secondary\" (click)=\"btnclick(reemail)\">Activate</ion-button>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "tlU+":
/*!*****************************************!*\
  !*** ./src/app/email1/email1.module.ts ***!
  \*****************************************/
/*! exports provided: Email1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email1PageModule", function() { return Email1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _email1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email1-routing.module */ "V2C6");
/* harmony import */ var _email1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email1.page */ "RS2t");







let Email1PageModule = class Email1PageModule {
};
Email1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _email1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Email1PageRoutingModule"]
        ],
        declarations: [_email1_page__WEBPACK_IMPORTED_MODULE_6__["Email1Page"]]
    })
], Email1PageModule);



/***/ })

}]);
//# sourceMappingURL=email1-email1-module-es2015.js.map