(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["state-state-module"], {
    /***/
    "9RCi":
    /*!***************************************!*\
      !*** ./src/app/state/state.module.ts ***!
      \***************************************/

    /*! exports provided: StatePageModule */

    /***/
    function RCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatePageModule", function () {
        return StatePageModule;
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


      var _state_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./state-routing.module */
      "CDRd");
      /* harmony import */


      var _state_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./state.page */
      "FdtJ");

      var StatePageModule = function StatePageModule() {
        _classCallCheck(this, StatePageModule);
      };

      StatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _state_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatePageRoutingModule"]],
        declarations: [_state_page__WEBPACK_IMPORTED_MODULE_6__["StatePage"]]
      })], StatePageModule);
      /***/
    },

    /***/
    "Bc2E":
    /*!***************************************!*\
      !*** ./src/app/state/state.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function Bc2E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "BpSl":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/state/state.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function BpSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>state</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"color:blue;text-align: center;\">States</h1>\n  <div *ngFor=\"let k of s\">\n  <ion-button  shape=\"round\"size=\"default\" expand=\"block\" fill=\"outline\"  (click)=\"Getselected(k)\">\n    {{k.State}}</ion-button></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "CDRd":
    /*!***********************************************!*\
      !*** ./src/app/state/state-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: StatePageRoutingModule */

    /***/
    function CDRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatePageRoutingModule", function () {
        return StatePageRoutingModule;
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


      var _state_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state.page */
      "FdtJ");

      var routes = [{
        path: '',
        component: _state_page__WEBPACK_IMPORTED_MODULE_3__["StatePage"]
      }];

      var StatePageRoutingModule = function StatePageRoutingModule() {
        _classCallCheck(this, StatePageRoutingModule);
      };

      StatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StatePageRoutingModule);
      /***/
    },

    /***/
    "FdtJ":
    /*!*************************************!*\
      !*** ./src/app/state/state.page.ts ***!
      \*************************************/

    /*! exports provided: StatePage */

    /***/
    function FdtJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatePage", function () {
        return StatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_state_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./state.page.html */
      "BpSl");
      /* harmony import */


      var _state_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state.page.scss */
      "Bc2E");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _state1_state1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../state1/state1.page */
      "fUWi");

      var StatePage = /*#__PURE__*/function () {
        function StatePage(user, route, router, modalctrl) {
          var _this = this;

          _classCallCheck(this, StatePage);

          this.user = user;
          this.route = route;
          this.router = router;
          this.modalctrl = modalctrl;
          this.s = [];
          this.k = {};
          this.user.states().subscribe(function (data) {
            console.log(data);
            _this.s = data;
          });
        }

        _createClass(StatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "Getselected",
          value: function Getselected(k) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(k);
                      _context.next = 3;
                      return this.modalctrl.create({
                        component: _state1_state1_page__WEBPACK_IMPORTED_MODULE_7__["State1Page"],
                        componentProps: {
                          states: k
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return StatePage;
      }();

      StatePage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      StatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-state',
        template: _raw_loader_state_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_state_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=state-state-module-es5.js.map