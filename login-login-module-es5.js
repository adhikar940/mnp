(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(user, navCtrl, router) {
          _classCallCheck(this, LoginPage);

          this.user = user;
          this.navCtrl = navCtrl;
          this.router = router;
          this.user1 = {};
          this.details = [];
          localStorage.clear();
        }

        _createClass(LoginPage, [{
          key: "togglePasswordFieldType",
          value: function togglePasswordFieldType() {
            this.isTextFieldType = !this.isTextFieldType;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save(user1) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var obj;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!user1.username || user1.username == '') {
                        this.user.toast("Please enter the username", 'bottom', 3000, 'normalToast');
                      } else if (!user1.password) {
                        this.user.toast("Please enter the password", 'bottom', 3000, 'normalToast');
                      } else {
                        obj = this;
                        obj.user.signin(obj.user1).subscribe(function (res) {
                          if (res.token) {
                            localStorage.token = JSON.stringify(res.token);
                            obj.user.setToken(res.token);
                            _this.user1 = {};
                            obj.user.toast("successfully login", 'bottom', 3000, 'normalToast');
                            localStorage.setItem('authenticated', '1');

                            if (res.mn == 'mn') {
                              _this.router.navigateByUrl('/choice');
                            } else if (res.mn.substring(0, 5) == 'party') {
                              localStorage.setItem('mn', res.mn.substring(6));
                              obj.user.rajparty().subscribe(function (resp) {
                                obj.navCtrl.navigateBack('/choices');
                              });
                            } else if (res.mn.substring(0, 12) == 'RajyasabhaMP') {
                              localStorage.setItem('mn', res.mn.substring(13));
                              localStorage.setItem('n', 'rajperson/');

                              _this.router.navigateByUrl('/rajyasabhaindividual');
                            } else if (res.mn.substring(0, 3) == 'MLC') {
                              localStorage.setItem('mn', res.mn.substring(4));
                              localStorage.setItem('n', 'councilperson/');

                              _this.router.navigateByUrl('/rajyasabhaindividual');
                            } else if (res.mn.substring(0, 3) == 'MLA') {
                              localStorage.setItem('mn', res.mn.substring(4));
                              localStorage.setItem('n', 'assemblyperson/');

                              _this.router.navigateByUrl('/rajyasabhaindividual');
                            } else if (res.mn.substring(0, 10) == 'LoksabhaMP') {
                              localStorage.setItem('mn', res.mn.substring(11));
                              localStorage.setItem('n', 'lokperson/');

                              _this.router.navigateByUrl('/rajyasabhaindividual');
                            }
                          }
                        }, function (error) {
                          _this.user.toast("Invalid credentials or Network connection issue ", 'bottom', 3000, 'normalToast');
                        });
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // btnclick(){
          //   this.navCtrl.navigateBack('/changepassword');
          // }

        }, {
          key: "forgot",
          value: function forgot() {
            this.navCtrl.navigateBack('/forgotpassword');
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background-image\">\n  <img src=\"assets/5.png\" style=\"position: fixed;left: 0px;top:0px;z-index: 30; top: 18px;width: auto;height: 49px;border-radius: 100px;padding-left:16px;\"/>\n  <ion-icon name=\"person-circle-outline\" style=\"color:white\" id=\"Image\"></ion-icon>\n  <!-- <ion-item style=\"background-color: white; border-radius: 50px;\">\n    <ion-icon name=\"person-add-outline\" slot=\"start\" style=\"margin: 10px;\"></ion-icon>    \n    <ion-select placeholder=\"Please select\" [(ngModel)]=\"user1.selected_value\">\n      <ion-select-option value=\"Admin\">Admin</ion-select-option>\n      <ion-select-option value=\"Party\">Party</ion-select-option>\n      <ion-select-option value=\"LoksabhaMP\">LoksabhaMP</ion-select-option>\n      <ion-select-option value=\"RajyasabhaMP\">RajyasabhaMP</ion-select-option>\n      <ion-select-option value=\"MLA\">MLA</ion-select-option>\n      <ion-select-option value=\"MLC\">MLC</ion-select-option>\n    </ion-select>\n  </ion-item>  -->\n  <br/>\n  <ion-item style=\"border-radius: 50px;\">\n    <ion-icon name=\"person-outline\"  slot=\"start\" style=\"margin: 8px;\"></ion-icon>\n    <ion-input style=\"background: white;height: 51px;\" [(ngModel)]=\"user1.username\"  type=\"text\" placeholder=\"Enter your username\" required></ion-input> <br/>\n</ion-item><br/>\n<ion-item style=\"border-radius: 50px;\">\n  <ion-icon name=\"lock-open-outline\" slot=\"start\" style=\"margin: 8px;\"></ion-icon>\n\n      <ion-input  style=\"background: white;height: 51px;\" [(ngModel)]=\"user1.password\" [type]=\"isTextFieldType ? 'text' : 'password'\"   placeholder=\"Enter your password\">\n      </ion-input>\n\n        <ion-icon\n          [name]=\"isTextFieldType ? 'eye-off' : 'eye'\" (click)=\"togglePasswordFieldType()\"\n        >\n    </ion-icon>\n</ion-item><br/>\n<div style=\"text-align: center;\"><ion-button color=\"success\" (click)=\"save(user1)\">Sign In </ion-button></div><br/>\n<ion-grid>\n  <ion-row>\n    <!-- <ion-col>\n      <div style=\"text-align: center;color: white;\" (click)=\"navCtrl.navigateForward('/user')\" >\n        Registration <br/> <span style=\"font-size: 12px;\">రిజిస్ట్రేషన్లు</span>\n      </div>\n    </ion-col> -->\n    <ion-col>\n      <div style=\"text-align: center;color: white;\" (click)=\"forgot()\">\n        Forgot Password<br/>\n      </div>\n    </ion-col>\n    <!-- <ion-col>\n      <div style=\"text-align: center;color: white;\" (click)=\"btnclick()\">\n        Change Password<br/>\n      </div>\n    </ion-col> -->\n\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#Image {\n  width: 160px;\n  height: 189px;\n  border-radius: 25%;\n  margin-left: calc(49% - 75px);\n  margin-top: 18px;\n  border: 3px solid #ffffff;\n  /*  border-top-color: #08538e;\n   border-bottom-color: #0ec254; */\n  margin-top: 14%;\n  margin-bottom: 14%;\n}\n\n.background-image {\n  --background: url('5.png') 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQztrQ0FBQTtFQUVDLGVBQUE7RUFDQSxrQkFBQTtBQUNOOztBQVNFO0VBQ0Usa0RBQUE7QUFOSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjSW1hZ2V7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMTg5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDQ5JSAtIDc1cHgpO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcbiAgICAgLyogIGJvcmRlci10b3AtY29sb3I6ICMwODUzOGU7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMGVjMjU0OyAqL1xuICAgICAgbWFyZ2luLXRvcDogMTQlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTQlO1xuICB9XG4vLyAgIGlvbi1idXR0b257XG4vLyAgICAgYm90dG9tOjEycHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xuLy8gICAgIGhlaWdodDogNTBweDtcbi8vICAgICB3aWR0aDogMjAwcHg7XG4vLyAgICAgY29sb3I6d2hpdGU7XG4vLyAgICAgdG9wOjBweDtcbi8vICAgfVxuICAuYmFja2dyb3VuZC1pbWFnZXtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvNS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIH0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map