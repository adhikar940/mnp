(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assembly-assembly-module"], {
    /***/
    "9zJ0":
    /*!*********************************************!*\
      !*** ./src/app/assembly/assembly.module.ts ***!
      \*********************************************/

    /*! exports provided: AssemblyPageModule */

    /***/
    function zJ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyPageModule", function () {
        return AssemblyPageModule;
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


      var _assembly_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assembly-routing.module */
      "vFBn");
      /* harmony import */


      var _assembly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assembly.page */
      "E/Id");

      var AssemblyPageModule = function AssemblyPageModule() {
        _classCallCheck(this, AssemblyPageModule);
      };

      AssemblyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assembly_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssemblyPageRoutingModule"]],
        declarations: [_assembly_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyPage"]]
      })], AssemblyPageModule);
      /***/
    },

    /***/
    "vFBn":
    /*!*****************************************************!*\
      !*** ./src/app/assembly/assembly-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AssemblyPageRoutingModule */

    /***/
    function vFBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyPageRoutingModule", function () {
        return AssemblyPageRoutingModule;
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


      var _assembly_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assembly.page */
      "E/Id");

      var routes = [{
        path: '',
        component: _assembly_page__WEBPACK_IMPORTED_MODULE_3__["AssemblyPage"]
      }];

      var AssemblyPageRoutingModule = function AssemblyPageRoutingModule() {
        _classCallCheck(this, AssemblyPageRoutingModule);
      };

      AssemblyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AssemblyPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=assembly-assembly-module-es5.js.map