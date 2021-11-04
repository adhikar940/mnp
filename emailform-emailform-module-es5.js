(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emailform-emailform-module"], {
    /***/
    "8gHb":
    /*!*********************************************!*\
      !*** ./src/app/emailform/emailform.page.ts ***!
      \*********************************************/

    /*! exports provided: EmailformPage */

    /***/
    function gHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailformPage", function () {
        return EmailformPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emailform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emailform.page.html */
      "JsuJ");
      /* harmony import */


      var _emailform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./emailform.page.scss */
      "s+WF");
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
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z"); // import {NavParams} from '@ionic/angular'


      var EmailformPage = /*#__PURE__*/function () {
        function EmailformPage(user, router, modalCtrl, _location) {
          _classCallCheck(this, EmailformPage);

          this.user = user;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this._location = _location;
          this.error = null;
          this.id = this.router.getCurrentNavigation().extras;
          this.detail = this.id.id;
          this.mf = _data_k__WEBPACK_IMPORTED_MODULE_8__["default"];
        }

        _createClass(EmailformPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.t = JSON.parse(localStorage.token);
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regularExpression.test(String(email));
          }
        }, {
          key: "btnclick",
          value: function btnclick(email, emaill) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var k;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      k = this.validateEmail(email);

                      if (email == null) {
                        this.user.toast("Please enter email", 'bottom', 2000, 'normalToast');
                      } else if (k == false) {
                        this.user.toast("Provide a valid email address", 'bottom', 2000, 'normalToast');
                      } else if (email != emaill) {
                        this.user.toast("Entered emails doesn't match", 'bottom', 2000, 'normalToast');
                        this.router.navigateByUrl('/emailform');
                      } else {
                        this.user.emailForm(email, this.t, this.detail).subscribe(function (res) {
                          if (res.m == "This email already exists") {
                            _this.user.toast("This email is already exists", 'bottom', 2000, 'normalToast');

                            _this.router.navigateByUrl('/emailform');
                          }

                          if (res.m == "Failed to deliver the mail, Hemce the account not created. This may due to invalid email. Kindly provide a Valid email") {
                            _this.user.toast("Failed to deliver the mail, Hemce the account not created. This may due to invalid email. Kindly provide a Valid email", 'bottom', 2000, 'normalToast');

                            _this.router.navigateByUrl('/emailform');
                          }

                          if (res.m == "Account already activated") {
                            _this.user.toast("This account is already activated", 'bottom', 2000, 'noramlToast');

                            _this.router.navigateByUrl("/partydetails");
                          }

                          if (res.m == "Account created") {
                            _this.user.toast("Account created. The username and password are sent to the provided email", 'bottom', 2000, 'noramlToast');

                            if (localStorage.getItem('p') == 'lokc') {
                              _this.router.navigateByUrl('/statepartylok');
                            } else if (localStorage.getItem('p') == 'rajc') {
                              _this.router.navigateByUrl('/partycandidates');
                            } else if (localStorage.getItem('p') == 'ac') {
                              _this.router.navigateByUrl('/statepartylok');
                            } else if (localStorage.getItem('p') == 'cc') {
                              _this.router.navigateByUrl('/council');
                            } else if (localStorage.getItem('p') == 'party' || localStorage.getItem('p') == 'll' || localStorage.getItem('p') == 'rr' || localStorage.getItem('p') == 'aa' || localStorage.getItem('p') == 'ccc') {
                              _this.router.navigateByUrl('/choice');
                            } else {
                              _this.router.navigateByUrl("/choice");
                            }
                          }
                        }, function (error) {
                          //  alert("Check Internet connection")
                          _this.error = error.status;
                          alert(error.status + "error");
                        }); // alert("Refresh to find the changes") ;
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return EmailformPage;
      }();

      EmailformPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }];
      };

      EmailformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-emailform',
        template: _raw_loader_emailform_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emailform_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmailformPage);
      /***/
    },

    /***/
    "CBf1":
    /*!*******************************************************!*\
      !*** ./src/app/emailform/emailform-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EmailformPageRoutingModule */

    /***/
    function CBf1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailformPageRoutingModule", function () {
        return EmailformPageRoutingModule;
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


      var _emailform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./emailform.page */
      "8gHb");

      var routes = [{
        path: '',
        component: _emailform_page__WEBPACK_IMPORTED_MODULE_3__["EmailformPage"]
      }];

      var EmailformPageRoutingModule = function EmailformPageRoutingModule() {
        _classCallCheck(this, EmailformPageRoutingModule);
      };

      EmailformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmailformPageRoutingModule);
      /***/
    },

    /***/
    "Jch7":
    /*!***********************************************!*\
      !*** ./src/app/emailform/emailform.module.ts ***!
      \***********************************************/

    /*! exports provided: EmailformPageModule */

    /***/
    function Jch7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailformPageModule", function () {
        return EmailformPageModule;
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


      var _emailform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./emailform-routing.module */
      "CBf1");
      /* harmony import */


      var _emailform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./emailform.page */
      "8gHb");

      var EmailformPageModule = function EmailformPageModule() {
        _classCallCheck(this, EmailformPageModule);
      };

      EmailformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _emailform_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmailformPageRoutingModule"]],
        declarations: [_emailform_page__WEBPACK_IMPORTED_MODULE_6__["EmailformPage"]]
      })], EmailformPageModule);
      /***/
    },

    /***/
    "JsuJ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emailform/emailform.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function JsuJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>emailform</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"color:blue;text-align:center;\">Please enter email here</h2>\n  <ion-item style=\"border-radius: 50px;\">\n    <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n\n    <ion-input name=\"email\" id=\"email\" required email placeholder=\"Enter party's mail\" type=\"password\" class=\"form-control\"\n    name=\"email\" [(ngModel)] =\"email\" email=\"true\">\n    </ion-input >  \n\n\n\n</ion-item>\n<br/>\n<ion-item style=\"border-radius: 50px;\">\n  <ion-icon name=\"mail-outline\" style=\"color:rebeccapurple\"></ion-icon>\n<ion-input name=\"emaill\" id=\"emaill\" required email placeholder=\"Re Enter the party's mail\" type=\"email\" class=\"form-control\"\nname=\"emaill\" [(ngModel)] =\"emaill\" email=\"true\">\n</ion-input >\n</ion-item>\n   <br/>\n\n   <div style=\"text-align: center;\"> <ion-button color=\"secondary\" (click)=\"btnclick(email,emaill)\">Activate</ion-button></div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "s+WF":
    /*!***********************************************!*\
      !*** ./src/app/emailform/emailform.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function sWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbGZvcm0ucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=emailform-emailform-module-es5.js.map