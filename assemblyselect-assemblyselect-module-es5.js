(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assemblyselect-assemblyselect-module"], {
    /***/
    "2wgB":
    /*!*********************************************************!*\
      !*** ./src/app/assemblyselect/assemblyselect.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function wgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NlbWJseXNlbGVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "EQrz":
    /*!*********************************************************!*\
      !*** ./src/app/assemblyselect/assemblyselect.module.ts ***!
      \*********************************************************/

    /*! exports provided: AssemblyselectPageModule */

    /***/
    function EQrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyselectPageModule", function () {
        return AssemblyselectPageModule;
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


      var _assemblyselect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assemblyselect-routing.module */
      "nG1W");
      /* harmony import */


      var _assemblyselect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assemblyselect.page */
      "IdGL");

      var AssemblyselectPageModule = function AssemblyselectPageModule() {
        _classCallCheck(this, AssemblyselectPageModule);
      };

      AssemblyselectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assemblyselect_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssemblyselectPageRoutingModule"]],
        declarations: [_assemblyselect_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyselectPage"]]
      })], AssemblyselectPageModule);
      /***/
    },

    /***/
    "IdGL":
    /*!*******************************************************!*\
      !*** ./src/app/assemblyselect/assemblyselect.page.ts ***!
      \*******************************************************/

    /*! exports provided: AssemblyselectPage */

    /***/
    function IdGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyselectPage", function () {
        return AssemblyselectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assemblyselect_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assemblyselect.page.html */
      "hSw1");
      /* harmony import */


      var _assemblyselect_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assemblyselect.page.scss */
      "2wgB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssemblyselectPage = /*#__PURE__*/function () {
        function AssemblyselectPage() {
          _classCallCheck(this, AssemblyselectPage);
        }

        _createClass(AssemblyselectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AssemblyselectPage;
      }();

      AssemblyselectPage.ctorParameters = function () {
        return [];
      };

      AssemblyselectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assemblyselect',
        template: _raw_loader_assemblyselect_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assemblyselect_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssemblyselectPage);
      /***/
    },

    /***/
    "hSw1":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assemblyselect/assemblyselect.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hSw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>assemblyselect</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <h2 style=\"color:'blue';text-align:center;\">Please Select here</h2>\n    <ion-item>\n    <ion-button routerLink=\"/assembly\" shape=\"round\" size=\"default\" expand=\"block\" fill=\"outline\" >Legislative Assembly</ion-button>\n   </ion-item>\n   <ion-item >\n    <ion-button routerLink=\"/legislativecouncil\" shape=\"round\" size=\"default\" expand=\"block\" fill=\"outline\">Legislative Council</ion-button>\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "nG1W":
    /*!*****************************************************************!*\
      !*** ./src/app/assemblyselect/assemblyselect-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AssemblyselectPageRoutingModule */

    /***/
    function nG1W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyselectPageRoutingModule", function () {
        return AssemblyselectPageRoutingModule;
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


      var _assemblyselect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assemblyselect.page */
      "IdGL");

      var routes = [{
        path: '',
        component: _assemblyselect_page__WEBPACK_IMPORTED_MODULE_3__["AssemblyselectPage"]
      }];

      var AssemblyselectPageRoutingModule = function AssemblyselectPageRoutingModule() {
        _classCallCheck(this, AssemblyselectPageRoutingModule);
      };

      AssemblyselectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AssemblyselectPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=assemblyselect-assemblyselect-module-es5.js.map