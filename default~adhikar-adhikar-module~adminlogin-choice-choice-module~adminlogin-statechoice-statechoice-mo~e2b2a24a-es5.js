(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"], {
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
    "Ol7V":
    /*!*********************************!*\
      !*** ./src/app/home.service.ts ***!
      \*********************************/

    /*! exports provided: HomeService */

    /***/
    function Ol7V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_k__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data/k */
      "Ew1Z");

      var HomeService = /*#__PURE__*/function () {
        function HomeService(http, toastCtrl, router) {
          _classCallCheck(this, HomeService);

          this.http = http;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.message = [];
          this.message1 = [];
          this.mf = _data_k__WEBPACK_IMPORTED_MODULE_5__["default"];
        } // console.log(token);


        _createClass(HomeService, [{
          key: "setToken",
          value: function setToken(token) {
            //let tk = (localStorage.getItem('token'))
            this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + token
            });
          }
        }, {
          key: "state",
          value: function state() {
            var url = this.mf + "n/state_api/";
            return this.http.get(url);
          }
        }, {
          key: "statedistrict",
          value: function statedistrict() {
            var url = this.mf + "n/State_Wise_Districts_api/";
            return this.http.get(url);
          }
        }, {
          key: "pm",
          value: function pm() {
            var url = this.mf + "n/Current_Prime_Minister_api/";
            return this.http.get(url);
          }
        }, {
          key: "vicepresident",
          value: function vicepresident() {
            var url = this.mf + "n/Current_Vice_President_api/";
            return this.http.get(url);
          }
        }, {
          key: "pm1",
          value: function pm1() {
            var url = this.mf + "n/PM_api/";
            return this.http.get(url);
          }
        }, {
          key: "president",
          value: function president() {
            var url = this.mf + "n/Current_President_api/";
            return this.http.get(url);
          }
        }, {
          key: "lokspeaker",
          value: function lokspeaker() {
            var url = this.mf + "n/Current_Loksabha_Speaker_api/";
            return this.http.get(url);
          }
        }, {
          key: "lokdepspeaker",
          value: function lokdepspeaker() {
            var url = this.mf + "n/Current_Loksabha_Deputy_Speaker_api/";
            return this.http.get(url);
          }
        }, {
          key: "ls",
          value: function ls(z1) {
            //let url = this.mf+"n/State_Wise_Loksabha_Candidates_api/";
            var url = this.mf + "n/stateWise_Loksabha_Candidates_api/?state=" + z1 + "&id=";
            return this.http.get(url);
          } ////       Rajyasabha      ///////

        }, {
          key: "rajleader",
          value: function rajleader() {
            var url = this.mf + "n/Current_Rajyasabha_House_Leader_api/";
            return this.http.get(url);
          }
        }, {
          key: "rajoppleader",
          value: function rajoppleader() {
            var url = this.mf + "n/Current_Rajyasabha_Opposition_Leader_api/";
            return this.http.get(url);
          }
        }, {
          key: "rajpresident",
          value: function rajpresident() {
            var url = this.mf + "n/Rajyasabhapresedent/";
            return this.http.get(url);
          }
        }, {
          key: "rajdepspeaker",
          value: function rajdepspeaker() {
            var url = this.mf + "n/Current_Rajyasabha_Deputy_Speaker_api/";
            return this.http.get(url);
          }
        }, {
          key: "raj1",
          value: function raj1(z) {
            var url = this.mf + "n/stateWise_Rajyasabha_Candidates_api/?state=" + z;
            return this.http.get(url);
          }
        }, {
          key: "raj2",
          value: function raj2(z) {
            var url = this.mf + "n/specificRajyasabha_Candidates_api/?id=" + z;
            return this.http.get(url);
          } //// Assembly /////

        }, {
          key: "am",
          value: function am() {
            var url = this.mf + "n/State_Wise_Assembly_Candidates_api/";
            return this.http.get(url);
          }
        }, {
          key: "assembly",
          value: function assembly(z1) {
            var url = this.mf + "n/districtAssembly_Candidates_api/?dt=" + z1 + "&id=";
            return this.http.get(url);
          }
        }, {
          key: "assembly1",
          value: function assembly1(z1) {
            var url = this.mf + "n/specificAssembly_Candidates_api/?id=" + z1;
            return this.http.get(url);
          }
        }, {
          key: "assemblystate",
          value: function assemblystate(z1) {
            var url = this.mf + "n/stateWise_Assembly_Candidates_api/?state=" + z1;
            return this.http.get(url);
          } ////  Council ////

        }, {
          key: "legislativecouncil",
          value: function legislativecouncil() {
            var url = this.mf + "n/State_Wise_Council_Candidates_api/";
            return this.http.get(url);
          }
        }, {
          key: "council",
          value: function council(z) {
            var url = this.mf + "n/statewise_Council_Candidates_api/?state=" + z;
            return this.http.get(url);
          }
        }, {
          key: "council1",
          value: function council1(z) {
            var url = this.mf + "n/specificCouncils_Candidates_api/?id=" + z;
            return this.http.get(url);
          }
        }, {
          key: "states",
          value: function states() {
            var url = this.mf + "n/states_api/ ";
            return this.http.get(url);
          }
        }, {
          key: "corporations",
          value: function corporations() {
            var url = this.mf + "n/State_wise_Mayor_api/";
            return this.http.get(url);
          }
        }, {
          key: "colorservice",
          value: function colorservice() {
            var url = this.mf + "n/Flag_api/";
            return this.http.get(url);
          }
        }, {
          key: "login",
          value: function login(user1) {
            return this.http.post(this.mf + "auth/", user1);
          }
        }, {
          key: "signin",
          value: function signin(user1) {
            return this.http.post(this.mf + "authenticate/", user1);
          }
        }, {
          key: "party",
          value: function party() {
            var url = this.mf + "party/";
            var dec = JSON.parse(localStorage.getItem('token'));
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            return this.http.get(url, {
              headers: this.hdrs
            });
          }
        }, {
          key: "rajparty",
          value: function rajparty() {
            var url = this.mf + "n/party_raj_api/";
            var dec = JSON.parse(localStorage.getItem('token'));
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            return this.http.get(url, {
              headers: this.hdrs
            });
          }
        }, {
          key: "councilparty",
          value: function councilparty() {
            var url = this.mf + "n/party_coucil_api/";
            var dec = JSON.parse(localStorage.getItem('token'));
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            console.log(dec);
            console.log(localStorage.getItem('token'));
            return this.http.get(url, {
              headers: this.hdrs
            });
          }
        }, {
          key: "toast",
          value: function toast(message, position, duration, cssClass) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: position,
                        duration: duration,
                        cssClass: "toast-mess"
                      });

                    case 2:
                      _context.sent.present();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "collector",
          value: function collector() {
            var url = this.mf + "n/state_wise_Collector_api/";
            return this.http.get(url);
          }
        }, {
          key: "changepassword",
          value: function changepassword(userData) {
            var url = this.mf + "api/change-password/ ";
            return this.http.put(url, userData, {
              headers: this._headers
            });
          }
        }, {
          key: "mankibath",
          value: function mankibath() {
            var url = this.mf + "n/Mannkibaat_api/";
            return this.http.get(url);
          }
        }, {
          key: "forgotpassword",
          value: function forgotpassword(user1) {
            console.log(user1);
            var url = this.mf + "api/password_reset/";
            return this.http.post(url, user1);
          }
        }, {
          key: "confirmpassword",
          value: function confirmpassword(password, token) {
            console.log({
              token: token,
              password: password
            });
            var url = this.mf + "api/password_reset/confirm/";
            return this.http.post(url, {
              token: token,
              password: password
            });
          }
        }, {
          key: "emailForm",
          value: function emailForm(email, token, id) {
            var url = this.mf;

            if (localStorage.getItem('p') == 'lokc' || localStorage.getItem('p') == 'll') {
              url = this.mf + "n/party_lok_api/";
            } else if (localStorage.getItem('p') == 'rajc' || localStorage.getItem('p') == 'rr') {
              url = this.mf + "n/party_raj_api/";
            } else if (localStorage.getItem('p') == 'ac' || localStorage.getItem('p') == 'aa') {
              url = this.mf + "n/party_assembly_api/";
            } else if (localStorage.getItem('p') == 'cc' || localStorage.getItem('p') == 'ccc') {
              url = this.mf + "n/party_coucil_api/";
            } else if (localStorage.getItem('p') == 'party') {
              url = this.mf + "party/" + id + "/k/";
            } else {}

            var dec = JSON.parse(localStorage.getItem('token'));
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            return this.http.post(url, {
              email: email,
              id: id
            }, {
              headers: this.hdrs
            });
          }
        }, {
          key: "partyemailForm",
          value: function partyemailForm(email, token, id) {
            var url = this.mf + "party/" + id + "/k/";
            return this.http.post(url, {
              email: email,
              id: id
            }, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: "Token " + token
              })
            });
          }
        }, {
          key: "individualdisplay",
          value: function individualdisplay(a, b) {
            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });
            var url = this.mf + a + b + '/'; //url =this.mf+"assemblypersondisplay/45/"

            return this.http.get(url, {
              headers: this.hdrs
            });
          }
        }, {
          key: "individual",
          value: function individual() {
            var n = localStorage.getItem('n');
            var url = this.mf + n;
            var dec = JSON.parse(localStorage.getItem('token')); //dec = "353f4409296eb7b29f1d65ea4304c6fe6f358dcf"

            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            }); //  url = "http://127.0.0.1:8000/n/council/"

            return this.http.get(url, {
              headers: this.hdrs
            });
          }
        }, {
          key: "individual1",
          value: function individual1(dat, u) {
            //let url = this.mf+"rajperson/11/";
            var dec = JSON.parse(localStorage.getItem('token'));
            var k = localStorage.getItem('ind'); //u = localStorage.getItem('n');

            this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Token " + dec,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json"
            });

            if (localStorage.getItem('ind') == 'Profilephoto') {
              return this.http.put(u, {
                Profilephoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'About_Mephoto') {
              return this.http.put(u, {
                About_Mephoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'childhood_and_Educationphoto') {
              return this.http.put(u, {
                childhood_and_Educationphoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Political_Careerphoto') {
              return this.http.put(u, {
                Political_Careerphoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Personal_Lifephoto') {
              return this.http.put(u, {
                Personal_Lifephoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'aims_Goal_and_Dreamphoto') {
              return this.http.put(u, {
                aims_Goal_and_Dreamphoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Message_For_Followersphoto') {
              return this.http.put(u, {
                Message_For_Followersphoto: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'profilename') {
              return this.http.put(u, {
                profilename: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'presentparty') {
              return this.http.put(u, {
                presentparty: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'About_Me') {
              return this.http.put(u, {
                About_Me: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'childhood_and_Education') {
              return this.http.put(u, {
                childhood_and_Education: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Political_Career') {
              return this.http.put(u, {
                Political_Career: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Personal_Life') {
              return this.http.put(u, {
                Personal_Life: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'aims_Goal_and_Dream') {
              return this.http.put(u, {
                aims_Goal_and_Dream: dat
              }, {
                headers: this.hdrs
              });
            } else if (localStorage.getItem('ind') == 'Message_For_Followers') {
              return this.http.put(u, {
                Message_For_Followers: dat
              }, {
                headers: this.hdrs
              });
            }
          }
        }]);

        return HomeService;
      }();

      HomeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HomeService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a-es5.js.map