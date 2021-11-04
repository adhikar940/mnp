(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module"], {
    /***/
    "Rl0E":
    /*!***************************************************************************!*\
      !*** ./src/app/rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RajyasabhadeputyspeakerPageModule */

    /***/
    function Rl0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RajyasabhadeputyspeakerPageModule", function () {
        return RajyasabhadeputyspeakerPageModule;
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


      var _rajyasabhadeputyspeaker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rajyasabhadeputyspeaker-routing.module */
      "b+Vc");
      /* harmony import */


      var _rajyasabhadeputyspeaker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./rajyasabhadeputyspeaker.page */
      "rdPj");

      var RajyasabhadeputyspeakerPageModule = function RajyasabhadeputyspeakerPageModule() {
        _classCallCheck(this, RajyasabhadeputyspeakerPageModule);
      };

      RajyasabhadeputyspeakerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rajyasabhadeputyspeaker_routing_module__WEBPACK_IMPORTED_MODULE_5__["RajyasabhadeputyspeakerPageRoutingModule"]],
        declarations: [_rajyasabhadeputyspeaker_page__WEBPACK_IMPORTED_MODULE_6__["RajyasabhadeputyspeakerPage"]]
      })], RajyasabhadeputyspeakerPageModule);
      /***/
    },

    /***/
    "YGww":
    /*!***************************************************************************!*\
      !*** ./src/app/rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function YGww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jhanlhc2FiaGFkZXB1dHlzcGVha2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0YsZUFBQTtBQUVGIiwiZmlsZSI6InJhanlhc2FiaGFkZXB1dHlzcGVha2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcblxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGN5YW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46NXB4XG59XG5pbWc6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zaXRpb246IDVzO1xufVxuaDJ7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IGdyZWVuO1xuICBmb250LXNpemU6IDYwcHg7XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "b+Vc":
    /*!***********************************************************************************!*\
      !*** ./src/app/rajyasabhadeputyspeaker/rajyasabhadeputyspeaker-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: RajyasabhadeputyspeakerPageRoutingModule */

    /***/
    function bVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RajyasabhadeputyspeakerPageRoutingModule", function () {
        return RajyasabhadeputyspeakerPageRoutingModule;
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


      var _rajyasabhadeputyspeaker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rajyasabhadeputyspeaker.page */
      "rdPj");

      var routes = [{
        path: '',
        component: _rajyasabhadeputyspeaker_page__WEBPACK_IMPORTED_MODULE_3__["RajyasabhadeputyspeakerPage"]
      }];

      var RajyasabhadeputyspeakerPageRoutingModule = function RajyasabhadeputyspeakerPageRoutingModule() {
        _classCallCheck(this, RajyasabhadeputyspeakerPageRoutingModule);
      };

      RajyasabhadeputyspeakerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RajyasabhadeputyspeakerPageRoutingModule);
      /***/
    },

    /***/
    "iQZ0":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iQZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Rajyasabhadeputyspeaker</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<h3 *ngFor=\"let j of k\">\n<b style=\"color:blue\" > <h2>{{j.Full_Name}} </h2></b>\n<br>\n<img src=\"{{zz}}{{j.photo}}\" width=\"500\" height=\"400\"  >\n      <dd style=\"color:darkolivegreen\"> Gender - {{j.gender}}</dd><br>\n    <dd style=\"color:Tomato\">   Party - {{j.party_name}}</dd><br>\n    <dd style=\"color:brown\">   Father - {{j.fathers_Name}}</dd><br>\n    <dd style=\"color:green\">   Spouse - {{j.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{j.Highest_Education}},{{j.University}}</dd><br>\n    <dd style=\"color:indigo\">   Address - {{j.Address}}</dd><br>\n    <dd style=\"color:maroon\">   Email -  {{j.Email_address}}</dd><br>\n    <dd style=\"color:teal\">   Mobile - {{j.Mobile}}</dd><br>\n  </h3>\n</ion-content>\n";
      /***/
    },

    /***/
    "rdPj":
    /*!*************************************************************************!*\
      !*** ./src/app/rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.page.ts ***!
      \*************************************************************************/

    /*! exports provided: RajyasabhadeputyspeakerPage */

    /***/
    function rdPj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RajyasabhadeputyspeakerPage", function () {
        return RajyasabhadeputyspeakerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rajyasabhadeputyspeaker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rajyasabhadeputyspeaker.page.html */
      "iQZ0");
      /* harmony import */


      var _rajyasabhadeputyspeaker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rajyasabhadeputyspeaker.page.scss */
      "YGww");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");

      var RajyasabhadeputyspeakerPage = /*#__PURE__*/function () {
        function RajyasabhadeputyspeakerPage(user, router) {
          var _this = this;

          _classCallCheck(this, RajyasabhadeputyspeakerPage);

          this.user = user;
          this.router = router;
          this.k = [];
          this.z = [];
          this.k2 = [];
          this.selected = null;
          this.user.rajdepspeaker().subscribe(function (data) {
            console.warn(data);
            _this.k = data;
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(RajyasabhadeputyspeakerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RajyasabhadeputyspeakerPage;
      }();

      RajyasabhadeputyspeakerPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RajyasabhadeputyspeakerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rajyasabhadeputyspeaker',
        template: _raw_loader_rajyasabhadeputyspeaker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rajyasabhadeputyspeaker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RajyasabhadeputyspeakerPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module-es5.js.map