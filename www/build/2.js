webpackJsonp([2],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProfilePageModule", function() { return ModalProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalProfilePageModule = /** @class */ (function () {
    function ModalProfilePageModule() {
    }
    ModalProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_profile__["a" /* ModalProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_profile__["a" /* ModalProfilePage */]),
            ],
        })
    ], ModalProfilePageModule);
    return ModalProfilePageModule;
}());

//# sourceMappingURL=modal-profile.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TOAST_DURATION; });
/* unused harmony export LOADING_STYLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadingMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SuccessMessages; });
var TOAST_DURATION = 3000;
var LOADING_STYLE = 'crescent';
var Pages = /** @class */ (function () {
    function Pages() {
    }
    Pages.LOGIN_PAGE = 'LoginPage';
    Pages.REGISTER_PAGE = 'RegisterPage';
    Pages.HOME_PAGE = 'HomePage';
    Pages.PROFILE_PAGE = 'ProfilePage';
    Pages.PROFILE_MODAL = 'ModalProfilePage';
    return Pages;
}());

var LoadingMessages = /** @class */ (function () {
    function LoadingMessages() {
    }
    LoadingMessages.LOGIN = 'Logging in...';
    LoadingMessages.REGISTER = 'Creating account...';
    LoadingMessages.PROFILE = 'Saving profile...';
    LoadingMessages.LOADING = 'Loading...';
    return LoadingMessages;
}());

var ErrorMessages = /** @class */ (function () {
    function ErrorMessages() {
    }
    ErrorMessages.EMPTY_FIELDS = 'Empty fields are not allowed.';
    ErrorMessages.PASSWORD_MISMATCH = 'Passwords do not match.';
    return ErrorMessages;
}());

var SuccessMessages = /** @class */ (function () {
    function SuccessMessages() {
    }
    SuccessMessages.REGISTER = 'Account created!';
    SuccessMessages.PROFILE = 'Profile saved!';
    return SuccessMessages;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utilities_utilities__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ModalProfilePage = /** @class */ (function () {
    function ModalProfilePage(navCtrl, navParams, auth, util, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.util = util;
        this.view = view;
    }
    ModalProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalProfilePage');
    };
    ModalProfilePage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalProfilePage.prototype.logoutConfirm = function () {
        var _this = this;
        this.util.confirmAlert('Logout', 'Are you sure?', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.logout()];
                    case 1:
                        _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["c" /* Pages */].LOGIN_PAGE);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ModalProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-profile',template:/*ion-inline-start:"/home/brice/source/repos/Mapster/src/pages/modal-profile/modal-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n      Profile\n      <ion-icon small name="contact" item-end></ion-icon>\n    </ion-list-header>\n\n    <ion-item-group>\n\n      <button ion-item>\n        <ion-icon color="primary" item-start name="people"></ion-icon>\n        Friends\n      </button>\n\n      <button ion-item>\n        <ion-icon color="primary" item-start name="chatboxes"></ion-icon>\n        Messages\n      </button>\n\n      <button ion-item>\n        <ion-icon color="primary" item-start name="images"></ion-icon>\n        My Pictures\n      </button>\n\n    </ion-item-group>\n\n    <ion-list-header>\n      Settings\n      <ion-icon small name="settings" item-end></ion-icon>\n    </ion-list-header>\n\n    <ion-item-group>\n\n      <button ion-item>\n        <ion-icon color="primary" item-start name="contact"></ion-icon>\n        Edit Profile\n      </button>\n\n      <button ion-item>\n        <ion-icon color="primary" item-start name="lock"></ion-icon>\n        Privacy\n      </button>\n\n      <button ion-item (click)=logoutConfirm()>\n        <ion-icon color="primary" item-start name="log-out"></ion-icon>\n        Logout\n      </button>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/brice/source/repos/Mapster/src/pages/modal-profile/modal-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utilities_utilities__["a" /* UtilitiesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ModalProfilePage);
    return ModalProfilePage;
}());

//# sourceMappingURL=modal-profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map