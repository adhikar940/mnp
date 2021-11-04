(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adhikar-adhikar-module"], {
    /***/
    "1Lzx":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adhikar/adhikar.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Lzx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title><h1 style=\"text-shadow: 0px 5px 5px darkcyan;\">Adhikar</h1></ion-title>\n  </ion-toolbar>\n  <style>\n* {\n  box-sizing: border-box;\n}\n\n.column {\n  float: left;\n  width: 33%;\n  padding: 20px;\n}\n.c {\n  float: left;\n  width: 25%;\n  padding: 20px;\n}\n\n/* Clearfix (clear floats) */\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n</style>\n</ion-header>\n  <br>\n  <ion-content>\n  <!--\n<marquee bgcolor=\"red\" width=\"100%\" height=\"50px\" direction=\"left\" align=\"left\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\"><font color=\"darkgreen\" style=\"font-size:20px\">\n  <ion-button onclick=\"window.open('https://www.adhikar.net/redtool', '_system', 'location=yes'); return false;\">{{red1}}</ion-button>\n  <ion-button onclick=\"window.open('https://www.adhikar.net/red1', '_system', 'location=yes'); return false;\">{{red2}}</ion-button>\n  <ion-button onclick=\"window.open('https://www.adhikar.net/red2', '_system', 'location=yes'); return false;\">{{red3}}</ion-button>\n\n</font>\n\n</marquee>\n\n  <marquee bgcolor=\"white\" width=\"100%\" height=\"50px\" direction=\"right\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\"><font color=\"blue\" style=\"font-size:20px\">\n    <ion-button onclick=\"window.open('https://www.adhikar.net/white', '_system', 'location=yes'); return false;\">{{w1}} </ion-button>\n    <ion-button onclick=\"window.open('https://www.adhikar.net/white1', '_system', 'location=yes'); return false;\">{{w2}}</ion-button>\n    <ion-button onclick=\"window.open('https://www.adhikar.net/white2', '_system', 'location=yes'); return false;\">{{w3}} </ion-button></font></marquee>\n\n    <marquee bgcolor=\"green\" width=\"100%\" height=\"50px\" direction=\"left\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ><font color=\"yellow\" style=\"font-size:20px\">\n  <ion-button onclick=\"window.open('https://www.adhikar.net/green', '_system', 'location=yes'); return false;\">{{g1}}</ion-button>\n  <ion-button onclick=\"window.open('https://www.adhikar.net/green1', '_system', 'location=yes'); return false;\">{{g2}}</ion-button>\n  <ion-button onclick=\"window.open('https://www.adhikar.net/green2', '_system', 'location=yes'); return false;\">{{g3}} </ion-button></font></marquee>\n-->\n\n\n  <div class=\"row\">\n          <div class=\"column\">\n    <h2 routerLink=\"/parliament\">Old Parliament building</h2>\n      <img routerLink=\"/parliament\" src=\"assets/parliament2.jpg\" alt=\"Forest\" style=\"width:100%\">\n    </div>\n    <div class=\"column\">\n    <h2 routerLink=\"/parliament\">Indian Parliament</h2>\n      <img routerLink=\"/parliament\" src=\"assets/p.jpeg\"  style=\"width:100%\">\n    </div>\n    <div class=\"column\">\n    <h2 routerLink=\"/parliament\">New Parliament building</h2>\n      <img routerLink=\"/parliament\" src=\"assets/newp.jpeg\"  style=\"width:70%\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n    <h2 routerLink=\"/president\">President</h2>\n      <img routerLink=\"/president\" src=\"assets/President1.jpg\" alt=\"Snow\" style=\"width:100%\">\n      <h2 routerLink=\"/president\">Ramnath Kovind</h2>\n    </div>\n          <div class=\"column\">\n            <h2 routerLink=\"/pm\">Prime Minister</h2>\n      <img routerLink=\"/pm\" src=\"assets/modi.jpg\"  style=\"width:100%\">\n      <h2 routerLink=\"/pm\">Narendra Modi   </h2>\n    </div>\n    <div class=\"column\">\n      <h2 routerLink=\"/vicepresident\" >Vice President</h2>\n<img routerLink=\"/vicepresident\" src=\"assets/v.jpg\" style=\"width:100%;\">\n<h2 routerLink=\"/vicepresident\" >M Venkaiah Naidu   </h2>\n</div>\n  </div>\n  <h2 routerLink=\"/loksabha\">LokSabha</h2>\n  <div class=\"row\">\n    <div class=\"c\">\n    <h2 routerLink=\"/pm\" >Leader of house</h2>\n      <img routerLink=\"/pm\" src=\"assets/pm.jpg\" alt=\"Snow\" style=\"width:100%\">\n      <h2 routerLink=\"/pm\" >Narendra Modi </h2>\n    </div>\n    <div class=\"c\">\n    <h2 routerLink=\"/loksabhaspeaker\" >Speaker</h2>\n      <img routerLink=\"/loksabhaspeaker\" src=\"assets/speaker.jpg\" alt=\"Snow\" style=\"width:100%\">\n      <h2 routerLink=\"/loksabhaspeaker\">OM Birla </h2>\n    </div>\n          <div class=\"c\">\n            <h2 routerLink=\"/loksabhadeputyspeaker\">Deputy Speaker</h2>\n      <img routerLink=\"/loksabhadeputyspeaker\" src=\"assets/dp.jpg\"  style=\"width:70%\">\n      <h2 routerLink=\"/loksabhadeputyspeaker\">M Thambi Durai   </h2>\n    </div>\n    <div class=\"c\">\n      <h2>Opposition Leader</h2>\n<img src=\"assets/vacant.jpg\" style=\"width:90%;\">\n<h2>Vacant </h2>\n</div>\n  </div>\n  <h2 routerLink=\"/rajyasabha\">RajyaSabha</h2>\n  <div class=\"row\">\n    <div class=\"c\">\n    <h2 routerLink=\"/rajyasabhaleader\">Leader of house</h2>\n      <img  routerLink=\"/rajyasabhaleader\" src=\"assets/tc.jpg\" alt=\"Snow\" style=\"width:100%\">\n      <h2 routerLink=\"/rajyasabhaleader\">Thawar Chand Gehlot  </h2>\n    </div>\n    <div class=\"c\">\n    <h2 routerLink=\"/vicepresident\" >Chairman</h2>\n      <img routerLink=\"/vicepresident\" src=\"assets/v.jpg\" alt=\"Snow\" style=\"width:100%\">\n      <h2 routerLink=\"/vicepresident\" >M Venkaiah Naidu  </h2>\n    </div>\n          <div class=\"c\">\n            <h2 routerLink=\"/rajyasabhadeputyspeaker\">Deputy Speaker</h2>\n      <img routerLink=\"/rajyasabhadeputyspeaker\" src=\"assets/harivansh.jpg\"  style=\"width:90%\">\n      <h2 routerLink=\"/rajyasabhadeputyspeaker\">Harivansh Narayan Singh   </h2>\n    </div>\n    <div class=\"c\">\n      <h2  routerLink=\"/rajyasabhaoppleader\">Opposition Leader</h2>\n<img routerLink=\"/rajyasabhaoppleader\" src=\"assets/r3.png\" style=\"width:100%\">\n<h2 routerLink=\"/rajyasabhaoppleader\">Mallikarjun Kharge</h2>\n</div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "34aP":
    /*!*****************************************!*\
      !*** ./src/app/adhikar/adhikar.page.ts ***!
      \*****************************************/

    /*! exports provided: AdhikarPage */

    /***/
    function aP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdhikarPage", function () {
        return AdhikarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_adhikar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./adhikar.page.html */
      "1Lzx");
      /* harmony import */


      var _adhikar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./adhikar.page.scss */
      "l7OF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../home.service */
      "Ol7V");

      var AdhikarPage = /*#__PURE__*/function () {
        function AdhikarPage(user) {
          var _this = this;

          _classCallCheck(this, AdhikarPage);

          this.user = user;
          this.red1 = [];
          this.red2 = [];
          this.red3 = [];
          this.w1 = [];
          this.w2 = [];
          this.w3 = [];
          this.g1 = [];
          this.g2 = [];
          this.g3 = [];
          this.user.colorservice().subscribe(function (data) {
            _this.color = data;
            _this.red1 = _this.color[0]['Red1'];
            _this.red2 = _this.color[0]['Red2'];
            _this.red3 = _this.color[0]['Red3'];
            _this.w1 = _this.color[0]['White1'];
            _this.w2 = _this.color[0]['White2'];
            _this.w3 = _this.color[0]['White3'];
            _this.g1 = _this.color[0]['Green1'];
            _this.g2 = _this.color[0]['Green2'];
            _this.g3 = _this.color[0]['Green3'];
          });
          console.log(this.color);
        }

        _createClass(AdhikarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdhikarPage;
      }();

      AdhikarPage.ctorParameters = function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
        }];
      };

      AdhikarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adhikar',
        template: _raw_loader_adhikar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adhikar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdhikarPage);
      /***/
    },

    /***/
    "cucb":
    /*!*******************************************!*\
      !*** ./src/app/adhikar/adhikar.module.ts ***!
      \*******************************************/

    /*! exports provided: AdhikarPageModule */

    /***/
    function cucb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdhikarPageModule", function () {
        return AdhikarPageModule;
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


      var _adhikar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adhikar-routing.module */
      "mobx");
      /* harmony import */


      var _adhikar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adhikar.page */
      "34aP");

      var AdhikarPageModule = function AdhikarPageModule() {
        _classCallCheck(this, AdhikarPageModule);
      };

      AdhikarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adhikar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdhikarPageRoutingModule"]],
        declarations: [_adhikar_page__WEBPACK_IMPORTED_MODULE_6__["AdhikarPage"]]
      })], AdhikarPageModule);
      /***/
    },

    /***/
    "l7OF":
    /*!*******************************************!*\
      !*** ./src/app/adhikar/adhikar.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function l7OF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "container {\n  margin-bottom: 100px;\n  /* border: 2px solid blue; */\n  margin-top: 12px;\n}\n\n.box {\n  margin: 0px 0px;\n}\n\nh2 {\n  color: rebeccapurple;\n  font-weight: bold;\n  font-style: italic;\n  text-shadow: 0px 5px 10px green;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/* parliament */\n\n.parliament {\n  margin: 10px;\n  text-align: center;\n}\n\n.parliament img {\n  box-shadow: 0px 0px 5px black;\n  width: 100%;\n  height: 30%;\n}\n\n/* president */\n\n.president figcaption {\n  /* margin: 0px 55px 0px 68px; */\n  margin-left: 53px;\n  background: linear-gradient(45deg, yellow, green);\n  width: 230px;\n  position: relative;\n  right: 27px;\n  box-shadow: 0px 2px 5px cyan;\n}\n\n.president img {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  box-shadow: 0px 2px 5px cyan;\n  overflow: hidden;\n}\n\n.president img:hover {\n  transform: scale(1.5);\n  transition: 3s;\n}\n\n.president {\n  margin: 0px 150px;\n  height: 320px;\n  display: flex;\n}\n\n/* For The Link */\n\n.division {\n  margin: 0px 23px;\n}\n\n/* lok sabha and rajya sabha */\n\n.box1 figcaption {\n  background: linear-gradient(45deg, green, yellow);\n  text-align: center;\n  color: black;\n  font-weight: bold;\n  transform: scale(1.1);\n}\n\n.sabha {\n  margin: 5px 30px 0px 30px;\n}\n\n.notification {\n  background: linear-gradient(50deg, cyan, blue, lightblue);\n  margin: 0px 20px;\n  padding: 5px;\n}\n\n.notification a {\n  margin-right: 15px;\n  box-shadow: 0px 0px 10px black;\n  text-shadow: 0px 0px 10px yellow;\n}\n\n#mann {\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n  font-style: oblique;\n  text-shadow: 0px 0px 3px cyan;\n  font-weight: bold;\n  box-shadow: 0px 0px 10px black;\n  background-color: darksalmon;\n  padding-right: 5px;\n  padding-left: 5px;\n  border-radius: 0px 10px;\n}\n\n/* Indian Map Css */\n\n.indian_map {\n  margin-left: 7rem;\n}\n\n/* j and k */\n\n#jandk {\n  position: relative;\n  right: 28.5rem;\n  bottom: 8rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n.tooltipcm {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n#jandk:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Himachal */\n\n#himachal {\n  position: relative;\n  right: 28rem;\n  bottom: 6.5rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#himachal:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Uttarakhand */\n\n#Uttarakhand {\n  position: relative;\n  right: 29rem;\n  bottom: 5.5rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Uttarakhand:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* UttarPradesh */\n\n#UttarPradesh {\n  position: relative;\n  left: 16rem;\n  bottom: 16rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#UttarPradesh:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Bihar */\n\n#Bihar {\n  position: relative;\n  left: 19rem;\n  bottom: 15.5rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Bihar:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Sikkim */\n\n#Sikkim {\n  position: relative;\n  left: 20rem;\n  bottom: 16.5rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Sikkim:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Arunachal */\n\n#Arunachal {\n  position: relative;\n  left: 24rem;\n  bottom: 16.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Arunachal:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Kerla */\n\n#Kerla {\n  position: relative;\n  right: 1.5rem;\n  bottom: 4rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Kerla:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Karnataka */\n\n#Karnataka {\n  position: relative;\n  right: 4.9rem;\n  bottom: 6.5rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Karnataka:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Tamilnadu */\n\n#Tamilnadu {\n  position: relative;\n  right: 3.5rem;\n  bottom: 4rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Tamilnadu:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Goa */\n\n#Goa {\n  position: relative;\n  right: 11rem;\n  bottom: 8rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Goa:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Maharastra */\n\n#Maharastra {\n  position: relative;\n  right: 12rem;\n  bottom: 10.7rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Maharastra:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Telengana */\n\n#Telengana {\n  position: relative;\n  right: 10.5rem;\n  bottom: 9rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Telengana:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Andhra Pradesh */\n\n#AndhraPradesh {\n  position: relative;\n  right: 12.9rem;\n  bottom: 7.5rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#AndhraPradesh:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Odisha */\n\n#Odisha {\n  position: relative;\n  right: 9.5rem;\n  bottom: 12rem;\n  font-size: 10px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Odisha:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* WestBengal */\n\n#WestBengal {\n  position: relative;\n  right: 9.1rem;\n  bottom: 13.5rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#WestBengal:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Jharkhand */\n\n#Jharkhand {\n  position: relative;\n  right: 15.3rem;\n  bottom: 13.5rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Jharkhand:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Chhattisgarh */\n\n#Chhattisgarh {\n  position: relative;\n  right: 21.3rem;\n  bottom: 12.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Chhattisgarh:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* MadhyaPradesh */\n\n#MadhyaPradesh {\n  position: relative;\n  right: 31.3rem;\n  bottom: 13.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#MadhyaPradesh:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Gujurat */\n\n#Gujurat {\n  position: relative;\n  right: 7rem;\n  bottom: 14.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Gujurat:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Rajasthan */\n\n#Rajasthan {\n  position: relative;\n  right: 8.3rem;\n  bottom: 17.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Rajasthan:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Punjab */\n\n#Punjab {\n  position: relative;\n  right: 7rem;\n  bottom: 20.9rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Punjab:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Delhi */\n\n#Delhi {\n  position: relative;\n  right: 7.5rem;\n  bottom: 19rem;\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n}\n\n#Delhi:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Assam */\n\n#Assam {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  left: 8.5rem;\n  bottom: 17.5rem;\n}\n\n#Assam:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Meghalay */\n\n#Meghalay {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  left: 6.5rem;\n  bottom: 16.4rem;\n}\n\n#Meghalay:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Nagaland */\n\n#Nagaland {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  left: 7.2rem;\n  bottom: 16.9rem;\n}\n\n#Nagaland:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Manipur */\n\n#Manipur {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  left: 5rem;\n  bottom: 15.9rem;\n}\n\n#Manipur:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Mizoram */\n\n#Mizoram {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  left: 2.2rem;\n  bottom: 14.5rem;\n}\n\n#Mizoram:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Tripura */\n\n#Tripura {\n  font-size: 9px;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  font-weight: bold;\n  position: relative;\n  right: 3.5rem;\n  bottom: 15.5rem;\n}\n\n#Tripura:hover .tooltipcm {\n  visibility: visible;\n}\n\n/* Media Querry */\n\n@media only screen and (max-width: 768px) {\n  .parliament img {\n    height: 200px;\n    width: 100%;\n  }\n\n  #mann {\n    font-size: 20px;\n  }\n\n  .notification {\n    width: 100%;\n  }\n\n  .president {\n    display: block;\n  }\n\n  .president h3 {\n    font-size: 25px;\n  }\n\n  .president img {\n    height: 200px;\n  }\n\n  .president figcaption {\n    font-size: 20px;\n    width: 230px;\n    position: relative;\n    right: 52px;\n  }\n\n  .box1 {\n    display: block;\n    width: 100%;\n    position: relative;\n    top: 300px;\n  }\n\n  .box1 img {\n    /* width: 570px; */\n    height: 150px;\n    width: 90%;\n  }\n\n  .box1 h3 {\n    font-size: 30px;\n  }\n\n  .box1 figcaption {\n    width: 86%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FkaGlrYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFFSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQSxlQUFBOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkEsY0FBQTs7QUFDQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFHQSw0QkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtBQUtBOztBQURBLGlCQUFBOztBQUNBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFGQSw4QkFBQTs7QUFFQztFQUNHLGlEQUFBO0VBQ0Qsa0JBQUE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUlKOztBQURBO0VBRUkseUJBQUE7QUFHSjs7QUFBQTtFQUNJLHlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFJSjs7QUFGQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEEsbUJBQUE7O0FBQ0E7RUFD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RUFVTjs7RUFSRTtJQUNJLGVBQUE7RUFXTjs7RUFURTtJQUNJLFdBQUE7RUFZTjs7RUFURTtJQUNJLGNBQUE7RUFZTjs7RUFURTtJQUNJLGVBQUE7RUFZTjs7RUFWRTtJQUNJLGFBQUE7RUFhTjs7RUFYRTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBY047O0VBWkU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQWVOOztFQWJFO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQWdCTjs7RUFkRTtJQUNJLGVBQUE7RUFpQk47O0VBZkU7SUFDSSxVQUFBO0VBa0JOO0FBQ0YiLCJmaWxlIjoiYWRoaWthci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjb250YWluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmJveHtcblxuICAgIG1hcmdpbjogMHB4IDBweDtcbn1cbmgye1xuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDVweCAxMHB4IGdyZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLyogcGFybGlhbWVudCAqL1xuLnBhcmxpYW1lbnR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYXJsaWFtZW50IGltZ3tcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cbi8qIHByZXNpZGVudCAqL1xuLnByZXNpZGVudCBmaWdjYXB0aW9ue1xuICAgIC8qIG1hcmdpbjogMHB4IDU1cHggMHB4IDY4cHg7ICovXG4gICAgbWFyZ2luLWxlZnQ6IDUzcHg7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcseWVsbG93LGdyZWVuKTtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyN3B4O1xuXG5cbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCBjeWFuO1xufVxuLnByZXNpZGVudCBpbWd7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggY3lhbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByZXNpZGVudCBpbWc6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIHRyYW5zaXRpb246IDNzO1xufVxuLnByZXNpZGVudHtcbm1hcmdpbjogMHB4IDE1MHB4O1xuaGVpZ2h0OiAzMjBweDtcblxuZGlzcGxheTogZmxleDtcblxufVxuXG4vKiBGb3IgVGhlIExpbmsgKi9cbi5kaXZpc2lvbntcbiAgICBtYXJnaW46IDBweCAyM3B4O1xufVxuLyogbG9rIHNhYmhhIGFuZCByYWp5YSBzYWJoYSAqL1xuXG4gLmJveDEgZmlnY2FwdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsZ3JlZW4seWVsbG93KTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgICA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2FiaGF7XG5cbiAgICBtYXJnaW46IDVweCAzMHB4IDBweCAzMHB4O1xufVxuXG4ubm90aWZpY2F0aW9ue1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDUwZGVnLGN5YW4sYmx1ZSxsaWdodGJsdWUpIDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5ub3RpZmljYXRpb24gYXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggeWVsbG93O1xufVxuI21hbm57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggY3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggO1xufVxuLyogSW5kaWFuIE1hcCBDc3MgKi9cbi5pbmRpYW5fbWFwe1xuICAgIG1hcmdpbi1sZWZ0OiA3cmVtO1xufVxuLyogaiBhbmQgayAqL1xuI2phbmRrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDI4LjVyZW07XG4gICAgYm90dG9tOiA4cmVtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICNqYW5kazpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC8qIEhpbWFjaGFsICovXG4gICNoaW1hY2hhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyOHJlbTtcbiAgICBib3R0b206IDYuNXJlbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuXG4gICNoaW1hY2hhbDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogVXR0YXJha2hhbmQgKi9cbiAgI1V0dGFyYWtoYW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6MjlyZW07XG4gICAgYm90dG9tOiA1LjVyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuXG4gICNVdHRhcmFraGFuZDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogVXR0YXJQcmFkZXNoICovXG4gICNVdHRhclByYWRlc2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxNnJlbTtcbiAgICBib3R0b206IDE2cmVtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG5cbiAgI1V0dGFyUHJhZGVzaDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogQmloYXIgKi9cbiAgI0JpaGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDoxOXJlbTtcbiAgICBib3R0b206IDE1LjVyZW07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgI0JpaGFyOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBTaWtraW0gKi9cbiAgI1Npa2tpbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgbGVmdDogMjByZW07XG4gICAgYm90dG9tOiAxNi41cmVtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gICNTaWtraW06aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4vKiBBcnVuYWNoYWwgKi9cbiNBcnVuYWNoYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyNHJlbTtcbiAgICBib3R0b206IDE2LjlyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAjQXJ1bmFjaGFsOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuLyogS2VybGEgKi9cbiAgI0tlcmxhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgICBib3R0b206IDRyZW07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgI0tlcmxhOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBLYXJuYXRha2EgKi9cbiAgI0thcm5hdGFrYXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDQuOXJlbTtcbiAgICBib3R0b206IDYuNXJlbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgI0thcm5hdGFrYTpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogVGFtaWxuYWR1ICovXG4gICNUYW1pbG5hZHV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgYm90dG9tOiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gICNUYW1pbG5hZHU6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC8qIEdvYSAqL1xuICAjR29he1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMTFyZW07XG4gICAgYm90dG9tOiA4cmVtO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gICNHb2E6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuLyogTWFoYXJhc3RyYSAqL1xuICAjTWFoYXJhc3RyYXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDEycmVtO1xuICAgIGJvdHRvbTogMTAuN3JlbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICAjTWFoYXJhc3RyYTpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogVGVsZW5nYW5hICovXG4gICNUZWxlbmdhbmF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxMC41cmVtO1xuICAgIGJvdHRvbTogOXJlbTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICAjVGVsZW5nYW5hOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBBbmRocmEgUHJhZGVzaCAqL1xuICAjQW5kaHJhUHJhZGVzaHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDEyLjlyZW07XG4gICAgYm90dG9tOiA3LjVyZW07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIH1cbiAgI0FuZGhyYVByYWRlc2g6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC8qIE9kaXNoYSAqL1xuICAjT2Rpc2hhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogOS41cmVtO1xuICAgIGJvdHRvbTogMTJyZW07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIH1cbiAgI09kaXNoYTpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogV2VzdEJlbmdhbCAqL1xuICAjV2VzdEJlbmdhbHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDkuMXJlbTtcbiAgICBib3R0b206IDEzLjVyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICAjV2VzdEJlbmdhbDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4vKiBKaGFya2hhbmQgKi9cbiNKaGFya2hhbmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxNS4zcmVtO1xuICAgIGJvdHRvbTogMTMuNXJlbTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICB9XG4gICNKaGFya2hhbmQ6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC8qIENoaGF0dGlzZ2FyaCAqL1xuICAjQ2hoYXR0aXNnYXJoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMjEuM3JlbTtcbiAgICBib3R0b206IDEyLjlyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICAjQ2hoYXR0aXNnYXJoOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBNYWRoeWFQcmFkZXNoICovXG4gICNNYWRoeWFQcmFkZXNoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMzEuM3JlbTtcbiAgICBib3R0b206IDEzLjlyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuICAjTWFkaHlhUHJhZGVzaDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogR3VqdXJhdCAqL1xuICAjR3VqdXJhdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDdyZW07XG4gICAgYm90dG9tOiAxNC45cmVtO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIH1cbiAgI0d1anVyYXQ6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC8qIFJhamFzdGhhbiAqL1xuICAjUmFqYXN0aGFue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogOC4zcmVtO1xuICAgIGJvdHRvbTogMTcuOXJlbTtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAjUmFqYXN0aGFuOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBQdW5qYWIgKi9cbiAgI1B1bmphYntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6N3JlbTtcbiAgICBib3R0b206IDIwLjlyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgI1B1bmphYjpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogRGVsaGkgKi9cbiAgI0RlbGhpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNy41cmVtO1xuICAgIGJvdHRvbTogMTlyZW07XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgI0RlbGhpOmhvdmVyIC50b29sdGlwY20ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAvKiBBc3NhbSAqL1xuICAjQXNzYW17XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDguNXJlbTtcbiAgICBib3R0b206IDE3LjVyZW07XG5cbiAgfVxuICAjQXNzYW06aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC8qIE1lZ2hhbGF5ICovXG4gICNNZWdoYWxheXtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNi41cmVtO1xuICAgIGJvdHRvbTogMTYuNHJlbTtcblxuICB9XG4gICNNZWdoYWxheTpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cblxuLyogTmFnYWxhbmQgKi9cbiNOYWdhbGFuZHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNy4ycmVtO1xuICAgIGJvdHRvbTogMTYuOXJlbTtcblxuICB9XG4gICNOYWdhbGFuZDpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLyogTWFuaXB1ciAqL1xuICAjTWFuaXB1cntcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNXJlbTtcbiAgICBib3R0b206IDE1LjlyZW07XG5cbiAgfVxuICAjTWFuaXB1cjpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC8qIE1pem9yYW0gKi9cbiAgI01pem9yYW17XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIuMnJlbTtcbiAgICBib3R0b206IDE0LjVyZW07XG5cbiAgfVxuICAjTWl6b3JhbTpob3ZlciAudG9vbHRpcGNtIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4vKiBUcmlwdXJhICovXG4jVHJpcHVyYXtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICByaWdodDozLjVyZW07XG4gICAgYm90dG9tOiAxNS41cmVtO1xuXG4gIH1cbiAgI1RyaXB1cmE6aG92ZXIgLnRvb2x0aXBjbSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG5cblxuXG4vKiBNZWRpYSBRdWVycnkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5wYXJsaWFtZW50IGltZ3tcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNtYW5ue1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5ub3RpZmljYXRpb257XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuXG4gICAgLnByZXNpZGVudHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICB9XG4gICAgLnByZXNpZGVudCBoM3tcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAucHJlc2lkZW50IGltZ3tcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgLnByZXNpZGVudCBmaWdjYXB0aW9ue1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogNTJweDtcbiAgICB9XG4gICAgLmJveDF7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6MzAwcHg7XG4gICAgfVxuICAgIC5ib3gxIGltZ3tcbiAgICAgICAgLyogd2lkdGg6IDU3MHB4OyAqL1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAuYm94MSBoM3tcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuYm94MSBmaWdjYXB0aW9ue1xuICAgICAgICB3aWR0aDogODYlO1xuICAgIH1cblxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "mobx":
    /*!***************************************************!*\
      !*** ./src/app/adhikar/adhikar-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AdhikarPageRoutingModule */

    /***/
    function mobx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdhikarPageRoutingModule", function () {
        return AdhikarPageRoutingModule;
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


      var _adhikar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adhikar.page */
      "34aP");

      var routes = [{
        path: '',
        component: _adhikar_page__WEBPACK_IMPORTED_MODULE_3__["AdhikarPage"]
      }];

      var AdhikarPageRoutingModule = function AdhikarPageRoutingModule() {
        _classCallCheck(this, AdhikarPageRoutingModule);
      };

      AdhikarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdhikarPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adhikar-adhikar-module-es5.js.map