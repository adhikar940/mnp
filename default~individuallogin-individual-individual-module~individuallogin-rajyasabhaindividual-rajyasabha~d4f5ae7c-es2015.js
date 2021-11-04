(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c"],{

/***/ "MuSt":
/*!***************************************************************!*\
  !*** ./src/app/individuallogin/individual/individual.page.ts ***!
  \***************************************************************/
/*! exports provided: IndividualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualPage", function() { return IndividualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_individual_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./individual.page.html */ "v5aH");
/* harmony import */ var _individual_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./individual.page.scss */ "TdKw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home.service */ "Ol7V");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_k__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/k */ "Ew1Z");











let IndividualPage = class IndividualPage {
    constructor(http, user, navCtrl, router, alertCtrl) {
        this.http = http;
        this.user = user;
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.selectedFile = null;
        this.details = [];
        this.d = {};
        this.user.individual().subscribe(data => {
            this.details = data[0];
        });
        this.mf = _data_k__WEBPACK_IMPORTED_MODULE_9__["default"];
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    profile($event, d) {
        localStorage.setItem('ind', d);
        const file = $event.target.files[0];
        if (d == 'Profilephoto') {
            this.m = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'About_Mephoto') {
            this.m1 = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'childhood_and_Educationphoto') {
            this.cm = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'Political_Careerphoto') {
            this.pol = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'Personal_Lifephoto') {
            this.per = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'aims_Goal_and_Dreamphoto') {
            this.aim = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
        else if (d == 'Message_For_Followersphoto') {
            this.msg = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]((subscriber) => {
                this.readFile(file, subscriber);
            });
        }
    }
    readFile(file, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            var u = localStorage.getItem('n');
            let url = this.mf + u + this.details['id'] + "/";
            this.user.individual1(filereader.result, url).subscribe((res) => {
                alert("Refresh to find the changes");
            });
            subscriber.complete();
        };
        filereader.onerror = (error) => {
            subscriber.error(error);
            subscriber.complete();
        };
    }
    data(c) {
        localStorage.setItem('ind', c);
        var u = localStorage.getItem('n');
        let url = this.mf + u + this.details['id'] + "/";
        this.user.individual1(this.details[c], url).subscribe((res) => {
        });
        alert('saved');
    }
    ngOnInit() {
    }
};
IndividualPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
IndividualPage.propDecorators = {
    k: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
IndividualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-individual',
        template: _raw_loader_individual_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_individual_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IndividualPage);



/***/ }),

/***/ "TdKw":
/*!*****************************************************************!*\
  !*** ./src/app/individuallogin/individual/individual.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpdmlkdWFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "v5aH":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individuallogin/individual/individual.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-list>\n  <h1 style=\"color:blue; text-align:center; font-size: 40px;\" >{{details.mp}}</h1>\n<h1 style=\"color:blue; text-align:center; font-size: 40px;\" >{{details.mlc}}{{details.mla}}</h1>\n  <ion-item>\n    <ion-label position=\"floating\" color=\"primary\">Profile Name</ion-label>\n    <ion-textarea [(ngModel)]=\"details.profilename\"></ion-textarea>\n      </ion-item>\n\n        <ion-button color=\"success\" ion-button round (click) = \"data('profilename')\">Save</ion-button>\n        <br>\n        <br>\n      <div >\n        <ion-h1 style=\"color:blue;\">Profile Photo </ion-h1>\n        <br>\n        <br>\n      <img src={{details.Profilephoto}}  style=\"width:30%\"> </div>\n      <input type=\"file\" (change)=\"profile($event,'Profilephoto')\" />\n\n      <div *ngIf=\"m\">\n        <br>\n        <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n        <br>\n        <br>\n    <img [src]=\"m | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n  </div>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Presnt Party</ion-label>\n        <ion-textarea [(ngModel)]=\"details.presentparty\"></ion-textarea>\n          </ion-item>\n            <ion-button color=\"success\" ion-button round (click) = \"data('presentparty')\">Save</ion-button>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">About Me</ion-label>\n              <ion-textarea rows=\"10\"  [(ngModel)]=\"details.About_Me\"></ion-textarea>\n                </ion-item>\n                  <ion-button color=\"success\" ion-button round (click) = \"data('About_Me')\">Save</ion-button>\n                  <br>\n                  <br>\n                <div >\n                  <ion-h1 style=\"color:blue;\">About Me Photo </ion-h1>\n                  <br>\n                  <br>\n                <img src={{details.About_Mephoto}}  style=\"width:30%\"> </div>\n                <input type=\"file\" (change)=\"profile($event,'About_Mephoto')\" />\n                <div *ngIf=\"m1\">\n                  <br>\n                  <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                  <br>\n                  <br>\n              <img [src]=\"m1 | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n              </div>\n              <ion-item>\n                <ion-label position=\"floating\" color=\"primary\">Childhood and Education</ion-label>\n                <ion-textarea rows=\"10\" [(ngModel)]=\"details.childhood_and_Education\"></ion-textarea>\n                  </ion-item>\n                    <ion-button color=\"success\" ion-button round (click) = \"data('childhood_and_Education')\">Save</ion-button>\n                    <br>\n                    <br>\n                  <div >\n                    <ion-h1 style=\"color:blue;\">Childhood and Education Photo </ion-h1>\n                    <br>\n                    <br>\n                  <img src={{details.childhood_and_Educationphoto}}  style=\"width:30%\"> </div>\n                  <input type=\"file\" (change)=\"profile($event,'childhood_and_Educationphoto')\" />\n                  <div *ngIf=\"cm\">\n                    <br>\n                    <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                    <br>\n                    <br>\n                <img [src]=\"cm | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n                </div>\n                <ion-item>\n                  <ion-label position=\"floating\" color=\"primary\">Political Career</ion-label>\n                  <ion-textarea rows=\"10\"  [(ngModel)]=\"details.Political_Career\"></ion-textarea>\n                    </ion-item>\n                      <ion-button color=\"success\" ion-button round (click) = \"data('Political_Career')\">Save</ion-button>\n                      <br>\n                      <br>\n                    <div >\n                      <ion-h1 style=\"color:blue;\">Political Career Photo </ion-h1>\n                      <br>\n                      <br>\n                    <img src={{details.Political_Careerphoto}}  style=\"width:30%\"> </div>\n                    <input type=\"file\" (change)=\"profile($event,'Political_Careerphoto')\" />\n                    <div *ngIf=\"pol\">\n                      <br>\n                      <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                      <br>\n                      <br>\n                  <img [src]=\"pol | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n                  </div>\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Personal Life</ion-label>\n                    <ion-textarea rows=\"10\" [(ngModel)]=\"details.Personal_Life\"></ion-textarea>\n                      </ion-item>\n                        <ion-button color=\"success\" ion-button round (click) = \"data('Personal_Life')\">Save</ion-button>\n                        <br>\n                        <br>\n                      <div >\n                        <ion-h1 style=\"color:blue;\">Personal Life photo </ion-h1>\n                        <br>\n                        <br>\n                      <img src={{details.Personal_Lifephoto}}  style=\"width:30%\"> </div>\n                      <input type=\"file\" (change)=\"profile($event,'Personal_Lifephoto')\" />\n                      <div *ngIf=\"per\">\n                        <br>\n                        <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                        <br>\n                        <br>\n                    <img [src]=\"per | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n                    </div><ion-item>\n                      <ion-label position=\"floating\" color=\"primary\">Aims Goals and Dreams</ion-label>\n                      <ion-textarea rows=\"10\"  [(ngModel)]=\"details.aims_Goal_and_Dream\"></ion-textarea>\n                        </ion-item>\n                          <ion-button color=\"success\" ion-button round (click) = \"data('aims_Goal_and_Dream')\">Save</ion-button>\n                          <br>\n                          <br>\n                        <div >\n                          <ion-h1 style=\"color:blue;\">Aims Goals and Dreams Photo </ion-h1>\n                          <br>\n                          <br>\n                        <img src={{details.aims_Goal_and_Dreamphoto}}  style=\"width:30%\"> </div>\n                        <input type=\"file\" (change)=\"profile($event,'aims_Goal_and_Dreamphoto')\" />\n                        <div *ngIf=\"aim\">\n                          <br>\n                          <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                          <br>\n                          <br>\n                      <img [src]=\"aim | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n                      </div><ion-item>\n                        <ion-label position=\"floating\" color=\"primary\">Message For Followers</ion-label>\n                        <ion-textarea rows=\"10\" [(ngModel)]=\"details.Message_For_Followers\"></ion-textarea>\n                          </ion-item>\n                            <ion-button color=\"success\" ion-button round (click) = \"data('Message_For_Followers')\">Save</ion-button>\n                            <br>\n                            <br>\n                          <div >\n                            <ion-h1 style=\"color:blue;\">Message For Followers Photo </ion-h1>\n                            <br>\n                            <br>\n                          <img src={{details.Message_For_Followersphoto}}  style=\"width:30%\"> </div>\n                          <input type=\"file\" (change)=\"profile($event,'Message_For_Followersphoto')\" />\n                          <div *ngIf=\"msg\">\n                            <br>\n                            <ion-h1 style=\"color:blue;\">Uploaded Image </ion-h1>\n                            <br>\n                            <br>\n                        <img [src]=\"msg | async\" width=\"200px\" height=\"200px\" alt=\"\" />\n                        </div>\n</ion-list>\n");

/***/ })

}]);
//# sourceMappingURL=default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c-es2015.js.map