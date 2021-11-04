(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legislativecouncil2-legislativecouncil2-module"], {
    /***/
    "35DH":
    /*!*******************************************************************!*\
      !*** ./src/app/legislativecouncil2/legislativecouncil2.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function DH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlZ2lzbGF0aXZlY291bmNpbDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUdFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoibGVnaXNsYXRpdmVjb3VuY2lsMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xuICBcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjMmRkMzZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICBcbiAgICBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuICBoMntcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA2cHggY3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgY29sb3I6Ymx1ZTtcbiAgXG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "SB1O":
    /*!*******************************************************************!*\
      !*** ./src/app/legislativecouncil2/legislativecouncil2.module.ts ***!
      \*******************************************************************/

    /*! exports provided: Legislativecouncil2PageModule */

    /***/
    function SB1O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Legislativecouncil2PageModule", function () {
        return Legislativecouncil2PageModule;
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


      var _legislativecouncil2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./legislativecouncil2-routing.module */
      "jJri");
      /* harmony import */


      var _legislativecouncil2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./legislativecouncil2.page */
      "aCvM");

      var Legislativecouncil2PageModule = function Legislativecouncil2PageModule() {
        _classCallCheck(this, Legislativecouncil2PageModule);
      };

      Legislativecouncil2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _legislativecouncil2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Legislativecouncil2PageRoutingModule"]],
        declarations: [_legislativecouncil2_page__WEBPACK_IMPORTED_MODULE_6__["Legislativecouncil2Page"]]
      })], Legislativecouncil2PageModule);
      /***/
    },

    /***/
    "aCvM":
    /*!*****************************************************************!*\
      !*** ./src/app/legislativecouncil2/legislativecouncil2.page.ts ***!
      \*****************************************************************/

    /*! exports provided: Legislativecouncil2Page */

    /***/
    function aCvM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Legislativecouncil2Page", function () {
        return Legislativecouncil2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legislativecouncil2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legislativecouncil2.page.html */
      "aPbF");
      /* harmony import */


      var _legislativecouncil2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./legislativecouncil2.page.scss */
      "35DH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");

      var Legislativecouncil2Page = /*#__PURE__*/function () {
        function Legislativecouncil2Page(user, navParam) {
          _classCallCheck(this, Legislativecouncil2Page);

          this.user = user;
          this.navParam = navParam;
          this.details = [];
          this.details = navParam.get('legislativecouncil1');
          console.log(this.details); //   this.user.legislativecouncil().subscribe(data =>{
          //     for(let x=0;x<data[0].Legislative_Council_Candidates.length;x++){
          //       console.log(data[0].Legislative_Council_Candidates[x].elected);
          //       if(data[0].Legislative_Council_Candidates[x].elected=='Graduates constituencies'){
          //       this.le.push(data[0].Legislative_Council_Candidates[x].elected);
          //       }
          //     }
          //     console.log(this.le);
          //  })
        }

        _createClass(Legislativecouncil2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Legislativecouncil2Page;
      }();

      Legislativecouncil2Page.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      Legislativecouncil2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legislativecouncil2',
        template: _raw_loader_legislativecouncil2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legislativecouncil2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Legislativecouncil2Page);
      /***/
    },

    /***/
    "aPbF":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legislativecouncil2/legislativecouncil2.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aPbF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>legislativecouncil2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 >Constituency Details</h2>\n  <!-- <div *ngFor=\"let cons of details\">  -->\n\n    <ion-grid class=\"padding\" >\n      <ion-row>\n    <ion-col size=\"1\">Sl.no</ion-col>\n        <ion-col size=\"2.75\">MLCname</ion-col>\n        <ion-col size=\"2.75\">Constituency</ion-col>\n        <ion-col size=\"2.75\">Party</ion-col>\n        <ion-col size=\"2.75\">Elected</ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let cons of details; index as m\">\n          <ion-col  size=\"1\">{{m+1}}</ion-col>\n        <ion-col size=\"2.75\"  ><b>{{cons.MLC_name}}</b></ion-col>\n        <ion-col  size=\"2.75\">{{cons.constituency_name}}</ion-col>\n        <ion-col  size=\"2.75\">{{cons.party}}</ion-col>\n        <ion-col  size=\"2.75\"> {{cons.elected}} </ion-col>\n      </ion-row>\n    </ion-grid>\n   <!-- </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "jJri":
    /*!***************************************************************************!*\
      !*** ./src/app/legislativecouncil2/legislativecouncil2-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: Legislativecouncil2PageRoutingModule */

    /***/
    function jJri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Legislativecouncil2PageRoutingModule", function () {
        return Legislativecouncil2PageRoutingModule;
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


      var _legislativecouncil2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./legislativecouncil2.page */
      "aCvM");

      var routes = [{
        path: '',
        component: _legislativecouncil2_page__WEBPACK_IMPORTED_MODULE_3__["Legislativecouncil2Page"]
      }];

      var Legislativecouncil2PageRoutingModule = function Legislativecouncil2PageRoutingModule() {
        _classCallCheck(this, Legislativecouncil2PageRoutingModule);
      };

      Legislativecouncil2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Legislativecouncil2PageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=legislativecouncil2-legislativecouncil2-module-es5.js.map