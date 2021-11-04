(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parliament-parliament-module"], {
    /***/
    "/otV":
    /*!*********************************************************!*\
      !*** ./src/app/parliament/parliament-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ParliamentPageRoutingModule */

    /***/
    function otV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParliamentPageRoutingModule", function () {
        return ParliamentPageRoutingModule;
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


      var _parliament_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parliament.page */
      "3orq");

      var routes = [{
        path: '',
        component: _parliament_page__WEBPACK_IMPORTED_MODULE_3__["ParliamentPage"]
      }];

      var ParliamentPageRoutingModule = function ParliamentPageRoutingModule() {
        _classCallCheck(this, ParliamentPageRoutingModule);
      };

      ParliamentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ParliamentPageRoutingModule);
      /***/
    },

    /***/
    "3orq":
    /*!***********************************************!*\
      !*** ./src/app/parliament/parliament.page.ts ***!
      \***********************************************/

    /*! exports provided: ParliamentPage */

    /***/
    function orq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParliamentPage", function () {
        return ParliamentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parliament_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parliament.page.html */
      "TFcW");
      /* harmony import */


      var _parliament_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parliament.page.scss */
      "Svz8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ParliamentPage = /*#__PURE__*/function () {
        function ParliamentPage() {
          _classCallCheck(this, ParliamentPage);
        }

        _createClass(ParliamentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ParliamentPage;
      }();

      ParliamentPage.ctorParameters = function () {
        return [];
      };

      ParliamentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parliament',
        template: _raw_loader_parliament_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parliament_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParliamentPage);
      /***/
    },

    /***/
    "Bx5b":
    /*!*************************************************!*\
      !*** ./src/app/parliament/parliament.module.ts ***!
      \*************************************************/

    /*! exports provided: ParliamentPageModule */

    /***/
    function Bx5b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParliamentPageModule", function () {
        return ParliamentPageModule;
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


      var _parliament_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parliament-routing.module */
      "/otV");
      /* harmony import */


      var _parliament_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./parliament.page */
      "3orq");

      var ParliamentPageModule = function ParliamentPageModule() {
        _classCallCheck(this, ParliamentPageModule);
      };

      ParliamentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _parliament_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParliamentPageRoutingModule"]],
        declarations: [_parliament_page__WEBPACK_IMPORTED_MODULE_6__["ParliamentPage"]]
      })], ParliamentPageModule);
      /***/
    },

    /***/
    "Svz8":
    /*!*************************************************!*\
      !*** ./src/app/parliament/parliament.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Svz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJsaWFtZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "TFcW":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parliament/parliament.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function TFcW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <style>\nh1 {text-align: center;\n  text-transform: uppercase;\n    color: rgb(74,0,0);\n    font-weight: bold;\n}\n\n</style>\n  <ion-toolbar>\n    <ion-title>parliament</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n    <h1 >Current Parliament building</h1>\n      <img  src=\"assets/parliament2.jpg\" alt=\"Forest\" style=\"width:100%\">\n    <h1 >New Parliament building</h1>\n    <img src=\"assets/newp.jpeg\"  style=\"width:100%\">\n    <h1>Indian Parliament</h1>\n    <img src=\"assets/p.jpeg\"  style=\"width:100%\">\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=parliament-parliament-module-es5.js.map