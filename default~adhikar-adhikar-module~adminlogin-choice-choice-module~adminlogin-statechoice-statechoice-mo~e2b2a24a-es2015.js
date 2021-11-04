(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"],{

/***/ "Ew1Z":
/*!***************************!*\
  !*** ./src/app/data/k.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//export default "http://127.0.0.1:8000/";
/* harmony default export */ __webpack_exports__["default"] = ("https://k.adhikar.net/");


/***/ }),

/***/ "Ol7V":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/k */ "Ew1Z");






let HomeService = class HomeService {
    constructor(http, toastCtrl, router) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.message = [];
        this.message1 = [];
        this.mf = _data_k__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    // console.log(token);
    setToken(token) {
        //let tk = (localStorage.getItem('token'))
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + token
        });
    }
    state() {
        let url = this.mf + "n/state_api/";
        return this.http.get(url);
    }
    statedistrict() {
        let url = this.mf + "n/State_Wise_Districts_api/";
        return this.http.get(url);
    }
    pm() {
        let url = this.mf + "n/Current_Prime_Minister_api/";
        return this.http.get(url);
    }
    vicepresident() {
        let url = this.mf + "n/Current_Vice_President_api/";
        return this.http.get(url);
    }
    pm1() {
        let url = this.mf + "n/PM_api/";
        return this.http.get(url);
    }
    president() {
        let url = this.mf + "n/Current_President_api/";
        return this.http.get(url);
    }
    lokspeaker() {
        let url = this.mf + "n/Current_Loksabha_Speaker_api/";
        return this.http.get(url);
    }
    lokdepspeaker() {
        let url = this.mf + "n/Current_Loksabha_Deputy_Speaker_api/";
        return this.http.get(url);
    }
    ls(z1) {
        //let url = this.mf+"n/State_Wise_Loksabha_Candidates_api/";
        let url = this.mf + "n/stateWise_Loksabha_Candidates_api/?state=" + z1 + "&id=";
        return this.http.get(url);
    }
    ////       Rajyasabha      ///////
    rajleader() {
        let url = this.mf + "n/Current_Rajyasabha_House_Leader_api/";
        return this.http.get(url);
    }
    rajoppleader() {
        let url = this.mf + "n/Current_Rajyasabha_Opposition_Leader_api/";
        return this.http.get(url);
    }
    rajpresident() {
        let url = this.mf + "n/Rajyasabhapresedent/";
        return this.http.get(url);
    }
    rajdepspeaker() {
        let url = this.mf + "n/Current_Rajyasabha_Deputy_Speaker_api/";
        return this.http.get(url);
    }
    raj1(z) {
        let url = this.mf + "n/stateWise_Rajyasabha_Candidates_api/?state=" + z;
        return this.http.get(url);
    }
    raj2(z) {
        let url = this.mf + "n/specificRajyasabha_Candidates_api/?id=" + z;
        return this.http.get(url);
    }
    //// Assembly /////
    am() {
        let url = this.mf + "n/State_Wise_Assembly_Candidates_api/";
        return this.http.get(url);
    }
    assembly(z1) {
        let url = this.mf + "n/districtAssembly_Candidates_api/?dt=" + z1 + "&id=";
        return this.http.get(url);
    }
    assembly1(z1) {
        let url = this.mf + "n/specificAssembly_Candidates_api/?id=" + z1;
        return this.http.get(url);
    }
    assemblystate(z1) {
        let url = this.mf + "n/stateWise_Assembly_Candidates_api/?state=" + z1;
        return this.http.get(url);
    }
    ////  Council ////
    legislativecouncil() {
        let url = this.mf + "n/State_Wise_Council_Candidates_api/";
        return this.http.get(url);
    }
    council(z) {
        let url = this.mf + "n/statewise_Council_Candidates_api/?state=" + z;
        return this.http.get(url);
    }
    council1(z) {
        let url = this.mf + "n/specificCouncils_Candidates_api/?id=" + z;
        return this.http.get(url);
    }
    states() {
        let url = this.mf + "n/states_api/ ";
        return this.http.get(url);
    }
    corporations() {
        let url = this.mf + "n/State_wise_Mayor_api/";
        return this.http.get(url);
    }
    colorservice() {
        let url = this.mf + "n/Flag_api/";
        return this.http.get(url);
    }
    login(user1) {
        return this.http.post(this.mf + "auth/", user1);
    }
    signin(user1) {
        return this.http.post(this.mf + "authenticate/", user1);
    }
    party() {
        let url = this.mf + "party/";
        var dec = JSON.parse((localStorage.getItem('token')));
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        return this.http.get(url, { headers: this.hdrs });
    }
    rajparty() {
        let url = this.mf + "n/party_raj_api/";
        var dec = JSON.parse((localStorage.getItem('token')));
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        return this.http.get(url, { headers: this.hdrs });
    }
    councilparty() {
        let url = this.mf + "n/party_coucil_api/";
        var dec = JSON.parse((localStorage.getItem('token')));
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        console.log(dec);
        console.log((localStorage.getItem('token')));
        return this.http.get(url, { headers: this.hdrs });
    }
    toast(message, position, duration, cssClass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.toastCtrl.create({ message: message, position: position, duration: duration, cssClass: "toast-mess" })).present();
        });
    }
    collector() {
        let url = this.mf + "n/state_wise_Collector_api/";
        return this.http.get(url);
    }
    changepassword(userData) {
        let url = this.mf + "api/change-password/ ";
        return this.http.put(url, userData, { headers: this._headers });
    }
    mankibath() {
        let url = this.mf + "n/Mannkibaat_api/";
        return this.http.get(url);
    }
    forgotpassword(user1) {
        console.log(user1);
        let url = this.mf + "api/password_reset/";
        return this.http.post(url, user1);
    }
    confirmpassword(password, token) {
        console.log({ token: token, password: password });
        let url = this.mf + "api/password_reset/confirm/";
        return this.http.post(url, { token: token, password: password });
    }
    emailForm(email, token, id) {
        let url = this.mf;
        if (localStorage.getItem('p') == 'lokc' || localStorage.getItem('p') == 'll') {
            url = this.mf + "n/party_lok_api/";
        }
        else if (localStorage.getItem('p') == 'rajc' || localStorage.getItem('p') == 'rr') {
            url = this.mf + "n/party_raj_api/";
        }
        else if (localStorage.getItem('p') == 'ac' || localStorage.getItem('p') == 'aa') {
            url = this.mf + "n/party_assembly_api/";
        }
        else if (localStorage.getItem('p') == 'cc' || localStorage.getItem('p') == 'ccc') {
            url = this.mf + "n/party_coucil_api/";
        }
        else if (localStorage.getItem('p') == 'party') {
            url = this.mf + "party/" + id + "/k/";
        }
        else { }
        var dec = JSON.parse((localStorage.getItem('token')));
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        return this.http.post(url, { email: email, id: id }, { headers: this.hdrs });
    }
    partyemailForm(email, token, id) {
        let url = this.mf + "party/" + id + "/k/";
        return this.http.post(url, { email: email, id: id }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: "Token " + token }) });
    }
    individualdisplay(a, b) {
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        let url = this.mf + a + b + '/';
        //url =this.mf+"assemblypersondisplay/45/"
        return this.http.get(url, { headers: this.hdrs });
    }
    individual() {
        var n = localStorage.getItem('n');
        let url = this.mf + n;
        var dec = JSON.parse((localStorage.getItem('token')));
        //dec = "353f4409296eb7b29f1d65ea4304c6fe6f358dcf"
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        //  url = "http://127.0.0.1:8000/n/council/"
        return this.http.get(url, { headers: this.hdrs });
    }
    individual1(dat, u) {
        //let url = this.mf+"rajperson/11/";
        var dec = JSON.parse((localStorage.getItem('token')));
        var k = localStorage.getItem('ind');
        //u = localStorage.getItem('n');
        this.hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Token " + dec,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        });
        if (localStorage.getItem('ind') == 'Profilephoto') {
            return this.http.put(u, { Profilephoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'About_Mephoto') {
            return this.http.put(u, { About_Mephoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'childhood_and_Educationphoto') {
            return this.http.put(u, { childhood_and_Educationphoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Political_Careerphoto') {
            return this.http.put(u, { Political_Careerphoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Personal_Lifephoto') {
            return this.http.put(u, { Personal_Lifephoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'aims_Goal_and_Dreamphoto') {
            return this.http.put(u, { aims_Goal_and_Dreamphoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Message_For_Followersphoto') {
            return this.http.put(u, { Message_For_Followersphoto: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'profilename') {
            return this.http.put(u, { profilename: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'presentparty') {
            return this.http.put(u, { presentparty: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'About_Me') {
            return this.http.put(u, { About_Me: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'childhood_and_Education') {
            return this.http.put(u, { childhood_and_Education: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Political_Career') {
            return this.http.put(u, { Political_Career: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Personal_Life') {
            return this.http.put(u, { Personal_Life: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'aims_Goal_and_Dream') {
            return this.http.put(u, { aims_Goal_and_Dream: dat, }, { headers: this.hdrs });
        }
        else if (localStorage.getItem('ind') == 'Message_For_Followers') {
            return this.http.put(u, { Message_For_Followers: dat, }, { headers: this.hdrs });
        }
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ })

}]);
//# sourceMappingURL=default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a-es2015.js.map