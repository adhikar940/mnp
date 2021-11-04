(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panchayat-panchayat-module"], {
    /***/
    "1J/g":
    /*!*******************************************************!*\
      !*** ./src/app/panchayat/panchayat-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PanchayatPageRoutingModule */

    /***/
    function JG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanchayatPageRoutingModule", function () {
        return PanchayatPageRoutingModule;
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


      var _panchayat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./panchayat.page */
      "Grvy");

      var routes = [{
        path: '',
        component: _panchayat_page__WEBPACK_IMPORTED_MODULE_3__["PanchayatPage"]
      }];

      var PanchayatPageRoutingModule = function PanchayatPageRoutingModule() {
        _classCallCheck(this, PanchayatPageRoutingModule);
      };

      PanchayatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PanchayatPageRoutingModule);
      /***/
    },

    /***/
    "Grvy":
    /*!*********************************************!*\
      !*** ./src/app/panchayat/panchayat.page.ts ***!
      \*********************************************/

    /*! exports provided: PanchayatPage */

    /***/
    function Grvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanchayatPage", function () {
        return PanchayatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_panchayat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./panchayat.page.html */
      "rjkx");
      /* harmony import */


      var _panchayat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./panchayat.page.scss */
      "mH7u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PanchayatPage = /*#__PURE__*/function () {
        function PanchayatPage() {
          _classCallCheck(this, PanchayatPage);
        }

        _createClass(PanchayatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PanchayatPage;
      }();

      PanchayatPage.ctorParameters = function () {
        return [];
      };

      PanchayatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-panchayat',
        template: _raw_loader_panchayat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_panchayat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PanchayatPage);
      /***/
    },

    /***/
    "Rvoe":
    /*!***********************************************!*\
      !*** ./src/app/panchayat/panchayat.module.ts ***!
      \***********************************************/

    /*! exports provided: PanchayatPageModule */

    /***/
    function Rvoe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanchayatPageModule", function () {
        return PanchayatPageModule;
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


      var _panchayat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./panchayat-routing.module */
      "1J/g");
      /* harmony import */


      var _panchayat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./panchayat.page */
      "Grvy");

      var PanchayatPageModule = function PanchayatPageModule() {
        _classCallCheck(this, PanchayatPageModule);
      };

      PanchayatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _panchayat_routing_module__WEBPACK_IMPORTED_MODULE_5__["PanchayatPageRoutingModule"]],
        declarations: [_panchayat_page__WEBPACK_IMPORTED_MODULE_6__["PanchayatPage"]]
      })], PanchayatPageModule);
      /***/
    },

    /***/
    "mH7u":
    /*!***********************************************!*\
      !*** ./src/app/panchayat/panchayat.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function mH7u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5jaGF5YXQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "rjkx":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panchayat/panchayat.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function rjkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>panchayat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Working on it and will update soon</h1>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=panchayat-panchayat-module-es5.js.map