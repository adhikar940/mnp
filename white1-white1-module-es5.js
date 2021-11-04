(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["white1-white1-module"], {
    /***/
    "LkAz":
    /*!*****************************************!*\
      !*** ./src/app/white1/white1.module.ts ***!
      \*****************************************/

    /*! exports provided: White1PageModule */

    /***/
    function LkAz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White1PageModule", function () {
        return White1PageModule;
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


      var _white1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./white1-routing.module */
      "h1iC");
      /* harmony import */


      var _white1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./white1.page */
      "3hvw");

      var White1PageModule = function White1PageModule() {
        _classCallCheck(this, White1PageModule);
      };

      White1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _white1_routing_module__WEBPACK_IMPORTED_MODULE_5__["White1PageRoutingModule"]],
        declarations: [_white1_page__WEBPACK_IMPORTED_MODULE_6__["White1Page"]]
      })], White1PageModule);
      /***/
    },

    /***/
    "h1iC":
    /*!*************************************************!*\
      !*** ./src/app/white1/white1-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: White1PageRoutingModule */

    /***/
    function h1iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White1PageRoutingModule", function () {
        return White1PageRoutingModule;
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


      var _white1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./white1.page */
      "3hvw");

      var routes = [{
        path: '',
        component: _white1_page__WEBPACK_IMPORTED_MODULE_3__["White1Page"]
      }];

      var White1PageRoutingModule = function White1PageRoutingModule() {
        _classCallCheck(this, White1PageRoutingModule);
      };

      White1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], White1PageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=white1-white1-module-es5.js.map