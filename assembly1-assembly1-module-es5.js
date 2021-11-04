(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assembly1-assembly1-module"], {
    /***/
    "8pFd":
    /*!*********************************************!*\
      !*** ./src/app/assembly1/assembly1.page.ts ***!
      \*********************************************/

    /*! exports provided: Assembly1Page */

    /***/
    function pFd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Assembly1Page", function () {
        return Assembly1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assembly1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assembly1.page.html */
      "qmtP");
      /* harmony import */


      var _assembly1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assembly1.page.scss */
      "V4aJ");
      /* harmony import */


      var _assembly_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assembly.service */
      "e4YJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");

      var Assembly1Page = /*#__PURE__*/function () {
        function Assembly1Page(user1, user, route, router) {
          var _this = this;

          _classCallCheck(this, Assembly1Page);

          this.user1 = user1;
          this.user = user;
          this.route = route;
          this.router = router;
          this.item2 = [];
          this.z = [];
          this.di = [];
          this.user.am().subscribe(function (data) {
            _this.z = data;
          });
          this.user.districts().subscribe(function (dis) {
            _this.di = dis;
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(Assembly1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.paramMap.subscribe(function (params) {
              _this2.z1 = params.get('id');

              _this2.user1.assembly1(_this2.z1).subscribe(function (dis) {
                _this2.item2 = dis;
              });
            });
          }
        }, {
          key: "data",
          value: function data(k) {
            if (k == 'no') {
              alert('Autobiography is not available');
            } else {
              this.router.navigate(['/individualdisplay', 'assemblypersondisplay/', this.z3]);
            }
          }
        }]);

        return Assembly1Page;
      }();

      Assembly1Page.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]
        }, {
          type: _assembly_service__WEBPACK_IMPORTED_MODULE_3__["AssemblyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      Assembly1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-assembly1',
        template: _raw_loader_assembly1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assembly1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Assembly1Page);
      /***/
    },

    /***/
    "Dr5x":
    /*!***********************************************!*\
      !*** ./src/app/assembly1/assembly1.module.ts ***!
      \***********************************************/

    /*! exports provided: Assembly1PageModule */

    /***/
    function Dr5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Assembly1PageModule", function () {
        return Assembly1PageModule;
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


      var _assembly1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assembly1-routing.module */
      "UIIY");
      /* harmony import */


      var _assembly1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assembly1.page */
      "8pFd");
      /* harmony import */


      var _assembly_assembly_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../assembly/assembly.page */
      "E/Id");

      var Assembly1PageModule = function Assembly1PageModule() {
        _classCallCheck(this, Assembly1PageModule);
      };

      Assembly1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assembly1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Assembly1PageRoutingModule"]],
        declarations: [_assembly1_page__WEBPACK_IMPORTED_MODULE_6__["Assembly1Page"], _assembly_assembly_page__WEBPACK_IMPORTED_MODULE_7__["AssemblyPage"]]
      })], Assembly1PageModule);
      /***/
    },

    /***/
    "UIIY":
    /*!*******************************************************!*\
      !*** ./src/app/assembly1/assembly1-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Assembly1PageRoutingModule */

    /***/
    function UIIY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Assembly1PageRoutingModule", function () {
        return Assembly1PageRoutingModule;
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


      var _assembly1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assembly1.page */
      "8pFd");

      var routes = [{
        path: '',
        component: _assembly1_page__WEBPACK_IMPORTED_MODULE_3__["Assembly1Page"]
      }];

      var Assembly1PageRoutingModule = function Assembly1PageRoutingModule() {
        _classCallCheck(this, Assembly1PageRoutingModule);
      };

      Assembly1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Assembly1PageRoutingModule);
      /***/
    },

    /***/
    "V4aJ":
    /*!***********************************************!*\
      !*** ./src/app/assembly1/assembly1.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function V4aJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\nimg {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2VtYmx5MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSw2QkFBQTtBQUNKO0FBRUU7RUFDRSw4QkFBQTtBQUFKO0FBR0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREo7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0YsZUFBQTtBQUNGIiwiZmlsZSI6ImFzc2VtYmx5MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xuXG4gIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMmRkMzZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG4gIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxufVxuaDJ7XG4gIHRleHQtc2hhZG93OiAwcHggM3B4IDZweCBjeWFuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuXG59XG5pbWd7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjVweFxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbmgye1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "qmtP":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assembly1/assembly1.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function qmtP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<style>\n  h2 {\n    text-align: center;\n    color:blue;\n  }  </style>\n<ion-content>\n<br>\n<br>\n<br>\n\n      <h3 *ngFor=\"let i of item2\">\n        <h2>{{i.MLA_name}}</h2>\n        <br>\n    <img src=\"{{zz}}{{i.photo}}\" width=\"400\" height=\"500\"  >\n          <dd style=\"color:darkolivegreen\"> Gender - {{i.gender}}</dd><br>\n        <dd style=\"color:Tomato\">   Party - {{i.party_name}}</dd><br>\n        <dd style=\"color:brown\">   Constituency - {{i.constituency_name}}</dd><br>\n        <dd style=\"color:green\">   District - {{i.Districts}}</dd><br>\n        <dd style=\"color:brown\">   Father - {{i.fathers_Name}}</dd><br>\n        <dd style=\"color:green\">   Spouse - {{i.Spouse_Name}}</dd><br>\n          <dd style=\"color:chocolate\">   Education - {{i.Highest_Education}},{{i.University}}</dd><br>\n        <dd style=\"color:indigo\">   Address - {{i.Address}}</dd><br>\n        <dd style=\"color:maroon\">   Email -  {{i.Email_address}}</dd><br>\n        <dd style=\"color:teal\">   Mobile - {{i.Mobile}}</dd><br>\n<ion-button expand=\"block\" (click) = \"data(i.chldid)\">Auto Biography</ion-button>\n      </h3>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=assembly1-assembly1-module-es5.js.map