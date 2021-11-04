(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"], {
    /***/
    "/oEb":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function oEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>forgotpassword</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"border-radius: 10px;\">\n    <ion-item>\n      <ion-input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter your email\"></ion-input>\n    </ion-item>\n    </ion-card>\n    <div style=\"text-align: center;\">\n    <ion-button color=\"secondary\" (click)=\"forgot(email)\">Verify</ion-button></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "IoKB":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotpasswordPageModule */

    /***/
    function IoKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function () {
        return ForgotpasswordPageModule;
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


      var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgotpassword-routing.module */
      "yrZY");
      /* harmony import */


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var ForgotpasswordPageModule = function ForgotpasswordPageModule() {
        _classCallCheck(this, ForgotpasswordPageModule);
      };

      ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
      })], ForgotpasswordPageModule);
      /***/
    },

    /***/
    "M/+l":
    /*!*********************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Nmh1":
    /*!*******************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotpasswordPage */

    /***/
    function Nmh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
        return ForgotpasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgotpassword.page.html */
      "/oEb");
      /* harmony import */


      var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgotpassword.page.scss */
      "M/+l");
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ForgotpasswordPage = /*#__PURE__*/function () {
        // status:any;
        function ForgotpasswordPage(user, router, navCtrl) {
          _classCallCheck(this, ForgotpasswordPage);

          this.user = user;
          this.router = router;
          this.navCtrl = navCtrl;
        }

        _createClass(ForgotpasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "forgot",
          value: function forgot(email) {
            var _this = this;

            var userdata = {
              email: email
            };

            if (email == null) {
              this.user.toast("Please enter your email", 'bottom', 2000, 'normalToast');
            } else {
              this.user.forgotpassword(userdata).subscribe(function (res) {
                console.log(res);

                if (res.status == "OK") {
                  // this.user.toast("Verification link is sent to thhe mail for resetting the password",'bottom',2000,'normalToast')
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Verification link is sent to the mail for resetting the password');

                  _this.navCtrl.navigateBack('/adhikar');
                } // document.getElementById('email').style.display="none";

              }, function (error) {
                _this.user.toast("There is no active user associated with this e-mail address or the password can not be changed ", 'bottom', 3000, 'normalToast');
              });
            }
          }
        }]);

        return ForgotpasswordPage;
      }();

      ForgotpasswordPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotpasswordPage);
      /***/
    },

    /***/
    "yrZY":
    /*!*****************************************************************!*\
      !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgotpasswordPageRoutingModule */

    /***/
    function yrZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function () {
        return ForgotpasswordPageRoutingModule;
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


      var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgotpassword.page */
      "Nmh1");

      var routes = [{
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
      }];

      var ForgotpasswordPageRoutingModule = function ForgotpasswordPageRoutingModule() {
        _classCallCheck(this, ForgotpasswordPageRoutingModule);
      };

      ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotpasswordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgotpassword-forgotpassword-module-es5.js.map