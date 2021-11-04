(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+XmF":
    /*!***************************************!*\
      !*** ./src/app/guards/login.guard.ts ***!
      \***************************************/

    /*! exports provided: LoginGuard */

    /***/
    function XmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
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

      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(router) {
          _classCallCheck(this, LoginGuard);

          this.router = router;
        }

        _createClass(LoginGuard, [{
          key: "canLoad",
          value: function canLoad() {
            var isAuthenticated = !!+localStorage.getItem('authenticated');

            if (isAuthenticated) {
              return true;
            } else {
              this.router.navigateByUrl('/login');
              return false;
            }
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginGuard);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /media/mohan/66D64F7F2CE11EA9/mn/mn/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" persistent=\"true\" >\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    Adhikar\n   </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/login\">\n          <ion-label><h1 style=\"color:darkcyan;\">Signin</h1></ion-label>\n          </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/adhikar\">\n              <ion-label></ion-label>\n              </ion-item>\n                </ion-menu-toggle>\n      <ion-menu-toggle>\n      <ion-item routerLink=\"/adhikar\">\n        <ion-label><h1 style=\"color:Purple;\">Home</h1></ion-label>\n        </ion-item>\n          </ion-menu-toggle>\n      <ion-menu-toggle>\n      <ion-item routerLink=\"/loksabha\">\n        <ion-label><h1 style=\"color:red;\">Loksabha</h1></ion-label>\n        </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n        <ion-item routerLink=\"/rajyasabha\">\n          <ion-label><h1 style=\"color:green;\">Rajyasabha</h1></ion-label>\n          </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n          <ion-item routerLink=\"/assembly\">\n            <ion-label><h1 style=\"color:magenta;\">Assembly</h1></ion-label>\n            </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/legislativecouncil\">\n              <ion-label><h1 style=\"color:blue;\">Council</h1></ion-label>\n              </ion-item>\n              </ion-menu-toggle>\n            <!--\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/carporation\">\n              <ion-label><h1 style=\"color:purple;\">Corporarations</h1></ion-label>\n              </ion-item>\n              </ion-menu-toggle>\n              <ion-menu-toggle>\n              <ion-item routerLink=\"/panchayat\">\n                <ion-label><h1 style=\"color:Maroon;\">Panchayats</h1></ion-label>\n                </ion-item>\n                </ion-menu-toggle>\n\n                <ion-menu-toggle>\n                  <ion-item routerLink=\"/state\">\n                    <ion-label><h1 style=\"color:darkviolet;\">States</h1></ion-label>\n                    </ion-item>\n                    </ion-menu-toggle>\n                    <ion-menu-toggle>\n                      <ion-item routerLink=\"/collector\">\n                        <ion-label><h1 style=\"color:magenta;\">Collector</h1></ion-label>\n                        </ion-item>\n                        </ion-menu-toggle>\n                        -->\n      </ion-list>\n    </ion-content>\n\n    </ion-menu>\n\n  <ion-router-outlet main>   </ion-router-outlet>\n</ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title><h1 style=\"text-shadow: 0px 5px 5px darkcyan; \">Adhikar </h1></ion-title>\n  </ion-toolbar>\n</ion-header>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/login.guard */
      "+XmF");

      var routes = [{
        path: 'adhikar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | adhikar-adhikar-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("adhikar-adhikar-module")]).then(__webpack_require__.bind(null,
          /*! ./adhikar/adhikar.module */
          "cucb")).then(function (m) {
            return m.AdhikarPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'adhikar',
        pathMatch: 'full'
      }, {
        path: 'loksabha',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loksabha-loksabha-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("loksabha-loksabha-module")]).then(__webpack_require__.bind(null,
          /*! ./loksabha/loksabha.module */
          "uBI/")).then(function (m) {
            return m.LoksabhaPageModule;
          });
        }
      }, {
        path: 'rajyasabha',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rajyasabha-rajyasabha-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("rajyasabha-rajyasabha-module")]).then(__webpack_require__.bind(null,
          /*! ./rajyasabha/rajyasabha.module */
          "jp79")).then(function (m) {
            return m.RajyasabhaPageModule;
          });
        }
      }, {
        path: 'assembly',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | assembly-assembly-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("assembly-assembly-module")]).then(__webpack_require__.bind(null,
          /*! ./assembly/assembly.module */
          "9zJ0")).then(function (m) {
            return m.AssemblyPageModule;
          });
        }
      }, {
        path: 'redtool',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | redtool-redtool-module */
          [__webpack_require__.e("common"), __webpack_require__.e("redtool-redtool-module")]).then(__webpack_require__.bind(null,
          /*! ./redtool/redtool.module */
          "4AyQ")).then(function (m) {
            return m.RedtoolPageModule;
          });
        }
      }, {
        path: 'parliament',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | parliament-parliament-module */
          "parliament-parliament-module").then(__webpack_require__.bind(null,
          /*! ./parliament/parliament.module */
          "Bx5b")).then(function (m) {
            return m.ParliamentPageModule;
          });
        }
      }, {
        path: 'pm',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pm-pm-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("pm-pm-module")]).then(__webpack_require__.bind(null,
          /*! ./pm/pm.module */
          "iBhr")).then(function (m) {
            return m.PmPageModule;
          });
        }
      }, {
        path: 'president',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | president-president-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("president-president-module")]).then(__webpack_require__.bind(null,
          /*! ./president/president.module */
          "B3d5")).then(function (m) {
            return m.PresidentPageModule;
          });
        }
      }, {
        path: 'vicepresident',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vicepresident-vicepresident-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("vicepresident-vicepresident-module")]).then(__webpack_require__.bind(null,
          /*! ./vicepresident/vicepresident.module */
          "vqn7")).then(function (m) {
            return m.VicepresidentPageModule;
          });
        }
      }, {
        path: 'loksabhaspeaker',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loksabhaspeaker-loksabhaspeaker-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("loksabhaspeaker-loksabhaspeaker-module")]).then(__webpack_require__.bind(null,
          /*! ./loksabhaspeaker/loksabhaspeaker.module */
          "O7Kl")).then(function (m) {
            return m.LoksabhaspeakerPageModule;
          });
        }
      }, {
        path: 'loksabhadeputyspeaker',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | loksabhadeputyspeaker-loksabhadeputyspeaker-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("loksabhadeputyspeaker-loksabhadeputyspeaker-module")]).then(__webpack_require__.bind(null,
          /*! ./loksabhadeputyspeaker/loksabhadeputyspeaker.module */
          "DquW")).then(function (m) {
            return m.LoksabhadeputyspeakerPageModule;
          });
        }
      }, {
        path: 'rajyasabhaspeaker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | rajyasabhaspeaker-rajyasabhaspeaker-module */
          "rajyasabhaspeaker-rajyasabhaspeaker-module").then(__webpack_require__.bind(null,
          /*! ./rajyasabhaspeaker/rajyasabhaspeaker.module */
          "CWiE")).then(function (m) {
            return m.RajyasabhaspeakerPageModule;
          });
        }
      }, {
        path: 'rajyasabhachairman',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | rajyasabhachairman-rajyasabhachairman-module */
          "rajyasabhachairman-rajyasabhachairman-module").then(__webpack_require__.bind(null,
          /*! ./rajyasabhachairman/rajyasabhachairman.module */
          "qleG")).then(function (m) {
            return m.RajyasabhachairmanPageModule;
          });
        }
      }, {
        path: 'rajyasabhaleader',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rajyasabhaleader-rajyasabhaleader-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhaleader-rajyasabhaleader-module")]).then(__webpack_require__.bind(null,
          /*! ./rajyasabhaleader/rajyasabhaleader.module */
          "2/jz")).then(function (m) {
            return m.RajyasabhaleaderPageModule;
          });
        }
      }, {
        path: 'rajyasabhaoppleader',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rajyasabhaoppleader-rajyasabhaoppleader-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhaoppleader-rajyasabhaoppleader-module")]).then(__webpack_require__.bind(null,
          /*! ./rajyasabhaoppleader/rajyasabhaoppleader.module */
          "xHMj")).then(function (m) {
            return m.RajyasabhaoppleaderPageModule;
          });
        }
      }, {
        path: 'rajyasabhadeputyspeaker',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module")]).then(__webpack_require__.bind(null,
          /*! ./rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.module */
          "Rl0E")).then(function (m) {
            return m.RajyasabhadeputyspeakerPageModule;
          });
        }
      }, {
        path: 'raj1/:id/:a',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | raj1-raj1-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("raj1-raj1-module")]).then(__webpack_require__.bind(null,
          /*! ./raj1/raj1.module */
          "ecNi")).then(function (m) {
            return m.Raj1PageModule;
          });
        }
      }, {
        path: 'lok1/:id/:a',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lok1-lok1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("lok1-lok1-module")]).then(__webpack_require__.bind(null,
          /*! ./lok1/lok1.module */
          "O6sX")).then(function (m) {
            return m.Lok1PageModule;
          });
        }
      }, {
        path: 'assembly1/:id',
        //path: 'assembly1/:id/:state/:child',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | assembly1-assembly1-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("assembly1-assembly1-module")]).then(__webpack_require__.bind(null,
          /*! ./assembly1/assembly1.module */
          "Dr5x")).then(function (m) {
            return m.Assembly1PageModule;
          });
        }
      }, {
        path: 'lok2/:id/:state/:child',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lok2-lok2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("lok2-lok2-module")]).then(__webpack_require__.bind(null,
          /*! ./lok2/lok2.module */
          "5/dH")).then(function (m) {
            return m.Lok2PageModule;
          });
        }
      }, {
        path: 'raj2/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | raj2-raj2-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("raj2-raj2-module")]).then(__webpack_require__.bind(null,
          /*! ./raj2/raj2.module */
          "tOup")).then(function (m) {
            return m.Raj2PageModule;
          });
        }
      }, {
        path: 'assembly2/:id/:state',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | assembly2-assembly2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("assembly2-assembly2-module")]).then(__webpack_require__.bind(null,
          /*! ./assembly2/assembly2.module */
          "IeUA")).then(function (m) {
            return m.Assembly2PageModule;
          });
        }
      }, {
        path: 'white',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | white-white-module */
          "white-white-module").then(__webpack_require__.bind(null,
          /*! ./white/white.module */
          "CpBf")).then(function (m) {
            return m.WhitePageModule;
          });
        }
      }, {
        path: 'green',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | green-green-module */
          "green-green-module").then(__webpack_require__.bind(null,
          /*! ./green/green.module */
          "/leK")).then(function (m) {
            return m.GreenPageModule;
          });
        }
      }, {
        path: 'carporation',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | carporation-carporation-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("carporation-carporation-module")]).then(__webpack_require__.bind(null,
          /*! ./carporation/carporation.module */
          "FrPF")).then(function (m) {
            return m.CarporationPageModule;
          });
        }
      }, {
        path: 'panchayat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | panchayat-panchayat-module */
          "panchayat-panchayat-module").then(__webpack_require__.bind(null,
          /*! ./panchayat/panchayat.module */
          "Rvoe")).then(function (m) {
            return m.PanchayatPageModule;
          });
        }
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "Yj9t")).then(function (m) {
            return m.AuthPageModule;
          });
        }
      }, {
        path: 'state',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | state-state-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("state-state-module")]).then(__webpack_require__.bind(null,
          /*! ./state/state.module */
          "9RCi")).then(function (m) {
            return m.StatePageModule;
          });
        }
      }, {
        path: 'state1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | state1-state1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("state1-state1-module")]).then(__webpack_require__.bind(null,
          /*! ./state1/state1.module */
          "N5ig")).then(function (m) {
            return m.State1PageModule;
          });
        }
      }, {
        path: 'assemblyselect',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | assemblyselect-assemblyselect-module */
          "assemblyselect-assemblyselect-module").then(__webpack_require__.bind(null,
          /*! ./assemblyselect/assemblyselect.module */
          "EQrz")).then(function (m) {
            return m.AssemblyselectPageModule;
          });
        }
      }, {
        path: 'legislativecouncil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | legislativecouncil-legislativecouncil-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("legislativecouncil-legislativecouncil-module")]).then(__webpack_require__.bind(null,
          /*! ./legislativecouncil/legislativecouncil.module */
          "JsKL")).then(function (m) {
            return m.LegislativecouncilPageModule;
          });
        }
      }, {
        path: 'carporation1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | carporation1-carporation1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("carporation1-carporation1-module")]).then(__webpack_require__.bind(null,
          /*! ./carporation1/carporation1.module */
          "d7zs")).then(function (m) {
            return m.Carporation1PageModule;
          });
        }
      }, {
        path: 'carporation2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | carporation2-carporation2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("carporation2-carporation2-module")]).then(__webpack_require__.bind(null,
          /*! ./carporation2/carporation2.module */
          "MhdR")).then(function (m) {
            return m.Carporation2PageModule;
          });
        }
      }, {
        path: 'collector',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | collector-collector-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("collector-collector-module")]).then(__webpack_require__.bind(null,
          /*! ./collector/collector.module */
          "3xSO")).then(function (m) {
            return m.CollectorPageModule;
          });
        }
      }, {
        path: 'red1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | red1-red1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("red1-red1-module")]).then(__webpack_require__.bind(null,
          /*! ./red1/red1.module */
          "xIIV")).then(function (m) {
            return m.Red1PageModule;
          });
        }
      }, {
        path: 'red2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | red2-red2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("red2-red2-module")]).then(__webpack_require__.bind(null,
          /*! ./red2/red2.module */
          "HJ9z")).then(function (m) {
            return m.Red2PageModule;
          });
        }
      }, {
        path: 'white1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | white1-white1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("white1-white1-module")]).then(__webpack_require__.bind(null,
          /*! ./white1/white1.module */
          "LkAz")).then(function (m) {
            return m.White1PageModule;
          });
        }
      }, {
        path: 'white2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | white2-white2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("white2-white2-module")]).then(__webpack_require__.bind(null,
          /*! ./white2/white2.module */
          "9Zhz")).then(function (m) {
            return m.White2PageModule;
          });
        }
      }, {
        path: 'green1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | green1-green1-module */
          "green1-green1-module").then(__webpack_require__.bind(null,
          /*! ./green1/green1.module */
          "9EWj")).then(function (m) {
            return m.Green1PageModule;
          });
        }
      }, {
        path: 'green2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | green2-green2-module */
          "green2-green2-module").then(__webpack_require__.bind(null,
          /*! ./green2/green2.module */
          "juhv")).then(function (m) {
            return m.Green2PageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'legislativecouncil1/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | legislativecouncil1-legislativecouncil1-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("legislativecouncil1-legislativecouncil1-module")]).then(__webpack_require__.bind(null,
          /*! ./legislativecouncil1/legislativecouncil1.module */
          "9GYM")).then(function (m) {
            return m.Legislativecouncil1PageModule;
          });
        }
      }, {
        path: 'legislativecouncil2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | legislativecouncil2-legislativecouncil2-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("legislativecouncil2-legislativecouncil2-module")]).then(__webpack_require__.bind(null,
          /*! ./legislativecouncil2/legislativecouncil2.module */
          "SB1O")).then(function (m) {
            return m.Legislativecouncil2PageModule;
          });
        }
      }, {
        path: 'logout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | logout-logout-module */
          "logout-logout-module").then(__webpack_require__.bind(null,
          /*! ./logout/logout.module */
          "q6at")).then(function (m) {
            return m.LogoutPageModule;
          });
        }
      }, {
        path: 'partydetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partydetails-partydetails-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partydetails-partydetails-module")]).then(__webpack_require__.bind(null,
          /*! ./partydetails/partydetails.module */
          "lM5I")).then(function (m) {
            return m.PartydetailsPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'emailform',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | emailform-emailform-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("emailform-emailform-module")]).then(__webpack_require__.bind(null,
          /*! ./emailform/emailform.module */
          "Jch7")).then(function (m) {
            return m.EmailformPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'collectordetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | collectordetails-collectordetails-module */
          [__webpack_require__.e("common"), __webpack_require__.e("collectordetails-collectordetails-module")]).then(__webpack_require__.bind(null,
          /*! ./collectordetails/collectordetails.module */
          "r+2g")).then(function (m) {
            return m.CollectordetailsPageModule;
          });
        }
      }, {
        path: 'changepassword',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | changepassword-changepassword-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("changepassword-changepassword-module")]).then(__webpack_require__.bind(null,
          /*! ./changepassword/changepassword.module */
          "u0FJ")).then(function (m) {
            return m.ChangepasswordPageModule;
          });
        }
      }, {
        path: 'forgotpassword',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | forgotpassword-forgotpassword-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("forgotpassword-forgotpassword-module")]).then(__webpack_require__.bind(null,
          /*! ./forgotpassword/forgotpassword.module */
          "IoKB")).then(function (m) {
            return m.ForgotpasswordPageModule;
          });
        }
      }, {
        path: 'password_reset',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | passwordreset-passwordreset-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("passwordreset-passwordreset-module")]).then(__webpack_require__.bind(null,
          /*! ./passwordreset/passwordreset.module */
          "0Y1x")).then(function (m) {
            return m.PasswordresetPageModule;
          });
        }
      }, {
        path: 'email1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | email1-email1-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("email1-email1-module")]).then(__webpack_require__.bind(null,
          /*! ./email1/email1.module */
          "tlU+")).then(function (m) {
            return m.Email1PageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'partycandidates',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partycandidates-partycandidates-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partycandidates-partycandidates-module")]).then(__webpack_require__.bind(null,
          /*! ./partycandidates/partycandidates.module */
          "M74f")).then(function (m) {
            return m.PartycandidatesPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'partycandidateemail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partycandidateemail-partycandidateemail-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partycandidateemail-partycandidateemail-module")]).then(__webpack_require__.bind(null,
          /*! ./partycandidateemail/partycandidateemail.module */
          "yNrm")).then(function (m) {
            return m.PartycandidateemailPageModule;
          });
        }
      }, {
        path: 'choices',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | choices-choices-module */
          "choices-choices-module").then(__webpack_require__.bind(null,
          /*! ./choices/choices.module */
          "WWo0")).then(function (m) {
            return m.ChoicesPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'lokpartycandidate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lokpartycandidate-lokpartycandidate-module */
          "lokpartycandidate-lokpartycandidate-module").then(__webpack_require__.bind(null,
          /*! ./lokpartycandidate/lokpartycandidate.module */
          "u+Dc")).then(function (m) {
            return m.LokpartycandidatePageModule;
          });
        }
      }, {
        path: 'states/:k',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-states-states-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partylogin-states-states-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/states/states.module */
          "XsUJ")).then(function (m) {
            return m.StatesPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'statedistrict',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-statedistrict-statedistrict-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-statedistrict-statedistrict-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/statedistrict/statedistrict.module */
          "9XVI")).then(function (m) {
            return m.StatedistrictPageModule;
          });
        }
      }, {
        path: 'council',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-council-council-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partylogin-council-council-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/council/council.module */
          "FmJZ")).then(function (m) {
            return m.CouncilPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'coucilemail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partylogin-coucilemail-coucilemail-module */
          "partylogin-coucilemail-coucilemail-module").then(__webpack_require__.bind(null,
          /*! ./partylogin/coucilemail/coucilemail.module */
          "mCOi")).then(function (m) {
            return m.CoucilemailPageModule;
          });
        }
      }, {
        path: 'statepartylok',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-statepartylok-statepartylok-module */
          [__webpack_require__.e("common"), __webpack_require__.e("partylogin-statepartylok-statepartylok-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/statepartylok/statepartylok.module */
          "HTzV")).then(function (m) {
            return m.StatepartylokPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'statedist1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-statedist1-statedist1-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-statedist1-statedist1-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/statedist1/statedist1.module */
          "JcnT")).then(function (m) {
            return m.Statedist1PageModule;
          });
        }
      }, {
        path: 'statedistassemb',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | partylogin-statedistassemb-statedistassemb-module */
          "partylogin-statedistassemb-statedistassemb-module").then(__webpack_require__.bind(null,
          /*! ./partylogin/statedistassemb/statedistassemb.module */
          "bGIJ")).then(function (m) {
            return m.StatedistassembPageModule;
          });
        }
      }, {
        path: 'partylogout',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | partylogin-partylogout-partylogout-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-partylogout-partylogout-module")]).then(__webpack_require__.bind(null,
          /*! ./partylogin/partylogout/partylogout.module */
          "YPzm")).then(function (m) {
            return m.PartylogoutPageModule;
          });
        }
      }, {
        path: 'rajyasabhaindividual',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | individuallogin-rajyasabhaindividual-rajyasabhaindividual-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c"), __webpack_require__.e("common"), __webpack_require__.e("individuallogin-rajyasabhaindividual-rajyasabhaindividual-module")]).then(__webpack_require__.bind(null,
          /*! ./individuallogin/rajyasabhaindividual/rajyasabhaindividual.module */
          "HJe4")).then(function (m) {
            return m.RajyasabhaindividualPageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'individual',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | individuallogin-individual-individual-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c"), __webpack_require__.e("individuallogin-individual-individual-module")]).then(__webpack_require__.bind(null,
          /*! ./individuallogin/individual/individual.module */
          "T5Rf")).then(function (m) {
            return m.IndividualPageModule;
          });
        }
      }, {
        path: 'loksabhaindividual',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | individuallogin-loksabhaindividual-loksabhaindividual-module */
          "individuallogin-loksabhaindividual-loksabhaindividual-module").then(__webpack_require__.bind(null,
          /*! ./individuallogin/loksabhaindividual/loksabhaindividual.module */
          "bCPh")).then(function (m) {
            return m.LoksabhaindividualPageModule;
          });
        }
      }, {
        path: 'individualdisplay/:a/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | individuallogin-individualdisplay-individualdisplay-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("individuallogin-individualdisplay-individualdisplay-module")]).then(__webpack_require__.bind(null,
          /*! ./individuallogin/individualdisplay/individualdisplay.module */
          "Pt0t")).then(function (m) {
            return m.IndividualdisplayPageModule;
          });
        }
      }, {
        path: 'state2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lok-state2-state2-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("lok-state2-state2-module")]).then(__webpack_require__.bind(null,
          /*! ./lok/state2/state2.module */
          "I8yP")).then(function (m) {
            return m.State2PageModule;
          });
        }
      }, {
        path: 'choice',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | adminlogin-choice-choice-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("adminlogin-choice-choice-module")]).then(__webpack_require__.bind(null,
          /*! ./adminlogin/choice/choice.module */
          "ZUtI")).then(function (m) {
            return m.ChoicePageModule;
          });
        },
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
      }, {
        path: 'statechoice',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | adminlogin-statechoice-statechoice-module */
          [__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("adminlogin-statechoice-statechoice-module")]).then(__webpack_require__.bind(null,
          /*! ./adminlogin/statechoice/statechoice.module */
          "1BiY")).then(function (m) {
            return m.StatechoicePageModule;
          });
        }
      }, {
        path: 'image/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | image-image-module */
          "image-image-module").then(__webpack_require__.bind(null,
          /*! ./image/image.module */
          "AsRg")).then(function (m) {
            return m.ImagePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map