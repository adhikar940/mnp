(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



let LoginGuard = class LoginGuard {
    constructor(router) {
        this.router = router;
    }
    canLoad() {
        const isAuthenticated = !!(+localStorage.getItem('authenticated'));
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/mohan/66D64F7F2CE11EA9/mn/mn/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" persistent=\"true\" >\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    Adhikar\n   </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/login\">\n          <ion-label><h1 style=\"color:darkcyan;\">Signin</h1></ion-label>\n          </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/adhikar\">\n              <ion-label></ion-label>\n              </ion-item>\n                </ion-menu-toggle>\n      <ion-menu-toggle>\n      <ion-item routerLink=\"/adhikar\">\n        <ion-label><h1 style=\"color:Purple;\">Home</h1></ion-label>\n        </ion-item>\n          </ion-menu-toggle>\n      <ion-menu-toggle>\n      <ion-item routerLink=\"/loksabha\">\n        <ion-label><h1 style=\"color:red;\">Loksabha</h1></ion-label>\n        </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n        <ion-item routerLink=\"/rajyasabha\">\n          <ion-label><h1 style=\"color:green;\">Rajyasabha</h1></ion-label>\n          </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle>\n          <ion-item routerLink=\"/assembly\">\n            <ion-label><h1 style=\"color:magenta;\">Assembly</h1></ion-label>\n            </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/legislativecouncil\">\n              <ion-label><h1 style=\"color:blue;\">Council</h1></ion-label>\n              </ion-item>\n              </ion-menu-toggle>\n            <!--\n            <ion-menu-toggle>\n            <ion-item routerLink=\"/carporation\">\n              <ion-label><h1 style=\"color:purple;\">Corporarations</h1></ion-label>\n              </ion-item>\n              </ion-menu-toggle>\n              <ion-menu-toggle>\n              <ion-item routerLink=\"/panchayat\">\n                <ion-label><h1 style=\"color:Maroon;\">Panchayats</h1></ion-label>\n                </ion-item>\n                </ion-menu-toggle>\n\n                <ion-menu-toggle>\n                  <ion-item routerLink=\"/state\">\n                    <ion-label><h1 style=\"color:darkviolet;\">States</h1></ion-label>\n                    </ion-item>\n                    </ion-menu-toggle>\n                    <ion-menu-toggle>\n                      <ion-item routerLink=\"/collector\">\n                        <ion-label><h1 style=\"color:magenta;\">Collector</h1></ion-label>\n                        </ion-item>\n                        </ion-menu-toggle>\n                        -->\n      </ion-list>\n    </ion-content>\n\n    </ion-menu>\n\n  <ion-router-outlet main>   </ion-router-outlet>\n</ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title><h1 style=\"text-shadow: 0px 5px 5px darkcyan; \">Adhikar </h1></ion-title>\n  </ion-toolbar>\n</ion-header>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");




const routes = [
    {
        path: 'adhikar',
        loadChildren: () => Promise.all(/*! import() | adhikar-adhikar-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("adhikar-adhikar-module")]).then(__webpack_require__.bind(null, /*! ./adhikar/adhikar.module */ "cucb")).then(m => m.AdhikarPageModule)
    },
    {
        path: '',
        redirectTo: 'adhikar',
        pathMatch: 'full'
    },
    {
        path: 'loksabha',
        loadChildren: () => Promise.all(/*! import() | loksabha-loksabha-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("loksabha-loksabha-module")]).then(__webpack_require__.bind(null, /*! ./loksabha/loksabha.module */ "uBI/")).then(m => m.LoksabhaPageModule)
    },
    {
        path: 'rajyasabha',
        loadChildren: () => Promise.all(/*! import() | rajyasabha-rajyasabha-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("rajyasabha-rajyasabha-module")]).then(__webpack_require__.bind(null, /*! ./rajyasabha/rajyasabha.module */ "jp79")).then(m => m.RajyasabhaPageModule)
    },
    {
        path: 'assembly',
        loadChildren: () => Promise.all(/*! import() | assembly-assembly-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("assembly-assembly-module")]).then(__webpack_require__.bind(null, /*! ./assembly/assembly.module */ "9zJ0")).then(m => m.AssemblyPageModule)
    },
    {
        path: 'redtool',
        loadChildren: () => Promise.all(/*! import() | redtool-redtool-module */[__webpack_require__.e("common"), __webpack_require__.e("redtool-redtool-module")]).then(__webpack_require__.bind(null, /*! ./redtool/redtool.module */ "4AyQ")).then(m => m.RedtoolPageModule)
    },
    {
        path: 'parliament',
        loadChildren: () => __webpack_require__.e(/*! import() | parliament-parliament-module */ "parliament-parliament-module").then(__webpack_require__.bind(null, /*! ./parliament/parliament.module */ "Bx5b")).then(m => m.ParliamentPageModule)
    },
    {
        path: 'pm',
        loadChildren: () => Promise.all(/*! import() | pm-pm-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("pm-pm-module")]).then(__webpack_require__.bind(null, /*! ./pm/pm.module */ "iBhr")).then(m => m.PmPageModule)
    },
    {
        path: 'president',
        loadChildren: () => Promise.all(/*! import() | president-president-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("president-president-module")]).then(__webpack_require__.bind(null, /*! ./president/president.module */ "B3d5")).then(m => m.PresidentPageModule)
    },
    {
        path: 'vicepresident',
        loadChildren: () => Promise.all(/*! import() | vicepresident-vicepresident-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("vicepresident-vicepresident-module")]).then(__webpack_require__.bind(null, /*! ./vicepresident/vicepresident.module */ "vqn7")).then(m => m.VicepresidentPageModule)
    },
    {
        path: 'loksabhaspeaker',
        loadChildren: () => Promise.all(/*! import() | loksabhaspeaker-loksabhaspeaker-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("loksabhaspeaker-loksabhaspeaker-module")]).then(__webpack_require__.bind(null, /*! ./loksabhaspeaker/loksabhaspeaker.module */ "O7Kl")).then(m => m.LoksabhaspeakerPageModule)
    },
    {
        path: 'loksabhadeputyspeaker',
        loadChildren: () => Promise.all(/*! import() | loksabhadeputyspeaker-loksabhadeputyspeaker-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("loksabhadeputyspeaker-loksabhadeputyspeaker-module")]).then(__webpack_require__.bind(null, /*! ./loksabhadeputyspeaker/loksabhadeputyspeaker.module */ "DquW")).then(m => m.LoksabhadeputyspeakerPageModule)
    },
    {
        path: 'rajyasabhaspeaker',
        loadChildren: () => __webpack_require__.e(/*! import() | rajyasabhaspeaker-rajyasabhaspeaker-module */ "rajyasabhaspeaker-rajyasabhaspeaker-module").then(__webpack_require__.bind(null, /*! ./rajyasabhaspeaker/rajyasabhaspeaker.module */ "CWiE")).then(m => m.RajyasabhaspeakerPageModule)
    },
    {
        path: 'rajyasabhachairman',
        loadChildren: () => __webpack_require__.e(/*! import() | rajyasabhachairman-rajyasabhachairman-module */ "rajyasabhachairman-rajyasabhachairman-module").then(__webpack_require__.bind(null, /*! ./rajyasabhachairman/rajyasabhachairman.module */ "qleG")).then(m => m.RajyasabhachairmanPageModule)
    },
    {
        path: 'rajyasabhaleader',
        loadChildren: () => Promise.all(/*! import() | rajyasabhaleader-rajyasabhaleader-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhaleader-rajyasabhaleader-module")]).then(__webpack_require__.bind(null, /*! ./rajyasabhaleader/rajyasabhaleader.module */ "2/jz")).then(m => m.RajyasabhaleaderPageModule)
    },
    {
        path: 'rajyasabhaoppleader',
        loadChildren: () => Promise.all(/*! import() | rajyasabhaoppleader-rajyasabhaoppleader-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhaoppleader-rajyasabhaoppleader-module")]).then(__webpack_require__.bind(null, /*! ./rajyasabhaoppleader/rajyasabhaoppleader.module */ "xHMj")).then(m => m.RajyasabhaoppleaderPageModule)
    },
    {
        path: 'rajyasabhadeputyspeaker',
        loadChildren: () => Promise.all(/*! import() | rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("rajyasabhadeputyspeaker-rajyasabhadeputyspeaker-module")]).then(__webpack_require__.bind(null, /*! ./rajyasabhadeputyspeaker/rajyasabhadeputyspeaker.module */ "Rl0E")).then(m => m.RajyasabhadeputyspeakerPageModule)
    },
    {
        path: 'raj1/:id/:a',
        loadChildren: () => Promise.all(/*! import() | raj1-raj1-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("raj1-raj1-module")]).then(__webpack_require__.bind(null, /*! ./raj1/raj1.module */ "ecNi")).then(m => m.Raj1PageModule)
    },
    {
        path: 'lok1/:id/:a',
        loadChildren: () => Promise.all(/*! import() | lok1-lok1-module */[__webpack_require__.e("common"), __webpack_require__.e("lok1-lok1-module")]).then(__webpack_require__.bind(null, /*! ./lok1/lok1.module */ "O6sX")).then(m => m.Lok1PageModule)
    },
    {
        path: 'assembly1/:id',
        //path: 'assembly1/:id/:state/:child',
        loadChildren: () => Promise.all(/*! import() | assembly1-assembly1-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("assembly1-assembly1-module")]).then(__webpack_require__.bind(null, /*! ./assembly1/assembly1.module */ "Dr5x")).then(m => m.Assembly1PageModule)
    },
    {
        path: 'lok2/:id/:state/:child',
        loadChildren: () => Promise.all(/*! import() | lok2-lok2-module */[__webpack_require__.e("common"), __webpack_require__.e("lok2-lok2-module")]).then(__webpack_require__.bind(null, /*! ./lok2/lok2.module */ "5/dH")).then(m => m.Lok2PageModule)
    },
    {
        path: 'raj2/:id',
        loadChildren: () => Promise.all(/*! import() | raj2-raj2-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("raj2-raj2-module")]).then(__webpack_require__.bind(null, /*! ./raj2/raj2.module */ "tOup")).then(m => m.Raj2PageModule)
    },
    {
        path: 'assembly2/:id/:state',
        loadChildren: () => Promise.all(/*! import() | assembly2-assembly2-module */[__webpack_require__.e("common"), __webpack_require__.e("assembly2-assembly2-module")]).then(__webpack_require__.bind(null, /*! ./assembly2/assembly2.module */ "IeUA")).then(m => m.Assembly2PageModule)
    },
    {
        path: 'white',
        loadChildren: () => __webpack_require__.e(/*! import() | white-white-module */ "white-white-module").then(__webpack_require__.bind(null, /*! ./white/white.module */ "CpBf")).then(m => m.WhitePageModule)
    },
    {
        path: 'green',
        loadChildren: () => __webpack_require__.e(/*! import() | green-green-module */ "green-green-module").then(__webpack_require__.bind(null, /*! ./green/green.module */ "/leK")).then(m => m.GreenPageModule)
    },
    {
        path: 'carporation',
        loadChildren: () => Promise.all(/*! import() | carporation-carporation-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("carporation-carporation-module")]).then(__webpack_require__.bind(null, /*! ./carporation/carporation.module */ "FrPF")).then(m => m.CarporationPageModule)
    },
    {
        path: 'panchayat',
        loadChildren: () => __webpack_require__.e(/*! import() | panchayat-panchayat-module */ "panchayat-panchayat-module").then(__webpack_require__.bind(null, /*! ./panchayat/panchayat.module */ "Rvoe")).then(m => m.PanchayatPageModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthPageModule)
    },
    {
        path: 'state',
        loadChildren: () => Promise.all(/*! import() | state-state-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("state-state-module")]).then(__webpack_require__.bind(null, /*! ./state/state.module */ "9RCi")).then(m => m.StatePageModule)
    },
    {
        path: 'state1',
        loadChildren: () => Promise.all(/*! import() | state1-state1-module */[__webpack_require__.e("common"), __webpack_require__.e("state1-state1-module")]).then(__webpack_require__.bind(null, /*! ./state1/state1.module */ "N5ig")).then(m => m.State1PageModule)
    },
    {
        path: 'assemblyselect',
        loadChildren: () => __webpack_require__.e(/*! import() | assemblyselect-assemblyselect-module */ "assemblyselect-assemblyselect-module").then(__webpack_require__.bind(null, /*! ./assemblyselect/assemblyselect.module */ "EQrz")).then(m => m.AssemblyselectPageModule)
    },
    {
        path: 'legislativecouncil',
        loadChildren: () => Promise.all(/*! import() | legislativecouncil-legislativecouncil-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("legislativecouncil-legislativecouncil-module")]).then(__webpack_require__.bind(null, /*! ./legislativecouncil/legislativecouncil.module */ "JsKL")).then(m => m.LegislativecouncilPageModule)
    },
    {
        path: 'carporation1',
        loadChildren: () => Promise.all(/*! import() | carporation1-carporation1-module */[__webpack_require__.e("common"), __webpack_require__.e("carporation1-carporation1-module")]).then(__webpack_require__.bind(null, /*! ./carporation1/carporation1.module */ "d7zs")).then(m => m.Carporation1PageModule)
    },
    {
        path: 'carporation2',
        loadChildren: () => Promise.all(/*! import() | carporation2-carporation2-module */[__webpack_require__.e("common"), __webpack_require__.e("carporation2-carporation2-module")]).then(__webpack_require__.bind(null, /*! ./carporation2/carporation2.module */ "MhdR")).then(m => m.Carporation2PageModule)
    },
    {
        path: 'collector',
        loadChildren: () => Promise.all(/*! import() | collector-collector-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("collector-collector-module")]).then(__webpack_require__.bind(null, /*! ./collector/collector.module */ "3xSO")).then(m => m.CollectorPageModule)
    },
    {
        path: 'red1',
        loadChildren: () => Promise.all(/*! import() | red1-red1-module */[__webpack_require__.e("common"), __webpack_require__.e("red1-red1-module")]).then(__webpack_require__.bind(null, /*! ./red1/red1.module */ "xIIV")).then(m => m.Red1PageModule)
    },
    {
        path: 'red2',
        loadChildren: () => Promise.all(/*! import() | red2-red2-module */[__webpack_require__.e("common"), __webpack_require__.e("red2-red2-module")]).then(__webpack_require__.bind(null, /*! ./red2/red2.module */ "HJ9z")).then(m => m.Red2PageModule)
    },
    {
        path: 'white1',
        loadChildren: () => Promise.all(/*! import() | white1-white1-module */[__webpack_require__.e("common"), __webpack_require__.e("white1-white1-module")]).then(__webpack_require__.bind(null, /*! ./white1/white1.module */ "LkAz")).then(m => m.White1PageModule)
    },
    {
        path: 'white2',
        loadChildren: () => Promise.all(/*! import() | white2-white2-module */[__webpack_require__.e("common"), __webpack_require__.e("white2-white2-module")]).then(__webpack_require__.bind(null, /*! ./white2/white2.module */ "9Zhz")).then(m => m.White2PageModule)
    },
    {
        path: 'green1',
        loadChildren: () => __webpack_require__.e(/*! import() | green1-green1-module */ "green1-green1-module").then(__webpack_require__.bind(null, /*! ./green1/green1.module */ "9EWj")).then(m => m.Green1PageModule)
    },
    {
        path: 'green2',
        loadChildren: () => __webpack_require__.e(/*! import() | green2-green2-module */ "green2-green2-module").then(__webpack_require__.bind(null, /*! ./green2/green2.module */ "juhv")).then(m => m.Green2PageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'legislativecouncil1/:id',
        loadChildren: () => Promise.all(/*! import() | legislativecouncil1-legislativecouncil1-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("legislativecouncil1-legislativecouncil1-module")]).then(__webpack_require__.bind(null, /*! ./legislativecouncil1/legislativecouncil1.module */ "9GYM")).then(m => m.Legislativecouncil1PageModule)
    },
    {
        path: 'legislativecouncil2',
        loadChildren: () => Promise.all(/*! import() | legislativecouncil2-legislativecouncil2-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("legislativecouncil2-legislativecouncil2-module")]).then(__webpack_require__.bind(null, /*! ./legislativecouncil2/legislativecouncil2.module */ "SB1O")).then(m => m.Legislativecouncil2PageModule)
    },
    {
        path: 'logout',
        loadChildren: () => __webpack_require__.e(/*! import() | logout-logout-module */ "logout-logout-module").then(__webpack_require__.bind(null, /*! ./logout/logout.module */ "q6at")).then(m => m.LogoutPageModule)
    },
    {
        path: 'partydetails',
        loadChildren: () => Promise.all(/*! import() | partydetails-partydetails-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partydetails-partydetails-module")]).then(__webpack_require__.bind(null, /*! ./partydetails/partydetails.module */ "lM5I")).then(m => m.PartydetailsPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'emailform',
        loadChildren: () => Promise.all(/*! import() | emailform-emailform-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("emailform-emailform-module")]).then(__webpack_require__.bind(null, /*! ./emailform/emailform.module */ "Jch7")).then(m => m.EmailformPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'collectordetails',
        loadChildren: () => Promise.all(/*! import() | collectordetails-collectordetails-module */[__webpack_require__.e("common"), __webpack_require__.e("collectordetails-collectordetails-module")]).then(__webpack_require__.bind(null, /*! ./collectordetails/collectordetails.module */ "r+2g")).then(m => m.CollectordetailsPageModule)
    },
    {
        path: 'changepassword',
        loadChildren: () => Promise.all(/*! import() | changepassword-changepassword-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("changepassword-changepassword-module")]).then(__webpack_require__.bind(null, /*! ./changepassword/changepassword.module */ "u0FJ")).then(m => m.ChangepasswordPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => Promise.all(/*! import() | forgotpassword-forgotpassword-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("forgotpassword-forgotpassword-module")]).then(__webpack_require__.bind(null, /*! ./forgotpassword/forgotpassword.module */ "IoKB")).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'password_reset',
        loadChildren: () => Promise.all(/*! import() | passwordreset-passwordreset-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~changepassword-changepassword-module~forgotpassword-forgotpassword-module~passwordreset-pass~d918a9d1"), __webpack_require__.e("passwordreset-passwordreset-module")]).then(__webpack_require__.bind(null, /*! ./passwordreset/passwordreset.module */ "0Y1x")).then(m => m.PasswordresetPageModule)
    },
    {
        path: 'email1',
        loadChildren: () => Promise.all(/*! import() | email1-email1-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("email1-email1-module")]).then(__webpack_require__.bind(null, /*! ./email1/email1.module */ "tlU+")).then(m => m.Email1PageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'partycandidates',
        loadChildren: () => Promise.all(/*! import() | partycandidates-partycandidates-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partycandidates-partycandidates-module")]).then(__webpack_require__.bind(null, /*! ./partycandidates/partycandidates.module */ "M74f")).then(m => m.PartycandidatesPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'partycandidateemail',
        loadChildren: () => Promise.all(/*! import() | partycandidateemail-partycandidateemail-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partycandidateemail-partycandidateemail-module")]).then(__webpack_require__.bind(null, /*! ./partycandidateemail/partycandidateemail.module */ "yNrm")).then(m => m.PartycandidateemailPageModule)
    },
    {
        path: 'choices',
        loadChildren: () => __webpack_require__.e(/*! import() | choices-choices-module */ "choices-choices-module").then(__webpack_require__.bind(null, /*! ./choices/choices.module */ "WWo0")).then(m => m.ChoicesPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'lokpartycandidate',
        loadChildren: () => __webpack_require__.e(/*! import() | lokpartycandidate-lokpartycandidate-module */ "lokpartycandidate-lokpartycandidate-module").then(__webpack_require__.bind(null, /*! ./lokpartycandidate/lokpartycandidate.module */ "u+Dc")).then(m => m.LokpartycandidatePageModule)
    },
    {
        path: 'states/:k',
        loadChildren: () => Promise.all(/*! import() | partylogin-states-states-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partylogin-states-states-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/states/states.module */ "XsUJ")).then(m => m.StatesPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'statedistrict',
        loadChildren: () => Promise.all(/*! import() | partylogin-statedistrict-statedistrict-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-statedistrict-statedistrict-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/statedistrict/statedistrict.module */ "9XVI")).then(m => m.StatedistrictPageModule)
    },
    {
        path: 'council',
        loadChildren: () => Promise.all(/*! import() | partylogin-council-council-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("partylogin-council-council-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/council/council.module */ "FmJZ")).then(m => m.CouncilPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'coucilemail',
        loadChildren: () => __webpack_require__.e(/*! import() | partylogin-coucilemail-coucilemail-module */ "partylogin-coucilemail-coucilemail-module").then(__webpack_require__.bind(null, /*! ./partylogin/coucilemail/coucilemail.module */ "mCOi")).then(m => m.CoucilemailPageModule)
    },
    {
        path: 'statepartylok',
        loadChildren: () => Promise.all(/*! import() | partylogin-statepartylok-statepartylok-module */[__webpack_require__.e("common"), __webpack_require__.e("partylogin-statepartylok-statepartylok-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/statepartylok/statepartylok.module */ "HTzV")).then(m => m.StatepartylokPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'statedist1',
        loadChildren: () => Promise.all(/*! import() | partylogin-statedist1-statedist1-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-statedist1-statedist1-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/statedist1/statedist1.module */ "JcnT")).then(m => m.Statedist1PageModule)
    },
    {
        path: 'statedistassemb',
        loadChildren: () => __webpack_require__.e(/*! import() | partylogin-statedistassemb-statedistassemb-module */ "partylogin-statedistassemb-statedistassemb-module").then(__webpack_require__.bind(null, /*! ./partylogin/statedistassemb/statedistassemb.module */ "bGIJ")).then(m => m.StatedistassembPageModule)
    },
    {
        path: 'partylogout',
        loadChildren: () => Promise.all(/*! import() | partylogin-partylogout-partylogout-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("partylogin-partylogout-partylogout-module")]).then(__webpack_require__.bind(null, /*! ./partylogin/partylogout/partylogout.module */ "YPzm")).then(m => m.PartylogoutPageModule)
    },
    {
        path: 'rajyasabhaindividual',
        loadChildren: () => Promise.all(/*! import() | individuallogin-rajyasabhaindividual-rajyasabhaindividual-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c"), __webpack_require__.e("common"), __webpack_require__.e("individuallogin-rajyasabhaindividual-rajyasabhaindividual-module")]).then(__webpack_require__.bind(null, /*! ./individuallogin/rajyasabhaindividual/rajyasabhaindividual.module */ "HJe4")).then(m => m.RajyasabhaindividualPageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'individual',
        loadChildren: () => Promise.all(/*! import() | individuallogin-individual-individual-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("default~individuallogin-individual-individual-module~individuallogin-rajyasabhaindividual-rajyasabha~d4f5ae7c"), __webpack_require__.e("individuallogin-individual-individual-module")]).then(__webpack_require__.bind(null, /*! ./individuallogin/individual/individual.module */ "T5Rf")).then(m => m.IndividualPageModule)
    },
    {
        path: 'loksabhaindividual',
        loadChildren: () => __webpack_require__.e(/*! import() | individuallogin-loksabhaindividual-loksabhaindividual-module */ "individuallogin-loksabhaindividual-loksabhaindividual-module").then(__webpack_require__.bind(null, /*! ./individuallogin/loksabhaindividual/loksabhaindividual.module */ "bCPh")).then(m => m.LoksabhaindividualPageModule)
    },
    {
        path: 'individualdisplay/:a/:id',
        loadChildren: () => Promise.all(/*! import() | individuallogin-individualdisplay-individualdisplay-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("individuallogin-individualdisplay-individualdisplay-module")]).then(__webpack_require__.bind(null, /*! ./individuallogin/individualdisplay/individualdisplay.module */ "Pt0t")).then(m => m.IndividualdisplayPageModule)
    },
    {
        path: 'state2',
        loadChildren: () => Promise.all(/*! import() | lok-state2-state2-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("lok-state2-state2-module")]).then(__webpack_require__.bind(null, /*! ./lok/state2/state2.module */ "I8yP")).then(m => m.State2PageModule)
    },
    {
        path: 'choice',
        loadChildren: () => Promise.all(/*! import() | adminlogin-choice-choice-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("adminlogin-choice-choice-module")]).then(__webpack_require__.bind(null, /*! ./adminlogin/choice/choice.module */ "ZUtI")).then(m => m.ChoicePageModule),
        canLoad: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    },
    {
        path: 'statechoice',
        loadChildren: () => Promise.all(/*! import() | adminlogin-statechoice-statechoice-module */[__webpack_require__.e("default~adhikar-adhikar-module~adminlogin-choice-choice-module~adminlogin-statechoice-statechoice-mo~e2b2a24a"), __webpack_require__.e("common"), __webpack_require__.e("adminlogin-statechoice-statechoice-module")]).then(__webpack_require__.bind(null, /*! ./adminlogin/statechoice/statechoice.module */ "1BiY")).then(m => m.StatechoicePageModule)
    },
    {
        path: 'image/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | image-image-module */ "image-image-module").then(__webpack_require__.bind(null, /*! ./image/image.module */ "AsRg")).then(m => m.ImagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map