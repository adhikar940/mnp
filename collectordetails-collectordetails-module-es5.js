(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collectordetails-collectordetails-module"], {
    /***/
    "Ew1Z":
    /*!***************************!*\
      !*** ./src/app/data/k.ts ***!
      \***************************/

    /*! exports provided: default */

    /***/
    function Ew1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //export default "http://127.0.0.1:8000/";

      /* harmony default export */


      __webpack_exports__["default"] = "https://k.adhikar.net/";
      /***/
    },

    /***/
    "evDf":
    /*!*********************************************************************!*\
      !*** ./src/app/collectordetails/collectordetails-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CollectordetailsPageRoutingModule */

    /***/
    function evDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectordetailsPageRoutingModule", function () {
        return CollectordetailsPageRoutingModule;
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


      var _collectordetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collectordetails.page */
      "TJ7I");

      var routes = [{
        path: '',
        component: _collectordetails_page__WEBPACK_IMPORTED_MODULE_3__["CollectordetailsPage"]
      }];

      var CollectordetailsPageRoutingModule = function CollectordetailsPageRoutingModule() {
        _classCallCheck(this, CollectordetailsPageRoutingModule);
      };

      CollectordetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CollectordetailsPageRoutingModule);
      /***/
    },

    /***/
    "r+2g":
    /*!*************************************************************!*\
      !*** ./src/app/collectordetails/collectordetails.module.ts ***!
      \*************************************************************/

    /*! exports provided: CollectordetailsPageModule */

    /***/
    function r2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectordetailsPageModule", function () {
        return CollectordetailsPageModule;
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


      var _collectordetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./collectordetails-routing.module */
      "evDf");
      /* harmony import */


      var _collectordetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collectordetails.page */
      "TJ7I");

      var CollectordetailsPageModule = function CollectordetailsPageModule() {
        _classCallCheck(this, CollectordetailsPageModule);
      };

      CollectordetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _collectordetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectordetailsPageRoutingModule"]],
        declarations: [_collectordetails_page__WEBPACK_IMPORTED_MODULE_6__["CollectordetailsPage"]]
      })], CollectordetailsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=collectordetails-collectordetails-module-es5.js.map