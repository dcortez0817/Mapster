webpackJsonp([4],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 514:
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
    Pages.MODAL_PROFILE = 'ModalProfilePage';
    return Pages;
}());

var LoadingMessages = /** @class */ (function () {
    function LoadingMessages() {
    }
    LoadingMessages.LOGIN = 'Logging in...';
    LoadingMessages.REGISTER = 'Creating account...';
    LoadingMessages.PROFILE = 'Saving profile...';
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.state = 'x';
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.slideChanged = function () {
    };
    IntroPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["c" /* Pages */].LOGIN_PAGE);
    };
    IntroPage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    IntroPage.prototype.animationDone = function () {
        this.state = 'x';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/brice/source/repos/Mapster/src/pages/intro/intro.html"*/'<ion-content>\n\n  <ion-slides pager (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">\n\n    <ion-slide class="slide1">\n      <div class="diag">\n        <ion-img class="logo" src="assets/imgs/logo.png" [@bounce]=\'state\' (@bounce.done)="animationDone($event)"></ion-img>\n      </div>\n      <div>\n        <h2>Welcome to Mapster</h2>\n        <p>A location based social media experience to bring you closer to all your friends.</p>\n      </div>\n      <button ion-button small color="primary" (click)="skip()" class="skip">\n        Skip\n      </button>\n    </ion-slide>\n\n    <ion-slide class="slide2">\n      <div class="diag">\n        <ion-icon name="map" color="primary" [@bounce]=\'state\' (@bounce.done)="animationDone($event)"></ion-icon>\n      </div>\n      <div>\n        <h2>Find friends nearby</h2>\n        <p>Find new spots to hangout and upload your favorites.</p>\n      </div>\n      <button ion-button small color="primary" (click)="skip()" class="skip">\n        Skip\n      </button>\n    </ion-slide>\n\n    <ion-slide class="slide3">\n      <div class="diag">\n        <ion-icon name="camera" color="primary" [@bounce]=\'state\' (@bounce.done)="animationDone($event)"></ion-icon>\n      </div>\n      <div>\n        <h2>Upload your images</h2>\n        <p>Share your favorite locations with an image to capture all the details.</p>\n      </div>\n      <button ion-button small color="primary" (click)="skip()" class="skip">\n        Skip\n      </button>\n    </ion-slide>\n\n    <ion-slide class="slide4">\n      <div class="diag">\n        <ion-icon name="chatboxes" color="primary" [@bounce]=\'state\' (@bounce.done)="animationDone($event)"></ion-icon>\n      </div>\n      <div>\n        <h2>Chat with others</h2>\n        <p>Communicate with your friends or make new ones that are nearby.</p>\n      </div>\n      <button ion-button small color="primary" (click)="skip()" class="skip">\n        Get started now\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/brice/source/repos/Mapster/src/pages/intro/intro.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(-65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 1.0 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(65px)', offset: 0.3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 1.0 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=4.js.map