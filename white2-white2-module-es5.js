(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["white2-white2-module"], {
    /***/
    "/ETL":
    /*!*************************************************!*\
      !*** ./src/app/white2/white2-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: White2PageRoutingModule */

    /***/
    function ETL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White2PageRoutingModule", function () {
        return White2PageRoutingModule;
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


      var _white2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./white2.page */
      "ZIW5");

      var routes = [{
        path: '',
        component: _white2_page__WEBPACK_IMPORTED_MODULE_3__["White2Page"]
      }];

      var White2PageRoutingModule = function White2PageRoutingModule() {
        _classCallCheck(this, White2PageRoutingModule);
      };

      White2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], White2PageRoutingModule);
      /***/
    },

    /***/
    "9Zhz":
    /*!*****************************************!*\
      !*** ./src/app/white2/white2.module.ts ***!
      \*****************************************/

    /*! exports provided: White2PageModule */

    /***/
    function Zhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White2PageModule", function () {
        return White2PageModule;
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


      var _white2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./white2-routing.module */
      "/ETL");
      /* harmony import */


      var _white2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./white2.page */
      "ZIW5");
      /* harmony import */


      var _white1_white1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../white1/white1.page */
      "3hvw");

      var White2PageModule = function White2PageModule() {
        _classCallCheck(this, White2PageModule);
      };

      White2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _white2_routing_module__WEBPACK_IMPORTED_MODULE_5__["White2PageRoutingModule"]],
        declarations: [_white2_page__WEBPACK_IMPORTED_MODULE_6__["White2Page"], _white1_white1_page__WEBPACK_IMPORTED_MODULE_7__["White1Page"]]
      })], White2PageModule);
      /***/
    },

    /***/
    "XFCy":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/white2/white2.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function XFCy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>white</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"color:blue\">Election Schedule</h1>\n  <h2 style=\"color:red\">Municipal Corporations of Vizianagaram, Eluru, Machilipatnam, Guntur, Ongole,\n  Tirupati, Chittoor, Kadapa, Kurnool and Ananthapur</h2><br>\n  <h3>Date for Commencement of Withdrawal of Candidature - 02.03.2021 (Tuesday) (From 11:00 AM to 3:00 PM)<br><br>\nLast date for Withdrawal of Candidature - 03.03.2021 (Wednesday) (Not later than 3:00 PM)<br><br>\nDate of Publication of List of Contesting Candidates - 03.03.2021 (Wednesday) (After 3:00 PM)<br><br>\nDate of Poll - 10.03.2021 (Wednesday) (From 7:00 AM to 5:00 PM)<br><br>\nDate of Re-poll, if any 13.03.2021 (Saturday) (From 7:00 AM to 5:00 PM)<br><br>\n<br></h3>\n <h4 style=\"color:green\"> Date of Counting 14.03.2021 (Sunday) (From 8:00 AM onwards)</h4>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ZIW5":
    /*!***************************************!*\
      !*** ./src/app/white2/white2.page.ts ***!
      \***************************************/

    /*! exports provided: White2Page */

    /***/
    function ZIW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White2Page", function () {
        return White2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_white2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./white2.page.html */
      "XFCy");
      /* harmony import */


      var _white2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./white2.page.scss */
      "jBuy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var White2Page = /*#__PURE__*/function () {
        function White2Page() {
          _classCallCheck(this, White2Page);
        }

        _createClass(White2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return White2Page;
      }();

      White2Page.ctorParameters = function () {
        return [];
      };

      White2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-white2',
        template: _raw_loader_white2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_white2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], White2Page);
      /***/
    },

    /***/
    "jBuy":
    /*!*****************************************!*\
      !*** ./src/app/white2/white2.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function jBuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGl0ZTIucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=white2-white2-module-es5.js.map