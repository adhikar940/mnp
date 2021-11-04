(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-image-module"], {
    /***/
    "AsRg":
    /*!***************************************!*\
      !*** ./src/app/image/image.module.ts ***!
      \***************************************/

    /*! exports provided: ImagePageModule */

    /***/
    function AsRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePageModule", function () {
        return ImagePageModule;
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


      var _image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-routing.module */
      "purs");
      /* harmony import */


      var _image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image.page */
      "obPI");

      var ImagePageModule = function ImagePageModule() {
        _classCallCheck(this, ImagePageModule);
      };

      ImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagePageRoutingModule"]],
        declarations: [_image_page__WEBPACK_IMPORTED_MODULE_6__["ImagePage"]]
      })], ImagePageModule);
      /***/
    },

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
    "nxx6":
    /*!***************************************!*\
      !*** ./src/app/image/image.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function nxx6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "obPI":
    /*!*************************************!*\
      !*** ./src/app/image/image.page.ts ***!
      \*************************************/

    /*! exports provided: ImagePage */

    /***/
    function obPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePage", function () {
        return ImagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image.page.html */
      "uvyf");
      /* harmony import */


      var _image_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image.page.scss */
      "nxx6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ImagePage = /*#__PURE__*/function () {
        function ImagePage(route) {
          var _this = this;

          _classCallCheck(this, ImagePage);

          this.route = route;
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_4__["default"];
          this.zz = this.zz.slice(0, -1);
          this.route.paramMap.subscribe(function (params) {
            _this.z1 = params.get('id');
          });
        }

        _createClass(ImagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImagePage;
      }();

      ImagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      ImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image',
        template: _raw_loader_image_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImagePage);
      /***/
    },

    /***/
    "purs":
    /*!***********************************************!*\
      !*** ./src/app/image/image-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ImagePageRoutingModule */

    /***/
    function purs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePageRoutingModule", function () {
        return ImagePageRoutingModule;
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


      var _image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image.page */
      "obPI");

      var routes = [{
        path: '',
        component: _image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"]
      }];

      var ImagePageRoutingModule = function ImagePageRoutingModule() {
        _classCallCheck(this, ImagePageRoutingModule);
      };

      ImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImagePageRoutingModule);
      /***/
    },

    /***/
    "uvyf":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image/image.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function uvyf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"{{zz}}{{z1}}\" width=\"75%\" height=\"75%\">\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=image-image-module-es5.js.map