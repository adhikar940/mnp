(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partycandidateemail-partycandidateemail-module"], {
    /***/
    "Cb9A":
    /*!*****************************************************************!*\
      !*** ./src/app/partycandidateemail/partycandidateemail.page.ts ***!
      \*****************************************************************/

    /*! exports provided: PartycandidateemailPage */

    /***/
    function Cb9A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartycandidateemailPage", function () {
        return PartycandidateemailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_partycandidateemail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./partycandidateemail.page.html */
      "QqZ1");
      /* harmony import */


      var _partycandidateemail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./partycandidateemail.page.scss */
      "UY32");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // import {NavParams} from '@ionic/angular'


      var PartycandidateemailPage = /*#__PURE__*/function () {
        function PartycandidateemailPage(user, router, modalCtrl) {
          _classCallCheck(this, PartycandidateemailPage);

          this.user = user;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.id = this.router.getCurrentNavigation().extras;
          this.detail = this.id.id; //   this.detail= navParam.get('/partydetails');
          //   console.log(this.detail)
        }

        _createClass(PartycandidateemailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.email1 = JSON.parse(localStorage.token);
            console.log(this.email1);
          }
        }, {
          key: "btnclick",
          value: function btnclick(email, emaill) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //console.log(emaill);
                      console.log(this.email1);
                      console.log(this.detail);

                      if (email == null) {
                        this.user.toast("Please enter email", 'bottom', 2000, 'normalToast');
                      } else if (email != emaill) {
                        this.user.toast("Entered emails doesn't match", 'bottom', 2000, 'normalToast');
                        this.router.navigateByUrl('/partycandidateemail');
                      } else {
                        this.user.partyemailForm(email, this.email1, this.detail).subscribe(function (res) {
                          console.log(res);

                          if (res.m == "This email alerady exists") {
                            _this.user.toast("This email is already exists", 'bottom', 2000, 'normalToast');

                            _this.router.navigateByUrl('/partycandidateemail');
                          }

                          if (res.m == "Failed to deliver the mail, Hemce the account not created. This may due to invalid email. Kindly provide a Valid email") {
                            _this.user.toast("Failed to deliver the mail, Hemce the account not …ue to invalid email. Kindly provide a Valid email", 'bottom', 2000, 'normalToast');
                          }

                          if (res.m == "This party is already activated") {
                            _this.user.toast("This party is already activated", 'bottom', 2000, 'noramlToast');
                          }

                          if (res.m == "Account created") {
                            _this.user.toast("Account created. The username and password are sent to the provided email", 'bottom', 2000, 'noramlToast');

                            _this.router.navigateByUrl('/partycandidateemail');
                          }
                        }); //  const page = await this.modalCtrl.create({
                        //    component:Email1Page,
                        //    componentProps:{email:email,id:this.detail,email1:this.email1}
                        //  })
                        //  return await page.present();
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PartycandidateemailPage;
      }();

      PartycandidateemailPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      PartycandidateemailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partycandidateemail',
        template: _raw_loader_partycandidateemail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partycandidateemail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PartycandidateemailPage);
      /***/
    },

    /***/
    "EnqJ":
    /*!***************************************************************************!*\
      !*** ./src/app/partycandidateemail/partycandidateemail-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: PartycandidateemailPageRoutingModule */

    /***/
    function EnqJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartycandidateemailPageRoutingModule", function () {
        return PartycandidateemailPageRoutingModule;
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


      var _partycandidateemail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./partycandidateemail.page */
      "Cb9A");

      var routes = [{
        path: '',
        component: _partycandidateemail_page__WEBPACK_IMPORTED_MODULE_3__["PartycandidateemailPage"]
      }];

      var PartycandidateemailPageRoutingModule = function PartycandidateemailPageRoutingModule() {
        _classCallCheck(this, PartycandidateemailPageRoutingModule);
      };

      PartycandidateemailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PartycandidateemailPageRoutingModule);
      /***/
    },

    /***/
    "QqZ1":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partycandidateemail/partycandidateemail.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QqZ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Party Candidate Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"color:blue;text-align:center;\">Please enter email here</h2>\n  <ion-item style=\"border-radius: 50px;\">\n    <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n\n<ion-input name=\"email\" id=\"email\" required email placeholder=\"Enter candidate's mail\" type=\"password\" class=\"form-control\"\nname=\"email\" [(ngModel)] =\"email\" email=\"true\">\n</ion-input >\n</ion-item>\n<br/>\n<ion-item style=\"border-radius: 50px;\">\n  <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n<ion-input name=\"emaill\" id=\"emaill\" required email placeholder=\"Re Enter the candidate's mail\" type=\"email\" class=\"form-control\"\nname=\"emaill\" [(ngModel)] =\"emaill\" email=\"true\">\n</ion-input >\n</ion-item>\n   <br/>\n\n   <div style=\"text-align: center;\"> <ion-button color=\"secondary\" (click)=\"btnclick(email,emaill)\">Activate</ion-button></div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "UY32":
    /*!*******************************************************************!*\
      !*** ./src/app/partycandidateemail/partycandidateemail.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function UY32(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0eWNhbmRpZGF0ZWVtYWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "yNrm":
    /*!*******************************************************************!*\
      !*** ./src/app/partycandidateemail/partycandidateemail.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PartycandidateemailPageModule */

    /***/
    function yNrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartycandidateemailPageModule", function () {
        return PartycandidateemailPageModule;
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


      var _partycandidateemail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./partycandidateemail-routing.module */
      "EnqJ");
      /* harmony import */


      var _partycandidateemail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./partycandidateemail.page */
      "Cb9A");

      var PartycandidateemailPageModule = function PartycandidateemailPageModule() {
        _classCallCheck(this, PartycandidateemailPageModule);
      };

      PartycandidateemailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _partycandidateemail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PartycandidateemailPageRoutingModule"]],
        declarations: [_partycandidateemail_page__WEBPACK_IMPORTED_MODULE_6__["PartycandidateemailPage"]]
      })], PartycandidateemailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=partycandidateemail-partycandidateemail-module-es5.js.map