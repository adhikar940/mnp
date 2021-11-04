(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"],{

/***/ "8gUA":
/*!*****************************************************************!*\
  !*** ./src/app/changepassword/changepassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangepasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageRoutingModule", function() { return ChangepasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.page */ "hHVW");




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordPage"]
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ "bzAX":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "dNuZ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content><br>\n  <h2 style=\"color:blue;text-align:center\">Change Password</h2>\n  <form #form=\"ngForm\" (ngSubmit)=\"save(old_password,new_password)\">\n  <ion-item style=\"border-radius: 10px;background-color: white;\">\n    <ion-input name=\"old_password\" [(ngModel)]=\"old_password\" [type]=\"isTextFieldType ? 'text':'password'\" #oldpass required placeholder=\"Old Password\"></ion-input>\n    <ion-icon slot=\"start\" style=\"color:orangered\" [name]=\"isTextFieldType ? 'eye-off':'eye'\" (click)=\"togglePasswordFieldType()\"></ion-icon>\n  </ion-item><br>\n  <ion-item style=\"border-radius: 10px;background-color: white;\">\n    \n    <ion-input [type]=\"isTextField ? 'text':'password'\" [(ngModel)]=\"new_password\" name=\"new_password\" #newpass required placeholder=\"New Password\"></ion-input>\n    <ion-icon slot=\"start\" style=\"color: blue;\" [name]=\"isTextField ? 'eye-off':'eye'\" (click)=\"togglePasswordField()\"></ion-icon>\n  </ion-item><br>\n<div style=\"text-align: center;\"><ion-button  id=\"submit\" color=\"success\" type=\"Submit\">Submit</ion-button></div>\n</form>\n</ion-content>\n");

/***/ }),

/***/ "hHVW":
/*!*******************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_changepassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./changepassword.page.html */ "dNuZ");
/* harmony import */ var _changepassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changepassword.page.scss */ "bzAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "Ol7V");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ChangepasswordPage = class ChangepasswordPage {
    constructor(user, navCtrl) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.user1 = {};
    }
    togglePasswordFieldType() {
        this.isTextFieldType = !this.isTextFieldType;
    }
    togglePasswordField() {
        this.isTextField = !this.isTextField;
    }
    ngOnInit() {
        this.user1 = JSON.stringify(localStorage.token);
    }
    save(old_password, new_password) {
        let userdata = { old_password: old_password, new_password: new_password, token: this.user1 };
        this.user.changepassword(userdata).subscribe((res) => {
            console.log(res);
            if (res.message == "Password updated successfully") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Password updated successfully");
                this.navCtrl.navigateBack('/login');
            }
        });
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
ChangepasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-changepassword',
        template: _raw_loader_changepassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_changepassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangepasswordPage);



/***/ }),

/***/ "u0FJ":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepassword-routing.module */ "8gUA");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.page */ "hHVW");







let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPageRoutingModule"]
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
    })
], ChangepasswordPageModule);



/***/ })

}]);
//# sourceMappingURL=changepassword-changepassword-module-es2015.js.map