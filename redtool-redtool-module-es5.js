(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redtool-redtool-module"], {
    /***/
    "4AyQ":
    /*!*******************************************!*\
      !*** ./src/app/redtool/redtool.module.ts ***!
      \*******************************************/

    /*! exports provided: RedtoolPageModule */

    /***/
    function AyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedtoolPageModule", function () {
        return RedtoolPageModule;
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


      var _redtool_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redtool-routing.module */
      "rYOT");
      /* harmony import */


      var _redtool_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redtool.page */
      "BO8R");

      var RedtoolPageModule = function RedtoolPageModule() {
        _classCallCheck(this, RedtoolPageModule);
      };

      RedtoolPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redtool_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedtoolPageRoutingModule"]],
        declarations: [_redtool_page__WEBPACK_IMPORTED_MODULE_6__["RedtoolPage"]]
      })], RedtoolPageModule);
      /***/
    },

    /***/
    "BO8R":
    /*!*****************************************!*\
      !*** ./src/app/redtool/redtool.page.ts ***!
      \*****************************************/

    /*! exports provided: RedtoolPage */

    /***/
    function BO8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedtoolPage", function () {
        return RedtoolPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_redtool_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./redtool.page.html */
      "tAN+");
      /* harmony import */


      var _redtool_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./redtool.page.scss */
      "Qj6Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _assembly_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../assembly.service */
      "e4YJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RedtoolPage = /*#__PURE__*/function () {
        function RedtoolPage(user, router) {
          var _this = this;

          _classCallCheck(this, RedtoolPage);

          this.user = user;
          this.router = router;
          this.k2 = [];
          this.user.am().subscribe(function (data) {
            _this.k2 = data;
          });
        }

        _createClass(RedtoolPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked(k3, k4) {
            this.router.navigate([k3, k4]);
          }
        }]);

        return RedtoolPage;
      }();

      RedtoolPage.ctorParameters = function () {
        return [{
          type: _assembly_service__WEBPACK_IMPORTED_MODULE_4__["AssemblyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RedtoolPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-redtool',
        template: _raw_loader_redtool_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_redtool_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RedtoolPage);
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
    "Qj6Z":
    /*!*******************************************!*\
      !*** ./src/app/redtool/redtool.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Qj6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\nh1 {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZHRvb2wucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNFO0VBQ0UsNkJBQUE7QUFDSjtBQUVFO0VBQ0UsOEJBQUE7QUFBSjtBQUdBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNNLGVBQUE7QUFBTiIsImZpbGUiOiJyZWR0b29sLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG5cbiAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMyZGQzNmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gIH1cbiAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG59XG5oMntcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbn1cbmgxe1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "rYOT":
    /*!***************************************************!*\
      !*** ./src/app/redtool/redtool-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RedtoolPageRoutingModule */

    /***/
    function rYOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedtoolPageRoutingModule", function () {
        return RedtoolPageRoutingModule;
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


      var _redtool_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redtool.page */
      "BO8R");

      var routes = [{
        path: '',
        component: _redtool_page__WEBPACK_IMPORTED_MODULE_3__["RedtoolPage"]
      }];

      var RedtoolPageRoutingModule = function RedtoolPageRoutingModule() {
        _classCallCheck(this, RedtoolPageRoutingModule);
      };

      RedtoolPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedtoolPageRoutingModule);
      /***/
    },

    /***/
    "tAN+":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redtool/redtool.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Red</ion-title>\n  </ion-toolbar>\n</ion-header>\n<style>\n  h2 {\n    text-align: center;\n  }  </style>\n<ion-content >\n  <b style=\"color:blue\" > <h2>Winning Candidates </h2></b>\n    <ion-list *ngFor=\"let i of k2\">\n    <ion-item >\n<ion-label style=\"color:green\">\n  <ion-button shape=\"round\" size=\"default\" expand=\"block\" fill=\"outline\" (click)=\"btnClicked('assembly1',i.State_name)\">\n    {{i.State_name}}-{{i.Assembly_Candidates.length}}</ion-button>\n  </ion-label>\n    </ion-item>\n\n  </ion-list>\n  </ion-content >\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=redtool-redtool-module-es5.js.map