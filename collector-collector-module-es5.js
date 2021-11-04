(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collector-collector-module"], {
    /***/
    "3xSO":
    /*!***********************************************!*\
      !*** ./src/app/collector/collector.module.ts ***!
      \***********************************************/

    /*! exports provided: CollectorPageModule */

    /***/
    function xSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectorPageModule", function () {
        return CollectorPageModule;
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


      var _collector_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./collector-routing.module */
      "wePj");
      /* harmony import */


      var _collector_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collector.page */
      "Isbd");

      var CollectorPageModule = function CollectorPageModule() {
        _classCallCheck(this, CollectorPageModule);
      };

      CollectorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _collector_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectorPageRoutingModule"]],
        declarations: [_collector_page__WEBPACK_IMPORTED_MODULE_6__["CollectorPage"]]
      })], CollectorPageModule);
      /***/
    },

    /***/
    "Isbd":
    /*!*********************************************!*\
      !*** ./src/app/collector/collector.page.ts ***!
      \*********************************************/

    /*! exports provided: CollectorPage */

    /***/
    function Isbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectorPage", function () {
        return CollectorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_collector_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./collector.page.html */
      "US1Z");
      /* harmony import */


      var _collector_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./collector.page.scss */
      "Tjie");
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


      var _collectordetails_collectordetails_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../collectordetails/collectordetails.page */
      "TJ7I");

      var CollectorPage = /*#__PURE__*/function () {
        function CollectorPage(user, route, router, modalctrl) {
          var _this = this;

          _classCallCheck(this, CollectorPage);

          this.user = user;
          this.route = route;
          this.router = router;
          this.modalctrl = modalctrl;
          this.collectorstates = [];
          this.collect = {};
          this.user.collector().subscribe(function (data) {
            _this.collectorstates = data;
          });
        }

        _createClass(CollectorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked(collect) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalctrl.create({
                        component: _collectordetails_collectordetails_page__WEBPACK_IMPORTED_MODULE_7__["CollectordetailsPage"],
                        componentProps: {
                          collector: collect
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CollectorPage;
      }();

      CollectorPage.ctorParameters = function () {
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

      CollectorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-collector',
        template: _raw_loader_collector_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_collector_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CollectorPage);
      /***/
    },

    /***/
    "Tjie":
    /*!***********************************************!*\
      !*** ./src/app/collector/collector.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Tjie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0b3IucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "US1Z":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collector/collector.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function US1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>collector</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-list >\n      <div *ngFor=\"let collect of collectorstates\">\n    <ion-button shape=\"round\" expand=\"block\" size=\"default\" fill=\"outline\" (click)=\"btnClicked(collect)\">{{collect.State_name}}</ion-button></div>\n  </ion-list>\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "wePj":
    /*!*******************************************************!*\
      !*** ./src/app/collector/collector-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CollectorPageRoutingModule */

    /***/
    function wePj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectorPageRoutingModule", function () {
        return CollectorPageRoutingModule;
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


      var _collector_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collector.page */
      "Isbd");

      var routes = [{
        path: '',
        component: _collector_page__WEBPACK_IMPORTED_MODULE_3__["CollectorPage"]
      }];

      var CollectorPageRoutingModule = function CollectorPageRoutingModule() {
        _classCallCheck(this, CollectorPageRoutingModule);
      };

      CollectorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CollectorPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=collector-collector-module-es5.js.map