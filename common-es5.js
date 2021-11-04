(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "+DP6":
    /*!***************************************************!*\
      !*** ./src/app/carporation1/carporation1.page.ts ***!
      \***************************************************/

    /*! exports provided: Carporation1Page */

    /***/
    function DP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Carporation1Page", function () {
        return Carporation1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_carporation1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./carporation1.page.html */
      "EtJ7");
      /* harmony import */


      var _carporation1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carporation1.page.scss */
      "5OAB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _carporation2_carporation2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../carporation2/carporation2.page */
      "1VVe");

      var Carporation1Page = /*#__PURE__*/function () {
        function Carporation1Page(navParam, modalctrl) {
          _classCallCheck(this, Carporation1Page);

          this.navParam = navParam;
          this.modalctrl = modalctrl;
          this.c = [];
          this.c1 = [];
          this.na = {};
          this.c2 = [];
          this.c = navParam.get('carporation');

          for (var i = 0; i < this.c.Corporation_Details.length; i++) {
            this.c1.push(this.c.Corporation_Details[i]); // console.log(this.c.Corporation_Details[i])
          }

          console.log(this.c1);
        }

        _createClass(Carporation1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked(na) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(na);
                      _context.next = 3;
                      return this.modalctrl.create({
                        component: _carporation2_carporation2_page__WEBPACK_IMPORTED_MODULE_5__["Carporation2Page"],
                        componentProps: {
                          carporation1: na
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      console.log("selector", na);
                      this.c2 = na;
                      _context.next = 8;
                      return modal.present();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return Carporation1Page;
      }();

      Carporation1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      Carporation1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carporation1',
        template: _raw_loader_carporation1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carporation1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Carporation1Page);
      /***/
    },

    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "1VVe":
    /*!***************************************************!*\
      !*** ./src/app/carporation2/carporation2.page.ts ***!
      \***************************************************/

    /*! exports provided: Carporation2Page */

    /***/
    function VVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Carporation2Page", function () {
        return Carporation2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_carporation2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./carporation2.page.html */
      "H2GI");
      /* harmony import */


      var _carporation2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./carporation2.page.scss */
      "O/M6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var Carporation2Page = /*#__PURE__*/function () {
        function Carporation2Page(navParam) {
          _classCallCheck(this, Carporation2Page);

          this.navParam = navParam;
          this.name = [];
          this.name = navParam.get('carporation1');
        }

        _createClass(Carporation2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Carporation2Page;
      }();

      Carporation2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      Carporation2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carporation2',
        template: _raw_loader_carporation2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carporation2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Carporation2Page);
      /***/
    },

    /***/
    "2aSp":
    /*!***************************************************!*\
      !*** ./src/app/partydetails/partydetails.page.ts ***!
      \***************************************************/

    /*! exports provided: PartydetailsPage */

    /***/
    function aSp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartydetailsPage", function () {
        return PartydetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_partydetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./partydetails.page.html */
      "VGHY");
      /* harmony import */


      var _partydetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./partydetails.page.scss */
      "CIiG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PartydetailsPage = /*#__PURE__*/function () {
        function PartydetailsPage(user, navCtrl, router, alertCtrl) {
          var _this = this;

          _classCallCheck(this, PartydetailsPage);

          this.user = user;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.details = [];
          this.d = {};
          this.user.party().subscribe(function (data) {
            _this.details = data; //console.log(this.details)
          });
        }

        _createClass(PartydetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked(d) {
            //  console.log(d)
            // console.log(d.actvated)
            //alert("submitted")
            //  this.navCtrl.navigateBack('/emailform')
            localStorage.p = 'party';
            this.router.navigateByUrl('/emailform', d);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirm!',
                        message: '<strong>Do you want to Logout !</strong>',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            localStorage.clear();

                            _this2.navCtrl.navigateBack('/login');
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "btnclick",
          value: function btnclick() {
            this.navCtrl.navigateBack('/changepassword');
          }
        }]);

        return PartydetailsPage;
      }();

      PartydetailsPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      PartydetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partydetails',
        template: _raw_loader_partydetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partydetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PartydetailsPage);
      /***/
    },

    /***/
    "3hvw":
    /*!***************************************!*\
      !*** ./src/app/white1/white1.page.ts ***!
      \***************************************/

    /*! exports provided: White1Page */

    /***/
    function hvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "White1Page", function () {
        return White1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_white1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./white1.page.html */
      "eO5X");
      /* harmony import */


      var _white1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./white1.page.scss */
      "CVKQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var White1Page = /*#__PURE__*/function () {
        function White1Page() {
          _classCallCheck(this, White1Page);
        }

        _createClass(White1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return White1Page;
      }();

      White1Page.ctorParameters = function () {
        return [];
      };

      White1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-white1',
        template: _raw_loader_white1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_white1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], White1Page);
      /***/
    },

    /***/
    "5OAB":
    /*!*****************************************************!*\
      !*** ./src/app/carporation1/carporation1.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function OAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnBvcmF0aW9uMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJjYXJwb3JhdGlvbjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICBcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context3.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context3.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context3.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context3.abrupt("return", false);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "BaUg":
    /*!**************************************!*\
      !*** ./src/app/rajysabha.service.ts ***!
      \**************************************/

    /*! exports provided: RajysabhaService */

    /***/
    function BaUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RajysabhaService", function () {
        return RajysabhaService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data/k */
      "Ew1Z");

      var RajysabhaService = /*#__PURE__*/function () {
        function RajysabhaService(http) {
          _classCallCheck(this, RajysabhaService);

          this.http = http;
          this.message = [];
          this.message1 = [];
          this.mf = _data_k__WEBPACK_IMPORTED_MODULE_3__["default"];
        }

        _createClass(RajysabhaService, [{
          key: "state",
          value: function state() {
            var url = this.mf + "n/State_api/";
            return this.http.get(url);
          }
        }, {
          key: "rs",
          value: function rs() {
            var url = this.mf + "n/State_Wise_Rajyasabha_Candidates_api/";
            return this.http.get(url);
          }
        }, {
          key: "stateImages",
          value: function stateImages() {
            var url = this.mf + "n/states_api/ "; // console.log(url)

            return this.http.get(url);
          }
        }]);

        return RajysabhaService;
      }();

      RajysabhaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RajysabhaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RajysabhaService);
      /***/
    },

    /***/
    "CIiG":
    /*!*****************************************************!*\
      !*** ./src/app/partydetails/partydetails.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function CIiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhcnR5ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSw2QkFBQTtBQUNOO0FBRUk7RUFDRSw4QkFBQTtBQUFOO0FBR0U7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJwYXJ0eWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbiAgXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzJkZDM2ZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gIH1cbiAgaDJ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOmJsdWU7XG4gIFxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "CVKQ":
    /*!*****************************************!*\
      !*** ./src/app/white1/white1.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function CVKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGl0ZTEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "E/Id":
    /*!*******************************************!*\
      !*** ./src/app/assembly/assembly.page.ts ***!
      \*******************************************/

    /*! exports provided: AssemblyPage */

    /***/
    function EId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyPage", function () {
        return AssemblyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assembly_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assembly.page.html */
      "vb6r");
      /* harmony import */


      var _assembly_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assembly.page.scss */
      "XMpA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");

      var AssemblyPage = /*#__PURE__*/function () {
        function AssemblyPage(user, router) {
          var _this3 = this;

          _classCallCheck(this, AssemblyPage);

          this.user = user;
          this.router = router;
          this.items = [];
          this.item1 = [];
          this.item2 = [];
          this.d = {};
          this.index = 0;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.user.statedistrict().subscribe(function (data) {
            _this3.items = data;
          });
          this.user.am().subscribe(function (data) {
            _this3.item1 = data;
          });
          /*  this.user.assembly(this.district).subscribe(data =>{
              this.item2=data as any;
            })*/

          this.z = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.z = this.z.slice(0, -1);
        }

        _createClass(AssemblyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked() {
            var _this4 = this;

            this.event.emit(this.district);
            this.index = 10;
            this.user.assembly(this.district).subscribe(function (data) {
              _this4.item2 = data;
            });
          }
        }]);

        return AssemblyPage;
      }();

      AssemblyPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AssemblyPage.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      AssemblyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assembly',
        template: _raw_loader_assembly_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assembly_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AssemblyPage);
      /***/
    },

    /***/
    "EhU9":
    /*!************************************************************!*\
      !*** ./src/app/partylogin/statedist1/statedist1.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function EhU9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZWRpc3QxLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "EtJ7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carporation1/carporation1.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function EtJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>carporation1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"text-align: center;color:blue\">Corporation Districts</h2>\n  <div *ngFor=\"let na of c1\">\n   \n    <ion-button shape=\"round\" expand=\"block\" fill=\"outline\" size=\"default\" (click)=\"btnClicked(na)\">{{na.District}}  </ion-button>\n  </div>\n  <!-- <div>{{c1}}</div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "H2GI":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carporation2/carporation2.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function H2GI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>carporation2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 style=\"text-align: center;color:blue\">\n    Corporation Details\n  </h2>\n  <ion-list shape=\"round\">\n       <ion-item slot=\"start\">  <b>Name:</b>{{name.Mayor_Name}} </ion-item>\n       <ion-item slot=\"start\"><b>Muncipal corporation name:</b>{{name.Municipal_Corporation_Name}}</ion-item>\n       <ion-item slot=\"start\"><b>Area:</b>{{name.areainkm2}}</ion-item>\n       <ion-item slot=\"start\"><b>City:</b>{{name.city}}</ion-item>\n       <ion-item slot=\"start\"><b>Formation Year: </b>{{name.formationyear}}</ion-item>\n       <ion-item slot=\"start\"><b>Last Select Year:</b>{{name.lastelectionyear}}</ion-item>\n       <ion-item slot=\"start\"><b>Party:</b>{{name.party}}</ion-item>\n       <ion-item slot=\"start\"><b>Population:</b>{{name.population}}</ion-item>\n</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "HEKc":
    /*!*******************************************************************************!*\
      !*** ./src/app/individuallogin/individualdisplay/individualdisplay.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function HEKc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-avatar {\n  width: 200px;\n  height: 200px;\n}\n\nion-chip {\n  width: 100%;\n  height: 200px;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n\np {\n  margin-top: 0%;\n  margin-bottom: 0%;\n  margin-right: 5%;\n  margin-left: 10%;\n  text-align: justify;\n}\n\nh6 {\n  margin-top: 1%;\n  margin-bottom: 0%;\n  margin-right: 10%;\n  margin-left: 5%;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZGl2aWR1YWxkaXNwbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0EsY0FBQTtBQUdBOztBQURBO0VBQ0UsY0FBQTtFQUNGLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNFLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0YsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDRSxtQkFBQTtBQUtGIiwiZmlsZSI6ImluZGl2aWR1YWxkaXNwbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6MjAwcHg7XG59XG5pb24tY2hpcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi5pbWFnZS1jZW50ZXJ7XG5tYXJnaW46MCBhdXRvO1xufVxucCB7XG4gIG1hcmdpbi10b3A6IDAlO1xubWFyZ2luLWJvdHRvbTogMCU7XG5tYXJnaW4tcmlnaHQ6IDUlO1xubWFyZ2luLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmg2IHtcbiAgbWFyZ2luLXRvcDogMSU7XG5tYXJnaW4tYm90dG9tOiAwJTtcbm1hcmdpbi1yaWdodDogMTAlO1xubWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */";
      /***/
    },

    /***/
    "JBYW":
    /*!*****************************************************************************!*\
      !*** ./src/app/individuallogin/individualdisplay/individualdisplay.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: IndividualdisplayPage */

    /***/
    function JBYW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndividualdisplayPage", function () {
        return IndividualdisplayPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_individualdisplay_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./individualdisplay.page.html */
      "f3wu");
      /* harmony import */


      var _individualdisplay_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./individualdisplay.page.scss */
      "HEKc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var IndividualdisplayPage = /*#__PURE__*/function () {
        function IndividualdisplayPage(http, user, route, navCtrl, router, alertCtrl) {
          var _this5 = this;

          _classCallCheck(this, IndividualdisplayPage);

          this.http = http;
          this.user = user;
          this.route = route;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.details = [];
          this.route.paramMap.subscribe(function (params) {
            _this5.z1 = params.get('a');
            _this5.z2 = params.get('id');
          });
        }

        _createClass(IndividualdisplayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.user.individualdisplay(this.z1, this.z2).subscribe(function (data) {
              _this6.details = data;
            });
          }
        }]);

        return IndividualdisplayPage;
      }();

      IndividualdisplayPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      IndividualdisplayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-individualdisplay',
        template: _raw_loader_individualdisplay_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_individualdisplay_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IndividualdisplayPage);
      /***/
    },

    /***/
    "O/M6":
    /*!*****************************************************!*\
      !*** ./src/app/carporation2/carporation2.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function OM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnBvcmF0aW9uMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJjYXJwb3JhdGlvbjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAzcHggNnB4IGN5YW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICBcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "Pndy":
    /*!************************************************************!*\
      !*** ./src/app/partylogin/partylogout/partylogout.page.ts ***!
      \************************************************************/

    /*! exports provided: PartylogoutPage */

    /***/
    function Pndy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartylogoutPage", function () {
        return PartylogoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_partylogout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./partylogout.page.html */
      "SDtX");
      /* harmony import */


      var _partylogout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./partylogout.page.scss */
      "XhH6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PartylogoutPage = /*#__PURE__*/function () {
        function PartylogoutPage(user, navCtrl, router, alertCtrl) {
          _classCallCheck(this, PartylogoutPage);

          this.user = user;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
        }

        _createClass(PartylogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirm!',
                        message: '<strong>Do you want to Logout !</strong>',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            localStorage.clear();

                            _this7.navCtrl.navigateBack('/login');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "btnclick",
          value: function btnclick() {
            this.navCtrl.navigateBack('/changepassword');
          }
        }]);

        return PartylogoutPage;
      }();

      PartylogoutPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      PartylogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partylogout',
        template: _raw_loader_partylogout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partylogout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PartylogoutPage);
      /***/
    },

    /***/
    "SDtX":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partylogin/partylogout/partylogout.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SDtX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n  <ion-row>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"btnclick()\">\n      Change Password<br/>\n    </ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"logout()\">\n      Logout<br/>\n    </ion-button>\n  </ion-col>\n</ion-row>\n";
      /***/
    },

    /***/
    "TJ7I":
    /*!***********************************************************!*\
      !*** ./src/app/collectordetails/collectordetails.page.ts ***!
      \***********************************************************/

    /*! exports provided: CollectordetailsPage */

    /***/
    function TJ7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectordetailsPage", function () {
        return CollectordetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_collectordetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./collectordetails.page.html */
      "dwjv");
      /* harmony import */


      var _collectordetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./collectordetails.page.scss */
      "c5a8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");

      var CollectordetailsPage = /*#__PURE__*/function () {
        function CollectordetailsPage(navParam) {
          _classCallCheck(this, CollectordetailsPage);

          this.navParam = navParam;
          this.collectordetails1 = [];
          this.collectordetails1 = navParam.get('collector'); // console.log(this.collectordetails1);

          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_5__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(CollectordetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CollectordetailsPage;
      }();

      CollectordetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      CollectordetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-collectordetails',
        template: _raw_loader_collectordetails_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_collectordetails_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CollectordetailsPage);
      /***/
    },

    /***/
    "UkuO":
    /*!*********************************************!*\
      !*** ./src/app/lok/state2/state2.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function UkuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZTIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Un0g":
    /*!*******************************************************************!*\
      !*** ./src/app/legislativecouncil1/legislativecouncil1.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Un0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  margin-left: 90px;\n  text-shadow: 0px 0px 3px green;\n  font-size: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlZ2lzbGF0aXZlY291bmNpbDEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRixlQUFBO0FBRUYiLCJmaWxlIjoibGVnaXNsYXRpdmVjb3VuY2lsMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjVweFxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbmgye1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCBncmVlbjtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "VGHY":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partydetails/partydetails.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function VGHY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n<!--  <ion-row>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"btnclick()\">\n      Change Password<br/>\n    </ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button style=\"text-align: center;\" (click)=\"logout()\">\n      Logout<br/>\n    </ion-button>\n  </ion-col>\n</ion-row> -->\n  <!-- <ion-button shape=\"round\" size=\"default\" expand=\"block\" (click)=\"logout()\" class=\"btn btn-sm\" color=\"danger\" fill=\"outline\">Logout</ion-button> -->\n<h2>Party details</h2>\n <ion-item>\n   <ion-list>\n    <ion-grid class=\"padding\" >\n      <ion-row>\n    <ion-col size=\"1\">Sl.no</ion-col>\n    <ion-col size=\"3\">Abbreviation</ion-col>\n        <ion-col size=\"4\">Party Name</ion-col>\n        <ion-col size=\"4\">Add</ion-col>\n       </ion-row>\n      <ion-row *ngFor=\"let d of details; index as m\">\n        <ion-col size=\"1\">{{m+1}}</ion-col>\n        <ion-col size=\"3\">{{d.abbreviation}}</ion-col>\n        <ion-col size=\"4\">{{d.partyname}}</ion-col>\n        <ion-col size=\"4\">\n          <ion-button shape=\"round\" (click)=\"btnClicked(d)\" expand=\"block\" size=\"default\" fill=\"outline\" *ngIf=\"d.actvated=='no'\" >Activate</ion-button>\n        <div *ngIf=\"d.actvated=='yes'\" (click)=\"btnClicked(d)\" >Activated</div>\n        <div *ngIf=\"d.actvated=='process'\" >under processing</div></ion-col>\n      </ion-row>\n      </ion-grid>\n   </ion-list>\n  </ion-item>\n";
      /***/
    },

    /***/
    "XMpA":
    /*!*********************************************!*\
      !*** ./src/app/assembly/assembly.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function XMpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  box-shadow: 0px 0px 5px cyan;\n  border-radius: 10px;\n  float: left;\n  margin: 5px;\n}\n\nimg:hover {\n  transform: scale(1.3);\n  transition: 5s;\n}\n\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n}\n\nion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n\nion-grid ion-row:first-child {\n  font-weight: bold;\n}\n\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\n\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2VtYmx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBT0E7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU1FO0VBRUUsaUJBQUE7QUFMSjs7QUFPRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0U7RUFDRSw2QkFBQTtBQUxKOztBQVFFO0VBQ0UsOEJBQUE7QUFOSiIsImZpbGUiOiJhc3NlbWJseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBjeWFuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjVweFxufVxuaW1nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgICB0cmFuc2l0aW9uOiA1cztcbn1cbi8vIGgye1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4vLyAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4IGdyZWVuO1xuLy8gICAgZm9udC1zaXplOiA2MHB4O1xuXG4vLyB9XG5oMntcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA2cHggY3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbn1cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG5cbiAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG4gIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "XhH6":
    /*!**************************************************************!*\
      !*** ./src/app/partylogin/partylogout/partylogout.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function XhH6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0eWxvZ291dC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "XoMi":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legislativecouncil1/legislativecouncil1.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XoMi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>legislativecouncil1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <h3 *ngFor=\"let i of z\" >\n<h2>Legistlative Council MLC - {{i.MLC_name}}</h2>\n  <img src=\"{{zz}}{{i.photo}}\" width=\"400\" height=\"500\"  >\n        <dd style=\"color:darkolivegreen\"> Gender - {{i.gender}}</dd><br>\n      <dd style=\"color:Tomato\">   Party - {{i.party_name}}</dd><br>\n      <dd style=\"color:brown\">   Constituency - {{i.constituency_name}}</dd><br>\n      <dd style=\"color:green\">   District - {{i.Districts}}</dd><br>\n      <dd style=\"color:brown\">   Father - {{i.fathers_Name}}</dd><br>\n      <dd style=\"color:green\">   Spouse - {{i.Spouse_Name}}</dd><br>\n      <dd style=\"color:chocolate\">   Education - {{i.Highest_Education}},{{i.University}}</dd><br>\n      <dd style=\"color:indigo\">   Address - {{i.Address}}</dd><br>\n      <dd style=\"color:maroon\">   Email -  {{i.Email_address}}</dd><br>\n      <dd style=\"color:teal\">   Mobile - {{i.Mobile}}</dd><br>\n      <ion-button expand=\"block\" (click) = \"data(i.chldid)\">Auto Biography</ion-button>\n  </h3>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!delegate) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context5.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context5.next = 11;
                    break;
                  }

                  _context5.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context5.abrupt("return", el);

                case 12:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "Znwt":
    /*!*************************************!*\
      !*** ./src/app/loksabha.service.ts ***!
      \*************************************/

    /*! exports provided: LoksabhaService */

    /***/
    function Znwt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoksabhaService", function () {
        return LoksabhaService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data/k */
      "Ew1Z");

      var LoksabhaService = /*#__PURE__*/function () {
        function LoksabhaService(http) {
          _classCallCheck(this, LoksabhaService);

          this.http = http;
          this.mf = _data_k__WEBPACK_IMPORTED_MODULE_3__["default"];
        }

        _createClass(LoksabhaService, [{
          key: "ls1",
          value: function ls1(z1, z2) {
            //let url = this.mf+"n/State_Wise_Loksabha_Candidates_api/";
            var url = this.mf + "n/LokSabha_Candidates_api/?state=" + z1 + "&MP_name=" + z2;
            return this.http.get(url);
          }
        }, {
          key: "ls",
          value: function ls(z1) {
            //let url = this.mf+"n/State_Wise_Loksabha_Candidates_api/";
            var url = this.mf + "n/stateWise_Loksabha_Candidates_api/?state=" + z1 + "&id=";
            return this.http.get(url);
          }
        }, {
          key: "lssp",
          value: function lssp() {
            var nn = localStorage.getItem('p');
            var url = this.mf;

            if (nn == 'lokc') {
              url = this.mf + "n/stateparty_lok_api/";
            } else if (nn == 'ac') {
              url = this.mf + "n/partyandstateassembly_api/";
            }

            var dec = JSON.parse(localStorage.getItem('token'));
            var state = localStorage.getItem('state'); //state = JSON.stringify(state);

            var mn = localStorage.getItem('state');
            var y = +localStorage.getItem('state');
            console.log(y);
            var k = '39';
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            console.log(localStorage.getItem('token'));
            return this.http.post(url, {
              state: state
            }, {
              headers: this.hdrs
            });
          }
        }, {
          key: "stateImages",
          value: function stateImages() {
            var url = " https://k.adhikar.net/n/states_api/ "; // console.log(url)

            return this.http.get(url);
          }
        }]);

        return LoksabhaService;
      }();

      LoksabhaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LoksabhaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoksabhaService);
      /***/
    },

    /***/
    "aaRf":
    /*!**********************************************************!*\
      !*** ./src/app/partylogin/statedist1/statedist1.page.ts ***!
      \**********************************************************/

    /*! exports provided: Statedist1Page */

    /***/
    function aaRf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Statedist1Page", function () {
        return Statedist1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_statedist1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./statedist1.page.html */
      "t3sL");
      /* harmony import */


      var _statedist1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./statedist1.page.scss */
      "EhU9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Statedist1Page = /*#__PURE__*/function () {
        function Statedist1Page(user, navCtrl, router, alertCtrl) {
          var _this8 = this;

          _classCallCheck(this, Statedist1Page);

          this.user = user;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.items = [];
          this.user.am().subscribe(function (data) {
            _this8.items = data; //console.log(this.details)
          });
        }

        _createClass(Statedist1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Statedist1Page;
      }();

      Statedist1Page.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      Statedist1Page.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      Statedist1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-statedist1',
        template: _raw_loader_statedist1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_statedist1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Statedist1Page);
      /***/
    },

    /***/
    "c5a8":
    /*!*************************************************************!*\
      !*** ./src/app/collectordetails/collectordetails.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function c5a8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\nion-grid ion-row:first-child {\n  background-color: #2dd36f;\n  font-weight: bold;\n}\nion-grid ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\nion-grid ion-col:last-child {\n  border-right: 1px solid black;\n}\nion-grid ion-row:last-child {\n  border-bottom: 1px solid black;\n}\nh2 {\n  text-shadow: 0px 3px 6px cyan;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbGxlY3RvcmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUdFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoiY29sbGVjdG9yZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xuICBcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjMmRkMzZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICBcbiAgICBpb24tcm93Omxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuICBoMntcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDNweCA2cHggY3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgY29sb3I6Ymx1ZTtcbiAgXG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "dwjv":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collectordetails/collectordetails.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dwjv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"color:powderblue;text-align:center;\">Collectordetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2> Collector Details</h2>\n    <ion-grid class=\"padding\" >\n      <ion-row>\n    <ion-col size=\"1\">Sl.no</ion-col>\n    <ion-col size=\"4\">Collector Photo</ion-col>\n        <ion-col size=\"4\">Name of the Collector</ion-col>\n        <ion-col size=\"3\">District</ion-col>\n\n      </ion-row>\n      <ion-row *ngFor=\"let c of collectordetails1.Collector_name index as m\">\n          <ion-col size=\"1\">{{m+1}}</ion-col>\n          <ion-col size=\"4\">\n            <img src=\"{{zz}}{{c.CollectorPhoto}}\" style=\"width:100%\"  >\n            <!-- <img src=\"assets/parliament2.jpg\" alt=\"Forest\" style=\"width:100%\">{{c.CollectorPhoto}} -->\n          </ion-col>\n        <ion-col size=\"4\"  ><b>{{c.Collector_name}}</b></ion-col>\n        <ion-col size=\"3\">{{c.District}}</ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "e4YJ":
    /*!*************************************!*\
      !*** ./src/app/assembly.service.ts ***!
      \*************************************/

    /*! exports provided: AssemblyService */

    /***/
    function e4YJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssemblyService", function () {
        return AssemblyService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data/k */
      "Ew1Z");

      var AssemblyService = /*#__PURE__*/function () {
        function AssemblyService(http) {
          _classCallCheck(this, AssemblyService);

          this.http = http;
          this.mf = _data_k__WEBPACK_IMPORTED_MODULE_3__["default"];
        }

        _createClass(AssemblyService, [{
          key: "am",
          value: function am() {
            var url = this.mf + "n/State_Wise_Assembly_Candidates_api/";
            return this.http.get(url);
          }
        }, {
          key: "districts",
          value: function districts() {
            var url = this.mf + "n/State_Wise_Districts_api/";
            return this.http.get(url);
          }
        }]);

        return AssemblyService;
      }();

      AssemblyService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AssemblyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssemblyService);
      /***/
    },

    /***/
    "eO5X":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/white1/white1.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function eO5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>white</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"color:blue\">Election Schedule</h1>\n  <h2 style=\"color:red\">Municipal Corporations of Vizianagaram, Eluru, Machilipatnam, Guntur, Ongole,\n  Tirupati, Chittoor, Kadapa, Kurnool and Ananthapur</h2><br>\n  <h3>Date for Commencement of Withdrawal of Candidature - 02.03.2021 (Tuesday) (From 11:00 AM to 3:00 PM)<br><br>\nLast date for Withdrawal of Candidature - 03.03.2021 (Wednesday) (Not later than 3:00 PM)<br><br>\nDate of Publication of List of Contesting Candidates - 03.03.2021 (Wednesday) (After 3:00 PM)<br><br>\nDate of Poll - 10.03.2021 (Wednesday) (From 7:00 AM to 5:00 PM)<br><br>\nDate of Re-poll, if any 13.03.2021 (Saturday) (From 7:00 AM to 5:00 PM)<br><br>\n<br></h3>\n <h4 style=\"color:green\"> Date of Counting 14.03.2021 (Sunday) (From 8:00 AM onwards)</h4>\n</ion-content>\n";
      /***/
    },

    /***/
    "f3wu":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individuallogin/individualdisplay/individualdisplay.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f3wu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n<br>\n<br>\n<br>\n<br>\n<ion-chip>\n  <h1 style=\"color:blue; font-size:200%;\">{{details.profilename}}</h1>\n  <ion-avatar class=\"image-center\">\n      <img src={{details.Profilephoto}}  style=\"width:100%\">\n  </ion-avatar>\n  <h1 style=\"color:blue; font-size:200%;\">Auto Biography</h1>\n</ion-chip >\n<ion-item >\n  <ion-label style=\"color:darkmagenta;\" > Present Party - {{details.presentparty}}</ion-label>\n</ion-item>\n<ion-item >\n</ion-item>\n<ion-item>\n    <img src={{details.About_Mephoto}}  style=\"width:25%\" height=\"200px\">\n  <ion-title> <b style=\"color:darkolivegreen; font-size:120%;\"> About Me </b></ion-title>\n</ion-item>\n<br>\n<p [innerText]=\"details.About_Me\"></p>\n<ion-item >\n</ion-item>\n<ion-item>\n    <ion-title> </ion-title>\n    <img src={{details.childhood_and_Educationphoto}}  style=\"width:25%\" height=\"200px\" >\n    <ion-title> </ion-title>\n</ion-item>\n  <ion-title><b style=\"color:chocolate; font-size:120%;\"> <center> Childhood and Education</center> </b> </ion-title>\n\n<h6 [innerText]=\"details.childhood_and_Education\"></h6>\n\n<ion-item >\n</ion-item>\n<ion-item>\n    <img src={{details.Political_Careerphoto}}  style=\"width:25%\" height=\"200px\">\n  <ion-title> <b style=\"color:DarkMagenta; font-size:120%;\"> Political Career </b></ion-title>\n</ion-item>\n<br>\n\n<p [innerText]=\"details.Political_Career\"> </p>\n\n<ion-item >\n</ion-item>\n<ion-item>\n    <ion-title> <b style=\"color:DarkGoldenRod; font-size:120%;\"> Personal Life</b> </ion-title>\n    <img src={{details.Personal_Lifephoto}}  style=\"width:25%\" height=\"200px\" >\n    <ion-title> </ion-title>\n</ion-item>\n\n<h6 [innerText]=\"details.Personal_Life\" > </h6>\n\n<ion-item >\n</ion-item>\n<ion-item>\n    <img src={{details.aims_Goal_and_Dreamphoto}}  style=\"width:25%\" height=\"200px\">\n</ion-item>\n  <ion-title> <b style=\"color:MidnightBlue; font-size:120%;\"> Aims, Goals and Dreams </b></ion-title>\n<br>\n<ion-item >\n<p [innerText]=\"details.aims_Goal_and_Dream\"> </p>\n</ion-item>\n<ion-item >\n</ion-item>\n<ion-item>\n  <ion-title> </ion-title>\n      <img src={{details.Message_For_Followersphoto}}  style=\"width:25%\" height=\"200px\" >\n      <ion-title> </ion-title>\n</ion-item>\n  <ion-title> <b style=\"color:SaddleBrown; font-size:120%;\"><center> Message for Followers</center>  </b></ion-title>\n<ion-item >\n<h6 [innerText]=\"details.Message_For_Followers\"> </h6>\n</ion-item>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "fUWi":
    /*!***************************************!*\
      !*** ./src/app/state1/state1.page.ts ***!
      \***************************************/

    /*! exports provided: State1Page */

    /***/
    function fUWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "State1Page", function () {
        return State1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_state1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./state1.page.html */
      "ljh/");
      /* harmony import */


      var _state1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state1.page.scss */
      "nd8w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z");

      var State1Page = /*#__PURE__*/function () {
        function State1Page(route, router, navParam) {
          _classCallCheck(this, State1Page);

          this.route = route;
          this.router = router;
          this.navParam = navParam;
          this.s = [];
          this.s = navParam.get('states');
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_6__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(State1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return State1Page;
      }();

      State1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }];
      };

      State1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-state1',
        template: _raw_loader_state1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_state1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], State1Page);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "hR6F":
    /*!*******************************************!*\
      !*** ./src/app/lok/state2/state2.page.ts ***!
      \*******************************************/

    /*! exports provided: State2Page */

    /***/
    function hR6F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "State2Page", function () {
        return State2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_state2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./state2.page.html */
      "vstB");
      /* harmony import */


      var _state2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state2.page.scss */
      "UkuO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../data/k */
      "Ew1Z");

      var State2Page = /*#__PURE__*/function () {
        function State2Page(user, navCtrl, router, alertCtrl, route) {
          var _this9 = this;

          _classCallCheck(this, State2Page);

          this.user = user;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.items = [];
          this.d = {};
          this.error = null;
          this.user.state().subscribe(function (data) {
            _this9.items = data;
          }, function (error) {
            alert("Check Internet connection");
            _this9.error = error.message;
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_7__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(State2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "btnClicked",
          value: function btnClicked(k3, k4, k5) {
            this.router.navigate([k3, k4, k5]);
          }
        }]);

        return State2Page;
      }();

      State2Page.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      State2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-state2',
        template: _raw_loader_state2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_state2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], State2Page);
      /***/
    },

    /***/
    "knAG":
    /*!************************************************************!*\
      !*** ./src/app/adminlogin/statechoice/statechoice.page.ts ***!
      \************************************************************/

    /*! exports provided: StatechoicePage */

    /***/
    function knAG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatechoicePage", function () {
        return StatechoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_statechoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./statechoice.page.html */
      "sgqR");
      /* harmony import */


      var _statechoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./statechoice.page.scss */
      "oi5O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../home.service */
      "Ol7V");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data/k */
      "Ew1Z");

      var StatechoicePage = /*#__PURE__*/function () {
        function StatechoicePage(user) {
          var _this10 = this;

          _classCallCheck(this, StatechoicePage);

          this.user = user;
          this.items = [];
          this.user.state().subscribe(function (data) {
            _this10.items = data;
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_5__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(StatechoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatechoicePage;
      }();

      StatechoicePage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }];
      };

      StatechoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-statechoice',
        template: _raw_loader_statechoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_statechoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StatechoicePage);
      /***/
    },

    /***/
    "ljh/":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/state1/state1.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function ljh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>state1</ion-title>\n  </ion-toolbar>\n  <style>\n    * {\n      box-sizing: border-box;\n    }\n\n    .column {\n      float: left;\n      width: 33%;\n      padding: 20px;\n    }\n    .c {\n      float: left;\n      width: 25%;\n      padding: 20px;\n    }\n\n    /* Clearfix (clear floats) */\n    .row::after {\n      content: \"\";\n      clear: both;\n      display: table;\n    }</style>\n</ion-header>\n\n<ion-content>\n  <h1 style=\"color:blue;text-align: center;\">Details</h1>\n<div class=\"row\">\n  <div class=\"column\">\n    <label><h1><u>GOVERNOR</u></h1></label>\n  <h3 >{{s.Governor}}</h3>\n  <img src=\"{{zz}}{{s.Governor_Photo}}}\" style=\"width:100%\"  >\n    <!-- {{s.Governor_Photo}} -->\n  </div>\n    <div class=\"column\">\n      <label><h1><u>CM</u></h1></label>\n    <h3>{{s.chief_minister}}</h3>\n    <img src=\"{{zz}}{{s.chief_minister_Photo}}\" style=\"width:100%\"  >\n    <!-- {{s.chief_minister_Photo}} -->\n  </div></div>\n  <ion-item >\n    <ion-icon name=\"compass\" slot=\"start\" style=\"color:darkmagenta;\"></ion-icon>\n    <ion-label><b>Capital:</b> </ion-label>\n    <ion-note slot=\"end\"><b>{{s.capital}}</b></ion-note>\n\n  </ion-item>\n</ion-content>\n";
      /***/
    },

    /***/
    "nd8w":
    /*!*****************************************!*\
      !*** ./src/app/state1/state1.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function nd8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZTEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "oi5O":
    /*!**************************************************************!*\
      !*** ./src/app/adminlogin/statechoice/statechoice.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function oi5O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZWNob2ljZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "sgqR":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminlogin/statechoice/statechoice.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sgqR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<h3 style=\"color:blue;\"><center>Select the State or Union Territory </center></h3>\n<br>\n<br>\n  <div padding>\n  <ion-segment [(ngModel)]=\"st\">\n    <ion-segment-button value=\"stt\">\n      <b >STATES</b>\n    </ion-segment-button>\n    <ion-segment-button value=\"ut\">\n    <b>  UNION TERRITORIES</b>\n    </ion-segment-button>\n    </ion-segment>\n    <br>\n</div>\n\n<div [ngSwitch]=\"st\">\n  <ion-list *ngSwitchCase=\"'stt'\">\n    <div *ngFor=\"let item of items\">\n    <div *ngIf=\"item.Status=='state'\" >\n  <img (click)=\"btnClicked('lok1',item.id, item.State_name)\" src=\"{{zz}}{{ item.Map }}\" width=\"400\" height=\"200\">\n        <ion-button (click)=\"btnClicked('lok1',item.id, item.State_name)\" >{{ item.State_name }}</ion-button>\n      </div>\n      </div>\n\n      </ion-list>\n</div>\n<div [ngSwitch]=\"st\">\n  <ion-list *ngSwitchCase=\"'ut'\">\n    <div *ngFor=\"let item of items\">\n    <div *ngIf=\"item.Status=='UT'\" >\n        <img (click)=\"btnClicked('lok1',item.id, item.State_name)\"  src=\"{{zz}}{{ item.Map }}\" width=\"400\" height=\"200\">\n      <ion-button (click)=\"btnClicked('lok1',item.id, item.State_name)\" >{{ item.State_name }}</ion-button>\n\n      </div>\n      </div>\n      </ion-list>\n</div>\n";
      /***/
    },

    /***/
    "t3sL":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partylogin/statedist1/statedist1.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t3sL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-item >\n  <ion-list *ngFor=\"let d of items\">\n   <ion-grid class=\"padding\" *ngIf=\"d.State_name==(state)\">\n     <h1 style=\"color:green;\">&emsp;Legistlative Assembly candidates </h1>\n     <br>\n     <ion-row>\n   <ion-col size=\"1\" style=\"color:purple;\"><b>Sl.no</b></ion-col>\n       <ion-col size=\"3\"  style=\"color:purple;\"><b>District</b></ion-col>\n       <ion-col size=\"4\"  style=\"color:purple;\"><b>MLA Name</b></ion-col>\n       <ion-col size=\"4\" style=\"color:purple;\"><b>Add</b></ion-col>\n      </ion-row>\n<br>\n     <ion-row *ngFor=\"let k of (d.Assembly_Candidates); index as m\">\n       <ion-col size=\"1\" style=\"color:maroon;\">{{m+1}}</ion-col>\n       <ion-col size=\"3\" style=\"color:darkgreen;\">{{k.District}}</ion-col>\n       <ion-col size=\"4\" style=\"color:darkviolet;\">{{k.MLA_name}}</ion-col>\n       <ion-col size=\"4\" >\n         <ion-button shape=\"round\" (click)=\"btnClicked(d)\" expand=\"block\" size=\"default\" fill=\"outline\" *ngIf=\"k.actvated=='no'\" >Activate</ion-button>\n       <div *ngIf=\"k.actvated=='yes'\" style=\"color:red;\">Activated</div>\n       <div *ngIf=\"k.actvated=='process'\" >under processing</div></ion-col>\n     </ion-row>\n     </ion-grid>\n  </ion-list>\n </ion-item>\n";
      /***/
    },

    /***/
    "vb6r":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assembly/assembly.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function vb6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>states</ion-title>\n    <style>\n      * {\n  box-sizing: border-box;\n}\n.column {\n  float: left;\n  width: 33%;\n  padding: 20px;\n}.\n.c {\n  float: left;\n  width: 25%;\n  padding: 20px;\n}\n/* Clearfix (clear floats) */\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n</style>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n<ion-item>\n      <ion-label><b><h1 style=\"color:blue; font-size:30px\"><b><center>Assembly Candidates</center></b></h1></b></ion-label>\n</ion-item>\n  <ion-item>\n    <ion-label style=\"color:Maroon\"><b>State</b></ion-label>\n\n    <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\"  [(ngModel)]=\"state\">\n  <div *ngFor=\"let item of items\">\n      <ion-select-option value={{item.State_name}}>{{ item.State_name }}</ion-select-option>\n</div>\n    </ion-select>\n</ion-item>\n  <ion-item>\n    <ion-label style=\"color:Purple\"><b>District</b></ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select One\" [(ngModel)]=\"district\">\n      <div *ngFor=\"let item of items\">\n      <div *ngIf=\"item.State_name==state\" >\n\n      <div *ngFor=\"let i of item.District\">\n          <ion-select-option value={{i.id}}>{{ i.District_name }}</ion-select-option>\n    </div></div></div>\n        </ion-select>\n  </ion-item>\n  <br>\n  <ion-button color=\"medium\" (click)=\"btnClicked()\" >Submit</ion-button>\n\n  <div  *ngIf=\"index && item2.length === 0\">\n    <h1> No Candidates to display  </h1>\n    </div>\n    <ion-grid class=\"padding\">\n    <ion-row *ngIf=\"index\">\n      <ion-col size=\"3.5\"><b style=\"color:Olive; font-size:20px\">Photo</b></ion-col>\n      <ion-col size=\"2.5\"><b style=\"color:Olive; font-size:20px\">MLA Name</b></ion-col>\n      <ion-col size=\"2.5\"><b style=\"color:Olive; font-size:20px\">Party</b></ion-col>\n      <ion-col size=\"3.5\"><b style=\"color:Olive; font-size:20px\">Constituency</b></ion-col>\n    </ion-row>\n  <div *ngFor=\"let i of item2\">\n  <ion-row >\n    <ion-col  size=\"3.5\" [routerLink]=\"['/assembly1',i.id]\" ><img src=\"{{z}}{{i.photo}}\" alt=\"No Image\" width=\"130\" height=\"130\"> </ion-col>\n    <ion-col  size=\"2.5\" [routerLink]=\"['/assembly1',i.id]\"><b>{{i.MLA_name}} </b></ion-col>\n    <ion-col  size=\"2.5\">{{i.Party}}</ion-col>\n    <ion-col  size=\"3.5\">{{i.constituency_name}}</ion-col>\n  </ion-row>\n      </div>\n  </ion-grid>\n</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "vstB":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lok/state2/state2.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function vstB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<h3 style=\"color:blue;\"><center>Select the State or Union Territory </center></h3>\n<br>\n<br>\n  <div padding>\n  <ion-segment [(ngModel)]=\"st\">\n    <ion-segment-button value=\"stt\">\n      <b >STATES</b>\n    </ion-segment-button>\n    <ion-segment-button value=\"ut\">\n    <b>  UNION TERRITORIES</b>\n    </ion-segment-button>\n    </ion-segment>\n    <br>\n</div>\n\n<div [ngSwitch]=\"st\">\n  <ion-list *ngSwitchCase=\"'stt'\">\n    <div *ngFor=\"let item of items\">\n    <div *ngIf=\"item.Status=='state'\" >\n  <img [routerLink]=\"['/image',item.Map]\" src=\"{{zz}}{{ item.Map }}\" width=\"400\" height=\"200\">\n        <ion-button (click)=\"btnClicked('lok1',item.id, item.State_name)\" >{{ item.State_name }} Candidates</ion-button>\n      </div>\n      </div>\n\n      </ion-list>\n</div>\n<div [ngSwitch]=\"st\">\n  <ion-list *ngSwitchCase=\"'ut'\">\n    <div *ngFor=\"let item of items\">\n    <div *ngIf=\"item.Status=='UT'\" >\n        <img [routerLink]=\"['/image',item.Map]\" src=\"{{zz}}{{ item.Map }}\" width=\"400\" height=\"200\">\n      <ion-button (click)=\"btnClicked('lok1',item.id, item.State_name)\" >{{ item.State_name }} Candidates</ion-button>\n\n      </div>\n      </div>\n      </ion-list>\n</div>\n";
      /***/
    },

    /***/
    "y1As":
    /*!*****************************************************************!*\
      !*** ./src/app/legislativecouncil1/legislativecouncil1.page.ts ***!
      \*****************************************************************/

    /*! exports provided: Legislativecouncil1Page */

    /***/
    function y1As(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Legislativecouncil1Page", function () {
        return Legislativecouncil1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legislativecouncil1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legislativecouncil1.page.html */
      "XoMi");
      /* harmony import */


      var _legislativecouncil1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./legislativecouncil1.page.scss */
      "Un0g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../data/k */
      "Ew1Z"); // import {NavParams} from '@ionic/angular'


      var Legislativecouncil1Page = /*#__PURE__*/function () {
        function Legislativecouncil1Page(user, route, router, modalctrl) {
          var _this11 = this;

          _classCallCheck(this, Legislativecouncil1Page);

          this.user = user;
          this.route = route;
          this.router = router;
          this.modalctrl = modalctrl;
          this.dis = {};
          this.constituencies = [];
          this.constituenciesdata = [];
          this.de = [];
          this.z = [];
          this.route.paramMap.subscribe(function (params) {
            _this11.z1 = params.get('id');

            _this11.user.council1(_this11.z1).subscribe(function (data) {
              _this11.z = data;
            });
          });
          this.zz = _data_k__WEBPACK_IMPORTED_MODULE_7__["default"];
          this.zz = this.zz.slice(0, -1);
        }

        _createClass(Legislativecouncil1Page, [{
          key: "data",
          value: function data(k) {
            if (k == 'no') {
              alert('Autobiography is not available');
            } else {
              this.router.navigate(['/individualdisplay', 'councilpersondisplay/', k]);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Legislativecouncil1Page;
      }();

      Legislativecouncil1Page.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      Legislativecouncil1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legislativecouncil1',
        template: _raw_loader_legislativecouncil1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legislativecouncil1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Legislativecouncil1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map