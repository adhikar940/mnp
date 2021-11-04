(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminlogin-statechoice-statechoice-module"], {
    /***/
    "1BiY":
    /*!**************************************************************!*\
      !*** ./src/app/adminlogin/statechoice/statechoice.module.ts ***!
      \**************************************************************/

    /*! exports provided: StatechoicePageModule */

    /***/
    function BiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatechoicePageModule", function () {
        return StatechoicePageModule;
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


      var _statechoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./statechoice-routing.module */
      "XkXw");
      /* harmony import */


      var _statechoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./statechoice.page */
      "knAG"); //import { ChoicePage } from '../choice/choice.page';


      var StatechoicePageModule = function StatechoicePageModule() {
        _classCallCheck(this, StatechoicePageModule);
      };

      StatechoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _statechoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatechoicePageRoutingModule"]],
        declarations: [_statechoice_page__WEBPACK_IMPORTED_MODULE_6__["StatechoicePage"]]
      })], StatechoicePageModule);
      /***/
    },

    /***/
    "XkXw":
    /*!**********************************************************************!*\
      !*** ./src/app/adminlogin/statechoice/statechoice-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: StatechoicePageRoutingModule */

    /***/
    function XkXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatechoicePageRoutingModule", function () {
        return StatechoicePageRoutingModule;
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


      var _statechoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./statechoice.page */
      "knAG");

      var routes = [{
        path: '',
        component: _statechoice_page__WEBPACK_IMPORTED_MODULE_3__["StatechoicePage"]
      }];

      var StatechoicePageRoutingModule = function StatechoicePageRoutingModule() {
        _classCallCheck(this, StatechoicePageRoutingModule);
      };

      StatechoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StatechoicePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adminlogin-statechoice-statechoice-module-es5.js.map