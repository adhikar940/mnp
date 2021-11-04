(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vicepresident-vicepresident-module"], {
    /***/
    "26Qk":
    /*!*******************************************************!*\
      !*** ./src/app/vicepresident/vicepresident.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Qk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  margin-left: 80px;\n}\n\na {\n  color: black;\n}\n\n.box1 {\n  width: 50%;\n}\n\n.box2 {\n  overflow: hidden;\n  position: relative;\n  right: 100px;\n}\n\nimg {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n\niframe {\n  margin-left: 115px;\n  margin-top: 50px;\n  box-shadow: 0px 0px 20px darkcyan;\n  border-radius: 20px;\n}\n\n/* media querry */\n\n@media only screen and (min-width: 414px) and (max-width: 736px) {\n  .container {\n    width: 350%;\n    display: block;\n    text-align: center;\n  }\n\n  .box1 {\n    text-align: right;\n    font-size: 30px;\n  }\n\n  iframe {\n    position: relative;\n    right: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpY2VwcmVzaWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDUyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVUOztBQUNBO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRixlQUFBO0FBQ0Y7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUNIOztBQUVBLGlCQUFBOztBQUVBO0VBRUk7SUFDRyxXQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBREw7O0VBSUU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUFETjs7RUFHRTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoidmljZXByZXNpZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG5cbn1cbmF7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmJveDF7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmJveDJ7XG4gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgcmlnaHQ6IDEwMHB4O1xuIH1cblxuaW1ne1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggY3lhbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjo1cHhcblxuXG59XG5pbWc6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zaXRpb246IDVzO1xufVxuaDJ7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IGdyZWVuO1xuICBmb250LXNpemU6IDYwcHg7XG5cbn1cbmlmcmFtZXtcbiAgIG1hcmdpbi1sZWZ0OiAxMTVweDtcbiAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggZGFya2N5YW47XG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBtZWRpYSBxdWVycnkgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDo3MzZweCl7XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgIHdpZHRoOiAzNTAlO1xuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cbiAgICAuYm94MXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgaWZyYW1le1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "MnJh":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vicepresident/vicepresident.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MnJh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>vicepresident</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n<h3 *ngFor=\"let j of k\">\n<b style=\"color:blue\" > <h2>{{j.Full_Name}} </h2></b>\n<br>\n<img src=\"{{zz}}{{j.photo}}\" width=\"500\" height=\"400\"  >\n      <dd style=\"color:darkolivegreen\"> Gender - {{j.gender}}</dd><br>\n    <dd style=\"color:Tomato\">   Party - {{j.party_name}}</dd><br>\n    <dd style=\"color:brown\">   Father - {{j.fathers_Name}}</dd><br>\n    <dd style=\"color:green\">   Spouse - {{j.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{j.Highest_Education}},{{j.University}}</dd><br>\n    <dd style=\"color:indigo\">   Address - {{j.Address}}</dd><br>\n    <dd style=\"color:maroon\">   Email -  {{j.Email_address}}</dd><br>\n    <dd style=\"color:teal\">   Mobile - {{j.Mobile}}</dd><br>\n  </h3>\n</ion-content>\n";
      /***/
    },

    /***/
    "P0U/":
    /*!***************************************************************!*\
      !*** ./src/app/vicepresident/vicepresident-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VicepresidentPageRoutingModule */

    /***/
    function P0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VicepresidentPageRoutingModule", function () {
        return VicepresidentPageRoutingModule;
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


      var _vicepresident_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vicepresident.page */
      "zytd");

      var routes = [{
        path: '',
        component: _vicepresident_page__WEBPACK_IMPORTED_MODULE_3__["VicepresidentPage"]
      }];

      var VicepresidentPageRoutingModule = function VicepresidentPageRoutingModule() {
        _classCallCheck(this, VicepresidentPageRoutingModule);
      };

      VicepresidentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VicepresidentPageRoutingModule);
      /***/
    },

    /***/
    "vqn7":
    /*!*******************************************************!*\
      !*** ./src/app/vicepresident/vicepresident.module.ts ***!
      \*******************************************************/

    /*! exports provided: VicepresidentPageModule */

    /***/
    function vqn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VicepresidentPageModule", function () {
        return VicepresidentPageModule;
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


      var _vicepresident_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vicepresident-routing.module */
      "P0U/");
      /* harmony import */


      var _vicepresident_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vicepresident.page */
      "zytd");

      var VicepresidentPageModule = function VicepresidentPageModule() {
        _classCallCheck(this, VicepresidentPageModule);
      };

      VicepresidentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vicepresident_routing_module__WEBPACK_IMPORTED_MODULE_5__["VicepresidentPageRoutingModule"]],
        declarations: [_vicepresident_page__WEBPACK_IMPORTED_MODULE_6__["VicepresidentPage"]]
      })], VicepresidentPageModule);
      /***/
    },

    /***/
    "zytd":
    /*!*****************************************************!*\
      !*** ./src/app/vicepresident/vicepresident.page.ts ***!
      \*****************************************************/

    /*! exports provided: VicepresidentPage */

    /***/
    function zytd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VicepresidentPage", function () {
        return VicepresidentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vicepresident_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vicepresident.page.html */
      "MnJh");
      /* harmony import */


      var _vicepresident_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vicepresident.page.scss */
      "26Qk");
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

      var VicepresidentPage = /*#__PURE__*/function () {
        function VicepresidentPage(user, router) {
          var _this = this;

          _classCallCheck(this, VicepresidentPage);

          this.user = user;
          this.router = router;
          this.k = [];
          this.z = [];
          this.k2 = [];
          this.selected = null;
          this.user.vicepresident().subscribe(function (data) {
            console.warn(data);
            _this.k = data;
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(VicepresidentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VicepresidentPage;
      }();

      VicepresidentPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      VicepresidentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-vicepresident',
        template: _raw_loader_vicepresident_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vicepresident_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VicepresidentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vicepresident-vicepresident-module-es5.js.map