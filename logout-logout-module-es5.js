(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-module"], {
    /***/
    "6yqL":
    /*!*************************************************!*\
      !*** ./src/app/logout/logout-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: LogoutPageRoutingModule */

    /***/
    function yqL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
        return LogoutPageRoutingModule;
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


      var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./logout.page */
      "bxzc");

      var routes = [{
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
      }];

      var LogoutPageRoutingModule = function LogoutPageRoutingModule() {
        _classCallCheck(this, LogoutPageRoutingModule);
      };

      LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogoutPageRoutingModule);
      /***/
    },

    /***/
    "9nES":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function nES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item (click)=\"logout()\"> -->\n  <!-- <div text-center><img src=\"../../assets/logout.png\" style=\"width: 40px;height: 40px;margin-right: 15px;margin-left: 0px;\" (click)=\"logout()\"/></div> -->\n  <ion-button shape=\"round\" expand=\"block\" size=\"default\" fill=\"outline\" (click)=\"logout()\" >Logout</ion-button>\n<!-- </ion-item><br/> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "I/pM":
    /*!*****************************************!*\
      !*** ./src/app/logout/logout.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function IPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  border-radius: 10px;\n}\n\nion-label {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUNHO0VBQ0ksZ0JBQUE7QUFFUCIsImZpbGUiOiJsb2dvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIH1cbiAgIGlvbi1sYWJlbHtcbiAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgfVxuICAgIl19 */";
      /***/
    },

    /***/
    "bxzc":
    /*!***************************************!*\
      !*** ./src/app/logout/logout.page.ts ***!
      \***************************************/

    /*! exports provided: LogoutPage */

    /***/
    function bxzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
        return LogoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logout.page.html */
      "9nES");
      /* harmony import */


      var _logout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout.page.scss */
      "I/pM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LogoutPage = /*#__PURE__*/function () {
        function LogoutPage(alertCtrl, navCtrl) {
          _classCallCheck(this, LogoutPage);

          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
        }

        _createClass(LogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirm!',
                        message: '<strong>Do you want to Logout !</strong>',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            localStorage.clear();

                            _this.navCtrl.navigateBack('/login');
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LogoutPage;
      }();

      LogoutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogoutPage);
      /***/
    },

    /***/
    "q6at":
    /*!*****************************************!*\
      !*** ./src/app/logout/logout.module.ts ***!
      \*****************************************/

    /*! exports provided: LogoutPageModule */

    /***/
    function q6at(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
        return LogoutPageModule;
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


      var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logout-routing.module */
      "6yqL");
      /* harmony import */


      var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout.page */
      "bxzc");

      var LogoutPageModule = function LogoutPageModule() {
        _classCallCheck(this, LogoutPageModule);
      };

      LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
      })], LogoutPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=logout-logout-module-es5.js.map