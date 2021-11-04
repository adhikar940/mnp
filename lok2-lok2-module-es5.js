(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lok2-lok2-module"], {
    /***/
    "0JBi":
    /*!***********************************!*\
      !*** ./src/app/lok2/lok2.page.ts ***!
      \***********************************/

    /*! exports provided: Lok2Page */

    /***/
    function JBi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lok2Page", function () {
        return Lok2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lok2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lok2.page.html */
      "NsqR");
      /* harmony import */


      var _lok2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lok2.page.scss */
      "sY/2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loksabha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../loksabha.service */
      "Znwt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");

      var Lok2Page = /*#__PURE__*/function () {
        function Lok2Page(user, route, router) {
          var _this = this;

          _classCallCheck(this, Lok2Page);

          this.user = user;
          this.route = route;
          this.router = router;
          this.z = [];
          this.route.paramMap.subscribe(function (params) {
            _this.z1 = params.get('id');
            _this.z2 = params.get('state');
            _this.z3 = params.get('child');
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(Lok2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.user.ls1(this.z2, this.z1).subscribe(function (data) {
              _this2.z = data;
            });
          }
        }, {
          key: "data",
          value: function data() {
            if (this.z3 == 'no') {
              alert('Autobiography is not available');
            } else {
              this.router.navigate(['/individualdisplay', 'lokpersondisplay/', this.z3]);
            }
          }
        }]);

        return Lok2Page;
      }();

      Lok2Page.ctorParameters = function () {
        return [{
          type: _loksabha_service__WEBPACK_IMPORTED_MODULE_4__["LoksabhaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      Lok2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lok2',
        template: _raw_loader_lok2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lok2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Lok2Page);
      /***/
    },

    /***/
    "5/dH":
    /*!*************************************!*\
      !*** ./src/app/lok2/lok2.module.ts ***!
      \*************************************/

    /*! exports provided: Lok2PageModule */

    /***/
    function dH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lok2PageModule", function () {
        return Lok2PageModule;
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


      var _lok2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lok2-routing.module */
      "kFWL");
      /* harmony import */


      var _lok2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lok2.page */
      "0JBi");

      var Lok2PageModule = function Lok2PageModule() {
        _classCallCheck(this, Lok2PageModule);
      };

      Lok2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lok2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Lok2PageRoutingModule"]],
        declarations: [_lok2_page__WEBPACK_IMPORTED_MODULE_6__["Lok2Page"]]
      })], Lok2PageModule);
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
    "NsqR":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lok2/lok2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function NsqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>lok2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2>Loksabha MP - {{z1}}</h2>\n\n\n    <h3 *ngFor=\"let i of z\" >\n\n  <img src=\"{{zz}}{{i.photo}}\" width=\"400\" height=\"500\"  >\n        <dd style=\"color:darkolivegreen\"> Gender - {{i.gender}}</dd><br>\n      <dd style=\"color:Tomato\">   Party - {{i.party_name}}</dd><br>\n      <dd style=\"color:brown\">   Constituency - {{i.constituency_name}}</dd><br>\n      <dd style=\"color:green\">   District - {{i.Districts}}</dd><br>\n      <dd style=\"color:brown\">   Father - {{i.fathers_Name}}</dd><br>\n      <dd style=\"color:green\">   Spouse - {{i.Spouse_Name}}</dd><br>\n        <dd style=\"color:chocolate\">   Education - {{i.Highest_Education}},{{i.University}}</dd><br>\n      <dd style=\"color:indigo\">   Address - {{i.Address}}</dd><br>\n      <dd style=\"color:maroon\">   Email -  {{i.Email_address}}</dd><br>\n      <dd style=\"color:teal\">   Mobile - {{i.Mobile}}</dd><br>\n\n  </h3>\n\n  <ion-button expand=\"block\" (click) = \"data()\">Auto Biography</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "kFWL":
    /*!*********************************************!*\
      !*** ./src/app/lok2/lok2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Lok2PageRoutingModule */

    /***/
    function kFWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Lok2PageRoutingModule", function () {
        return Lok2PageRoutingModule;
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


      var _lok2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lok2.page */
      "0JBi");

      var routes = [{
        path: '',
        component: _lok2_page__WEBPACK_IMPORTED_MODULE_3__["Lok2Page"]
      }];

      var Lok2PageRoutingModule = function Lok2PageRoutingModule() {
        _classCallCheck(this, Lok2PageRoutingModule);
      };

      Lok2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Lok2PageRoutingModule);
      /***/
    },

    /***/
    "sY/2":
    /*!*************************************!*\
      !*** ./src/app/lok2/lok2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function sY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvazIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRixlQUFBO0FBRUYiLCJmaWxlIjoibG9rMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjVweFxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbmgye1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=lok2-lok2-module-es5.js.map