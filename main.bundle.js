webpackJsonp([0,4],{

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(491);


/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(appService) {
        this.appService = appService;
        this.loggedIn = true;
    }
    AuthService.prototype.validation = function () {
        var _this = this;
        this.appService.getContent(this.url).subscribe(function (data) {
            _this.loggedIn = true;
            console.log(_this.loggedIn);
        }, function (err) {
            _this.loggedIn = false;
        });
    };
    AuthService.prototype.ngOnInit = function () {
        this.validation();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/auth-service.service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatingDiscoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatingDiscoverComponent = (function () {
    function DatingDiscoverComponent(appService) {
        this.appService = appService;
        this.recUrl = "../../../datingRecommend.json";
        this.dating = true;
        this.url = "../../../../dating.json";
        this.adz = [
            {
                title: "India Startups Advice"
            },
            {
                title: "Pakistan Startups Advice"
            }
        ];
    }
    DatingDiscoverComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('discovery');
    };
    DatingDiscoverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dating-discover',
            template: __webpack_require__(875),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], DatingDiscoverComponent);
    return DatingDiscoverComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/dating-discover.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatingProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatingProfileComponent = (function () {
    function DatingProfileComponent(appService, fb) {
        this.appService = appService;
        this.fb = fb;
        this.datingForm = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            displayName: [''],
            dateOfBirth: [''],
            height: fb.group({
                feet: [''],
                inch: ['']
            }),
            gender: [''],
            interestedIn: [''],
            relationshipHistory: [''],
            children: [''],
            hairColor: [''],
            eyeColor: [''],
            bodyType: [''],
            smoking: [''],
            education: [''],
            religion: [''],
            occupation: [''],
            salary: [''],
            language: [''],
            place: ['']
        });
    }
    DatingProfileComponent.prototype.onSubmit = function () {
        console.log(this.datingForm.value);
    };
    DatingProfileComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('dating profile');
    };
    DatingProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dating-profile',
            template: __webpack_require__(878),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], DatingProfileComponent);
    return DatingProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/dating-profile.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatingRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatingRequestComponent = (function () {
    function DatingRequestComponent(appService) {
        this.appService = appService;
        this.sentRequest = true;
        this.receivedRequest = true;
        this.url = "../../../../dating.json";
    }
    DatingRequestComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('dating requests');
    };
    DatingRequestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dating-request',
            template: __webpack_require__(879),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], DatingRequestComponent);
    return DatingRequestComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/dating-request.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatingComponent = (function () {
    function DatingComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.childTabs = [
            {
                name: 'discovery',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'special someone',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'dating profile',
                icon1: '../../assets/img/menu_ico_2.png',
                icon2: '../../assets/img/menu_ico_22.png'
            },
            {
                name: 'dating requests',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            }
        ];
    }
    DatingComponent.prototype.updateValue = function ($event) {
        var value = $event.newValue;
        if (value.indexOf(" ")) {
            while (value.indexOf(" ") > -1) {
                value = value.replace(" ", "");
            }
        }
        var link = 'dating' + '/' + value;
        this.router.navigate([link]);
    };
    DatingComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('dating');
        this.appService.changeLogin(true);
    };
    DatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dating',
            template: __webpack_require__(880),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], DatingComponent);
    return DatingComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/dating.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialSomeoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialSomeoneComponent = (function () {
    function SpecialSomeoneComponent(appService) {
        this.appService = appService;
        this.url = "../../../../dating.json";
        this.special = true;
        this.title = "Mutual";
    }
    SpecialSomeoneComponent.prototype.updateResult = function ($event) {
        // console.log($event.target.value);
        this.title = $event.target.value;
    };
    SpecialSomeoneComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('special someone');
    };
    SpecialSomeoneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-special-someone',
            template: __webpack_require__(881),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], SpecialSomeoneComponent);
    return SpecialSomeoneComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/special-someone.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formData_interface__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailvalidators__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesNetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompaniesNetworkComponent = (function () {
    function CompaniesNetworkComponent(appService, fb) {
        this.appService = appService;
        this.fb = fb;
        this.personalDetail = new __WEBPACK_IMPORTED_MODULE_3__formData_interface__["a" /* personal */]();
        this.educationalDetail = new __WEBPACK_IMPORTED_MODULE_3__formData_interface__["b" /* educational */]();
        this.experienceDetail = new __WEBPACK_IMPORTED_MODULE_3__formData_interface__["c" /* experience */]();
        this.personal = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(3)
                ])],
            age: [],
            phone: [],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__emailvalidators__["a" /* customValidator */].emailValid
                ])],
            description: []
        });
        this.educational = fb.group({
            lastDegree: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            institute: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            majors: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            yearPassed: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
        this.experience = fb.group({
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            durration: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            detail: []
        });
    }
    CompaniesNetworkComponent.prototype.personalSubmit = function () {
        this.personalDetail = this.personal.value;
        this.personalS = true;
        this.userPic = jQuery('.uploaded-pic img').attr('src');
    };
    CompaniesNetworkComponent.prototype.educationalSubmit = function () {
        this.educationalDetail = this.educational.value;
        this.educationS = true;
    };
    CompaniesNetworkComponent.prototype.experienceSubmit = function () {
        this.experienceDetail = this.experience.value;
        this.experienceS = true;
    };
    CompaniesNetworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.changeTab('resume builder');
        this.personalS = false;
        this.educationS = false;
        this.experienceS = false;
        this.appService.width.subscribe(function (data) {
            _this.width = data;
        });
    };
    CompaniesNetworkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-companies-network',
            template: __webpack_require__(886),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], CompaniesNetworkComponent);
    return CompaniesNetworkComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/companies-network.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscoveryComponent = (function () {
    function DiscoveryComponent(appService) {
        this.appService = appService;
        this.recommendUrl = '../../../job-recommended.json';
        this.jobsHere = true;
        this.Url = 'http://35.166.70.82/jobs';
        this.adz = [
            {
                title: "California Startups Advice"
            },
            {
                title: "Chicago Startups Advice"
            }
        ];
    }
    DiscoveryComponent.prototype.search = function (value) {
    };
    DiscoveryComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('discovery');
    };
    DiscoveryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discovery',
            template: __webpack_require__(887),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], DiscoveryComponent);
    return DiscoveryComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/discovery.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customValidator; });
var customValidator = (function () {
    function customValidator() {
    }
    customValidator.emailValid = function (control) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(control.value)) {
            return null;
        }
        else {
            return { emailValid: true };
        }
    };
    return customValidator;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/emailvalidators.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsComponent = (function () {
    function JobsComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.childTabs = [
            {
                name: 'discovery',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'my jobs',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'post a job',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'resume builder',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            }
        ];
    }
    JobsComponent.prototype.updateValue = function ($event) {
        var value = $event.newValue;
        if (value.indexOf(" ")) {
            while (value.indexOf(" ") > -1) {
                value = value.replace(" ", "");
            }
        }
        var link = 'jobs' + '/' + value;
        this.router.navigate([link]);
    };
    JobsComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('jobs');
        this.appService.changeLogin(true);
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(890),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/jobs.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyJobsComponent = (function () {
    function MyJobsComponent(appService) {
        this.appService = appService;
        this.recommendUrl = '../../../job-recommended.json';
        this.jobsHere = true;
        this.applied = true;
        this.Url = 'http://35.166.70.82/jobs';
        this.adz = [
            {
                title: "California Startups Advice"
            },
            {
                title: "Chicago Startups Advice"
            }
        ];
    }
    MyJobsComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('my jobs');
    };
    MyJobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-jobs',
            template: __webpack_require__(891),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], MyJobsComponent);
    return MyJobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/my-jobs.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostJobComponent = (function () {
    function PostJobComponent(appService, fb) {
        this.appService = appService;
        this.fb = fb;
        this.anotherJob = false;
        this.options = ['(cities)'];
        this.postJob = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            website: [''],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            type: [''],
            description: [''],
            location: [''],
            category: [''],
            salary: [''],
            experience: [''],
            durration: [''],
            howApply: ['']
        });
    }
    PostJobComponent.prototype.getAddress = function (event) {
        this.address = event.address_components[0].long_name;
    };
    PostJobComponent.prototype.onSubmit = function () {
        this.postJob.value.location = this.address;
        var url = 'http://35.166.70.82/jobs/post';
        this.appService.postJob(url, this.postJob.value).subscribe(function (data) {
            console.log(data);
        });
        this.postJob.reset();
        this.anotherJob = true;
    };
    PostJobComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('post a job');
        this.anotherJob = false;
    };
    PostJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(892),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], PostJobComponent);
    return PostJobComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/post-job.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(appService, fb, router) {
        this.appService = appService;
        this.fb = fb;
        this.router = router;
        this.url = 'http://35.166.70.82/signin';
        this.content = 'Please Sign In or Sign Up to continue';
        this.currentUser = {
            username: "humayunazaz",
            password: "humayunkhan"
        };
        this.userValue = {
            firstname: 'humayun'
        };
        this.loginin = false;
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(8)
                ])]
        });
    }
    // login(){
    //   let url = "http://35.166.70.82/signin";
    //   this.appService.login(this.currentUser, url).subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   )
    // }
    // editUser(){
    //   let url = 'http://35.166.70.82/users/9';
    //   this.appService.editUser(this.userValue, url).subscribe(
    //     data => {
    //       console.log(data);
    //     }
    //   )
    // }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.content = 'Connecting';
        this.loginin = true;
        this.appService.login(this.loginForm.value, this.url).subscribe(function (data) {
            if (data.token) {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('username', _this.loginForm.value.username);
            }
            if (data.id && data.id != undefined) {
                _this.appService.changeUser(_this.loginForm.value.username);
                _this.router.navigate(['social']);
            }
        }, function (err) { _this.content = 'username or password incorrect'; }, function () { _this.content = 'Login successfully'; });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.appService.changeSign('signin');
        this.height = window.innerHeight;
        this.loginHeight = (this.height - 410) / 2;
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(894),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/login.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrimonialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatrimonialComponent = (function () {
    function MatrimonialComponent(appService) {
        this.appService = appService;
    }
    MatrimonialComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('matrimonial');
        this.appService.changeLogin(true);
    };
    MatrimonialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-matrimonial',
            template: __webpack_require__(895),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], MatrimonialComponent);
    return MatrimonialComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/matrimonial.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(897),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/not-found.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaInterestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaInterestComponent = (function () {
    function AreaInterestComponent(appService) {
        this.appService = appService;
    }
    AreaInterestComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('answer questions');
    };
    AreaInterestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-interest',
            template: __webpack_require__(898),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AreaInterestComponent);
    return AreaInterestComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/area-interest.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AskQuestionComponent = (function () {
    function AskQuestionComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    AskQuestionComponent.prototype.gotoSingle = function () {
        var id = 1;
        this.router.navigate(['q-a/singleQuestion', id]);
    };
    AskQuestionComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('ask question');
    };
    AskQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ask-question',
            template: __webpack_require__(899),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AskQuestionComponent);
    return AskQuestionComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/ask-question.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListQuestionComponent = (function () {
    function ListQuestionComponent(appService) {
        this.appService = appService;
    }
    ListQuestionComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('my questions');
    };
    ListQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-question',
            template: __webpack_require__(900),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ListQuestionComponent);
    return ListQuestionComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/list-question.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QAComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QAComponent = (function () {
    function QAComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.childTabs = [
            {
                name: 'ask question',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'my questions',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'answer questions',
                icon1: '../../assets/img/menu_ico_2.png',
                icon2: '../../assets/img/menu_ico_22.png'
            }
        ];
    }
    QAComponent.prototype.updateValue = function ($event) {
        var value = $event.newValue;
        if (value.indexOf(" ")) {
            while (value.indexOf(" ") > -1) {
                value = value.replace(" ", "");
            }
        }
        var link = 'q-a' + '/' + value;
        this.router.navigate([link]);
    };
    QAComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('q & a');
        this.appService.changeLogin(true);
    };
    QAComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-q-a',
            template: __webpack_require__(901),
            styles: [__webpack_require__(847)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], QAComponent);
    return QAComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/q-a.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleQuestionComponent = (function () {
    function SingleQuestionComponent() {
    }
    SingleQuestionComponent.prototype.ngOnInit = function () {
    };
    SingleQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-question',
            template: __webpack_require__(902),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleQuestionComponent);
    return SingleQuestionComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/single-question.component.js.map

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.Title = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.childTab = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.width = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.Login = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.Sign = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["ReplaySubject"](1);
        this.token = window.localStorage.getItem('token');
    }
    AppService.prototype.getWidth = function (value) {
        this.width.next(value);
    };
    AppService.prototype.changeMenu = function (value) {
        this.emitter.next(value);
    };
    AppService.prototype.menuTitle = function (value) {
        this.Title.next(value);
    };
    AppService.prototype.changeTab = function (value) {
        this.childTab.next(value);
    };
    AppService.prototype.changeLogin = function (value) {
        this.Login.next(value);
    };
    AppService.prototype.changeSign = function (value) {
        this.Sign.next(value);
    };
    AppService.prototype.changeUser = function (value) {
        this.user.next(value);
    };
    // getContent(url){
    //   return this.http.get(url)
    //   .map(response => response.json());
    // }
    AppService.prototype.getContent = function (url) {
        this.token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.uploadPosts = function (url, value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('body', value);
        return this.http.post(url, data, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.postContent = function (url, image, name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('fileName', name);
        data.append('fileData', image);
        return this.http.post(url, data, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.postJob = function (url, form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, form, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.addFriend = function (id, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('friendId', id);
        return this.http.post(url, data, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.postPhoto = function (url, file) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // let data = new URLSearchParams();
        // data.append('fileData', image); 
        // data.append('fileName', name);
        return this.http.post(url, file, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.createUser = function (value, url) {
        var username = value.username;
        if (username.indexOf(" ") > -1) {
            while (username.indexOf(" ") > -1) {
                username = username.replace(" ", "");
            }
        }
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('username', username);
        data.append('password', value.password);
        data.append('password_confirmation', value.password_confirmation);
        data.append('email', value.email);
        data.append('firstName', value.firstname);
        data.append('lastName', value.lastname);
        return this.http.post(url, data)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.login = function (value, url) {
        var username = value.username;
        if (username.indexOf(" ") > -1) {
            while (username.indexOf(" ") > -1) {
                username = username.replace(" ", "");
            }
        }
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('username', username);
        data.append('password', value.password);
        return this.http.post(url, data)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.editUser = function (value, url) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.append('firstName', value.firstname);
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNDg2MTI3MzkwLCJleHAiOjE0ODYxMzA1OTB9.CBN7RWJ6Baf-On5JnD8ROWX_Qr3gK78cvt0bjrfNfdY';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, data, options)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.deleteUser = function (url) {
        return this.http.delete(url)
            .map(function (response) { return response.json(); });
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/app.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularEventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularEventsComponent = (function () {
    function PopularEventsComponent(appService) {
        this.appService = appService;
    }
    PopularEventsComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('popular events');
    };
    PopularEventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popular-events',
            template: __webpack_require__(903),
            styles: [__webpack_require__(849)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], PopularEventsComponent);
    return PopularEventsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/popular-events.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewInterestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewInterestComponent = (function () {
    function ReviewInterestComponent(appService) {
        this.appService = appService;
    }
    ReviewInterestComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('areas of interest');
    };
    ReviewInterestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-interest',
            template: __webpack_require__(904),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ReviewInterestComponent);
    return ReviewInterestComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/review-interest.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewStreamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewStreamComponent = (function () {
    function ReviewStreamComponent(appService) {
        this.appService = appService;
    }
    ReviewStreamComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('stream');
    };
    ReviewStreamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-stream',
            template: __webpack_require__(905),
            styles: [__webpack_require__(851)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ReviewStreamComponent);
    return ReviewStreamComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/review-stream.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = (function () {
    function ReviewComponent(appService) {
        this.appService = appService;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('review');
    };
    ReviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(906),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/review.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = (function () {
    function ReviewsComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.childTabs = [
            {
                name: 'stream',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'popular events',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'review',
                icon1: '../../assets/img/menu_ico_2.png',
                icon2: '../../assets/img/menu_ico_22.png'
            },
            {
                name: 'areas of interest',
                icon1: '../../assets/img/menu_ico_2.png',
                icon2: '../../assets/img/menu_ico_22.png'
            }
        ];
    }
    ReviewsComponent.prototype.updateValue = function ($event) {
        var value = $event.newValue;
        if (value.indexOf(" ")) {
            while (value.indexOf(" ") > -1) {
                value = value.replace(" ", "");
            }
        }
        var link = 'reviews' + '/' + value;
        this.router.navigate([link]);
    };
    ReviewsComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('reviews');
        this.appService.changeLogin(true);
    };
    ReviewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(907),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ReviewsComponent);
    return ReviewsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/reviews.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_emailvalidators__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(appService, fb, router) {
        this.appService = appService;
        this.fb = fb;
        this.router = router;
        this.url = 'http://35.166.70.82/signup';
        this.signupForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__jobs_emailvalidators__["a" /* customValidator */].emailValid
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(8)
                ])],
            password_confirmation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(8)
                ])],
            firstname: [''],
            lastname: ['']
        });
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(JSON.stringify(this.signupForm.value));
        this.appService.createUser(this.signupForm.value, this.url).subscribe(function (data) {
            if (data.token) {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('username', _this.signupForm.value.username);
            }
            if (data.token != undefined) {
                _this.appService.changeUser(_this.signupForm.value.username);
                _this.router.navigate(['social']);
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.appService.changeSign('signup');
        this.height = window.innerHeight;
        this.signupHeight = (this.height - 522) / 2;
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-signup',
            template: __webpack_require__(908),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/signup.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsComponent = (function () {
    function FriendsComponent(appService) {
        this.appService = appService;
        this.show = false;
        this.url = 'http://35.166.70.82/friends';
        this.loading = true;
        this.error = false;
        this.height = 600;
    }
    FriendsComponent.prototype.showResults = function ($event) {
        if ($event.search == '') {
            this.Sortedresults = this.results;
        }
        else {
            var friend = $event.search.search;
            var i = 0;
            this.Sortedresults = [];
            while (this.results[i]) {
                if (this.results[i].fullName.toString().toLowerCase().indexOf(friend.toLowerCase()) > -1) {
                    this.Sortedresults.push(this.results[i]);
                }
                i++;
            }
        }
    };
    FriendsComponent.prototype.getResults = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.results = data.friends;
            _this.Sortedresults = _this.results;
            var i = 0;
            while (_this.Sortedresults[i]) {
                if (_this.Sortedresults[i].profile_picture.indexOf("null") > -1) {
                    _this.Sortedresults[i].profile_picture = "../../../assets/img/avatars/female.png";
                }
                i++;
            }
        }, function (err) { _this.loading = true; }, function () { _this.show = true; _this.loading = false; });
    };
    FriendsComponent.prototype.addFriend = function (id) {
        this.appService.addFriend(id, this.url).subscribe(function (data) {
        });
    };
    FriendsComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('friends');
        this.getResults(this.url);
    };
    FriendsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(912),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], FriendsComponent);
    return FriendsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/friends.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__album_interface__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PhotoComponent = (function () {
    function PhotoComponent(appService, el, zone) {
        this.appService = appService;
        this.el = el;
        this.zone = zone;
        this.album = new __WEBPACK_IMPORTED_MODULE_3__album_interface__["a" /* album */]();
        this.photoIds = [];
        this.tabsData = [
            {
                title: 'Your photos',
                id: 'photo'
            },
            {
                title: 'Albums',
                id: 'album'
            }
        ];
        this.additionalPhoto = false;
        this.url = 'http://35.166.70.82/photos';
        this.aUrl = "../../../../albums.json";
        this.loading = true;
        this.error = false;
        this.token = window.localStorage.getItem('token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["NgUploaderOptions"]({
            url: 'http://35.166.70.82/photos',
            authToken: this.token,
            allowedExtensions: ['jpg', 'png']
        });
    }
    PhotoComponent.prototype.handleUpload = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.zone.run(function () {
                _this.response = data;
                if (data && data.response) {
                    _this.response = JSON.parse(data.response);
                    _this.newPhoto = _this.response;
                    _this.photos.push(_this.newPhoto);
                    _this.getContent(_this.url, _this.aUrl);
                }
            });
        });
    };
    ;
    PhotoComponent.prototype.getContent = function (purl, vurl) {
        var _this = this;
        var subc = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(this.appService.getContent(purl), this.appService.getContent(vurl))
            .subscribe(function (data) {
            _this.photos = data[0].photos;
            _this.photoIds = [];
            var i = 0;
            while (_this.photos[i]) {
                _this.photoIds.push(_this.photos[i].id);
                i++;
            }
            _this.albums = data[1];
        }, function (err) { _this.error = true, _this.loading = false; }, function () { _this.loading = false; });
    };
    PhotoComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('photos');
        this.getContent(this.url, this.aUrl);
    };
    PhotoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(915),
            styles: [__webpack_require__(861)]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _c) || Object])
    ], PhotoComponent);
    return PhotoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/photo.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(appService) {
        this.appService = appService;
        this.tabsHead = [
            {
                title: 'Status',
                id: 'status',
                icon1: '../../../assets/img/menu_ico_7.png',
                icon2: '../../../assets/img/menu_ico_77.png',
                user: '../../../user.json',
                post: 'http://35.166.70.82/posts'
            },
            {
                title: 'Events',
                id: 'events',
                icon1: '../../../assets/img/menu_ico_8.png',
                icon2: '../../../assets/img/menu_ico_88.png',
                user: '../../../user.json'
            },
            {
                title: 'Images/Videos',
                id: 'images',
                icon1: '../../../assets/img/menu_ico_9.png',
                icon2: '../../../assets/img/menu_ico_99.png',
                user: '../../../user.json'
            }
        ];
        this.url = 'http://35.166.70.82/profile';
        this.loading = true;
        this.error = false;
    }
    ProfileComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.user = data.profile;
            if (_this.user.user.profile_image.indexOf('null') > -1) {
                _this.user.user.profile_image = '../../../assets/img/user_pic.jpg';
            }
            ;
            // console.log(JSON.stringify(this.user));
            // this.userImg = this.user.img;
            // this.userImg = this.userImg.toString().replace("./", "");
            // this.userImg = '../../../' + this.userImg;
        }, function (err) { _this.loading = false; _this.error = true; }, function () { _this.loading = false; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getContent(this.url);
        this.appService.changeTab('profile');
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(917),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/profile.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = (function () {
    function SocialComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.content = 'login success fully';
        this.success = true;
        this.fail = false;
        this.childTabs = [
            {
                name: 'stream',
                icon1: '../../assets/img/menu_ico_1.png',
                icon2: '../../assets/img/menu_ico_11.png'
            },
            {
                name: 'profile',
                icon1: '../../assets/img/menu_ico_2.png',
                icon2: '../../assets/img/menu_ico_22.png'
            },
            {
                name: 'friends',
                icon1: '../../assets/img/menu_ico_3.png',
                icon2: '../../assets/img/menu_ico_33.png'
            },
            {
                name: 'photos',
                icon1: '../../assets/img/menu_ico_4.png',
                icon2: '../../assets/img/menu_ico_44.png'
            },
            {
                name: 'videos',
                icon1: '../../assets/img/menu_ico_5.png',
                icon2: '../../assets/img/menu_ico_55.png'
            }
        ];
    }
    SocialComponent.prototype.updateValue = function ($event) {
        var link = 'social' + '/' + $event.newValue;
        this.router.navigate([link]);
    };
    SocialComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('social');
        this.appService.changeLogin(true);
        setTimeout(function () {
            this.close = true;
            console.log(this.close);
        }, 3000);
    };
    SocialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(920),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], SocialComponent);
    return SocialComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/social.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StreamComponent = (function () {
    function StreamComponent(appService) {
        this.appService = appService;
        this.tabsHead = [
            {
                title: 'Status',
                id: 'status',
                icon1: '../../../assets/img/menu_ico_7.png',
                icon2: '../../../assets/img/menu_ico_77.png',
                user: '../../../user.json',
                post: 'http://35.166.70.82/posts'
            },
            {
                title: 'Events',
                id: 'events',
                icon1: '../../../assets/img/menu_ico_8.png',
                icon2: '../../../assets/img/menu_ico_88.png',
                user: '../../../user.json',
                post: '../../../post.json'
            },
            {
                title: 'Images/Videos',
                id: 'images',
                icon1: '../../../assets/img/menu_ico_9.png',
                icon2: '../../../assets/img/menu_ico_99.png',
                user: '../../../user.json',
                post: '../../../post.json'
            }
        ];
        this.recUrl = '../../../recommended.json';
        this.adz = [
            {
                title: "California Startups Advice"
            },
            {
                title: "Chicago Startups Advice"
            }
        ];
    }
    StreamComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('stream');
    };
    StreamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stream',
            template: __webpack_require__(921),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], StreamComponent);
    return StreamComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/stream.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var VideosComponent = (function () {
    function VideosComponent(appService, zone) {
        this.appService = appService;
        this.zone = zone;
        this.loading = true;
        this.url = "http://35.166.70.82/videos";
        this.token = window.localStorage.getItem('token');
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ngx_uploader__["NgUploaderOptions"]({
            url: 'http://35.166.70.82/videos',
            authToken: this.token
        });
    }
    VideosComponent.prototype.handleUpload = function (data) {
        var _this = this;
        this.getContent(this.url);
        setTimeout(function () {
            _this.zone.run(function () {
                _this.response = data;
                if (data && data.response) {
                    _this.response = JSON.parse(data.response);
                    console.log(_this.response);
                }
            });
        });
    };
    VideosComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.videos = data.videos;
        }, function (err) { _this.error = true; _this.loading = false; }, function () { _this.loading = false; });
    };
    VideosComponent.prototype.model = function (content) {
        this.videoContent = content;
    };
    VideosComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('videos');
        this.getContent(this.url);
    };
    VideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(922),
            styles: [__webpack_require__(868)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _b) || Object])
    ], VideosComponent);
    return VideosComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/videos.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 490;


/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(620);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/main.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matrimonial_matrimonial_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__(394);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: '',
        redirectTo: '/social/stream',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'matrimonial',
        component: __WEBPACK_IMPORTED_MODULE_4__matrimonial_matrimonial_component__["a" /* MatrimonialComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var appRoutingModule = (function () {
    function appRoutingModule() {
    }
    appRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], appRoutingModule);
    return appRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/app-routing.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
    }
    AppComponent.prototype.onResize = function ($event) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.height = this.height - 108;
        this.changeWidth();
    };
    AppComponent.prototype.changeWidth = function () {
        var menuHide;
        if (this.width <= 991) {
            menuHide = true;
            this.appService.changeMenu(menuHide);
        }
        else {
            menuHide = false;
            this.appService.changeMenu(menuHide);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.emitter.subscribe(function (data) {
            _this.menuChange = data;
        });
        this.width = window.innerWidth;
        this.appService.getWidth(this.width);
        this.changeWidth();
        this.appService.changeLogin(false);
        this.appService.Login.subscribe(function (data) {
            _this.login = data;
        });
        this.height = window.innerHeight;
        if (this.height > 750) {
            this.height = this.height - 108;
        }
        else {
            this.height = 750;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(872),
            styles: [__webpack_require__(818)],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/app.component.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_social_routing__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobs_jobs_routing__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dating_dating_routing__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__q_a_q_a_routing__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_review_routing__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_core__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_videogular2_controls__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_videogular2_overlay_play__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_videogular2_buffering__ = __webpack_require__(1210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_uploader__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_auto_complete_auto_complete_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_notifi_notifi_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_menu_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__social_social_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__jobs_jobs_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tweets_tweets_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dating_dating_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__q_a_q_a_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__blogger_blogger_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reviews_reviews_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__matrimonial_matrimonial_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__not_found_not_found_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__child_tabs_child_tabs_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__social_stream_stream_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__social_profile_profile_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__social_friends_friends_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__social_photo_photo_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__social_videos_videos_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__social_settings_settings_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__social_grand_child_tabs_grand_child_tabs_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__social_add_post_add_post_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__social_recommended_recommended_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__social_friends_friend_search_friend_search_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__social_photo_photo_child_photo_child_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__jobs_discovery_discovery_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__jobs_my_jobs_my_jobs_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__jobs_companies_network_companies_network_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__jobs_post_job_post_job_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__jobs_discovery_find_job_find_job_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__social_adz_adz_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__jobs_job_detail_job_detail_component__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__dating_dating_discover_dating_discover_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dating_special_someone_special_someone_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dating_dating_profile_dating_profile_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__dating_dating_request_dating_request_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__dating_dating_discover_find_date_find_date_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__dating_dating_discover_single_date_single_date_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__q_a_ask_question_ask_question_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__q_a_list_question_list_question_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__q_a_area_interest_area_interest_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__q_a_single_question_single_question_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__reviews_popular_events_popular_events_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__reviews_review_review_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__reviews_review_interest_review_interest_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__reviews_review_stream_review_stream_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__login_login_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__signup_signup_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__auth_service_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_ng2_google_place_autocomplete__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__social_photo_photomodel_photomodel_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__flashmessage_flashmessage_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__videomodel_videomodel_component__ = __webpack_require__(650);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__header_auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__header_notifi_notifi_component__["a" /* NotifiComponent */],
                __WEBPACK_IMPORTED_MODULE_21__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__social_social_component__["a" /* SocialComponent */],
                __WEBPACK_IMPORTED_MODULE_23__jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__tweets_tweets_component__["a" /* TweetsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dating_dating_component__["a" /* DatingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__q_a_q_a_component__["a" /* QAComponent */],
                __WEBPACK_IMPORTED_MODULE_27__blogger_blogger_component__["a" /* BloggerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__matrimonial_matrimonial_component__["a" /* MatrimonialComponent */],
                __WEBPACK_IMPORTED_MODULE_30__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_31__child_tabs_child_tabs_component__["a" /* ChildTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__social_stream_stream_component__["a" /* StreamComponent */],
                __WEBPACK_IMPORTED_MODULE_33__social_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_34__social_friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__social_photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__social_videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_37__social_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__social_grand_child_tabs_grand_child_tabs_component__["a" /* GrandChildTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__social_add_post_add_post_component__["a" /* AddPostComponent */],
                __WEBPACK_IMPORTED_MODULE_40__social_recommended_recommended_component__["a" /* RecommendedComponent */],
                //BookmarkComponent
                __WEBPACK_IMPORTED_MODULE_41__social_friends_friend_search_friend_search_component__["a" /* FriendSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_42__social_photo_photo_child_photo_child_component__["a" /* PhotoChildComponent */],
                __WEBPACK_IMPORTED_MODULE_43__jobs_discovery_discovery_component__["a" /* DiscoveryComponent */],
                __WEBPACK_IMPORTED_MODULE_44__jobs_my_jobs_my_jobs_component__["a" /* MyJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__jobs_companies_network_companies_network_component__["a" /* CompaniesNetworkComponent */],
                __WEBPACK_IMPORTED_MODULE_46__jobs_post_job_post_job_component__["a" /* PostJobComponent */],
                __WEBPACK_IMPORTED_MODULE_47__jobs_discovery_find_job_find_job_component__["a" /* FindJobComponent */],
                __WEBPACK_IMPORTED_MODULE_48__social_adz_adz_component__["a" /* AdzComponent */],
                __WEBPACK_IMPORTED_MODULE_49__jobs_job_detail_job_detail_component__["a" /* JobDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_50__dating_dating_discover_dating_discover_component__["a" /* DatingDiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_51__dating_special_someone_special_someone_component__["a" /* SpecialSomeoneComponent */],
                __WEBPACK_IMPORTED_MODULE_52__dating_dating_profile_dating_profile_component__["a" /* DatingProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_53__dating_dating_request_dating_request_component__["a" /* DatingRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_54__dating_dating_discover_find_date_find_date_component__["a" /* FindDateComponent */],
                __WEBPACK_IMPORTED_MODULE_55__dating_dating_discover_single_date_single_date_component__["a" /* SingleDateComponent */],
                __WEBPACK_IMPORTED_MODULE_56__q_a_ask_question_ask_question_component__["a" /* AskQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_57__q_a_list_question_list_question_component__["a" /* ListQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_58__q_a_area_interest_area_interest_component__["a" /* AreaInterestComponent */],
                __WEBPACK_IMPORTED_MODULE_59__q_a_single_question_single_question_component__["a" /* SingleQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_32__social_stream_stream_component__["a" /* StreamComponent */],
                __WEBPACK_IMPORTED_MODULE_60__reviews_popular_events_popular_events_component__["a" /* PopularEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_61__reviews_review_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_62__reviews_review_interest_review_interest_component__["a" /* ReviewInterestComponent */],
                __WEBPACK_IMPORTED_MODULE_63__reviews_review_stream_review_stream_component__["a" /* ReviewStreamComponent */],
                __WEBPACK_IMPORTED_MODULE_64__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_65__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_69__social_photo_photomodel_photomodel_component__["a" /* PhotomodelComponent */],
                __WEBPACK_IMPORTED_MODULE_70__flashmessage_flashmessage_component__["a" /* FlashmessageComponent */],
                __WEBPACK_IMPORTED_MODULE_71__videomodel_videomodel_component__["a" /* VideomodelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__social_social_routing__["a" /* socialRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__jobs_jobs_routing__["a" /* jobRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__dating_dating_routing__["a" /* datingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__q_a_q_a_routing__["a" /* qaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__reviews_review_routing__["a" /* reviewRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* appRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_68_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */],
                __WEBPACK_IMPORTED_MODULE_10_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_11_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_12_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_13_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_14_ngx_uploader__["NgUploaderModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_66__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_67__auth_service_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/app.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloggerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BloggerComponent = (function () {
    function BloggerComponent(appService) {
        this.appService = appService;
    }
    BloggerComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('blogger');
    };
    BloggerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blogger',
            template: __webpack_require__(873),
            styles: [__webpack_require__(819)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], BloggerComponent);
    return BloggerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/blogger.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildTabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildTabsComponent = (function () {
    function ChildTabsComponent(appService) {
        this.appService = appService;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChildTabsComponent.prototype.clicked = function (value) {
        this.update.emit({ newValue: value });
    };
    ChildTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.childTab.subscribe(function (data) {
            _this.childTab = data;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ChildTabsComponent.prototype, "childTabs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ChildTabsComponent.prototype, "update", void 0);
    ChildTabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'child-tabs',
            template: __webpack_require__(874),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], ChildTabsComponent);
    return ChildTabsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/child-tabs.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindDateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindDateComponent = (function () {
    function FindDateComponent() {
    }
    FindDateComponent.prototype.formSubmit = function (form) {
        console.log(JSON.stringify(form.value));
    };
    FindDateComponent.prototype.ngOnInit = function () {
    };
    FindDateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'find-date',
            template: __webpack_require__(876),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [])
    ], FindDateComponent);
    return FindDateComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/find-date.component.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleDateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleDateComponent = (function () {
    function SingleDateComponent(appService) {
        this.appService = appService;
        this.url = "";
        this.special = false;
        this.sentRequest = false;
        this.receivedRequest = false;
    }
    SingleDateComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.dates = data;
        });
    };
    SingleDateComponent.prototype.albumClick = function (value) {
        console.log(value);
    };
    SingleDateComponent.prototype.profileClick = function (value) {
    };
    SingleDateComponent.prototype.interested = function (value) { };
    SingleDateComponent.prototype.mayBe = function (value) { };
    SingleDateComponent.prototype.No = function (value) { };
    SingleDateComponent.prototype.sendRequest = function (value) { };
    SingleDateComponent.prototype.maybeLater = function (value) { };
    SingleDateComponent.prototype.block = function (value) { };
    SingleDateComponent.prototype.cancelRequest = function (value) { };
    SingleDateComponent.prototype.acceptRequest = function (value) { };
    SingleDateComponent.prototype.cancel = function (value) { };
    SingleDateComponent.prototype.blockPermanentely = function (value) { };
    SingleDateComponent.prototype.ngOnInit = function () {
        this.getContent(this.url);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleDateComponent.prototype, "url", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleDateComponent.prototype, "special", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleDateComponent.prototype, "sentRequest", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleDateComponent.prototype, "receivedRequest", void 0);
    SingleDateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-date',
            template: __webpack_require__(877),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], SingleDateComponent);
    return SingleDateComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/single-date.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dating_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dating_discover_dating_discover_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__special_someone_special_someone_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dating_profile_dating_profile_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dating_request_dating_request_component__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var datingRoutes = [
    {
        path: 'dating',
        component: __WEBPACK_IMPORTED_MODULE_3__dating_component__["a" /* DatingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'discovery',
                pathMatch: 'full'
            },
            {
                path: 'discovery',
                component: __WEBPACK_IMPORTED_MODULE_4__dating_discover_dating_discover_component__["a" /* DatingDiscoverComponent */]
            },
            {
                path: 'specialsomeone',
                component: __WEBPACK_IMPORTED_MODULE_5__special_someone_special_someone_component__["a" /* SpecialSomeoneComponent */]
            },
            {
                path: 'datingprofile',
                component: __WEBPACK_IMPORTED_MODULE_6__dating_profile_dating_profile_component__["a" /* DatingProfileComponent */]
            },
            {
                path: 'datingrequests',
                component: __WEBPACK_IMPORTED_MODULE_7__dating_request_dating_request_component__["a" /* DatingRequestComponent */]
            }
        ]
    },
];
var datingRoutingModule = (function () {
    function datingRoutingModule() {
    }
    datingRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(datingRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], datingRoutingModule);
    return datingRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/dating.routing.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashmessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashmessageComponent = (function () {
    function FlashmessageComponent() {
        this.success = false;
        this.fail = true;
        this.close = false;
    }
    FlashmessageComponent.prototype.closeMessage = function () {
        this.close = true;
    };
    FlashmessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FlashmessageComponent.prototype, "content", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FlashmessageComponent.prototype, "success", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FlashmessageComponent.prototype, "fail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FlashmessageComponent.prototype, "close", void 0);
    FlashmessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-flash',
            template: __webpack_require__(882),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], FlashmessageComponent);
    return FlashmessageComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/flashmessage.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoCompleteComponent = (function () {
    function AutoCompleteComponent(appService) {
        this.appService = appService;
        this.filteredList = [];
        this.query = '';
    }
    AutoCompleteComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.searchs = data;
        });
    };
    AutoCompleteComponent.prototype.filter = function () {
        var _this = this;
        if (this.query != "") {
            this.filteredList = this.searchs.filter(function (search) {
                return search.value.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
            });
        }
        else {
            this.filteredList = [];
        }
    };
    AutoCompleteComponent.prototype.ngOnInit = function () {
        var url = '../../../search.json';
        this.getContent(url);
    };
    AutoCompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'auto-complete',
            template: __webpack_require__(883),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/auto-complete.component.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.isLoading = true;
        this.error = false;
        this.notifi = [];
        this.miniMenu = false;
        this.mobile = false;
    }
    HeaderComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.user = data;
        }, function (err) { _this.isLoading = false; _this.error = true; }, function () { _this.isLoading = false; });
    };
    HeaderComponent.prototype.logout = function () {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('token');
        this.router.navigate(['login']);
        this.appService.changeLogin(false);
        location.reload();
    };
    HeaderComponent.prototype.menuToggle = function () {
        this.miniMenu = !this.miniMenu;
        this.appService.changeMenu(this.miniMenu);
    };
    HeaderComponent.prototype.mobileSearch = function () {
        this.mobile = true;
    };
    HeaderComponent.prototype.cancleSearch = function () {
        this.mobile = false;
    };
    HeaderComponent.prototype.gotoSignup = function () {
        this.router.navigate(['signup']);
    };
    HeaderComponent.prototype.gotoSignin = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = '../../user.json';
        this.getContent(url);
        this.appService.emitter.subscribe(function (data) {
            _this.miniMenu = data;
        });
        this.appService.user.subscribe(function (data) {
            _this.username = data;
        });
        this.username = window.localStorage.getItem('username');
        this.appService.Login.subscribe(function (data) {
            _this.login = data;
        });
        this.appService.Sign.subscribe(function (data) {
            _this.sign = data;
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-header',
            template: __webpack_require__(884),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/header.component.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifiComponent = (function () {
    function NotifiComponent() {
    }
    NotifiComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NotifiComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NotifiComponent.prototype, "value", void 0);
    NotifiComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notifi',
            template: __webpack_require__(885),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotifiComponent);
    return NotifiComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/notifi.component.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return educational; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return experience; });
var personal = (function () {
    function personal() {
    }
    return personal;
}());
var educational = (function () {
    function educational() {
    }
    return educational;
}());
var experience = (function () {
    function experience() {
    }
    return experience;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/formData.interface.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindJobComponent = (function () {
    function FindJobComponent() {
        this.formValid = false;
        this.value = false;
        this.searchJob = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = ['(cities)'];
        this.selectOptions = [
            {
                title: "Month",
                value: "month"
            },
            {
                title: "Today",
                value: "today"
            },
            {
                title: "Agenda",
                value: "agenda"
            }
        ];
    }
    FindJobComponent.prototype.getAddress = function (event) {
        this.address = event.address_components[0].long_name;
    };
    FindJobComponent.prototype.onSubmit = function (form) {
        form.value.location = this.address;
        this.searchJob.emit({ cred: form.value });
    };
    FindJobComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], FindJobComponent.prototype, "searchJob", void 0);
    FindJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'find-job',
            template: __webpack_require__(888),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], FindJobComponent);
    return FindJobComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/find-job.component.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobDetailComponent = (function () {
    function JobDetailComponent(appService) {
        this.appService = appService;
        this.applied = false;
        this.loading = true;
        this.error = false;
    }
    JobDetailComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.jobs = data.jobs;
            console.log(_this.jobs);
        }, function (err) { _this.error = true; _this.loading = false; }, function () { _this.loading = false; });
    };
    JobDetailComponent.prototype.ngOnInit = function () {
        this.getContent(this.Url);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], JobDetailComponent.prototype, "Url", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], JobDetailComponent.prototype, "applied", void 0);
    JobDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'job-detail',
            template: __webpack_require__(889),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], JobDetailComponent);
    return JobDetailComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/job-detail.component.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discovery_discovery_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_jobs_my_jobs_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__companies_network_companies_network_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_job_post_job_component__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jobRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var jobRoutes = [
    {
        path: 'jobs',
        component: __WEBPACK_IMPORTED_MODULE_3__jobs_component__["a" /* JobsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'discovery',
                pathMatch: 'full'
            },
            {
                path: 'discovery',
                component: __WEBPACK_IMPORTED_MODULE_4__discovery_discovery_component__["a" /* DiscoveryComponent */]
            },
            {
                path: 'myjobs',
                component: __WEBPACK_IMPORTED_MODULE_5__my_jobs_my_jobs_component__["a" /* MyJobsComponent */]
            },
            {
                path: 'resumebuilder',
                component: __WEBPACK_IMPORTED_MODULE_6__companies_network_companies_network_component__["a" /* CompaniesNetworkComponent */]
            },
            {
                path: 'postajob',
                component: __WEBPACK_IMPORTED_MODULE_7__post_job_post_job_component__["a" /* PostJobComponent */]
            }
        ]
    },
];
var jobRoutingModule = (function () {
    function jobRoutingModule() {
    }
    jobRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(jobRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], jobRoutingModule);
    return jobRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/jobs.routing.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.loading = true;
        this.error = false;
        this.height = 500;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.margin = (this.height - 30) / 2;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LoaderComponent.prototype, "loading", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LoaderComponent.prototype, "error", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LoaderComponent.prototype, "height", void 0);
    LoaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-loader',
            template: __webpack_require__(893),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoaderComponent);
    return LoaderComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/loader.component.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.panelHide = false;
    }
    MenuComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.menus = data;
        });
    };
    MenuComponent.prototype.menuClick = function (value) {
        this.clickMenu = value;
        if (value.indexOf(" ")) {
            while (value.indexOf(" ") > -1) {
                value = value.replace(" ", "");
            }
        }
        if (value == "q&a") {
            value = "q-a";
        }
        this.router.navigate([value]);
    };
    MenuComponent.prototype.gettingPanel = function () {
        var _this = this;
        this.appService.emitter.subscribe(function (data) {
            _this.panelHide = data;
        });
    };
    MenuComponent.prototype.gettingMenuName = function () {
        var _this = this;
        this.appService.Title.subscribe(function (data) {
            _this.clickMenu = data;
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        var url = '../../menu.json';
        this.getContent(url);
        this.gettingPanel();
        this.gettingMenuName();
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-menu',
            template: __webpack_require__(896),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/menu.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__q_a_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ask_question_ask_question_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_question_list_question_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_interest_area_interest_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_question_single_question_component__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qaRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var qaRoutes = [
    {
        path: 'q-a',
        component: __WEBPACK_IMPORTED_MODULE_3__q_a_component__["a" /* QAComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'askquestion',
                pathMatch: 'full'
            },
            {
                path: 'askquestion',
                component: __WEBPACK_IMPORTED_MODULE_4__ask_question_ask_question_component__["a" /* AskQuestionComponent */]
            },
            {
                path: 'myquestions',
                component: __WEBPACK_IMPORTED_MODULE_5__list_question_list_question_component__["a" /* ListQuestionComponent */]
            },
            {
                path: 'answerquestions',
                component: __WEBPACK_IMPORTED_MODULE_6__area_interest_area_interest_component__["a" /* AreaInterestComponent */]
            },
            {
                path: 'singleQuestion/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__single_question_single_question_component__["a" /* SingleQuestionComponent */]
            }
        ]
    },
];
var qaRoutingModule = (function () {
    function qaRoutingModule() {
    }
    qaRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(qaRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], qaRoutingModule);
    return qaRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/q-a.routing.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popular_events_popular_events_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__review_interest_review_interest_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review_stream_review_stream_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reviewRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var reviewRoutes = [
    {
        path: 'reviews',
        component: __WEBPACK_IMPORTED_MODULE_3__reviews_component__["a" /* ReviewsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'stream',
                pathMatch: 'full'
            },
            {
                path: 'stream',
                component: __WEBPACK_IMPORTED_MODULE_7__review_stream_review_stream_component__["a" /* ReviewStreamComponent */]
            },
            {
                path: 'popularevents',
                component: __WEBPACK_IMPORTED_MODULE_4__popular_events_popular_events_component__["a" /* PopularEventsComponent */]
            },
            {
                path: 'review',
                component: __WEBPACK_IMPORTED_MODULE_5__review_review_component__["a" /* ReviewComponent */]
            },
            {
                path: 'areasofinterest',
                component: __WEBPACK_IMPORTED_MODULE_6__review_interest_review_interest_component__["a" /* ReviewInterestComponent */]
            }
        ]
    },
];
var reviewRoutingModule = (function () {
    function reviewRoutingModule() {
    }
    reviewRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(reviewRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], reviewRoutingModule);
    return reviewRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/review.routing.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPostComponent = (function () {
    function AddPostComponent(fb) {
        this.fb = fb;
        this.newPost = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.post = fb.group({
            text: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    AddPostComponent.prototype.onSubmit = function () {
        this.newPost.emit({ update: this.post.value.text });
        this.post.reset();
    };
    AddPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AddPostComponent.prototype, "newPost", void 0);
    AddPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-post',
            template: __webpack_require__(909),
            styles: [__webpack_require__(855)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object])
    ], AddPostComponent);
    return AddPostComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/add-post.component.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdzComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdzComponent = (function () {
    function AdzComponent() {
    }
    AdzComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AdzComponent.prototype, "adz", void 0);
    AdzComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-adz',
            template: __webpack_require__(910),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdzComponent);
    return AdzComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/adz.component.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendSearchComponent = (function () {
    function FriendSearchComponent() {
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FriendSearchComponent.prototype.onSubmit = function (form) {
        this.results.emit({ search: form.value });
    };
    FriendSearchComponent.prototype.inputChange = function (event) {
        if (event.target.value == '') {
            this.results.emit({ search: event.target.value });
        }
    };
    FriendSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], FriendSearchComponent.prototype, "results", void 0);
    FriendSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'friend-search',
            template: __webpack_require__(911),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [])
    ], FriendSearchComponent);
    return FriendSearchComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/friend-search.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_post_interface__ = __webpack_require__(648);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrandChildTabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GrandChildTabsComponent = (function () {
    function GrandChildTabsComponent(appService) {
        this.appService = appService;
        this.tabsHeads = [];
        this.newPost = new __WEBPACK_IMPORTED_MODULE_4__stream_post_interface__["a" /* newPost */]();
        this.uploadUrl = "http://35.166.70.82/posts/add";
        this.error = false;
        this.loading = true;
    }
    GrandChildTabsComponent.prototype.clicked = function (value) {
        this.posts = [];
        this.clickedTab == value.title;
        this.getMaterial(this.tabsHeads[0].user, this.tabsHeads[0].post);
    };
    GrandChildTabsComponent.prototype.getMaterial = function (sUrl, pUrl) {
        var _this = this;
        var subscr = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(this.appService.getContent(sUrl), this.appService.getContent(pUrl)).subscribe(function (data) {
            _this.user = data[0];
            _this.posts = data[1].posts;
            _this.userImg = _this.user.img;
            _this.userImg = _this.userImg.toString().replace("./", '');
            _this.userImg = '../../../' + _this.userImg;
        }, function (err) { _this.error = true; _this.loading = false; }, function () { _this.loading = false; });
    };
    GrandChildTabsComponent.prototype.updatePost = function ($event) {
        this.newPost.body = $event.update;
        this.newPost.user.full_name = window.localStorage.getItem('username');
        this.posts.push(this.newPost);
        this.appService.uploadPosts(this.uploadUrl, $event.update).subscribe(function (data) {
            console.log(data);
        });
    };
    GrandChildTabsComponent.prototype.ngOnInit = function () {
        this.clickedTab = this.tabsHeads[0].title;
        this.getMaterial(this.tabsHeads[0].user, this.tabsHeads[0].post);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], GrandChildTabsComponent.prototype, "tabsHeads", void 0);
    GrandChildTabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grand-child-tabs',
            template: __webpack_require__(913),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], GrandChildTabsComponent);
    return GrandChildTabsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/grand-child-tabs.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return album; });
var album = (function () {
    function album() {
    }
    return album;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/album.interface.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoChildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoChildComponent = (function () {
    function PhotoChildComponent(appService) {
        this.appService = appService;
        this.clickedTab = 'photo';
    }
    PhotoChildComponent.prototype.clicked = function (value) {
        this.clickedTab = value;
    };
    PhotoChildComponent.prototype.photoClicked = function (value) {
        this.singlePhotoHere(value);
    };
    PhotoChildComponent.prototype.singlePhotoHere = function (value) {
        this.singlePhoto = value;
        this.prevId = this.photoIds[this.photoIds.indexOf(value.id) - 1];
        this.nextId = this.photoIds[this.photoIds.indexOf(value.id) + 1];
    };
    PhotoChildComponent.prototype.updatePhoto = function ($event) {
        var id = $event.newId;
        var i = 0;
        while (this.photos[i]) {
            if (this.photos[i].id === id) {
                this.singlePhotoHere(this.photos[i]);
            }
            i++;
        }
    };
    PhotoChildComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotoChildComponent.prototype, "tabsDatas", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotoChildComponent.prototype, "photos", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotoChildComponent.prototype, "albums", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotoChildComponent.prototype, "photoIds", void 0);
    PhotoChildComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-child',
            template: __webpack_require__(914),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], PhotoChildComponent);
    return PhotoChildComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/photo-child.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotomodelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotomodelComponent = (function () {
    function PhotomodelComponent() {
        this.newId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PhotomodelComponent.prototype.nextPhoto = function (id) {
        this.newId.emit({ newId: id });
    };
    PhotomodelComponent.prototype.move = function (event) {
        console.log(event);
    };
    PhotomodelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotomodelComponent.prototype, "photo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotomodelComponent.prototype, "prevId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PhotomodelComponent.prototype, "nextId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PhotomodelComponent.prototype, "newId", void 0);
    PhotomodelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-photomodel',
            template: __webpack_require__(916),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotomodelComponent);
    return PhotomodelComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/photomodel.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendedComponent = (function () {
    function RecommendedComponent(appService) {
        this.appService = appService;
        this.recUrl = '';
        this.jobs = false;
        this.dating = false;
    }
    RecommendedComponent.prototype.getContent = function (url) {
        var _this = this;
        this.appService.getContent(url).subscribe(function (data) {
            _this.recommends = data;
        });
    };
    RecommendedComponent.prototype.ngOnInit = function () {
        this.getContent(this.recUrl);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RecommendedComponent.prototype, "recUrl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RecommendedComponent.prototype, "jobs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RecommendedComponent.prototype, "dating", void 0);
    RecommendedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-recommended',
            template: __webpack_require__(918),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], RecommendedComponent);
    return RecommendedComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/recommended.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(appService) {
        this.appService = appService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.appService.changeTab('settings');
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(919),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/settings.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_stream_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_photo_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__videos_videos_component__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return socialRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var socialRoutes = [
    {
        path: 'social',
        component: __WEBPACK_IMPORTED_MODULE_3__social_component__["a" /* SocialComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: '',
                redirectTo: 'stream',
                pathMatch: 'full'
            },
            {
                path: 'stream',
                component: __WEBPACK_IMPORTED_MODULE_4__stream_stream_component__["a" /* StreamComponent */]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */]
            },
            {
                path: 'friends',
                component: __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__["a" /* FriendsComponent */]
            },
            {
                path: 'photos',
                component: __WEBPACK_IMPORTED_MODULE_7__photo_photo_component__["a" /* PhotoComponent */]
            },
            {
                path: 'videos',
                component: __WEBPACK_IMPORTED_MODULE_8__videos_videos_component__["a" /* VideosComponent */]
            }
        ]
    },
];
var socialRoutingModule = (function () {
    function socialRoutingModule() {
    }
    socialRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(socialRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], socialRoutingModule);
    return socialRoutingModule;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/social.routing.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newPost; });
var post = (function () {
    function post() {
    }
    return post;
}());
var newPost = (function () {
    function newPost() {
        this.user = new post();
    }
    return newPost;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/post.interface.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetsComponent = (function () {
    function TweetsComponent(appService) {
        this.appService = appService;
    }
    TweetsComponent.prototype.ngOnInit = function () {
        this.appService.menuTitle('tweets');
    };
    TweetsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tweets',
            template: __webpack_require__(923),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], TweetsComponent);
    return TweetsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/tweets.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideomodelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideomodelComponent = (function () {
    function VideomodelComponent() {
    }
    VideomodelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], VideomodelComponent.prototype, "content", void 0);
    VideomodelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-videomodel',
            template: __webpack_require__(924),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideomodelComponent);
    return VideomodelComponent;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/videomodel.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/environment.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/polyfills.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "#main.menuHide{\r\n  margin-left: 0;\r\n}\r\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "li{\r\n  float: left;\r\n  margin-bottom: -1px;\r\n  margin-right: 4%;\r\n}\r\nli.active a span{\r\n  background: none;\r\n  border: 1px solid transparent;\r\n  box-shadow: none;\r\n  color: #d32a47;\r\n  cursor: pointer;\r\n}\r\nli a{\r\n  font-family: 'AvenirNextLTPro-Demi';\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  padding: 9px 5px;\r\n  cursor: pointer;\r\n  float: left;\r\n}\r\nli.active a .Ione{\r\n  display: none;\r\n}\r\nli.active a .Itwo{\r\n  display: inline-block;\r\n}\r\nli a .Ione{\r\n  display: inline-block;\r\n}\r\nli a .Itwo{\r\n  display: none;\r\n}\r\nli a img{\r\n  margin-right: 14px;\r\n  margin-top: -1px;\r\n}\r\nli a span{\r\n  color: #333;\r\n  float: left;\r\n}\r\nli a:hover{\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "\r\n\r\na, button, input {\r\n\t-ms-touch-action: none!important\r\n}\r\n.uneditable-input:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus {\r\n\toutline: 0;\r\n\tbox-shadow: none!important\r\n}\r\n.form-control, .input-lg, .input-sm, .input-xs {\r\n\tborder-radius: 0!important;\r\n\t-webkit-border-radius: 0!important;\r\n\t-moz-border-radius: 0!important\r\n}\r\n.input-xs {\r\n\theight: 24px;\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11px;\r\n\tline-height: 1.5\r\n}\r\n.btn-xs {\r\n\tpadding: 1px 5px\r\n}\r\n.btn-sm {\r\n\tpadding: 6px 10px 5px\r\n}\r\n.btn-lg {\r\n\tpadding: 10px 16px\r\n}\r\n.no-space {\r\n\tmargin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n\tmargin: 0!important;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0\r\n}\r\n\r\n.row-seperator-header {\r\n\tmargin: 15px 14px 20px;\r\n\tborder-bottom: none;\r\n\tdisplay: block;\r\n\tcolor: #646464;\r\n\tfont-size: 20px;\r\n\tfont-weight: 400\r\n}\r\n.center-canvas, .center-child-canvas>canvas {\r\n\tdisplay: block!important;\r\n\tmargin: 0 auto!important\r\n}\r\n.bordered {\r\n\tborder: 1px solid rgba(0,0,0,.2)\r\n}\r\n.bordered:hover {\r\n\tborder: 1px solid rgba(0,0,0,.4)\r\n}\r\naside {\r\n\tdisplay: block;\r\n\tbackground: #2f323c!important;\r\n\tmin-height: 100%\r\n}\r\n.form-control {\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.form hr {\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tborder-color: rgba(0,0,0,.1);\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px\r\n}\r\n.form fieldset {\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tbackground: rgba(255,255,255,.9);\r\n\tposition: relative\r\n}\r\nfieldset {\r\n\tposition: relative\r\n}\r\n.form-actions {\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(249,249,249,.9);\r\n\tmargin-top: 25px;\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tmargin-bottom: -13px;\r\n\ttext-align: right\r\n}\r\n.no-padding .form .form-actions {\r\n\tmargin: 0;\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(248,248,248,.9);\r\n\ttext-align: right;\r\n\tmargin-top: 25px\r\n}\r\n.bootstrap-duallistbox-container label, .form header, legend {\r\n\tdisplay: block;\r\n\tpadding: 8px 0;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.2);\r\n\tbackground: #fff;\r\n\tfont-size: 16px;\r\n\tfont-weight: 300;\r\n\tcolor: #222;\r\n\tmargin: 25px 0 20px\r\n}\r\n.no-padding .form header {\r\n\tmargin: 25px 14px 0\r\n}\r\n.form header:first-child {\r\n\tmargin-top: 10px\r\n}\r\nlegend {\r\n\tfont-weight: 400;\r\n\tmargin-top: 0;\r\n\tbackground: 0 0\r\n}\r\n.input-group-addon {\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\ttransition: background-color .3s;\r\n\t-o-transition: background-color .3s;\r\n\t-ms-transition: background-color .3s;\r\n\t-moz-transition: background-color .3s;\r\n\t-webkit-transition: background-color .3s\r\n}\r\n.input-group-addon .fa {\r\n\tfont-size: 14px\r\n}\r\n.input-group-addon .fa-2x, .input-group-addon .fa-lg {\r\n\tfont-size: 2em\r\n}\r\n.input-group-addon .fa-3x, .input-group-addon .fa-4x, .input-group-addon .fa-5x {\r\n\tfont-size: 30px\r\n}\r\ninput[type=text]:focus+.input-group-addon {\r\n\tborder-color: #0091d9;\r\n\tbackground-color: #72a0ce;\r\n\tcolor: #fff\r\n}\r\n.form .form-group:last-child, .form .form-group:last-child .note, .form fieldset .form-group:last-child, .form fieldset .form-group:last-child .note {\r\n\tmargin-bottom: 0\r\n}\r\n.note {\r\n\tmargin-top: 6px;\r\n\tpadding: 0 1px;\r\n\tfont-size: 11px;\r\n\tline-height: 15px;\r\n\tcolor: #999\r\n}\r\n.input-icon-right {\r\n\tposition: relative\r\n}\r\n.input-icon-left>i, .input-icon-right>i {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 30%;\r\n\tfont-size: 16px;\r\n\tcolor: #bfbfbf\r\n}\r\n.input-icon-left>i {\r\n\tright: auto;\r\n\tleft: 24px\r\n}\r\n.input-icon-right .form-control {\r\n\tpadding-right: 27px\r\n}\r\n.input-icon-left .form-control {\r\n\tpadding-left: 29px\r\n}\r\ninput[type=color].ui-autocomplete-loading, input[type=date].ui-autocomplete-loading, input[type=datetime-local].ui-autocomplete-loading, input[type=datetime].ui-autocomplete-loading, input[type=email].ui-autocomplete-loading, input[type=month].ui-autocomplete-loading, input[type=number].ui-autocomplete-loading, input[type=password].ui-autocomplete-loading, input[type=search].ui-autocomplete-loading, input[type=tel].ui-autocomplete-loading, input[type=text].ui-autocomplete-loading, input[type=time].ui-autocomplete-loading, input[type=url].ui-autocomplete-loading, input[type=week].ui-autocomplete-loading {\r\n\tbackground-image: url(../img/select2-spinner.gif)!important;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: 99% 50%;\r\n\tpadding-right: 27px\r\n}\r\n.input-group-addon .checkbox, .input-group-addon .radio {\r\n\tmin-height: 0;\r\n\tmargin-right: 0!important;\r\n\tpadding-top: 0\r\n}\r\n.input-group-addon label input[type=checkbox].checkbox+span, .input-group-addon label input[type=checkbox].checkbox+span:before, .input-group-addon label input[type=radio].radiobox+span, .input-group-addon label input[type=radio].radiobox+span:before {\r\n\tmargin-right: 0\r\n}\r\n.input-group-addon .onoffswitch, .input-group-addon .onoffswitch-label {\r\n\tmargin: 0\r\n}\r\n.timeline-seperator {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #999;\r\n\tmargin: 20px 0 0\r\n}\r\n.timeline-seperator>:first-child {\r\n\tpadding: 4px 5px;\r\n\tborder: 1px dashed rgba(0,0,0,.1);\r\n\tbackground: #fff;\r\n\tfont-size: 11px;\r\n\tborder-radius: 4px\r\n}\r\n.timeline-seperator .btn, .timeline-seperator .btn+.dropdown-menu {\r\n\tmargin-right: 15px\r\n}\r\n.timeline-seperator:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tmargin: 0 20px;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.1);\r\n\tmargin-top: -8px\r\n}\r\n.alert {\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 0;\r\n\tcolor: #675100;\r\n\tborder-width: 0;\r\n\tborder-left-width: 5px;\r\n\tpadding: 10px;\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.alert .close {\r\n\ttop: 0;\r\n\tright: -5px;\r\n\tline-height: 20px\r\n}\r\n.alert-heading {\r\n\tfont-weight: 600\r\n}\r\n.alert-danger {\r\n\tborder-color: #953b39;\r\n\tcolor: #fff;\r\n\tbackground-color: #c26565;\r\n\ttext-shadow: none\r\n}\r\n.alert-warning {\r\n\tborder-color: #dfb56c;\r\n\tcolor: #826430;\r\n\tbackground-color: #efe1b3\r\n}\r\n.alert-success {\r\n\tborder-color: #8ac38b;\r\n\tcolor: #356635;\r\n\tbackground-color: #cde0c4\r\n}\r\n.alert-info {\r\n\tborder-color: #9cb4c5;\r\n\tcolor: #305d8c;\r\n\tbackground-color: #d6dde7\r\n}\r\n.well {\r\n\tbackground-color: #fbfbfb;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 0 1px 1px #ececec;\r\n\t-webkit-box-shadow: 0 1px 1px #ececec;\r\n\t-moz-box-shadow: 0 1px 1px #ececec;\r\n\tposition: relative\r\n}\r\n.well.well-clean {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent\r\n}\r\n.well.well-glass {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground-color: rgba(255,255,255,.25);\r\n\tcolor: #fff\r\n}\r\n.well.well-light {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #e2e2e2\r\n}\r\n.widget-body .well {\r\n\tmargin-bottom: 0\r\n}\r\n.well.transparent {\r\n\tborder: none!important;\r\n\tbackground: none!important\r\n}\r\n.jarviswidget.well.transparent>div, .jarviswidget.well.transparent>div .widget-body {\r\n\tpadding: 0!important\r\n}\r\n.well[class*=\" bg-\"], .well[class^=bg-] {\r\n\tborder: 1px solid #555!important\r\n}\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n/**/\r\n\r\n#project-selector, .project-selector {\r\n\tmax-width: 97%;\r\n\twhite-space: nowrap;\r\n\tbackground: 0 0;\r\n\tborder: none;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n\tcolor: #555;\r\n\tfont-size: 14px;\r\n\tcursor: pointer\r\n}\r\n#project-selector:hover, .project-selector:hover {\r\n\tcolor: #333\r\n}\r\n\r\n.pozrel {\r\n    position: relative!important;\r\n}\r\n.w100 {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.selecter .selecter-selected {\r\n    background: url(../img/dropAro.png) no-repeat 95% 18px;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    display: block;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-overflow: clip;\r\n    z-index: 2;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    height: 43px;\r\n    float: left;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    padding: 12px 18px 10px;\r\n    color: #000;\r\n    font-size: 14px;\r\n    border: 1px solid #e7e7e7;\r\n    box-shadow: none;\r\n}\r\n*, :after, :before {\r\n    box-sizing: border-box;\r\n}\r\n/*/////*/\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n.dating-discover{\r\n    float: left;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n}\r\n@media (min-width:600px) and (max-width:767px){\r\n\t.dating-discover .boxIn_lft{\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n@media (min-width:768px) and (max-width:991px){\r\n\t.dating-discover .boxIn_lft{\r\n\t\twidth: 100%;\r\n\t}\r\n}"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = ".form-group.women{\r\n    float: left;\r\n    width: 40%;\r\n    margin: 10px 1% 0 0;\r\n}\r\nselect{\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    height: 43px;\r\n    outline: none;\r\n    padding: 0 10px;\r\n    font-size: 15px;\r\n}\r\n.postal-code{\r\n    width: 27%;\r\n    margin-right: 1%;\r\n    float: left;\r\n}\r\n.postal-code input{\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    background: #fff;\r\n    height: 43px;\r\n    resize: none;\r\n    margin: 10px 0 0 0;\r\n    font-size: 14px;\r\n    font-family: 'AvenirNextLTW01RegularRegular';\r\n    letter-spacing: .9px;\r\n    padding: 10px;\r\n    border: none;\r\n    width: 100%;\r\n}\r\n.age-here{\r\n    float: left;\r\n    width: 31%;\r\n}\r\n.age-here .firstAge{\r\n    margin: 10px 1% 0 0;\r\n    width: 39%;\r\n    float: left;\r\n}\r\n.age-here p{\r\n    margin: 20px 10px 0;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    float: left;\r\n}\r\n.age-here .lastAge{\r\n    margin: 10px 0 0 0;\r\n    width: 40%;\r\n    float: left;\r\n}\r\n.online.form-group, .potos.form-group{\r\n    float: left;\r\n    color: #fff;\r\n    width: 13%;\r\n    margin-bottom: 0;\r\n}\r\n.online.form-group input, .potos.form-group input{\r\n    position: absolute;\r\n    z-index: -1000;\r\n    left: -1000px;\r\n    overflow: hidden;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    width: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n.online.form-group label, .potos.form-group label{\r\n    padding-left: 30px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    line-height: 24px;\r\n    background-repeat: no-repeat;\r\n    background-position: 0 0;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: url(../../../../assets/img/csscheckbox.png);\r\n    background-repeat: no-repeat;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.online.form-group input[type=checkbox]:checked + label, .potos.form-group input[type=checkbox]:checked + label {\r\n    background-position: 0 -24px;\r\n}\r\n.submit-button{\r\n    float: left;\r\n    width: 17%;\r\n    text-align: right;\r\n}\r\n.submit-button button{\r\n    float: right;\r\n    margin: 0;\r\n    line-height: 18px;\r\n    width: 116px;\r\n}\r\n.bs-filterDating .Drop{\r\n    float: left;\r\n    width: 57%;\r\n    margin-top: 0;\r\n    margin: 0;\r\n}\r\n.bs-filterDating .Drop .form-group{\r\n    float: right;\r\n    width: 28%;\r\n}\r\n.bs-filterDating .Drop .form-group .col-md-12{\r\n    padding: 0;\r\n}\r\n.bs-filterDating .Drop .form-group select{\r\n    background: inherit;\r\n    color: #70808b!important;\r\n    border: none;\r\n    box-shadow: none!important;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    height: 30px;\r\n}\r\n.submit-button button:hover, .submit-button button:active{\r\n    outline:none;\r\n}\r\n.Drop .form-group{\r\n    margin-bottom: 0;\r\n}\r\n@media (min-width:600px) and (max-width:767px){\r\n    .age-here{\r\n        width: 31%;\r\n    }\r\n    .age-here .firstAge, .age-here .lastAge{\r\n\t\twidth: 35%;\r\n\t}\r\n    .online.form-group{\r\n        width: 19%;\r\n    }\r\n    .potos.form-group{\r\n        width: 25%;\r\n    }\r\n    .bs-filterDating .Drop{\r\n        width: 34%;\r\n    }\r\n    .bs-filterDating .Drop .form-group{\r\n        width: 120px;\r\n    }\r\n    .bs-filterDating .submit-button{\r\n        width: 22%;\r\n    }\r\n    .bs-filterDating .submit-button button{\r\n        width: 100%;\r\n        font-size: 11px;\r\n    }\r\n}\r\n@media (min-width:768px) and (max-width:991px){\r\n    .age-here{\r\n        width: 31%;\r\n    }\r\n    .age-here .firstAge, .age-here .lastAge{\r\n\t\twidth: 35%;\r\n\t}\r\n    .online.form-group{\r\n        width: 19%;\r\n    }\r\n    .potos.form-group{\r\n        width: 25%;\r\n    }\r\n    .bs-filterDating .Drop{\r\n        width: 34%;\r\n    }\r\n    .bs-filterDating .Drop .form-group{\r\n        width: 120px;\r\n    }\r\n    .bs-filterDating .submit-button{\r\n        width: 22%;\r\n    }\r\n    .bs-filterDating .submit-button button{\r\n        width: 100%;\r\n        font-size: 14px;\r\n    }\r\n}"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = " .dating-profile-container {\r\n    float: left;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n}\r\n.dating-profile-container h3{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\n.dating-profile-container>h4 {\r\n    float: left;\r\n}\r\n.profile-picture.profile-info {\r\n    float: left;\r\n}\r\n.user-picture{\r\n    float: left;\r\n    width: 20%;\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form{\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form .form-group{\r\n    float: left;\r\n    width: 50%;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n.update-profile-form .form-group label{\r\n    text-align: left;\r\n    margin-bottom: 15px;\r\n}\r\n.update-profile-form .form-group.full-length{\r\n    width: 100%;\r\n}\r\n.update-profile-form .form-group .input-group{\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form form{\r\n    float: left;\r\n    width: 100%;\r\n    padding-bottom: 25px;\r\n}\r\n.update-profile-form .update-submit{\r\n    padding-right: 15px;\r\n}\r\n.update-profile-form .update-submit button{\r\n    width: auto;\r\n    padding: 1px 15px;\r\n}\r\n.update-profile-form .update-submit button:focus{\r\n    outline: none;\r\n}\r\n.update-profile-form input, .update-profile-form select{\r\n    height: 43px;\r\n}\r\n.update-profile-form input:focus, .update-profile-form select:focus{\r\n    box-shadow: none;\r\n}\r\n/*--*/\r\n.edit-photo {\r\n    padding: 6px 10px;\r\n    border-radius: 3px;\r\n    font-size: 14px;\r\n    float: left;\r\n    margin-left: 0px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "/*===*/\r\n.w100 .nav-tabs li.active a {\r\n    background: none;\r\n    border: 1px solid transparent;\r\n    box-shadow: none;\r\n    color: #d32a47;\r\n    cursor: pointer;\r\n}\r\n.w100 .nav-tabs li a {\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    padding: 9px 5px;\r\n    color: #000;\r\n}"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ".child-tabs{\r\n    width: 100%;\r\n    border: none;\r\n    margin: 0 0 19px;\r\n    margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ".interest-heading, .matchType{\r\n    float: left;\r\n}\r\n.matchType select:focus{\r\n    box-shadow: none;\r\n}"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ".search-result{\r\n  float: left;\r\n  width: 100%;\r\n  background: #fff;\r\n  border: 1px solid #333;\r\n  position: absolute;\r\n  top: 40px;\r\n}\r\ni{\r\n  background: 0 0;\r\n    border: none;\r\n    color: #a4a5a9;\r\n    font-size: 17px;\r\n    height: 30px;\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 6px;\r\n    width: 30px;\r\n    z-index: 2;\r\n}\r\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = ".notifi{\r\n  width: 222px;\r\n}\r\n.notifi notifi{\r\n  float: left;\r\n  width: 74px;\r\n}\r\n.btn-header{\r\n  margin-top: 0;\r\n  padding: 17px 8px;\r\n  cursor: pointer;\r\n}\r\n.btn-header i{\r\n  font-size: 18px;\r\n  color: #fff;\r\n}\r\n.user-detail{\r\n  width: 230px;\r\n}\r\n.header-dropdown-list{\r\n  padding: 0;\r\n  float: left;\r\n  margin-bottom: 0;\r\n}\r\n.header-dropdown-list li a{\r\n  margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ".bs-dropdown{\r\n  padding: 10px;\r\n}\r\nul{\r\n  padding: 5px;\r\n  list-style: none;\r\n  float: right;\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\nul.bs-dropdown{\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 0;\r\n}\r\ni{\r\n  font-size: 19px;\r\n  color: #9b9c9f;\r\n  margin: 13px 20px 10px!important;\r\n}\r\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "\r\n.edit-photo{\r\n\tpadding: 6px 10px;\r\n    border-radius: 3px;\r\n    font-size: 14px;\r\n    float: left;\r\n    margin-left: 5px;\r\n    margin-top: 165px;\r\n}\r\n.profile-picture img{\r\n\tfloat: left;\r\n}\r\na, button, input {\r\n\t-ms-touch-action: none!important\r\n}\r\n.uneditable-input:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus {\r\n\toutline: 0;\r\n\tbox-shadow: none!important\r\n}\r\n.form-control, .input-lg, .input-sm, .input-xs {\r\n\tborder-radius: 0!important;\r\n\t-webkit-border-radius: 0!important;\r\n\t-moz-border-radius: 0!important\r\n}\r\n.input-xs {\r\n\theight: 24px;\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11px;\r\n\tline-height: 1.5\r\n}\r\n.btn-xs {\r\n\tpadding: 1px 5px\r\n}\r\n.btn-sm {\r\n\tpadding: 6px 10px 5px\r\n}\r\n.btn-lg {\r\n\tpadding: 10px 16px\r\n}\r\n.no-space {\r\n\tmargin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n\tmargin: 0!important;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0\r\n}\r\n\r\nh1 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 24px;\r\n\tmargin: 10px 0\r\n}\r\nh1 small {\r\n\tfont-size: 18px;\r\n\tfont-weight: 300;\r\n\tletter-spacing: -1px\r\n}\r\n.lead {\r\n\tfont-size: 19px\r\n}\r\nh2 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 22px;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh3 {\r\n\tdisplay: block;\r\n\tfont-size: 19px;\r\n\tfont-weight: 400;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh4 {\r\n\tline-height: normal\r\n}\r\nh5 {\r\n\tfont-size: 17px;\r\n\tfont-weight: 300;\r\n\tmargin: 10px 0;\r\n\tline-height: normal\r\n}\r\nh6 {\r\n\tfont-size: 15px;\r\n\tmargin: 10px 0;\r\n\tfont-weight: 700;\r\n\tline-height: normal\r\n}\r\n.row-seperator-header {\r\n\tmargin: 15px 14px 20px;\r\n\tborder-bottom: none;\r\n\tdisplay: block;\r\n\tcolor: #646464;\r\n\tfont-size: 20px;\r\n\tfont-weight: 400\r\n}\r\n.center-canvas, .center-child-canvas>canvas {\r\n\tdisplay: block!important;\r\n\tmargin: 0 auto!important\r\n}\r\n.bordered {\r\n\tborder: 1px solid rgba(0,0,0,.2)\r\n}\r\n.bordered:hover {\r\n\tborder: 1px solid rgba(0,0,0,.4)\r\n}\r\naside {\r\n\tdisplay: block;\r\n\tbackground: #2f323c!important;\r\n\tmin-height: 100%\r\n}\r\n\r\n.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: touch;\r\n\toverflow-y: auto;\r\n\theight: 100%;\r\n\tpadding-bottom: 49px\r\n}\r\n.fixed-navigation nav>ul {\r\n\tpadding-right: 15px;\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 114%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll\r\n}\r\n.mobile-detected.fixed-navigation nav>ul {\r\n\tpadding-right: 30px!important\r\n}\r\n.minified.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: none;\r\n\toverflow: visible;\r\n\theight: auto;\r\n\tpadding-bottom: 0\r\n}\r\n.minified.fixed-navigation nav>ul {\r\n\toverflow: visible;\r\n\tpadding-right: 0;\r\n\twidth: 100%\r\n}\r\n\r\n.header-dropdown-list {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0\r\n}\r\n.header-dropdown-list>li {\r\n\tdisplay: inline-block;\r\n\tpadding-right: 5px\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle {\r\n\tmargin-top: 16px;\r\n\tdisplay: block; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; color:#fff;\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle i { margin:0 0 0 8px;}\r\n.smart-accordion-default.panel-group {\r\n\tmargin-bottom: 0\r\n}\r\n.smart-accordion-default.panel-group .panel+.panel {\r\n\tmargin-top: -1px\r\n}\r\n.smart-accordion-default.panel-group .panel-heading {\r\n\tpadding: 0\r\n}\r\n.smart-accordion-default.panel-group .panel-title a {\r\n\tdisplay: block;\r\n\tpadding: 10px 15px;\r\n\ttext-decoration: none!important\r\n}\r\n.panel-group .panel, .smart-accordion-default .panel-heading {\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.smart-accordion-default .panel-default>.panel-heading {\r\n\tbackground-color: #fcfcfc\r\n}\r\n.smart-accordion-default .panel-default {\r\n\tborder-color: #c3c3c3\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>.fa, .smart-accordion-default .panel-title>a>:first-child {\r\n\tdisplay: none\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>:first-child {\r\n\tdisplay: inline-block\r\n}\r\n.no-padding .smart-accordion-default>div {\r\n\tborder-left: none!important;\r\n\tborder-right: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:first-child {\r\n\tborder-top: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:last-child {\r\n\tborder-bottom: none!important\r\n}\r\n\r\n.form-control {\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.form hr {\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tborder-color: rgba(0,0,0,.1);\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px\r\n}\r\n.form fieldset {\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tbackground: rgba(255,255,255,.9);\r\n\tposition: relative\r\n}\r\nfieldset {\r\n\tposition: relative\r\n}\r\n.form-actions {\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(249,249,249,.9);\r\n\tmargin-top: 25px;\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tmargin-bottom: -13px;\r\n\ttext-align: right\r\n}\r\n.well .form-actions {\r\n\tmargin-left: -19px;\r\n\tmargin-right: -19px;\r\n\tmargin-bottom: -19px\r\n}\r\n.well.well-lg .form-actions {\r\n\tmargin-left: -24px;\r\n\tmargin-right: -24px;\r\n\tmargin-bottom: -24px\r\n}\r\n.well.well-sm .form-actions {\r\n\tmargin-left: -9px;\r\n\tmargin-right: -9px;\r\n\tmargin-bottom: -9px\r\n}\r\n.popover-content .form-actions {\r\n\tmargin: 0 -14px -9px;\r\n\tborder-radius: 0 0 3px 3px;\r\n\tpadding: 9px 14px\r\n}\r\n.no-padding .form .form-actions {\r\n\tmargin: 0;\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(248,248,248,.9);\r\n\ttext-align: right;\r\n\tmargin-top: 25px\r\n}\r\n.bootstrap-duallistbox-container label, .form header, legend {\r\n\tdisplay: block;\r\n\tpadding: 8px 0;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.2);\r\n\tbackground: #fff;\r\n\tfont-size: 16px;\r\n\tfont-weight: 300;\r\n\tcolor: #222;\r\n\tmargin: 25px 0 20px\r\n}\r\n.no-padding .form header {\r\n\tmargin: 25px 14px 0\r\n}\r\n.form header:first-child {\r\n\tmargin-top: 10px\r\n}\r\nlegend {\r\n\tfont-weight: 400;\r\n\tmargin-top: 0;\r\n\tbackground: 0 0\r\n}\r\n.input-group-addon {\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\ttransition: background-color .3s;\r\n\t-o-transition: background-color .3s;\r\n\t-ms-transition: background-color .3s;\r\n\t-moz-transition: background-color .3s;\r\n\t-webkit-transition: background-color .3s\r\n}\r\n.input-group-addon .fa {\r\n\tfont-size: 14px\r\n}\r\n.input-group-addon .fa-2x, .input-group-addon .fa-lg {\r\n\tfont-size: 2em\r\n}\r\n.input-group-addon .fa-3x, .input-group-addon .fa-4x, .input-group-addon .fa-5x {\r\n\tfont-size: 30px\r\n}\r\ninput[type=text]:focus+.input-group-addon {\r\n\tborder-color: #0091d9;\r\n\tbackground-color: #72a0ce;\r\n\tcolor: #fff\r\n}\r\n.has-warning input[type=text], .has-warning input[type=text]+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]+.input-group-addon {\r\n\tbackground-color: #faf2cc;\r\n\tcolor: #c09853\r\n}\r\n.has-warning input[type=text]:focus, .has-warning input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #e1c118;\r\n\tcolor: #fff\r\n}\r\n.has-error .input-group-addon {\r\n\tborder-color: #b94a48;\r\n\tbackground: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text], .has-error input[type=text]+.input-group-addon {\r\n\tborder-color: #b94a48\r\n}\r\n.has-error input[type=text]+.input-group-addon {\r\n\tbackground-color: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text]:focus, .has-error input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #c05e5e\r\n}\r\n.has-error input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #c05e5e;\r\n\tcolor: #fff\r\n}\r\n.has-success input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #468847;\r\n\tbackground-color: #468847;\r\n\tcolor: #fff\r\n}\r\n.form .form-group:last-child, .form .form-group:last-child .note, .form fieldset .form-group:last-child, .form fieldset .form-group:last-child .note {\r\n\tmargin-bottom: 0\r\n}\r\n.note {\r\n\tmargin-top: 6px;\r\n\tpadding: 0 1px;\r\n\tfont-size: 11px;\r\n\tline-height: 15px;\r\n\tcolor: #999\r\n}\r\n.input-icon-right {\r\n\tposition: relative\r\n}\r\n.input-icon-left>i, .input-icon-right>i {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 30%;\r\n\tfont-size: 16px;\r\n\tcolor: #bfbfbf\r\n}\r\n.input-icon-left>i {\r\n\tright: auto;\r\n\tleft: 24px\r\n}\r\n.input-icon-right .form-control {\r\n\tpadding-right: 27px\r\n}\r\n.input-icon-left .form-control {\r\n\tpadding-left: 29px\r\n}\r\ninput[type=color].ui-autocomplete-loading, input[type=date].ui-autocomplete-loading, input[type=datetime-local].ui-autocomplete-loading, input[type=datetime].ui-autocomplete-loading, input[type=email].ui-autocomplete-loading, input[type=month].ui-autocomplete-loading, input[type=number].ui-autocomplete-loading, input[type=password].ui-autocomplete-loading, input[type=search].ui-autocomplete-loading, input[type=tel].ui-autocomplete-loading, input[type=text].ui-autocomplete-loading, input[type=time].ui-autocomplete-loading, input[type=url].ui-autocomplete-loading, input[type=week].ui-autocomplete-loading {\r\n\tbackground-image: url(../img/select2-spinner.gif)!important;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: 99% 50%;\r\n\tpadding-right: 27px\r\n}\r\n.input-group-addon .checkbox, .input-group-addon .radio {\r\n\tmin-height: 0;\r\n\tmargin-right: 0!important;\r\n\tpadding-top: 0\r\n}\r\n.input-group-addon label input[type=checkbox].checkbox+span, .input-group-addon label input[type=checkbox].checkbox+span:before, .input-group-addon label input[type=radio].radiobox+span, .input-group-addon label input[type=radio].radiobox+span:before {\r\n\tmargin-right: 0\r\n}\r\n.input-group-addon .onoffswitch, .input-group-addon .onoffswitch-label {\r\n\tmargin: 0\r\n}\r\n.timeline-seperator {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #999;\r\n\tmargin: 20px 0 0\r\n}\r\n.timeline-seperator>:first-child {\r\n\tpadding: 4px 5px;\r\n\tborder: 1px dashed rgba(0,0,0,.1);\r\n\tbackground: #fff;\r\n\tfont-size: 11px;\r\n\tborder-radius: 4px\r\n}\r\n.timeline-seperator .btn, .timeline-seperator .btn+.dropdown-menu {\r\n\tmargin-right: 15px\r\n}\r\n.timeline-seperator:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tmargin: 0 20px;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.1);\r\n\tmargin-top: -8px\r\n}\r\n.alert {\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 0;\r\n\tcolor: #675100;\r\n\tborder-width: 0;\r\n\tborder-left-width: 5px;\r\n\tpadding: 10px;\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.alert .close {\r\n\ttop: 0;\r\n\tright: -5px;\r\n\tline-height: 20px\r\n}\r\n.alert-heading {\r\n\tfont-weight: 600\r\n}\r\n.alert-danger {\r\n\tborder-color: #953b39;\r\n\tcolor: #fff;\r\n\tbackground-color: #c26565;\r\n\ttext-shadow: none\r\n}\r\n.alert-warning {\r\n\tborder-color: #dfb56c;\r\n\tcolor: #826430;\r\n\tbackground-color: #efe1b3\r\n}\r\n.alert-success {\r\n\tborder-color: #8ac38b;\r\n\tcolor: #356635;\r\n\tbackground-color: #cde0c4\r\n}\r\n.alert-info {\r\n\tborder-color: #9cb4c5;\r\n\tcolor: #305d8c;\r\n\tbackground-color: #d6dde7\r\n}\r\n.well {\r\n\tbackground-color: #fbfbfb;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 0 1px 1px #ececec;\r\n\t-webkit-box-shadow: 0 1px 1px #ececec;\r\n\t-moz-box-shadow: 0 1px 1px #ececec;\r\n\tposition: relative\r\n}\r\n.well.well-clean {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent\r\n}\r\n.well.well-glass {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground-color: rgba(255,255,255,.25);\r\n\tcolor: #fff\r\n}\r\n.well.well-light {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #e2e2e2\r\n}\r\n.widget-body .well {\r\n\tmargin-bottom: 0\r\n}\r\n.well.transparent {\r\n\tborder: none!important;\r\n\tbackground: none!important\r\n}\r\n.jarviswidget.well.transparent>div, .jarviswidget.well.transparent>div .widget-body {\r\n\tpadding: 0!important\r\n}\r\n.well[class*=\" bg-\"], .well[class^=bg-] {\r\n\tborder: 1px solid #555!important\r\n}\r\n.nav-tabs>li>a .badge {\r\n\tfont-size: 11px;\r\n\tpadding: 3px 5px;\r\n\topacity: .5;\r\n\tmargin-left: 5px;\r\n\tmin-width: 17px;\r\n\tfont-weight: 400\r\n}\r\n.nav-tabs>li>a>.fa {\r\n\topacity: .5\r\n}\r\n.tabs-left .nav-tabs>li>a .badge {\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0\r\n}\r\n.nav-tabs>li>a .label {\r\n\tdisplay: inline-block;\r\n\tfont-size: 11px;\r\n\tmargin-left: 5px;\r\n\topacity: .5\r\n}\r\n.nav-tabs>li.active>a .badge, .nav-tabs>li.active>a .label, .nav-tabs>li.active>a>.fa {\r\n\topacity: 1\r\n}\r\n.nav-tabs>li>a {\r\n\tborder-radius: 0;\r\n\tcolor: #333\r\n}\r\n.nav-tabs>li.active>a {\r\n\tbox-shadow: 0 -2px 0 #57889c;\r\n\tborder-top-width: 0!important;\r\n\tmargin-top: 1px!important;\r\n\tfont-weight: 700\r\n}\r\n.tabs-left .nav-tabs>li.active>a {\r\n\tbox-shadow: -2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-left: none!important;\r\n\tmargin-left: 1px!important\r\n}\r\n.tabs-left .nav-pills>li.active>a {\r\n\tborder: none!important;\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.tabs-right .nav-tabs>li.active>a {\r\n\tbox-shadow: 2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-right: none!important;\r\n\tmargin-right: 1px!important\r\n}\r\n.tabs-below .nav-tabs>li.active>a {\r\n\tbox-shadow: 0 2px 0 #57889c;\r\n\tborder-bottom-width: 0!important;\r\n\tborder-top: none!important;\r\n\tmargin-top: 0!important\r\n}\r\n.tabs-left>.nav-pills>li, .tabs-left>.nav-tabs>li, .tabs-right>.nav-pills>li, .tabs-right>.nav-tabs>li {\r\n\tfloat: none\r\n}\r\n.tabs-left>.nav-pills>li>a, .tabs-left>.nav-tabs>li>a, .tabs-right>.nav-pills>li>a, .tabs-right>.nav-tabs>li>a {\r\n\tmin-width: 74px;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 3px\r\n}\r\n.tabs-left>.nav-pills, .tabs-left>.nav-tabs {\r\n\tfloat: left;\r\n\tmargin-right: 19px;\r\n\tborder-right: 1px solid #ddd\r\n}\r\n.tabs-left>.nav-pills {\r\n\tborder-right: none\r\n}\r\n.tabs-left>.nav-tabs>li>a {\r\n\tmargin-right: -1px\r\n}\r\n.tabs-left>.nav-tabs>li>a:focus, .tabs-left>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #d5d5d5 #eee #eee\r\n}\r\n.tabs-left>.nav-tabs .active>a, .tabs-left>.nav-tabs .active>a:focus, .tabs-left>.nav-tabs .active>a:hover {\r\n\tborder-color: #d5d5d5 transparent #d5d5d5 #ddd;\r\n*border-right-color:#fff\r\n}\r\n.tabs-left>.tab-content {\r\n\tmargin-left: 109px\r\n}\r\n.tabs-right>.nav-tabs {\r\n\tfloat: right;\r\n\tmargin-left: 19px;\r\n\tborder-left: 1px solid #ddd\r\n}\r\n.tabs-right>.nav-tabs>li>a {\r\n\tmargin-left: -1px\r\n}\r\n.tabs-right>.nav-tabs>li>a:focus, .tabs-right>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #eee #eee #ddd\r\n}\r\n.tabs-right>.nav-tabs .active>a, .tabs-right>.nav-tabs .active>a:focus, .tabs-right>.nav-tabs .active>a:hover {\r\n\tborder-color: #ddd #ddd #ddd transparent;\r\n*border-left-color:#fff\r\n}\r\n.tabs-below>.nav-tabs, .tabs-left>.nav-tabs, .tabs-right>.nav-tabs {\r\n\tborder-bottom: 0\r\n}\r\n.pill-content>.pill-pane, .tab-content>.tab-pane {\r\n\tdisplay: none\r\n}\r\n.pill-content>.active, .tab-content>.active {\r\n\tdisplay: block\r\n}\r\n.tabs-below>.nav-tabs {\r\n\tborder-top: 1px solid #ddd\r\n}\r\n.tabs-below>.nav-tabs>li {\r\n\tmargin-top: -1px;\r\n\tmargin-bottom: 0\r\n}\r\n.tabs-below>.nav-tabs>li>a:focus, .tabs-below>.nav-tabs>li>a:hover {\r\n\tborder-top-color: #ddd;\r\n\tborder-bottom-color: transparent\r\n}\r\n.tabs-below>.nav-tabs>.active>a, .tabs-below>.nav-tabs>.active>a:focus, .tabs-below>.nav-tabs>.active>a:hover {\r\n\tborder-color: transparent #ddd #ddd\r\n}\r\n.nav-tabs.bordered {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #ddd\r\n}\r\n.nav-tabs.bordered>:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.nav-tabs.bordered+.tab-content {\r\n\tborder: 1px solid #ddd;\r\n\tborder-top: none\r\n}\r\n.tabs-pull-right.nav-pills>li, .tabs-pull-right.nav-tabs>li {\r\n\tfloat: right\r\n}\r\n.tabs-pull-right.nav-pills>li:first-child>a, .tabs-pull-right.nav-tabs>li:first-child>a {\r\n\tmargin-right: 1px\r\n}\r\n.tabs-pull-right.bordered.nav-pills>li:first-child>a, .tabs-pull-right.bordered.nav-tabs>li:first-child>a {\r\n\tborder-left-width: 1px!important;\r\n\tmargin-right: 0;\r\n\tborder-right-width: 0\r\n}\r\n.jarviswidget>header>.nav-tabs.pull-left>li:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.btn, a:link, button {\r\n\t-webkit-tap-highlight-color: rgba(169,3,41,.5)\r\n}\r\n#logo-group *, .login-info, .login-info *, .minified .menu-item-parent {\r\n\tbox-sizing: content-box\r\n}\r\n.hidden-desktop {\r\n\tdisplay: none!important\r\n}\r\n.dropdown-menu-xs {\r\n\tmin-width: 37px\r\n}\r\n.dropdown-menu-xs>li>a {\r\n\tpadding: 3px 10px\r\n}\r\n.dropdown-menu-xs>li>a:hover i {\r\n\tcolor: #fff!important\r\n}\r\n.dropdown-submenu {\r\n\tposition: relative\r\n}\r\n.dropdown-submenu>.dropdown-menu {\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\tmargin-top: -6px;\r\n\tmargin-left: -1px\r\n}\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n\tdisplay: block\r\n}\r\n.dropdown-submenu>a:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tfloat: right;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-color: transparent;\r\n\tborder-style: solid;\r\n\tborder-width: 5px 0 5px 5px;\r\n\tborder-left-color: #bfbfbf;\r\n\tmargin-top: 5px;\r\n\tmargin-right: -10px\r\n}\r\n.dropdown-submenu:hover>a:after {\r\n\tborder-left-color: #fff\r\n}\r\n.dropdown-submenu.pull-left {\r\n\tfloat: none\r\n}\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n\tleft: -100%;\r\n\tmargin-left: 10px\r\n}\r\n.table.has-tickbox thead tr th:first-child {\r\n\twidth: 18px\r\n}\r\n.table.has-tickbox.smart-form tbody tr td:first-child .checkbox, .table.has-tickbox.smart-form tbody tr td:first-child .radio, .table.has-tickbox.smart-form thead tr th:first-child .checkbox, .table.has-tickbox.smart-form thead tr th:first-child .radio {\r\n\tpadding: 0!important\r\n}\r\n.fc-head-container thead tr, .table thead tr {\r\n\tbackground-color: #eee;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f2f2f2), to(#fafafa));\r\n\tbackground-image: -webkit-linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tbackground-image: -linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tfont-size: 12px\r\n}\r\n.fc-head-container thead tr th {\r\n\tpadding: 4px;\r\n\tline-height: 1.428571429\r\n}\r\n.table-bordered>thead>tr>td, .table-bordered>thead>tr>th {\r\n\tborder-width: 1px\r\n}\r\n.no-padding>.table-bordered, .no-padding>.table-responsive>.table-bordered {\r\n\tborder: none!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:first-child, .no-padding>.table-bordered thead tr td:first-child, .no-padding>.table-bordered thead tr th:first-child, .no-padding>.table-responsive>.table-bordered tbody tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr th:first-child {\r\n\tborder-left-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:last-child, .no-padding>.table-bordered thead tr th:last-child, .no-padding>.table-responsive>.table-bordered tbody tr td:last-child, .no-padding>.table-responsive>.table-bordered thead tr th:last-child {\r\n\tborder-right-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr:last-child td, .no-padding>.table-responsive>.table-bordered tbody tr:last-child td {\r\n\tborder-bottom-width: 0!important\r\n}\r\n.no-padding .table-responsive .table {\r\n\tmargin-bottom: 0\r\n}\r\n.no-padding .note-editable .table-bordered {\r\n\tborder: 1px solid #ddd!important\r\n}\r\n.smart-form.table td .checkbox i, .smart-form.table td .radio i, .smart-form.table th .checkbox i, .smart-form.table th .radio i {\r\n\ttop: 0!important\r\n}\r\n.table-condensed.table>tbody>tr>td, .table-condensed.table>tbody>tr>th, .table-condensed.table>tfoot>tr>td, .table-condensed.table>tfoot>tr>th, .table-condensed.table>thead>tr>td, .table-condensed.table>thead>tr>th {\r\n\tpadding: 5px 10px!important\r\n}\r\n\r\n\r\n\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n/*NEW RESUME*/\r\n#profile #top-card .entity {\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n#profile .entity {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n#top-card .entity {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#profile .entity, #ygddfdiv .entity {\r\n    padding-left: 35px;\r\n    padding-right: 35px;\r\n    margin-bottom: 10px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    background-color: #fff;\r\n}\r\n.entity {\r\n    position: relative;\r\n}\r\n.is-focusable, .section, .entity, div[tabindex=\"-1\"], ol[tabindex=\"-1\"] {\r\n    outline: 0;\r\n}\r\n\r\nPseudo ::after element\r\n.profile-card:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/*   */ \r\n.profile-card.vcard.entity {\r\n    float: left;\r\n    width: 100%;\r\n\r\n}\r\n.box_mess2 { float:left; width:60%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.box_mess22 { float:left; width:40%; background:#57889c; padding:19px; position:relative;}\r\n.box_mess22 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n\r\n.progress-detail .control-label {\r\n    color: #9cb4c5;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n\tfont-size: 18px;\r\n}\r\n.control-label {\r\n    color: #9cb4c5;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n}\r\n.w100>ul>li {\r\n\t\r\n\tlist-style: none;\r\n\tcolor:#1a0c0a;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n\tfont-size: 18px;\r\n\t\r\n}\r\n.p {\r\n\t\r\n\tlist-style: none;\r\n\tcolor:#1a0c0a;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n\tfont-size: 18px;\r\n\t\r\n}\r\n.resume-detail .form{\r\n\tfloat: left;\r\n\twidth: 100%;\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 20px;\r\n}\r\n.resume-here{\r\n\tfloat: left;\r\n\tborder: 1px solid #ddd;\r\n}\r\n.resume-here.formOnly{\r\n\twidth: 60%;\r\n}\r\n.resume-detail{\r\n\tbackground: #fafbfc;\r\n\tborder-right: 1px solid #ddd;\r\n}\r\n.resume-detail.onlyForm{\r\n\twidth: 100%;\r\n\tborder: none;\r\n}\r\n.resume-here .control-label{\r\n\tcolor: #333;\r\n}\r\n.resume-here label{\r\n\ttext-align: center;\r\n}\r\n.resume-here .head-here{\r\n\ttext-align: left;\r\n}\r\n.resume-here .form-group{\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n}\r\n.resume-detail-show .profile-picture{\r\n\tfloat: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 15px;\r\n}\r\n.resume-detail-show .profile-picture img{\r\n\tdisplay: inline-block;\r\n\tfloat: none;\r\n}\r\n.resume-information{\r\n\tmargin-top: 20px;\r\n}\r\n.resume-information .control-label{\r\n\tfont-size: 16px;\r\n}\r\n.resume-detail-show{\r\n\tbackground: #fff;\r\n}\r\n.stBTN{\r\n\toutline:none;\r\n}"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ".interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 .postActionz { margin:0;}"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ".box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.w100 { float:left; width:100%;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n.Drop .form-group{\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n.Drop .form-group .col-md-12{\r\n    padding: 0;\r\n}\r\n.Drop .form-group select{\r\n    background: inherit;\r\n    color: #70808b!important;\r\n    border: none;\r\n    box-shadow: none!important;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n}\r\n.postBTN{\r\n    float: right;\r\n    margin-top: 23px;\r\n}"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ".postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "\r\n\r\na, button, input {\r\n\t-ms-touch-action: none!important\r\n}\r\n.uneditable-input:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus {\r\n\toutline: 0;\r\n\tbox-shadow: none!important\r\n}\r\n.form-control, .input-lg, .input-sm, .input-xs {\r\n\tborder-radius: 0!important;\r\n\t-webkit-border-radius: 0!important;\r\n\t-moz-border-radius: 0!important\r\n}\r\n.input-xs {\r\n\theight: 24px;\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11px;\r\n\tline-height: 1.5\r\n}\r\n.btn-xs {\r\n\tpadding: 1px 5px\r\n}\r\n.btn-sm {\r\n\tpadding: 6px 10px 5px\r\n}\r\n.btn-lg {\r\n\tpadding: 10px 16px\r\n}\r\n.no-space {\r\n\tmargin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n\tmargin: 0!important;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0\r\n}\r\n\r\nh1 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 24px;\r\n\tmargin: 10px 0\r\n}\r\nh1 small {\r\n\tfont-size: 18px;\r\n\tfont-weight: 300;\r\n\tletter-spacing: -1px\r\n}\r\n.lead {\r\n\tfont-size: 19px\r\n}\r\nh2 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 22px;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh3 {\r\n\tdisplay: block;\r\n\tfont-size: 19px;\r\n\tfont-weight: 400;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh4 {\r\n\tline-height: normal\r\n}\r\nh5 {\r\n\tfont-size: 17px;\r\n\tfont-weight: 300;\r\n\tmargin: 10px 0;\r\n\tline-height: normal\r\n}\r\nh6 {\r\n\tfont-size: 15px;\r\n\tmargin: 10px 0;\r\n\tfont-weight: 700;\r\n\tline-height: normal\r\n}\r\n.row-seperator-header {\r\n\tmargin: 15px 14px 20px;\r\n\tborder-bottom: none;\r\n\tdisplay: block;\r\n\tcolor: #646464;\r\n\tfont-size: 20px;\r\n\tfont-weight: 400\r\n}\r\n.center-canvas, .center-child-canvas>canvas {\r\n\tdisplay: block!important;\r\n\tmargin: 0 auto!important\r\n}\r\n.bordered {\r\n\tborder: 1px solid rgba(0,0,0,.2)\r\n}\r\n.bordered:hover {\r\n\tborder: 1px solid rgba(0,0,0,.4)\r\n}\r\naside {\r\n\tdisplay: block;\r\n\tbackground: #2f323c!important;\r\n\tmin-height: 100%\r\n}\r\n\r\n.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: touch;\r\n\toverflow-y: auto;\r\n\theight: 100%;\r\n\tpadding-bottom: 49px\r\n}\r\n.fixed-navigation nav>ul {\r\n\tpadding-right: 15px;\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 114%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll\r\n}\r\n.mobile-detected.fixed-navigation nav>ul {\r\n\tpadding-right: 30px!important\r\n}\r\n.minified.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: none;\r\n\toverflow: visible;\r\n\theight: auto;\r\n\tpadding-bottom: 0\r\n}\r\n.minified.fixed-navigation nav>ul {\r\n\toverflow: visible;\r\n\tpadding-right: 0;\r\n\twidth: 100%\r\n}\r\n\r\n.header-dropdown-list {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0\r\n}\r\n.header-dropdown-list>li {\r\n\tdisplay: inline-block;\r\n\tpadding-right: 5px\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle {\r\n\tmargin-top: 16px;\r\n\tdisplay: block; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; color:#fff;\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle i { margin:0 0 0 8px;}\r\n.smart-accordion-default.panel-group {\r\n\tmargin-bottom: 0\r\n}\r\n.smart-accordion-default.panel-group .panel+.panel {\r\n\tmargin-top: -1px\r\n}\r\n.smart-accordion-default.panel-group .panel-heading {\r\n\tpadding: 0\r\n}\r\n.smart-accordion-default.panel-group .panel-title a {\r\n\tdisplay: block;\r\n\tpadding: 10px 15px;\r\n\ttext-decoration: none!important\r\n}\r\n.panel-group .panel, .smart-accordion-default .panel-heading {\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.smart-accordion-default .panel-default>.panel-heading {\r\n\tbackground-color: #fcfcfc\r\n}\r\n.smart-accordion-default .panel-default {\r\n\tborder-color: #c3c3c3\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>.fa, .smart-accordion-default .panel-title>a>:first-child {\r\n\tdisplay: none\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>:first-child {\r\n\tdisplay: inline-block\r\n}\r\n.no-padding .smart-accordion-default>div {\r\n\tborder-left: none!important;\r\n\tborder-right: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:first-child {\r\n\tborder-top: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:last-child {\r\n\tborder-bottom: none!important\r\n}\r\n\r\n.form-control {\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.form hr {\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tborder-color: rgba(0,0,0,.1);\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px\r\n}\r\n.form fieldset {\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tbackground: rgba(255,255,255,.9);\r\n\tposition: relative\r\n}\r\nfieldset {\r\n\tposition: relative\r\n}\r\n.form-actions {\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(249,249,249,.9);\r\n\tmargin-top: 25px;\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tmargin-bottom: -13px;\r\n\ttext-align: right\r\n}\r\n.well .form-actions {\r\n\tmargin-left: -19px;\r\n\tmargin-right: -19px;\r\n\tmargin-bottom: -19px\r\n}\r\n.well.well-lg .form-actions {\r\n\tmargin-left: -24px;\r\n\tmargin-right: -24px;\r\n\tmargin-bottom: -24px\r\n}\r\n.well.well-sm .form-actions {\r\n\tmargin-left: -9px;\r\n\tmargin-right: -9px;\r\n\tmargin-bottom: -9px\r\n}\r\n.popover-content .form-actions {\r\n\tmargin: 0 -14px -9px;\r\n\tborder-radius: 0 0 3px 3px;\r\n\tpadding: 9px 14px\r\n}\r\n.no-padding .form .form-actions {\r\n\tmargin: 0;\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(248,248,248,.9);\r\n\ttext-align: right;\r\n\tmargin-top: 25px\r\n}\r\n.bootstrap-duallistbox-container label, .form header, legend {\r\n\tdisplay: block;\r\n\tpadding: 8px 0;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.2);\r\n\tbackground: #fff;\r\n\tfont-size: 16px;\r\n\tfont-weight: 300;\r\n\tcolor: #222;\r\n\tmargin: 25px 0 20px\r\n}\r\n.no-padding .form header {\r\n\tmargin: 25px 14px 0\r\n}\r\n.form header:first-child {\r\n\tmargin-top: 10px\r\n}\r\nlegend {\r\n\tfont-weight: 400;\r\n\tmargin-top: 0;\r\n\tbackground: 0 0\r\n}\r\n.input-group-addon {\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\ttransition: background-color .3s;\r\n\t-o-transition: background-color .3s;\r\n\t-ms-transition: background-color .3s;\r\n\t-moz-transition: background-color .3s;\r\n\t-webkit-transition: background-color .3s\r\n}\r\n.input-group-addon .fa {\r\n\tfont-size: 14px\r\n}\r\n.input-group-addon .fa-2x, .input-group-addon .fa-lg {\r\n\tfont-size: 2em\r\n}\r\n.input-group-addon .fa-3x, .input-group-addon .fa-4x, .input-group-addon .fa-5x {\r\n\tfont-size: 30px\r\n}\r\ninput[type=text]:focus+.input-group-addon {\r\n\tborder-color: #0091d9;\r\n\tbackground-color: #72a0ce;\r\n\tcolor: #fff\r\n}\r\n.has-warning input[type=text], .has-warning input[type=text]+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]+.input-group-addon {\r\n\tbackground-color: #faf2cc;\r\n\tcolor: #c09853\r\n}\r\n.has-warning input[type=text]:focus, .has-warning input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #e1c118;\r\n\tcolor: #fff\r\n}\r\n.has-error .input-group-addon {\r\n\tborder-color: #b94a48;\r\n\tbackground: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text], .has-error input[type=text]+.input-group-addon {\r\n\tborder-color: #b94a48\r\n}\r\n.has-error input[type=text]+.input-group-addon {\r\n\tbackground-color: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text]:focus, .has-error input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #c05e5e\r\n}\r\n.has-error input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #c05e5e;\r\n\tcolor: #fff\r\n}\r\n.has-success input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #468847;\r\n\tbackground-color: #468847;\r\n\tcolor: #fff\r\n}\r\n.form .form-group:last-child, .form .form-group:last-child .note, .form fieldset .form-group:last-child, .form fieldset .form-group:last-child .note {\r\n\tmargin-bottom: 0\r\n}\r\n.note {\r\n\tmargin-top: 6px;\r\n\tpadding: 0 1px;\r\n\tfont-size: 11px;\r\n\tline-height: 15px;\r\n\tcolor: #999\r\n}\r\n.input-icon-right {\r\n\tposition: relative\r\n}\r\n.input-icon-left>i, .input-icon-right>i {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 30%;\r\n\tfont-size: 16px;\r\n\tcolor: #bfbfbf\r\n}\r\n.input-icon-left>i {\r\n\tright: auto;\r\n\tleft: 24px\r\n}\r\n.input-icon-right .form-control {\r\n\tpadding-right: 27px\r\n}\r\n.input-icon-left .form-control {\r\n\tpadding-left: 29px\r\n}\r\ninput[type=color].ui-autocomplete-loading, input[type=date].ui-autocomplete-loading, input[type=datetime-local].ui-autocomplete-loading, input[type=datetime].ui-autocomplete-loading, input[type=email].ui-autocomplete-loading, input[type=month].ui-autocomplete-loading, input[type=number].ui-autocomplete-loading, input[type=password].ui-autocomplete-loading, input[type=search].ui-autocomplete-loading, input[type=tel].ui-autocomplete-loading, input[type=text].ui-autocomplete-loading, input[type=time].ui-autocomplete-loading, input[type=url].ui-autocomplete-loading, input[type=week].ui-autocomplete-loading {\r\n\tbackground-image: url(../img/select2-spinner.gif)!important;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: 99% 50%;\r\n\tpadding-right: 27px\r\n}\r\n.input-group-addon .checkbox, .input-group-addon .radio {\r\n\tmin-height: 0;\r\n\tmargin-right: 0!important;\r\n\tpadding-top: 0\r\n}\r\n.input-group-addon label input[type=checkbox].checkbox+span, .input-group-addon label input[type=checkbox].checkbox+span:before, .input-group-addon label input[type=radio].radiobox+span, .input-group-addon label input[type=radio].radiobox+span:before {\r\n\tmargin-right: 0\r\n}\r\n.input-group-addon .onoffswitch, .input-group-addon .onoffswitch-label {\r\n\tmargin: 0\r\n}\r\n.timeline-seperator {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #999;\r\n\tmargin: 20px 0 0\r\n}\r\n.timeline-seperator>:first-child {\r\n\tpadding: 4px 5px;\r\n\tborder: 1px dashed rgba(0,0,0,.1);\r\n\tbackground: #fff;\r\n\tfont-size: 11px;\r\n\tborder-radius: 4px\r\n}\r\n.timeline-seperator .btn, .timeline-seperator .btn+.dropdown-menu {\r\n\tmargin-right: 15px\r\n}\r\n.timeline-seperator:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tmargin: 0 20px;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.1);\r\n\tmargin-top: -8px\r\n}\r\n.alert {\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 0;\r\n\tcolor: #675100;\r\n\tborder-width: 0;\r\n\tborder-left-width: 5px;\r\n\tpadding: 10px;\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.alert .close {\r\n\ttop: 0;\r\n\tright: -5px;\r\n\tline-height: 20px\r\n}\r\n.alert-heading {\r\n\tfont-weight: 600\r\n}\r\n.alert-danger {\r\n\tborder-color: #953b39;\r\n\tcolor: #fff;\r\n\tbackground-color: #c26565;\r\n\ttext-shadow: none\r\n}\r\n.alert-warning {\r\n\tborder-color: #dfb56c;\r\n\tcolor: #826430;\r\n\tbackground-color: #efe1b3\r\n}\r\n.alert-success {\r\n\tborder-color: #8ac38b;\r\n\tcolor: #356635;\r\n\tbackground-color: #cde0c4\r\n}\r\n.alert-info {\r\n\tborder-color: #9cb4c5;\r\n\tcolor: #305d8c;\r\n\tbackground-color: #d6dde7\r\n}\r\n.well {\r\n\tbackground-color: #fbfbfb;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 0 1px 1px #ececec;\r\n\t-webkit-box-shadow: 0 1px 1px #ececec;\r\n\t-moz-box-shadow: 0 1px 1px #ececec;\r\n\tposition: relative\r\n}\r\n.well.well-clean {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent\r\n}\r\n.well.well-glass {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground-color: rgba(255,255,255,.25);\r\n\tcolor: #fff\r\n}\r\n.well.well-light {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #e2e2e2\r\n}\r\n.widget-body .well {\r\n\tmargin-bottom: 0\r\n}\r\n.well.transparent {\r\n\tborder: none!important;\r\n\tbackground: none!important\r\n}\r\n.jarviswidget.well.transparent>div, .jarviswidget.well.transparent>div .widget-body {\r\n\tpadding: 0!important\r\n}\r\n.well[class*=\" bg-\"], .well[class^=bg-] {\r\n\tborder: 1px solid #555!important\r\n}\r\n.nav-tabs>li>a .badge {\r\n\tfont-size: 11px;\r\n\tpadding: 3px 5px;\r\n\topacity: .5;\r\n\tmargin-left: 5px;\r\n\tmin-width: 17px;\r\n\tfont-weight: 400\r\n}\r\n.nav-tabs>li>a>.fa {\r\n\topacity: .5\r\n}\r\n.tabs-left .nav-tabs>li>a .badge {\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0\r\n}\r\n.nav-tabs>li>a .label {\r\n\tdisplay: inline-block;\r\n\tfont-size: 11px;\r\n\tmargin-left: 5px;\r\n\topacity: .5\r\n}\r\n.nav-tabs>li.active>a .badge, .nav-tabs>li.active>a .label, .nav-tabs>li.active>a>.fa {\r\n\topacity: 1\r\n}\r\n.nav-tabs>li>a {\r\n\tborder-radius: 0;\r\n\tcolor: #333\r\n}\r\n.nav-tabs>li.active>a {\r\n\tbox-shadow: 0 -2px 0 #57889c;\r\n\tborder-top-width: 0!important;\r\n\tmargin-top: 1px!important;\r\n\tfont-weight: 700\r\n}\r\n.tabs-left .nav-tabs>li.active>a {\r\n\tbox-shadow: -2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-left: none!important;\r\n\tmargin-left: 1px!important\r\n}\r\n.tabs-left .nav-pills>li.active>a {\r\n\tborder: none!important;\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.tabs-right .nav-tabs>li.active>a {\r\n\tbox-shadow: 2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-right: none!important;\r\n\tmargin-right: 1px!important\r\n}\r\n.tabs-below .nav-tabs>li.active>a {\r\n\tbox-shadow: 0 2px 0 #57889c;\r\n\tborder-bottom-width: 0!important;\r\n\tborder-top: none!important;\r\n\tmargin-top: 0!important\r\n}\r\n.tabs-left>.nav-pills>li, .tabs-left>.nav-tabs>li, .tabs-right>.nav-pills>li, .tabs-right>.nav-tabs>li {\r\n\tfloat: none\r\n}\r\n.tabs-left>.nav-pills>li>a, .tabs-left>.nav-tabs>li>a, .tabs-right>.nav-pills>li>a, .tabs-right>.nav-tabs>li>a {\r\n\tmin-width: 74px;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 3px\r\n}\r\n.tabs-left>.nav-pills, .tabs-left>.nav-tabs {\r\n\tfloat: left;\r\n\tmargin-right: 19px;\r\n\tborder-right: 1px solid #ddd\r\n}\r\n.tabs-left>.nav-pills {\r\n\tborder-right: none\r\n}\r\n.tabs-left>.nav-tabs>li>a {\r\n\tmargin-right: -1px\r\n}\r\n.tabs-left>.nav-tabs>li>a:focus, .tabs-left>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #d5d5d5 #eee #eee\r\n}\r\n.tabs-left>.nav-tabs .active>a, .tabs-left>.nav-tabs .active>a:focus, .tabs-left>.nav-tabs .active>a:hover {\r\n\tborder-color: #d5d5d5 transparent #d5d5d5 #ddd;\r\n*border-right-color:#fff\r\n}\r\n.tabs-left>.tab-content {\r\n\tmargin-left: 109px\r\n}\r\n.tabs-right>.nav-tabs {\r\n\tfloat: right;\r\n\tmargin-left: 19px;\r\n\tborder-left: 1px solid #ddd\r\n}\r\n.tabs-right>.nav-tabs>li>a {\r\n\tmargin-left: -1px\r\n}\r\n.tabs-right>.nav-tabs>li>a:focus, .tabs-right>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #eee #eee #ddd\r\n}\r\n.tabs-right>.nav-tabs .active>a, .tabs-right>.nav-tabs .active>a:focus, .tabs-right>.nav-tabs .active>a:hover {\r\n\tborder-color: #ddd #ddd #ddd transparent;\r\n*border-left-color:#fff\r\n}\r\n.tabs-below>.nav-tabs, .tabs-left>.nav-tabs, .tabs-right>.nav-tabs {\r\n\tborder-bottom: 0\r\n}\r\n.pill-content>.pill-pane, .tab-content>.tab-pane {\r\n\tdisplay: none\r\n}\r\n.pill-content>.active, .tab-content>.active {\r\n\tdisplay: block\r\n}\r\n.tabs-below>.nav-tabs {\r\n\tborder-top: 1px solid #ddd\r\n}\r\n.tabs-below>.nav-tabs>li {\r\n\tmargin-top: -1px;\r\n\tmargin-bottom: 0\r\n}\r\n.tabs-below>.nav-tabs>li>a:focus, .tabs-below>.nav-tabs>li>a:hover {\r\n\tborder-top-color: #ddd;\r\n\tborder-bottom-color: transparent\r\n}\r\n.tabs-below>.nav-tabs>.active>a, .tabs-below>.nav-tabs>.active>a:focus, .tabs-below>.nav-tabs>.active>a:hover {\r\n\tborder-color: transparent #ddd #ddd\r\n}\r\n.nav-tabs.bordered {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #ddd\r\n}\r\n.nav-tabs.bordered>:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.nav-tabs.bordered+.tab-content {\r\n\tborder: 1px solid #ddd;\r\n\tborder-top: none\r\n}\r\n.tabs-pull-right.nav-pills>li, .tabs-pull-right.nav-tabs>li {\r\n\tfloat: right\r\n}\r\n.tabs-pull-right.nav-pills>li:first-child>a, .tabs-pull-right.nav-tabs>li:first-child>a {\r\n\tmargin-right: 1px\r\n}\r\n.tabs-pull-right.bordered.nav-pills>li:first-child>a, .tabs-pull-right.bordered.nav-tabs>li:first-child>a {\r\n\tborder-left-width: 1px!important;\r\n\tmargin-right: 0;\r\n\tborder-right-width: 0\r\n}\r\n.jarviswidget>header>.nav-tabs.pull-left>li:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.btn, a:link, button {\r\n\t-webkit-tap-highlight-color: rgba(169,3,41,.5)\r\n}\r\n#logo-group *, .login-info, .login-info *, .minified .menu-item-parent {\r\n\tbox-sizing: content-box\r\n}\r\n.hidden-desktop {\r\n\tdisplay: none!important\r\n}\r\n.dropdown-menu-xs {\r\n\tmin-width: 37px\r\n}\r\n.dropdown-menu-xs>li>a {\r\n\tpadding: 3px 10px\r\n}\r\n.dropdown-menu-xs>li>a:hover i {\r\n\tcolor: #fff!important\r\n}\r\n.dropdown-submenu {\r\n\tposition: relative\r\n}\r\n.dropdown-submenu>.dropdown-menu {\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\tmargin-top: -6px;\r\n\tmargin-left: -1px\r\n}\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n\tdisplay: block\r\n}\r\n.dropdown-submenu>a:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tfloat: right;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-color: transparent;\r\n\tborder-style: solid;\r\n\tborder-width: 5px 0 5px 5px;\r\n\tborder-left-color: #bfbfbf;\r\n\tmargin-top: 5px;\r\n\tmargin-right: -10px\r\n}\r\n.dropdown-submenu:hover>a:after {\r\n\tborder-left-color: #fff\r\n}\r\n.dropdown-submenu.pull-left {\r\n\tfloat: none\r\n}\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n\tleft: -100%;\r\n\tmargin-left: 10px\r\n}\r\n.table.has-tickbox thead tr th:first-child {\r\n\twidth: 18px\r\n}\r\n.table.has-tickbox.smart-form tbody tr td:first-child .checkbox, .table.has-tickbox.smart-form tbody tr td:first-child .radio, .table.has-tickbox.smart-form thead tr th:first-child .checkbox, .table.has-tickbox.smart-form thead tr th:first-child .radio {\r\n\tpadding: 0!important\r\n}\r\n.fc-head-container thead tr, .table thead tr {\r\n\tbackground-color: #eee;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f2f2f2), to(#fafafa));\r\n\tbackground-image: -webkit-linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tbackground-image: -linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tfont-size: 12px\r\n}\r\n.fc-head-container thead tr th {\r\n\tpadding: 4px;\r\n\tline-height: 1.428571429\r\n}\r\n.table-bordered>thead>tr>td, .table-bordered>thead>tr>th {\r\n\tborder-width: 1px\r\n}\r\n.no-padding>.table-bordered, .no-padding>.table-responsive>.table-bordered {\r\n\tborder: none!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:first-child, .no-padding>.table-bordered thead tr td:first-child, .no-padding>.table-bordered thead tr th:first-child, .no-padding>.table-responsive>.table-bordered tbody tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr th:first-child {\r\n\tborder-left-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:last-child, .no-padding>.table-bordered thead tr th:last-child, .no-padding>.table-responsive>.table-bordered tbody tr td:last-child, .no-padding>.table-responsive>.table-bordered thead tr th:last-child {\r\n\tborder-right-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr:last-child td, .no-padding>.table-responsive>.table-bordered tbody tr:last-child td {\r\n\tborder-bottom-width: 0!important\r\n}\r\n.no-padding .table-responsive .table {\r\n\tmargin-bottom: 0\r\n}\r\n.no-padding .note-editable .table-bordered {\r\n\tborder: 1px solid #ddd!important\r\n}\r\n.smart-form.table td .checkbox i, .smart-form.table td .radio i, .smart-form.table th .checkbox i, .smart-form.table th .radio i {\r\n\ttop: 0!important\r\n}\r\n.table-condensed.table>tbody>tr>td, .table-condensed.table>tbody>tr>th, .table-condensed.table>tfoot>tr>td, .table-condensed.table>tfoot>tr>th, .table-condensed.table>thead>tr>td, .table-condensed.table>thead>tr>th {\r\n\tpadding: 5px 10px!important\r\n}\r\n\r\n\r\n\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n/*NEW RESUME*/\r\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ".interested{\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n.interested h3{\r\n    text-align: center;\r\n    font-weight: 600;\r\n}"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = ".jobPost-form{\r\n    float: left;\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n.jobPost-form h3{\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\ninput, select{\r\n    border-radius: 0;\r\n    height: 35px;\r\n}\r\nbutton{\r\n    width: 100px;\r\n    border-radius: 0;\r\n}\r\n.form-here{\r\n    border: 1px solid #ddd;\r\n    border-radius: 0px;\r\n    background: #fafbfc;\r\n    padding: 15px 20px;\r\n}\r\n.form-here .form-group.half-input{\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.form-here .form-group{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.form-here .form-group label{\r\n    padding: 13px 15px;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n}\r\n.form-here .form-group input, .form-here .form-group select{\r\n    height: 46px;\r\n    border-radius: 3px;\r\n}\r\n.form-here .form-group input:focus, .form-here .form-group select:focus{\r\n    box-shadow: none;\r\n}\r\n.form-here .submit-button{\r\n    padding-right: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n.form-here .submit-button button{\r\n    float: right;\r\n}\r\n/*later*/\r\n.input-group {\r\n    padding: 0 15px;\r\n\r\n}\r\n.jobPost-form h3 span.fa{\r\n    font-size: 20px;\r\n}\r\n.web-input .input-group{\r\n    padding: 0 15px;\r\n}\r\n.web-input .input-group input{\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ".loader-here{\r\n    text-align: center;\r\n    min-height: 600px;\r\n}\r\n.loader-here i{\r\n    color: #73767a;\r\n}"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.no-space {\r\n    margin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n    margin: 0!important;\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center pm;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; background: ;border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n\r\n/*===========*/\r\n/*for profile*/\r\n .dating-profile-container {\r\n    float: left;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n}\r\n.dating-profile-container h3{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    margin-bottom: 30px;\r\n}\r\n.dating-profile-container>h4 {\r\n    float: left;\r\n}\r\n.profile-picture.profile-info {\r\n    float: left;\r\n}\r\n.user-picture{\r\n    float: left;\r\n    width: 20%;\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form{\r\n    float: left;\r\n    width: 80%;\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form .form-group{\r\n    float: left;\r\n    width: 50%;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n.update-profile-form .form-group label{\r\n    text-align: left;\r\n    margin-bottom: 15px;\r\n}\r\n.update-profile-form .form-group.full-length{\r\n    width: 100%;\r\n}\r\n.update-profile-form .form-group .input-group{\r\n    padding: 0 15px;\r\n}\r\n.update-profile-form form{\r\n    float: left;\r\n    width: 100%;\r\n    padding-bottom: 25px;\r\n}\r\n.update-profile-form .update-submit{\r\n    padding-right: 15px;\r\n}\r\n.update-profile-form .update-submit button{\r\n    width: auto;\r\n    padding: 1px 15px;\r\n}\r\n.update-profile-form .update-submit button:focus{\r\n    outline: none;\r\n}\r\n.update-profile-form input, .update-profile-form select{\r\n    height: 43px;\r\n}\r\n.update-profile-form input:focus, .update-profile-form select:focus{\r\n    box-shadow: none;\r\n}\r\n/*end of profile */\r\n.edit-photo {\r\n    padding: 6px 10px;\r\n    border-radius: 3px;\r\n    font-size: 14px;\r\n    float: left;\r\n    margin-left: 0px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "#left-panel {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 904;\r\n\tpadding-top: 54px\r\n}\r\naside{\r\n    display: block;\r\n    background: #2f323c!important;\r\n    min-height: 100%;\r\n    width: 137px;\r\n}\r\n.login-info{\r\n  display: block;\r\n  font-size: 11px;\r\n  height: 26px;\r\n  color: #707075;\r\n  width: 100%;\r\n  margin: 0!important;\r\n  line-height: 28px;\r\n  text-align: center;\r\n}\r\n#left-panel.hide-panel{\r\n\tleft: -210px;\r\n}\r\n.menu-item-parent{\r\n\tfloat: left;\r\n\twidth: 100%;\r\n}\r\n.menu-item-parent p{\r\n\tmargin-top: 5px;\r\n}\r\nli.active .menu-item-parent{\r\n\tcolor: #db5d64;\r\n}\r\nli a:hover .menu-item-parent{\r\n\tcolor: #db5d64;\r\n}\r\nli .menu-item-parent{\r\n\tcolor: #c0bbb7;\r\n}\r\n"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.no-space {\r\n    margin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n    margin: 0!important;\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center pm;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; background: ;border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n\r\n/*===========*/\r\n/*styele*/\r\n.pe-img {\r\n    width:100px;\r\n    height : 100px;\r\n}"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ".no-space {\r\n    margin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n    margin: 0!important;\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center pm;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; background: ;border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n/*later*/\r\n.pe-img {\r\n    width:100px;\r\n    height : 100px;\r\n}"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.no-space {\r\n    margin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n    margin: 0!important;\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center pm;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; background: ;border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n\r\n/*===========*/\r\n/*styele*/"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.no-space {\r\n    margin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n    margin: 0!important;\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center pm;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; background: ;border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n\r\n/*===========*/\r\n/*styele*/\r\n/*lates*/\r\n.city-ul {\r\n\tlist-style: none;\r\n\t\r\n}\r\n.city-ul>li {\r\n\tdisplay: inline;\r\n}\r\n"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*!\r\n * Pace Progress Bar 2.0.1\r\n * https://github.com/HubSpot/pace\r\n *\r\n * Released under the MIT license\r\n * https://github.com/HubSpot/pace/blob/master/LICENSE\r\n */\r\n\r\n\r\n\r\n.table-forum thead tr {\r\n\tbackground: none!important\r\n}\r\n.table-forum thead tr th {\r\n\tfont-size: 17px;\r\n\tfont-weight: 400;\r\n\tborder-bottom-color: #F1F1F1\r\n}\r\n.table-forum tr td {\r\n\tborder-top-style: dashed!important;\r\n\tpadding-top: 12px!important;\r\n\tpadding-bottom: 12px!important\r\n}\r\n.table-forum tr td h4 {\r\n\tfont-size: 15px;\r\n\tfont-weight: 700\r\n}\r\n.table-forum tr td h4 small {\r\n\tfont-size: 13px;\r\n\tdisplay: block;\r\n\tmargin-top: 2px\r\n}\r\n.table-forum tr td>i {\r\n\tmargin-top: 4px;\r\n\tpadding-left: 10px\r\n}\r\n.table-forum tr.locked h4>a:before {\r\n\tdisplay: inline-block;\r\n\tfont-family: FontAwesome;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tline-height: 1;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tcontent: \"\\f023\"\r\n}\r\n.table-forum tr.closed h4>a {\r\n\ttext-decoration: line-through;\r\n\tcolor: #848484;\r\n\tcursor: not-allowed\r\n}\r\n.forum-attachment {\r\n\tmargin-top: 20px;\r\n\tdisplay: block\r\n}\r\n.ajax-loading-error {\r\n\tmargin-top: 70px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tfont-size: 23px;\r\n\tfont-weight: 700\r\n}\r\n.ajax-notifications .ajax-loading-error {\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n\tfont-size: 15px\r\n}\r\n.ajax-notifications .ajax-loading-animation {\r\n\tfont-size: 15px;\r\n\ttext-align: center;\r\n\tmargin-top: 70px\r\n}\r\n.project-members a {\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tmargin: 0 3px 0 0;\r\n\tborder-radius: 0\r\n}\r\n.smart-rtl.project-members a {\r\n\tmargin: 0 0 0 3px\r\n}\r\n.project-members img {\r\n\twidth: 25px;\r\n\tborder-radius: 0\r\n}\r\n.projects-table>tbody>tr>td {\r\n\tpadding: 7px 10px 3px!important\r\n}\r\n.status .who {\r\n\tborder-bottom: 1px solid rgba(0,0,0,.07);\r\n\tpadding: 20px\r\n}\r\n.status .who img {\r\n\tfloat: left;\r\n\theight: 40px;\r\n\tmargin-right: 10px;\r\n\twidth: 40px\r\n}\r\n.status .who .name {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-weight: 400;\r\n\tline-height: normal\r\n}\r\n.status .who .name b {\r\n\tcolor: #57889c\r\n}\r\n.status .who .from {\r\n\tfont-size: 12px;\r\n\topacity: .7\r\n}\r\n.status .text {\r\n\tfont-size: 13px;\r\n\tline-height: 1.82em;\r\n\tpadding: 20px\r\n}\r\n.status .image {\r\n\tpadding: 20px\r\n}\r\n.status .image img {\r\n\twidth: 100%\r\n}\r\n.status .links {\r\n\tborder-top: 1px solid rgba(0,0,0,.07);\r\n\tmargin: 0;\r\n\tpadding: 15px 20px;\r\n\tbackground: #fafafa\r\n}\r\n.status .links .fa {\r\n\tcolor: inherit;\r\n\tfont-size: 14px;\r\n\tmargin-right: 2px\r\n}\r\n.status .links li {\r\n\tdisplay: inline;\r\n\tpadding-right: 20px\r\n}\r\n.status .comments {\r\n\tborder-top: 1px solid rgba(0,0,0,.07);\r\n\tfont-size: 13px;\r\n\tpadding: 0 20px\r\n}\r\n.status .comments li {\r\n\tborder-bottom: 1px solid rgba(0,0,0,.07);\r\n\tdisplay: block;\r\n\tpadding: 15px 0 15px 40px;\r\n\tposition: relative\r\n}\r\n.status .comments li:last-child {\r\n\tborder-bottom: none;\r\n\tpadding-bottom: 5px\r\n}\r\n.status .comments img {\r\n\theight: 30px;\r\n\tleft: 0;\r\n\tposition: absolute;\r\n\twidth: 30px\r\n}\r\n.status .comments .name {\r\n\tdisplay: block;\r\n\tfont-weight: 600;\r\n\topacity: .8\r\n}\r\n.status.panel-body {\r\n\tpadding: 0\r\n}\r\n.well.connect {\r\n\tpadding: 14px\r\n}\r\n.well.connect img {\r\n\tborder-radius: 50% 50% 0\r\n}\r\n.status.vote .comments {\r\n\tpadding: 0!important\r\n}\r\n.status.vote .comments li {\r\n\tpadding: 10px 0 10px 20px!important\r\n}\r\n.status.vote .comments li:last-child {\r\n\tpadding-right: 20px!important\r\n}\r\nblockquote.twitter-tweet {\r\n\tborder-color: #eee #ddd #bbb;\r\n\tborder-radius: 5px;\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,.15);\r\n\tdisplay: inline-block;\r\n\tfont-family: \"Helvetica Neue\", Roboto, \"Segoe UI\", Calibri, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 700;\r\n\tline-height: 16px;\r\n\tmargin: 10px 5px;\r\n\twidth: calc(100% - 10px);\r\n\tpadding: 0 16px 16px\r\n}\r\nblockquote.twitter-tweet p {\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tline-height: 20px\r\n}\r\nblockquote.twitter-tweet a {\r\n\tcolor: inherit;\r\n\tfont-weight: 400;\r\n\toutline: 0 none;\r\n\ttext-decoration: none\r\n}\r\nblockquote.twitter-tweet a:focus, blockquote.twitter-tweet a:hover {\r\n\ttext-decoration: underline\r\n}\r\n.product-content {\r\n\tborder: 1px solid #dfe5e9;\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 12px;\r\n\tbackground: #fff\r\n}\r\n.product-content .carousel-control.left {\r\n\tmargin-left: 0\r\n}\r\n.product-content .product-image {\r\n\tbackground-color: #fff;\r\n\tdisplay: block;\r\n\tmin-height: 238px;\r\n\toverflow: hidden;\r\n\tposition: relative\r\n}\r\n.product-content .product-deatil {\r\n\tborder-bottom: 1px solid #dfe5e9;\r\n\tpadding-bottom: 17px;\r\n\tpadding-left: 16px;\r\n\tpadding-top: 16px;\r\n\tposition: relative;\r\n\tbackground: #fff\r\n}\r\n.product-content .product-deatil h5 a {\r\n\tcolor: #2f383d;\r\n\tfont-size: 15px;\r\n\tline-height: 19px;\r\n\ttext-decoration: none;\r\n\tpadding-left: 0;\r\n\tmargin-left: 0\r\n}\r\n.product-content .product-deatil h5 a span {\r\n\tcolor: #9aa7af;\r\n\tdisplay: block;\r\n\tfont-size: 13px\r\n}\r\n.product-content .product-deatil span.tag1 {\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tfont-size: 15px;\r\n\theight: 50px;\r\n\tpadding: 13px 0;\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttext-align: center;\r\n\ttop: 10px;\r\n\twidth: 50px\r\n}\r\n.product-content .product-deatil span.sale {\r\n\tbackground-color: #21c2f8\r\n}\r\n.product-content .product-deatil span.discount {\r\n\tbackground-color: #71e134\r\n}\r\n.product-content .product-deatil span.hot {\r\n\tbackground-color: #fa9442\r\n}\r\n.product-content .description {\r\n\tfont-size: 12.5px;\r\n\tline-height: 20px;\r\n\tpadding: 10px 14px 16px 19px;\r\n\tbackground: #fff\r\n}\r\n.product-content .product-info {\r\n\tpadding: 11px 19px 10px 20px\r\n}\r\n.product-content .product-info a.add-to-cart {\r\n\tcolor: #2f383d;\r\n\tfont-size: 13px;\r\n\tpadding-left: 16px\r\n}\r\n.product-content name.a {\r\n\tpadding: 5px 10px;\r\n\tmargin-left: 16px\r\n}\r\n.product-info.smart-form .btn {\r\n\tpadding: 6px 12px;\r\n\tmargin-left: 12px;\r\n\tmargin-top: -10px\r\n}\r\n.product-entry .product-deatil {\r\n\tborder-bottom: 1px solid #dfe5e9;\r\n\tpadding-bottom: 17px;\r\n\tpadding-left: 16px;\r\n\tpadding-top: 16px;\r\n\tposition: relative\r\n}\r\n.product-entry .product-deatil h5 a {\r\n\tcolor: #2f383d;\r\n\tfont-size: 15px;\r\n\tline-height: 19px;\r\n\ttext-decoration: none\r\n}\r\n.product-entry .product-deatil h5 a span {\r\n\tcolor: #9aa7af;\r\n\tdisplay: block;\r\n\tfont-size: 13px\r\n}\r\n.load-more-btn {\r\n\tbackground-color: #21c2f8;\r\n\tborder-bottom: 2px solid #037ca5;\r\n\tborder-radius: 2px;\r\n\tborder-top: 2px solid #0cf;\r\n\tmargin-top: 20px;\r\n\tpadding: 9px 0;\r\n\twidth: 100%\r\n}\r\n.product-block .product-deatil p.price-container span, .product-content .product-deatil p.price-container span, .product-entry .product-deatil p.price-container span, .shipping table tbody tr td p.price-container span, .shopping-items table tbody tr td p.price-container span {\r\n\tcolor: #21c2f8;\r\n\tfont-family: Lato, sans-serif;\r\n\tfont-size: 24px;\r\n\tline-height: 20px\r\n}\r\n.product-info.smart-form .rating label {\r\n\tmargin-top: 0\r\n}\r\n.product-wrap .product-image span.tag2 {\r\n\tposition: absolute;\r\n\ttop: 10px;\r\n\tright: 10px;\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\tborder-radius: 50%;\r\n\tpadding: 10px 0;\r\n\tcolor: #fff;\r\n\tfont-size: 11px;\r\n\ttext-align: center\r\n}\r\n.product-wrap .product-image span.sale {\r\n\tbackground-color: #57889c\r\n}\r\n.product-wrap .product-image span.hot {\r\n\tbackground-color: #a90329\r\n}\r\n.shop-btn {\r\n\tposition: relative\r\n}\r\n.shop-btn>span {\r\n\tbackground: #a90329;\r\n\tdisplay: inline-block;\r\n\tfont-size: 10px;\r\n\tbox-shadow: inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);\r\n\tfont-weight: 700;\r\n\tborder-radius: 50%;\r\n\tpadding: 2px 4px 3px!important;\r\n\ttext-align: center;\r\n\tline-height: normal;\r\n\twidth: 19px;\r\n\ttop: -7px;\r\n\tleft: -7px\r\n}\r\n.description-tabs {\r\n\tpadding: 30px 0 5px!important\r\n}\r\n.description-tabs .tab-content {\r\n\tpadding: 10px 0\r\n}\r\n.product-deatil {\r\n\tpadding: 30px 30px 50px\r\n}\r\n.product-deatil hr+.description-tabs {\r\n\tpadding: 0 0 5px!important\r\n}\r\n.product-deatil .carousel-control.left, .product-deatil .carousel-control.right {\r\n\tbackground: none!important\r\n}\r\n.product-deatil .glyphicon {\r\n\tcolor: #3276b1\r\n}\r\n.product-deatil .product-image {\r\n\tborder-right: none!important\r\n}\r\n.product-deatil .name {\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 0\r\n}\r\n.product-deatil .name small {\r\n\tdisplay: block\r\n}\r\n.product-deatil .name a {\r\n\tmargin-left: 0\r\n}\r\n.product-deatil .price-container {\r\n\tfont-size: 24px;\r\n\tmargin: 0;\r\n\tfont-weight: 300\r\n}\r\n.product-deatil .price-container small {\r\n\tfont-size: 12px\r\n}\r\n.product-deatil .fa-2x {\r\n\tfont-size: 16px!important\r\n}\r\n.product-deatil .fa-2x>h5 {\r\n\tfont-size: 12px;\r\n\tmargin: 0\r\n}\r\n.product-deatil .fa-2x+a, .product-deatil .fa-2x+a+a {\r\n\tfont-size: 13px\r\n}\r\n.product-deatil .certified {\r\n\tmargin-top: 10px\r\n}\r\n.product-deatil .certified ul {\r\n\tpadding-left: 0\r\n}\r\n.product-deatil .certified ul li:not(first-child) {\r\n\tmargin-left: -3px\r\n}\r\n.product-deatil .certified ul li {\r\n\tdisplay: inline-block;\r\n\tbackground-color: #f9f9f9;\r\n\tborder: 1px solid #ccc;\r\n\tpadding: 13px 19px\r\n}\r\n.product-deatil .certified ul li:first-child {\r\n\tborder-right: none\r\n}\r\n.product-deatil .certified ul li a {\r\n\ttext-align: left;\r\n\tfont-size: 12px;\r\n\tcolor: #6d7a83;\r\n\tline-height: 16px;\r\n\ttext-decoration: none\r\n}\r\n.product-deatil .certified ul li a span {\r\n\tdisplay: block;\r\n\tcolor: #21c2f8;\r\n\tfont-size: 13px;\r\n\tfont-weight: 700;\r\n\ttext-align: center\r\n}\r\n.product-deatil .message-text {\r\n\twidth: calc(100% - 70px)\r\n}\r\n\r\n@media only screen and (min-width:1024px) {\r\n.product-content .product-image {\r\n\tborder-right: 1px solid #dfe5e9;\r\n\tmargin-right: -13px\r\n}\r\n.product-content .product-info {\r\n\tposition: relative\r\n}\r\n.product-content .description, .product-content .product-deatil, .product-content .product-info {\r\n\tmargin-left: -13px\r\n}\r\n.product-deatil.product-content .description, .product-deatil.product-content .product-info {\r\n\tmargin-left: 0\r\n}\r\n}\r\nhtml {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tmin-height: 100%;\r\n\tbackground: url(../img/mybg.png) #fff;\r\n\tposition: relative\r\n}\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tmin-height: 100%;\r\n\tbackground:#fff;\r\n\tdirection: ltr\r\n}\r\nbody.mobile-view-activated.hidden-menu {\r\n\toverflow-x: hidden\r\n}\r\nbody.modal-open {\r\n\toverflow: hidden!important\r\n}\r\na:active, a:focus, a:hover, button, button:active, button:focus, embed, input::-moz-focus-inner, object {\r\noutline:0\r\n}\r\nh1, h2, h3, h4 {\r\n\tmargin: 0;\r\n\tfont-family: \"Open Sans\", Arial, Helvetica, Sans-Serif;\r\n\tfont-weight: 300\r\n}\r\n.page-title {\r\n\tmargin: 12px 0 28px\r\n}\r\n.page-title span {\r\n\tfont-size: 16px;\r\n\tcolor: #333;\r\n\tdisplay: inline-block;\r\n\tvertical-align: 1px\r\n}\r\nlabel {\r\n\tfont-weight: 400\r\n}\r\n:focus {\r\n\toutline: 0!important\r\n}\r\na, button, input {\r\n\t-ms-touch-action: none!important\r\n}\r\n.uneditable-input:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus {\r\n\toutline: 0;\r\n\tbox-shadow: none!important\r\n}\r\n.form-control, .input-lg, .input-sm, .input-xs {\r\n\tborder-radius: 0!important;\r\n\t-webkit-border-radius: 0!important;\r\n\t-moz-border-radius: 0!important\r\n}\r\n.input-xs {\r\n\theight: 24px;\r\n\tpadding: 2px 10px;\r\n\tfont-size: 11px;\r\n\tline-height: 1.5\r\n}\r\n.btn-xs {\r\n\tpadding: 1px 5px\r\n}\r\n.btn-sm {\r\n\tpadding: 6px 10px 5px\r\n}\r\n.btn-lg {\r\n\tpadding: 10px 16px\r\n}\r\n.no-space {\r\n\tmargin: 0\r\n}\r\n.no-space>[class*=col-] {\r\n\tmargin: 0!important;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0\r\n}\r\n#content {\r\n\tpadding: 10px 14px;\r\n\tposition: relative\r\n}\r\nbody.container {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tpadding: 0;\r\n\tborder-left: 1px solid #bfbfbf;\r\n\tborder-right: 1px solid #bfbfbf;\r\n\tbox-shadow: 0 2px 70px rgba(0,0,0,.45)\r\n}\r\nbody.container.hidden-menu:not(.mobile-view-activated) {\r\n\toverflow: hidden\r\n}\r\nbody.container.modal-open {\r\n\tpadding: 0!important\r\n}\r\nh1 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 24px;\r\n\tmargin: 10px 0\r\n}\r\nh1 small {\r\n\tfont-size: 18px;\r\n\tfont-weight: 300;\r\n\tletter-spacing: -1px\r\n}\r\n.lead {\r\n\tfont-size: 19px\r\n}\r\nh2 {\r\n\tletter-spacing: -1px;\r\n\tfont-size: 22px;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh3 {\r\n\tdisplay: block;\r\n\tfont-size: 19px;\r\n\tfont-weight: 400;\r\n\tmargin: 20px 0;\r\n\tline-height: normal\r\n}\r\nh4 {\r\n\tline-height: normal\r\n}\r\nh5 {\r\n\tfont-size: 17px;\r\n\tfont-weight: 300;\r\n\tmargin: 10px 0;\r\n\tline-height: normal\r\n}\r\nh6 {\r\n\tfont-size: 15px;\r\n\tmargin: 10px 0;\r\n\tfont-weight: 700;\r\n\tline-height: normal\r\n}\r\n.row-seperator-header {\r\n\tmargin: 15px 14px 20px;\r\n\tborder-bottom: none;\r\n\tdisplay: block;\r\n\tcolor: #646464;\r\n\tfont-size: 20px;\r\n\tfont-weight: 400\r\n}\r\n.center-canvas, .center-child-canvas>canvas {\r\n\tdisplay: block!important;\r\n\tmargin: 0 auto!important\r\n}\r\n.bordered {\r\n\tborder: 1px solid rgba(0,0,0,.2)\r\n}\r\n.bordered:hover {\r\n\tborder: 1px solid rgba(0,0,0,.4)\r\n}\r\naside {\r\n\tdisplay: block;\r\n\tbackground: #2f323c!important;\r\n\tmin-height: 100%\r\n}\r\n#header {\r\n\tdisplay: block;\r\n\theight: 54px;\r\n\tmargin: 0;\r\n\tpadding: 0 13px 0 0;\r\n\tbackground: #73767a;\r\n\tbackground: -webkit-linear-gradient(top, #73767a 0%, #6f7176 50%, #6f7075 100%);\r\n\tbackground: linear-gradient(to bottom, #73767a 0%, #6f7176 50%, #6f7075 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#73767a', endColorstr='#6f7075', GradientType=0 );\r\n\tposition: relative;\r\n\tz-index: 905\r\n}\r\n#header>div {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\theight: 49px;\r\n\tfloat: left\r\n}\r\n#header>div.open {\r\n\tfont-weight: 700\r\n}\r\n.fixed-header #header {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 905;\r\n\ttop: 0;\r\n\tborder-bottom: 2px solid #999;\r\n\tborder-bottom: 1px solid rgba(0,0,0,.3);\r\n\tbox-shadow: -11px 12px 23px rgba(0,0,0,.1)\r\n}\r\n.fixed-header.fixed-ribbon #header {\r\n\tborder-bottom: none;\r\n\tbox-shadow: none\r\n}\r\n.container.fixed-header #header {\r\n\tmax-width: 1164px\r\n}\r\n.fixed-header #header .ajax-dropdown {\r\n\tz-index: 906\r\n}\r\n.fixed-header #shortcut {\r\n\tposition: fixed\r\n}\r\n.fixed-header #main {\r\n\tmargin-top: 49px\r\n}\r\n#logo  {\r\n\tdisplay: inline-block;\r\n\theight: 54px; width:137px;\r\n\tfloat: left;background: #a32840;\r\nbackground: -webkit-linear-gradient(top,  #a32840 0%,#a72841 51%,#a32741 100%);\r\nbackground: linear-gradient(to bottom,  #a32840 0%,#a72841 51%,#a32741 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a32840', endColorstr='#a32741',GradientType=0 );\r\n\r\n}\r\n#logo-group span#activity {\r\n\tborder-radius: 2px;\r\n\tcursor: default!important;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\theight: 24px;\r\n\twidth: 24px;\r\n\tpadding: 2px;\r\n\ttext-align: center;\r\n\ttext-decoration: none!important;\r\n\t-moz-user-select: none;\r\n\t-webkit-user-select: none;\r\n\tbackground-color: #f8f8f8;\r\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#f8f8f8), to(#f1f1f1));\r\n\tbackground-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);\r\n\tbackground-image: -webkit-linear-gradient(bottom, #f8f8f8, #f1f1f1);\r\n\tbackground-image: linear-gradient(to top, #f8f8f8, #f1f1f1);\r\n\tborder: 1px solid #bfbfbf;\r\n\tcolor: #c4bab6;\r\n\tfont-size: 19px;\r\n\tmargin: 10px 0 0;\r\n\tposition: relative\r\n}\r\n#logo-group span#activity:hover {\r\n\tborder: 1px solid #bfbfbf;\r\n\t-webkit-transition: all 0s;\r\n\ttransition: all 0s;\r\n\tcursor: pointer!important;\r\n\tbox-shadow: inset 0 0 4px 1px rgba(0,0,0,.08)\r\n}\r\n#logo {\r\n\tdisplay: inline-block;\r\n    width: 137px;\r\n    height: 54px;\r\n}\r\n#logo img {\r\n\tmargin-top: 19px;\r\n    margin-left: 27px;\r\n}\r\n#activity b.badge {\r\n\tposition: absolute;\r\n\ttop: -5px;\r\n\tright: -5px;\r\n\tcursor: pointer;\r\n\tbackground: #0091d9;\r\n\tdisplay: inline-block;\r\n\tfont-size: 10px;\r\n\tbox-shadow: inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tborder-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-webkit-border-radius: 50%;\r\n\tpadding: 2px 4px 3px;\r\n\ttext-align: center;\r\n\tline-height: normal\r\n}\r\n#activity.active .badge {\r\n\tbackground: #006fa6!important\r\n}\r\n#project-context, .project-context {\r\n\tdisplay: inline-block;\r\n\tpadding: 7px 13px 0;\r\n\tposition: relative\r\n}\r\n#project-context>span, .project-context>span {\r\n\tdisplay: block\r\n}\r\n#project-context>:first-child, .project-context>:first-child {\r\n\tdisplay: block;\r\n\tcolor: #bfbfbf;\r\n\tfont-size: 10px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\ttext-shadow: 0 0 1px #fff;\r\n\tpadding-left: 0;\r\n\ttext-align: left\r\n}\r\n#project-selector, .project-selector {\r\n\tmax-width: 97%;\r\n\twhite-space: nowrap;\r\n\tbackground: 0 0;\r\n\tborder: none;\r\n\tpadding: 0;\r\n\ttext-align: left;\r\n\tcolor: #555;\r\n\tfont-size: 14px;\r\n\tcursor: pointer\r\n}\r\n#project-selector:hover, .project-selector:hover {\r\n\tcolor: #333\r\n}\r\n\r\n.container.fixed-ribbon #ribbon {\r\n\twidth: 944px;\r\n\tleft: 590px\r\n}\r\n.fixed-ribbon #content {\r\n\tpadding-top: 50px\r\n}\r\n.minified.fixed-ribbon #ribbon {\r\n\tleft: 45px\r\n}\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 10px\r\n}\r\n.fixed-navigation #left-panel {\r\n\theight: 100%;\r\n\tposition: fixed\r\n}\r\n.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: touch;\r\n\toverflow-y: auto;\r\n\theight: 100%;\r\n\tpadding-bottom: 49px\r\n}\r\n.fixed-navigation nav>ul {\r\n\tpadding-right: 15px;\r\n\tposition: relative;\r\n\theight: 100%;\r\n\twidth: 114%;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll\r\n}\r\n.mobile-detected.fixed-navigation nav>ul {\r\n\tpadding-right: 30px!important\r\n}\r\n.minified.fixed-navigation nav {\r\n\t-webkit-overflow-scrolling: none;\r\n\toverflow: visible;\r\n\theight: auto;\r\n\tpadding-bottom: 0\r\n}\r\n.minified.fixed-navigation nav>ul {\r\n\toverflow: visible;\r\n\tpadding-right: 0;\r\n\twidth: 100%\r\n}\r\nnav ul li a:active {\r\n\tbackground: #616161!important\r\n}\r\nnav ul {\r\n\twidth: 100%;\r\n\tpadding: 40px 28px 25px 0;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tfont-size: 13px;\r\n\tline-height: .5em;\r\n\tlist-style: none;\r\n\tposition: relative\r\n}\r\nnav ul .active>a {\r\n\tcolor: #fff!important;\r\n\tposition: relative\r\n}\r\nnav ul li.active>a:before {\r\n\tcontent: \"\\f0d9\";\r\n\tfont-family: FontAwesome;\r\n\tdisplay: block;\r\n\theight: 27px;\r\n\tline-height: normal;\r\n\twidth: 27px;\r\n\tposition: absolute;\r\n\tright: -21px;\r\n\tfont-size: 20px;\r\n\tcolor: #eee\r\n}\r\nnav ul li.active.open>a:before {\r\n\tcontent: \"\"\r\n}\r\nnav>ul>li:last-child.open {\r\n\tborder-bottom: 1px solid rgba(255,255,255,.15)\r\n}\r\nnav ul li a {\r\n\tline-height: normal;\r\n\tfont-size: 14px;\r\n\tpadding: 10px 10px 10px 11px;\r\n\tcolor: #c0bbb7;\r\n\tdisplay: block;\r\n\tfont-weight: 400;\r\n\ttext-decoration: none!important;\r\n\tposition: relative\r\n}\r\nnav>ul>li>ul>li>a, nav>ul>li>ul>li>ul>li>a {\r\n\tpadding-top: 7px;\r\n\tpadding-bottom: 7px\r\n}\r\nnav ul li a:focus {\r\n\tcolor: #c9c9c9\r\n}\r\nnav ul li a:hover {\r\n\tcolor: #fff;\r\n\ttext-decoration: none\r\n}\r\nnav ul li a.inactive, nav ul li a.inactive:hover {\r\n\topacity: .5;\r\n\tcursor: not-allowed;\r\n\tcolor: #c0bbb7\r\n}\r\nnav ul b {\r\n\tfloat: right;\r\n\tfont-size: 11px;\r\n\tmargin-top: 2px\r\n}\r\nnav ul span.menu-item-parent {\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\nnav ul li.open>a, nav ul li.open>a b {\r\n\tcolor: #fff!important\r\n}\r\nnav>ul>li>a b {\r\n\tposition: absolute!important;\r\n\tright: 10px;\r\n\ttop: 10px\r\n}\r\nnav>ul>li>a>i {\r\n\tmargin-right: 5px;\r\n\twidth: 15px;\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tposition: relative\r\n}\r\nnav>ul>li>a>i>em {\r\n\tfont-size: 9px;\r\n\tdisplay: block;\r\n\tpadding: 2px;\r\n\tposition: absolute;\r\n\ttop: -8px;\r\n\tright: -6px;\r\n\ttext-decoration: none;\r\n\tfont-style: normal;\r\n\tbackground: #ED1C24;\r\n\tcolor: #fff;\r\n\tmin-width: 13px;\r\n\tborder-radius: 50%;\r\n\tmax-height: 13px;\r\n\tline-height: 8px;\r\n\tfont-weight: 700;\r\n\tvertical-align: baseline;\r\n\twhite-space: nowrap;\r\n\ttext-align: center;\r\n\tborder: 1px solid rgba(255,255,255,.1)\r\n}\r\nnav ul li li {\r\n\tborder-bottom: none;\r\n\tposition: relative\r\n}\r\nnav>ul>li>ul::before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tleft: 23px;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tborder-left: 1px solid #7A7A7A\r\n}\r\nnav>ul ul li::before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 8px;\r\n\tleft: 23px;\r\n\ttop: 16px;\r\n\tborder-top: 1px solid #7A7A7A;\r\n\tz-index: 1\r\n}\r\nnav>ul ul ul li::before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 18px;\r\n\tleft: 10px;\r\n\ttop: 17px;\r\n\tborder-top: 1px solid transparent\r\n}\r\nnav>ul ul li a i {\r\n\tfont-size: 14px!important;\r\n\twidth: 18px!important;\r\n\ttext-align: center!important;\r\n\tvertical-align: 0!important;\r\n\tline-height: 1!important\r\n}\r\nnav>ul>li:hover>ul::before, nav>ul>li:hover>ul>li::before {\r\n\tborder-color: #ACACAC!important\r\n}\r\nnav ul ul {\r\n\tmargin: 0;\r\n\tdisplay: none;\r\n\tbackground: rgba(69,69,69,.6);\r\n\tpadding: 7px 0\r\n}\r\nnav ul ul ul {\r\n\tbackground: 0 0;\r\n\tpadding: 0\r\n}\r\nnav ul ul li {\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\nnav ul ul li>a {\r\n\tpadding-left: 42px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\toutline: 0\r\n}\r\nnav ul ul li>a:hover {\r\n\tbackground-color: rgba(69,69,69,.8);\r\n\tcolor: #fff\r\n}\r\nnav ul ul ul li a {\r\n\tcolor: #bfbfbf;\r\n\tpadding: 8px 10px 8px 60px;\r\n\tfont-size: 14px\r\n}\r\nnav ul ul ul li a:hover {\r\n\tcolor: #fff\r\n}\r\nnav ul ul ul ul li a {\r\n\tpadding-left: 80px\r\n}\r\nnav ul ul ul ul ul li a {\r\n\tpadding-left: 100px\r\n}\r\nnav ul ul ul ul ul ul li a {\r\n\tpadding-left: 120px\r\n}\r\nnav ul ul b {\r\n\tcolor: #B3B3B3\r\n}\r\nnav ul ul>li:hover b {\r\n\tcolor: #D5D9E2\r\n}\r\n.header-dropdown-list {\r\n\tlist-style: none;\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\tpadding-left: 0;\r\n\tpadding-right: 0\r\n}\r\n.header-dropdown-list>li {\r\n\tdisplay: inline-block;\r\n\tpadding-right: 5px\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle {\r\n\tmargin-top: 16px;\r\n\tdisplay: block; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; color:#fff;\r\n}\r\n.header-dropdown-list>li>.dropdown-toggle i { margin:0 0 0 8px;}\r\n.smart-accordion-default.panel-group {\r\n\tmargin-bottom: 0\r\n}\r\n.smart-accordion-default.panel-group .panel+.panel {\r\n\tmargin-top: -1px\r\n}\r\n.smart-accordion-default.panel-group .panel-heading {\r\n\tpadding: 0\r\n}\r\n.smart-accordion-default.panel-group .panel-title a {\r\n\tdisplay: block;\r\n\tpadding: 10px 15px;\r\n\ttext-decoration: none!important\r\n}\r\n.panel-group .panel, .smart-accordion-default .panel-heading {\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.smart-accordion-default .panel-default>.panel-heading {\r\n\tbackground-color: #fcfcfc\r\n}\r\n.smart-accordion-default .panel-default {\r\n\tborder-color: #c3c3c3\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>.fa, .smart-accordion-default .panel-title>a>:first-child {\r\n\tdisplay: none\r\n}\r\n.smart-accordion-default .panel-title>a.collapsed>:first-child {\r\n\tdisplay: inline-block\r\n}\r\n.no-padding .smart-accordion-default>div {\r\n\tborder-left: none!important;\r\n\tborder-right: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:first-child {\r\n\tborder-top: none!important\r\n}\r\n.no-padding .smart-accordion-default>div:last-child {\r\n\tborder-bottom: none!important\r\n}\r\n.onoffswitch-container {\r\n\tmargin-top: 4px;\r\n\tmargin-left: 7px;\r\n\tdisplay: inline-block\r\n}\r\n.onoffswitch {\r\n\tposition: relative;\r\n\twidth: 50px;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tmargin-top: 3px;\r\n\tmargin-bottom: 3px;\r\n\tmargin-left: 5px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle\r\n}\r\n.onoffswitch-checkbox {\r\n\tdisplay: none\r\n}\r\n.onoffswitch-label {\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n\tcursor: pointer;\r\n\tborder: 1px solid #626262;\r\n\tborder-radius: 50px;\r\n\tborder-color: #adadad #b3b3b3 #9e9e9e;\r\n\tbox-sizing: content-box\r\n}\r\n.onoffswitch-inner {\r\n\twidth: 200%;\r\n\tmargin-left: -100%;\r\n\tdisplay: block\r\n}\r\n.onoffswitch-inner:after, .onoffswitch-inner:before {\r\n\tfloat: left;\r\n\twidth: 50%;\r\n\theight: 15px;\r\n\tpadding: 0;\r\n\tline-height: 15px;\r\n\tfont-size: 10px;\r\n\tfont-family: Trebuchet, Arial, sans-serif;\r\n\tfont-weight: 700;\r\n\tbox-sizing: border-box\r\n}\r\n.onoffswitch-inner:before {\r\n\tcontent: attr(data-swchon-text);\r\n\ttext-shadow: 0 -1px 0 #333;\r\n\tpadding-left: 7px;\r\n\tbackground-color: #3276b1;\r\n\tcolor: #fff;\r\n\tbox-shadow: inset 0 2px 6px rgba(0,0,0,.5), 0 1px 2px rgba(0,0,0,.05);\r\n\ttext-align: left\r\n}\r\n.onoffswitch-inner:after {\r\n\tcontent: attr(data-swchoff-text);\r\n\tpadding-right: 7px;\r\n\ttext-shadow: 0 -1px 0 #fff;\r\n\tbackground-color: #fff;\r\n\tcolor: #555;\r\n\ttext-align: right;\r\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05)\r\n}\r\n.onoffswitch-switch {\r\n\twidth: 19px;\r\n\theight: 19px;\r\n\tmargin: -2px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #9a9a9a;\r\n\tborder-radius: 50px;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 32px;\r\n\tbox-sizing: content-box;\r\n\tbackground-color: #f4f4f4;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#eee));\r\n\tbackground-image: -webkit-linear-gradient(top, #fff, #eee);\r\n\tbackground-image: linear-gradient(to bottom, #fff, #eee);\r\n\tbackground-repeat: repeat-x;\r\n\tbox-shadow: 1px 1px 4px 0 rgba(0,0,0,.3)\r\n}\r\n.onoffswitch-checkbox+.onoffswitch-label .onoffswitch-switch:before, .onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch:before {\r\n\tcontent: \"\\f00d\";\r\n\tcolor: #a90329;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tline-height: 19px;\r\n\tfont-size: 10px;\r\n\ttext-shadow: 0 -1px 0 #fff;\r\n\tfont-weight: 700;\r\n\tfont-family: FontAwesome\r\n}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch:before {\r\n\tcontent: \"\\f00c\";\r\n\tcolor: #57889c\r\n}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner {\r\n\tmargin-left: 0;\r\n\tdisplay: block\r\n}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch {\r\n\tright: 0\r\n}\r\n.onoffswitch-switch:hover {\r\n\tbackground-color: #eee\r\n}\r\n.onoffswitch-switch:active {\r\n\tbackground-color: #eee;\r\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05)\r\n}\r\n.onoffswitch-checkbox:checked:disabled+.onoffswitch-label .onoffswitch-inner:before, .onoffswitch-checkbox:disabled+.onoffswitch-label .onoffswitch-inner:after {\r\n\ttext-shadow: 0 1px 0 #fff;\r\n\tbackground: #bfbfbf;\r\n\tcolor: #333\r\n}\r\n.onoffswitch-checkbox:checked:disabled+.onoffswitch-label .onoffswitch-switch, .onoffswitch-checkbox:disabled+.onoffswitch-label .onoffswitch-switch {\r\n\tbackground-color: #f4f4f4;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#bfbfbf), to(#f4f4f4));\r\n\tbackground-image: -webkit-linear-gradient(top, #bfbfbf, #f4f4f4);\r\n\tbackground-image: linear-gradient(to bottom, #bfbfbf, #f4f4f4);\r\n\tbox-shadow: none!important\r\n}\r\n.onoffswitch-checkbox:checked:disabled+.onoffswitch-label .onoffswitch-label, .onoffswitch-checkbox:disabled+.onoffswitch-label {\r\n\tborder-color: #ababab #999 #878787!important\r\n}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label {\r\n\tborder-color: #3276b1 #2a6395 #255681\r\n}\r\n.onoffswitch+span, .onoffswitch-title {\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tmargin-top: -5px\r\n}\r\n.form-control {\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.form hr {\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tborder-color: rgba(0,0,0,.1);\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px\r\n}\r\n.form fieldset {\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tbackground: rgba(255,255,255,.9);\r\n\tposition: relative\r\n}\r\nfieldset {\r\n\tposition: relative\r\n}\r\n.form-actions {\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(249,249,249,.9);\r\n\tmargin-top: 25px;\r\n\tmargin-left: -13px;\r\n\tmargin-right: -13px;\r\n\tmargin-bottom: -13px;\r\n\ttext-align: right\r\n}\r\n.well .form-actions {\r\n\tmargin-left: -19px;\r\n\tmargin-right: -19px;\r\n\tmargin-bottom: -19px\r\n}\r\n.well.well-lg .form-actions {\r\n\tmargin-left: -24px;\r\n\tmargin-right: -24px;\r\n\tmargin-bottom: -24px\r\n}\r\n.well.well-sm .form-actions {\r\n\tmargin-left: -9px;\r\n\tmargin-right: -9px;\r\n\tmargin-bottom: -9px\r\n}\r\n.popover-content .form-actions {\r\n\tmargin: 0 -14px -9px;\r\n\tborder-radius: 0 0 3px 3px;\r\n\tpadding: 9px 14px\r\n}\r\n.no-padding .form .form-actions {\r\n\tmargin: 0;\r\n\tdisplay: block;\r\n\tpadding: 13px 14px 15px;\r\n\tborder-top: 1px solid rgba(0,0,0,.1);\r\n\tbackground: rgba(248,248,248,.9);\r\n\ttext-align: right;\r\n\tmargin-top: 25px\r\n}\r\n.bootstrap-duallistbox-container label, .form header, legend {\r\n\tdisplay: block;\r\n\tpadding: 8px 0;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.2);\r\n\tbackground: #fff;\r\n\tfont-size: 16px;\r\n\tfont-weight: 300;\r\n\tcolor: #222;\r\n\tmargin: 25px 0 20px\r\n}\r\n.no-padding .form header {\r\n\tmargin: 25px 14px 0\r\n}\r\n.form header:first-child {\r\n\tmargin-top: 10px\r\n}\r\nlegend {\r\n\tfont-weight: 400;\r\n\tmargin-top: 0;\r\n\tbackground: 0 0\r\n}\r\n.input-group-addon {\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\ttransition: background-color .3s;\r\n\t-o-transition: background-color .3s;\r\n\t-ms-transition: background-color .3s;\r\n\t-moz-transition: background-color .3s;\r\n\t-webkit-transition: background-color .3s\r\n}\r\n.input-group-addon .fa {\r\n\tfont-size: 14px\r\n}\r\n.input-group-addon .fa-2x, .input-group-addon .fa-lg {\r\n\tfont-size: 2em\r\n}\r\n.input-group-addon .fa-3x, .input-group-addon .fa-4x, .input-group-addon .fa-5x {\r\n\tfont-size: 30px\r\n}\r\ninput[type=text]:focus+.input-group-addon {\r\n\tborder-color: #0091d9;\r\n\tbackground-color: #72a0ce;\r\n\tcolor: #fff\r\n}\r\n.has-warning input[type=text], .has-warning input[type=text]+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]+.input-group-addon {\r\n\tbackground-color: #faf2cc;\r\n\tcolor: #c09853\r\n}\r\n.has-warning input[type=text]:focus, .has-warning input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #dbab57\r\n}\r\n.has-warning input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #e1c118;\r\n\tcolor: #fff\r\n}\r\n.has-error .input-group-addon {\r\n\tborder-color: #b94a48;\r\n\tbackground: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text], .has-error input[type=text]+.input-group-addon {\r\n\tborder-color: #b94a48\r\n}\r\n.has-error input[type=text]+.input-group-addon {\r\n\tbackground-color: #f2dede;\r\n\tcolor: #b94a48\r\n}\r\n.has-error input[type=text]:focus, .has-error input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #c05e5e\r\n}\r\n.has-error input[type=text]:focus+.input-group-addon {\r\n\tbackground-color: #c05e5e;\r\n\tcolor: #fff\r\n}\r\n.has-success input[type=text]:focus+.input-group-addon {\r\n\tborder-color: #468847;\r\n\tbackground-color: #468847;\r\n\tcolor: #fff\r\n}\r\n.form .form-group:last-child, .form .form-group:last-child .note, .form fieldset .form-group:last-child, .form fieldset .form-group:last-child .note {\r\n\tmargin-bottom: 0\r\n}\r\n.note {\r\n\tmargin-top: 6px;\r\n\tpadding: 0 1px;\r\n\tfont-size: 11px;\r\n\tline-height: 15px;\r\n\tcolor: #999\r\n}\r\n.input-icon-right {\r\n\tposition: relative\r\n}\r\n.input-icon-left>i, .input-icon-right>i {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 30%;\r\n\tfont-size: 16px;\r\n\tcolor: #bfbfbf\r\n}\r\n.input-icon-left>i {\r\n\tright: auto;\r\n\tleft: 24px\r\n}\r\n.input-icon-right .form-control {\r\n\tpadding-right: 27px\r\n}\r\n.input-icon-left .form-control {\r\n\tpadding-left: 29px\r\n}\r\ninput[type=color].ui-autocomplete-loading, input[type=date].ui-autocomplete-loading, input[type=datetime-local].ui-autocomplete-loading, input[type=datetime].ui-autocomplete-loading, input[type=email].ui-autocomplete-loading, input[type=month].ui-autocomplete-loading, input[type=number].ui-autocomplete-loading, input[type=password].ui-autocomplete-loading, input[type=search].ui-autocomplete-loading, input[type=tel].ui-autocomplete-loading, input[type=text].ui-autocomplete-loading, input[type=time].ui-autocomplete-loading, input[type=url].ui-autocomplete-loading, input[type=week].ui-autocomplete-loading {\r\n\tbackground-image: url(../img/select2-spinner.gif)!important;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: 99% 50%;\r\n\tpadding-right: 27px\r\n}\r\n.input-group-addon .checkbox, .input-group-addon .radio {\r\n\tmin-height: 0;\r\n\tmargin-right: 0!important;\r\n\tpadding-top: 0\r\n}\r\n.input-group-addon label input[type=checkbox].checkbox+span, .input-group-addon label input[type=checkbox].checkbox+span:before, .input-group-addon label input[type=radio].radiobox+span, .input-group-addon label input[type=radio].radiobox+span:before {\r\n\tmargin-right: 0\r\n}\r\n.input-group-addon .onoffswitch, .input-group-addon .onoffswitch-label {\r\n\tmargin: 0\r\n}\r\n.timeline-seperator {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #999;\r\n\tmargin: 20px 0 0\r\n}\r\n.timeline-seperator>:first-child {\r\n\tpadding: 4px 5px;\r\n\tborder: 1px dashed rgba(0,0,0,.1);\r\n\tbackground: #fff;\r\n\tfont-size: 11px;\r\n\tborder-radius: 4px\r\n}\r\n.timeline-seperator .btn, .timeline-seperator .btn+.dropdown-menu {\r\n\tmargin-right: 15px\r\n}\r\n.timeline-seperator:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tmargin: 0 20px;\r\n\tborder-bottom: 1px dashed rgba(0,0,0,.1);\r\n\tmargin-top: -8px\r\n}\r\n.alert {\r\n\tmargin-bottom: 20px;\r\n\tmargin-top: 0;\r\n\tcolor: #675100;\r\n\tborder-width: 0;\r\n\tborder-left-width: 5px;\r\n\tpadding: 10px;\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0\r\n}\r\n.alert .close {\r\n\ttop: 0;\r\n\tright: -5px;\r\n\tline-height: 20px\r\n}\r\n.alert-heading {\r\n\tfont-weight: 600\r\n}\r\n.alert-danger {\r\n\tborder-color: #953b39;\r\n\tcolor: #fff;\r\n\tbackground-color: #c26565;\r\n\ttext-shadow: none\r\n}\r\n.alert-warning {\r\n\tborder-color: #dfb56c;\r\n\tcolor: #826430;\r\n\tbackground-color: #efe1b3\r\n}\r\n.alert-success {\r\n\tborder-color: #8ac38b;\r\n\tcolor: #356635;\r\n\tbackground-color: #cde0c4\r\n}\r\n.alert-info {\r\n\tborder-color: #9cb4c5;\r\n\tcolor: #305d8c;\r\n\tbackground-color: #d6dde7\r\n}\r\n.well {\r\n\tbackground-color: #fbfbfb;\r\n\tborder: 1px solid #ddd;\r\n\tbox-shadow: 0 1px 1px #ececec;\r\n\t-webkit-box-shadow: 0 1px 1px #ececec;\r\n\t-moz-box-shadow: 0 1px 1px #ececec;\r\n\tposition: relative\r\n}\r\n.well.well-clean {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent\r\n}\r\n.well.well-glass {\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground-color: rgba(255,255,255,.25);\r\n\tcolor: #fff\r\n}\r\n.well.well-light {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #e2e2e2\r\n}\r\n.widget-body .well {\r\n\tmargin-bottom: 0\r\n}\r\n.well.transparent {\r\n\tborder: none!important;\r\n\tbackground: none!important\r\n}\r\n.jarviswidget.well.transparent>div, .jarviswidget.well.transparent>div .widget-body {\r\n\tpadding: 0!important\r\n}\r\n.well[class*=\" bg-\"], .well[class^=bg-] {\r\n\tborder: 1px solid #555!important\r\n}\r\n.nav-tabs>li>a .badge {\r\n\tfont-size: 11px;\r\n\tpadding: 3px 5px;\r\n\topacity: .5;\r\n\tmargin-left: 5px;\r\n\tmin-width: 17px;\r\n\tfont-weight: 400\r\n}\r\n.nav-tabs>li>a>.fa {\r\n\topacity: .5\r\n}\r\n.tabs-left .nav-tabs>li>a .badge {\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0\r\n}\r\n.nav-tabs>li>a .label {\r\n\tdisplay: inline-block;\r\n\tfont-size: 11px;\r\n\tmargin-left: 5px;\r\n\topacity: .5\r\n}\r\n.nav-tabs>li.active>a .badge, .nav-tabs>li.active>a .label, .nav-tabs>li.active>a>.fa {\r\n\topacity: 1\r\n}\r\n.nav-tabs>li>a {\r\n\tborder-radius: 0;\r\n\tcolor: #333\r\n}\r\n.nav-tabs>li.active>a {\r\n\tbox-shadow: 0 -2px 0 #57889c;\r\n\tborder-top-width: 0!important;\r\n\tmargin-top: 1px!important;\r\n\tfont-weight: 700\r\n}\r\n.tabs-left .nav-tabs>li.active>a {\r\n\tbox-shadow: -2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-left: none!important;\r\n\tmargin-left: 1px!important\r\n}\r\n.tabs-left .nav-pills>li.active>a {\r\n\tborder: none!important;\r\n\tbox-shadow: none!important;\r\n\t-webkit-box-shadow: none!important;\r\n\t-moz-box-shadow: none!important\r\n}\r\n.tabs-right .nav-tabs>li.active>a {\r\n\tbox-shadow: 2px 0 0 #57889c;\r\n\tborder-top-width: 1px!important;\r\n\tborder-right: none!important;\r\n\tmargin-right: 1px!important\r\n}\r\n.tabs-below .nav-tabs>li.active>a {\r\n\tbox-shadow: 0 2px 0 #57889c;\r\n\tborder-bottom-width: 0!important;\r\n\tborder-top: none!important;\r\n\tmargin-top: 0!important\r\n}\r\n.tabs-left>.nav-pills>li, .tabs-left>.nav-tabs>li, .tabs-right>.nav-pills>li, .tabs-right>.nav-tabs>li {\r\n\tfloat: none\r\n}\r\n.tabs-left>.nav-pills>li>a, .tabs-left>.nav-tabs>li>a, .tabs-right>.nav-pills>li>a, .tabs-right>.nav-tabs>li>a {\r\n\tmin-width: 74px;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 3px\r\n}\r\n.tabs-left>.nav-pills, .tabs-left>.nav-tabs {\r\n\tfloat: left;\r\n\tmargin-right: 19px;\r\n\tborder-right: 1px solid #ddd\r\n}\r\n.tabs-left>.nav-pills {\r\n\tborder-right: none\r\n}\r\n.tabs-left>.nav-tabs>li>a {\r\n\tmargin-right: -1px\r\n}\r\n.tabs-left>.nav-tabs>li>a:focus, .tabs-left>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #d5d5d5 #eee #eee\r\n}\r\n.tabs-left>.nav-tabs .active>a, .tabs-left>.nav-tabs .active>a:focus, .tabs-left>.nav-tabs .active>a:hover {\r\n\tborder-color: #d5d5d5 transparent #d5d5d5 #ddd;\r\n*border-right-color:#fff\r\n}\r\n.tabs-left>.tab-content {\r\n\tmargin-left: 109px\r\n}\r\n.tabs-right>.nav-tabs {\r\n\tfloat: right;\r\n\tmargin-left: 19px;\r\n\tborder-left: 1px solid #ddd\r\n}\r\n.tabs-right>.nav-tabs>li>a {\r\n\tmargin-left: -1px\r\n}\r\n.tabs-right>.nav-tabs>li>a:focus, .tabs-right>.nav-tabs>li>a:hover {\r\n\tborder-color: #eee #eee #eee #ddd\r\n}\r\n.tabs-right>.nav-tabs .active>a, .tabs-right>.nav-tabs .active>a:focus, .tabs-right>.nav-tabs .active>a:hover {\r\n\tborder-color: #ddd #ddd #ddd transparent;\r\n*border-left-color:#fff\r\n}\r\n.tabs-below>.nav-tabs, .tabs-left>.nav-tabs, .tabs-right>.nav-tabs {\r\n\tborder-bottom: 0\r\n}\r\n.pill-content>.pill-pane, .tab-content>.tab-pane {\r\n\tdisplay: none\r\n}\r\n.pill-content>.active, .tab-content>.active {\r\n\tdisplay: block\r\n}\r\n.tabs-below>.nav-tabs {\r\n\tborder-top: 1px solid #ddd\r\n}\r\n.tabs-below>.nav-tabs>li {\r\n\tmargin-top: -1px;\r\n\tmargin-bottom: 0\r\n}\r\n.tabs-below>.nav-tabs>li>a:focus, .tabs-below>.nav-tabs>li>a:hover {\r\n\tborder-top-color: #ddd;\r\n\tborder-bottom-color: transparent\r\n}\r\n.tabs-below>.nav-tabs>.active>a, .tabs-below>.nav-tabs>.active>a:focus, .tabs-below>.nav-tabs>.active>a:hover {\r\n\tborder-color: transparent #ddd #ddd\r\n}\r\n.nav-tabs.bordered {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #ddd\r\n}\r\n.nav-tabs.bordered>:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.nav-tabs.bordered+.tab-content {\r\n\tborder: 1px solid #ddd;\r\n\tborder-top: none\r\n}\r\n.tabs-pull-right.nav-pills>li, .tabs-pull-right.nav-tabs>li {\r\n\tfloat: right\r\n}\r\n.tabs-pull-right.nav-pills>li:first-child>a, .tabs-pull-right.nav-tabs>li:first-child>a {\r\n\tmargin-right: 1px\r\n}\r\n.tabs-pull-right.bordered.nav-pills>li:first-child>a, .tabs-pull-right.bordered.nav-tabs>li:first-child>a {\r\n\tborder-left-width: 1px!important;\r\n\tmargin-right: 0;\r\n\tborder-right-width: 0\r\n}\r\n.jarviswidget>header>.nav-tabs.pull-left>li:first-child a {\r\n\tborder-left-width: 0!important\r\n}\r\n.btn, a:link, button {\r\n\t-webkit-tap-highlight-color: rgba(169,3,41,.5)\r\n}\r\n#logo-group *, .login-info, .login-info *, .minified .menu-item-parent {\r\n\tbox-sizing: content-box\r\n}\r\n.hidden-desktop {\r\n\tdisplay: none!important\r\n}\r\n.dropdown-menu-xs {\r\n\tmin-width: 37px\r\n}\r\n.dropdown-menu-xs>li>a {\r\n\tpadding: 3px 10px\r\n}\r\n.dropdown-menu-xs>li>a:hover i {\r\n\tcolor: #fff!important\r\n}\r\n.dropdown-submenu {\r\n\tposition: relative\r\n}\r\n.dropdown-submenu>.dropdown-menu {\r\n\ttop: 0;\r\n\tleft: 100%;\r\n\tmargin-top: -6px;\r\n\tmargin-left: -1px\r\n}\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n\tdisplay: block\r\n}\r\n.dropdown-submenu>a:after {\r\n\tdisplay: block;\r\n\tcontent: \" \";\r\n\tfloat: right;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-color: transparent;\r\n\tborder-style: solid;\r\n\tborder-width: 5px 0 5px 5px;\r\n\tborder-left-color: #bfbfbf;\r\n\tmargin-top: 5px;\r\n\tmargin-right: -10px\r\n}\r\n.dropdown-submenu:hover>a:after {\r\n\tborder-left-color: #fff\r\n}\r\n.dropdown-submenu.pull-left {\r\n\tfloat: none\r\n}\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n\tleft: -100%;\r\n\tmargin-left: 10px\r\n}\r\n.table.has-tickbox thead tr th:first-child {\r\n\twidth: 18px\r\n}\r\n.table.has-tickbox.smart-form tbody tr td:first-child .checkbox, .table.has-tickbox.smart-form tbody tr td:first-child .radio, .table.has-tickbox.smart-form thead tr th:first-child .checkbox, .table.has-tickbox.smart-form thead tr th:first-child .radio {\r\n\tpadding: 0!important\r\n}\r\n.fc-head-container thead tr, .table thead tr {\r\n\tbackground-color: #eee;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f2f2f2), to(#fafafa));\r\n\tbackground-image: -webkit-linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tbackground-image: -linear-gradient(top, #f2f2f2 0, #fafafa 100%);\r\n\tfont-size: 12px\r\n}\r\n.fc-head-container thead tr th {\r\n\tpadding: 4px;\r\n\tline-height: 1.428571429\r\n}\r\n.table-bordered>thead>tr>td, .table-bordered>thead>tr>th {\r\n\tborder-width: 1px\r\n}\r\n.no-padding>.table-bordered, .no-padding>.table-responsive>.table-bordered {\r\n\tborder: none!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:first-child, .no-padding>.table-bordered thead tr td:first-child, .no-padding>.table-bordered thead tr th:first-child, .no-padding>.table-responsive>.table-bordered tbody tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr td:first-child, .no-padding>.table-responsive>.table-bordered thead tr th:first-child {\r\n\tborder-left-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr td:last-child, .no-padding>.table-bordered thead tr th:last-child, .no-padding>.table-responsive>.table-bordered tbody tr td:last-child, .no-padding>.table-responsive>.table-bordered thead tr th:last-child {\r\n\tborder-right-width: 0!important\r\n}\r\n.no-padding>.table-bordered tbody tr:last-child td, .no-padding>.table-responsive>.table-bordered tbody tr:last-child td {\r\n\tborder-bottom-width: 0!important\r\n}\r\n.no-padding .table-responsive .table {\r\n\tmargin-bottom: 0\r\n}\r\n.no-padding .note-editable .table-bordered {\r\n\tborder: 1px solid #ddd!important\r\n}\r\n.smart-form.table td .checkbox i, .smart-form.table td .radio i, .smart-form.table th .checkbox i, .smart-form.table th .radio i {\r\n\ttop: 0!important\r\n}\r\n.table-condensed.table>tbody>tr>td, .table-condensed.table>tbody>tr>th, .table-condensed.table>tfoot>tr>td, .table-condensed.table>tfoot>tr>th, .table-condensed.table>thead>tr>td, .table-condensed.table>thead>tr>th {\r\n\tpadding: 5px 10px!important\r\n}\r\n.show-stats .progress {\r\n\theight: 7px;\r\n\tborder-radius: 0;\r\n\tmargin-top: 3px;\r\n\tmargin-bottom: 15px\r\n}\r\n.show-stats {\r\n\tpadding-top: 6px!important\r\n}\r\n.show-stat-buttons {\r\n\tfloat: left;\r\n\twidth: 100%\r\n}\r\n.show-stats .show-stat-buttons>:first-child {\r\n\tpadding-right: 5px\r\n}\r\n.show-stats .show-stat-buttons>:last-child {\r\n\tpadding-left: 5px\r\n}\r\n.show-stat-microcharts {\r\n\tmargin-left: -10px;\r\n\tmargin-right: -10px\r\n}\r\n.show-stat-microcharts>div {\r\n\tborder-right: 1px solid #DADADA!important;\r\n\tborder-top: 1px solid #DADADA!important;\r\n\tmargin-top: 10px!important;\r\n\theight: 65px;\r\n\toverflow: hidden;\r\n\tpadding: 7px 9px\r\n}\r\n.show-stat-microcharts>:last-child {\r\n\tborder-right: none!important\r\n}\r\n.show-stat-microcharts .sparkline {\r\n\tmargin-top: 10px;\r\n\tmargin-right: 8px;\r\n\topacity: .7\r\n}\r\n.show-stat-microcharts .sparkline:hover {\r\n\topacity: 1\r\n}\r\n.smaller-stat {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none\r\n}\r\n.smaller-stat li {\r\n\tmargin-top: 3px;\r\n\tmargin-right: 0\r\n}\r\n.smaller-stat li:first-child {\r\n\tmargin-top: 8px\r\n}\r\n.smaller-stat span.label {\r\n\twidth: 40px;\r\n\tdisplay: block;\r\n\ttext-align: left;\r\n\topacity: .5;\r\n\tcursor: default\r\n}\r\n.smaller-stat span.label:hover {\r\n\topacity: 1\r\n}\r\n.login-info {\r\n\tdisplay: block;\r\n    font-size: 11px;\r\n    height: 26px;\r\n    color: #707075;\r\n    width: 100%;\r\n    margin: 0!important;\r\n    line-height: 28px;\r\n    text-align: center;\r\n}\r\n.login-info a {\r\n\ttext-decoration: none!important;\r\n\tcolor: #c0bbb7;\r\n\tdisplay: inline-block;\r\n\tmargin-top: 6px\r\n}\r\n.login-info a span {\r\n\ttext-transform: capitalize;\r\n\tfont-size: 10px;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis; color:#707075;\r\n\tvertical-align: middle\r\n}\r\n\r\n.login-info>span {\r\n\theight: 25px;\r\n    display: block;\r\n    padding: 0 10px;\r\n    border: none;\r\n    color: #707075;\r\n    font-size: 10px;\r\n}\r\n.login-info img {\r\n\twidth: 25px;\r\n\theight: auto;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n\tmargin-top: 1px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0;\r\n\tborder-left: 3px solid #fff\r\n}\r\nimg.away, img.busy, img.offline, img.online {\r\n\tborder-left: 3px solid #fff\r\n}\r\nimg.online {\r\n\tborder-left-color: #40ac2b!important\r\n}\r\nimg.busy {\r\n\tborder-left-color: #ed1c24!important\r\n}\r\nimg.offline {\r\n\tborder-left-color: #ddd!important\r\n}\r\nimg.away {\r\n\tborder-left-color: #ffc40d!important\r\n}\r\n.client-form header {\r\n\tpadding: 15px 13px;\r\n\tmargin: 0;\r\n\tborder-bottom-style: solid;\r\n\tborder-bottom-color: rgba(0,0,0,.1);\r\n\tbackground: rgba(248,248,248,.9)\r\n}\r\n.minified .inbox-badge {\r\n\tborder-radius: 50%;\r\n\tfont-size: 9px;\r\n\tpadding: 2px;\r\n\tposition: absolute;\r\n\ttop: 6px;\r\n\tright: 6px;\r\n\tbackground: #ED1C24;\r\n\tmin-width: 13px\r\n}\r\n.minifyme {\r\n\tborder-bottom: 1px solid #302F2F;\r\n\tbackground: #454545;\r\n\tcolor: #A8A8A8;\r\n\ttext-align: center;\r\n\tpadding: 0;\r\n\twidth: 36px;\r\n\theight: 28px;\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tborder-radius: 5px 0 0 5px;\r\n\tcursor: pointer;\r\n\tmargin-top: 7px;\r\n\tfont-size: 19px;\r\n\t-webkit-transition: all .1s linear 0s;\r\n\ttransition: all .1s linear 0s\r\n}\r\n.minifyme:hover {\r\n\tbackground: #646464;\r\n\tcolor: #E4E4E4;\r\n\tright: 0;\r\n\twidth: 40px;\r\n\tpadding-right: 5px\r\n}\r\n.minified .minifyme {\r\n\tright: 0;\r\n\tcolor: #A8A8A8;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tborder-radius: 0;\r\n\tmargin: 0;\r\n\theight: 34px;\r\n\tfont-size: 23px\r\n}\r\n.minified .minifyme .fa:before {\r\n\tcontent: \"\\f0a9\"\r\n}\r\n.minified .login-info a i, .minified .login-info a span {\r\n\tdisplay: none\r\n}\r\n.minified .login-info span {\r\n\tpadding: 0 5px;\r\n\ttext-align: center\r\n}\r\n.minified .login-info img {\r\n\tmargin: -2px 0 0;\r\n\twidth: 30px\r\n}\r\n.minified .login-info {\r\n\theight: 38px;\r\n\tborder-bottom: 1px solid #181818\r\n}\r\n.minified #left-panel {\r\n\twidth: 45px\r\n}\r\n.minified #main {\r\n\tmargin-left: 45px\r\n}\r\n.minified #left-panel, .minified nav>ul>li {\r\n\toverflow: visible\r\n}\r\n.minified nav>ul>ul {\r\n\tmin-height: 100px!important;\r\n\tmax-height: 180px!important;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tbackground: #ed1c24!important\r\n}\r\n.minified nav>ul>li, .minified nav>ul>li a {\r\n\tposition: relative\r\n}\r\n.minified nav ul>li>a {\r\n\tpadding: 10px 11px;\r\n\tdisplay: block\r\n}\r\n.minified nav>ul>li>a .fa.fa-fw {\r\n\tdisplay: block;\r\n\twidth: auto;\r\n\ttext-align: center;\r\n\tpadding: 0\r\n}\r\n.minified nav>ul>li>a>i {\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tdisplay: block\r\n}\r\n.minified nav>ul>li.active>a::before {\r\n\tcontent: \"\\f0d9\"\r\n}\r\n.minified nav ul ul li a {\r\n\tpadding-left: 14px\r\n}\r\n.minified nav ul ul li li a {\r\n\tpadding-left: 25px\r\n}\r\n.minified nav>ul ul li::before, .minified nav>ul>li>ul::before {\r\n\tleft: 12px\r\n}\r\n.minified nav>ul>li>a .menu-item-parent, .minified nav>ul>li>a>b {\r\n\tdisplay: none\r\n}\r\n.minified nav>ul>li>a>.menu-item-parent {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tleft: 40px;\r\n\ttop: -3px;\r\n\twidth: 186px;\r\n\theight: 38px;\r\n\tline-height: 38px;\r\n\tbackground-color: #f5f5f5;\r\n\tcolor: #333;\r\n\tz-index: 3;\r\n\tbox-shadow: 2px 1px 2px 0 rgba(0,0,0,.2);\r\n\tborder-left: 1px solid #bfbfbf;\r\n\tborder-top: 1px solid #D8D4D4;\r\n\tborder-bottom: 1px solid #fff;\r\n\tpadding-left: 12px\r\n}\r\n.minified nav>ul>li>ul {\r\n\tdisplay: none!important;\r\n\tposition: absolute;\r\n\tleft: 40px;\r\n\twidth: 199px;\r\n\tz-index: 5;\r\n\tborder: 1px solid #bfbfbf;\r\n\tmin-height: 180px;\r\n\tbox-shadow: 1px 1px 2px 0 rgba(0,0,0,.2);\r\n\tbackground: #454545;\r\n\tmargin-top: -3px;\r\n\toverflow: hidden\r\n}\r\n.minified nav ul>li>ul>li>ul {\r\n\tposition: relative;\r\n\tleft: 13px;\r\n\tborder: none;\r\n\tmargin-left: -12px;\r\n\twidth: 197px\r\n}\r\n.minified nav>ul>li:hover>a>.menu-item-parent, .minified nav>ul>li:hover>ul {\r\n\tdisplay: block!important\r\n}\r\n.minified nav>ul>li>ul>li {\r\n\tbackground-color: rgba(69,69,69,.9)\r\n}\r\n.minified nav>ul>li>ul>li>ul>li {\r\n\tbackground-color: #484B50\r\n}\r\n.minified nav>ul>li {\r\n\tborder-bottom: 1px solid #1A1817;\r\n\tborder-top: 1px solid #525151\r\n}\r\n.minified nav>ul>li>ul::before {\r\n\tborder-left: none\r\n}\r\n.minified nav>ul ul li::before {\r\n\tborder: none\r\n}\r\n.slimScrollDiv, .slimScrollDiv>:first-child {\r\n\toverflow: hidden\r\n}\r\n.minified .slimScrollDiv, .minified .slimScrollDiv>:first-child {\r\n\toverflow: visible!important\r\n}\r\n.minified .slimScrollBar, .minified .slimScrollRail {\r\n\tdisplay: none\r\n}\r\n.minified nav>ul>li>ul>li>a, .minified nav>ul>li>ul>li>ul>li>a {\r\n\tpadding-top: 7px;\r\n\tpadding-bottom: 7px\r\n}\r\n.minified nav>ul>li>ul>li>ul>li a {\r\n\tpadding-top: 6px;\r\n\tpadding-bottom: 6px\r\n}\r\n.minified nav ul ul ul ul li a {\r\n\tpadding-left: 45px\r\n}\r\n.minified nav ul ul ul ul ul li a {\r\n\tpadding-left: 62px\r\n}\r\n.minified nav ul ul ul ul ul ul li a {\r\n\tpadding-left: 82px\r\n}\r\n.pagination.pagination-alt>li>a {\r\n\tbox-shadow: none;\r\n\t-moz-box-shadow: none;\r\n\t-webkit-box-shadow: none;\r\n\tborder: none;\r\n\tmargin-left: -1px\r\n}\r\n.pagination.pagination-alt>li:first-child>a {\r\n\tpadding-left: 0\r\n}\r\n.pagination>li>a, .pagination>li>span {\r\n\tbox-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n\t-moz-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n\t-webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05)\r\n}\r\n.disabled {\r\n\tcolor: #fff\r\n}\r\n.btn-default.disabled {\r\n\tcolor: #999\r\n}\r\n.btn {\r\n\tborder-radius: 2px;\r\n\t-webkit-border-radius: 2px;\r\n\t-moz-border-radius: 2px;\r\n\tbox-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n\t-moz-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n\t-webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05)\r\n}\r\n.btn:active {\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\tleft: 1px\r\n}\r\n.btn.btn-ribbon {\r\n\tbackground-color: #707070;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%, from(#777), to(#666));\r\n\tbackground-image: -webkit-linear-gradient(top, #777, #666);\r\n\tbackground-image: linear-gradient(to bottom, #777, #666);\r\n\tbackground-repeat: repeat-x;\r\nfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff777777', endColorstr='#ff666666', GradientType=0);\r\n\tcolor: #fff;\r\n\tpadding: 0 5px;\r\n\tline-height: 20px;\r\n\tvertical-align: middle;\r\n\theight: 20px;\r\n\tdisplay: block;\r\n\tborder: none;\r\n\tfloat: left;\r\n\tmargin: 0 8px 0 0;\r\n\tcursor: pointer\r\n}\r\n.btn.btn-ribbon>i {\r\n\tfont-size: 111%\r\n}\r\n.ribbon-button-alignment {\r\n\tpadding-top: 10px;\r\n\tdisplay: inline-block\r\n}\r\n.ribbon-button-alignment.pull-right>.btn.btn-ribbon {\r\n\tmargin: 0 0 0 8px\r\n}\r\n.panel-purple {\r\n\tborder-color: #6e587a\r\n}\r\n.panel-purple>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #6e587a;\r\n\tborder-color: #6e587a\r\n}\r\n.panel-greenLight {\r\n\tborder-color: #71843f\r\n}\r\n.panel-greenLight>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #71843f;\r\n\tborder-color: #71843f\r\n}\r\n.panel-greenDark {\r\n\tborder-color: #496949\r\n}\r\n.panel-greenDark>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #496949;\r\n\tborder-color: #496949\r\n}\r\n.panel-darken {\r\n\tborder-color: #333\r\n}\r\n.panel-darken>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #404040;\r\n\tborder-color: #404040\r\n}\r\n.panel-pink {\r\n\tborder-color: #ac5287\r\n}\r\n.panel-pink>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #ac5287;\r\n\tborder-color: #ac5287\r\n}\r\n.panel-green {\r\n\tborder-color: #356e35\r\n}\r\n.panel-green>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #356e35;\r\n\tborder-color: #356e35\r\n}\r\n.panel-blueLight {\r\n\tborder-color: #92a2a8\r\n}\r\n.panel-blueLight>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #92a2a8;\r\n\tborder-color: #92a2a8\r\n}\r\n.panel-pinkDark {\r\n\tborder-color: #a8829f\r\n}\r\n.panel-pinkDark>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #a8829f;\r\n\tborder-color: #a8829f\r\n}\r\n.panel-redLight {\r\n\tborder-color: #a65858\r\n}\r\n.panel-redLight>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #a65858;\r\n\tborder-color: #a65858\r\n}\r\n.panel-red {\r\n\tborder-color: #a90329\r\n}\r\n.panel-red>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #a90329;\r\n\tborder-color: #a90329\r\n}\r\n.panel-teal {\r\n\tborder-color: #568a89\r\n}\r\n.panel-teal>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #568a89;\r\n\tborder-color: #568a89\r\n}\r\n.panel-orange {\r\n\tborder-color: #c79121\r\n}\r\n.panel-orange>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #c79121;\r\n\tborder-color: #c79121\r\n}\r\n.panel-blueDark {\r\n\tborder-color: #4c4f53\r\n}\r\n.panel-blueDark>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #4c4f53;\r\n\tborder-color: #4c4f53\r\n}\r\n.panel-magenta {\r\n\tborder-color: #6e3671\r\n}\r\n.panel-magenta>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #6e3671;\r\n\tborder-color: #6e3671\r\n}\r\n.panel-blue {\r\n\tborder-color: #57889c\r\n}\r\n.panel-blue>.panel-heading {\r\n\tcolor: #fff;\r\n\tbackground-color: #57889c;\r\n\tborder-color: #57889c\r\n}\r\n.panel-footer>.btn-block {\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\tborder-bottom: none;\r\n\tborder-left: none;\r\n\tborder-right: none\r\n}\r\n.btn-circle {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\ttext-align: center;\r\n\tpadding: 6px 0;\r\n\tfont-size: 12px;\r\n\tline-height: 18px;\r\n\tborder-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-webkit-border-radius: 50%\r\n}\r\n.btn-circle.btn-lg {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tpadding: 10px 15px;\r\n\tfont-size: 18px;\r\n\tline-height: 30px;\r\n\tborder-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-webkit-border-radius: 50%\r\n}\r\n.btn-circle.btn-xl {\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tpadding: 10px 15px;\r\n\tfont-size: 24px;\r\n\tline-height: 50px;\r\n\tborder-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-webkit-border-radius: 50%\r\n}\r\n.btn-metro {\r\n\tmargin: 0 0 20px;\r\n\tpadding-top: 15px;\r\n\tpadding-bottom: 15px\r\n}\r\n.btn-metro>span {\r\n\tdisplay: block;\r\n\tvertical-align: bottom;\r\n\tmargin-top: 10px;\r\n\ttext-transform: uppercase\r\n}\r\n.btn-metro>span.label {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0\r\n}\r\n.btn-label {\r\n\tposition: relative;\r\n\tleft: -12px;\r\n\tdisplay: inline-block;\r\n\tpadding: 6px 12px;\r\n\tbackground: rgba(0,0,0,.15);\r\n\tborder-radius: 3px 0 0 3px\r\n}\r\n.btn-labeled {\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 0\r\n}\r\n.btn-link {\r\n\tbox-shadow: none;\r\n\t-webkit-box-shadow: none;\r\n\tfont-size: 14px\r\n}\r\n.nav-demo-btn {\r\n\tbackground-color: rgba(77,118,134,.5);\r\n\tborder-color: #3a7775\r\n}\r\n.nav-demo-btn:active, .nav-demo-btn:hover {\r\n\tbackground-color: rgba(77,118,134,.7);\r\n\tborder-color: #3a7775\r\n}\r\n#left-panel {\r\n\t-webkit-transition: 250ms cubic-bezier(0.1, .57, .1, 1);\r\n\ttransition: 250ms cubic-bezier(0.1, .57, .1, 1);\r\n\t-webkit-transform: translate(0px, 0) translateZ(0px)\r\n}\r\n.chart-large, .chart-small, .chart-xl {\r\n\toverflow: hidden\r\n}\r\n.chart-small {\r\n\theight: 100px;\r\n\twidth: 100%\r\n}\r\n.chart-large {\r\n\theight: 235px;\r\n\twidth: 100%\r\n}\r\n.chart-xl {\r\n\theight: 297px;\r\n\twidth: 100%\r\n}\r\n#flotTip {\r\n\tpadding: 3px 5px;\r\n\tbackground-color: #fff;\r\n\tz-index: 9999;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 1px 8px rgba(0,0,0,.1);\r\n\tfont-size: 14px;\r\n\tborder: 1px solid #C1C1C1;\r\n\tborder-radius: 4px\r\n}\r\n#flotTip span {\r\n\tcolor: #38812D;\r\n\tfont-weight: 700\r\n}\r\n.legendLabel span {\r\n\tdisplay: block;\r\n\tmargin: 0 5px\r\n}\r\n.legendColorBox {\r\n\tpadding-left: 10px;\r\n\tvertical-align: top;\r\n\tpadding-top: 5px\r\n}\r\n.legendColorBox div>div {\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder-radius: 50%;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\tbox-sizing: content-box;\r\n\t-moz-box-sizing: content-box;\r\n\t-webkit-box-sizing: content-box\r\n}\r\n.morris-hover.morris-default-style {\r\n\tborder-radius: 10px;\r\n\tpadding: 6px;\r\n\tcolor: #666;\r\n\tbackground: rgba(255,255,255,.8);\r\n\tborder: solid 2px rgba(230,230,230,.8);\r\n\tfont-family: sans-serif;\r\n\tfont-size: 12px;\r\n\ttext-align: center\r\n}\r\n.morris-hover.morris-default-style .morris-hover-row-label {\r\n\tfont-weight: 700;\r\n\tmargin: .25em 0\r\n}\r\n.morris-hover.morris-default-style .morris-hover-point {\r\n\twhite-space: nowrap;\r\n\tmargin: .1em 0\r\n}\r\n.morris-hover {\r\n\tposition: absolute;\r\n\tz-index: 903\r\n}\r\n.fixed-page-footer .morris-hover {\r\n\tz-index: 900\r\n}\r\n.chart {\r\n\toverflow: hidden;\r\n\theight: 220px;\r\n\tmargin: 20px 5px 10px 10px\r\n}\r\n.has-legend {\r\n\tmargin-top: 30px!important\r\n}\r\n.has-legend-unique {\r\n\tmargin-top: 19px!important\r\n}\r\n.icon-color-good {\r\n\tcolor: #40ac2b\r\n}\r\n.icon-color-bad {\r\n\tcolor: #ed1c24\r\n}\r\n.degree-sign:after, .percent-sign:after {\r\n\tcontent: \" %\";\r\n\tline-height: normal\r\n}\r\n.degree-sign:after {\r\n\tcontent: \"°F\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: -210px;\r\n\tz-index: 903\r\n}\r\n\r\n.hidden-menu #left-panel:hover {\r\n\tleft: 0\r\n}\r\n.hidden-menu .minifyme, .minified #hide-menu {\r\n\tdisplay: none\r\n}\r\n.hidden-menu #main {\r\n    margin-left: 0;\r\n}\r\n.btn-header.pull-right {\r\n\tmargin-left: 3px\r\n}\r\n.btn-header a>span {\r\n\tfont-size: 13px;\r\n\tfont-weight: 400;\r\n\tline-height: 30px;\r\n\theight: 30px;\r\n\tdisplay: inline-block\r\n}\r\n.btn-header>:first-child>a {\r\n\tborder-radius: 2px;\r\n\tcursor: default!important;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 700;\r\n\theight: 30px;\r\n\tline-height: 24px;\r\n\tmin-width: 30px;\r\n\tpadding: 3px 12px;\r\n\ttext-align: center;\r\n\ttext-decoration: none!important;\r\n\t-moz-user-select: none;\r\n\t-webkit-user-select: none;\r\n\tcolor: #fff;\r\n\tfont-size: 17px;\r\n\tmargin: 13px 0 0\r\n}\r\n\r\n.btn-header>:first-child>a:active {\r\n\t\r\n}\r\n.hidden-menu #hide-menu>:first-child>a {\r\n\tbackground-color: #e8e8e8;\r\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5a5a5a), color-stop(100%, #686868));\r\n\tbackground-image: -webkit-linear-gradient(to bottom, #5a5a5a 0, #686868 100%);\r\n\tbackground-image: -webkit-linear-gradient(top, #5a5a5a 0, #686868 100%);\r\n\tbackground-image: linear-gradient(to bottom, #5a5a5a 0, #686868 100%);\r\nfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#5A5A5A', endColorstr='#686868', GradientType=0);\r\n\tbox-shadow: inset 0 0 3px 1px rgba(0,0,0,.15);\r\n\tcolor: #fff;\r\n\tborder-color: #494949\r\n}\r\n.full-screen #fullscreen>:first-child>a:active, .hidden-menu #hide-menu>:first-child>a:active {\r\n\tbox-shadow: inset 0 0 6px 1px rgba(0,0,0,.2)\r\n}\r\n.ajax-dropdown>:first-child {\r\n\tmargin: 0 0 3px;\r\n\tpadding: 0 0 9px\r\n}\r\n.ajax-dropdown {\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n\tz-index: 905;\r\n\ttop: 48px;\r\n\tleft: 16px;\r\n\twidth: 344px;\r\n\theight: 435px;\r\n\tborder-radius: 0;\r\n\t-webkit-border-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\tbox-shadow: 0 2px 4px rgba(30,30,100,.25);\r\n\tpadding: 10px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #b3b3b3\r\n}\r\n.ajax-dropdown:after, .ajax-dropdown:before {\r\n\tbottom: 100%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none\r\n}\r\n.ajax-dropdown:after {\r\n\tborder-color: rgba(255,255,255,0);\r\n\tborder-bottom-color: #fff;\r\n\tborder-width: 7px;\r\n\tleft: 50%;\r\n\tmargin-left: -7px\r\n}\r\n.ajax-dropdown:before {\r\n\tborder-color: rgba(131,131,131,0);\r\n\tborder-bottom-color: #838383;\r\n\tborder-width: 8px;\r\n\tleft: 50%;\r\n\tmargin-left: -8px\r\n}\r\n.ajax-dropdown .btn-group .btn {\r\n\tfont-weight: 700;\r\n\ttext-transform: capitalize\r\n}\r\n.ajax-dropdown .btn-group>:nth-child(2) {\r\n\tborder-right-width: 0;\r\n\tborder-left-width: 0\r\n}\r\n.ajax-dropdown .btn-group>:last-child {\r\n\tborder-right-width: 1px!important\r\n}\r\n.ajax-dropdown .btn-group .btn:active {\r\n\ttop: 0;\r\n\tleft: 0\r\n}\r\n.ajax-notifications {\r\n\theight: 365px;\r\n\tdisplay: block;\r\n\toverflow: auto;\r\n\tmargin-right: -10px;\r\n\tmargin-left: -10px;\r\n\tborder-bottom: 1px solid #CECECE;\r\n\tborder-top: 1px solid #CECECE;\r\n\tbackground: #E9E9E9\r\n}\r\n.ajax-notifications .alert.alert-transparent {\r\n\tbackground-color: transparent;\r\n\tborder-color: transparent;\r\n\tcolor: #757575;\r\n\tmargin: 13px 10px\r\n}\r\n.ajax-notifications .alert>:first-child {\r\n\tmargin-bottom: 10px;\r\n\tfont-weight: 400\r\n}\r\n.ajax-dropdown>:last-child {\r\n\tfont-size: 13px;\r\n\tdisplay: block;\r\n\tpadding: 5px 0;\r\n\tline-height: 22px;\r\n\tfont-weight: 400\r\n}\r\n.ajax-dropdown .fa-4x.fa-border {\r\n\tborder-width: 3px;\r\n\tborder-radius: 50%;\r\n\t-webkit-border-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\twidth: 46px;\r\n\ttext-align: center;\r\n\tcolor: #D1D1D1;\r\n\tborder-color: #D1D1D1\r\n}\r\n.dropdown-large {\r\n\tposition: static!important\r\n}\r\n.dropdown-menu-large {\r\n\tmargin-left: 16px;\r\n\tmargin-right: 16px;\r\n\tpadding: 20px 0\r\n}\r\n.dropdown-menu-large>li>ul {\r\n\tpadding: 0;\r\n\tmargin: 0\r\n}\r\n.dropdown-menu-large>li>ul>li {\r\n\tlist-style: none\r\n}\r\n.dropdown-menu-large>li>ul>li>a {\r\n\tdisplay: block;\r\n\tpadding: 3px 20px;\r\n\tclear: both;\r\n\tfont-weight: 400;\r\n\tline-height: 1.428571429;\r\n\tcolor: #333;\r\n\twhite-space: normal\r\n}\r\n.dropdown-menu-large>li ul>li>a:focus, .dropdown-menu-large>li ul>li>a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #262626;\r\n\tbackground-color: #f5f5f5\r\n}\r\n.dropdown-menu-large .disabled>a, .dropdown-menu-large .disabled>a:focus, .dropdown-menu-large .disabled>a:hover {\r\n\tcolor: #999\r\n}\r\n.dropdown-menu-large .disabled>a:focus, .dropdown-menu-large .disabled>a:hover {\r\n\ttext-decoration: none;\r\n\tbackground-color: transparent;\r\n\tbackground-image: none;\r\nfilter:progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n\tcursor: not-allowed\r\n}\r\n.dropdown-menu-large .dropdown-header {\r\n\tcolor: #428bca;\r\n\tfont-size: 18px\r\n}\r\n\r\n@media (max-width:768px) {\r\n.dropdown-menu-large {\r\n\tmargin-left: 0;\r\n\tmargin-right: 0\r\n}\r\n.dropdown-menu-large>li {\r\n\tmargin-bottom: 30px\r\n}\r\n.dropdown-menu-large>li:last-child {\r\n\tmargin-bottom: 0\r\n}\r\n.dropdown-menu-large .dropdown-header {\r\n\tpadding: 3px 15px!important\r\n}\r\n}\r\n.pagination-xs>li>a, .pagination-xs>li>span {\r\n\tpadding: 4px 9px;\r\n\tfont-size: 12px\r\n}\r\n.notification-body *, .notification-body:after *, .notification-body:before * {\r\nbox-sizing:border-box!important;\r\n-webkit-box-sizing:border-box!important;\r\n-moz-box-sizing:border-box!important\r\n}\r\n.notification-body {\r\n\tpadding: 0 0 0 3px;\r\n\tmargin: 0;\r\n\tlist-style: none\r\n}\r\n.notification-body>li {\r\n\tborder-bottom: 1px solid #E9E9E9;\r\n\tposition: relative\r\n}\r\n.notification-body>li>span {\r\n\tbackground: #fff;\r\n\tdisplay: block;\r\n\tmin-height: 25px;\r\n\toverflow: hidden;\r\n\tpadding: 8px 10px 13px;\r\n\twhite-space: normal\r\n}\r\n.notification-body>li>span:hover {\r\n\tbackground: #F0F4F7;\r\n\tcolor: #667F8F\r\n}\r\n.notification-body>li a.msg {\r\n\tpadding-left: 50px!important\r\n}\r\n.notification-body>li a, .notification-body>li a span {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\toverflow: hidden\r\n}\r\n.notification-body>li a, .notification-body>li a:hover {\r\n\ttext-decoration: none\r\n}\r\n.notification-body>li:hover .progress {\r\n\tbackground: #fff;\r\n\tbox-shadow: 0 1px 0 rgba(0,0,0,0), 0 0 0 1px #a7a7a7 inset;\r\n\t-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0), 0 0 0 1px #ccc inset;\r\n\t-moz-box-shadow: 0 1px 0 transparent, 0 0 0 1px #fff inset\r\n}\r\n.notification-body>li:hover .text-muted {\r\n\tcolor: #333\r\n}\r\n.notification-body .from {\r\n\tfont-size: 14px;\r\n\tline-height: normal;\r\n\tcolor: #333;\r\n\tfont-weight: 400;\r\n\tmargin-right: 60px;\r\n\tmargin-bottom: 6px;\r\n\theight: 20px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n.notification-body .unread .from {\r\n\tfont-weight: 700\r\n}\r\n.notification-body .unread {\r\n\tbackground: #FFFFE0\r\n}\r\n.notification-body time {\r\n\tposition: absolute;\r\n\ttop: 3px;\r\n\tright: 0;\r\n\tfont-size: 11px;\r\n\tfont-weight: 400;\r\n\tcolor: #058dc7\r\n}\r\n.notification-body .msg-body, .notification-body .subject {\r\n\tfont-size: 13px;\r\n\tcolor: #A0A0A0;\r\n\tmax-height: 35px;\r\n\twidth: 100%;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n.notification-body .subject {\r\n\tfont-size: 13px;\r\n\tcolor: #333;\r\n\tmax-height: 22px\r\n}\r\n.bootstrapWizard {\r\n\tdisplay: block;\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tposition: relative;\r\n\twidth: 100%\r\n}\r\n.bootstrapWizard a:active, .bootstrapWizard a:focus, .bootstrapWizard a:hover {\r\n\ttext-decoration: none\r\n}\r\n.bootstrapWizard li {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\twidth: 25%;\r\n\ttext-align: center;\r\n\tpadding-left: 0\r\n}\r\n.bootstrapWizard li:before {\r\n\tborder-top: 3px solid #55606E;\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\ttop: 11px;\r\n\tright: 1px;\r\n\twidth: 100%;\r\n\tz-index: 1\r\n}\r\n.bootstrapWizard li:first-child:before {\r\n\tleft: 50%;\r\n\tmax-width: 50%\r\n}\r\n.bootstrapWizard li:last-child:before {\r\n\tmax-width: 50%;\r\n\twidth: 50%\r\n}\r\n.bootstrapWizard li.complete .step {\r\n\tbackground: #0aa66e;\r\n\tpadding: 1px 6px;\r\n\tborder: 3px solid #55606E\r\n}\r\n.bootstrapWizard li .step i {\r\n\tfont-size: 10px;\r\n\tfont-weight: 400;\r\n\tposition: relative;\r\n\ttop: -1.5px\r\n}\r\n.bootstrapWizard li .step {\r\n\tbackground: #B2B5B9;\r\n\tcolor: #fff;\r\n\tdisplay: inline;\r\n\tfont-size: 15px;\r\n\tfont-weight: 700;\r\n\tpadding: 7px 13px;\r\n\tborder: 3px solid transparent;\r\n\tborder-radius: 50%;\r\n\tline-height: normal;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tz-index: 2;\r\n\t-webkit-transition: all .1s linear 0s;\r\n\ttransition: all .1s linear 0s\r\n}\r\n.bootstrapWizard li.active .step, .bootstrapWizard li.active.complete .step {\r\n\tbackground: #0091d9;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tpadding: 7px 13px;\r\n\tfont-size: 15px;\r\n\tborder-radius: 50%;\r\n\tborder: 3px solid #55606E\r\n}\r\n.bootstrapWizard li.active .title, .bootstrapWizard li.complete .title {\r\n\tcolor: #2B3D53\r\n}\r\n.bootstrapWizard li .title {\r\n\tcolor: #bfbfbf;\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tline-height: 15px;\r\n\tmax-width: 100%;\r\n\tposition: relative;\r\n\ttable-layout: fixed;\r\n\ttext-align: center;\r\n\ttop: 20px;\r\n\tword-wrap: break-word;\r\n\tz-index: 104\r\n}\r\n.wizard-actions {\r\n\tdisplay: block;\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tposition: relative;\r\n\twidth: 100%\r\n}\r\n.wizard-actions li {\r\n\tdisplay: inline\r\n}\r\n.tab-content.transparent {\r\n\tbackground-color: transparent\r\n}\r\n.fuelux .wizard {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tbackground-color: #f9f9f9;\r\n\tborder: 1px solid #d4d4d4;\r\n\tborder-radius: 4px;\r\n*zoom:1;\r\n\tbox-shadow: 0 1px 4px rgba(0,0,0,.065)\r\n}\r\n.fuelux .wizard:after, .fuelux .wizard:before {\r\n\tdisplay: table;\r\n\tline-height: 0;\r\n\tcontent: \"\"\r\n}\r\n.fuelux .wizard:after {\r\n\tclear: both\r\n}\r\n.fuelux .wizard ul {\r\n\twidth: 4000px;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tlist-style: none outside none\r\n}\r\n.fuelux .wizard ul.previous-disabled li.complete {\r\n\tcursor: default\r\n}\r\n.fuelux .wizard ul.previous-disabled li.complete:hover {\r\n\tcolor: #356e35;\r\n\tcursor: default;\r\n\tbackground: #f3f4f5\r\n}\r\n.fuelux .wizard ul.previous-disabled li.complete:hover .chevron:before {\r\n\tborder-left-color: #f3f4f5\r\n}\r\n.fuelux .wizard ul li {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\theight: 46px;\r\n\tpadding: 0 20px 0 30px;\r\n\tmargin: 0;\r\n\tfont-size: 16px;\r\n\tline-height: 46px;\r\n\tcolor: #999;\r\n\tcursor: default;\r\n\tbackground: #ededed\r\n}\r\n.fuelux .wizard ul li .chevron {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: -14px;\r\n\tz-index: 1;\r\n\tdisplay: block;\r\n\tborder: 24px solid transparent;\r\n\tborder-right: 0;\r\n\tborder-left: 14px solid #d4d4d4\r\n}\r\n.fuelux .wizard ul li .chevron:before {\r\n\tposition: absolute;\r\n\ttop: -24px;\r\n\tright: 1px;\r\n\tdisplay: block;\r\n\tborder: 24px solid transparent;\r\n\tborder-right: 0;\r\n\tborder-left: 14px solid #ededed;\r\n\tcontent: \"\"\r\n}\r\n.fuelux .wizard ul li.complete {\r\n\tcolor: #468847;\r\n\tbackground: #f3f4f5\r\n}\r\n.fuelux .wizard ul li.complete:hover {\r\n\tcursor: pointer;\r\n\tbackground: #e7eff8\r\n}\r\n.fuelux .wizard ul li.complete:hover .chevron:before {\r\n\tborder-left: 14px solid #e7eff8\r\n}\r\n.fuelux .wizard ul li.complete .chevron:before {\r\n\tborder-left: 14px solid #f3f4f5\r\n}\r\n.fuelux .wizard ul li.active {\r\n\tcolor: #3a87ad;\r\n\tbackground: #f1f6fc\r\n}\r\n.fuelux .wizard ul li.active .chevron:before {\r\n\tborder-left: 14px solid #f1f6fc\r\n}\r\n.fuelux .wizard ul li .badge {\r\n\tmargin-right: 8px\r\n}\r\n.fuelux .wizard ul li:first-child {\r\n\tpadding-left: 20px;\r\n\tborder-radius: 4px 0 0 4px\r\n}\r\n.fuelux .wizard .actions {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tz-index: 2;\r\n\tfloat: right;\r\n\tpadding-right: 15px;\r\n\tpadding-left: 15px;\r\n\tline-height: 46px;\r\n\tvertical-align: middle;\r\n\tbackground-color: #eee;\r\n\tborder-left: 1px solid #d4d4d4\r\n}\r\n.fuelux .wizard .actions a {\r\n\tmargin-right: 8px;\r\n\tfont-size: 12px;\r\n\tline-height: 45px\r\n}\r\n.fuelux .wizard .actions .btn-prev i {\r\n\tmargin-right: 5px\r\n}\r\n.fuelux .wizard .actions .btn-next i {\r\n\tmargin-left: 5px\r\n}\r\n.fuelux .step-content .step-pane {\r\n\tdisplay: none\r\n}\r\n.fuelux .step-content .active {\r\n\tdisplay: block\r\n}\r\n.fuelux .step-content .active .btn-group .active {\r\n\tdisplay: inline-block\r\n}\r\n.jarvismetro-tile {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n\tbackground-color: #fff;\r\n\twidth: 100px;\r\n\theight: 70px;\r\n\tcursor: pointer;\r\n\tbox-shadow: inset 0 0 1px #FFC;\r\n\tborder: 1px dotted #C5C5C5;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tfont-weight: 300;\r\n\tfont-smooth: always;\r\n\tmargin: 0 10px 20px 0;\r\n\tpadding: 5px;\r\n\tposition: relative\r\n}\r\n.jarvismetro-tile:hover {\r\n\tz-index: 10;\r\n\t-webkit-transform: scale(1.07);\r\n\t-moz-transform: scale(1.07)\r\n}\r\n.jarvismetro-tile.big-cubes {\r\n\twidth: 120px;\r\n\theight: 120px\r\n}\r\n.jarvismetro-tile.double {\r\n\twidth: 249px\r\n}\r\n.jarvismetro-tile:active {\r\n\ttop: 1px;\r\n\tleft: 1px\r\n}\r\n.jarvismetro-tile .iconbox {\r\n\ttext-align: center\r\n}\r\n.jarvismetro-tile .iconbox i {\r\n\tdisplay: block;\r\n\tmargin: 15px auto 0;\r\n\theight: 75px\r\n}\r\n.jarvismetro-tile .iconbox span {\r\n\tdisplay: block;\r\n\ttext-align: left\r\n}\r\n.jarvismetro-tile .iconbox span>span {\r\n\tposition: absolute;\r\n\tright: -3px;\r\n\tbottom: -3px;\r\n\tborder-radius: 50%;\r\n\tpadding: 5px;\r\n\tborder: 1px solid #fff\r\n}\r\n#shortcut .selected {\r\n\tborder: 1px solid #0091d9!important;\r\n\tposition: relative\r\n}\r\n#shortcut .selected:before {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tcontent: \"\\f00c\";\r\n\tcolor: #fff;\r\n\tright: 4px;\r\n\ttop: 3px;\r\n\tfont-family: FontAwesome;\r\n\tz-index: 2\r\n}\r\n#shortcut .selected:after {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-top: 35px solid #0091d9;\r\n\tborder-left: 35px solid rgba(0,0,0,0);\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tright: 0;\r\n\tcontent: \"\";\r\n\ttop: 0;\r\n\tz-index: 1\r\n}\r\n#shortcut {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: auto;\r\n\twidth: 100%;\r\n\tbackground-color: #33302F;\r\n\tbackground-color: rgba(0,0,0,.85);\r\n\tz-index: 907;\r\n\tdisplay: none;\r\n\tcolor: #fff;\r\n\tbox-sizing: border-box\r\n}\r\n#shortcut ul {\r\n\tpadding: 15px 20px 10px;\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tbox-shadow: 0 4px 10px rgba(0,0,0,.3);\r\n\t-moz-box-shadow: 0 4px 10px rgba(0,0,0,.3);\r\n\tborder-bottom: 1px solid #423F3F\r\n}\r\n#shortcut ul li {\r\n\tdisplay: inline-block;\r\n\twidth: auto\r\n}\r\n#shortcut ul li .jarvismetro-tile {\r\n\tmargin: 0 3px 3px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0\r\n}\r\n#shortcut ul li .jarvismetro-tile:hover {\r\n\tcolor: #fff;\r\n\ttext-decoration: none\r\n}\r\n#shortcut ul li .jarvismetro-tile:active, #shortcut ul li .jarvismetro-tile:focus {\r\n\tleft: 0;\r\n\ttop: 0\r\n}\r\n.shortcut-on #response-btn {\r\n\tdisplay: none!important\r\n}\r\n.shortcut-on #left-bar .navbar, .shortcut-on #main .navbar {\r\n\tborder: none!important\r\n}\r\n.arrow-box-up:after, .arrow-box-up:before {\r\n\tbottom: 100%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none\r\n}\r\n.arrow-box-up:after {\r\n\tborder-color: rgba(255,255,255,0);\r\n\tborder-bottom-color: #fff;\r\n\tborder-width: 7px;\r\n\tleft: 50%;\r\n\tmargin-left: -7px\r\n}\r\n.arrow-box-up:before {\r\n\tborder-color: rgba(131,131,131,0);\r\n\tborder-bottom-color: #838383;\r\n\tborder-width: 8px;\r\n\tleft: 50%;\r\n\tmargin-left: -8px\r\n}\r\n.arrow-box-up-right:after, .arrow-box-up-right:before {\r\n\tbottom: 100%;\r\n\tborder: solid transparent;\r\n\tcontent: \" \";\r\n\theight: 0;\r\n\twidth: 0;\r\n\tposition: absolute;\r\n\tpointer-events: none\r\n}\r\n.arrow-box-up-right:after {\r\n\tborder-color: rgba(255,255,255,0);\r\n\tborder-bottom-color: #fff;\r\n\tborder-width: 7px;\r\n\tright: 10px;\r\n\tmargin-left: -7px\r\n}\r\n.arrow-box-up-right:before {\r\n\tborder-color: rgba(131,131,131,0);\r\n\tborder-bottom-color: #838383;\r\n\tborder-width: 8px;\r\n\tright: 9px;\r\n\tmargin-left: -8px\r\n}\r\n.tooltip-inner {\r\n\tpadding: 5px 10px;\r\n\tfont-size: 11px;\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-weight: 700;\r\n\tborder-radius: 0\r\n}\r\n.custom-scroll::-webkit-scrollbar {\r\n-webkit-overflow-scrolling:touch;\r\nheight:10px;\r\nwidth:10px\r\n}\r\n.custom-scroll::-webkit-scrollbar:hover {\r\nbackground-color:#E9E9E9;\r\nborder:1px solid #dbdbdb\r\n}\r\n.custom-scroll::-webkit-scrollbar-button:end:increment, .custom-scroll::-webkit-scrollbar-button:start:decrement {\r\nbackground:0 0;\r\ndisplay:block;\r\nheight:0\r\n}\r\n.custom-scroll::-webkit-scrollbar-track {\r\nbackground-clip:padding-box;\r\nborder:solid transparent\r\n}\r\n.custom-scroll::-webkit-scrollbar-track-piece {\r\n-moz-border-radius:0;\r\n-ms-border-radius:0;\r\n-o-border-radius:0;\r\n-webkit-border-radius:0;\r\nbackground-color:transparent;\r\nborder-radius:0\r\n}\r\n.custom-scroll::-webkit-scrollbar-thumb {\r\n-moz-box-shadow:inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);\r\n-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07);\r\nbackground-clip:padding-box;\r\nbackground-color:rgba(0,0,0,.2);\r\nborder:none;\r\nbox-shadow:inset 1px 1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)\r\n}\r\n.custom-scroll::-webkit-scrollbar-thumb:horizontal, .custom-scroll::-webkit-scrollbar-thumb:vertical {\r\n-moz-border-radius:0;\r\n-ms-border-radius:0;\r\n-o-border-radius:0;\r\n-webkit-border-radius:0;\r\nbackground-color:#bfbfbf;\r\nborder-radius:0\r\n}\r\n.custom-scroll::-webkit-scrollbar-thumb:active {\r\n-moz-box-shadow:inset 1px 1px 3px rgba(0,0,0,.33);\r\n-webkit-box-shadow:inset 1px 1px 3px rgba(0,0,0,.33);\r\nbackground-color:rgba(0,0,0,.44);\r\nbox-shadow:inset 1px 1px 3px rgba(0,0,0,.33)\r\n}\r\n.custom-scroll::-webkit-scrollbar-thumb:hover {\r\nbackground-color:#959595\r\n}\r\n.twitter-typeahead .tt-hint, .twitter-typeahead .tt-query {\r\n\tmargin-bottom: 0;\r\n\theight: 32px;\r\n\tpadding: 6px 12px\r\n}\r\n.tt-dropdown-menu {\r\n\tmin-width: 160px;\r\n\tmargin-top: 2px;\r\n\tpadding: 5px 0;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #bfbfbf;\r\n\tborder: 1px solid rgba(0,0,0,.2);\r\n*border-right-width:2px;\r\n*border-bottom-width:2px;\r\n\tbox-shadow: 0 5px 10px rgba(0,0,0,.2);\r\n\tbackground-clip: padding-box\r\n}\r\n.tt-suggestion {\r\n\tdisplay: block;\r\n\tpadding: 3px 20px\r\n}\r\n.tt-suggestion.tt-is-under-cursor {\r\n\tcolor: #fff;\r\n\tbackground-color: #0081c2\r\n}\r\n.tt-suggestion.tt-is-under-cursor a {\r\n\tcolor: #fff\r\n}\r\n.tt-suggestion p {\r\n\tmargin: 0\r\n}\r\n.google_maps {\r\n\twidth: 100%;\r\n\theight: 350px;\r\n\tposition: relative\r\n}\r\n.google_maps * {\r\n\tbox-sizing: content-box;\r\n\t-webkit-box-sizing: content-box;\r\n\t-moz-box-sizing: content-box\r\n}\r\n.google_maps img {\r\n\tmax-width: none\r\n}\r\n.header-btn {\r\n\tmargin-top: 5px\r\n}\r\n.cke_top {\r\n\tbackground: rgba(248,248,248,.9)!important;\r\n\tbackground-image: none!important\r\n}\r\n.multiselect-container {\r\n\tposition: absolute;\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0\r\n}\r\n.multiselect-container .input-group {\r\n\tmargin: 5px\r\n}\r\n.multiselect-container>li {\r\n\tpadding: 0\r\n}\r\n.multiselect-container>li>a.multiselect-all label {\r\n\tfont-weight: 700\r\n}\r\n.multiselect-container>li>label.multiselect-group {\r\n\tmargin: 0;\r\n\tpadding: 3px 20px;\r\n\theight: 100%;\r\n\tfont-weight: 700\r\n}\r\n.multiselect-container>li>a>label {\r\n\tmargin: 0;\r\n\theight: 100%;\r\n\tcursor: pointer;\r\n\tfont-weight: 400\r\n}\r\n.multiselect-container>li>a>label.checkbox, .multiselect-container>li>a>label.radio {\r\n\tmargin: 0\r\n}\r\n.multiselect-container>li>a>label>input[type=checkbox] {\r\n\tmargin-bottom: 5px\r\n}\r\n.btn-group>.btn-group:nth-child(2)>.multiselect.btn {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-bottom-left-radius: 4px\r\n}\r\n.input-group .icon-addon .form-control {\r\n\tborder-radius: 0\r\n}\r\n.icon-addon {\r\n\tposition: relative;\r\n\tcolor: #555;\r\n\tdisplay: block\r\n}\r\n.icon-addon:after, .icon-addon:before {\r\n\tdisplay: table;\r\n\tcontent: \" \"\r\n}\r\n.icon-addon:after {\r\n\tclear: both\r\n}\r\n.icon-addon .fa, .icon-addon .glyphicon, .icon-addon.addon-md .fa, .icon-addon.addon-md .glyphicon {\r\n\tposition: absolute;\r\n\tz-index: 2;\r\n\tleft: 10px;\r\n\twidth: 20px;\r\n\tmargin-left: -2.5px;\r\n\ttext-align: center;\r\n\tpadding: 10px 0;\r\n\ttop: 1px\r\n}\r\n.icon-addon.addon-lg .form-control {\r\n\tline-height: 1.33;\r\n\theight: 46px;\r\n\tfont-size: 18px;\r\n\tpadding: 10px 16px 10px 40px\r\n}\r\n.input-group-lg .icon-addon.addon-lg+.input-group-btn>.btn {\r\n\theight: 46px\r\n}\r\n.icon-addon.addon-sm .form-control {\r\n\theight: 30px;\r\n\tpadding: 5px 10px 5px 28px;\r\n\tfont-size: 12px;\r\n\tline-height: 1.5\r\n}\r\n.icon-addon.addon-lg .fa, .icon-addon.addon-lg .glyphicon {\r\n\tfont-size: 18px;\r\n\tmargin-left: 0;\r\n\tleft: 11px;\r\n\ttop: 4px\r\n}\r\n.icon-addon .form-control, .icon-addon.addon-md .form-control {\r\n\tpadding-left: 30px;\r\n\tfloat: left;\r\n\tfont-weight: 400\r\n}\r\n.icon-addon.addon-sm .fa, .icon-addon.addon-sm .glyphicon {\r\n\tmargin-left: 0;\r\n\tfont-size: 12px;\r\n\tleft: 5px;\r\n\ttop: -1px\r\n}\r\n.icon-addon .form-control:focus+.fa, .icon-addon .form-control:focus+.glyphicon, .icon-addon:hover .fa, .icon-addon:hover .glyphicon {\r\n\tcolor: #2580db\r\n}\r\n.icon-addon input:disabled+.fa, .icon-addon input:disabled+.glyphicon, .icon-addon select:disabled+.fa, .icon-addon select:disabled+.glyphicon {\r\n\tcolor: #ccc\r\n}\r\n.progress.vertical {\r\n\tfloat: left\r\n}\r\n.progress.vertical .progress-bar {\r\n\t-moz-transition: all height .6s ease ease-out;\r\n\t-o-transition: all height .6s ease ease-out\r\n}\r\n.progress-micro {\r\n\theight: 3px!important;\r\n\tline-height: 3px!important\r\n}\r\n.progress-xs {\r\n\theight: 7px!important;\r\n\tline-height: 7px!important\r\n}\r\n.progress-sm {\r\n\theight: 14px!important;\r\n\tline-height: 14px!important\r\n}\r\n.progress-lg {\r\n\theight: 30px!important;\r\n\tline-height: 30px!important\r\n}\r\n.progress .progress-bar {\r\n\tposition: absolute;\r\n\toverflow: hidden;\r\n\tline-height: 20px\r\n}\r\n.progress .progressbar-back-text {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-size: 12px;\r\n\tline-height: 20px;\r\n\ttext-align: center\r\n}\r\n.progress .progressbar-front-text {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-size: 12px;\r\n\tline-height: 20px;\r\n\ttext-align: center\r\n}\r\n.progress.right .progress-bar {\r\n\tright: 0\r\n}\r\n.progress.right .progressbar-front-text {\r\n\tposition: absolute;\r\n\tright: 0\r\n}\r\n.progress.vertical {\r\n\twidth: 25px;\r\n\theight: 100%;\r\n\tmin-height: 150px;\r\n\tmargin-right: 20px;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 0\r\n}\r\n.progress.wide-bar {\r\n\twidth: 40px\r\n}\r\n.progress.vertical.bottom {\r\n\tposition: relative\r\n}\r\n.progress.vertical.bottom .progressbar-front-text {\r\n\tposition: absolute;\r\n\tbottom: 0\r\n}\r\n.progress.vertical .progress-bar {\r\n\twidth: 100%;\r\n\theight: 0;\r\n\t-webkit-transition: height .6s ease;\r\n\ttransition: height .6s ease\r\n}\r\n.progress.vertical.bottom .progress-bar {\r\n\tposition: absolute;\r\n\tbottom: 0\r\n}\r\n.progress {\r\n\tposition: relative;\r\n\tmargin-bottom: 20px;\r\n\toverflow: hidden;\r\n\theight: 22px;\r\n\tbackground: #eee;\r\n\tbox-shadow: 0 1px 0 transparent, 0 0 0 1px #e3e3e3 inset;\r\n\t-webkit-box-shadow: 0 1px 0 transparent, 0 0 0 1px #e3e3e3 inset;\r\n\t-moz-box-shadow: 0 1px 0 transparent, 0 0 0 1px #e3e3e3 inset;\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0\r\n}\r\n.progress-bar {\r\n\tfloat: left;\r\n\twidth: 0;\r\n\theight: 100%;\r\n\tfont-size: 11px;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tbackground-color: #57889c;\r\n\tbox-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\r\n\tfont-weight: 700;\r\n\ttext-shadow: 0 -1px 0 rgba(0,0,0,.25);\r\n\tbackground-image: url(../img/pattern/overlay-pattern.png)\r\n}\r\n.progress-striped .progress-bar {\r\n\tbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255,255,255,.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255,255,255,.15)), color-stop(0.75, rgba(255,255,255,.15)), color-stop(0.75, transparent), to(transparent));\r\n\tbackground-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-image: linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-size: 40px 40px\r\n}\r\n.progress.active .progress-bar {\r\n\t-webkit-animation: progress-bar-stripes 2s linear infinite;\r\n\tanimation: progress-bar-stripes 2s linear infinite\r\n}\r\n.progress-bar-danger {\r\n\tbackground-color: #a90329\r\n}\r\n.progress-striped .progress-bar-danger {\r\n\tbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255,255,255,.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255,255,255,.15)), color-stop(0.75, rgba(255,255,255,.15)), color-stop(0.75, transparent), to(transparent));\r\n\tbackground-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-image: linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent)\r\n}\r\n.progress-bar-success {\r\n\tbackground-color: #739e73\r\n}\r\n.progress-striped .progress-bar-success {\r\n\tbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255,255,255,.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255,255,255,.15)), color-stop(0.75, rgba(255,255,255,.15)), color-stop(0.75, transparent), to(transparent));\r\n\tbackground-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-image: linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent)\r\n}\r\n.progress-bar-warning {\r\n\tbackground-color: #c79121\r\n}\r\n.progress-striped .progress-bar-warning {\r\n\tbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255,255,255,.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255,255,255,.15)), color-stop(0.75, rgba(255,255,255,.15)), color-stop(0.75, transparent), to(transparent));\r\n\tbackground-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-image: linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent)\r\n}\r\n.progress-bar-info {\r\n\tbackground-color: #57889c\r\n}\r\n.progress-striped .progress-bar-info {\r\n\tbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255,255,255,.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255,255,255,.15)), color-stop(0.75, rgba(255,255,255,.15)), color-stop(0.75, transparent), to(transparent));\r\n\tbackground-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent);\r\n\tbackground-image: linear-gradient(45deg, rgba(255,255,255,.15)25%, transparent 25%, transparent 50%, rgba(255,255,255,.15)50%, rgba(255,255,255,.15)75%, transparent 75%, transparent)\r\n}\r\n.progress .bar-info, .progress-info .bar {\r\n\tbackground: #57889c\r\n}\r\n.vertical-bars {\r\n\tpadding: 0;\r\n\tmargin: 0\r\n}\r\n.vertical-bars:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tclear: both\r\n}\r\n.vertical-bars li {\r\n\tpadding: 14px 0;\r\n\twidth: 25%;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\ttext-align: center\r\n}\r\n.vertical-bars li:first-child {\r\n\tborder-left: none\r\n}\r\n.vertical-bars>li>.progress.vertical:first-child {\r\n\tmargin-left: auto\r\n}\r\n.vertical-bars>li>.progress.vertical {\r\n\tmargin: 0 auto;\r\n\tfloat: none\r\n}\r\n.bar-holder:first-child {\r\n\tborder-top: none\r\n}\r\n.bar-holder {\r\n\tpadding: 18px 15px\r\n}\r\n.bar-holder .progress {\r\n\tmargin: 0\r\n}\r\n[data-progressbar-value] {\r\n\tmargin-top: 15px!important;\r\n\toverflow: visible;\r\n\tmargin-bottom: 0\r\n}\r\n.dataTable [data-progressbar-value] {\r\n\tmin-width: 70px\r\n}\r\n[data-progressbar-value=\"100\"]:after, [data-progressbar-value=\"100\"]:before, [data-progressbar-value]:after, [data-progressbar-value]:before {\r\n\tposition: absolute;\r\n\tbackground: 0 0;\r\n\tfont-size: 11px;\r\n\ttop: -12px\r\n}\r\n[data-progressbar-value]:before {\r\n\tcontent: attr(data-progressbar-value);\r\n\tleft: attr(data-progressbar-value) px\r\n}\r\n[data-progressbar-value]:after {\r\n\tcontent: \"%\";\r\n\tleft: 13px\r\n}\r\n[data-progressbar-value=\"1\"]>.progress-bar {\r\n\twidth: 1%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"2\"]>.progress-bar {\r\n\twidth: 2%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"3\"]>.progress-bar {\r\n\twidth: 3%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"4\"]>.progress-bar {\r\n\twidth: 4%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"5\"]>.progress-bar {\r\n\twidth: 5%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"6\"]>.progress-bar {\r\n\twidth: 6%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"7\"]>.progress-bar {\r\n\twidth: 7%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"8\"]>.progress-bar {\r\n\twidth: 8%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"9\"]>.progress-bar {\r\n\twidth: 9%;\r\n\tbackground: #a90329\r\n}\r\n[data-progressbar-value=\"10\"]>.progress-bar {\r\n\twidth: 10%;\r\n\tbackground: #db0435\r\n}\r\n[data-progressbar-value=\"11\"]>.progress-bar {\r\n\twidth: 11%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"12\"]>.progress-bar {\r\n\twidth: 12%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"13\"]>.progress-bar {\r\n\twidth: 13%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"14\"]>.progress-bar {\r\n\twidth: 14%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"15\"]>.progress-bar {\r\n\twidth: 15%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"16\"]>.progress-bar {\r\n\twidth: 16%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"17\"]>.progress-bar {\r\n\twidth: 17%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"18\"]>.progress-bar {\r\n\twidth: 18%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"19\"]>.progress-bar {\r\n\twidth: 19%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"20\"]>.progress-bar {\r\n\twidth: 20%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"21\"]>.progress-bar {\r\n\twidth: 21%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"22\"]>.progress-bar {\r\n\twidth: 22%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"23\"]>.progress-bar {\r\n\twidth: 23%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"24\"]>.progress-bar {\r\n\twidth: 24%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"25\"]>.progress-bar {\r\n\twidth: 25%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"26\"]>.progress-bar {\r\n\twidth: 26%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"27\"]>.progress-bar {\r\n\twidth: 27%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"28\"]>.progress-bar {\r\n\twidth: 28%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"29\"]>.progress-bar {\r\n\twidth: 29%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"30\"]>.progress-bar {\r\n\twidth: 30%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"31\"]>.progress-bar {\r\n\twidth: 31%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"32\"]>.progress-bar {\r\n\twidth: 32%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"33\"]>.progress-bar {\r\n\twidth: 33%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"34\"]>.progress-bar {\r\n\twidth: 34%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"35\"]>.progress-bar {\r\n\twidth: 35%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"36\"]>.progress-bar {\r\n\twidth: 36%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"37\"]>.progress-bar {\r\n\twidth: 37%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"38\"]>.progress-bar {\r\n\twidth: 38%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"39\"]>.progress-bar {\r\n\twidth: 39%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"40\"]>.progress-bar {\r\n\twidth: 40%;\r\n\tbackground: #c79121\r\n}\r\n[data-progressbar-value=\"41\"]>.progress-bar {\r\n\twidth: 41%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"42\"]>.progress-bar {\r\n\twidth: 42%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"43\"]>.progress-bar {\r\n\twidth: 43%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"44\"]>.progress-bar {\r\n\twidth: 44%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"45\"]>.progress-bar {\r\n\twidth: 45%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"46\"]>.progress-bar {\r\n\twidth: 46%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"47\"]>.progress-bar {\r\n\twidth: 47%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"48\"]>.progress-bar {\r\n\twidth: 48%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"49\"]>.progress-bar {\r\n\twidth: 49%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"50\"]>.progress-bar {\r\n\twidth: 50%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"51\"]>.progress-bar {\r\n\twidth: 51%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"52\"]>.progress-bar {\r\n\twidth: 52%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"53\"]>.progress-bar {\r\n\twidth: 53%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"54\"]>.progress-bar {\r\n\twidth: 54%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"55\"]>.progress-bar {\r\n\twidth: 55%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"56\"]>.progress-bar {\r\n\twidth: 56%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"57\"]>.progress-bar {\r\n\twidth: 57%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"58\"]>.progress-bar {\r\n\twidth: 58%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"59\"]>.progress-bar {\r\n\twidth: 59%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"60\"]>.progress-bar {\r\n\twidth: 60%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"61\"]>.progress-bar {\r\n\twidth: 61%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"62\"]>.progress-bar {\r\n\twidth: 62%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"63\"]>.progress-bar {\r\n\twidth: 63%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"64\"]>.progress-bar {\r\n\twidth: 64%;\r\n\tbackground: #404040\r\n}\r\n[data-progressbar-value=\"65\"]>.progress-bar {\r\n\twidth: 65%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"66\"]>.progress-bar {\r\n\twidth: 66%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"67\"]>.progress-bar {\r\n\twidth: 67%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"68\"]>.progress-bar {\r\n\twidth: 68%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"69\"]>.progress-bar {\r\n\twidth: 69%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"70\"]>.progress-bar {\r\n\twidth: 70%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"71\"]>.progress-bar {\r\n\twidth: 71%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"72\"]>.progress-bar {\r\n\twidth: 72%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"73\"]>.progress-bar {\r\n\twidth: 73%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"74\"]>.progress-bar {\r\n\twidth: 74%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"75\"]>.progress-bar {\r\n\twidth: 75%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"76\"]>.progress-bar {\r\n\twidth: 76%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"77\"]>.progress-bar {\r\n\twidth: 77%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"78\"]>.progress-bar {\r\n\twidth: 78%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"79\"]>.progress-bar {\r\n\twidth: 79%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"80\"]>.progress-bar {\r\n\twidth: 80%;\r\n\tbackground: #3276b1\r\n}\r\n[data-progressbar-value=\"81\"]>.progress-bar {\r\n\twidth: 81%;\r\n\tbackground: #a0bda0\r\n}\r\n[data-progressbar-value=\"82\"]>.progress-bar {\r\n\twidth: 82%;\r\n\tbackground: #a0bda0\r\n}\r\n[data-progressbar-value=\"83\"]>.progress-bar {\r\n\twidth: 83%;\r\n\tbackground: #a0bda0\r\n}\r\n[data-progressbar-value=\"84\"]>.progress-bar {\r\n\twidth: 84%;\r\n\tbackground: #9dbb9d\r\n}\r\n[data-progressbar-value=\"85\"]>.progress-bar {\r\n\twidth: 85%;\r\n\tbackground: #9dbb9d\r\n}\r\n[data-progressbar-value=\"86\"]>.progress-bar {\r\n\twidth: 86%;\r\n\tbackground: #9dbb9d\r\n}\r\n[data-progressbar-value=\"87\"]>.progress-bar {\r\n\twidth: 87%;\r\n\tbackground: #97b797\r\n}\r\n[data-progressbar-value=\"88\"]>.progress-bar {\r\n\twidth: 88%;\r\n\tbackground: #97b797\r\n}\r\n[data-progressbar-value=\"89\"]>.progress-bar {\r\n\twidth: 89%;\r\n\tbackground: #91b391\r\n}\r\n[data-progressbar-value=\"90\"]>.progress-bar {\r\n\twidth: 90%;\r\n\tbackground: #91b391\r\n}\r\n[data-progressbar-value=\"91\"]>.progress-bar {\r\n\twidth: 91%;\r\n\tbackground: #91b391\r\n}\r\n[data-progressbar-value=\"92\"]>.progress-bar {\r\n\twidth: 92%;\r\n\tbackground: #8eb18e\r\n}\r\n[data-progressbar-value=\"93\"]>.progress-bar {\r\n\twidth: 93%;\r\n\tbackground: #8baf8b\r\n}\r\n[data-progressbar-value=\"94\"]>.progress-bar {\r\n\twidth: 94%;\r\n\tbackground: #88ad88\r\n}\r\n[data-progressbar-value=\"95\"]>.progress-bar {\r\n\twidth: 95%;\r\n\tbackground: #85ab85\r\n}\r\n[data-progressbar-value=\"96\"]>.progress-bar {\r\n\twidth: 96%;\r\n\tbackground: #82a882\r\n}\r\n[data-progressbar-value=\"97\"]>.progress-bar {\r\n\twidth: 97%;\r\n\tbackground: #7fa67f\r\n}\r\n[data-progressbar-value=\"98\"]>.progress-bar {\r\n\twidth: 98%;\r\n\tbackground: #7ca47c\r\n}\r\n[data-progressbar-value=\"99\"]>.progress-bar {\r\n\twidth: 99%;\r\n\tbackground: #79a279\r\n}\r\n[data-progressbar-value=\"100\"]>.progress-bar {\r\n\twidth: 100%;\r\n\tbackground: #739e73;\r\n\t-webkit-animation: none;\r\n\tanimation: none;\r\n\tbackground-image: none!important\r\n}\r\n[data-progressbar-value=\"100\"]:before {\r\n\tcontent: attr(data-progressbar-value) '%';\r\n\ttop: -12px;\r\n\tleft: attr(data-progressbar-value) px\r\n}\r\n[data-progressbar-value=\"100\"]:after {\r\n\tcontent: \"complete\";\r\n\tleft: auto;\r\n\tright: 0;\r\n\tcolor: #739e73\r\n}\r\nhtml.hidden-menu-mobile-lock {\r\n\toverflow-x: hidden\r\n}\r\n.no-content-padding {\r\n\tmargin: -10px -14px 0 -14px\r\n}\r\n.no-padding {\r\n\tpadding: 0!important\r\n}\r\n.no-padding>pre {\r\n\tmargin: 30px\r\n}\r\n.no-padding .dataTables_wrapper table, .no-padding>table {\r\n\tborder: none!important;\r\n\tmargin-bottom: 0!important;\r\n\tborder-bottom-width: 0!important\r\n}\r\n.no-padding-bottom {\r\n\tpadding-bottom: 0!important\r\n}\r\n.padding-5 {\r\n\tpadding: 5px!important\r\n}\r\n.padding-7 {\r\n\tpadding: 7px!important\r\n}\r\n.padding-10 {\r\n\tpadding: 10px!important\r\n}\r\n.padding-gutter {\r\n\tpadding: 13px!important\r\n}\r\n.padding-top-10 {\r\n\tpadding-top: 10px!important\r\n}\r\n.padding-top-15 {\r\n\tpadding-top: 15px!important\r\n}\r\n.padding-bottom-10 {\r\n\tpadding-bottom: 10px!important\r\n}\r\n.padding-bottom-0 {\r\n\tpadding-bottom: 0!important\r\n}\r\n.padding-top-0 {\r\n\tpadding-top: 0!important\r\n}\r\n.no-padding .dataTables_wrapper table tr td:last-child, .no-padding .dataTables_wrapper table tr th:last-child, .no-padding>table tr td:last-child, .no-padding>table tr th:last-child {\r\n\tborder-right: none!important\r\n}\r\n.no-padding .dataTables_wrapper table tr td:first-child, .no-padding .dataTables_wrapper table tr th:first-child, .no-padding>table tr td:first-child, .no-padding>table tr th:first-child {\r\n\tborder-left: none!important\r\n}\r\n.no-padding .dataTables_wrapper table tbody tr:last-child td {\r\n\tborder-bottom: 0\r\n}\r\n.semi-bold {\r\n\tfont-weight: 400!important\r\n}\r\n.ultra-light {\r\n\tfont-weight: 300!important\r\n}\r\n.font-xs {\r\n\tfont-size: 85%!important\r\n}\r\n.font-sm {\r\n\tfont-size: 95%!important\r\n}\r\n.font-md {\r\n\tfont-size: 130%!important\r\n}\r\n.font-lg {\r\n\tfont-size: 160%!important\r\n}\r\n.font-xl {\r\n\tfont-size: 200%!important\r\n}\r\n.font-400 {\r\n\tfont-size: 400%!important\r\n}\r\n.no-margin {\r\n\tmargin: 0!important\r\n}\r\n.margin-top-5 {\r\n\tmargin-top: 5px!important\r\n}\r\n.margin-top-10 {\r\n\tmargin-top: 10px!important\r\n}\r\n.margin-bottom-5 {\r\n\tmargin-bottom: 5px!important\r\n}\r\n.margin-bottom-10 {\r\n\tmargin-bottom: 10px!important\r\n}\r\n.margin-right-5 {\r\n\tmargin-right: 5px!important\r\n}\r\n.margin-top-0 {\r\n\tmargin-top: 0!important\r\n}\r\n.margin-bottom-0 {\r\n\tmargin-bottom: 0!important\r\n}\r\n.no-border, .well[class*=\" bg-\"].no-border {\r\n\tborder-width: 0!important\r\n}\r\n.no-border-transparent {\r\n\tborder-color: transparent!important\r\n}\r\n.no-border-radius {\r\n\tborder-radius: 0;\r\n\t-moz-border-radius: 0;\r\n\t-webkit-border-radius: 0\r\n}\r\n.display-inline {\r\n\tdisplay: inline-block!important\r\n}\r\n.display-normal {\r\n\tdisplay: inline!important\r\n}\r\n.cursor-pointer {\r\n\tcursor: pointer\r\n}\r\n.hover-transparent {\r\n\topacity: .5\r\n}\r\n.hover-transparent:hover {\r\n\topacity: 1\r\n}\r\n.text-align-center, .text-center {\r\n\ttext-align: center!important\r\n}\r\n.text-align-left, .text-left {\r\n\ttext-align: left!important\r\n}\r\n.text-align-right, .text-right {\r\n\ttext-align: right!important\r\n}\r\nhr.simple {\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\tborder-style: dashed\r\n}\r\n.pull-right {\r\n\tfloat: right!Important\r\n}\r\n.pull-left {\r\n\tfloat: left!Important\r\n}\r\n.air {\r\n\tposition: absolute;\r\n\tz-index: 5\r\n}\r\n.air-bottom {\r\n\tbottom: 0\r\n}\r\n.air-top {\r\n\ttop: 0\r\n}\r\n.air-top-right {\r\n\ttop: 0;\r\n\tright: 0\r\n}\r\n.air-top-left {\r\n\ttop: 0;\r\n\tleft: 0\r\n}\r\n.air-bottom-left {\r\n\tbottom: 0;\r\n\tleft: 0\r\n}\r\n.air-bottom-right {\r\n\tbottom: 0;\r\n\tright: 0\r\n}\r\n.display-none {\r\n\tdisplay: none!important\r\n}\r\n.checkbox input[type=checkbox].checkbox+span, .checkbox-inline input[type=checkbox].checkbox+span, .radio input[type=radio].radiobox+span, .radiobox-inline input[type=radio].radiobox+span {\r\n\tmargin-left: -20px\r\n}\r\n.form-inline .checkbox input[type=checkbox].checkbox+span, .form-inline .radiobox input[type=radio].radiobox+span {\r\n\tmargin-left: 0\r\n}\r\n.form-inline .checkbox, .form-inline .radiobox {\r\n\tpadding-left: 0\r\n}\r\ninput[type=checkbox].checkbox+span, label input[type=radio].radiobox+span {\r\n\tvertical-align: middle;\r\n\tline-height: 20px\r\n}\r\ninput[type=checkbox].checkbox+span, input[type=checkbox].checkbox+span:after, input[type=checkbox].checkbox+span:before, input[type=radio].radiobox+span, input[type=radio].radiobox+span:after, input[type=radio].radiobox+span:before {\r\n\tbox-sizing: content-box!important;\r\n\t-webkit-box-sizing: content-box!important;\r\n\t-moz-box-sizing: content-box!important\r\n}\r\ninput[type=checkbox].checkbox, input[type=radio].radiobox {\r\n\tvisibility: hidden;\r\n\tposition: absolute;\r\n\tz-index: 20;\r\n\twidth: 18px;\r\n\theight: 18px\r\n}\r\nlabel input[type=checkbox].checkbox+span, label input[type=radio].radiobox+span {\r\n\tposition: relative;\r\n\tz-index: 19;\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n\tline-height: 17px;\r\n\tmin-height: 14px;\r\n\tmin-width: 14px;\r\n\tmargin-right: 5px\r\n}\r\nlabel input[type=checkbox].checkbox+span:hover, label input[type=radio].radiobox+span:hover {\r\n\tcursor: pointer\r\n}\r\nlabel input[type=checkbox].checkbox+span:before, label input[type=radio].radiobox+span:before {\r\n\tfont-family: FontAwesome;\r\n\tfont-size: 12px;\r\n\tborder-radius: 0;\r\n\tcontent: \"\\a0\";\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tpadding: 1px;\r\n\theight: 12px;\r\n\tline-height: 12px;\r\n\tmin-width: 12px;\r\n\tmargin-right: 5px;\r\n\tborder: 1px solid #bfbfbf;\r\n\tbackground-color: #f4f4f4;\r\n\tfont-weight: 400;\r\n\tmargin-top: -1px\r\n}\r\nlabel input[type=radio].radiobox+span:before {\r\n\tcontent: \"\\a0\";\r\n\tborder-radius: 50%;\r\n\t-moz-border-radius: 50%;\r\n\t-webkit-border-radius: 50%;\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.1), 0 1px 0 0 rgba(255,255,255,.2)\r\n}\r\nlabel input[type=radio].radiobox:checked+span {\r\n\tfont-weight: 700\r\n}\r\nlabel input[type=radio].radiobox:checked+span:before {\r\n\tcontent: \"\\f111\";\r\n\tcolor: #2E7BCC\r\n}\r\nlabel input[type=radio].radiobox.style-3:checked+span:before {\r\n\tcolor: #a90329;\r\n\tborder-color: #a90329\r\n}\r\nlabel input[type=radio].radiobox.style-2:checked+span:before {\r\n\tcolor: #66665e;\r\n\tborder-color: #4d90fe;\r\n\tfont-size: 9px\r\n}\r\nlabel input[type=radio].radiobox.style-2:checked+span {\r\n\tfont-weight: 400\r\n}\r\nlabel input[type=radio].radiobox.style-1+span:before {\r\n\tfont-size: 9px;\r\n\tbackground: #fff;\r\n\ttext-shadow: none;\r\n\tbox-shadow: none!important;\r\n\tborder-width: 1px;\r\n\theight: 13px;\r\n\tline-height: 13px;\r\n\tmin-width: 13px\r\n}\r\nlabel input[type=radio].radiobox.style-1:checked+span:before {\r\n\tfont-size: 10px;\r\n\tcolor: #333;\r\n\tborder-color: #333;\r\n\tbackground: #fff\r\n}\r\nlabel input[type=radio].radiobox.style-1:checked+span {\r\n\tfont-weight: 400\r\n}\r\nlabel:hover input[type=radio].radiobox+span:before, label:hover input[type=radio].radiobox:checked+span:before {\r\n\tcolor: #2E7BCC;\r\n\tborder-color: #2E7BCC\r\n}\r\nlabel:hover input[type=radio].radiobox.style-3+span:before, label:hover input[type=radio].radiobox.style-3:checked+span:before {\r\n\tcolor: #a90329;\r\n\tborder-color: #a90329\r\n}\r\nlabel:hover input[type=radio].radiobox.style-2:checked+span:before {\r\n\tcolor: #66665e;\r\n\tborder-color: #4d90fe\r\n}\r\nlabel:hover input[type=radio].radiobox.style-1+span:before, label:hover input[type=radio].radiobox.style-1:checked+span:before {\r\n\tcolor: #333;\r\n\tborder-color: #333;\r\n\tbackground: #fff\r\n}\r\nlabel:active input[type=radio].radiobox+span:before {\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.3), 0 1px 0 0 rgba(255,255,255,.4)\r\n}\r\nlabel input[type=radio][disabled].radiobox+span, label input[type=radio][disabled].radiobox:checked+span, label:hover input[type=radio][disabled].radiobox:checked+span:before {\r\n\tcolor: #A7A7A7;\r\n\tcursor: not-allowed\r\n}\r\nlabel input[type=radio][disabled].radiobox:checked+span:before {\r\n\tcontent: \"\\f111\"\r\n}\r\nlabel input[type=radio][disabled].radiobox+span:before, label input[type=radio][disabled].radiobox:checked+span:before, label:active input[type=radio][disabled].radiobox:checked+span:before, label:hover input[type=radio][disabled].radiobox:checked+span:before {\r\n\tbackground: #eee!important;\r\n\tborder-color: #CCC!important;\r\n\tbox-shadow: none;\r\n\tcolor: #A7A7A7\r\n}\r\nlabel input[type=checkbox].checkbox+span:before {\r\n\tcontent: \"\\a0\"\r\n}\r\nlabel input[type=checkbox].checkbox:checked+span:before {\r\n\tcontent: \"\\f00c\"\r\n}\r\nlabel input[type=checkbox].checkbox:checked+span {\r\n\tfont-weight: 700\r\n}\r\nlabel input[type=checkbox].checkbox:checked+span:before {\r\n\tcolor: #2E7BCC\r\n}\r\nlabel input[type=checkbox].checkbox.style-3:checked+span:before {\r\n\tcolor: #fff;\r\n\tborder-color: #a90329;\r\n\tbackground: #a90329\r\n}\r\nlabel input[type=checkbox].checkbox.style-2+span:before {\r\n\tbackground: 0 0;\r\n\tborder-color: #c1c1c1;\r\n\tbox-shadow: none\r\n}\r\nlabel input[type=checkbox].checkbox.style-2:checked+span:before {\r\n\tcontent: \"\\f00c\";\r\n\tcolor: #66665e;\r\n\tborder-color: #4d90fe;\r\n\tbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0MEM4RUFEQUE4MTFFMkEwMjM5NzlCRjAxM0UwRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0MEM4RUJEQUE4MTFFMkEwMjM5NzlCRjAxM0UwRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDQwQzhFOERBQTgxMUUyQTAyMzk3OUJGMDEzRTBGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDQwQzhFOURBQTgxMUUyQTAyMzk3OUJGMDEzRTBGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsD/PVAAAAAQSURBVHjaYv7//78vQIABAAlYA05NMPppAAAAAElFTkSuQmCC) #fff\r\n}\r\nlabel input[type=checkbox].checkbox.style-2:checked+span {\r\n\tfont-weight: 400\r\n}\r\nlabel input[type=checkbox].checkbox.style-1+span:before {\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\ttext-shadow: none;\r\n\tbox-shadow: none!important;\r\n\tborder-width: 1px;\r\n\theight: 12px;\r\n\tline-height: 13px;\r\n\tmin-width: 12px\r\n}\r\nlabel input[type=checkbox].checkbox.style-1:checked+span:before {\r\n\tcolor: #333;\r\n\tborder-color: #333\r\n}\r\nlabel input[type=checkbox].checkbox.style-1:checked+span {\r\n\tfont-weight: 400\r\n}\r\nlabel:active input[type=checkbox].checkbox+span:before {\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.3), 0 1px 0 0 rgba(255,255,255,.4)\r\n}\r\nlabel:hover input[type=checkbox].checkbox+span:before {\r\n\tcolor: #2E7BCC;\r\n\tborder-color: #2E7BCC\r\n}\r\nlabel:hover input[type=checkbox].checkbox.style-3+span:before {\r\n\tcolor: #fff;\r\n\tborder-color: #A90327\r\n}\r\nlabel:hover input[type=checkbox].checkbox.style-2+span:before {\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.1), 0 1px 0 0 rgba(255,255,255,.2)\r\n}\r\nlabel:hover input[type=checkbox].checkbox.style-2:checked+span:before {\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.3), 0 1px 0 0 rgba(255,255,255,.4)\r\n}\r\nlabel:hover input[type=checkbox].checkbox.style-1+span:before {\r\n\tborder-color: #333\r\n}\r\nlabel:active input[type=checkbox].checkbox:checked+span:before {\r\n\tcolor: #fff;\r\n\tbackground: #2E7BCC;\r\n\tborder-color: #2E7BCC\r\n}\r\nlabel:active input[type=checkbox].checkbox.style-3:checked+span:before {\r\n\tcolor: #a90329;\r\n\tbackground: #fff;\r\n\tborder-color: #a90329\r\n}\r\nlabel:active input[type=checkbox].checkbox.style-2+span:before, label:active input[type=checkbox].checkbox.style-2:checked+span:before {\r\n\tcolor: #66665e;\r\n\tbackground: 0 0;\r\n\tborder-color: #c1c1c1;\r\n\tbox-shadow: inset 0 2px 3px 0 rgba(0,0,0,.3), 0 1px 0 0 rgba(255,255,255,.4)\r\n}\r\nlabel:active input[type=checkbox].checkbox.style-1:checked+span:before {\r\n\tcolor: #fff;\r\n\tbackground: #333;\r\n\tborder-color: #333\r\n}\r\nlabel input[type=checkbox][disabled].checkbox+span, label input[type=checkbox][disabled].checkbox:checked+span, label:hover input[type=checkbox][disabled].checkbox:checked+span:before {\r\n\tcolor: #A7A7A7;\r\n\tcursor: not-allowed\r\n}\r\nlabel input[type=checkbox][disabled].checkbox.style-2:checked+span:before, label input[type=checkbox][disabled].checkbox:checked+span:before {\r\n\tcontent: \"\\f00c\"\r\n}\r\nlabel input[type=checkbox][disabled].checkbox+span:before, label input[type=checkbox][disabled].checkbox:checked+span:before, label:active input[type=checkbox][disabled].checkbox:checked+span:before, label:hover input[type=checkbox][disabled].checkbox:checked+span:before {\r\n\tbackground: #eee!important;\r\n\tborder-color: #CCC!important;\r\n\tcolor: #A7A7A7;\r\n\tbox-shadow: none!important\r\n}\r\n.open>.dropdown-menu {\r\n\t-webkit-animation-name: flipInX;\r\n\tanimation-name: flipInX;\r\n\t-webkit-animation-duration: .4s;\r\n\tanimation-duration: .4s;\r\n\t-webkit-animation-fill-mode: both;\r\n\tanimation-fill-mode: both\r\n}\r\n.active+.ajax-dropdown {\r\n\t-webkit-animation-name: flipInY;\r\n\tanimation-name: flipInY;\r\n\t-webkit-animation-duration: .7s;\r\n\tanimation-duration: .7s;\r\n\t-webkit-animation-fill-mode: both;\r\n\tanimation-fill-mode: both\r\n}\r\n.square {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tmargin-right: 10px;\r\n\theight: 20px;\r\n\twidth: 20px\r\n}\r\n[class*=\" bg-\"], [class^=bg-] {\r\n\t-webkit-filter: none!important;\r\n\t        filter: none!important\r\n}\r\n.txt-color-blue {\r\n\tcolor: #57889c!important\r\n}\r\n.txt-color-blueLight {\r\n\tcolor: #92a2a8!important\r\n}\r\n.txt-color-blueDark {\r\n\tcolor: #4c4f53!important\r\n}\r\n.txt-color-green {\r\n\tcolor: #356e35!important\r\n}\r\n.txt-color-greenLight {\r\n\tcolor: #71843f!important\r\n}\r\n.txt-color-greenDark {\r\n\tcolor: #496949!important\r\n}\r\n.txt-color-red {\r\n\tcolor: #a90329!important\r\n}\r\n.txt-color-yellow {\r\n\tcolor: #b09b5b!important\r\n}\r\n.txt-color-orange {\r\n\tcolor: #b19a6b!important\r\n}\r\n.txt-color-orangeDark {\r\n\tcolor: #a57225!important\r\n}\r\n.txt-color-pink {\r\n\tcolor: #ac5287!important\r\n}\r\n.txt-color-pinkDark {\r\n\tcolor: #a8829f!important\r\n}\r\n.txt-color-purple {\r\n\tcolor: #6e587a!important\r\n}\r\n.txt-color-darken {\r\n\tcolor: #404040!important\r\n}\r\n.txt-color-lighten {\r\n\tcolor: #d5e7ec!important\r\n}\r\n.txt-color-white {\r\n\tcolor: #fff!important\r\n}\r\n.txt-color-grayDark {\r\n\tcolor: #525252!important\r\n}\r\n.txt-color-magenta {\r\n\tcolor: #6e3671!important\r\n}\r\n.txt-color-teal {\r\n\tcolor: #568a89!important\r\n}\r\n.txt-color-redLight {\r\n\tcolor: #a65858!important\r\n}\r\n.bg-color-blue {\r\n\tbackground-color: #57889c!important\r\n}\r\n.bg-color-blueLight {\r\n\tbackground-color: #92a2a8!important\r\n}\r\n.bg-color-blueDark {\r\n\tbackground-color: #4c4f53!important\r\n}\r\n.bg-color-green {\r\n\tbackground-color: #356e35!important\r\n}\r\n.bg-color-greenLight {\r\n\tbackground-color: #71843f!important\r\n}\r\n.bg-color-greenDark {\r\n\tbackground-color: #496949!important\r\n}\r\n.bg-color-red {\r\n\tbackground-color: #a90329!important\r\n}\r\n.bg-color-yellow {\r\n\tbackground-color: #b09b5b!important\r\n}\r\n.bg-color-orange {\r\n\tbackground-color: #c79121!important\r\n}\r\n.bg-color-orangeDark {\r\n\tbackground-color: #a57225!important\r\n}\r\n.bg-color-pink {\r\n\tbackground-color: #ac5287!important\r\n}\r\n.bg-color-pinkDark {\r\n\tbackground-color: #a8829f!important\r\n}\r\n.bg-color-purple {\r\n\tbackground-color: #6e587a!important\r\n}\r\n.bg-color-darken {\r\n\tbackground-color: #404040!important\r\n}\r\n.bg-color-lighten {\r\n\tbackground-color: #d5e7ec!important\r\n}\r\n.bg-color-white {\r\n\tbackground-color: #fff!important\r\n}\r\n.bg-color-grayDark {\r\n\tbackground-color: #525252!important\r\n}\r\n.bg-color-magenta {\r\n\tbackground-color: #6e3671!important\r\n}\r\n.bg-color-teal {\r\n\tbackground-color: #568a89!important\r\n}\r\n.bg-color-redLight {\r\n\tbackground-color: #a65858!important\r\n}\r\n.colorblind-friendly .alert, .colorblind-friendly .btn-primary {\r\n\tcolor: #FFF\r\n}\r\n.colorblind-friendly .btn:hover {\r\n\tbackground: #fff;\r\n\tcolor: #333;\r\n\tborder-color: #333\r\n}\r\n.colorblind-friendly .alert-danger, .colorblind-friendly .btn-danger {\r\n\tbackground-image: url(../img/colorblind-friendly/pt1.png);\r\n\tborder-color: #272727;\r\n\tbackground-color: #303030\r\n}\r\n.colorblind-friendly .alert-success, .colorblind-friendly .btn-success {\r\n\tbackground-image: url(../img/colorblind-friendly/pt2.png);\r\n\tborder-color: #FF00EB;\r\n\tbackground-color: #1E5E00\r\n}\r\n.colorblind-friendly .alert-warning, .colorblind-friendly .btn-warning {\r\n\tbackground-image: url(../img/colorblind-friendly/pt3.png);\r\n\tborder-color: #5F4415;\r\n\tbackground-color: #A07A00\r\n}\r\n.colorblind-friendly .alert-info, .colorblind-friendly .btn-info {\r\n\tborder-color: #F90;\r\n\tbackground-color: #002E70\r\n}\r\n.colorblind-friendly .jarviswidget-ctrls .button-icon:hover {\r\n\tbackground-color: #333;\r\n\tcolor: #fff!important\r\n}\r\n.colorblind-friendly .jarviswidget-color-blue .jarviswidget-ctrls .button-icon:hover, .colorblind-friendly .jarviswidget-color-blueDark .jarviswidget-ctrls .button-icon:hover, .colorblind-friendly .jarviswidget-color-darken .jarviswidget-ctrls .button-icon:hover {\r\n\tbackground-color: #fff;\r\n\tcolor: #333!important\r\n}\r\n.colorblind-friendly .jarviswidget {\r\n\tposition: relative\r\n}\r\n.colorblind-friendly .jarviswidget:hover:before {\r\n\tposition: absolute;\r\n\ttop: -3px;\r\n\tleft: -5px;\r\n\tright: -5px;\r\n\tbottom: 0;\r\n\tborder: 6px solid #333;\r\n\tvisibility: visible;\r\n\toverflow: visible;\r\n\theight: 103%;\r\n\tz-index: 0;\r\n\tborder-bottom-width: 10px\r\n}\r\n.colorblind-friendly .nav>li:not(.active)>a:focus, .colorblind-friendly .nav>li:not(.active)>a:hover {\r\n\tbackground-color: #303030;\r\n\tcolor: #fff!important\r\n}\r\n.page-footer {\r\n\theight: 52px;\r\n\tpadding: 15px 13px 0;\r\n\tpadding-left: 233px;\r\n\tborder-top: 1px solid #CECECE;\r\n\tbackground: #2a2725;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tbottom: 0\r\n}\r\n.fixed-page-footer .page-footer {\r\n\tposition: fixed;\r\n\tz-index: 901\r\n}\r\n.minified .page-footer {\r\n\tpadding-left: 58px\r\n}\r\n.container.fixed-page-footer .page-footer {\r\n\tmax-width: 1164px\r\n}\r\n.hidden-menu .page-footer {\r\n\tpadding-left: 20px\r\n}\r\n\r\n@media (max-width:979px) {\r\nhtml.hidden-menu-mobile-lock {\r\n\toverflow-x: hidden\r\n}\r\n#main {\r\n\twidth: 100%!important\r\n}\r\n.page-footer {\r\n\tpadding: 15px 14px 0\r\n}\r\n.profile-pic>img {\r\n\twidth: 110px\r\n}\r\n.profile-pic {\r\n\tfloat: left\r\n}\r\n.profile-pic>img {\r\n\tmargin-right: 10px\r\n}\r\n.profile-pic+div, .profile-pic+div+div {\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px\r\n}\r\n#fullscreen>:first-child>a {\r\n\tdisplay: none!important\r\n}\r\nbody.container {\r\n\tborder: none!important;\r\n\twidth: 100%!important\r\n}\r\n.inbox-data-message>:first-child {\r\n\theight: 50px;\r\n\toverflow: hidden\r\n}\r\n.show-stats .show-stat-buttons>:first-child {\r\n\tpadding-right: 13px\r\n}\r\n.show-stats .show-stat-buttons>:last-child {\r\n\tpadding-left: 13px\r\n}\r\n.inbox-checkbox-triggered>.btn-group .btn {\r\n\tpadding-left: 10px;\r\n\tpadding-right: 10px\r\n}\r\n.inbox-body .table-wrap {\r\n\tpadding: 0!important;\r\n\tpadding-left: 5px!important;\r\n\tpadding-right: 5px!important\r\n}\r\n.inbox-nav-bar {\r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px\r\n}\r\n.inbox-data-message>:first-child>:first-child {\r\n\tdisplay: block!important;\r\n\tfont-size: 14px\r\n}\r\n.inbox-table-icon>:first-child {\r\n\tmargin-top: 12px\r\n}\r\n#inbox-table .inbox-table-icon {\r\n\tpadding-left: 10px!important\r\n}\r\n.header-search.pull-right {\r\n\tmargin-left: 0\r\n}\r\n.visible-tablet {\r\n\tdisplay: inline-block!important\r\n}\r\n.display-inline.hidden-tablet, .hidden-tablet {\r\n\tdisplay: none!important\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 310px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n.dropzone .dz-default.dz-message {\r\n\tbackground-size: 100%;\r\n\twidth: 200px;\r\n\theight: 43px;\r\n\tmargin-left: -112px;\r\n\tmargin-top: -23.5px\r\n}\r\n}\r\n\r\n@media (min-width:768px) and (max-width:979px) {\r\n#main {\r\n\tmargin-left: 0\r\n}\r\n#left-panel {\r\n\tleft: -220px\r\n}\r\n.minified #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n#hide-menu i {\r\n\tcolor: #6D6A69;\r\n\tfont-size: 100%\r\n}\r\n.hidden-menu #hide-menu i {\r\n\tcolor: #fff\r\n}\r\n#hide-menu i::before {\r\n\tcontent: \"\\f0c9\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 220px;\r\n\twidth: 100%\r\n}\r\n.fixed-ribbon #ribbon {\r\n\tleft: 0\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 200px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n\r\n}\r\n\r\n@media (min-width:768px) and (max-width:880px) {\r\n#main {\r\n\tmargin-left: 0;\r\n\toverflow-x: hidden\r\n}\r\n#left-panel {\r\n\tleft: -220px\r\n}\r\n.no-content-padding {\r\n\tmargin: 0 -14px!important\r\n}\r\n.inbox-nav-bar.no-content-padding {\r\n\tmargin-top: -10px!important\r\n}\r\n.minified #left-panel {\r\n\tleft: 0\r\n}\r\n#hide-menu>:first-child>a, .btn-header a {\r\n\tmargin-top: 5px!important;\r\n\twidth: 40px!important;\r\n\theight: 39px!important;\r\n\tline-height: 38px!important\r\n}\r\n\r\n.btn-header.transparent a {\r\n\tborder: none!important;\r\n\tbackground: 0 0;\r\n\tmargin-left: 0;\r\n\twidth: 25px!important;\r\n\tbox-shadow: none!important\r\n}\r\n.btn-header.transparent a:hover {\r\n\tcolor: #a90329\r\n}\r\n#hide-menu i {\r\n\tcolor: #6D6A69;\r\n\tfont-size: 121%\r\n}\r\n.hidden-menu #hide-menu i {\r\n\tcolor: #fff\r\n}\r\n#hide-menu i::before {\r\n\tcontent: \"\\f0c9\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 220px;\r\n\twidth: 100%\r\n}\r\n.fixed-ribbon #ribbon {\r\n\tleft: 0\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 180px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n.header-search>input[type=text] {\r\n\tmargin-top: 9px\r\n}\r\n}\r\n\r\n@media (max-width:767px) {\r\n.profile-pic>img {\r\n\twidth: 100px\r\n}\r\n#main {\r\n\tmargin-left: 0;\r\n\toverflow-x: hidden\r\n}\r\n#left-panel {\r\n\tleft: -220px\r\n}\r\n.show-stat-microcharts>div {\r\n\tmargin-top: 0!important;\r\n\tborder-right: none!important\r\n}\r\n.show-stat-buttons {\r\n\tpadding-left: 10px!important;\r\n\tpadding-right: 10px!important\r\n}\r\n\r\n.no-content-padding {\r\n\tmargin: 0 -5px!important\r\n}\r\n.inbox-nav-bar.no-content-padding {\r\n\tmargin-top: -10px!important\r\n}\r\n.minified #left-panel {\r\n\tleft: 0\r\n}\r\n.btn-header.transparent a {\r\n\tborder: none!important;\r\n\tbackground: 0 0;\r\n\tmargin-left: 0;\r\n\twidth: 25px!important;\r\n\tbox-shadow: none!important\r\n}\r\n.btn-header.transparent a:hover {\r\n\tcolor: #a90329\r\n}\r\n#hide-menu>:first-child>a, .btn-header a {\r\n\tmargin-top: 5px!important;\r\n\twidth: 40px!important;\r\n\theight: 39px!important;\r\n\tline-height: 38px!important\r\n}\r\n#hide-menu>:first-child>a {\r\n\twidth: 50px!important\r\n}\r\n#hide-menu i {\r\n\tcolor: #6D6A69;\r\n\tfont-size: 121%\r\n}\r\n.hidden-menu #hide-menu i {\r\n\tcolor: #fff\r\n}\r\n#hide-menu i::before {\r\n\tcontent: \"\\f0c9\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 220px;\r\n\twidth: 100%\r\n}\r\n.fixed-ribbon #ribbon {\r\n\tleft: 0\r\n}\r\nbody.fixed-navigation.hidden-menu {\r\n\toverflow: hidden!important\r\n}\r\n.fixed-ribbon #content {\r\n\tpadding-top: 52px\r\n}\r\n.header-search {\r\n\tdisplay: none\r\n}\r\n#search-mobile {\r\n\tdisplay: block\r\n}\r\n.search-mobile .header-search {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 49px;\r\n\tbackground: #333;\r\n\tpadding: 0 2px;\r\n\tbox-sizing: border-box;\r\n\tleft: 0\r\n}\r\n.search-mobile .header-search>input[type=text] {\r\n\tmargin-top: 2px;\r\n\theight: 45px;\r\n\tborder-color: #333;\r\n\tpadding-right: 75px\r\n}\r\n.search-mobile .header-search>button {\r\n\theight: 29px;\r\n\tline-height: 29px;\r\n\tbackground: #DDD;\r\n\tright: 44px\r\n}\r\n.search-mobile #search-mobile {\r\n\tdisplay: none\r\n}\r\n.search-mobile #cancel-search-js {\r\n\tdisplay: block\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 250px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n}\r\n\r\n@media only screen and (min-width:0) and (max-width:679px) {\r\n.profile-pic>img {\r\n\twidth: 90px\r\n}\r\n#main {\r\n\tmargin-left: 0;\r\n\toverflow-x: hidden\r\n}\r\n#left-panel {\r\n\tleft: -220px\r\n}\r\n.show-stat-microcharts>div {\r\n\tmargin-top: 0!important;\r\n\tborder-right: none!important\r\n}\r\n.show-stat-buttons {\r\n\tpadding-left: 10px!important;\r\n\tpadding-right: 10px!important\r\n}\r\n#content, #ribbon {\r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px\r\n}\r\n#header {\r\n\tpadding-right: 5px\r\n}\r\n.no-content-padding {\r\n\tmargin: 0 -5px!important\r\n}\r\n.inbox-nav-bar.no-content-padding {\r\n\tmargin-top: -10px!important\r\n}\r\n.minified #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n#ribbon {\r\n\tborder-bottom: 1px solid #CFCFCF;\r\n\tborder-top: 1px solid #E6E6E6;\r\n\tbackground: #F5F5F5\r\n}\r\n#ribbon .breadcrumb, #ribbon .breadcrumb a {\r\n\tcolor: #6D6C6C!important\r\n}\r\n#ribbon .breadcrumb li:last-child, #ribbon .breadcrumb>.active {\r\n\tcolor: #333!important\r\n}\r\n#hide-menu>:first-child>a, .btn-header a {\r\n\tmargin-top: 5px!important;\r\n\twidth: 40px!important;\r\n\theight: 39px!important;\r\n\tline-height: 38px!important\r\n}\r\n#hide-menu>:first-child>a {\r\n\twidth: 50px!important\r\n}\r\n\r\n.btn-header.transparent a {\r\n\tborder: none!important;\r\n\tbackground: 0 0;\r\n\tmargin-left: 0;\r\n\twidth: 25px!important;\r\n\tbox-shadow: none!important\r\n}\r\n.btn-header.transparent a:hover {\r\n\tcolor: #a90329\r\n}\r\n#hide-menu i {\r\n\tcolor: #6D6A69;\r\n\tfont-size: 121%\r\n}\r\n.hidden-menu #hide-menu i {\r\n\tcolor: #fff\r\n}\r\n#hide-menu i::before {\r\n\tcontent: \"\\f0c9\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n.hidden-menu #main {\r\n\tposition: relative;\r\n\tleft: 210px\r\n}\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 220px;\r\n\twidth: 100%\r\n}\r\n.fixed-ribbon #ribbon {\r\n\tleft: 0\r\n}\r\n.header-search {\r\n\tdisplay: none\r\n}\r\n#search-mobile {\r\n\tdisplay: block\r\n}\r\n.search-mobile .header-search {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 49px;\r\n\tbackground: #333;\r\n\tpadding: 0 2px;\r\n\tbox-sizing: border-box;\r\n\tleft: 0\r\n}\r\n.search-mobile .header-search>input[type=text] {\r\n\tmargin-top: 2px;\r\n\theight: 45px;\r\n\tborder-color: #333;\r\n\tpadding-right: 75px\r\n}\r\n.search-mobile .header-search>button {\r\n\theight: 29px;\r\n\tline-height: 29px;\r\n\tbackground: #DDD;\r\n\tright: 44px\r\n}\r\n.search-mobile #search-mobile {\r\n\tdisplay: none\r\n}\r\n.search-mobile #cancel-search-js {\r\n\tdisplay: block\r\n}\r\n.hidden-tablet {\r\n\tdisplay: none!important\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 300px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n}\r\n\r\n@media only screen and (min-width:320px) and (max-width:479px) {\r\n.page-title {\r\n\tdisplay: none\r\n}\r\n.profile-pic {\r\n\ttext-align: left\r\n}\r\n.profile-pic>img {\r\n\twidth: 90px;\r\n\tmargin-left: 0;\r\n\ttop: -25px;\r\n\tmargin-right: 0\r\n}\r\n.profile-pic+div>h1 {\r\n\tfont-size: 20px\r\n}\r\n.profile-pic+div>h1 small {\r\n\tfont-size: 16px\r\n}\r\n.profile-carousel .carousel-indicators {\r\n\ttop: 10px\r\n}\r\n#main {\r\n\tmargin-left: 0;\r\n\toverflow-x: hidden\r\n}\r\n#left-panel {\r\n\tleft: -220px\r\n}\r\n.show-stat-microcharts>div {\r\n\tmargin-top: 0!important;\r\n\tborder-right: none!important\r\n}\r\n.show-stat-buttons {\r\n\tpadding-left: 10px!important;\r\n\tpadding-right: 10px!important\r\n}\r\n#content, #ribbon {\r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px\r\n}\r\n\r\n.no-content-padding {\r\n\tmargin: 0 -5px!important\r\n}\r\n.inbox-nav-bar.no-content-padding {\r\n\tmargin-top: -10px!important\r\n}\r\n.minified #left-panel {\r\n\tleft: 0\r\n}\r\n\r\n#ribbon {\r\n\tborder-bottom: 1px solid #CFCFCF;\r\n\tborder-top: 1px solid #E6E6E6;\r\n\tbackground: #F5F5F5\r\n}\r\n#ribbon .breadcrumb, #ribbon .breadcrumb a {\r\n\tcolor: #6D6C6C!important\r\n}\r\n#ribbon .breadcrumb li:last-child, #ribbon .breadcrumb>.active {\r\n\tcolor: #333!important\r\n}\r\n\r\n#logo-group {\r\n\twidth: 169px!important\r\n}\r\n#sparks {\r\n\ttext-align: center;\r\n\tbackground: #E0E0E0;\r\n\tpadding: 10px 0;\r\n\tmargin-bottom: 15px\r\n}\r\n#sparks li {\r\n\tpadding: 0 10px 0 20px\r\n}\r\n#hide-menu>:first-child>a, .btn-header a {\r\n\tmargin-top: 5px!important;\r\n\twidth: 40px!important;\r\n\theight: 39px!important;\r\n\tline-height: 38px!important\r\n}\r\n\r\n.btn-header.transparent a {\r\n\tborder: none!important;\r\n\tbackground: 0 0;\r\n\tmargin-left: 0;\r\n\twidth: 25px!important;\r\n\tbox-shadow: none!important\r\n}\r\n.btn-header.transparent a:hover {\r\n\tcolor: #a90329\r\n}\r\n#hide-menu>:first-child>a {\r\n\twidth: 46px!important\r\n}\r\n#hide-menu i {\r\n\tcolor: #6D6A69;\r\n\tfont-size: 121%\r\n}\r\n.hidden-menu #hide-menu i {\r\n\tcolor: #fff\r\n}\r\n#hide-menu i::before {\r\n\tcontent: \"\\f0c9\"\r\n}\r\n.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n.hidden-menu #main {\r\n\tposition: relative;\r\n\tleft: 210px\r\n}\r\n.hidden-menu.fixed-ribbon #ribbon {\r\n\tleft: 220px;\r\n\twidth: 100%\r\n}\r\n.fixed-ribbon #ribbon {\r\n\tleft: 0\r\n}\r\n.hidden-mobile {\r\n\tdisplay: none!important\r\n}\r\n.visible-mobile {\r\n\tdisplay: inline-block!important\r\n}\r\n.ajax-notifications {\r\n\theight: 250px\r\n}\r\n.ajax-dropdown {\r\n\twidth: 299px;\r\n\theight: 320px;\r\n\tleft: 0;\r\n\ttop: 49px\r\n}\r\n.ajax-dropdown:before {\r\n\tmargin-left: -14px\r\n}\r\n.ajax-dropdown:after {\r\n\tmargin-left: -13px\r\n}\r\n.header-search {\r\n\tdisplay: none\r\n}\r\n#search-mobile {\r\n\tdisplay: block;\r\n\tmargin-left: 0\r\n}\r\n.search-mobile .header-search {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 49px;\r\n\tbackground: #333;\r\n\tpadding: 0 2px;\r\n\tbox-sizing: border-box;\r\n\tleft: 0\r\n}\r\n.search-mobile .header-search>input[type=text] {\r\n\tmargin-top: 2px;\r\n\theight: 45px;\r\n\tborder-color: #333;\r\n\tpadding-right: 75px\r\n}\r\n.search-mobile .header-search>button {\r\n\theight: 29px;\r\n\tline-height: 29px;\r\n\tbackground: #DDD;\r\n\tright: 44px\r\n}\r\n.search-mobile #search-mobile {\r\n\tdisplay: none\r\n}\r\n.search-mobile #cancel-search-js {\r\n\tdisplay: block\r\n}\r\n.jarviswidget header h2 {\r\n\twidth: 135px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden\r\n}\r\n}\r\n#extr-page #main {\r\n\tmargin-top: 0!important\r\n}\r\n#mobile-profile-img {\r\n\tpadding-right: 2px!important;\r\n\tpadding-left: 2px!important\r\n}\r\n.menu-on-top #mobile-profile-img {\r\n\tdisplay: block!important\r\n}\r\n#mobile-profile-img a.userdropdown img {\r\n\twidth:44px; height:44px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; border:none!important; margin:0 5px;box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);\r\n}\r\n.menu-on-top .page-footer {\r\n\tpadding: 15px 13px 0\r\n}\r\n.menu-on-top.hidden-menu #left-panel {\r\n\tleft: 0\r\n}\r\n.menu-on-top #main {\r\n\tmargin-left: 0!important;\r\n\tmargin-top: 69px!important\r\n}\r\n.menu-on-top #hide-menu, .menu-on-top #logout, .menu-on-top .minifyme {\r\n\tdisplay: none!important\r\n}\r\n.menu-on-top aside#left-panel {\r\n\twidth: 100%!important;\r\n\tmin-height: 0!important;\r\n\theight: auto;\r\n\toverflow: visible;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0,0,0,.25);\r\n\tborder-bottom: 1px solid #222;\r\n\tborder-top: 1px solid #333\r\n}\r\n.menu-on-top aside#left-panel nav>ul {\r\n\tdisplay: block;\r\n\twidth: 100%\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li:first-child {\r\n\tmargin-left: 0\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li {\r\n\tposition: relative;\r\n\theight: auto!important;\r\n\tpadding: 0!important;\r\n\tdisplay: inline-block;\r\n\tfloat: left;\r\n\tborder-right: 1px solid #222;\r\n\tborder-left: 1px solid #4E4E4E;\r\n\toverflow: visible\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li>a {\r\n\tdisplay: inline-block;\r\n\theight: 68px;\r\n\ttext-shadow: none!important;\r\n\tfont-size: 13px;\r\n\ttext-decoration: none;\r\n\tline-height: 22px;\r\n\tpadding: 10px 9px!important\r\n}\r\n.menu-on-top li.active>a {\r\n\tfont-weight: 700!important\r\n}\r\n.menu-on-top .login-info, .menu-on-top nav>ul>li>a b {\r\n\tdisplay: none\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li>a>i {\r\n\tdisplay: block!important;\r\n\tmargin: 1px 0 4px;\r\n\tline-height: inherit;\r\n\ttext-align: center;\r\n\tfont-size: 24px;\r\n\tmargin-bottom: 2px;\r\n\twidth: 100%\r\n}\r\n.menu-on-top .menu-item-parent {\r\n\tmax-width: 72px;\r\n\tmin-width: 50px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\ttext-align: center;\r\n\tfont-size: 13px\r\n}\r\n.menu-on-top .menu-item-parent+span {\r\n\tfloat: none!important;\r\n\ttop: 5px;\r\n\tright: 5px;\r\n\tposition: absolute\r\n}\r\n.menu-on-top nav ul ul li a {\r\n\tpadding-left: 10px!important;\r\n\tfont-size: 13px\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li:hover {\r\n\tbackground: #fff;\r\n\tbackground: -webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(1, #cfcfcf));\r\n\tbackground: -o-linear-gradient(#cfcfcf, #fff);\r\nfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#cfcfcf', endColorstr='#ffffff', GradientType=0)\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li:hover>a {\r\n\tcolor: #333!important;\r\n\tborder-left: 1px solid #c7c7c7;\r\n\tborder-right: 1px solid #c7c7c7;\r\n\tpadding-left: 8px!important;\r\n\tpadding-right: 8px!important\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li>ul {\r\n\tposition: absolute!important;\r\n\tbackground: #3a3633\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li:hover>ul {\r\n\tdisplay: block!important\r\n}\r\n.menu-on-top aside#left-panel nav ul li.active>a:before {\r\n\tcontent: \"\"!important\r\n}\r\n.menu-on-top nav>ul ul li::before, .menu-on-top nav>ul>li>ul::before {\r\n\tborder: none\r\n}\r\n.menu-on-top nav ul ul li a, .menu-on-top nav ul ul ul li a {\r\n\tcolor: #4C4F53\r\n}\r\n.menu-on-top nav ul ul li a:hover, .menu-on-top nav ul ul li:hover>a, .menu-on-top nav ul ul ul li a:hover {\r\n\tcolor: #fff;\r\n\tbackground-color: #4C4F53\r\n}\r\n.menu-on-top nav>ul ul ul {\r\n\tborder-top: 1px solid #c7c7c7!important\r\n}\r\n.menu-on-top nav ul ul li {\r\n\toverflow: visible\r\n}\r\n.menu-on-top nav ul ul, .menu-on-top nav ul ul ul {\r\n\tdisplay: none!important;\r\n\tbackground: #fff!important;\r\n\tborder: 1px solid #c7c7c7;\r\n\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n\tborder-bottom: 1px solid #BD2A2A;\r\n\tborder-top: none;\r\n\twidth: 200px;\r\n\tborder-radius: 0;\r\n\tpadding: 3px;\r\n\tmargin-left: 0\r\n}\r\n.menu-on-top nav>ul ul li:hover>ul {\r\n\tdisplay: block!important;\r\n\tposition: absolute;\r\n\tz-index: 999;\r\n\tleft: 100%;\r\n\ttop: -8px;\r\n\tbackground: #333\r\n}\r\n.menu-on-top nav>ul>li>a:after {\r\n\tcontent: \"\\f0dd\"!important;\r\n\ttop: 76%!important;\r\n\tcolor: #636363!important;\r\n\tleft: 46%\r\n}\r\n.menu-on-top nav ul ul li:hover>a:after, .menu-on-top nav>ul ul>li a:after, .menu-on-top nav>ul ul>li a:hover:after, .menu-on-top nav>ul>li>a:after {\r\n\tfont-family: FontAwesome;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tline-height: 1;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tcontent: \"\\f0da\";\r\n\tdisplay: block!important;\r\n\tposition: absolute;\r\n\ttop: 9px;\r\n\tright: 4px;\r\n\tcolor: #333\r\n}\r\n.menu-on-top nav ul ul li:hover>a:after, .menu-on-top nav>ul ul>li a:hover:after {\r\n\tcolor: #fff\r\n}\r\n.menu-on-top nav>ul ul>li a:only-child:after, .menu-on-top nav>ul>li>a:only-child:after {\r\n\tcontent: \"\"!important\r\n}\r\n.menu-on-top nav ul ul .active>a {\r\n\tcolor: #333!important\r\n}\r\n.menu-on-top nav ul ul .active>a:hover, .menu-on-top nav ul ul li.active:hover>a {\r\n\tcolor: #fff!important\r\n}\r\n.menu-on-top .slimScrollDiv, .menu-on-top nav {\r\n\toverflow: visible!important\r\n}\r\nbody.menu-on-top.fixed-header {\r\n\tpadding-top: 49px\r\n}\r\nbody.menu-on-top.fixed-header.fixed-navigation nav>ul {\r\n\tpadding-right: 0;\r\n\tposition: relative;\r\n\theight: auto;\r\n\twidth: auto;\r\n\toverflow: visible\r\n}\r\nbody.menu-on-top.fixed-header.fixed-navigation.fixed-ribbon #ribbon {\r\n\tleft: 0;\r\n\ttop: 118px\r\n}\r\n\r\n@media (max-width:979px) {\r\n\r\n.menu-on-top .btn-header.pull-right {\r\n\tmargin-left: 0!important\r\n}\r\n.menu-on-top #main {\r\n\tmargin-top: 0!important\r\n}\r\n.menu-on-top #left-panel {\r\n\tleft: 0;\r\n\tdisplay: none\r\n}\r\nbody.menu-on-top.fixed-header.fixed-navigation.fixed-ribbon #ribbon {\r\n\ttop: 49px\r\n}\r\n.menu-on-top.hidden-menu #left-panel {\r\n\tdisplay: block\r\n}\r\n.menu-on-top.hidden-menu #main {\r\n\tleft: 0!important\r\n}\r\n.menu-on-top #hide-menu {\r\n\tdisplay: block!important\r\n}\r\n.menu-on-top aside#left-panel nav {\r\n\theight: 300px!important;\r\n\toverflow: scroll;\r\n\toverflow-x: hidden!important;\r\n\t-webkit-overflow-scrolling: touch\r\n}\r\n.menu-on-top .menu-item-parent {\r\n\twhite-space: inherit;\r\n\toverflow: visible;\r\n\ttext-overflow: inherit;\r\n\ttext-align: left;\r\n\tmin-width: 85%;\r\n\tmax-width: 85%;\r\n\tpadding-left: 5px\r\n}\r\n.menu-on-top .menu-item-parent+span {\r\n\ttop: 50%;\r\n\tmargin-top: -8px\r\n}\r\n.menu-on-top nav li.active>ul {\r\n\tdisplay: block\r\n}\r\n.menu-on-top nav>ul>li.active {\r\n\tbackground: #fff;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #cfcfcf), color-stop(66%, #fff));\r\n\tbackground: -webkit-linear-gradient(top, #cfcfcf 0, #fff 66%);\r\n\tbackground: linear-gradient(to bottom, #cfcfcf 0, #fff 66%)\r\n}\r\n.menu-on-top nav>ul>li.active>a {\r\n\tcolor: #333!important\r\n}\r\n.menu-on-top nav ul ul li:hover>a:after, .menu-on-top nav>ul ul>li a:after, .menu-on-top nav>ul ul>li a:hover:after, .menu-on-top nav>ul>li>a:after {\r\n\ttop: 50%;\r\n\tright: 15px;\r\n\tfont-size: 15px;\r\n\tmargin-top: -8px;\r\n\tcontent: \"\\f0dd\"!important\r\n}\r\n.menu-on-top nav>ul ul>li a:only-child:after, .menu-on-top nav>ul>li>a:only-child:after {\r\n\tcontent: \"\"!important\r\n}\r\n.menu-on-top nav>ul>li>a:after {\r\n\ttop: 50%!important;\r\n\tleft: auto;\r\n\tmargin-top: -14px;\r\n\tfont-size: 20px\r\n}\r\n.menu-on-top nav ul ul, .menu-on-top nav ul ul ul {\r\n\tpadding: 0;\r\n\tborder: none\r\n}\r\n.menu-on-top nav ul ul ul {\r\n\tborder-bottom: 2px solid #333\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li {\r\n\twidth: 100%\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li>a {\r\n\theight: auto;\r\n\tdisplay: block;\r\n\tpadding: 8px 9px!important;\r\n\tborder-bottom: 1px dotted #585858\r\n}\r\n.menu-on-top nav>ul>li>ul>li>a, .menu-on-top nav>ul>li>ul>li>ul>li>a {\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li>a>i {\r\n\tdisplay: inline!important\r\n}\r\n.menu-on-top aside#left-panel nav>ul li ul {\r\n\tposition: relative!important;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\tleft: 0\r\n}\r\n.menu-on-top aside#left-panel nav>ul>li:active>ul, .menu-on-top aside#left-panel nav>ul>li:focus>ul {\r\n\tdisplay: block!important\r\n}\r\n}\r\n.menu-on-top .top-menu-invisible, .no-menu #hide-menu, .no-menu #left-panel, .no-menu #logout {\r\n\tdisplay: none!important\r\n}\r\n.no-menu #main {\r\n\tmargin: 0!important\r\n}\r\n.no-menu #mobile-profile-img {\r\n\tdisplay: block!important\r\n}\r\n\r\n.w { float:left!important; width:100%!important;}.w100 { float:left; width:100%;}.fl { float:left!important;}.fr { float:right!important;}.db { display:block;}.pad0{padding:0!important;}.mrg0{margin:0!important;}.dn { display:none!important;}.pozrel { position:relative!important;}.bg0 { background:none!important;}.brd0 { border:none!important;}.dtable { display:table;}\r\n.box1 { font-size:19px; color:#9b9c9f; margin:13px 20px 10px!important;}\r\n.box1 span { font-size:10px; color:#fff; position:absolute;font-family: 'Open Sans'; margin:0 0 0 4px;}\r\n.NavMain { margin:10px 0 0 0}\r\n.NavMain li { min-height:110px; width:100%; background:url(../img/seprator.png) no-repeat center bottom; position:relative;}\r\n.NavMain li a { color:#fff; font-size:15px;font-family: 'AvenirNextLTW01RegularRegular'; float:left; width:100%; text-align:center; text-transform:uppercase;padding: 10px 10px 0;min-height: 100px;}\r\n#main .demo { display:none}\r\n.NavMain ul li.active>a:before { width:12px; height:81px; background:url(../img/active.png) no-repeat center right; font-size:0; right:0;}\r\n.NavMain ul span.menu-item-parent { display:block; text-align:center; clear:both; opacity:.30;}\r\n.NavMain ul li.active a span{ color:#db5d64!important;opacity:1;}\r\n.NavMain ul li:hover a span { color:#db5d64!important; opacity:1;}\r\n\r\n.bximage1 { background:url(../img/icon_1.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage1 { background:url(../img/icon_11.png) no-repeat center center;}\r\n.bximage2 { background:url(../img/icon_2.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage2 { background:url(../img/icon_22.png) no-repeat center center;}\r\n.bximage3 { background:url(../img/icon_3.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage3 { background:url(../img/icon_33.png) no-repeat center center;}\r\n.bximage4 { background:url(../img/icon_4.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage4 { background:url(../img/icon_44.png) no-repeat center center;}\r\n.bximage5 { background:url(../img/icon_5.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 7px;}\r\n.NavMain ul li.active .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage5 { background:url(../img/icon_55.png) no-repeat center center;}\r\n.bximage6 { background:url(../img/icon_6.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage6 { background:url(../img/icon_66.png) no-repeat center center;}\r\n.bximage7 { background:url(../img/icon_7.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage7 { background:url(../img/icon_77.png) no-repeat center center;}\r\n.bximage8 { background:url(../img/icon_8.png) no-repeat center center; width:40px; height:36px; display:block; width:100%; clear:both; margin:10px 0 5px;}\r\n.NavMain ul li.active .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n.NavMain ul li a:hover .bximage8 { background:url(../img/icon_88.png) no-repeat center center;}\r\n\r\n.badge { width:23px; height:23px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; -ms-border-radius:50px; background:#df6367; color:#fff!important; position:absolute; top:12px; right:35px; padding:6px 0 0 0;}\r\n.NavMain ul li.active a span.badge { color:#fff!important;}\r\n.NavMain ul li:hover a span.badge { color:#fff!important;}\r\n\r\n.minified .NavMain ul li .bximage1 { background-size:20px auto!important; width:auto; height:auto;}\r\n.minified .NavMain ul li .bximage2 { background-size:20px auto!important;width:auto; height:auto;}\r\n\r\n.Ione { display:inline-block;}\r\n.Itwo { display:none;}\r\n.assumble { margin:10px 0 0 0;}\r\n.assumble .nav-tabs>li a {font-family: 'AvenirNextLTPro-Demi'; font-size:13px; text-transform:uppercase; padding:9px 5px;}\r\n.assumble .nav-tabs>li a img { margin:0 10px 0 0;}\r\n.assumble .nav-tabs>li.active>a { background:none; border:1px solid transparent; box-shadow:none;color:#d32a47; cursor:pointer;}\r\n.assumble .nav-tabs>li.active>a .Ione { display:none;}\r\n.assumble .nav-tabs>li.active>a .Itwo { display:inline-block;}\r\n.assumble .col-sm-12 { padding-left:26px; padding-right:26px;}\r\n.assumble .nav-tabs>li span.hidden-mobile { margin: 2px 0 0 0;display: inline-block;vertical-align: middle;letter-spacing: .4px;}\r\n.assumble .nav-tabs>li {float: left;margin-bottom: -1px;margin-right: 4%;}\r\n.assumble .nav-tabs>li:last-child {margin-right: 0%;}\r\n.assumble .nav { width:100%; border:none; margin:0 0 19px;}\r\n.assumble .nav-tabs>li>a:hover { background-color:none!important;background:none!important;border:1px solid transparent;outline:none!important;}\r\n.assumble .jarviswidget .widget-body { padding:0; background:#fafbfc!important; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; border:1px solid #e6eaee!important;}\r\n.assumble .jarviswidget>div { border:none!important;}\r\n\r\n.boxIn_lft { width:70%; border-right:1px solid #e3e4e5; position:relative; display:table-cell; vertical-align:top;}\r\n.boxIn_rit {width:30%; background:#fafbfc; min-height:100px; display:table-cell;vertical-align:top;}\r\n.boxIn_lft .nav-tabs>li span.hidden-mobile { letter-spacing:0!important; text-transform:capitalize; margin:0;}\r\n.boxIn_lft .nav-tabs>li a {font-family: 'Open Sans'!important; font-weight:normal;}\r\n.boxIn_lft .nav { padding:1px 0px;}\r\n.boxIn_lft .nav-tabs>li {padding-right: 18px; padding-left:12px;border-right: 1px solid #e3e4e5; margin:0 1% 0 0;}\r\n.boxIn_lft .nav-tabs>li:last-child { padding-right:0; border:0;}\r\n.boxIn_lft .nav { margin:0;}\r\n\r\n.box_mess { float:left; width:100%; background:#2f323c; min-height:186px; padding:19px 19px 19px 85px; position:relative;}\r\n.rounPic { position:absolute; top:30px; left:18px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7);}\r\n.rounPic img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%;}\r\n.textarePost { display:block; margin:0 0;}\r\n.textarePost textarea {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;min-height: 86px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px;}\r\n.postBTN { float:left; width:84px; height:29px; border-radius:50px; border:none; color:#fff; font-size:12px;font-family: 'AvenirNextLTW01RegularRegular'; letter-spacing:1px; text-transform:uppercase; margin:16px 0 0 0; line-height:29px;\r\nbackground: #e0696b;\r\nbackground: -webkit-linear-gradient(top,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nbackground: linear-gradient(to bottom,  #e0696b 0%,#dd5862 50%,#db4a5a 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0696b', endColorstr='#db4a5a',GradientType=0 );\r\n}\r\n.postBTN:hover {background: #db4a5a;\r\nbackground: -webkit-linear-gradient(top,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nbackground: linear-gradient(to bottom,  #db4a5a 0%,#dd5862 50%,#e0696b 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#db4a5a', endColorstr='#e0696b',GradientType=0 );\r\n}\r\n\r\n.Drop { float:left; margin:20px 0 0 12px; position:relative;}\r\n.Drop button { background:none!important; border:none!important; color:#70808b!important; position:relative;box-shadow:none!important;}\r\n.Drop i { font-size:14px; margin:0 0 0 5px;}\r\n\r\n.Drop2 { float:left; margin:10px 0 0 20px; position:relative;}\r\n.Drop2 button { background:none!important; border:none!important; color:#70808b!important; position:relative; box-shadow:none!important;box-shadow:none!important;}\r\n\r\n.drop2poz { position:absolute; right:10px; top:0px;}\r\n.Drop2 i { font-size:14px; margin:0 0 0 11px;}\r\n\r\n.postMain { display:block; margin:0 0; background:#fff;}\r\n.postMList { float:left; width:100%; position:relative; padding:21px 17px 27px 88px; min-height:100px; margin:10px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic { width:48px; height:48px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic img { float:left; width:100%; margin:0!important;}\r\n.postMList .drop2poz button { font-size:15px;}\r\n.postMList .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList .Drop2 { margin:12px 0 0 20px;}\r\n.postMList p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList span { color:#e50431; display: inline-block;}\r\n.postMList a {color:#e50431;display: inline-block;}\r\n.postMList h3 {float:left; width:100%; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList img { margin:10px 0;}\r\n\r\n.postActionz { margin:10px 0 0 0;}\r\n.postActionz a {font-family:\"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", \"DejaVu Sans\", Verdana, sans-serif; font-size:11px; margin:0 10px 0 0; color:#7f8086;}\r\n.postActionz a img { width:auto!important; margin:0 12px 0 0; }\r\n.more { padding:10px 0}\r\n\r\n.box_hed {display: block;margin: 13px 0;padding: 0 18px;}\r\n.box_hed p { float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.box_hed a { float:right;font-size:14px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi';}\r\n\r\n.reportHed { float:left; width:100%; padding:0 14px;}\r\n.reportList {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding: 19px 19px 18px 19px; border:1px solid #e6eaee;}\r\n.reportList p {float: left;font-size: 14px;color: #1d2531;padding: 0 30px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 5px;}\r\n.reportList p .ic1 { position:absolute; left:0; top:0;}\r\n.reportList p .ic2 {position:absolute; right:3px; top:0;}\r\n.reportList span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.addz { float:left; width:100%; margin:16px 0 0 0;}\r\n.addz p {float:left; font-size:14px; color:#1d2531;font-family: 'AvenirNextLTPro-Demi';}\r\n.ADDList { float:left; width:100%; margin:0 0 10px;}\r\n.ADDList img { float:left; width:100%; border:1px solid #aeb1bb; border-radius:4px 4px 0 0; -webkit-border-radius:4px 4px 0 0; -moz-border-radius:4px 4px 0 0; -ms-border-radius:4px 4px 0 0;}\r\n.adJoin { float:left; width:100%; border-radius:0 0 4px 4px; -webkit-border-radius:0 0 4px 4px; -moz-border-radius:0 0 4px 4px; border:1px solid #e2e3e7; padding:7px 7px 5px; position:relative;}\r\n.adJoin h3 { float:left; width:100%; font-size:12px; color:#193f8c;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.adJoin span {float:left; width:100%; font-size:12px; color:#8d929a;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n.adJoin a { width:53px; height:23px; border-radius:2px; -webkit-border-radius:2px; -moz-border-radius:2px; -ms-border-radius:2px; position:absolute; right:7px; background:#f1f3f6; border:1px solid #dadce0; text-align:center; font-size:12px; color:#70717a;font-family: 'AvenirNextLTPro-Demi'; }\r\n.adJoin a i { font-size:10px; line-height:24px;}\r\n.store { text-align:center; padding:20px 0;}\r\n\r\n.tb2 { padding:0!important;}\r\n.tb2 .boxIn_lft { border-right:none!important;border-left: 1px solid #e3e4e5;}\r\n\r\n.cprofile { float:left; width:100%; margin:0; min-height:215px; padding:9px;}\r\n.cprof1 { float:left; width:100%; min-height:120px; background:#e0686b; border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; position:relative;}\r\n.cprof2 { position:absolute;left:0; top:41px; width:100%; text-align:center;}\r\n.cprof2 img { max-width:156px; max-height:156px; width:100%; height:auto; border-radius:100px; -webkit-border-radius:100px; -moz-border-radius:100px;-ms-border-radius:100px; margin:0 auto; display:inline-block;}\r\n\r\n.profStatus { float:left; width:100%; padding:5px 9px;}\r\n.profStatus h2 { float:left; width:100%; text-align:center; font-size:24px;font-family: 'AvenirNextLTW01RegularRegular'; color:#000; margin:0; letter-spacing:0;}\r\n.profStatus p { float:left; width:100%; text-align:center; font-size:15px;color:#df6367; letter-spacing:-.3px; border-bottom:1px solid #ebf1f5; padding-bottom:27px;}\r\n\r\n.prof_info { float:left; width:100%; margin:7px 0 0 0; padding:0 23px;}\r\n.prof_info span { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info label { float:left; width:100%; font-size:12px; color:#000; margin:0;font-family: 'AvenirNextLTPro-Demi';}\r\n.prof_info p {float:left; width:100%; font-size:14px; color:#7e7e7e;font-family: 'AvenirNextLTW01RegularRegular'; }\r\n.prof_info .bio { margin:7px 0 0 0;}\r\n.mrgbot30 { margin-bottom:30px;}\r\n.prof_info .butn { display:inline-block; margin:7px 5px 0 0; padding:4px 7px 3px; font-size:9px; color:#fff; border-radius:4px; -webkit-border-radius:4px; -moz-border-radius:4px; -ms-border-radius:4px;}\r\n.prof_info .butn:last-child { margin:7px 0 0 0;}\r\n.prof_info .clr1 { background:#0474c8;}\r\n.prof_info .clr2 { background:#45b854;}\r\n.prof_info .clr3 { background:#8191a6;}\r\n.prof_info .clr4 { background:#f86b67;}\r\n\r\n.tb2 .boxIn_rit { background:#fff;border-radius:5px 5px 0 0; -webkit-border-radius:5px 5px 0 0; -moz-border-radius:5px 5px 0 0; -ms-border-radius:5px 5px 0 0; overflow:hidden;}\r\n\r\n.smallPics { float:left; width:100%; padding:9px;}\r\n.smallPics a {border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px; float:left; width:32%;margin:0 1% 9px 0; border:1px solid #e6eaee; max-width:90px; max-height:83px; min-height:83px; overflow:hidden;}\r\n.smallPics a img { float:left; width:100%;border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.smallPics a:nth-child(3n) { margin:0 0 9px 0;}\r\n.minifyme { display:none;}\r\n\r\n.box_mess2 { float:left; width:100%; background:#2f323c; min-height:140px; padding:19px; position:relative;}\r\n.box_mess2 .Drop {float: right;margin: 20px 10px 0 12px;position: relative;}\r\n.textinput { display:block; margin:0 0;}\r\n.textinput {float: left;width: 49%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;height: 43px;resize: none;margin: 10px 0 0 0;font-size: 14px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: .9px;padding: 10px; border:none;}\r\n\r\n\r\n\r\n.interested { display:block; border-bottom:1px solid #e1e9f0; background:#fff; min-height:85px; padding:23px 19px 10px;}\r\n.interested h3 {float: left;width: 100%;margin: 0;font-size: 15px;color: #292b2c;font-family: 'AvenirNextLTPro-Demi';letter-spacing: .3px;}\r\n.interested p { color:#e51c43; font-weight:400; float:left; width:100%; font-size:14px}\r\n.interested span { color:#000; display:inline-block;}\r\n\r\n.postMList2 { float:left; width:100%; position:relative; padding:14px 17px 20px 88px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic2 { width:60px; height:60px; position:absolute; left:17px; top:17px; border:1px solid #eaeaea;}\r\n.boxPic2 img { float:left; width:100%; margin:0!important;}\r\n.postMList2 .drop2poz button { font-size:15px;}\r\n.postMList2 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList2 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList2 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList2 span { color:#e50431; display: inline-block;}\r\n.postMList2 a {color:#e50431;display: inline-block;}\r\n.postMList2 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList2 h2 {float: left;width: 100%;margin: 0px 0 0px;font-size: 14px;color: #cbcbcb;letter-spacing: .3px;}\r\n.postMList2 img { margin:10px 0;}\r\n\r\n.comentPics { padding:10px 0 10px 21px;}\r\n.rounPicR {border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; width:44px; height:44px; box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -webkit-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); -moz-box-shadow:0px -1px 0px 1px rgba(255,255,255, .7); float:left; margin:0 0 0 -21px;}\r\n.rounPicR img { border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; float:left; width:100%; margin:0;}\r\n.comentPics span{ font-size:12px;color: #cbcbcb; float:left; margin:20px 0 0 10px;}\r\n.postMList2 .postActionz { margin:0;}\r\n\r\n\r\n.reportList2 {float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;background: #fff;margin: 0 0 5px;font-size: 14px;letter-spacing: .9px;padding:10px 10px 2px 52px; border:1px solid #e6eaee; position:relative;}\r\n.reportList2 p {float: left;font-size: 14px;color: #1d2531;padding: 0 0px;position: relative;width: 100%;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.2px; margin:0 0 2px;}\r\n.reportList2 .ic11 { position:absolute; left:9px; top:13px;}\r\n.reportList2 .ic22 {position:absolute; right:18px; top:12px;}\r\n.reportList2 span {float: left;font-size: 12px;color: #7f7f7f;padding: 0 ; margin:0 0 9px;position: relative;width: 100%; line-height:15px; letter-spacing:.1px;}\r\n\r\n.selecter {display: inline-block;float: left;width: 100%;position: relative;z-index: 1; }\r\n.selecter .selecter-element { *left: -999999px; height: 100%; left: 0; position: absolute; opacity: 0; width: 100%; z-index: -1; }\r\n.selecter .selecter-selected { background: url(../img/dropAro.png) no-repeat 95% 18px; text-align:left;cursor: pointer; display: block; margin: 0; overflow: hidden;position: relative; text-overflow: clip; z-index: 2;width:100%; background-color:#fff ;height: 43px;float: left;width: 100%;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;padding: 12px 18px 10px;color: #000;font-size: 14px;border: 1px solid #e7e7e7;box-shadow: none;}\r\n.selecter .selecter-options { max-height:164px; overflow:auto; display: none; left: 0; margin: 0; padding: 0; position: absolute; top: 40px; width: 100%; *width: auto; z-index: 50; border-radius:0;height:164px; }\r\n.selecter .selecter-group { background: #fff; color: #999; display: block; font-size: 11px; padding: 5px 10px 4px; text-transform: uppercase; }\r\n.selecter .selecter-item { background: #fff;border-bottom:1px solid #43abf2; cursor: pointer; display: block; color: #1a0c0a; margin: 0; padding:7px 5px 5px 11px; text-overflow: ellipsis; width: 100%; }\r\n.selecter .selecter-item:hover { background:#f6f6f6;}\r\n.selecter .selecter-item.placeholder { display: none; }\r\n.selecter .selecter-item.disabled { color: #999; cursor: default; }\r\n.selecter .selecter-item:first-child { border-radius: 0; }\r\n.selecter .selecter-item:last-child { border-radius: 0; border-bottom: 0; }\r\n.selecter.open { z-index: 999; }\r\n.selecter.open .selecter-selected { border-radius: 5px 5px 0 0; z-index: 51; }\r\n\r\n.v1 { float:left; width:40%; margin:10px 1% 0 0;}\r\n.v2 { float:left; width:27%; margin-right:1%;}\r\n.v3 { float:left; width:12%; margin:10px 1% 0 0;}\r\n.v5 { float:left; width:12%; margin:10px 0 0 0;}\r\n.v4 { float:left; margin:20px 10px 0; font-size:18px; color:#fff;}\r\n\r\ninput[type=checkbox].css-checkbox {position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;}\r\ninput[type=checkbox].css-checkbox + label.css-label {padding-left:30px;height:24px; display:inline-block;line-height:24px;background-repeat:no-repeat;background-position: 0 0;font-size:24px;vertical-align:middle;cursor:pointer;}\r\ninput[type=checkbox].css-checkbox:checked + label.css-label {background-position: 0 -24px;}\r\nlabel.css-label {background-image:url(../img/csscheckbox.png); background-repeat:no-repeat;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}\r\n\r\n.cboxez { float:left; margin:15px 0 0 0;}\r\n.cboxez label { font-size:14px!important; color:#fff; padding-right:10px}\r\n.stBTN { width:auto; padding:2px 20px 0;}\r\n\r\n\r\n.postMList3 { float:left; width:100%; position:relative; padding:24px 17px 32px 138px; min-height:100px; margin:3px 0 0 0; border-bottom:1px solid #e1e9f0;}\r\n.boxPic4 { width:101px; height:101px; position:absolute; left:22px; top:22px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic4 img { float:left; width:100%; margin:0!important;}\r\n.postMList3 .drop2poz button { font-size:15px;}\r\n.postMList3 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList3 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList3 p { float:left; width:87%; line-height:21px; margin:0 0 6px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.postMList3 span { color:#e50431; display: inline-block;}\r\n.postMList3 a {color:#e50431;display: inline-block;}\r\n.postMList3 h3 {float:left; width:100%; margin:0 0 3px; font-size:15px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList3 h3 img { margin:-1px 0 0 8px;}\r\n.postMList3 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList3 img { margin:10px 0;}\r\n\r\n.fullProf {position: absolute;right: 30px;top: 30px;text-decoration: underline;}\r\n.fullProf2 {position: absolute;left: 10px;top: 106px;}\r\n.postMList3 input { margin:10px 5px 10px 0;}\r\ninput.no {background: rgb(173,173,173);\r\nbackground: -webkit-linear-gradient(top,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(173,173,173,1) 0%,rgba(167,167,167,1) 50%,rgba(163,163,163,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#adadad', endColorstr='#a3a3a3',GradientType=0 );\r\n}\r\ninput.no:hover {background: rgb(163,163,163);\r\nbackground: -webkit-linear-gradient(top,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nbackground: linear-gradient(to bottom,  rgba(163,163,163,1) 0%,rgba(167,167,167,1) 50%,rgba(173,173,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#adadad',GradientType=0 );\r\n}\r\n\r\n.reportList2 .postActionz { margin:0 0 10px 0;}\r\n.reportList2 p img { margin:0 0 0 7px;}\r\n\r\n.reviewPortion { display:block;}\r\n.reviewtxt {display:block; border-bottom:1px solid #e1e9f0; height:43px;}\r\n.reviewtxt p { float:left; width:100%; padding:12px 17px; font-size:16px; color:#000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.reviewtxt span { color:#d32a47; display:inline-block;font-family: 'AvenirNextLTPro-Demi'; margin:0 0 0 9px;}\r\n\r\n.accord { display:table-cell; margin:0 0 10px; width:200px; padding: 0 0 0;border-right:1px solid #d9dfe4;vertical-align:top; border-bottom:1px solid #dde5ed; border-top:11px solid #fff;}\r\n.bb { background:#fafbfc;}\r\n.accordList {padding: 5px 10px 4px 13px;float: left;width: 100%;background: #fafbfc;font-size: 13px;color: #494949;line-height: 24px;font-family: 'AvenirNextLTW01RegularRegular';letter-spacing: 0;}\r\n.accordList img { margin:0 5px 0 0;}\r\n.accordList.active { background:#fff;color: #000;}\r\n.accordList.active .ac1 { display:none;}\r\n.accordList.active .ac2 { display:inline-block;}\r\n.accordList:hover { background:#fff;color: #000;}\r\n.accordList:hover .ac1 { display:none;}\r\n.accordList:hover .ac2 { display:inline-block;}\r\n\r\n.ac1 { display:inline-block;}\r\n.ac2 { display:none;}\r\n.arBrd {border-bottom:1px solid #dde5ed; background:#fff;}\r\n.acordRit { display:table-cell; width:498px; vertical-align:top;}\r\n.reviewtxtt {display: block;border-bottom: 1px solid #e1e9f0;height: 45px;background: #fff;padding-left: 1px;margin-left: -1px;}\r\n.reviewtxtt p { float:left; padding:11px 0px 0; font-size:18px; color:#d32a47;font-family: 'AvenirNextLTPro-Demi'; margin:0; }\r\n.reviewtxtt span { float:right; padding:12px 17px; font-size:15px; color:#7f8086;font-family: 'AvenirNextLTW01RegularRegular'; margin:0;}\r\n\r\n.boxes_indents {float:left; width:100%; padding:14px 14px 10px 14px; border-bottom:1px solid #e1e9f0; background:#fff;}\r\n.indents { float:left; width:100%; position:relative; padding:0 0 0 62px;}\r\n.indents a { position:absolute; left:0; top:0; width:48px; height:48px; overflow:hidden;}\r\n.indents a img { float:left; width:100%;}\r\n.indents p { float:left; width:100%; font-size:14px; color:#2f323c; margin:5px 0 3px 0;font-family: 'AvenirNextLTPro-Demi';}\r\n.indents span {float:left; width:100%; font-size:11.79px; color:#63656d;margin:0 0 10px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n\r\n.indents2 { float:left; width:100%; position:relative; padding:0 0 0 46px;}\r\n.indents2 a { position:absolute; left:0; top:0; width:36px; height:36px; overflow:hidden;}\r\n.indents2 a img { float:left; width:100%;}\r\n.indents2 p { float:left; width:100%; font-size:14px; color:#2f323c; min-height:40px; margin:1px 0 3px 0;font-family: 'AvenirNextLTW01RegularRegular'; line-height:18px;}\r\n\r\n.recent { display:block; border-bottom:1px solid #dde5ed;background:#fafbfc; height:40px; padding:10px 17px;font-family: 'AvenirNextLTPro-Demi'; font-size:16px;}\r\n\r\n\r\n.postMList6 { float:left; width:100%; position:relative; padding:24px 17px 10px 77px; min-height:77px; margin:3px 0 0 0; }\r\n.boxPic6 { width:48px; height:48px; position:absolute; left:22px; top:19px; border:1px solid #eaeaea; border-radius:5px; -webkit-border-radius:5px; -moz-border-radius:5px; -ms-border-radius:5px;}\r\n.boxPic6 img { float:left; width:100%; margin:0!important;}\r\n.postMList6 .drop2poz button { font-size:15px;}\r\n.postMList6 .Drop2 i { font-size:14px; margin:0 0 0 7px;}\r\n.postMList6 .Drop2 { margin:12px 9px 0 20px;}\r\n.postMList6 p {float: left;margin: 5px 0 6px;font-size: 12px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';letter-spacing: 0;}\r\n.postMList6 p img { margin:-3px 3px 0 0;}\r\n.postMList6 span { color:#e50431; display: inline-block; margin:0 4px;}\r\n.postMList6 a {color:#e50431;display: inline-block;}\r\n.postMList6 h3 {float:left; width:100%; margin:0 0 3px; font-size:13px; color:#292b2c;font-family: 'AvenirNextLTPro-Demi'; letter-spacing:.3px;}\r\n.postMList6 h3 img { margin:-1px 0 0 8px;}\r\n.postMList6 h2 {float: left;width: 100%;margin: 0px 0 8px 0px;font-size: 12px;color: #cbcbcb;letter-spacing: .3px;font-family: 'AvenirNextLTW01RegularRegular';}\r\n.postMList6 img { margin:10px 0;}\r\n\r\n.mLs {border-bottom:1px solid #e1e9f0; display:block; padding:0 22px 29px;}\r\n.mLs input { margin:0 15px 0 0;}\r\n.mLs span { color:#e50431; display: inline-block;}\r\n\r\n.rating {unicode-bidi: bidi-override;direction: rtl; float:left; margin:0 0 0 9px;}\r\n.rating > span {display: inline-block;position: relative;font-size:17px; margin:0;}\r\n.rating > span:hover:before,\r\n.rating > span:hover ~ span:before {content: \"\\2605\";position: absolute;}\r\n\r\n.stpdd {padding:0px 0px 0px 69px!important; }\r\n.stdiv { float:left; padding:14px 18px; background:#fff;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px; border:1px solid #e6eaee; margin:0 0 10px;}\r\n.stdiv .mLs { padding:0; border:none;}\r\n.stdiv .mLs p{ margin:0; }\r\n\r\n.stpdd .boxPic6{left: 11px; top: -3px;}\r\n\r\n.fotnot { float:left; width:100%; margin:10px 0 0 0;}\r\n.fotnot p { float:left;font-size: 13px;color: #000;font-family: 'AvenirNextLTPro-Demi'; margin:0;}\r\n.fotnot span { float:right;font-size: 13px;color: #e50431;font-family: 'AvenirNextLTPro-Demi';margin:0;}\r\n\r\n#extr-page-header-space {line-height: 53px!important;}\r\n#extr-page-header-space>:first-child { color:#fff!important;}\r\n\r\n.midBox { float:none!important; margin:0 auto!Important;}\r\n.BoxOuter { float:left; width:100%; text-align:center; padding:50px 0 80px!important;; margin:0!important; background:#fff;}\r\n.stppd { padding:21px 19px 27px 17px;}\r\n.slinsot { padding:10px 17px 10px 60px; min-height:60px;}\r\n.slinsot .boxPic6 { left:0; top:7px; border-radius:50px; -webkit-border-radius:50px; -moz-border-radius:50px; overflow:hidden;}\r\n.slinsot span { margin:0 3px 0 0;}\r\n.stppd .w100 img { margin:0 0 10px 0;}\r\n.mLsz { display:block;}\r\n.mLsz input { margin:0 10px 0 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width:1080px){\r\n.reportList p { font-size:12px; padding:30px 0 0 0;}\r\n.reportList2 p { font-size:12px; padding:30px 0 0 0;}\r\n.assumble .col-sm-12 {padding-left: 12px;padding-right: 12px;}\r\n\r\n\r\n\r\n\r\n}\r\n@media screen and (max-width:1000px){\r\n.boxIn_lft { float:left; width:100%; display:block; border-right:none;}\r\n.boxIn_rit { float:left; width:100%; display:block;}\r\n#header { padding:0;}\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width:830px){\r\n.assumble .nav-tabs>li {margin-right: 2%;}\r\n.box1 { margin: 13px 15px 10px!important;}\r\n\r\n\t}\r\n\r\n\r\n@media screen and (max-width:600px){\r\nhtml, body { width:600px!Important; min-width:600px!Important; max-width:600px!Important; overflow-x:scroll;}\r\n\r\n\t}\r\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = ".custom-btn{\r\n  float: left;\r\n  font-size: 17px;\r\n  height: 45px;\r\n  padding: 10px 16px;\r\n  font-size: 17px;\r\n  line-height: 1.33;\r\n  /* border-radius: 3px; */\r\n  /* border-radius: 2px; */\r\n  -webkit-border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  -moz-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  color: #000;\r\n}\r\n.form-group{\r\n  float: left;\r\n  width: 78%;\r\n}\r\n.form-group input{\r\n  border-radius: 0;\r\n  height: 45px;\r\n}\r\nbutton{\r\n  float: left;\r\n  height: 45px;\r\n  padding: 10px 29px;\r\n  font-size: 17px;\r\n  line-height: 1.33;\r\n  border-radius: 3px;\r\n}\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = ".friends-content .head{\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(0,0,0,.07);\r\n  margin-bottom: 20px;\r\n}\r\n.head h4{\r\n  margin: 0;\r\n  font-family: \"Open Sans\", Arial, Helvetica, Sans-Serif;\r\n  font-weight: 300;\r\n}\r\n.search-results{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.each-result{\r\n  padding-left: 26px;\r\n  padding-right: 26px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n.result{\r\n  padding: 14px;\r\n  background-color: #fbfbfb;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 1px 1px #ececec;\r\n  -webkit-box-shadow: 0 1px 1px #ececec;\r\n  -moz-box-shadow: 0 1px 1px #ececec;\r\n  position: relative;\r\n}\r\n.result-img{\r\n  text-align: center;\r\n  margin: 5px 0;\r\n}\r\n.result-img img{\r\n  border-radius: 50% 50% 0;\r\n}\r\n.font-xs{\r\n  text-align: center;\r\n  font-size: 85%;\r\n}\r\n.btn-custom{\r\n  border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  -moz-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\r\n  margin: 5px 0;\r\n  font-size: 85%;\r\n  background-color: #5b835b;\r\n  border-color: #4c6e4c;\r\n  padding: 2px 5px;\r\n}\r\n.btn-custom:hover, .btn-custom:active{\r\n  -webkit-tap-highlight-color: rgba(169,3,41,.5);\r\n}\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "#myTab{\r\n  margin-bottom: 15px;\r\n}\r\nul{\r\n  border: none;\r\n}\r\nli.active a{\r\n  background: inherit;\r\n  border: none;\r\n}\r\nli a{\r\n  border: none;\r\n}\r\nli a:hover, li a:active{\r\n  background: inherit;\r\n  border: none;\r\n}\r\nli:hover{\r\n  margin-bottom: -1px;\r\n}\r\nli{\r\n  margin-right: 4%;\r\n}\r\nli a{\r\n  box-shadow: none;\r\n  color: #333;\r\n  cursor: pointer;\r\n  font-family: 'AvenirNextLTPro-Demi';\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  padding: 9px 5px;\r\n}\r\nli.active a{\r\n  color: #d32a47;\r\n}\r\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = ".heading h4{\r\n  color: #4c4f53!important;\r\n  margin: 12px 0 28px;\r\n  font-size: 24px;\r\n}\r\n.create-album{\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ".sortable-grid.ui-sortable{\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n}\r\n.sortable-grid.ui-sortable .child-tabs{\r\n  width: 100%;\r\n  border: none;\r\n  margin: 0 0 19px;\r\n  margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ".videos-here{\r\n  padding-top: 35px;\r\n}\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-area\">\r\n  <bs-header></bs-header>\r\n  <bs-menu *ngIf=\"login\"></bs-menu>\r\n  <div id=\"main\" [style.min-height.px]=\"height\"\r\n    [ngClass]=\"{\r\n      menuHide: menuChange == true || !login\r\n    }\"\r\n  >\r\n    <div id=\"content\" \r\n     [ngClass]=\"{\r\n       notLogin: !login\r\n     }\"\r\n     [style.min-height.px]=\"height\"\r\n    >\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"bs-footer\">\r\n        <div class=\"col-xs-12 col-sm-12 text-right\">\r\n          <span class=\"txt-color-white\"> <span class=\"hidden-xs\"> - Web Application Framework</span> © 2014-2015</span>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  blogger works!\r\n</p>\r\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let tab of childTabs\"\r\n  [ngClass]=\"{\r\n    active: childTab == tab.name\r\n  }\"\r\n>\r\n  <a (click)=\"clicked(tab.name)\">\r\n    <span>\r\n    \t<img class=\"Ione\" src=\"{{tab.icon1}}\">\r\n      <img class=\"Itwo\" src=\"{{tab.icon2}}\">\r\n    </span>\r\n    <span>{{tab.name}}</span>\r\n  </a>\r\n</li>\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<div class=\"dating-discover\">\r\n     <div class=\"boxIn_lft\">\r\n        <div class=\"w100 dating-data\">\r\n            <div class=\"box_mess2\">\r\n                <div class=\"w100\">\r\n                    <div class=\"w100 pozrel\">\r\n                        <find-date></find-date>\r\n                    </div>\r\n                </div>                  \r\n            </div><!--box_mess-->\r\n            <div class=\"interested w100\">\r\n                <h3>Dating you may be interested in</h3>\r\n                <p>Set up your dating preferences <span>so we can recommend the right matches to you.</span></p>\r\n                \r\n            </div><!--interested-->\r\n            <single-date [url]=\"url\"></single-date>                                            \r\n            <div class=\"w100 text-center more\"><a><img src=\"../../../assets/img/more.png\"></a></div>\r\n        </div><!--w100-->\r\n    </div><!--boxIn_lft-->\r\n    <div class=\"boxIn_rit\">\r\n      <div class=\"reportHed bs-dating-recommend\">\r\n          <bs-recommended [recUrl]=\"recUrl\" [dating]=\"dating\"></bs-recommended>\r\n          <bs-adz [adz]=\"adz\"></bs-adz>        \r\n      </div><!--reportHed-->\r\n  </div><!--boxIn_rit-->\r\n</div>"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<form class=\"bs-filterDating\" #f=\"ngForm\" (ngSubmit)=\"formSubmit(f.form)\">\r\n  <div class=\"form-group women\">\r\n    <select name=\"womenInterested\" #womenInterested=\"ngModel\" ngModel id=\"selecter_basic\" class=\"women-intrested\">\r\n        <option>Man interested in Woman</option>\r\n        <option>2</option>\r\n        <option>3</option>\r\n        <option>4</option>\r\n        <option>5</option>\r\n        <option>6</option>                                            \r\n    </select>\r\n  </div>\r\n  <div class=\"form-group postal-code\">\r\n    <input class=\"textinput fl v2\" type=\"text\" placeholder=\"Postal Code\" name=\"postal\" #postal=\"ngModel\" ngModel>\r\n  </div>\r\n  <div class=\"form-group age-here\">\r\n    <select name=\"firstAge\" #firstAge=\"ngModel\" ngModel id=\"selecter_basic\" class=\"firstAge\">\r\n        <option>20</option>\r\n        <option>2</option>\r\n        <option>3</option>\r\n        <option>4</option>\r\n        <option>5</option>\r\n        <option>6</option>                                            \r\n    </select>\r\n    <p class=\"v4\">to</p>\r\n    <select name=\"lastAge\" #lastAge=\"ngModel\" ngModel id=\"selecter_basic\" class=\"lastAge\">\r\n        <option>30</option>\r\n        <option>2</option>\r\n        <option>3</option>\r\n        <option>4</option>\r\n        <option>5</option>\r\n        <option>6</option>                                            \r\n    </select>\r\n  </div>\r\n  <div class=\"form-group online\">\r\n    <input type=\"checkbox\" name=\"online\" #online=\"ngModel\" ngModel id=\"checkboxG1\" class=\"css-checkbox\" />\r\n    <label for=\"checkboxG1\" class=\"css-label\">Online</label>\r\n  </div>\r\n  <div class=\"form-group potos\">\r\n    <input type=\"checkbox\" name=\"potos\" #potos=\"ngModel\" ngModel id=\"checkboxG2\" class=\"css-checkbox\" checked/>\r\n    <label for=\"checkboxG2\" class=\"css-label\">With Potos</label>\r\n  </div>\r\n  <div class=\"Drop\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-12\">\r\n        <select id=\"selectbasic\" name=\"criteria\" #criteria=\"ngModel\" ngModel class=\"form-control\">\r\n          <option value=\"\">My Criteria</option>\r\n          <option value=\"month\">Month</option>\r\n          <option value=\"agenda\">Agenda</option>\r\n          <option value=\"year\">Year</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"submit-button\">\r\n    <button class=\"btn postBTN\" type=\"submit\">lets begin</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<div class=\"postMain w100\">\r\n  <div class=\"postMList3\" *ngFor=\"let date of dates\">\r\n      <div class=\"boxPic4\">\r\n        <img src=\"../../../../assets/{{date.image}}\">\r\n        <a class=\"fullProf2\" (click)=\"albumClick(date.id)\">View Album</a>\r\n      </div>\r\n      <a class=\"fullProf\" (click)=\"profileClick(date.id)\">View Full Profile</a>                       \t\r\n      <h3>{{date.name}}</h3>\r\n      <h2>Profile created by {{date.createdBy}}</h2> \r\n      <div class=\"w100\" *ngIf=\"!special && !sentRequest && !receivedRequest\">\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"interested(date.id)\">Yes, I’m INTERESTED</button>\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"mayBe(date.id)\">May Be</button>\r\n          <button class=\"postBTN stBTN fl no\" type=\"button\" (click)=\"No(date.id)\">No</button>\r\n      </div>\r\n      <div class=\"w100\" *ngIf=\"special\">\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"sendRequest(date.id)\">Send Request</button>\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"maybeLater(date.id)\">May Be Later</button>\r\n          <button class=\"postBTN stBTN fl no\" type=\"button\" (click)=\"block(date.id)\">Block</button>\r\n      </div> \r\n      <div class=\"w100\" *ngIf=\"sentRequest\">\r\n          <button class=\"postBTN stBTN fl no\" type=\"button\" (click)=\"cancelRequest(date.id)\">Cancel Request</button>\r\n      </div>\r\n      <div class=\"w100\" *ngIf=\"receivedRequest\">\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"acceptRequest(date.id)\">Accept</button>\r\n          <button class=\"postBTN stBTN fl\" type=\"button\" (click)=\"cancel(date.id)\">Cancel</button>\r\n          <button class=\"postBTN stBTN fl no\" type=\"button\" (click)=\"blockPermanentely(date.id)\">Block Permanentely</button>\r\n      </div> \r\n  </div>\r\n</div>"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<div class=\"dating-profile-container\">                   \r\n\t<h3>Your Dating profile</h3>\r\n\t<div class=\"user-picture\">\r\n\t\t<div class=\"profile-picture\">\r\n\t\t\t<img src=\"https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png\" width=\"200\" height=\"200\" class=\"ghost\" alt=\"rizwan javed\">\r\n\t\t</div>\r\n\t\t<button class=\"edit-photo no-photo\" id=\"control_gen_3\">\r\n\t\t\t<span class=\"change-photo-msg\">Change photo</span>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"form update-profile-form\">\r\n\t\t<form class=\"form-validate form-horizontal\" [formGroup]=\"datingForm\" (ngSubmit)=\"onSubmit()\">     \r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\"> First Name<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"FIRST NAME\"\r\n\t\t\t\t\t\tformControlName=\"firstName\"   \r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Last Name<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\tplaceholder=\"LAST NAME\" \r\n\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\tformControlName=\"lastName\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Display Name<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"Name\"\r\n\t\t\t\t\t\tformControlName=\"displayName\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Date Of Birth<span class=\"required\">*</span></label>\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\tname=\"fullname\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"DOB\"\r\n\t\t\t\t\t\tformControlName=\"dateOfBirth\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group full-length\" formGroupName=\"height\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Your Height<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"feet\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Feet</option>\r\n\t\t\t\t\t\t<option value=\"7 feet\">7 feet</option>\r\n\t\t\t\t\t\t<option value=\"6 feet\">6 feet</option>\r\n\t\t\t\t\t\t<option value=\"5 feet\">5 feet</option>\r\n\t\t\t\t\t\t<option value=\"4 feet\">4 feet</option>\r\n\t\t\t\t\t\t<option value=\"4 feet\">3 feet</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"inch\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Inch</option>\r\n\t\t\t\t\t\t<option value=\"9 inches\">9 inches</option>\r\n\t\t\t\t\t\t<option value=\"8 inches\">8 inches</option>\r\n\t\t\t\t\t\t<option value=\"7 inches\">7 inches</option>\r\n\t\t\t\t\t\t<option value=\"6 inches\">6 inches</option>\r\n\t\t\t\t\t\t<option value=\"5 inches\">5 inches</option>\r\n\t\t\t\t\t\t<option value=\"4 inches\">4 inches</option>\r\n\t\t\t\t\t\t<option value=\"3 inches\">3 inches</option>\r\n\t\t\t\t\t\t<option value=\"2 inches\">2 inches</option>\r\n\t\t\t\t\t\t<option value=\"1 inches\">1 inches</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Gender<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"gender\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Gender</option>\r\n\t\t\t\t\t\t<option value=\"Male\">Male</option>\r\n\t\t\t\t\t\t<option value=\"Female\">Female</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Interested In<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"interestedIn\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Interested In</option>\r\n\t\t\t\t\t\t<option value=\"Male\">Male</option>\r\n\t\t\t\t\t\t<option value=\"Female\">Female</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Relationship History<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"relationshipHistory\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Pelation History</option>\r\n\t\t\t\t\t\t<option value=\"Single\">Single</option>\r\n\t\t\t\t\t\t<option value=\"Married\">Married</option>\r\n\t\t\t\t\t\t<option value=\"Divorced\">Divorced</option>    \r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Childrens<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"children\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Childrens</option>\r\n\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\r\n\t\t\t\t\t\t<option value=\"No\">No</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Your Hair Color<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"hairColor\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Hair Color</option>\r\n\t\t\t\t\t\t<option value=\"Black\">Black</option>\r\n\t\t\t\t\t\t<option value=\"Brown\">Blonde</option>\r\n\t\t\t\t\t\t<option value=\"Dark brown\">Dark brown</option>\r\n\t\t\t\t\t\t<option value=\"Light brown\">Light brown</option>    \r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Your Eye Color<span class=\"required\">*</span></label>\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"eyeColor\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Eye Color</option>\r\n\t\t\t\t\t\t<option value=\"Black\">Black</option>\r\n\t\t\t\t\t\t<option value=\"Brown\">Blue</option>\r\n\t\t\t\t\t\t<option value=\"Dark brown\">Dark brown</option>\r\n\t\t\t\t\t\t<option value=\"Light brown\">Light brown</option>    \r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Body Type<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"bodyType\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Body Type</option>\r\n\t\t\t\t\t\t<option value=\"Slim\">Slim</option>\r\n\t\t\t\t\t\t<option value=\"Fat\">Fat</option>\r\n\t\t\t\t\t\t<option value=\"Muscular\">Muscular</option>   \r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Smoking<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"smoking\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Smoking</option>\r\n\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\r\n\t\t\t\t\t\t<option value=\"No\">No</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Education Level<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"education\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Education</option>\r\n\t\t\t\t\t\t<option value=\"High School\">High School</option>\r\n\t\t\t\t\t\t<option value=\"Post Collage\">Post Collage</option>\r\n\t\t\t\t\t\t<option value=\"Graduation and above\">Graduation and above</option>   \r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Religion<span class=\"required\">*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"religion\">\r\n\t\t\t\t\t\t<option value=\"\" selected>Religion</option>\r\n\t\t\t\t\t\t<option value=\"Muslim\">Muslim</option>\r\n\t\t\t\t\t\t<option value=\"Christen\">Christen</option>\r\n\t\t\t\t\t\t<option value=\"Jews\">Jews</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Occupation type<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"Occupation\"\r\n\t\t\t\t\t\tformControlName=\"occupation\"      \r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Salary Range<span>*</span></label>\r\n\t\t\t\t<div class=\"input-group col-sm-12\">\r\n\t\t\t\t\t<span class=\"input-group-addon\">$</span>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"salary\" placeholder=\"Salary\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Your Native Language<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"Language\"\r\n\t\t\t\t\t\tformControlName=\"language\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"cname\" class=\"control-label col-sm-12\">Place You grown up<span>*</span></label>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\tclass=\"form-control valid\" \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tplaceholder=\"You grown up\"\r\n\t\t\t\t\t\tformControlName=\"place\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"w100 update-submit\">                    \r\n\t\t\t\t<button class=\"postBTN fr stBTN\" type=\"submit\">Save And Continue\r\n\t\t\t\t</button>                                    \r\n\t\t\t</div>   \r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<div class=\"dating-requests\">\r\n    <div class=\"w100\">\r\n        <ul class=\"nav nav-tabs pull-left in\" id=\"myTab2\">\r\n            <li class=\"active\">\r\n                <a data-toggle=\"tab\" href=\"#s11\">\r\n                    <span class=\"\">Request Invitations</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a data-toggle=\"tab\" href=\"#s22\">\r\n                    <span class=\"\">Sent Requests</span>\r\n                </a>\r\n            </li>\r\n        </ul>  \r\n        <div id=\"myTabContent2\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade active in no-padding-bottom dating-data\" id=\"s11\">\r\n                <!---->\r\n                <div class=\"interested w100\">\r\n                    <h3>Requests Pending</h3>\r\n                    <p>Still panding the Following <span>requests.</span></p>    \r\n                </div><!--interested-->\r\n                <single-date [url]=\"url\" [receivedRequest]=\"receivedRequest\"></single-date>\r\n                <div class=\"w100 text-center more\">\r\n                    <a href=\"#\">\r\n                        <img src=\"../../../assets/img/more.png\">\r\n                    </a>\r\n                </div> \r\n            </div><!--end of s11-->\r\n            <div class=\"tab-pane fade in no-padding-bottom dating-data\" id=\"s22\">\r\n                <!---->\r\n                <div class=\"interested w100\">\r\n                    <h3>List of Sent Requests</h3>\r\n                    <p>Sent <span> requests.</span></p>    \r\n                </div><!--interested-->\r\n                <single-date [url]=\"url\" [sentRequest]=\"sentRequest\"></single-date>\r\n                <div class=\"w100 text-center more\">\r\n                    <a>\r\n                        <img src=\"../../../assets/img/more.png\">\r\n                    </a>\r\n                </div>\r\n            </div><!--end of s22-->\r\n        </div><!--end of myTabContent2-->                                                 \r\n    </div><!--w100-->\r\n</div>\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"assumble\">\r\n\t<article class=\"col-sm-12 sortable-grid ui-sortable\">\r\n        <ul class=\"nav nav-tabs pull-left child-tabs\" id=\"myTab\">\r\n            <child-tabs [childTabs]=\"childTabs\" (update)=\"updateValue($event)\"></child-tabs>\r\n        </ul>\r\n        <div class=\"child-tabs-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </article>\r\n</section>"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<div class=\"special-content dating-data\">\r\n    <div class=\"interested\">\r\n        <div class=\"interest-heading\">\r\n            <h3>{{title}} Match</h3>\r\n            <p>Based on your Provided information <span>we can recommend the Following right matches for you.</span></p>    \r\n        </div>\r\n        <div class=\"matchType\">\r\n            <select id=\"match\" name=\"match\" class=\"form-control\" (change)=\"updateResult($event)\">\r\n                <option value=\"mutual\">Mutual Match</option>\r\n                <option value=\"reverse\">Reverse Match</option>\r\n            </select>\r\n        </div>\r\n    </div><!--interested-->\r\n    <single-date [url]=\"url\" [special]=\"special\"></single-date>\r\n    <div class=\"w100 text-center more\">\r\n        <a href=\"#\">\r\n            <img src=\"../../../assets/img/more.png\">\r\n        </a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<div class=\"flash-message\"\r\n  [ngClass]=\"{\r\n    'alert-danger' : fail,\r\n    'alert-success' : success,\r\n    hidden: close\r\n  }\"\r\n>\r\n  <div class=\"message-hidden\">\r\n    <i class=\"fa fa-times\" (click)=\"closeMessage()\"></i>\r\n  </div>\r\n  <div class=\"message-here\">\r\n    <h3>Alert</h3>\r\n    <p>{{content}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-search\">\r\n  <input\r\n    id=\"search-fld\"\r\n    type=\"text\"\r\n    name=\"param\"\r\n    placeholder=\"Search\"\r\n    [(ngModel)]='query'\r\n    (keyup)=\"filter()\"\r\n  >\r\n  <i class=\"fa fa-search\"></i>\r\n  <div class=\"search-result\" *ngIf=\"filteredList.length > 0\">\r\n      <ul *ngFor=\"let item of filteredList\" >\r\n          <li >\r\n              <a (click)=\"gotoSingle(item)\">{{item.value}}</a>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\r\n\t<div id=\"logo-group\" class=\"pull-left\">\r\n\t\t<a id=\"logo\"><span> <img src=\"../../assets/img/logo.png\" alt=\"\"> </span></a>\r\n  </div>\r\n\t<div *ngIf=\"login\"\r\n\t\t[ngClass]=\"{\r\n\t\t\t'mobile-options' : mobile == true\r\n\t\t}\"\r\n\t>\r\n\t\t<div class=\"pull-left bs-autosearch\">\r\n\t\t\t<div id=\"search-mobile\" class=\"btn-header transparent pull-right\" (click)=\"mobileSearch()\">\r\n\t\t\t\t\t<span> <a title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\r\n\t\t\t</div>\r\n\t\t\t<auto-complete></auto-complete>\r\n\t\t</div>\r\n\t\t<div class=\"pull-right user-detail\" *ngIf=\"!isLoading && !error\">\r\n\t\t\t<div id=\"cancel-search\" title=\"Cancel Search\" (click)=\"cancleSearch()\">\r\n\t\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-header pull-right\">\r\n\t\t\t\t<span><a (click)=\"menuToggle()\"><i class=\"fa fa-reorder\"></i></a> </span>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"header-dropdown-list padding-5 user\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a class=\"dropdown-toggle no-margin userdropdown userName\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<img src=\"{{user.img}}\" alt=\"\" class=\"online img-circle\" />\r\n\t\t\t\t\t\t<span>{{username}}<i class=\"fa fa-caret-down\"></i></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu pull-right userName-drop\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a class=\"padding-10 padding-top-0 padding-bottom-0\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"pull-right notifi\" *ngIf=\"!isLoading && !error\">\r\n\t\t\t<div *ngFor=\"let noti of notifi\">\r\n\t\t\t\t<notifi [icon]='noti.icon' [value]='noti.value'></notifi>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"!login\">\r\n\t\t<div class=\"signup-login-here\">\r\n\t\t\t<div class=\"signup-here\" *ngIf=\"sign == 'signin'\">\r\n\t\t\t\t<p>Need an account</p>\r\n\t\t\t\t<button (click)=\"gotoSignup()\" class=\"btn btn-danger\">Create account</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"signup-here\" *ngIf=\"sign == 'signup'\">\r\n\t\t\t\t<p>Already registered</p>\r\n\t\t\t\t<button (click)=\"gotoSignin()\" class=\"btn btn-danger\">Sign in</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-dropdown-list padding0\">\r\n\t<li>\r\n    <a class=\"dropdown-toggle no-margin userdropdown\" type=\"button\" data-toggle=\"dropdown\">\r\n\t\t\t<i class=\"box1 fa {{icon}}\"><span>{{value}}</span></i>\r\n\t\t</a>\r\n    <ul class=\"dropdown-menu pull-right bs-dropdown\">\r\n      <li><p>Results from api shows here.</p></li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-here\" \r\n    [ngClass]=\"{\r\n        formOnly: !personalS && width > 767 \r\n    }\"\r\n>\r\n    <div class=\"box_mess2 resume-detail\"\r\n        [ngClass]=\"{\r\n            onlyForm: !personalS\r\n        }\"\r\n    >\r\n        <div class=\"w100\">\r\n            <div class=\"profile-card vcard entity\" tabindex=\"0\">\r\n                <div class=\"profile-picture uploaded-pic\">\r\n                    <img src=\"https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png\" width=\"200\" height=\"200\" class=\"ghost\" alt=\"rizwan javed\">\r\n                    <button class=\"edit-photo no-photo\" id=\"control_gen_3\">\r\n                        <span class=\"edit-photo-content\"><span>Add a photo</span>\r\n                        <span class=\"change-photo-msg\">Change photo</span></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"form\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12 head-here\"> Enter Personal Detils<span>*</span></label>\r\n                <form class=\"form-validate form-horizontal\" [formGroup]=\"personal\" (ngSubmit)=\"personalSubmit()\">     \r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\"> First Name<span>*</span></label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                type=\"text\" \r\n                                placeholder=\"FIRST NAME\"\r\n                                formControlName=\"firstName\"\r\n                            >\r\n                        </div>\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Last Name<span>*</span></label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                placeholder=\"LAST NAME\" \r\n                                type=\"text\"\r\n                                formControlName=\"lastName\"\r\n                            >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Age<span>*</span></label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                type=\"text\" \r\n                                placeholder=\"Age\"\r\n                                formControlName=\"age\"\r\n                            >\r\n                        </div>\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Phone<span>*</span></label>\r\n                        <div class=\"col-sm-4\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                placeholder=\"Phone\" \r\n                                type=\"text\"\r\n                                formControlName=\"phone\"\r\n                            >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Email Address<span>*</span></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                type=\"text\" \r\n                                placeholder=\"Email\"\r\n                                formControlName=\"email\"\r\n                            >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group \">\r\n                        <label for=\"ccomment\" class=\"control-label col-sm-2\">Details about  you & your Goal</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea \r\n                                class=\"form-control valid\" \r\n                                rows=\"5\" \r\n                                id=\"ccomment\"\r\n                                formControlName=\"description\"    \r\n                            ></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"w100\">\r\n                        <div class=\"w100\">                         \r\n                        <button class=\"postBTN fr stBTN\" type=\"submit\" [disabled]=\"!personal.valid\">Post personal details & Proceed Further</button>              \r\n                        </div>                        \r\n                    </div>   \r\n                </form>\r\n            </div>\r\n            <div class=\"form\" *ngIf=\"personalS\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12\"> Enter Educational Details<span class=\"required\">*</span></label>\r\n                <form class=\"form-validate form-horizontal\" [formGroup]=\"educational\" (ngSubmit)=\"educationalSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Last Degree<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                type=\"text\" \r\n                                placeholder=\"\"\r\n                                formControlName=\"lastDegree\"\r\n                            >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Institution<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-10\">\r\n                        <select class=\"form-control\" formControlName=\"institute\">\r\n                            <option value=\"\" selected>select</option>\r\n                            <option value=\"university 1\">university 1</option>\r\n                            <option value=\"university 2\">university 2</option>\r\n                            <option value=\"university 3\">university 3</option>\r\n                            <option value=\"university 4\">university 4</option>\r\n                        </select>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Majors<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-10\">\r\n                        <textarea \r\n                            class=\"form-control valid\" \r\n                            rows=\"5\" \r\n                            id=\"ccomment\" \r\n                            name=\"comment\"\r\n                            formControlName=\"majors\"\r\n                        ></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group \">\r\n                        <label for=\"ccomment\" class=\"control-label col-sm-2\">Year passed</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input \r\n                                class=\"form-control valid\" \r\n                                id=\"cname\" \r\n                                name=\"fullname\" \r\n                                type=\"text\" \r\n                                placeholder=\"\"\r\n                                formControlName=\"yearPassed\"    \r\n                            >\r\n                        </div>   \r\n                    </div>\r\n                    <div class=\"w100\">                         \r\n                        <div class=\"w100\">\r\n                            <button class=\"postBTN fr stBTN\" type=\"submit\" [disabled]=\"!educational.valid\">Post Eduacational Details & Proceed Next</button>                \r\n                        </div>                        \r\n                    </div>   \r\n                </form>\r\n            </div>\r\n            <div class=\"form\" *ngIf=\"personalS && educationS\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12\"> Enter Experience Details<span class=\"required\">*</span></label>\r\n                <form class=\"form-validate form-horizontal\" [formGroup]=\"experience\" (ngSubmit)=\"experienceSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Experience IN<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-3\">\r\n                            <select class=\"form-control\" formControlName=\"category\">\r\n                                <option value=\"\" selected>Select</option>\r\n                                <option value=\"it\">IT</option>\r\n                                <option value=\"networking\">Networking</option>\r\n                                <option value=\"Front-end\">Front-end</option>\r\n                            </select>\r\n                        </div>\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Durration<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-3\">\r\n                            <select class=\"form-control\" formControlName=\"durration\">\r\n                                <option value=\"6 months\">6 Months</option>\r\n                                <option value=\"1 year\">1 Years</option>\r\n                                <option value=\"2 years\">2 Years</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Company<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <select class=\"form-control\" formControlName=\"company\">\r\n                                <option  value=\"Company 1\">Company 1</option>\r\n                                <option value=\"Company 2\" >Company 2</option>\r\n                                <option value=\"Company 3\">Company 3</option>\r\n                                <option value=\"Company 4\">Company 4</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"cname\" class=\"control-label col-sm-2\">Experience Details<span class=\"required\">*</span></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <textarea \r\n                                class=\"form-control valid\" \r\n                                rows=\"5\" \r\n                                id=\"ccomment\" \r\n                                name=\"comment\"\r\n                                formControlName=\"detail\"    \r\n                            ></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"w100\">                         \r\n                        <div class=\"w100\">\r\n                            <button class=\"postBTN fr stBTN\" type=\"submit\" [disabled]=\"!experience.valid\">Post EXperience Details</button>                      \r\n                        </div>                        \r\n                    </div>   \r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"box_mess22 resume-detail-show\" *ngIf=\"personalS && width > 767\">\r\n        <div class=\"w100 progress-detail\">\r\n            <label class=\"control-label col-sm-12\">Previous Resume<span class=\"required\"></span></label>\r\n            <div class=\"profile-picture\">\r\n                <img src=\"{{userPic}}\" class=\"ghost img-responsive\" alt=\"rizwan javed\">\r\n            </div>\r\n            <div class=\"w100 resume-information\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12\">Personal INFO<span class=\"required\"></span></label>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Full Name :</label>\r\n                    <li class=\"col-sm-8\">{{personalDetail.firstName}} {{personalDetail.lastName}}</li>     \r\n                </ul>\r\n                    <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Phone :</label>\r\n                    <li class=\"col-sm-8\">{{personalDetail.phone}}</li>     \r\n                </ul>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Email :</label>\r\n                    <li class=\"col-sm-8\">{{personalDetail.email}}</li>     \r\n                </ul>\r\n                <div class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Details :</label>\r\n                    <p class=\"p col-sm-8\">\r\n                        {{personalDetail.description}}\r\n                    </p>     \r\n                </div>\r\n                <hr>  \r\n            </div>\r\n            <div class=\"w100 resume-information\" *ngIf=\"educationS\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12\">Educational Background<span class=\"required\"></span></label>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Last Degree :</label>\r\n                    <li class=\"col-sm-8\">{{educationalDetail.lastDegree}}</li>     \r\n                </ul>\r\n                    <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">From :</label>\r\n                    <li class=\"col-sm-8\">{{educationalDetail.institute}}</li>     \r\n                </ul>\r\n                    <div class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Majors :</label>\r\n                    <p class=\"p col-sm-8\"> \r\n                        {{educationalDetail.majors}}\r\n                    </p>     \r\n                </div>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Passed IN :</label>\r\n                    <li class=\"col-sm-8\">{{educationalDetail.yearPassed}}</li>     \r\n                </ul>\r\n            </div>\r\n            <div class=\"w100 resume-information\" *ngIf=\"experienceS\">\r\n                <label for=\"cname\" class=\"control-label col-sm-12\">Summery Of Experience<span class=\"required\"></span></label>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Experience Field:</label>\r\n                    <li class=\"col-sm-8\">{{experienceDetail.category}}</li>     \r\n                </ul>\r\n                    <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Durration:</label>\r\n                    <li class=\"col-sm-8\">{{experienceDetail.durration}}</li>     \r\n                </ul>\r\n                <ul class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Company:</label>\r\n                    <li class=\"col-sm-8\">{{experienceDetail.company}} </li>     \r\n                </ul>\r\n                <div class=\"col-sm-12\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Details Of Experience :</label>\r\n                    <p class=\" p col-sm-8\">\r\n                        {{experienceDetail.detail}}\r\n                    </p>     \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>               \r\n\r\n                        \r\n                     \r\n                                     \r\n                                                        "

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<div class=\"job-discovery\">\r\n  <div class=\"left-content-area\">\r\n    <div class=\"boxIn_lft\">\r\n      <find-job (searchJob)=\"search($event)\"></find-job>\r\n      <div class=\"interested w100\">\r\n        <h3>Jobs you may be interested in</h3>\r\n        <p>Set up your jobs preferences <span>so we can recommend the right jobs to you.</span></p>\r\n      </div>\r\n      <div class=\"postMain w100\">\r\n        <job-detail [Url]=\"Url\"></job-detail>\r\n      </div>\r\n      <div class=\"w100 text-center more\"><a><img src=\"../../../assets/img/more.png\"></a></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"boxIn_rit\">\r\n    <div class=\"reportHed\">\r\n      <bs-recommended [recUrl]=\"recommendUrl\" [jobs]=\"jobsHere\"></bs-recommended>\r\n      <bs-adz [adz]=\"adz\"></bs-adz>\r\n      <div class=\"w100 store\">\r\n        <a><img src=\"../../../assets/img/Ads.png\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"box_mess2\">\r\n  <div class=\"w100\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\">\r\n      <div class=\"form-group\">\r\n        <input \r\n          class=\"textinput fl form-control\" \r\n          type=\"text\" \r\n          placeholder=\"Job title, keywords or company name\"\r\n          name=\"title\"\r\n          #title=\"ngModel\"\r\n          ngModel\r\n        >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input \r\n          class=\"textinput fr form-control\" \r\n          type=\"text\" \r\n          placeholder=\"Location\"\r\n          name=\"location\"\r\n          #location=\"ngModel\"\r\n          ngModel\r\n          ng2-google-place-autocomplete\r\n          [options]='options' \r\n          (setAddress) = \"getAddress($event)\"\r\n        >                            \r\n      </div>\r\n      <div class=\"w100\">\r\n        <button class=\"postBTN\" type=\"submit\">Find</button>  \r\n        <div class=\"Drop\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12\">\r\n              <select id=\"selectbasic\" name=\"selectbasic\" #selectbasic=\"ngModel\" ngModel class=\"form-control\">\r\n                <option value=\"\">Social Platform</option>\r\n                <option *ngFor=\"let option of selectOptions\" value=\"{{option.value}}\">{{option.title}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>                        \r\n  </div>                  \r\n</div>"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<bs-loader [loading]=\"loading\" [error]=\"error\"></bs-loader>\r\n<div *ngIf=\"jobs != ''\">\r\n  <div class=\"postMList2\" *ngFor=\"let job of jobs\">\r\n    <div class=\"boxPic2\"><img src=\"{{job.img}}\"></div>\r\n    <h3>{{job.title}}</h3>\r\n    <h3>{{job.companyName}}</h3>                         \t\r\n    <h2>{{job.location.country}} - {{job.location.city}}</h2>  \r\n    <div class=\"w100 pozrel comentPics\">\r\n      <div class=\"rounPicR\" *ngFor=\"let connect of job.connects\"><img src=\"{{connect}}\"></div>\r\n      <span>{{job.totalConnects}} connections work here...</span>\r\n      <button class=\"postBTN fr\" type=\"button\" (click)=\"applyJob(job)\" *ngIf=\"!applied\">Apply</button> \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"widget-grid\" class=\"assumble\">\r\n\t<article class=\"col-sm-12 sortable-grid ui-sortable\">\r\n        <ul class=\"nav nav-tabs pull-left child-tabs\" id=\"myTab\">\r\n            <child-tabs [childTabs]=\"childTabs\" (update)=\"updateValue($event)\"></child-tabs>\r\n        </ul>\r\n        <div class=\"child-tabs-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </article>\r\n</section>\r\n\r\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"job-discovery\">\r\n  <div class=\"left-content-area\">\r\n    <div class=\"boxIn_lft\">\r\n      <div class=\"interested w100\">\r\n        <h3 class=\"text-center\">Jobs You Are Applied In</h3>\r\n      </div>\r\n      <div class=\"postMain w100\">\r\n        <job-detail [Url]=\"Url\" [applied]=\"applied\"></job-detail>\r\n      </div>\r\n      <div class=\"w100 text-center more\"><a><img src=\"../../../assets/img/more.png\"></a></div>\r\n    </div> \r\n  </div>\r\n  <div class=\"boxIn_rit\">\r\n    <div class=\"reportHed\">\r\n      <bs-recommended [recUrl]=\"recommendUrl\" [jobs]=\"jobsHere\"></bs-recommended>\r\n      <bs-adz [adz]=\"adz\"></bs-adz>\r\n      <div class=\"w100 store\">\r\n        <a><img src=\"../../../assets/img/Ads.png\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<div class=\"jobPost-form\">\r\n    <div class=\"col-md-12 form-here\">\r\n        <h3 *ngIf=\"!anotherJob\"><span class=\"fa fa-briefcase\"></span> Post a New Job</h3>\r\n        <h3 *ngIf=\"anotherJob\">Post another Job</h3>\r\n        <div class=\"form\">\r\n            <form class=\"form-validate\" [formGroup]=\"postJob\" (ngSubmit)=\"onSubmit()\">\r\n                <h4>Company Details</h4>\r\n                <hr>        \r\n                <div class=\"form-group half-input\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Company Name<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input \r\n                            class=\"form-control valid\" \r\n                            type=\"text\"\r\n                            formControlName=\"name\"    \r\n                        >\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group half-input web-input\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Website<span>*</span></label>\r\n                    <div class=\"input-group col-sm-8\">\r\n                        <span class=\"input-group-addon\">Http://</span>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"website\" placeholder=\"Site\">\r\n                    </div>\r\n\t\t\t    </div>\r\n               \r\n                <h4>Jobs Details</h4>\r\n                <hr>\r\n                <div class=\"form-group half-input\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Job Title<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                       \r\n                        <input \r\n                            class=\"form-control valid\" \r\n                            type=\"text\"\r\n                            formControlName=\"title\"    \r\n                        >\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group half-input\">\r\n                    <label for=\"title\" class=\"control-label col-sm-4\">Job Type<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <select class=\"form-control\" id=\"title\" formControlName=\"type\">\r\n                            <option value=\"\">Select Job type</option>\r\n                            <option value=\"Full-Time\">Full-Time</option>\r\n                            <option value=\"Internship\">Internship</option>\r\n                            <option value=\"Part-Time\">Part-Time</option>\r\n                            <option value=\"Temporary\">Temporary</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group \">\r\n                    <label for=\"ccomment\" class=\"control-label col-lg-2\">Job Description</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <p>Give details about the position, such as responsibilities & salary.</p>\r\n                        <textarea \r\n                            class=\"form-control valid\" \r\n                            rows=\"5\" \r\n                            id=\"ccomment\"\r\n                            formControlName=\"description\"    \r\n                        ></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group half-input\">\r\n                    <label for=\"category\" class=\"control-label col-sm-4\">Job Catagory<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <select class=\"form-control\" id=\"category\" formControlName=\"category\">\r\n                            <option value=\"\">select category</option>\r\n                            <option value=\"Electrical\">Electrical</option>\r\n                            <option value=\"Inspection\">Inspection</option>\r\n                            <option value=\"Painting\">Painting</option>\r\n                            <option value=\"Service\">Service</option>\r\n                            <option value=\"Upholstry\\\">Upholstry</option>\r\n                            <option value=\"Construction\">Construction</option>\r\n                            <option value=\"Carpenter\">Carpenter</option>\r\n                            <option value=\"Electrician\">Electrician</option>\r\n                            <option value=\"Flooring\">Flooring</option>\r\n                            <option value=\"Foundation Repair\">Foundation Repair</option>\r\n                            <option value=\"General Maintence\">General Maintence</option>\r\n                            <option value=\"Inspections\">Inspections</option>\r\n                            <option value=\"Insulation\">Insulation</option>\r\n                            <option value=\"Mason\">Mason</option>\r\n                            <option value=\"Painter\">Painter</option>\r\n                            <option value=\"Plumber\">Plumber</option>\r\n                            <option value=\"Fashion\">Fashion</option>\r\n                            <option value=\"Food Service\">Food Service</option>\r\n                            <option value=\"Bartender\">Bartender</option>\r\n                            <option value=\"Cook\">Cook</option>\r\n                            <option value=\"Hosting\">Hosting</option>\r\n                            <option value=\"Waiter\">Waiter</option>\r\n                            <option value=\"Insurance\">Insurance</option>\r\n                            <option value=\"Realtors\">Realtors</option>\r\n                            <option value=\"Technology\">Technology</option>\r\n                            <option value=\"Engineering\">Engineering</option>\r\n                            <option value=\"Programming\">Programming</option>\r\n                            <option value=\"Sys Admin\">Sys Admin</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group half-input\">\r\n                    <label for=\"cname\" class=\"control-label col-sm-4\">Salary <span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <select class=\"form-control\" id=\"location\" formControlName=\"salary\">\r\n                            <option value=\"\">Select a salary…</option>\r\n                            <option value=\"Less than 20,000\">Less than 20,000</option>\r\n                            <option value=\"20,000 – 40,000\">20,000 – 40,000</option>\r\n                            <option value=\"40,000 – 60,000\">40,000 – 60,000</option>\r\n                            <option value=\"60,000 – 80,000\">60,000 – 80,000</option>\r\n                            <option value=\"80,000 – 100,000\">80,000 – 100,000</option>\r\n                            <option value=\"100,000 and above\">100,000 and above</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <h4>Jobs Location</h4>\r\n                <hr>\r\n                <div class=\"form-group\">\r\n                    <label for=\"location\" class=\"control-label col-sm-2\">Location<span class=\"required\">*</span></label>\r\n                    <div class=\"col-sm-10\">\r\n                       <p> Leave blank if the location of the applicant does not matter e.g. the job involves working from home.</p>\r\n                        <input type=\"text\" [(ngModel)] = \"address\" \r\n                            [options]='options' \r\n                            (setAddress) = \"getAddress($event)\"\r\n                            class=\"form-control\"\r\n                            formControlName=\"location\"\r\n                            ng2-google-place-autocomplete/>\r\n                    </div>\r\n                </div>\r\n                <h4>How to Apply</h4>\r\n                <hr>\r\n                 <div class=\"form-group \">\r\n                     <label for=\"location\" class=\"control-label col-sm-2\"><span class=\"required\"></span></label>\r\n                    <div class=\"col-sm-10\">\r\n                        <p>Tell applicants how to apply – they will also be able to email you via the “apply” form on your job listing's page.</p>\r\n                        <textarea \r\n                            class=\"form-control valid\" \r\n                            rows=\"5\" \r\n                            id=\"ccomment\"\r\n                            formControlName=\"howApply\"    \r\n                        ></textarea>\r\n                    </div>\r\n                </div>\r\n                \r\n\r\n                                    \r\n                <div class=\"form-group submit-button\">\r\n                    <button class=\"btn btn-default btn-custom\" type=\"submit\" [disabled]=\"!postJob.valid\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loader-here\" [style.min-height.px]=\"heigth\">\r\n  <i class=\"fa fa-cog fa-spin fa-4x fa-spin\" [style.margin-top.px]=\"margin\"></i>\r\n</div>\r\n<div *ngIf=\"error\">\r\n  <p>Error while loading the content.</p>\r\n</div>\r\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<bs-flash [content]=\"content\"></bs-flash>\r\n<div class=\"login-here login-area\" [style.margin-top.px]=\"loginHeight\">\r\n  <div class=\"login-form\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"sign-head\">\r\n        <h3>Sign In</h3>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-sm-12 control-label\">Username</label>\r\n        <div class=\"col-sm-12\">\r\n          <i class=\"fa fa-user\"></i>\r\n          <input \r\n            type=\"text\" \r\n            placeholder=\"username\" \r\n            name=\"username\" \r\n            formControlName=\"username\"\r\n            class=\"form-control\"\r\n            [ngClass]=\"{\r\n              'alert-danger' : loginForm.controls.username.touched && loginForm.controls.username.errors\r\n            }\"  \r\n          >\r\n          <!--<b class=\"tooltip tooltip-top-right\">\r\n            <i class=\"fa fa-user txt-color-teal\"></i> Please enter username\r\n          </b>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-sm-12 control-label\">Password</label>\r\n        <div class=\"col-sm-12\">\r\n          <i class=\"fa fa-lock\"></i>\r\n          <input \r\n            type=\"password\" \r\n            placeholder=\"password\" \r\n            name=\"password\" \r\n            formControlName=\"password\"\r\n            class=\"form-control\"\r\n            [ngClass]=\"{\r\n              'alert-danger' : loginForm.controls.password.touched && loginForm.controls.password.errors\r\n            }\"  \r\n          >\r\n        </div>\r\n      </div>\r\n      <div class=\"login-message\">\r\n        <p>{{loginTitle}}</p>\r\n      </div>\r\n      <div class=\"register-button\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"assumble\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<article class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<!-- new widget -->\r\n\t\t\t\t\t\t\t<div class=\"jarviswidget \" id=\"wid-id-0\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\" data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n\r\n\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs pull-left in\" id=\"myTab\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#s1\">\r\n                                            <span>\r\n                                            \t<img class=\"Ione\" src=\"img/menu_ico_1.png\">\r\n                                                <img class=\"Itwo\" src=\"img/menu_ico_11.png\">                                            \r\n                                            </span>\r\n                                            <span class=\"\">Discovery</span></a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#s2\">\r\n                                            <span>\r\n                                            \t<img class=\"Ione\" src=\"img/menu_ico_1.png\">\r\n                                                <img class=\"Itwo\" src=\"img/menu_ico_11.png\">                                            \r\n                                            </span>\r\n                                            <span class=\"\">Special Someone</span></a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#s3\">\r\n                                            <span>\r\n                                            \t<img class=\"Ione\" src=\"img/menu_ico_2.png\">\r\n                                                <img class=\"Itwo\" src=\"img/menu_ico_22.png\">                                            \r\n                                            </span>\r\n                                            <span class=\"\">Profile</span></a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n                                        <li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#s6\">\r\n                                            <span>\r\n                                            \t<img class=\"Ione\" src=\"img/menu_ico_6.png\">\r\n                                                <img class=\"Itwo\" src=\"img/menu_ico_66.png\">                                            \r\n                                            </span>\r\n                                            <span class=\"\">Search Dates</span></a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<!-- widget div-->\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"widget-body\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- content -->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"myTabContent\" class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane fade active in no-padding-bottom\" id=\"s1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n    <div class=\"boxIn_lft\">\r\n        <div class=\"w100\">\r\n        \t<div class=\"drop2poz\">\r\n                <div class=\"Drop2\">\r\n                    <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                        more <i class=\"fa fa-caret-down\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"mt\">Month</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"ag\">Agenda</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"td\">Today</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>  \r\n            </div>\r\n            <div id=\"myTabContent2\" class=\"tab-content\">\r\n                <div class=\"tab-pane fade active in no-padding-bottom\" id=\"s11\">\r\n                    <div class=\"box_mess2\">\r\n                    \t<div class=\"w100\">\r\n                        \t<div class=\"w100 pozrel\">\r\n                                <form action=\"#\" method=\"GET\" class=\"v11\">\r\n                                    <select name=\"selecter_basic\" id=\"selecter_basic\" class=\"selecter_basic\">\r\n                                        <option>I am looking for</option>\r\n                                        <option>I am looking for</option>\r\n                                        <option>I am looking for</option>\r\n                                        <option>I am looking for</option>\r\n                                        <option>I am looking for</option>\r\n                                        <option>I am looking for</option>                                            \r\n                                    </select>\r\n                                </form>\r\n                                <form action=\"#\" method=\"GET\" class=\"v22\">\r\n                                    <select name=\"selecter_basic\" id=\"selecter_basic\" class=\"selecter_basic\">\r\n                                        <option>20</option>\r\n                                        <option>21</option>\r\n                                        <option>22</option>\r\n                                        <option>23</option>\r\n                                        <option>24</option>\r\n                                        <option>25</option>                                            \r\n                                    </select>\r\n                                </form>\r\n                                <p class=\"v66\">to</p>\r\n                                <form action=\"#\" method=\"GET\" class=\"v33\">\r\n                                    <select name=\"selecter_basic\" id=\"selecter_basic\" class=\"selecter_basic\">\r\n                                        <option>30</option>\r\n                                        <option>31</option>\r\n                                        <option>32</option>\r\n                                        <option>33</option>\r\n                                        <option>34</option>\r\n                                        <option>35</option>                                            \r\n                                    </select>\r\n                                </form>\r\n                                <form action=\"#\" method=\"GET\" class=\"v44\">\r\n                                    <select name=\"selecter_basic\" id=\"selecter_basic\" class=\"selecter_basic\">\r\n                                        <option>Of Religion</option>\r\n                                        <option>On Religion</option>\r\n                                        <option>On Religion</option>\r\n                                        <option>On Religion</option>\r\n                                        <option>On Religion</option>\r\n                                        <option>On Religion</option>                                            \r\n                                    </select>\r\n                                </form>\r\n                                <form action=\"#\" method=\"GET\" class=\"v55\">\r\n                                    <select name=\"selecter_basic\" id=\"selecter_basic\" class=\"selecter_basic\">\r\n                                        <option>Mother Tongue</option>\r\n                                        <option>Mother Tongue</option>\r\n                                        <option>Mother Tongue</option>\r\n                                        <option>Mother Tongue</option>\r\n                                        <option>Mother Tongue</option>\r\n                                        <option>Mother Tongue</option>                                            \r\n                                    </select>\r\n                                </form>\r\n                            </div><!--w100-->\r\n                        </div>\r\n                        <div class=\"w100\">                         \r\n                            <div class=\"w100\">\r\n\t\t\t\t\t\t\t\t<input class=\"postBTN fr stBTN\" type=\"button\" value=\"Lets Begin\">  \r\n                                <div class=\"Drop\">\r\n                                    <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                                        ADVANCED <i class=\"fa fa-caret-down\"></i>\r\n                                    </button>\r\n                                    <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                                        <li>\r\n                                            <a href=\"javascript:void(0);\" id=\"mt\">Month</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"javascript:void(0);\" id=\"ag\">Agenda</a>\r\n                                        </li>\r\n                                        <li>\r\n                                            <a href=\"javascript:void(0);\" id=\"td\">Lets Begin</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>                          \r\n                            </div>                        \r\n                        </div><!--textarePost-->                  \r\n                    </div><!--box_mess-->\r\n                    <div class=\"interested w100\">\r\n                    \t<h3>Matrimony you may be interested in</h3>\r\n                        <p>Set up your dating preferences <span>so we can recommend the right matches to you.</span></p>\r\n                        \r\n                    </div><!--interested-->\r\n                    <div class=\"postMain w100\">\r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->  \r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->               \t\r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->  \r\n                        <div class=\"w100 text-center more\"><a href=\"#\"><img src=\"img/more.png\"></a></div>                       \r\n                    </div><!--postMain-->\r\n                </div>\r\n            </div>                                                 \r\n        </div><!--w100-->\r\n    </div><!--boxIn_lft-->\r\n    <div class=\"boxIn_rit\">\r\n    \t<div class=\"box_hed\">\r\n        \t<p>Featured Dating</p>\r\n        \t<a href=\"#\">Show All</a>\r\n        </div><!--box_hed-->\r\n        <div class=\"reportHed\">\r\n\t\t\t<div class=\"reportList2\">\r\n\t\t\t\t<p>MS0967104 <img src=\"img/msgpic.png\"></p>\r\n                <img class=\"ic11\" src=\"img/user4.jpg\"><img class=\"ic22\" src=\"img/back.png\">\r\n                <span>English</span>\r\n                <div class=\"postActionz w100\">\r\n                    <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                    <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                    <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                </div><!--postActionz-->\r\n            </div><!--reportList2-->\r\n            <div class=\"reportList2\">\r\n\t\t\t\t<p>MS0967104 <img src=\"img/msgpic.png\"></p>\r\n                <img class=\"ic11\" src=\"img/user4.jpg\"><img class=\"ic22\" src=\"img/back.png\">\r\n                <span>English</span>\r\n                <div class=\"postActionz w100\">\r\n                    <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                    <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                    <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                </div><!--postActionz-->\r\n            </div><!--reportList2-->\r\n            <div class=\"reportList2\">\r\n\t\t\t\t<p>MS0967104 <img src=\"img/msgpic.png\"></p>\r\n                <img class=\"ic11\" src=\"img/user4.jpg\"><img class=\"ic22\" src=\"img/back.png\">\r\n                <span>English</span>\r\n                <div class=\"postActionz w100\">\r\n                    <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                    <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                    <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                </div><!--postActionz-->\r\n            </div><!--reportList2-->\r\n            <div class=\"reportList2\">\r\n\t\t\t\t<p>MS0967104 <img src=\"img/msgpic.png\"></p>\r\n                <img class=\"ic11\" src=\"img/user4.jpg\"><img class=\"ic22\" src=\"img/back.png\">\r\n                <span>English</span>\r\n                <div class=\"postActionz w100\">\r\n                    <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                    <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                    <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                </div><!--postActionz-->\r\n            </div><!--reportList2-->\r\n            <div class=\"w100 addz mrg0\">\r\n\t\t\t\t<p>Ads</p> \r\n                <div class=\"ADDList\">\r\n                \t<img src=\"img/add_pic_1.jpg\">\r\n                    <div class=\"adJoin\">\r\n\t\t\t\t\t\t<h3>India Startups Advice</h3>                    \r\n                        <span>5,900 members</span>\r\n                        <a href=\"#\"><i class=\"fa fa-plus\"></i>Join</a>\r\n                    </div><!--adJoin-->\r\n                </div><!--ADDList-->\r\n                <div class=\"ADDList\">\r\n                \t<img src=\"img/add_pic_1.jpg\">\r\n                    <div class=\"adJoin\">\r\n\t\t\t\t\t\t<h3>India Startups Advice</h3>                    \r\n                        <span>5,900 members</span>\r\n                        <a href=\"#\"><i class=\"fa fa-plus\"></i>Join</a>\r\n                    </div><!--adJoin-->\r\n                </div><!--ADDList-->\r\n                <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a></div>           \r\n            </div><!--addz-->        \r\n        </div><!--reportHed-->\r\n    </div><!--boxIn_rit-->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- end s1 tab pane -->\r\n                                            <div class=\"tab-pane fade in padding-10 no-padding-bottom tb2\" id=\"s2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n                                                    <!--start of Someone Special contents-->\r\n                                                    <div class=\"boxIn_lft\">\r\n                                                        <div class=\"w100\">\r\n                                                            <div class=\"interested w100\">\r\n                                                                <h3>Special Someone for Marriage</h3>\r\n                                                                <p>Set up your Matrimonial preferences <span>so we can recommend these right matches to you.</span></p>\r\n                                                                \r\n                                                            </div><!--interested-->\r\n                                                            <div class=\"postMain w100\">\r\n                                                                <div class=\"postMList3\">\r\n                                                                    <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                                                                    <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                                                                    <div class=\"w100\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n                                                                            <h2>Profile created by parents/guardian</h2> \r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n                                                                            <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div><!--w100-->                       \r\n                                                                    <div class=\"w100 pInfo\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                                                            <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                                                            <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                                                            <div class=\"w100\"><p>Communiuty</p><span>Christen</span></div>\r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                                                            <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                                                            <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div> \r\n                                                                    <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                         \r\n                                                                    <div class=\"postActionz w100\">\r\n                                                                        <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                                                        <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                                                        <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                                                                    </div><!--postActionz-->\r\n                                                                </div><!--postMList3-->  \r\n                                                                <div class=\"postMList3\">\r\n                                                                    <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                                                                    <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                                                                    <div class=\"w100\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n                                                                            <h2>Profile created by parents/guardian</h2> \r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n                                                                            <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div><!--w100-->                       \r\n                                                                    <div class=\"w100 pInfo\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                                                            <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                                                            <div class=\"w100\"><p>Mother Tongue</p><span>Punjabi</span></div>\r\n                                                                            <div class=\"w100\"><p>Communiuty</p><span>Sikh</span></div>\r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                                                            <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                                                            <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div> \r\n                                                                    <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                         \r\n                                                                    <div class=\"postActionz w100\">\r\n                                                                        <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                                                        <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                                                        <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                                                                    </div><!--postActionz-->\r\n                                                                </div><!--postMList3-->                 \r\n                                                                <div class=\"postMList3\">\r\n                                                                    <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                                                                    <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                                                                    <div class=\"w100\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n                                                                            <h2>Profile created by parents/guardian</h2> \r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <h2>Like her Profile ?</h2>\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n                                                                            <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n                                                                            <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div><!--w100-->                       \r\n                                                                    <div class=\"w100 pInfo\">\r\n                                                                        <div class=\"dm1\">\r\n                                                                            <div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                                                            <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                                                            <div class=\"w100\"><p>Mother Tongue</p><span>Urdu</span></div>\r\n                                                                            <div class=\"w100\"><p>Communiuty</p><span>Muslim</span></div>\r\n                                                                        </div><!--dm1-->\r\n                                                                        <div class=\"dm2\">\r\n                                                                            <div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                                                            <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                                                            <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                                                        </div><!--dm2-->\r\n                                                                    </div> \r\n                                                                    <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                         \r\n                                                                    <div class=\"postActionz w100\">\r\n                                                                        <a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                                                        <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                                                        <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                                                                    </div><!--postActionz-->\r\n                                                                </div><!--postMList3-->  \r\n                                                                <div class=\"w100 text-center more\"><a href=\"#\"><img src=\"img/more.png\"></a></div>                       \r\n                                                            </div><!--postMain-->                                                 \r\n                                                        </div><!--w100-->\r\n                                                        </div><!--boxIn_lft-->\r\n                                                    <!-- end of Someone Special contents-->  \r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- end s1 tab pane -->\r\n                                            <div class=\"tab-pane fade in padding-10 no-padding-bottom\" id=\"s3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n                                                    <!--start of profile contents-->\r\n                                                    <div class=\"dating-profile-container\">                   \r\n                                                        <h3>Create Marriage profile</h3>\r\n                                                        <div class=\"user-picture\">\r\n                                                            <div class=\"profile-picture\">\r\n                                                                <img src=\"https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png\" width=\"200\" height=\"200\" class=\"ghost\" alt=\"rizwan javed\">\r\n                                                            </div>\r\n                                                            <button class=\"edit-photo no-photo\" id=\"control_gen_3\">\r\n                                                                <span class=\"change-photo-msg\">Change photo</span>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                        <div class=\"form update-profile-form\">\r\n                                                            <form class=\"form-validate form-horizontal\">     \r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\"> Create Frofile For<span>*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\">\r\n                                                                            <option value=\"\" selected>For Self</option>\r\n                                                                            <option value=\"For Son \">For Son</option>\r\n                                                                            <option value=\"For Daughter\">For Daughter</option>\r\n                                                                            <option value=\"For Brother\">For Brother</option>\r\n                                                                            <option value=\"For Sister\">For Sister</option>\r\n                                                                            <option value=\"Other\">Other</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Name<span>*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <input \r\n                                                                            class=\"form-control valid\" \r\n                                                                            placeholder=\"NAME\" \r\n                                                                            type=\"text\"              \r\n                                                                        >\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Date Of Birth<span class=\"required\">*</span></label>\r\n                                                                        <div class=\"col-sm-12\">\r\n                                                                        <input \r\n                                                                            class=\"form-control valid\" \r\n                                                                            name=\"fullname\" \r\n                                                                            type=\"date\" \r\n                                                                            placeholder=\"DOB\"\r\n                                                                            \r\n                                                                        >\r\n                                                                    </div> \r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Location<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>USA Middle East</option>\r\n                                                                            <option value=\"California\">California</option>\r\n                                                                            <option value=\"Chicago\">Chicago</option>\r\n                                                                            <option value=\"San Fransasco\">San Fransasco</option> \r\n                                                                            <option value=\"Bijing\">Bijing</option> \r\n                                                                            <option value=\"Other Spacify\">other Spacify</option>    \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\" >\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Persons Height<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-6\">\r\n                                                                        <select class=\"form-control\">\r\n                                                                            <option value=\"\" selected>Feet</option>\r\n                                                                            <option value=\"7 feet\">7 feet</option>\r\n                                                                            <option value=\"6 feet\">6 feet</option>\r\n                                                                            <option value=\"5 feet\">5 feet</option>\r\n                                                                            <option value=\"4 feet\">4 feet</option>\r\n                                                                            <option value=\"4 feet\">3 feet</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-sm-6\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Inch</option>\r\n                                                                            <option value=\"9 inches\">9 inches</option>\r\n                                                                            <option value=\"8 inches\">8 inches</option>\r\n                                                                            <option value=\"7 inches\">7 inches</option>\r\n                                                                            <option value=\"6 inches\">6 inches</option>\r\n                                                                            <option value=\"5 inches\">5 inches</option>\r\n                                                                            <option value=\"4 inches\">4 inches</option>\r\n                                                                            <option value=\"3 inches\">3 inches</option>\r\n                                                                            <option value=\"2 inches\">2 inches</option>\r\n                                                                            <option value=\"1 inches\">1 inches</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Profession<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Student</option>\r\n                                                                            <option value=\"Student\">Student</option>\r\n                                                                            <option value=\"Teachcer\">Teacher</option>\r\n                                                                            <option value=\"Lecturer\">Lecturer</option> \r\n                                                                            <option value=\"Engineer\">Engineer</option> \r\n                                                                            <option value=\"Other Spacify\">other Spacify</option>    \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Mother Tongue<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>English</option>\r\n                                                                            <option value=\"Urdu\">Urdu</option>\r\n                                                                            <option value=\"English\">English</option> \r\n                                                                            <option value=\"Other Spacify\">other Spacify</option>    \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Community<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Muslim</option>\r\n                                                                            <option value=\"Christen\">Christen</option>\r\n                                                                            <option value=\"Muslim\">Muslim</option>\r\n                                                                            <option value=\"Hindu\">Hindu</option> \r\n                                                                            <option value=\"Other Spacify\">other Spacify</option>    \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Relationship History<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Pelation History</option>\r\n                                                                            <option value=\"Single\">Single</option>\r\n                                                                            <option value=\"Married\">Married</option>\r\n                                                                            <option value=\"Divorced\">Divorced</option>    \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Childrens<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Childrens</option>\r\n                                                                            <option value=\"Yes\">Yes</option>\r\n                                                                            <option value=\"No\">No</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Education Level<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Education</option>\r\n                                                                            <option value=\"High School\">High School</option>\r\n                                                                            <option value=\"Post Collage\">Post Collage</option>\r\n                                                                            <option value=\"Graduation and above\">Graduation and above</option>   \r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Religion<span class=\"required\">*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>Religion</option>\r\n                                                                            <option value=\"Muslim\">Muslim</option>\r\n                                                                            <option value=\"Christen\">Christen</option>\r\n                                                                            <option value=\"Jews\">Jews</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Occupation type<span>*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <input \r\n                                                                            class=\"form-control valid\" \r\n                                                                            type=\"text\" \r\n                                                                            placeholder=\"Occupation\"\r\n                                                                                 \r\n                                                                        >\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Salary Range<span>*</span></label>\r\n                                                                    <div class=\"input-group col-sm-12\">\r\n                                                                        <span class=\"input-group-addon\">$</span>\r\n                                                                        <input type=\"text\" class=\"form-control\"  placeholder=\"Salary\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Native Language<span>*</span></label>\r\n                                                                    <div class=\"col-sm-12\">\r\n                                                                        <input \r\n                                                                            class=\"form-control valid\" \r\n                                                                            type=\"text\" \r\n                                                                            placeholder=\"Language\"\r\n                                                                            \r\n                                                                        >\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"w100 update-submit\">                    \r\n                                                                    <button class=\"postBTN fr stBTN\" type=\"submit\">Save And Continue\r\n                                                                    </button>                                    \r\n                                                                </div>   \r\n                                                            </form>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <!-- end of profile contents-->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                                            <div class=\"tab-pane fade in padding-10 no-padding-bottom\" id=\"s4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t444444444444444444444444\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                                            <div class=\"tab-pane fade in padding-10 no-padding-bottom\" id=\"s5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t5555555555555555555555555555\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                                            <div class=\"tab-pane fade in padding-10 no-padding-bottom\" id=\"s6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-space\">\r\n                                                    <!-- start of search dates contents-->\r\n\r\n                                                    <div calss=\"w100\">\r\n                                                        <div class=\"box_mess2\">\r\n                                                            <div class=\"col-lg-5\">\r\n                                                                <div class=\"form-group input-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Education Level<span class=\"required\">*</span></label>\r\n                                                                        <span class=\"input-group-addon\">Gender</span>\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            \r\n                                                                            <option value=\"Male\">Male</option>\r\n                                                                            <option value=\"Female\">Female</option>  \r\n                                                                        </select>\r\n                                                                   \r\n                                                                </div>      \r\n                                                            </div>\r\n                                                            <div class=\"col-lg-5\">\r\n                                                                <div class=\"form-group input-group\">\r\n                                                                    <label for=\"cname\" class=\"control-label col-sm-12\">Education Level<span class=\"required\">*</span></label>\r\n                                                                    \r\n                                                                        <span class=\"input-group-addon\">Location</span>\r\n                                                                        <select class=\"form-control\" >\r\n                                                                            <option value=\"\" selected>San Fransisco</option>\r\n                                                                            <option value=\"Chicago\">Chicago</option>\r\n                                                                            <option value=\"Pasific Asia\">Pasific Asia</option>\r\n                                                                            <option value=\"California\">California</option>   \r\n                                                                        </select>\r\n                                                                   \r\n                                                                </div>                                                                  \r\n                                                            </div>\r\n                                                            <div class=\"col-lg-2\">\r\n                                                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"Search Date\">\r\n                                                            </div>\r\n                                                            <div class=\"postMain w100\">\r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->  \r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->               \t\r\n                        <div class=\"postMList3\">\r\n                            <div class=\"boxPic4\"><img src=\"img/user3.jpg\"><a href=\"#\" class=\"fullProf2\">View Album</a></div><!--boxPic-->\r\n                            <a href=\"#\" class=\"fullProf9\">View Full Profile</a> \r\n                            <div class=\"w100\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<h3>MS0967104 <img src=\"img/msgpic.png\"></h3>\r\n\t                                <h2>Profile created by parents/guardian</h2> \r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<input class=\"postBTN stBTN fl\" type=\"button\" value=\"Yes, I’m INTERESTED\">\r\n\t                                <input class=\"postBTN stBTN fl\" type=\"button\" value=\"May Be\">\r\n\t                                <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"No\">\r\n                                </div><!--dm2-->\r\n                            </div><!--w100-->                      \t\r\n                            <div class=\"w100 pInfo\">\r\n                            \t<div class=\"dm1\">\r\n                                \t<div class=\"w100\"><p>Age</p><span>26</span></div>\r\n                                    <div class=\"w100\"><p>Height</p><span>5' 7\"</span></div>\r\n                                    <div class=\"w100\"><p>Mother Tongue</p><span>English</span></div>\r\n                                </div><!--dm1-->\r\n                                <div class=\"dm2\">\r\n                                \t<div class=\"w100\"><p>Location</p><span>Markham, Canada</span></div>\r\n                                    <div class=\"w100\"><p>Education</p><span>Masters Engineering/Technology</span></div>\r\n                                    <div class=\"w100\"><p>Profession</p><span>Not Working</span></div>\r\n                                </div><!--dm2-->\r\n                            </div> \r\n                            <p>Hi, thank you for visiting my daughter's profile. She has completed her Masters. She loves traveling and exploring new plac... <a href=\"#\">Read More</a></p>                     \t\r\n                            <div class=\"postActionz w100\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"img/Heart.png\"> 199</a>\r\n                                <a href=\"#\"><img src=\"img/Activity.png\"> 02</a>\r\n                                <a href=\"#\"><img src=\"img/message.png\"> 36</a>                           \r\n                            </div><!--postActionz-->\r\n                        </div><!--postMList3-->  \r\n                        <div class=\"w100 text-center more\"><a href=\"#\"><img src=\"img/more.png\"></a></div>                       \r\n                    </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                         <!--end of search dates contents-->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- end s1 tab pane -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                <!-- widget div-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</article>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\"\r\n  [ngClass]=\"{\r\n    'hide-panel': panelHide\r\n  }\"\r\n>\r\n  <!-- User info -->\r\n  <div class=\"login-info\">\r\n  \tCHOOSE NETWORK\r\n  </div>\r\n  <nav class=\"NavMain\">\r\n    <ul>\r\n      <li *ngFor=\"let menu of menus\"\r\n        [ngClass]=\"{\r\n          active: menu.name == clickMenu\r\n        }\"\r\n      >\r\n\t\t\t\t<a (click)=\"menuClick(menu.name)\">\r\n      \t  <span class=\"{{menu.img}}\"></span>\r\n      \t  <span class=\"menu-item-parent\"><p>{{menu.name}}</p></span>\r\n          <span class=\"badge pull-right inbox-badge margin-right-13\" *ngIf=\"menu.notifi\">{{menu.notifi}}</span>\r\n        </a>\r\n\t\t\t</li>\r\n    </ul>\r\n  </nav>\r\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div class=\"answer-question\">\r\n  <div class=\"w100 head\">\r\n    <h4>The questions you would like to answer.....</h4>\r\n  </div>\r\n  <div class=\"postMList stppd\">\r\n      <div class=\"drop2poz\">\r\n          <div class=\"Drop2\">\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Action  <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n              <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                  <li>\r\n                      <a id=\"answer\">Answer</a>\r\n                  </li>\r\n              </ul>\r\n          </div>  \r\n      </div>  \r\n      <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n      <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n      <div class=\"postMList6 slinsot\">\r\n          <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n          <p>Jon snow</p>\r\n          <p>90 Follows</p> \r\n      </div>                        \r\n  </div>\r\n  <div class=\"postMList stppd\">\r\n      <div class=\"drop2poz\">\r\n          <div class=\"Drop2\">\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Action  <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n              <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                  <li>\r\n                      <a id=\"answer\">Answer</a>\r\n                  </li>\r\n              </ul>\r\n          </div>  \r\n      </div>  \r\n      <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n      <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n      <div class=\"postMList6 slinsot\">\r\n          <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n          <p>Jon snow</p>\r\n          <p>90 Follows</p> \r\n      </div>                        \r\n  </div>\r\n  <div class=\"postMList stppd\">\r\n      <div class=\"drop2poz\">\r\n          <div class=\"Drop2\">\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Action  <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n              <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                  <li>\r\n                      <a id=\"answer\">Answer</a>\r\n                  </li>\r\n              </ul>\r\n          </div>  \r\n      </div>  \r\n      <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n      <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n      <div class=\"postMList6 slinsot\">\r\n          <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n          <p>Jon snow</p>\r\n          <p>90 Follows</p> \r\n      </div>                        \r\n  </div>\r\n  <div class=\"postMList stppd\">\r\n      <div class=\"drop2poz\">\r\n          <div class=\"Drop2\">\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Action  <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n              <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                  <li>\r\n                      <a id=\"answer\">Answer</a>\r\n                  </li>\r\n              </ul>\r\n          </div>  \r\n      </div>  \r\n      <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n      <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n      <div class=\"postMList6 slinsot\">\r\n          <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n          <p>Jon snow</p>\r\n          <p>90 Follows</p> \r\n      </div>                        \r\n  </div>\r\n  <div class=\"postMList stppd\">\r\n      <div class=\"drop2poz\">\r\n          <div class=\"Drop2\">\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Action  <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n              <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                  <li>\r\n                      <a id=\"answer\">Answer</a>\r\n                  </li>\r\n              </ul>\r\n          </div>  \r\n      </div>  \r\n      <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n      <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n      <div class=\"postMList6 slinsot\">\r\n          <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n          <p>Jon snow</p>\r\n          <p>90 Follows</p> \r\n      </div>                        \r\n  </div>\r\n  <div class=\"w100 text-center more\">\r\n    <a>\r\n      <img src=\"../../../assets/img/more.png\">\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div class=\"ask-question\">\r\n  <div class=\"boxIn_lft\">\r\n    <div class=\"w100\">\r\n      <div class=\"box_mess2\">\r\n          <div class=\"w100\">\r\n            <div class=\"form-group search-question\">\r\n              <input class=\"textinput fl w form-control\" type=\"text\" placeholder=\"Ask or Search\">                          \r\n            </div>\r\n              <div class=\"w100 question-btn\">\r\n                  <button class=\"postBTN stBTN fl\" type=\"button\">Ask Questions</button>                                                          \r\n              </div>                        \r\n          </div><!--textarePost-->                  \r\n      </div><!--box_mess-->\r\n      <div class=\"interested w100\">\r\n          <h3>Top stories for you</h3>\r\n          <p>Set up your jobs preferences <span>so we can recommend the right jobs to you.</span></p>\r\n      </div><!--interested-->\r\n      <div class=\"postMain w100\">\r\n          <div class=\"postMList stppd\">\r\n              <div class=\"drop2poz\">\r\n                  <div class=\"Drop2\">\r\n                  </div>  \r\n              </div> <!--drop2poz--> \r\n              <p>John Doe shared photo.</p> \r\n              <h3>Learn how to design a great User Experience on a mobile device. Course 91% BOOKED!</h3>  \r\n              <div class=\"postMList6 slinsot\">\r\n                  <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\" class=\"img-responsive\"></div><!--boxPic-->                 \r\n                  <h3><span>wrote a review for</span>Slurp Ramen</h3> \r\n                  <p>90.7k Views</p>                    \r\n              </div>                        \r\n              <div class=\"w100\"><img src=\"../../../assets/img/pic_1.jpg\" class=\"img-responsive\"></div>\r\n              <p>A few months ago I quit my job, I decided to pursue something I was passionate about. So, instead of hiring people within the IT digital space I decided. <a> show more</a></p>\r\n          </div><!--postMList-->     \r\n          <div class=\"postMList stppd\">\r\n              <p>John Doe shared photo.</p> \r\n              <h3 (click)=\"gotoSingle()\">Learn how to design a great User Experience on a mobile device. Course 91% BOOKED!</h3>  \r\n              <div class=\"postMList6 slinsot\">\r\n                  <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div><!--boxPic-->                 \r\n                  <h3><span>wrote a review for</span>Slurp Ramen</h3> \r\n                  <p>90.7k Views</p>                    \r\n              </div>                        \r\n          </div><!--postMList-->\r\n          <div class=\"postMList stppd\">\r\n              <p>John Doe shared photo.</p> \r\n              <h3>Learn how to design a great User Experience on a mobile device. Course 91% BOOKED!</h3>  \r\n              <div class=\"postMList6 slinsot\">\r\n                  <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div><!--boxPic-->                 \r\n                  <h3><span>wrote a review for</span>Slurp Ramen</h3> \r\n                  <p>90.7k Views</p>                    \r\n              </div>                        \r\n          </div><!--postMList-->\r\n          <div class=\"postMList stppd\">\r\n              <p>John Doe shared photo.</p> \r\n              <h3>Learn how to design a great User Experience on a mobile device. Course 91% BOOKED!</h3>  \r\n              <div class=\"postMList6 slinsot\">\r\n                  <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div><!--boxPic-->                 \r\n                  <h3><span>wrote a review for</span>Slurp Ramen</h3> \r\n                  <p>90.7k Views</p>                    \r\n              </div>                        \r\n          </div><!--postMList-->              \r\n          <div class=\"w100 text-center more\"><a href=\"#\"><img src=\"../../../assets/img/more.png\"></a></div>                       \r\n      </div><!--postMain-->\r\n    </div>\r\n  </div>\r\n  <div class=\"boxIn_rit\">\r\n    <div class=\"box_hed\">\r\n        <p>Recommended</p>\r\n        <a>Show All</a>\r\n    </div><!--box_hed-->\r\n    <div class=\"reportHed\">\r\n        <div class=\"reportList\">\r\n            <p>January 2016 Report\r\n                <img class=\"ic1\" src=\"../../../assets/img/News-Icon.png\">\r\n                <img class=\"ic2\" src=\"../../../assets/img/back.png\">\r\n            </p>\r\n            <span>Point of Sale hardware, the till at a shop check out, has become very complex over the past...</span>\r\n        </div><!--reportList-->\r\n        <div class=\"reportList\">\r\n            <p>January 2016 Report\r\n                <img class=\"ic1\" src=\"../../../assets/img/News-Icon.png\">\r\n                <img class=\"ic2\" src=\"../../../assets/img/back.png\">\r\n            </p>\r\n            <span>Point of Sale hardware, the till at a shop check out, has become very complex over the past...</span>                   \r\n        </div><!--reportList--> \r\n        <div class=\"reportList\">\r\n            <p>January 2016 Report\r\n                <img class=\"ic1\" src=\"../../../assets/img/News-Icon.png\">\r\n                <img class=\"ic2\" src=\"../../../assets/img/back.png\">\r\n            </p>\r\n            <span>Point of Sale hardware, the till at a shop check out, has become very complex over the past...</span>                   \r\n        </div><!--reportList--> \r\n        <div class=\"w100 addz\">\r\n            <p>Ads</p> \r\n            <div class=\"ADDList\">\r\n                <img src=\"../../../assets/img/add_pic_1.jpg\">\r\n                <div class=\"adJoin\">\r\n                    <h3>India Startups Advice</h3>                    \r\n                    <span>5,900 members</span>\r\n                    <a><i class=\"fa fa-plus\"></i>Join</a>\r\n                </div><!--adJoin-->\r\n            </div><!--ADDList-->\r\n            <div class=\"ADDList\">\r\n                <img src=\"../../../assets/img/add_pic_1.jpg\">\r\n                <div class=\"adJoin\">\r\n                    <h3>India Startups Advice</h3>                    \r\n                    <span>5,900 members</span>\r\n                    <a><i class=\"fa fa-plus\"></i>Join</a>\r\n                </div><!--adJoin-->\r\n            </div><!--ADDList-->\r\n            <div class=\"w100 store\">\r\n                <a>\r\n                    <img src=\"../../../assets/img/Ads.png\">\r\n                </a>\r\n            </div>           \r\n        </div><!--addz-->        \r\n    </div><!--reportHed-->\r\n  </div><!--boxIn_rit-->\r\n</div>"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-question\">\r\n  <div class=\"w100\">\r\n    <ul class=\"nav nav-tabs pull-left in list-ques-tabs\" id=\"myTab2\">\r\n        <li class=\"active\">\r\n            <a data-toggle=\"tab\" href=\"#q11\">\r\n            <span>\r\n                <img class=\"Ione\" src=\"../../../assets/img/menu_ico_7.png\">\r\n                <img class=\"Itwo\" src=\"../../../assets/img/menu_ico_77.png\">                                            \r\n            </span>\r\n            <span class=\"\">List of Questions Asked</span></a>\r\n        </li>\r\n        <li>\r\n            <a data-toggle=\"tab\" href=\"#q22\">\r\n            <span>\r\n                <img class=\"Ione\" src=\"../../../assets/img/menu_ico_8.png\">\r\n                <img class=\"Itwo\" src=\"../../../assets/img/menu_ico_88.png\">                                            \r\n            </span>\r\n            <span class=\"\">Answered Questions</span></a>\r\n        </li>\r\n    </ul>  \r\n    <div id=\"myTab2\" class=\"tab-content\">\r\n        <div class=\"tab-pane fade active in no-padding-bottom\" id=\"q11\">\r\n            <!--s11 contents-->\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Archive</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                    \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Archive</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Asked-<span>20 Days Ago at 1-2-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                        \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Archive</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Asked-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                    \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Archive</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Asked-<span>20 Days Ago at 1-2-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                        \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"w100 text-center more\">\r\n                <a>\r\n                <img src=\"../../../assets/img/more.png\">\r\n                </a>\r\n            </div>             \r\n              <!--end of s11 contents-->\r\n        </div><!--end of s11-->\r\n        <div class=\"tab-pane fade in no-padding-bottom\" id=\"q22\">\r\n            <!--s22 contets-->\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"ag\">Edit / Update</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Answered on-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n                <h3>install and update the angular cli to next version</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                    <p>90.7k Views</p> \r\n                    <p>100 others Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Edit / Update</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Answered on -<span>20 Days Ago at 1-2-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                        \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a id=\"ag\">Edit / Update</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Answered on-<span>20 Days Ago at 1-1-2017 at 13:01</span></p> \r\n                <h3>install and update the angular cli to next version</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                    <p>90.7k Views</p> \r\n                    <p>100 others Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"postMList stppd\">\r\n                <div class=\"drop2poz\">\r\n                    <div class=\"Drop2\">\r\n                        <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                            Action  <i class=\"fa fa-caret-down\"></i>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"mt\">Remove</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" id=\"ag\">Edit / Update</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>  \r\n                </div>  \r\n                <p>Answered on -<span>20 Days Ago at 1-2-2017 at 13:01</span></p> \r\n                <h3>erros on angular cli installation list lazzy routes!</h3>  \r\n                <div class=\"postMList6 slinsot\">\r\n                    <div class=\"boxPic6\"><img src=\"../../../assets/img/user3.jpg\"></div>                \r\n                        \r\n                    <p>90.7k Views</p> \r\n                    <p>100 people Answers</p>\r\n                </div>                        \r\n            </div>\r\n            <div class=\"w100 text-center more\">\r\n                <a>\r\n                <img src=\"../../../assets/img/more.png\">\r\n                </a>\r\n            </div>\r\n            <!--end of s22 contents-->\r\n        </div><!--end of s22-->\r\n    </div><!--end of myTabContent2-->                                                 \r\n  </div><!--w100-->\r\n</div>"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"assumble\">\r\n\t<article class=\"col-sm-12 sortable-grid ui-sortable\">\r\n        <ul class=\"nav nav-tabs pull-left child-tabs\" id=\"myTab\">\r\n            <child-tabs [childTabs]=\"childTabs\" (update)=\"updateValue($event)\"></child-tabs>\r\n        </ul>\r\n        <div class=\"child-tabs-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </article>\r\n</section>"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div class=\"single-ques-detail\">\r\n    <div class=\"postMList stppd\">  \r\n        <h3>erros on angular cli installation list lazzy routes!</h3>\r\n        <div class=\"ques-detail\">\r\n            <ul>\r\n                <li>Follow 74</li>\r\n                <li>Comments 1+</li>\r\n            </ul>\r\n            <p>100+ Answers</p>\r\n        </div>                        \r\n    </div>\r\n    <div class=\"postMList stppd\">\r\n        <div class=\"postMList6 slinsot answer-list\">\r\n            <div class=\"boxPic6\">\r\n                <img src=\"../../../assets/img/user3.jpg\">\r\n            </div>                 \r\n            <h4>Slurp Ramen <span>JS developer</span></h4> \r\n            <p>Written on Jan 24</p>                    \r\n        </div>\r\n        <div class=\"answer-here\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"tags-here\">7k views</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"postMList stppd\">\r\n        <div class=\"postMList6 slinsot answer-list\">\r\n            <div class=\"boxPic6\">\r\n                <img src=\"../../../assets/img/user3.jpg\">\r\n            </div>                 \r\n            <h4>Slurp Ramen <span>JS developer</span></h4> \r\n            <p>Written on Jan 24</p>                    \r\n        </div>\r\n        <div class=\"answer-here\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"tags-here\">7k views</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"postMList stppd\">\r\n        <div class=\"postMList6 slinsot answer-list\">\r\n            <div class=\"boxPic6\">\r\n                <img src=\"../../../assets/img/user3.jpg\">\r\n            </div>                 \r\n            <h4>Slurp Ramen <span>JS developer</span></h4> \r\n            <p>Written on Jan 24</p>                    \r\n        </div>\r\n        <div class=\"answer-here\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"tags-here\">7k views</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"postMList stppd\">\r\n        <div class=\"postMList6 slinsot answer-list\">\r\n            <div class=\"boxPic6\">\r\n                <img src=\"../../../assets/img/user3.jpg\">\r\n            </div>                 \r\n            <h4>Slurp Ramen <span>JS developer</span></h4> \r\n            <p>Written on Jan 24</p>                    \r\n        </div>\r\n        <div class=\"answer-here\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"tags-here\">7k views</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"postMList stppd\">\r\n        <div class=\"postMList6 slinsot answer-list\">\r\n            <div class=\"boxPic6\">\r\n                <img src=\"../../../assets/img/user3.jpg\">\r\n            </div>                 \r\n            <h4>Slurp Ramen <span>JS developer</span></h4> \r\n            <p>Written on Jan 24</p>                    \r\n        </div>\r\n        <div class=\"answer-here\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            <p class=\"tags-here\">7k views</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"w100 text-center more\">\r\n        <a>\r\n            <img src=\"../../../assets/img/more.png\">\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<!--start-popularEvents-content-->\r\n<div class=\"reviewtxt w100\">\r\n  <ul class=\"list-inline city-ul pull-right\">\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">New York</span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">Los Angles</span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">Oakland</span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">Chicago</span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">Islamabad</span>\r\n          </a>\r\n      </li>\r\n      <li>\r\n          <a data-toggle=\"tab\" href=\"#s1\">\r\n          <span class=\"\">Karachi</span>\r\n          </a>\r\n      </li>\r\n      <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n          more Cities <i class=\"fa fa-caret-down\"></i>\r\n      </button>\r\n  </ul>\r\n</div>\r\n<div class=\"boxIn_lft\">\r\n    <div class=\"w100\">\r\n      <div class=\"interested w100\">\r\n          <h1>Popular Events</h1>\r\n          <div class=\"w100 mLsz pull-right\">\r\n              <input class=\"postBTN stBTN fl no\" type=\"button\" value=\"Create Event\">                                                          \r\n          </div>\r\n          <ul class=\"list-inline pull-left\">\r\n              <li>\r\n              <h5>See Events For</h5>\r\n              </li>\r\n              <li>\r\n                  <a data-toggle=\"tab\" href=\"#s1\">\r\n                  <span class=\"\">Today |</span>\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a data-toggle=\"tab\" href=\"#s1\">\r\n                  <span class=\"\">Tomorrow |</span>\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a data-toggle=\"tab\" href=\"#s1\">\r\n                  <span class=\"\">This Weekend |</span>\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a data-toggle=\"tab\" href=\"#s1\">\r\n                  <span class=\"\">Next Week |</span>\r\n                  </a>\r\n              </li>\r\n              <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                  Jump date >> <i class=\"fa fa-caret-down\"></i>\r\n              </button>\r\n          </ul>\r\n      </div>\r\n        <hr>\r\n      <div class=\"postMain w100\">\r\n          <div class=\"col-lg-5\">\r\n              <div class=\"panel panel-danger\"> \r\n                  <div class=\"panel-body \">\r\n                    <a href=\"#\"><img class=\"pe-img\" src=\"../../../assets/img/pe1.png\"></a>\r\n                      <hr>\r\n                      <h3>National Tater Tot Day 2017!</h3>\r\n                      <hr>\r\n                      <h5 class=\"fa fa-calendar-o\">Saturday, Feb 5, 11:30 am--4:00 pm</h5>\r\n                      <h5 class=\"fa fa-map-marker\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                      <span>Show Tribute to the Films of Hayao Miyazaki, with works from over 50 </span>  \r\n                    </div>\r\n                    <div class=\"panel-footer\">\r\n                        <a><span>Food & Drink </span></a><p>26 Interested</p>\r\n                    </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-5 --> \r\n            <div class=\"col-lg-5\">\r\n              <div class=\"panel panel-danger\">\r\n                  <div class=\"panel-body\">\r\n                    <a href=\"#\"><img class=\"pe-img\" src=\"../../../assets/img/pe2.png\"></a>\r\n                    <hr>\r\n                    <h3>Art Show Tribute to the Films</h3>\r\n                    <hr>\r\n                    <h5 class=\"fa fa-calendar-o\">Saturday, Feb 5, 11:30 am--4:00 pm</h5>\r\n                    <h5 class=\"fa fa-map-marker\"><a><span> Drake’s Barrel House  -</span></a>- New York</h5>\r\n                    <span>Art Show Tribute to the Films of Hayao Miyazaki, with works from over 50 </span>     \r\n                    </div>\r\n                    <div class=\"panel-footer\">\r\n                        <a><span>Arts  </span></a><p>8 Interested</p>\r\n                    </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-4 --> \r\n            <div class=\"col-lg-5\">\r\n              <div class=\"panel panel-danger\">\r\n                \r\n                <div class=\"panel-body\">\r\n                  <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a></div>\r\n                  <hr>\r\n                  <h3>National Tater Tot Day 2017!</h3>\r\n                  <hr>\r\n                  <h5 class=\"fa fa-calendar-o\">Saturday, Feb 5, 11:30 am--4:00 pm</h5>\r\n                  <h5 class=\"fa fa-map-marker\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                  \r\n                      \r\n                  </div>\r\n                  <div class=\"panel-footer\">\r\n                      <a><span>Food & Drink </span></a><p>26 Interested</p>\r\n                  </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-4 --> \r\n            <div class=\"col-lg-5\">\r\n            <div class=\"panel panel-danger\">\r\n                \r\n                <div class=\"panel-body\">\r\n                <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a></div>\r\n                <hr>\r\n                <h3>National Tater Tot Day 2017!</h3>\r\n                <hr>\r\n                <h5 class=\"fa fa-calendar-o\">Saturday, Feb 5, 11:30 am--4:00 pm</h5>\r\n                <h5 class=\"fa fa-map-marker\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                \r\n                    \r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    <a><span>Food & Drink </span></a><p>26 Interested</p>\r\n                </div>\r\n            </div>\r\n            </div> <!-- /.col-lg-4 --> \r\n      </div><!--end of post main-->\r\n        <div class=\"text-center\">\r\n            <div class=\"btn-group\">\r\n                <button class=\"btn btn-white\" type=\"button\"><i class=\"fa fa-chevron-left\"></i></button>\r\n                <button class=\"btn btn-white\">1</button>\r\n                <button class=\"btn btn-white  active\">2</button>\r\n                <button class=\"btn btn-white\">3</button>\r\n                <button class=\"btn btn-white\">4</button>\r\n                <button class=\"btn btn-white\">5</button>\r\n                <button class=\"btn btn-white\">6</button>\r\n                <button class=\"btn btn-white\">7</button>\r\n                <button class=\"btn btn-white\" type=\"button\"><i class=\"fa fa-chevron-right\"></i> </button>\r\n            </div>\r\n         </div>\r\n    </div>\r\n</div><!--end-of-box-left-->\r\n   <!--right-->\r\n<div class=\"boxIn_rit\">\r\n  <div class=\"box_hed\">\r\n      <p>Browse Events</p>\r\n      <a href=\"#\">Show All</a>\r\n  </div><!--box_hed-->\r\n\r\n    <a href=\"#\" class=\"accordList\">\r\n        <img class=\"ac1\" src=\"../../../assets/img/Box_1.png\">\r\n        <img class=\"ac2\" src=\"../../../assets/img/Box_11.png\">\r\n        Festivals & Fairs\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_2.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_2.png\">\r\n            Food & Drink\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_3.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_33.png\">\r\n            Night Life\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_4.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_44.png\">\r\n            Music\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_5.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_55.png\">\r\n            Performing Art\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_6.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_66.png\">\r\n            Visual Arts &amp; Entertainment\r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n            <img class=\"ac1\" src=\"../../../assets/img/Box_7.png\">\r\n            <img class=\"ac2\" src=\"../../../assets/img/Box_77.png\">\r\n            Official Shaful Events \r\n    </a>\r\n    <a href=\"#\" class=\"accordList\">\r\n\r\n          ..view all \r\n    </a>\r\n\r\n\r\n</div>\r\n                        <!--end ryt-->                       \r\n<!--end of contents-->"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "\r\n<div calss=\"w100\">\r\n    <div class=\"box_mess2\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"form-group input-group\">\r\n                <span class=\"input-group-addon\">Find</span>\r\n                <input type=\"text\" class=\"form-control \" placeholder=\"Resturent, Cheap dinner, Max's'\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group input-group\">\r\n                <span class=\"input-group-addon\">Near</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Area, Place\">\r\n            </div>                                                                      \r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <input class=\"postBTN fr\" type=\"button\" value=\"Search\">\r\n          </div>\r\n                    <div class=\"reviewtxt w100 row row-centered\">\r\n                      <ul class=\"list-inline\">\r\n                          <li>\r\n                              <a data-toggle=\"tab\" href=\"#s1\">\r\n                              <span class=\"\">Resturents</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a data-toggle=\"tab\" href=\"#s1\">\r\n                              <span class=\"\">Nightlife</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a data-toggle=\"tab\" href=\"#s1\">\r\n                              <span class=\"\">Home Service </span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a data-toggle=\"tab\" href=\"#s1\">\r\n                              <span class=\"\">Delievery</span>\r\n                              </a>\r\n                          </li>\r\n                      </ul>\r\n                      </div>\r\n    <!---->\r\n    <div class=\"postMain w100 col-lg-12\">\r\n      <h1>Hot and new Business</h1>\r\n          <div class=\"col-lg-4\">\r\n              <div class=\"panel panel-danger\"> \r\n                  <div class=\"panel-body \">\r\n                    <a href=\"#\"><img class=\"pe-img\" src=\"../../../assets/img/pe1.png\"></a>\r\n                      <hr>\r\n                      <h3>The Halal Guys</h3>\r\n                      <hr>\r\n                      <a><i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      </a><span>Select Rating To Get Start</span>\r\n                      \r\n                      <h5 class=\"fa fa-dollar\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                      <h5 class=\"fa fa-fire\"> Oppened Few days ago</h5>\r\n                        \r\n                    </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-5 --> \r\n             <div class=\"col-lg-4\">\r\n              <div class=\"panel panel-danger\"> \r\n                  <div class=\"panel-body \">\r\n                    <a href=\"#\"><img class=\"pe-img\" src=\"../../../assets/img/pe1.png\"></a>\r\n                      <hr>\r\n                      <h3>Bota Tapes & Paella bar </h3>\r\n                      <hr>\r\n                      <a><i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      </a><span>Select Rating To Get Start</span>\r\n                      \r\n                      <h5 class=\"fa fa-dollar\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                      <h5 class=\"fa fa-fire\"> Oppened Few days ago</h5>\r\n                        \r\n                    </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-5 -->\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"panel panel-danger\"> \r\n                  <div class=\"panel-body \">\r\n                    <a href=\"#\"><img class=\"pe-img\" src=\"../../../assets/img/pe1.png\"></a>\r\n                      <hr>\r\n                      <h3>Bar Fluxes</h3>\r\n                      <hr>\r\n                      <a><i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      <i class=\"fa fa-star-o\"></i>\r\n                      </a><span>Select Rating To Get Start</span>\r\n                      \r\n                      <h5 class=\"fa fa-dollar\"><a><span>Spark Social SF -</span></a>- San Francisco</h5>\r\n                      <h5 class=\"fa fa-fire\"> Oppened 5 weeks ago</h5>\r\n                        \r\n                    </div>\r\n              </div>\r\n            </div> <!-- /.col-lg-5 -->\r\n    </div>\r\n    <!---->\r\n    \r\n    <div class=\"text-center\">\r\n            <div class=\"btn-group\">\r\n                <button class=\"btn btn-white\" type=\"button\"><i class=\"fa fa-chevron-left\"></i></button>\r\n                <button class=\"btn btn-white\">1</button>\r\n                <button class=\"btn btn-white  active\">2</button>\r\n                <button class=\"btn btn-white\">3</button>\r\n                <button class=\"btn btn-white\">4</button>\r\n                <button class=\"btn btn-white\">5</button>\r\n                <button class=\"btn btn-white\">6</button>\r\n                <button class=\"btn btn-white\">7</button>\r\n                <button class=\"btn btn-white\" type=\"button\"><i class=\"fa fa-chevron-right\"></i> </button>\r\n            </div>\r\n         </div>\r\n    </div><!--end of box mess-->\r\n</div><!--end of w100-->"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"boxIn_lft\">\r\n        <div class=\"w100\">\r\n        \t<div class=\"drop2poz\">\r\n                <div class=\"Drop2\">\r\n                    <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                        more <i class=\"fa fa-caret-down\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu js-status-update pull-right\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"mt\">Month</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"ag\">Agenda</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" id=\"td\">Today</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>  \r\n            </div>                                              \r\n        </div><!--w100-->\r\n        <div class=\"reviewPortion w100\">\r\n        \t<div class=\"reviewtxt w100\"><p>Best of MegaSocio<span>Honolulu</span></p></div><!--reviewtxt-->\r\n        </div><!--reviewPortion-->\r\n        <div class=\"w100 dtable bb\">\r\n            <div class=\"accord\">\r\n                <a href=\"#\" class=\"accordList active\">\r\n                    <img class=\"ac1\" src=\"img/Box_1.png\">\r\n                    <img class=\"ac2\" src=\"img/Box_11.png\">\r\n                    Food\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_2.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_2.png\">\r\n                        Nightlife\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_3.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_33.png\">\r\n                        Restaurants\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_4.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_44.png\">\r\n                        Shopping\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_5.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_55.png\">\r\n                        Active Life\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_6.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_66.png\">\r\n                        Arts & Entertainment\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_7.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_77.png\">\r\n                        Automotive\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_8.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_88.png\">\r\n                        Beauty & Spa\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_9.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_99.png\">\r\n                        Education\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_010.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_0100.png\">\r\n                        Event Planning\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_011.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_0111.png\">\r\n                        Health & Medical\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_012.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_0122.png\">\r\n                        Home Services\r\n                </a>\r\n                <a href=\"#\" class=\"accordList\">\r\n                        <img class=\"ac1\" src=\"img/Box_013.png\">\r\n                        <img class=\"ac2\" src=\"img/Box_0133.png\">\r\n                        Local Services\r\n                </a>\r\n            </div><!--accord-->\r\n            <div class=\"acordRit\">\r\n            \t<div class=\"reviewtxtt w100\"><p>Food</p><span>more</span></div><!--reviewtxt-->\r\n                <div class=\"boxes_indents\">\r\n\t\t\t\t\t<div class=\"indents\">\r\n                    \t<a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                        <p>Uncle Clays House of Pure Aloha</p>\r\n                        <span>907 Reviews</span>\r\n                        <div class=\"indents2\">\r\n                            <a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                            <p>Strawberry and lihing mui with li hing powder and dream sauce.</p>\r\n                        </div><!--indents--> \r\n                    </div><!--indents-->                \r\n                </div><!--boxes_indents-->\r\n                <div class=\"boxes_indents\">\r\n\t\t\t\t\t<div class=\"indents\">\r\n                    \t<a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                        <p>Uncle Clays House of Pure Aloha</p>\r\n                        <span>907 Reviews</span>\r\n                        <div class=\"indents2\">\r\n                            <a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                            <p>Strawberry and lihing mui with li hing powder and dream sauce.</p>\r\n                        </div><!--indents--> \r\n                    </div><!--indents-->                \r\n                </div><!--boxes_indents-->\r\n                <div class=\"boxes_indents\">\r\n\t\t\t\t\t<div class=\"indents\">\r\n                    \t<a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                        <p>Uncle Clays House of Pure Aloha</p>\r\n                        <span>907 Reviews</span>\r\n                        <div class=\"indents2\">\r\n                            <a href=\"#\"><img src=\"img/user.jpg\"></a>\r\n                            <p>Strawberry and lihing mui with li hing powder and dream sauce.</p>\r\n                        </div><!--indents--> \r\n                    </div><!--indents-->                \r\n                </div><!--boxes_indents-->\r\n                <div class=\"w100 text-center more arBrd\"><a href=\"#\"><img src=\"img/more.png\"></a></div>\r\n            </div><!--acordRit-->\r\n        </div><!--w100-->\r\n        <div class=\"w100 recent\">Recent Activity</div><!--w100-->\r\n        <div class=\"postMain w100\">\r\n        \t<div class=\"ListHold w100\">\r\n                <div class=\"postMList6\">\r\n                    <div class=\"boxPic6\"><img src=\"img/user3.jpg\"></div><!--boxPic-->\r\n                    <div class=\"drop2poz\">\r\n                        <div class=\"Drop2\">\r\n                            <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                                Posted 08 Days Ago \r\n                            </button>\r\n                        </div>  \r\n                    </div> <!--drop2poz-->                       \t\r\n                    <h3>Joyce C. <span>wrote a review for</span>Slurp Ramen</h3> \r\n                    <p><img src=\"img/eart_icon.png\">22K</p>\r\n                    <div class=\"rating\">\r\n                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\r\n                    </div>                    \t\r\n                </div><!--postMList3-->                \t\r\n                <div class=\"w100 mLs\">\r\n                    <p>Located on Kapiolani Blvd. next to CPB and MW restaurant.  They share parking with them there is limited parking.  However, I've never had to wait too long to get a stall...<a href=\"#\"><span>read more</span></a></p>\r\n                    <p>Was this review …?</p>\r\n                    <div class=\"w100\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"useful\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"funny\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"cool\">\r\n                    </div>\r\n                </div><!--w100-->\r\n            </div><!--ListHold-->\r\n            <div class=\"ListHold w100\">\r\n                <div class=\"postMList6\">\r\n                    <div class=\"boxPic6\"><img src=\"img/user3.jpg\"></div><!--boxPic-->\r\n                    <div class=\"drop2poz\">\r\n                        <div class=\"Drop2\">\r\n                            <button class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\">\r\n                                Posted 08 Days Ago \r\n                            </button>\r\n                        </div>  \r\n                    </div> <!--drop2poz-->                       \t\r\n                    <h3>Joyce C. <span>wrote a review for</span>Slurp Ramen</h3> \r\n                    <p><img src=\"img/eart_icon.png\">22K</p>\r\n                    <div class=\"rating\">\r\n                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\r\n                    </div>                    \t\r\n                </div><!--postMList3-->                \t\r\n                <div class=\"w100 mLs\">\r\n                    <p>Located on Kapiolani Blvd. next to CPB and MW restaurant.  They share parking with them there is limited parking.  However, I've never had to wait too long to get a stall...<a href=\"#\"><span>read more</span></a></p>\r\n                    <p>Was this review …?</p>\r\n                    <div class=\"w100\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"useful\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"funny\">\r\n                        <input class=\"postBTN stBTN fl\" type=\"button\" value=\"cool\">\r\n                    </div>\r\n                </div><!--w100-->\r\n            </div><!--ListHold-->\r\n            <div class=\"w100 text-center more\"><a href=\"#\"><img src=\"img/more.png\"></a></div>                       \r\n        </div>\r\n    </div><!--boxIn_lft-->\r\n    <div class=\"boxIn_rit\">\r\n    \t<div class=\"box_hed\">\r\n        \t<p>Featured Dating</p>\r\n        \t<a href=\"#\">Show All</a>\r\n        </div><!--box_hed-->\r\n        <div class=\"reportHed\">\r\n\t\t\t<div class=\"ListHold w100 stdiv\">\r\n                <div class=\"postMList6 stpdd\">\r\n                    <div class=\"boxPic6\"><img src=\"img/user3.jpg\"></div><!--boxPic-->                     \t\r\n                    <h3>Joyce C. <span>wrote a review for</span>Slurp Ramen</h3> \r\n                    <p><img src=\"img/eart_icon.png\">22K</p>                   \t\r\n                </div><!--postMList3-->                \t\r\n                <div class=\"w100 mLs\">\r\n                    <p>Have you ever had those ramen cravings?  But you know there's nothing good in San Francisco, so you browse Yelp hoping that new…</p>\r\n                </div><!--w100-->\r\n                <div class=\"w100 fotnot\">\r\n                    <p>Archive</p>\r\n                    <span>Read more</span>\r\n                </div><!--w100-->\r\n            </div><!--ListHold-->\r\n            <div class=\"ListHold w100 stdiv\">\r\n                <div class=\"postMList6 stpdd\">\r\n                    <div class=\"boxPic6\"><img src=\"img/user3.jpg\"></div><!--boxPic-->                     \t\r\n                    <h3>Joyce C. <span>wrote a review for</span>Slurp Ramen</h3> \r\n                    <p><img src=\"img/eart_icon.png\">22K</p>                   \t\r\n                </div><!--postMList3-->                \t\r\n                <div class=\"w100 mLs\">\r\n                    <p>Have you ever had those ramen cravings?  But you know there's nothing good in San Francisco, so you browse Yelp hoping that new…</p>\r\n                </div><!--w100-->\r\n                <div class=\"w100 fotnot\">\r\n                    <p>Archive</p>\r\n                    <span>Read more</span>\r\n                </div><!--w100-->\r\n            </div><!--ListHold-->\r\n            <div class=\"w100 addz mrg0\">\r\n\t\t\t\t<p>Ads</p> \r\n                <div class=\"ADDList\">\r\n                \t<img src=\"img/add_pic_1.jpg\">\r\n                    <div class=\"adJoin\">\r\n\t\t\t\t\t\t<h3>India Startups Advice</h3>                    \r\n                        <span>5,900 members</span>\r\n                        <a href=\"#\"><i class=\"fa fa-plus\"></i>Join</a>\r\n                    </div><!--adJoin-->\r\n                </div><!--ADDList-->\r\n                <div class=\"ADDList\">\r\n                \t<img src=\"img/add_pic_1.jpg\">\r\n                    <div class=\"adJoin\">\r\n\t\t\t\t\t\t<h3>India Startups Advice</h3>                    \r\n                        <span>5,900 members</span>\r\n                        <a href=\"#\"><i class=\"fa fa-plus\"></i>Join</a>\r\n                    </div><!--adJoin-->\r\n                </div><!--ADDList-->\r\n                <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a></div>           \r\n            </div><!--addz-->        \r\n        </div><!--reportHed-->\r\n    </div><!--boxIn_rit-->\r\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<!--start-review-content-->\r\n<div class=\"w100\">\r\n    <h1>Your First Review is AWaits</h1>\r\n    <div class=\"w100 pull-right\">\r\n        <p>Review your favorite businesses and share your experiences with our community. Need a little help getting started? <span>Check out these tips.</span></p>                                                          \r\n    </div>\r\n</div>\r\n<div calss=\"w100\">\r\n    <div class=\"box_mess2\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"form-group input-group\">\r\n                <span class=\"input-group-addon\">Find</span>\r\n                <input type=\"text\" class=\"form-control \" placeholder=\"Resturent, Cheap dinner, Max's'\">\r\n            </div>\r\n            <div class=\"form-group input-group\">\r\n                <span class=\"input-group-addon\">Near</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Area, Place\">\r\n            </div>                            \r\n            \r\n                <input class=\"postBTN fr\" type=\"button\" value=\"Find\">                 \r\n                                    \r\n        </div><!--textarePost-->                  \r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"w100\">\r\n    <div class=\"col-lg-5\">\r\n        <div class=\"panel panel-danger\">\r\n        <div class=\"panel-body\">\r\n                <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a>\r\n                </div>\r\n                <hr>\r\n                <h4><a><span>Brenda's French Soul Food</span></a></h4>\r\n                <h5 class=\"fa fa-group\"> Have You Been here ?</h5>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <a><i class=\"fa fa-star-o\"></i>\r\n                <i class=\"fa fa-star-o\"></i>\r\n                <i class=\"fa fa-star-o\"></i>\r\n                <i class=\"fa fa-star-o\"></i>\r\n                <i class=\"fa fa-star-o\"></i>\r\n                <i class=\"fa fa-star-o\"></i>\r\n                </a><p>Select Rating To Get Start</p>\r\n            </div>\r\n    </div>\r\n    </div> <!-- /.col-lg-4 --> \r\n        <div class=\"col-lg-5\">\r\n            <div class=\"panel panel-danger\">\r\n            <div class=\"panel-body\">\r\n                    <div class=\"w100 store\"><a href=\"#\"><img src=\"img/Ads.png\"></a>\r\n                    </div>\r\n                    <hr>\r\n                    <h4><a><span>Liholiho Yacht Club</span></a></h4>\r\n                    <h5 class=\"fa fa-group\"> Have You Been here ?</h5>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    <a><i class=\"fa fa-star-o\"></i>\r\n                    <i class=\"fa fa-star-o\"></i>\r\n                    <i class=\"fa fa-star-o\"></i>\r\n                    <i class=\"fa fa-star-o\"></i>\r\n                    <i class=\"fa fa-star-o\"></i>\r\n                    <i class=\"fa fa-star-o\"></i>\r\n                    </a><p>Select Rating To Get Start</p>\r\n                </div>\r\n        </div>\r\n        </div> <!-- /.col-lg-4 --> \r\n</div><!--end of w100-->\r\n<div class=\"w100 text-center\">\r\n<a class=\"fa fa-chevron-down\"> Show more suggestions</a>\r\n</div>\r\n<!--end of contents-->"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<section id=\"widget-grid\" class=\"assumble\">\r\n\t<article class=\"col-sm-12 sortable-grid ui-sortable\">\r\n        <ul class=\"nav nav-tabs pull-left child-tabs\" id=\"myTab\">\r\n            <child-tabs [childTabs]=\"childTabs\" (update)=\"updateValue($event)\"></child-tabs>\r\n        </ul>\r\n        <div class=\"child-tabs-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </article>\r\n</section>"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-here\" [style.margin-top.px]=\"signupHeight\">\r\n  <div class=\"login-form\">\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"sign-head\">\r\n        <h3>Register is Free*</h3>\r\n      </div>\r\n      <div class=\"required-section\">\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-12\">\r\n            <i class=\"fa fa-user\"></i>\r\n            <input \r\n              type=\"text\" \r\n              placeholder=\"username\" \r\n              name=\"username\" \r\n              formControlName=\"username\"\r\n              class=\"form-control alert-danger\"\r\n              [ngClass]=\"{\r\n                'alert-danger' : signupForm.controls.username.touched && signupForm.controls.username.errors\r\n              }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-12\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            <input \r\n              type=\"text\" \r\n              placeholder=\"email\" \r\n              name=\"email\" \r\n              class=\"form-control\"\r\n              formControlName=\"email\"\r\n              [ngClass]=\"{\r\n                'alert-danger' : signupForm.controls.email.touched && signupForm.controls.email.errors\r\n              }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-12\">\r\n            <i class=\"fa fa-lock\"></i>\r\n            <input \r\n              type=\"password\" \r\n              placeholder=\"password\" \r\n              name=\"password\" \r\n              formControlName=\"password\" \r\n              class=\"form-control\"\r\n              [ngClass]=\"{\r\n                'alert-danger' : signupForm.controls.password.touched && signupForm.controls.password.errors\r\n              }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-12\">\r\n            <i class=\"fa fa-lock\"></i>\r\n            <input \r\n              type=\"password\" \r\n              placeholder=\"re-password\" \r\n              name=\"confirmpassword\" \r\n              formControlName=\"password_confirmation\"\r\n              class=\"form-control\"\r\n              [ngClass]=\"{\r\n                'alert-danger' : signupForm.controls.password_confirmation.touched && signupForm.controls.password_confirmation.errors\r\n              }\"\r\n              >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group half-area\">\r\n        <div class=\"col-sm-12\">\r\n          <input \r\n            type=\"text\" \r\n            placeholder=\"firstname\" \r\n            name=\"firstname\" \r\n            formControlName=\"firstname\"\r\n            class=\"form-control\" \r\n            >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group half-area\">\r\n        <div class=\"col-sm-12\">\r\n          <input \r\n            type=\"text\" \r\n            placeholder=\"lastname\" \r\n            name=\"lastname\" \r\n            formControlName=\"lastname\"\r\n            class=\"form-control\"\r\n          >\r\n        </div>\r\n      </div>\r\n      <div class=\"register-button\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signupForm.valid\">Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='post' (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <textarea\r\n      type=\"text\"\r\n      placeholder=\"Status\"\r\n      class=\"form-control\"\r\n      formControlName='text'\r\n    ></textarea>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <button type=\"submit\" class=\"btn btn-primary red-button\" [disabled]='!post.valid'>post</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = "<div class=\"w100 addz\">\r\n  <p>Ads</p>\r\n  <div class=\"ADDList\" *ngFor=\"let ad of adz\">\r\n    <img src=\"../../../assets/img/add_pic_1.jpg\">\r\n    <div class=\"adJoin\">\r\n      <h3>{{ad.title}}</h3>\r\n      <span>5,900 members</span>\r\n      <a><i class=\"fa fa-plus\"></i>Join</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\">\r\n  <div class=\"input-group-btn\">\r\n\t\t<button type=\"submit\" class=\"btn btn-default custom-btn\" [disabled]=\"!f.valid\">\r\n\t\t\tSearch Friends\r\n\t\t</button>\r\n    <div class=\"form-group\">\r\n      <input\r\n        class=\"form-control input-lg\"\r\n        placeholder=\"Search for your friends...\"\r\n        id=\"search-project\"\r\n        type=\"text\"\r\n        name=\"search\"\r\n        #search=\"ngModel\"\r\n        ngModel\r\n        required\r\n        (keyup)=\"inputChange($event)\"\r\n        >\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!f.valid\">\r\n    \t<i class=\"fa fa-fw fa-search fa-lg\"></i>\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<div class=\"friends-content\">\r\n  <div class=\"col-sm-12 bs-friends\">\r\n    <div class=\"head\">\r\n      <h4>Friends</h4>\r\n    </div>\r\n    <div class=\"search-here\">\r\n      <friend-search (results)=\"showResults($event)\"></friend-search>\r\n    </div>\r\n    <bs-loader [loading]=\"loading\" [error]=\"error\" [height]=\"height\"></bs-loader>\r\n    <div class=\"search-results\" *ngIf=\"show && !loading && !error\">\r\n      <div class=\"col-sm-3 each-result\" *ngFor=\"let result of Sortedresults\">\r\n        <div class=\"result\">\r\n          <div class=\"result-img\">\r\n            <img src=\"{{result.profile_picture}}\">\r\n          </div>\r\n          <div class=\"font-xs\">\r\n            <b>{{result.fullName}}</b>\r\n          </div>\r\n          <button class=\"btn btn-custom btn-success\" (click)=\"addFriend(result.id)\">Connect</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div class=\"boxIn_lft\">\r\n  <bs-loader [loading]=\"loading\" [error]=\"error\" [height]=\"'770'\"></bs-loader>\r\n  <ul class=\"nav nav-tabs grand-child\" role=\"tablist\" *ngIf=\"!loading && !error\">\r\n    <li role=\"presentation\" *ngFor=\"let tabsHead of tabsHeads\"\r\n      [ngClass]=\"{\r\n        active: clickedTab == tabsHead.title\r\n      }\"\r\n    >\r\n      <a\r\n      data-toggle=\"tab\"\r\n      aria-controls=\"tabsHead.title\"\r\n      role=\"tab\"\r\n      href=\"#{{tabsHead.id}}\"\r\n      (click)=\"clicked(tabsHead)\"\r\n      >\r\n      <span>\r\n        <img class=\"Ione\" src=\"{{tabsHead.icon1}}\">\r\n        <img class=\"Itwo\" src=\"{{tabsHead.icon2}}\">\r\n      </span>\r\n      <span>{{tabsHead.title}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <div class=\"tab-pane\" role=\"tabpanel\" *ngFor=\"let tabsHead of tabsHeads\"\r\n      [ngClass]=\"{\r\n        active: clickedTab == tabsHead.title\r\n      }\"\r\n      id=\"{{tabsHead.id}}\"\r\n    >\r\n      <div>\r\n        <div class=\"box_mess\">\r\n          <div class=\"rounPic\">\r\n            <img src=\"{{userImg}}\" class=\"img-circle\">\r\n          </div>\r\n          <div class=\"textarePost w100\">\r\n            <add-post (newPost)=\"updatePost($event)\"></add-post>\r\n          </div>\r\n        </div>\r\n        <div class=\"postMain w100\">\r\n          <div *ngIf=\"posts != ''\">\r\n            <div class=\"postMList single-post-here\" *ngFor=\"let post of posts\">\r\n              <div class=\"boxPic\">\r\n                <img src=\"{{userImg}}\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"postArea\">\r\n                <h3>{{post.user.full_name}}</h3>\r\n                <p [innerHTML]=\"post.body\"></p>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <ul class=\"nav nav-tabs in\" id=\"myTab\">\r\n    <li role=\"presentation\" *ngFor=\"let tabsData of tabsDatas\"\r\n    [ngClass]=\"{\r\n      active: clickedTab == tabsData.id\r\n    }\"\r\n    >\r\n      <a\r\n        data-toggle=\"tab\"\r\n        aria-controls=\"tabsData.title\"\r\n        role=\"tab\"\r\n        href=\"#{{tabsData.id}}\"\r\n        (click)=\"clicked(tabsData.id)\"\r\n      >\r\n      {{tabsData.title}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <div class=\"tab-pane\" role=\"tabpanel\" *ngFor=\"let tabsData of tabsDatas\"\r\n      [ngClass]=\"{\r\n        active: clickedTab == tabsData.id\r\n      }\"\r\n      id=\"{{tabsData.id}}\"\r\n    >\r\n    <div class=\"col-sm-12 superbox custom-sup-box\" *ngIf=\"tabsData.id == 'photo' && photos != ''\">\r\n      <div class=\"superbox-list\" *ngFor=\"let photo of photos\">\r\n        <img src=\"{{photo.publicUrl}}\" class=\"img-responsive\" data-toggle=\"modal\" data-target=\"#photoModel\" (click)=\"photoClicked(photo)\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 superbox\" *ngIf=\"tabsData.id == 'album'\">\r\n      <div class=\"superbox-list\" *ngFor=\"let album of albums\">\r\n        <div class=\"album-img\">\r\n          <img src=\"../../../../assets/img/saturation.png\" class=\"img-responsive\">\r\n        </div>\r\n        <h4>{{album.name}}</h4>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<bs-photomodel [photo]=\"singlePhoto\" [prevId]=\"prevId\" [nextId]=\"nextId\" (newId)=\"updatePhoto($event)\"></bs-photomodel>"

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<div class=\"friends-content photo-content\">\r\n  <div class=\"col-sm-12 bs-photo\" *ngIf=\"!loading && !error\">\r\n    <div class=\"heading col-sm-6\">\r\n      <h4>Photos</h4>\r\n    </div>\r\n    <div class=\"col-sm-6 mybuttons\">\r\n      <div class=\"buttons\">\r\n          <label class=\"upload-button\">\r\n            <input type=\"file\"\r\n                  class=\"hidden\"\r\n                  ngFileSelect\r\n                  [options]=\"options\"\r\n                  (onUpload)=\"handleUpload($event)\"\r\n                  name=\"someFile\"\r\n                  (onPreviewData)=\"handlePreviewData($event)\"\r\n                  >\r\n            Upload Photo\r\n          </label>\r\n      </div>\r\n      \r\n    </div>\r\n    <photo-child [tabsDatas]='tabsData' [photos]=\"photos\" [albums]=\"albums\" [photoIds]=\"photoIds\"></photo-child>\r\n  </div>\r\n  <bs-loader [loading]=\"loading\" [error]=\"error\" [height]=\"'600'\"></bs-loader>\r\n</div>\r\n"

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"photoModel\" role=\"dialog\" (window:keyright)=\"move($event)\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body photoModel\" *ngIf=\"photo != '' && photo != undefined\">\r\n        <div class=\"main-image\">\r\n          <img src=\"{{photo.publicUrl}}\" class=\"img-responsive\"/>\r\n        </div>\r\n        <div class=\"navigation-here\">\r\n          <div class=\"each-navi left\" (click)=\"nextPhoto(prevId)\" *ngIf=\"prevId != undefined\"\r\n          >\r\n            <i class=\"fa fa-angle-left\"></i>\r\n          </div>\r\n          <div class=\"each-navi right\" (click)=\"nextPhoto(nextId)\" *ngIf=\"nextId != undefined\"\r\n          >\r\n            <i class=\"fa fa-angle-right\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading && !error\" class=\"profile-content\">\r\n  <div class=\"boxIn_rit bsProfile\">\r\n      \t<div class=\"cprofile\">\r\n          \t<div class=\"cprof1\">\r\n  \t\t\t\t<div class=\"cprof2\">\r\n                  \t<img src=\"{{user.user.profile_image}}\">\r\n                  </div><!--cprof2-->\r\n              </div><!--cprof1-->\r\n          </div><!--cprofile-->\r\n          <div class=\"profStatus\">\r\n              <h2>{{user.user.full_name}}</h2>\r\n              <!--<p>{{user.title}}</p>-->\r\n          </div><!--profStatus-->\r\n          <div class=\"prof_info\">\r\n          \t<div class=\"w100\">\r\n  \t\t\t\t<label>Email</label>\r\n                  <p>{{user.user.email}}</p>\r\n              </div><!--w100-->\r\n              <div class=\"w100\">\r\n  \t\t\t\t<label>Mobile</label>\r\n                  <p>{{user.mobile}}</p>\r\n              </div><!--w100-->\r\n              <div class=\"w100\">\r\n  \t\t\t\t<label>Skill Level</label>\r\n                  <p>{{user.skill_level}}</p>\r\n              </div><!--w100-->\r\n              <div class=\"w100 bio\">\r\n  \t\t\t\t<label>Bio</label>\r\n                  <p>{{user.bio}}</p>\r\n              </div><!--w100-->\r\n              <div class=\"w100 mrgbot30\">\r\n  \t\t\t\t<label>Skills</label>\r\n                  <div class=\"w100\">\r\n                  \t<!-- <a class=\"butn clr1\" *ngFor=\"let skill of user.skills\">{{skill}}</a> -->\r\n                  </div><!--w100-->\r\n              </div><!--w100-->\r\n          </div><!--prof_info-->\r\n          <div class=\"smallPics\" *ngIf=\"user.imgGallery\">\r\n  \t\t\t    <a *ngFor=\"let img of user.imgGallery\"><img src=\"{{img}}\"></a>\r\n          </div><!--smallPics-->\r\n          <div class=\"prof_info\" *ngIf=\"user.event\">\r\n          \t<span>upcoming Events</span>\r\n          \t<div class=\"w100\" *ngFor=\"let event of user.upcommingEvents\">\r\n    \t\t    <label>{{event.title}}</label>\r\n                <p>{{event.date}}</p>\r\n            </div><!--w100-->\r\n          </div><!--prof_info-->\r\n  </div><!--boxIn_rit-->\r\n  <grand-child-tabs [tabsHeads]='tabsHead'></grand-child-tabs>\r\n</div>\r\n"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div class=\"box_hed\">\r\n  <p *ngIf=\"!dating\">Recommended</p>\r\n  <p *ngIf=\"dating\">Featured Dating</p>\r\n  <a>Show All</a>\r\n</div>\r\n<div *ngFor=\"let recommend of recommends\">\r\n  <div class=\"reportList\" *ngIf=\"!jobs && !dating\">\r\n    <p>\r\n      {{recommend.title}}\r\n      <img src=\"{{recommend.icon1}}\" class=\"img-responsive ic1\">\r\n      <img src=\"{{recommend.icon2}}\" class=\"img-responsive ic2\">\r\n    </p>\r\n    <span>{{recommend.desc}}</span>\r\n  </div>\r\n  <div *ngIf=\"jobs\" class=\"reportList2\">\r\n    <p>{{recommend.title}}</p>\r\n    <img class=\"ic11\" src=\"{{recommend.icon1}}\">\r\n    <img class=\"ic22\" src=\"{{recommend.icon2}}\">\r\n    <span>{{recommend.company}}</span>\r\n    <span>{{recommend.desc}}</span>\r\n  </div>\r\n  <div *ngIf=\"dating\" class=\"reportList2\">\r\n    <p>{{recommend.name}}</p>\r\n    <img class=\"ic11\" src=\"../../../assets/{{recommend.icon1}}\">\r\n    <img class=\"ic22\" src=\"../../../assets/{{recommend.icon2}}\">\r\n    <span>{{recommend.lang}}</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<bs-flash [close]=\"close\" [content]=\"content\" [success]=\"success\" [fail]=\"fail\"></bs-flash>\r\n<section id=\"widget-grid\" class=\"assumble\">\r\n\t<article class=\"col-sm-12 sortable-grid ui-sortable\">\r\n    <ul class=\"nav nav-tabs pull-left child-tabs\" id=\"myTab\">\r\n      <child-tabs [childTabs]=\"childTabs\" (update)=\"updateValue($event)\"></child-tabs>\r\n    </ul>\r\n\t\t<div class=\"child-tabs-content\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<div class=\"stream-content\">\r\n  <grand-child-tabs [tabsHeads]='tabsHead'></grand-child-tabs>\r\n  <div class=\"boxIn_rit\">\r\n    <div class=\"reportHed\">\r\n      <bs-recommended [recUrl]=\"recUrl\"></bs-recommended>\r\n      <bs-adz [adz]=\"adz\"></bs-adz>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "<div class=\"friends-content photo-content video-content\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"heading col-sm-6\">\r\n      <h4>Videos</h4>\r\n    </div>\r\n    <div class=\"col-sm-6 mybuttons\">\r\n      <div class=\"buttons\">\r\n          <label class=\"upload-button\">\r\n            <input type=\"file\"\r\n                  class=\"hidden\"\r\n                  ngFileSelect\r\n                  [options]=\"options\"\r\n                  (onUpload)=\"handleUpload($event)\">\r\n            Upload Video\r\n          </label>\r\n      </div>\r\n    </div>\r\n    <bs-loader [loading]=\"loading\" [error]=\"error\"></bs-loader>\r\n    <div class=\"videos-here col-sm-12\" *ngIf=\"videos != ''\">\r\n      <div class=\"superbox-list\" *ngFor=\"let video of videos\">\r\n        <img src=\"{{video.thumbnailUrl}}\" class=\"img-responsive\" (click)=\"model(video)\" data-toggle=\"modal\" data-target=\"#videoModel\">\r\n      </div>\r\n    </div>\r\n<bs-videomodel [content]=\"videoContent\"></bs-videomodel>"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tweets works!\r\n</p>\r\n"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"videoModel\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body photoModel\">\r\n        <div class=\"main-image\">\r\n          <vg-player *ngIf=\"content != '' && content != undefined\">\r\n            <vg-overlay-play></vg-overlay-play>\r\n            <vg-buffering></vg-buffering>\r\n\r\n            <vg-scrub-bar>\r\n                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n                <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n            </vg-scrub-bar>\r\n\r\n            <vg-controls>\r\n                <vg-play-pause></vg-play-pause>\r\n                <vg-playback-button></vg-playback-button>\r\n\r\n                <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n                <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\r\n\r\n                <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n                <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n                <vg-track-selector></vg-track-selector>\r\n                <vg-mute></vg-mute>\r\n                <vg-volume></vg-volume>\r\n\r\n                <vg-fullscreen></vg-fullscreen>\r\n            </vg-controls>\r\n\r\n            <video vgMedia #media id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n                <source [src]=\"content.publicUrl\">\r\n            </video>\r\n          </vg-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_service__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(router, appService, authService) {
        this.router = router;
        this.appService = appService;
        this.authService = authService;
        this.loggedIn = false;
    }
    AuthGuardService.prototype.canActivate = function () {
        this.username = window.localStorage.getItem('username');
        this.token = window.localStorage.getItem('token');
        if (this.username && this.token) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('token');
            return false;
        }
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Project/shaful/shaful-frontend/src/auth-guard.service.js.map

/***/ })

},[1235]);
//# sourceMappingURL=main.bundle.map