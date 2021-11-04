(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["green2-green2-module"], {
    /***/
    "RJ9v":
    /*!*************************************************!*\
      !*** ./src/app/green2/green2-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: Green2PageRoutingModule */

    /***/
    function RJ9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Green2PageRoutingModule", function () {
        return Green2PageRoutingModule;
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


      var _green2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./green2.page */
      "cN6y");

      var routes = [{
        path: '',
        component: _green2_page__WEBPACK_IMPORTED_MODULE_3__["Green2Page"]
      }];

      var Green2PageRoutingModule = function Green2PageRoutingModule() {
        _classCallCheck(this, Green2PageRoutingModule);
      };

      Green2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Green2PageRoutingModule);
      /***/
    },

    /***/
    "cN6y":
    /*!***************************************!*\
      !*** ./src/app/green2/green2.page.ts ***!
      \***************************************/

    /*! exports provided: Green2Page */

    /***/
    function cN6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Green2Page", function () {
        return Green2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_green2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./green2.page.html */
      "mrn8");
      /* harmony import */


      var _green2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./green2.page.scss */
      "rxK3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Green2Page = /*#__PURE__*/function () {
        function Green2Page() {
          _classCallCheck(this, Green2Page);
        }

        _createClass(Green2Page, [{
          key: "Getselected",
          value: function Getselected(selected_value) {
            // alert("")
            console.log(selected_value);
            console.log("selector: ", selected_value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Green2Page;
      }();

      Green2Page.ctorParameters = function () {
        return [];
      };

      Green2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-green2',
        template: _raw_loader_green2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_green2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Green2Page);
      /***/
    },

    /***/
    "juhv":
    /*!*****************************************!*\
      !*** ./src/app/green2/green2.module.ts ***!
      \*****************************************/

    /*! exports provided: Green2PageModule */

    /***/
    function juhv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Green2PageModule", function () {
        return Green2PageModule;
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


      var _green2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./green2-routing.module */
      "RJ9v");
      /* harmony import */


      var _green2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./green2.page */
      "cN6y");

      var Green2PageModule = function Green2PageModule() {
        _classCallCheck(this, Green2PageModule);
      };

      Green2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _green2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Green2PageRoutingModule"]],
        declarations: [_green2_page__WEBPACK_IMPORTED_MODULE_6__["Green2Page"]]
      })], Green2PageModule);
      /***/
    },

    /***/
    "mrn8":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/green2/green2.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function mrn8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Green</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4 style=\"text-align:center\">Please Select State Here</h4>\n  <ion-item style=\"border-radius: 100px;\">\n  <ion-label>State Name:</ion-label>\n  <ion-select [(ngModel)]=\"selected_value\" placeholder=\"Select State\"(ionChange)=\"Getselected(selected_value)\" [ngModelOptions]=\"{standalone: true}\"> \n    <ion-select-option value=\"West Bengal\">West Bengal</ion-select-option>\n    <ion-select-option value=\"Assam\">Assam</ion-select-option>\n    <ion-select-option value=\"Kerala(140)\">Kerala(140)</ion-select-option>\n    <ion-select-option value=\"Tamilnadu(234)\"> Tamilnadu(234) </ion-select-option>\n    <ion-select-option value=\"Puducherry(30)\">Puducherry(30)</ion-select-option>\n </ion-select></ion-item>\n <div *ngIf=\"selected_value=='West Bengal'\">\n  <h1 style=\"color:blue;text-align: center;\" >West Bengal (294) </h1>\n <ion-grid class=\"padding\" >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >30 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">4</ion-col>\n    <ion-col  size=\"3\" >44 </ion-col>\n    <ion-col  size=\"4\">10-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">5</ion-col>\n    <ion-col  size=\"3\" >45 </ion-col>\n    <ion-col  size=\"4\">17-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">6</ion-col>\n    <ion-col  size=\"3\" >43 </ion-col>\n    <ion-col  size=\"4\">22-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">7</ion-col>\n    <ion-col  size=\"3\" >36 </ion-col>\n    <ion-col  size=\"4\">26-4-21(Monday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">8</ion-col>\n    <ion-col  size=\"3\" >35</ion-col>\n    <ion-col  size=\"4\">29-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row></ion-grid></div>\n  <div *ngIf=\"selected_value=='Assam'\">\n    <h1 style=\"color:blue;text-align: center;\" >Assam (126) </h1>\n    <ion-grid class=\"padding\"  >\n    <ion-row>\n    <ion-col size=\"1\">Phase</ion-col>\n      <ion-col size=\"3\">Seats</ion-col>\n      <ion-col size=\"4\">Date of voting</ion-col>\n      <ion-col size=\"4\">Date of Counting</ion-col>\n  \n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">1</ion-col>\n      <ion-col  size=\"3\" >47 </ion-col>\n      <ion-col  size=\"4\">1-4-21(Saturday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">2</ion-col>\n      <ion-col  size=\"3\" >39 </ion-col>\n      <ion-col  size=\"4\">27-3-21(Thursday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  size=\"1\">3</ion-col>\n      <ion-col  size=\"3\" >40 </ion-col>\n      <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n      <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n    </ion-row>\n    </ion-grid>\n\n  </div>\n  <div *ngIf=\"selected_value=='Kerala(140)' || selected_value=='Tamilnadu(234)' || selected_value=='Puducherry(30)'\">\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Kerala(140)'\">Kerala(140)</h1>\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Tamilnadu(234)'\">Tamilnadu(234) </h1>\n  <h1  style=\"color:blue;text-align: center;\" *ngIf=\"selected_value=='Puducherry(30)'\">Puducherry(30)</h1>\n    \n<ion-grid class=\"padding\"  >\n<ion-row>\n<ion-col size=\"1\">Phase</ion-col>\n  <ion-col size=\"3\">Seats</ion-col>\n  <ion-col size=\"4\">Date of voting</ion-col>\n  <ion-col size=\"4\">Date of Counting</ion-col>\n</ion-row>\n<ion-row >\n  <ion-col  size=\"1\">1</ion-col>\n  <ion-col  size=\"3\" >All </ion-col>\n  <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n  <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n</ion-row>\n</ion-grid></div>\n    <!-- <h2>Election schedule</h2>\n    <h1 color='blue' >West Bengal (294) </h1>\n  <ion-grid class=\"padding\"  >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >30 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">4</ion-col>\n    <ion-col  size=\"3\" >44 </ion-col>\n    <ion-col  size=\"4\">10-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">5</ion-col>\n    <ion-col  size=\"3\" >45 </ion-col>\n    <ion-col  size=\"4\">17-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">6</ion-col>\n    <ion-col  size=\"3\" >43 </ion-col>\n    <ion-col  size=\"4\">22-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">7</ion-col>\n    <ion-col  size=\"3\" >36 </ion-col>\n    <ion-col  size=\"4\">26-4-21(Monday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">8</ion-col>\n    <ion-col  size=\"3\" >35</ion-col>\n    <ion-col  size=\"4\">29-4-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  </ion-grid>\n    <h1 color='blue' >Assam (126) </h1>\n  <ion-grid class=\"padding\"  >\n  <ion-row>\n  <ion-col size=\"1\">Phase</ion-col>\n    <ion-col size=\"3\">Seats</ion-col>\n    <ion-col size=\"4\">Date of voting</ion-col>\n    <ion-col size=\"4\">Date of Counting</ion-col>\n\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">1</ion-col>\n    <ion-col  size=\"3\" >47 </ion-col>\n    <ion-col  size=\"4\">1-4-21(Saturday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">2</ion-col>\n    <ion-col  size=\"3\" >39 </ion-col>\n    <ion-col  size=\"4\">27-3-21(Thursday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col  size=\"1\">3</ion-col>\n    <ion-col  size=\"3\" >40 </ion-col>\n    <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n    <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n  </ion-row>\n  </ion-grid>\n  <h1 color='blue' >Kerala(140), Tamilnadu(234) and Puducherry(30)</h1>\n<ion-grid class=\"padding\"  >\n<ion-row>\n<ion-col size=\"1\">Phase</ion-col>\n  <ion-col size=\"3\">Seats</ion-col>\n  <ion-col size=\"4\">Date of voting</ion-col>\n  <ion-col size=\"4\">Date of Counting</ion-col>\n</ion-row>\n<ion-row >\n  <ion-col  size=\"1\">1</ion-col>\n  <ion-col  size=\"3\" >All </ion-col>\n  <ion-col  size=\"4\">6-4-21(Tuesday)</ion-col>\n  <ion-col  size=\"4\">2-5-21(Sunday) </ion-col>\n</ion-row>\n</ion-grid> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "rxK3":
    /*!*****************************************!*\
      !*** ./src/app/green2/green2.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function rxK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmVlbjIucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=green2-green2-module-es5.js.map