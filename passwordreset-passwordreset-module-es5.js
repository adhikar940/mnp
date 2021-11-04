(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passwordreset-passwordreset-module"], {
    /***/
    "0Y1x":
    /*!*******************************************************!*\
      !*** ./src/app/passwordreset/passwordreset.module.ts ***!
      \*******************************************************/

    /*! exports provided: PasswordresetPageModule */

    /***/
    function Y1x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function () {
        return PasswordresetPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _passwordreset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./passwordreset-routing.module */
      "YKC6");
      /* harmony import */


      var _passwordreset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./passwordreset.page */
      "g89Q");

      var PasswordresetPageModule = function PasswordresetPageModule() {
        _classCallCheck(this, PasswordresetPageModule);
      };

      PasswordresetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _passwordreset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordresetPageRoutingModule"]],
        declarations: [_passwordreset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordresetPage"]]
      })], PasswordresetPageModule);
      /***/
    },

    /***/
    "YKC6":
    /*!***************************************************************!*\
      !*** ./src/app/passwordreset/passwordreset-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PasswordresetPageRoutingModule */

    /***/
    function YKC6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordresetPageRoutingModule", function () {
        return PasswordresetPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _passwordreset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./passwordreset.page */
      "g89Q");

      var routes = [{
        path: '',
        component: _passwordreset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordresetPage"]
      }];

      var PasswordresetPageRoutingModule = function PasswordresetPageRoutingModule() {
        _classCallCheck(this, PasswordresetPageRoutingModule);
      };

      PasswordresetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasswordresetPageRoutingModule);
      /***/
    },

    /***/
    "dKfP":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/passwordreset.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function dKfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>passwordreset</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"border-radius: 10px;\">\n    <!-- <ion-item>\n      <label>Email</label>\n      <ion-input name=\"email\" [(ngModel)]=\"email\" >{{}}</ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-input name=\"password\" [(ngModel)]=\"password\" [type]=\"isTextFieldType ? 'text':'password'\" #pass required placeholder=\"Please enter the new Password\"></ion-input>\n      <ion-icon slot=\"start\" style=\"color:darkorchid\" [name]=\"isTextFieldType ? 'eye-off':'eye'\" (click)=\"togglePasswordFieldType()\"></ion-icon>\n     </ion-item>\n  </ion-card>\n <div style=\"text-align: center;\" ><ion-button shape=\"round\" color=\"light\" (click) =\"btnclick(password)\">Submit</ion-button>\n </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "g89Q":
    /*!*****************************************************!*\
      !*** ./src/app/passwordreset/passwordreset.page.ts ***!
      \*****************************************************/

    /*! exports provided: PasswordresetPage */

    /***/
    function g89Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordresetPage", function () {
        return PasswordresetPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_passwordreset_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./passwordreset.page.html */
      "dKfP");
      /* harmony import */


      var _passwordreset_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./passwordreset.page.scss */
      "uOmx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__); // import Swal from 'sweetalert2';


      var PasswordresetPage = /*#__PURE__*/function () {
        function PasswordresetPage(user, route, router) {
          _classCallCheck(this, PasswordresetPage);

          this.user = user;
          this.route = route;
          this.router = router;
          this.token = this.router.getCurrentNavigation().extractedUrl;
          this.token = this.token.queryParams.token;
        }

        _createClass(PasswordresetPage, [{
          key: "togglePasswordFieldType",
          value: function togglePasswordFieldType() {
            this.isTextFieldType = !this.isTextFieldType;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnclick",
          value: function btnclick(password) {
            console.log(password);

            if (password == null) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Please enter password here');
            } else {
              if (password.length < 8) {
                //  this.user.toast('This password is too short. It must contain at least 8 characters. This is too common','bottom',3000,'normalToast')
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('This password is too short. It must contain at least 8 characters');
              } else {
                this.user.confirmpassword(password, this.token).subscribe(function (res) {
                  console.log(res);

                  if (res.status == "OK") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Password Updated Successfully');
                  }
                });
              }
            }
          }
        }]);

        return PasswordresetPage;
      }();

      PasswordresetPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      PasswordresetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passwordreset',
        template: _raw_loader_passwordreset_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passwordreset_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PasswordresetPage);
      /***/
    },

    /***/
    "uOmx":
    /*!*******************************************************!*\
      !*** ./src/app/passwordreset/passwordreset.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function uOmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZHJlc2V0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=passwordreset-passwordreset-module-es5.js.map