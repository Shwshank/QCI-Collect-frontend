webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/ngx-pipes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_form_form_component__ = __webpack_require__("../../../../../src/app/home/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_form_form_builder_form_builder_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_form_form_builder_form_modal_form_modal_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_form_form_builder_input_text_input_text_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-text/input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_form_form_builder_input_password_input_password_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-password/input-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_form_form_builder_input_email_input_email_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-email/input-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_form_form_builder_input_number_input_number_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-number/input-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_form_form_builder_input_textarea_input_textarea_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_form_form_builder_input_date_input_date_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-date/input-date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_form_form_builder_input_phone_input_phone_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_form_form_builder_input_time_input_time_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-time/input-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_form_form_builder_input_radio_input_radio_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_form_form_builder_input_checkbox_input_checkbox_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_form_form_builder_input_dropdown_input_dropdown_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_form_form_builder_input_slider_input_slider_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_form_form_builder_input_file_input_file_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-file/input-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_form_form_builder_input_break_input_break_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-break/input-break.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_ZAuthGuard__ = __webpack_require__("../../../../../src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_form_form_builder_template_tab_content_template_tab_content_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__home_organisation_assessor_assessor_component__ = __webpack_require__("../../../../../src/app/home/organisation/assessor/assessor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__home_organisation_user_user_component__ = __webpack_require__("../../../../../src/app/home/organisation/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_project_project_component__ = __webpack_require__("../../../../../src/app/home/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__home_organisation_organisation_component__ = __webpack_require__("../../../../../src/app/home/organisation/organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__home_response_response_component__ = __webpack_require__("../../../../../src/app/home/response/response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__home_response_response_table_response_table_component__ = __webpack_require__("../../../../../src/app/home/response/response-table/response-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__home_dashboard_ng2_toastr_custom_option__ = __webpack_require__("../../../../../src/app/home/dashboard/ng2-toastr-custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__home_form_form_builder_input_camera_input_camera_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__home_form_form_builder_input_video_input_video_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/input-video/input-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__home_organisation_teams_teams_component__ = __webpack_require__("../../../../../src/app/home/organisation/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__home_project_graph2_graph2_component__ = __webpack_require__("../../../../../src/app/home/project/graph2/graph2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__home_project_graph1_graph1_component__ = __webpack_require__("../../../../../src/app/home/project/graph1/graph1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__home_project_graph3_graph3_component__ = __webpack_require__("../../../../../src/app/home/project/graph3/graph3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_form_form_builder_form_builder_component__["a" /* FormBuilderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_form_form_builder_form_modal_form_modal_component__["a" /* FormModalComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_form_form_builder_input_text_input_text_component__["a" /* InputTextComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_form_form_builder_input_password_input_password_component__["a" /* InputPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_form_form_builder_input_email_input_email_component__["a" /* InputEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_form_form_builder_input_number_input_number_component__["a" /* InputNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_form_form_builder_input_textarea_input_textarea_component__["a" /* InputTextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_form_form_builder_input_date_input_date_component__["a" /* InputDateComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_form_form_builder_input_phone_input_phone_component__["a" /* InputPhoneComponent */],
            __WEBPACK_IMPORTED_MODULE_27__home_form_form_builder_input_time_input_time_component__["a" /* InputTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__home_form_form_builder_input_radio_input_radio_component__["a" /* InputRadioComponent */],
            __WEBPACK_IMPORTED_MODULE_29__home_form_form_builder_input_checkbox_input_checkbox_component__["a" /* InputCheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_30__home_form_form_builder_input_dropdown_input_dropdown_component__["a" /* InputDropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_31__home_form_form_builder_input_slider_input_slider_component__["a" /* InputSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__home_form_form_builder_input_file_input_file_component__["a" /* InputFileComponent */],
            __WEBPACK_IMPORTED_MODULE_33__home_form_form_builder_input_break_input_break_component__["a" /* InputBreakComponent */],
            __WEBPACK_IMPORTED_MODULE_36__home_form_form_builder_template_tab_content_template_tab_content_component__["a" /* TemplateTabContentComponent */],
            __WEBPACK_IMPORTED_MODULE_37__home_organisation_assessor_assessor_component__["a" /* AssessorComponent */],
            __WEBPACK_IMPORTED_MODULE_38__home_organisation_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_39__home_project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_40__home_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_41__home_organisation_organisation_component__["a" /* OrganisationComponent */],
            __WEBPACK_IMPORTED_MODULE_42__home_response_response_component__["a" /* ResponseComponent */],
            __WEBPACK_IMPORTED_MODULE_43__home_response_response_table_response_table_component__["a" /* ResponseTableComponent */],
            __WEBPACK_IMPORTED_MODULE_45__home_form_form_builder_input_camera_input_camera_component__["a" /* InputCameraComponent */],
            __WEBPACK_IMPORTED_MODULE_46__home_form_form_builder_input_video_input_video_component__["a" /* InputVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_47__home_organisation_teams_teams_component__["a" /* TeamsComponent */],
            __WEBPACK_IMPORTED_MODULE_48__home_project_graph2_graph2_component__["a" /* Graph2Component */],
            __WEBPACK_IMPORTED_MODULE_49__home_project_graph1_graph1_component__["a" /* Graph1Component */],
            __WEBPACK_IMPORTED_MODULE_50__home_project_graph3_graph3_component__["a" /* Graph3Component */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__["a" /* NgxEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_pipes__["a" /* NgPipesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_34__app_routes__["a" /* routes */], { useHash: true }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__service_ZAuthGuard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__service_ProjectService__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_20__service_APIService__["a" /* APIService */],
            { provide: __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_44__home_dashboard_ng2_toastr_custom_option__["a" /* CustomOption */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__ = __webpack_require__("../../../../../src/app/service/ZAuthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_form_form_component__ = __webpack_require__("../../../../../src/app/home/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_form_form_builder_form_builder_component__ = __webpack_require__("../../../../../src/app/home/form/form-builder/form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_project_project_component__ = __webpack_require__("../../../../../src/app/home/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_organisation_organisation_component__ = __webpack_require__("../../../../../src/app/home/organisation/organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_response_response_component__ = __webpack_require__("../../../../../src/app/home/response/response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_response_response_table_response_table_component__ = __webpack_require__("../../../../../src/app/home/response/response-table/response-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'form', component: __WEBPACK_IMPORTED_MODULE_1__home_form_form_component__["a" /* FormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'formBuilder', component: __WEBPACK_IMPORTED_MODULE_2__home_form_form_builder_form_builder_component__["a" /* FormBuilderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'response', component: __WEBPACK_IMPORTED_MODULE_6__home_response_response_component__["a" /* ResponseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'org', component: __WEBPACK_IMPORTED_MODULE_5__home_organisation_organisation_component__["a" /* OrganisationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'resTable', component: __WEBPACK_IMPORTED_MODULE_7__home_response_response_table_response_table_component__["a" /* ResponseTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
            { path: 'proj', component: __WEBPACK_IMPORTED_MODULE_3__home_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZAuthGuard__["a" /* AuthGuard */]] },
        ] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '/login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dash.js":
/***/ (function(module, exports) {

//  **Navigation js
$(function(){
    "use strict";
    $(".fa-bars").click(function(){
        //$(".black-shadow").addClass("active");
        $(this).siblings(".fa-times").addClass("active");
        $(this).removeClass("active");
        $(this).parents("body").removeClass("left-menu-close");
    });
    $(".fa-times").click(function(){
        //$(".black-shadow").removeClass("active");
        $(this).siblings(".fa-bars").addClass("active");
        $(this).removeClass("active");
        $(this).parents("body").addClass("left-menu-close");
    });
});
//  **Navigation Mobile js
$(function(){
"use strict";
    if ( window.innerWidth <= 1024 ) {
        $("body").addClass("left-menu-close");
        $('.navbar-toggleable-md').find(".fa-times").removeClass("active");
        $('.navbar-toggleable-md').find(".fa-bars").addClass("active");
        $(".nav-link").click(function(){
            $('body').addClass('left-menu-close');
            $('.navbar-toggleable-md').find(".fa-times").removeClass("active");
            $('.navbar-toggleable-md').find(".fa-bars").addClass("active");
        });
        $(document).on("mouseup touchend", function (e) {
            //"use strict";
            if(!$('body').hasClass('left-menu-close')){
                var fc = $(".slider-fix");
                if(!fc.is(e.target)&&fc.has(e.target).length===0){
                    $('body').addClass('left-menu-close');
                    $('.navbar-toggleable-md').find(".fa-times").removeClass("active");
                    $('.navbar-toggleable-md').find(".fa-bars").addClass("active");    
                }
            }
        });
    }
});

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"row navbar navbar-toggleable-md navbar-inverse bg-primary sticky-top col-sm-12 p-0 m-0\">\n  <div class=\"text-left pl-0 cl2\">\n    <i class=\"fa fa-bars text-white text-center\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-times text-white text-center active\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"text-center cl8 pt-2 pb-3\">\n    <a class=\"navbar-brand p-0 d-block\" href=\"#\">\n      <h3 style=\"margin-top:0px; margin-bottom:0px\" >QCI Collect</h3>\n    </a>\n  </div>\n  <div class=\"text-right cl2\">\n    <i class=\"fa fa-ellipsis-v text-white text-center\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#userprofile\"></i>\n  </div>\n</nav>\n\n<div class=\"row justify-content-center m-0 frame\">\n  <div class=\"black-shadow\"></div><!-- active-->\n  <div class=\"col-lg-2 slider-fix p-0\">\n    <ul class=\"nav flex-column text-left \" role=\"tablist\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\"  (click)=\"navClick('1')\" >\n          <i class=\"fa fa-home fa-6\" aria-hidden=\"true\"></i>\n          <span>Home</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link \" [routerLink]=\"['/form']\"  (click)=\"navClick('2')\">\n          <i class=\"fa fa-file-text fa-6\" aria-hidden=\"true\"></i>\n          <span>Forms</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link \" [routerLink]=\"['/response']\"  (click)=\"navClick('3')\">\n          <i class=\"fa fa-pencil-square-o fa-6\" aria-hidden=\"true\"></i>\n          <span>Response</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link \" [routerLink]=\"['/org']\"  (click)=\"navClick('4')\">\n          <i class=\"fa fa-users fa-6\" aria-hidden=\"true\"></i>\n          <span>Organisation</span>\n        </a></li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" style=\"border-bottom:none;\"></a></li>\n      <li class=\"nav-item p-1 pos-bl text-center\">@2018, Quality Quancil of India | All Rights Reserved</li>\n    </ul>\n  </div>\n  <div class=\"col-lg-10 col-sm-12 wrap-cont\" style=\"padding-bottom:70px\">\n      <router-outlet></router-outlet>\n      <div class=\"modal fade\" id=\"userprofile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">User Profile</h5>\n            </div>\n            <div class=\"modal-body text-center\">\n              <label class=\"row ml-0 mr-0 mb-3\">\n                <span class=\"col-5 text-left pt-2 pl-0\">Old Password:</span>\n                <input type=\"text\" name=\"\" value=\"\" class=\"col-7 form-control\" />\n              </label>\n              <label class=\"row ml-0 mr-0 mb-3\">\n                <span class=\"col-5 text-left pt-2 pl-0\">New Password:</span>\n                <input type=\"text\" name=\"\" value=\"\" class=\"col-7 form-control\" />\n              </label>\n              <label class=\"row ml-0 mr-0 mb-3\">\n                 <span class=\"col-5 text-left pt-2 pl-0\">Match New Password:</span>\n                 <input type=\"text\" name=\"\" value=\"\" class=\"col-7 form-control\" />\n              </label>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary col-sm-4 pt-3 pb-3\">Save Changes</button>\n              <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n              <i class=\"fa fa-sign-out fa-6 ml-5 text-right text-danger\" style=\"margin-top:-10px;\" aria-hidden=\"true\" (click)=\"logout()\" ></i>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n\n.divheight {\n  height: 95vh;\n  border: 1px solid gray; }\n\n.headerBar {\n  background-color: #0275d8;\n  height: 1.8rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_js__ = __webpack_require__("../../../../../src/app/home/dashboard/dash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dash_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(toastr, vcr, projectService) {
        var _this = this;
        this.toastr = toastr;
        this.projectService = projectService;
        this.toastr.setRootViewContainerRef(vcr);
        this.sub1 = this.projectService.emitSuccessRes.subscribe(function (res) {
            _this.showSuccess(res);
        });
        this.sub2 = this.projectService.emitErrorRes.subscribe(function (res) {
            _this.showError(res);
        });
        this.sub3 = this.projectService.emitWarningRes.subscribe(function (res) {
            _this.showWarning(res);
        });
        this.sub4 = this.projectService.emitInfoRes.subscribe(function (res) {
            _this.showInfo(res);
        });
    }
    DashboardComponent.prototype.navClick = function (pos) {
        console.log(pos);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // this.showCustom();
    };
    DashboardComponent.prototype.showSuccess = function (res) {
        this.toastr.success(null, res);
    };
    DashboardComponent.prototype.showError = function (res) {
        this.toastr.error(null, res);
    };
    DashboardComponent.prototype.showWarning = function (res) {
        this.toastr.warning(null, res);
    };
    DashboardComponent.prototype.showInfo = function (res) {
        this.toastr.info(null, res);
    };
    DashboardComponent.prototype.showCustom = function () {
        this.toastr.custom('<span style="color: red">Message in red.</span>', 'null', { enableHTML: true });
    };
    DashboardComponent.prototype.logout = function () {
        $("#userprofile").modal('hide');
        this.projectService.logout();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/dashboard/ng2-toastr-custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'fade'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-center';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=ng2-toastr-custom-option.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-builder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n  margin-top: 10px;\n  min-height: 750px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container form-container text-center col-sm-8 mt-4 cbx\" style=\"background:#fff;\">\n  <br/>\n  <!-- <h3>QCI Form Builder &reg;</h3> -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\"  >\n      <h5>{{name}}</h5>\n      <p>{{project_name}}</p>\n      <button type=\"button\" class=\"btn btn-primary col-sm-4 col-md-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add element</button>\n      <br/><br/>\n      <div *ngIf='!displayPublish' style=\"font-size:4rem;margin-top:30px;color:#b1b1b1\" >\n        <p>Form elements will be displayed here!</p>\n      </div>\n      <div *ngFor='let json of jsonArray; let i = index' style=\" max-height:750px; overflow-y:auto; overflow-x:hidden;\">\n        <div *ngIf=\"json.type == 'location'\" >\n          <input type=\"checkbox\" name=\"checkbox\" checked disabled> &nbsp; Form submition location will be shared by default &nbsp; <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(i)' ></i>\n        </div>\n        <div *ngIf=\"json.type == 'text'\" >\n          <app-input-text name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} >  </app-input-text>\n        </div>\n        <div *ngIf=\"json.type == 'password'\" >\n          <app-input-password name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} >  </app-input-password>\n        </div>\n        <div *ngIf=\"json.type == 'email'\" >\n          <app-input-email name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} >  </app-input-email>\n        </div>\n        <div *ngIf=\"json.type == 'number'\" >\n          <app-input-number name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} rangeFrom={{json.rangeFrom}} rangeTo={{json.rangeTo}} >  </app-input-number>\n        </div>\n        <div *ngIf=\"json.type == 'phone'\" >\n          <app-input-phone name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} >  </app-input-phone>\n        </div>\n        <div *ngIf=\"json.type == 'textarea'\" >\n          <app-input-textarea name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} >  </app-input-textarea>\n        </div>\n        <div *ngIf=\"json.type == 'date'\" >\n          <app-input-date name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} rangeFrom={{json.rangeFrom}} rangeTo={{json.rangeTo}} >  </app-input-date>\n        </div>\n        <div *ngIf=\"json.type == 'time'\" >\n          <app-input-time name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} rangeFrom={{json.rangeFrom}} rangeTo={{json.rangeTo}} >  </app-input-time>\n        </div>\n        <div *ngIf=\"json.type == 'radio'\" >\n          <app-input-radio name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [option]=json.option >  </app-input-radio>\n        </div>\n        <div *ngIf=\"json.type == 'checkbox'\" >\n          <app-input-checkbox name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [option]=json.option [values]=json.values>  </app-input-checkbox>\n        </div>\n        <div *ngIf=\"json.type == 'dropdown'\" >\n          <app-input-dropdown name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [option]=json.option >  </app-input-dropdown>\n        </div>\n        <div *ngIf=\"json.type == 'slider'\" >\n          <app-input-slider name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} rangeFrom={{json.rangeFrom}} rangeTo={{json.rangeTo}} >  </app-input-slider>\n        </div>\n        <div *ngIf=\"json.type == 'file'\" >\n          <app-input-file name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [fileTypes]=json.fileTypes >  </app-input-file>\n        </div>\n        <div *ngIf=\"json.type == 'camera'\" >\n          <app-input-camera name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [fileTypes]=json.fileTypes >  </app-input-camera>\n        </div>\n        <div *ngIf=\"json.type == 'video'\" >\n          <app-input-video name={{json.name}} id={{i}} value={{json.value}} disabled={{disabledAll}} [fileTypes]=json.fileTypes >  </app-input-video>\n        </div>\n        <div *ngIf=\"json.type == 'break'\" >\n          <app-input-break name={{json.name}} id={{i}}>  </app-input-break>\n        </div>\n      </div>\n      <br/>\n      <div *ngIf='displayPublish' >\n          <button *ngIf='displayPublishForm' type=\"button\" class=\"btn btn-success\" (click)='publishForm()'> {{sumbitForm}} </button>\n      </div>\n      <br/>\n      <div *ngIf='displayPublish' >\n          <button *ngIf='displayPublishTemp' type=\"button\" class=\"btn btn-success\" (click)='publishTemplate()'> {{sumbitTemp}} </button>\n      </div>\n      <br/>\n    </div>\n  </div>\n</div>\n<!-- form element modal starts here -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content adf\">\n      <app-form-modal></app-form-modal>\n    </div>\n  </div>\n</div>\n<!-- form element modal ends here -->\n<!-- New form modal starts here -->\n<div class=\"modal fade\" id=\"newFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Form</h5>\n      </div>\n      <div class=\"modal-body\" style=\"height:200px;  \">Form Name:\n        <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=newFormName>\n        <br/>\n        Project:\n        <select [(ngModel)]=\"projectAssociate\" class=\"col-4 form-control\">\n          <option *ngFor='let opt of projectArray; let i=i' [ngValue]=opt  >{{opt.name}}</option>\n        </select>\n        <!-- <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=newFormProjectName> -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='conformForm()'  data-dismiss=\"modal\" >Publish new Form</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"newTempModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Template</h5>\n      </div>\n      <div class=\"modal-body\" style=\"height:200px;  \">\n        Template Name:\n        <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=newTempName>\n        <br />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary col-sm-5 pt-3 pb-3\" (click)='conformTemp()'  data-dismiss=\"modal\" >Save new Template</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- New template modal ends here -->\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormBuilderComponent = (function () {
    function FormBuilderComponent(projectService, activatedRoute, router) {
        var _this = this;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.jsonArray = [];
        this.disabledAll = false;
        this.displayPublish = false;
        this.tempID = undefined;
        this.formID = undefined;
        this.sumbitForm = 'Save as Form';
        this.sumbitTemp = 'Save as Template';
        this.newFormName = '';
        this.newFormProjectName = '';
        this.newTempName = '';
        this.displayPublishForm = true;
        this.displayPublishTemp = true;
        this.projectArray = [];
        this.existingForm = [];
        this.existingTemp = [];
        this.sub1 = this.projectService.emitTemplateWithID.subscribe(function (res) {
            _this.existingTemp = res;
            console.log(_this.existingTemp);
            _this.tempDetails = res.Details;
            console.log(_this.tempDetails);
            _this.name = res.Details.name;
            _this.project_name = res.Details.project;
            _this.jsonArray = res.Elements;
            _this.sumbitTemp = "Modify Template";
            if (_this.jsonArray.length > 0) {
                _this.displayPublish = true;
            }
            else {
                _this.displayPublish = false;
            }
            _this.displayPublishTemp = false;
        });
        this.sub2 = this.projectService.emitFormWithID.subscribe(function (res) {
            _this.existingForm = res;
            console.log(_this.existingForm);
            _this.formDetails = res.Details;
            console.log(_this.formDetails);
            _this.jsonArray = res.Elements;
            _this.name = res.Details.name;
            _this.project_name = res.Details.project;
            _this.sumbitForm = "Modify Form";
            if (_this.jsonArray.length > 0) {
                _this.displayPublish = true;
            }
            else {
                _this.displayPublish = false;
            }
            _this.displayPublishForm = false;
        });
        this.sub3 = this.projectService.emitFormElement.subscribe(function (res) {
            // console.log(res);
            res = JSON.stringify(res);
            res = JSON.parse(res);
            _this.jsonArray.push(res);
            console.log(_this.jsonArray);
            _this.displayPublish = true;
        });
        this.sub4 = this.projectService.emitFormElementTemp.subscribe(function (res) {
            // console.log(res);
            res = JSON.stringify(res);
            res = JSON.parse(res);
            _this.jsonArray = _this.jsonArray.concat(res);
            // console.log(this.jsonArray);
            _this.displayPublish = true;
        });
        this.sub5 = this.projectService.emitDeleteElement.subscribe(function (res) {
            _this.jsonArray.splice(res, 1);
            if (_this.jsonArray.length == 0) {
                _this.displayPublish = false;
                // console.log(this.displayPublish);
            }
            localStorage.setItem('form_template', JSON.stringify(_this.jsonArray));
        });
        // this.sub6 = this.projectService.emitUpElement.subscribe((res)=>{
        //
        //   let temp1 = this.jsonArray[(parseInt(res)-1)];
        //   this.jsonArray.splice((parseInt(res)-1),1);
        //   this.jsonArray.splice(parseInt(res), 0, temp1);
        // });
        //
        // this.sub7 = this.projectService.emitDownElement.subscribe((res)=>{
        //
        //   if(res < (this.jsonArray.length-1)) {
        //
        //     let temp2 = this.jsonArray[(parseInt(res)+1)];
        //     this.jsonArray.splice((parseInt(res)+1),1);
        //     this.jsonArray.splice(parseInt(res), 0, temp2);
        //   }
        //
        // });
        this.sub8 = this.projectService.emitProject.subscribe(function (res) {
            _this.projectArray = res;
        });
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.formID = params.formID;
            _this.tempID = params.templateID;
            // console.log(this.formID);
            // console.log(this.tempID);
            if (_this.formID != undefined) {
                _this.projectService.getFormArrayWithID(_this.formID);
            }
            if (_this.tempID != undefined) {
                _this.projectService.getTemplateArrayWithID(_this.tempID);
            }
        });
    };
    FormBuilderComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    FormBuilderComponent.prototype.publishForm = function () {
        if (this.formID != undefined) {
            var updatedData = this.jsonArray;
            this.projectService.updateFormArray(this.formID, updatedData);
        }
        else {
            $("#newFormModal").modal('show');
            this.projectService.getProject();
        }
        // console.log(this.projectService.formArray);
    };
    FormBuilderComponent.prototype.publishTemplate = function () {
        if (this.tempID != undefined) {
            var updatedData = this.jsonArray;
            this.projectService.updateTempArray(this.tempID, updatedData);
        }
        else {
            $("#newTempModal").modal('show');
        }
        // console.log(this.projectService.templateArray);
    };
    FormBuilderComponent.prototype.conformForm = function () {
        var id = this.projectService.calFormArrayLength();
        var cid = this.projectService.cid();
        var dataToPush = { Details: { name: this.newFormName, rule: 'None', project: this.projectAssociate.name, projectcid: this.projectAssociate.cid, status: 'Offline', cid: cid }, Elements: this.jsonArray, Rules: [] };
        this.projectService.incFromCount(this.projectAssociate.cid);
        this.projectService.pushIntoForm(dataToPush);
        this.router.navigate(['/form']);
    };
    FormBuilderComponent.prototype.conformTemp = function () {
        var id = this.projectService.calTemplateArrayLength();
        var cid = this.projectService.cid();
        var dataToPush = { Details: { name: this.newTempName, rule: 'None', project: 'N/A', cid: cid }, Elements: this.jsonArray };
        this.projectService.pushIntoTemplate(dataToPush);
        this.router.navigate(['/form']);
    };
    FormBuilderComponent.prototype.ngOnDestroy = function () {
        if (this.tempDetails) {
            console.log(this.existingTemp);
            this.projectService.updateTempJson(this.existingTemp);
        }
        if (this.formDetails) {
            console.log(this.existingForm);
            this.projectService.updateFormJson(this.existingForm);
        }
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        // this.sub6.unsubscribe();
        // this.sub7.unsubscribe();
        this.sub8.unsubscribe();
    };
    return FormBuilderComponent;
}());
FormBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-builder',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/form-builder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/form-builder.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FormBuilderComponent);

var _a, _b, _c;
//# sourceMappingURL=form-builder.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-height {\n  height:340px;\n  overflow-y:auto;\n}\n.slider-bg{\n  background-color: #efefef;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- <div class=\"modal-header\">\n  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Form elements</h5>\n\n</div> -->\n<div class=\"modal-body\">\n  <div class=\"form-group\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#m1\" role=\"tab\" (click)='inputType(\"text\")'>Inputs</a></li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#m2\" role=\"tab\" (click)='inputType(\"file\")'>File & Media</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#m3\" role=\"tab\" (click)='inputType(\"break\")'>Interface</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#m4\" role=\"tab\" (click)='inputType(\"template\")'>Template</a>\n      </li>\n    </ul>\n    <div class=\"tab-content mt-5\">\n      <!-- Input tab -->\n      <div class=\"tab-pane active\" id=\"m1\" role=\"tabpanel\" >\n        <div class=\"\">\n          <div class=\"row justify-content-center m-0\">\n            <div class=\"col-3 modal-height slider-bg\" style=\"background:#fff;height:290px;\">\n              <!-- Nav tabs -->\n              <ul class=\"nav flex-column text-left \" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#s1\" role=\"tab\" (click)='inputType(\"text\")'>Text</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s2\" role=\"tab\" (click)='inputType(\"password\")'>Password</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s3\" role=\"tab\" (click)='inputType(\"email\")'>Email</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s4\" role=\"tab\" (click)='inputType(\"number\")'>Number</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s5\" role=\"tab\" (click)='inputType(\"phone\")'>Pnone</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s6\" role=\"tab\" (click)='inputType(\"textarea\")'>Textarea</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s7\" role=\"tab\" (click)='inputType(\"date\")'>Date</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s8\" role=\"tab\"  (click)='inputType(\"time\")'>Time</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s9\" role=\"tab\" (click)='inputType(\"radio\")'> Radio</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s10\" role=\"tab\" (click)='inputType(\"checkbox\")'>Checkbox</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s11\" role=\"tab\" (click)='inputType(\"dropdown\")'>Dropdown</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link \" data-toggle=\"tab\" href=\"#s12\" role=\"tab\" (click)='inputType(\"slider\")'>Slider</a>\n                </li>\n              </ul>\n            </div>\n\n            <div class=\"col-9 modal-height\">\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n\n                <!-- Text Input s1-->\n                <div class=\"tab-pane active\" id=\"s1\" role=\"tabpanel\">\n                  <h4>Text Element</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name'  placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Text Input s2-->\n                <div class=\"tab-pane\" id=\"s2\" role=\"tabpanel\">\n\n                  <h4>Password input element</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"required\"   (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Email Input s3 -->\n                <div class=\"tab-pane\" id=\"s3\" role=\"tabpanel\">\n\n                  <h4>Email input element</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"required\"   (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Number Input s4 -->\n                <div class=\"tab-pane\" id=\"s4\" role=\"tabpanel\">\n                  <h4>Number Input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Range from</label>\n                    <div class=\"col-3\">\n                      <input class=\"form-control form-control-sm\" type=\"number\" placeholder=\"\"  [(ngModel)]='rangeFrom' >\n                    </div>\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\"> To</label>\n                    <div class=\"col-3\">\n                      <input class=\"form-control form-control-sm\" type=\"number\" placeholder=\"\" [(ngModel)]='rangeTo' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\"  (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- phone number s5 -->\n                <div class=\"tab-pane\" id=\"s5\" role=\"tabpanel\">\n                  <h4>Phone no. Input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Textarea Input s6 -->\n                <div class=\"tab-pane\" id=\"s6\" role=\"tabpanel\">\n                  <h4>Textarea</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Date Input s7 -->\n                <div class=\"tab-pane\" id=\"s7\" role=\"tabpanel\">\n                  <h4>Date Input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-6 col-form-label\">Date range from</label>\n                    <div class=\"col-6\">\n                      <input class=\"form-control form-control-sm\" type=\"date\" placeholder=\"\"  [(ngModel)]='rangeFrom' >\n                    </div>\n                    <label for=\"staticEmail\" class=\"col-6 col-form-label\">To</label>\n                    <div class=\"col-6\">\n                      <input class=\"form-control form-control-sm\" type=\"date\" placeholder=\"\" [(ngModel)]='rangeTo' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Time Input s8 -->\n                <div class=\"tab-pane\" id=\"s8\" role=\"tabpanel\">\n                  <h4>Time Input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-6 col-form-label\">Time range from</label>\n                    <div class=\"col-6\">\n                      <input class=\"form-control form-control-sm\" type=\"time\" placeholder=\"\"  [(ngModel)]='rangeFrom' >\n                    </div>\n                    <label for=\"staticEmail\" class=\"col-6 col-form-label\">To</label>\n                    <div class=\"col-6\">\n                      <input class=\"form-control form-control-sm\" type=\"time\" placeholder=\"\" [(ngModel)]='rangeTo' >\n                    </div>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Radio Input s9 -->\n                <div class=\"tab-pane \" id=\"s9\" role=\"tabpanel\">\n                  <h5>Radio Input</h5>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Inputs </label>\n\n                    <div class=\"col-7\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='opti' placeholder=\"\">\n\n                    </div>\n\n                    <div class=\"col-3\">\n                     <button type=\"button\" (click)=\"addInOptionArray()\">+</button>\n                     <button type=\"button\" (click)=\"truncate()\" >X</button>\n                    </div>\n\n                    <div *ngFor=\"let op of optionArray; let i = index\"  class=\"col-12\" >\n                      <div class=\"row\" >\n                        <div class=\"col-10\" >\n                          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> {{i+1}}. <span style=\"background-color:#d2f5aa\" > {{op}} </span>\n                        </div>\n                        <div class=\"col-2\" >\n                          <button type=\"button\" (click)=\"spliceOptionArray(i)\" >X</button>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-12\">\n                      <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\"> Selected </label>\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='value'>\n                    </div>\n\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Checkbox Input s10 -->\n                <div class=\"tab-pane\" id=\"s10\" role=\"tabpanel\">\n                  <h5>Checkbox Input</h5>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Inputs </label>\n\n                    <div class=\"col-7\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='opti' placeholder=\"\">\n\n                    </div>\n\n                    <div class=\"col-3\">\n                     <button type=\"button\" (click)=\"addInOptionArray()\">+</button>\n                     <button type=\"button\" (click)=\"truncate()\" >X</button>\n                    </div>\n\n                    <div *ngFor=\"let op of optionArray; let i = index\"  class=\"col-12\" >\n                      <div class=\"row\" >\n                        <div class=\"col-10\" >\n                          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> {{i+1}}. <span style=\"background-color:#d2f5aa\" > {{op}} </span>\n                        </div>\n                        <div class=\"col-2\" >\n                          <button type=\"button\" (click)=\"spliceOptionArray(i)\" >X</button>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <!-- <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Checked seperated by comas ','</label>\n                    <div class=\"col-8\">\n                      <textarea class=\"form-control form-control-sm\" rows='2' placeholder=\"\" [(ngModel)]='values' > </textarea>\n                    </div> -->\n\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Checked values</label>\n                    <br>\n                    <div *ngFor='let opt of optionArray; let i=i' >\n                      <label class = \"\">\n\n                         <input #flag type = \"checkbox\"  name=\"checkbox\" value={{opt}} (change)='getVal1(flag.checked,opt)' >\n                         <span class = \"mdl-checkbox__label\"> {{opt}} &nbsp; &nbsp; </span>\n                      </label>\n                    </div>\n\n\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Dropdown Input s11 -->\n                <div class=\"tab-pane\" id=\"s11\" role=\"tabpanel\">\n                  <h5>Dropdown  Input</h5>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Inputs </label>\n\n                    <div class=\"col-7\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='opti' placeholder=\"\">\n                    </div>\n\n                    <div class=\"col-3\">\n                     <button type=\"button\" (click)=\"addInOptionArray()\">+</button>\n                     <button type=\"button\" (click)=\"truncate()\" >X</button>\n                    </div>\n\n                    <div *ngFor=\"let op of optionArray; let i = index\"  class=\"col-12\" >\n                      <div class=\"row\" >\n                        <div class=\"col-10\" >\n                          <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> {{i+1}}. <span style=\"background-color:#d2f5aa\" > {{op}} </span>\n                        </div>\n                        <div class=\"col-2\" >\n                          <button type=\"button\" (click)=\"spliceOptionArray(i)\" >X</button>\n                        </div>\n                      </div>\n                    </div>\n\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Default value</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='value' >\n                    </div>\n\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Slider Input s12 -->\n                <div class=\"tab-pane\" id=\"s12\" role=\"tabpanel\">\n                  <h5>Slider  Input</h5>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Range from</label>\n                    <div class=\"col-3\">\n                      <input class=\"form-control form-control-sm\" type=\"number\" placeholder=\"\"  [(ngModel)]='rangeFrom' >\n                    </div>\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\"> To</label>\n                    <div class=\"col-3\">\n                      <input class=\"form-control form-control-sm\" type=\"number\" placeholder=\"\" [(ngModel)]='rangeTo' >\n                    </div>\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\"> Initial value</label>\n                    <div class=\"col-3\">\n                      <input class=\"form-control form-control-sm\" type=\"number\" placeholder=\"\" [(ngModel)]='value' >\n                    </div>\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"  [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n\n      </div>\n\n      <!-- File & media tab -->\n      <div class=\"tab-pane\" id=\"m2\" role=\"tabpanel\">\n\n        <div class=\"\" >\n          <div class=\"row justify-content-center m-0\" >\n\n            <div class=\"col-3 modal-height slider-bg\" style=\"background:#fff;height:290px;\">\n              <ul class=\"nav flex-column text-left \" role=\"tablist\">\n                <li class=\"nav-item\"><a class=\"nav-link \" data-toggle=\"tab\" href=\"#f1\" role=\"tab\" (click)='inputType(\"file\")'>File </a></li>\n                <li class=\"nav-item\"><a class=\"nav-link \" data-toggle=\"tab\" href=\"#f2\" role=\"tab\" (click)='inputType(\"location\")'>Location </a></li>\n                <li class=\"nav-item\"><a class=\"nav-link \" data-toggle=\"tab\" href=\"#f3\" role=\"tab\" (click)='inputType(\"camera\")'>Camera </a></li>\n                <li class=\"nav-item\"><a class=\"nav-link \" data-toggle=\"tab\" href=\"#f4\" role=\"tab\" (click)='inputType(\"video\")'>Video </a></li>\n              </ul>\n            </div>\n\n            <div class=\"col-9 modal-height\" >\n\n              <div class=\"tab-content\" >\n\n                <!-- File Input f1-->\n                <div class=\"tab-pane active\" id=\"f1\" role=\"tabpanel\">\n                  <h4>File input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name'  placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">File type</label>\n                    <div class=\"col-8\">\n                      <div *ngFor='let opt of fileTypes; let i=i' >\n\n                        <input #flag type=\"checkbox\" value={{opt}} name=\"checkbox\" (change)='getVal(flag.checked,opt)' [checked]='checkVal(opt)'> {{opt}}\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"   [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n\n                </div>\n\n                <!-- Location Input f2-->\n                <div class=\"tab-pane \" id=\"f2\" role=\"tabpanel\">\n                  <h4>Geo Location</h4>\n                  <p>\n                    Get geolocation from where the form will be submitted\n                  </p>\n                  <p>\n                    Geo location will not be visible on the form. Geo location will be displayed on the responce table under column name \"Form submitted location\".\n                  </p>\n                  <br>\n\n                </div>\n\n                <!-- Camera Input f3-->\n                <div class=\"tab-pane \" id=\"f3\" role=\"tabpanel\">\n                  <h4>Camera input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name'  placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    * Captured image will be geo tagged\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"   [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n                <!-- Audio Input f4 -->\n                <div class=\"tab-pane \" id=\"f4\" role=\"tabpanel\">\n                  <h4>Video input</h4>\n                  <br>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name'  placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-4 col-form-label\">Helping Text</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='helptext' placeholder=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Alias</label>\n                    <div class=\"col-10\">\n                      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"\" [(ngModel)]='alias' >\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    * Captured video will be geo tagged\n                  </div>\n\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\"   [checked]=\"required\" (change)='checked()'>\n                        &nbsp; Required\n                    </label>\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n\n      </div>\n\n      <!-- Interface tab -->\n      <div class=\"tab-pane\" id=\"m3\" role=\"tabpanel\">\n        <div class=\"col-sm-12 p-3\">\n          <div class=\"modal-height\" >\n            <h4>Section break</h4>\n            <br>\n            <div class=\"form-group row \" style=\"width:90%\">\n              <label class=\"col-sm-11 col-form-label\">Section break title</label>\n              <div class=\"col-12\">\n                <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]='name'  placeholder=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- Template tab -->\n      <div class=\"tab-pane\" id=\"m4\" role=\"tabpanel\">\n        <app-template-tab-content></app-template-tab-content>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n  <button type=\"button\" class=\"btn btn-primary col-sm-4 pt-3 pb-3\" (click)='addElement()'  data-dismiss=\"modal\" >Add element</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormModalComponent = (function () {
    function FormModalComponent(projectService) {
        this.projectService = projectService;
        this.json = { 'type': 'text' };
        this.required = false; // for resetting the checkbox
        this.option = [];
        this.optionArray = [];
        this.values = [];
        this.resultArray = [];
        this.fileTypes = ['.png', '.doc', '.pdf', '.mp3'];
        this.opti = '';
        this.newElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormModalComponent.prototype.ngOnInit = function () { };
    FormModalComponent.prototype.addInOptionArray = function () {
        console.log(this.opti);
        console.log(this.optionArray);
        this.optionArray.push(this.opti);
        this.opti = "";
    };
    FormModalComponent.prototype.truncate = function () {
        this.opti = "";
    };
    FormModalComponent.prototype.spliceOptionArray = function (id) {
        this.optionArray.splice(id, 1);
    };
    FormModalComponent.prototype.inputType = function (type) {
        this.required = false; // for resetting the checkbox
        this.json.type = type;
        this.value = "";
        this.opti = "";
        this.optionArray = [];
    };
    FormModalComponent.prototype.checked = function () {
        if (this.required) {
            this.required = false;
        }
        else {
            this.required = true;
        }
        console.log(this.required);
    };
    FormModalComponent.prototype.checkVal = function (opt) {
        var flg = false;
        for (var j = 0; j < this.resultArray.length; j++) {
            if (opt == this.resultArray[j]) {
                flg = true;
            }
        }
        if (flg) {
            return true;
        }
        else {
            return false;
        }
    };
    FormModalComponent.prototype.getVal1 = function (flag, opt) {
        var temp = 0;
        var pos = 0;
        if (flag) {
            for (var i = 0; i <= this.values.length; i++) {
                if (this.values[i] == opt) {
                    temp = 1;
                }
            }
            if (temp == 0) {
                this.values.push(opt);
            }
            // console.log(this.resultArray);
        }
        else {
            for (var i = 0; i <= this.values.length; i++) {
                if (this.values[i] == opt) {
                    pos = i;
                    break;
                }
            }
            this.values.splice(pos, 1);
        }
        console.log(this.values);
    };
    FormModalComponent.prototype.getVal = function (flag, opt) {
        var temp = 0;
        var pos = 0;
        if (flag) {
            for (var i = 0; i <= this.resultArray.length; i++) {
                if (this.resultArray[i] == opt) {
                    temp = 1;
                }
            }
            if (temp == 0) {
                this.resultArray.push(opt);
            }
        }
        else {
            for (var i = 0; i <= this.resultArray.length; i++) {
                if (this.resultArray[i] == opt) {
                    pos = i;
                    break;
                }
            }
            this.resultArray.splice(pos, 1);
        }
        // console.log(this.resultArray);
    };
    FormModalComponent.prototype.addElement = function () {
        this.json.required = this.required;
        this.json.hepltext = this.helptext;
        this.json.name = this.name;
        this.json.value = "";
        var now = new Date();
        this.json.cid = now.getTime() + "" + Math.floor(1000 + Math.random() * 9000);
        if (this.json.type === "number" || this.json.type === "date" || this.json.type === "time" || this.json.type === "slider") {
            // console.log('type : number');
            // console.log(this.rangeFrom);
            // console.log(this.rangeTo);
            // this.json.rangeFrom = this.rangeFrom;
            this.json.rangeTo = this.rangeTo;
            this.json.value = this.value;
        }
        if (this.json.type === "radio" || this.json.type === "dropdown") {
            console.log(this.option);
            this.option = this.option;
            this.json.value = this.value;
            this.json.option = this.optionArray;
        }
        if (this.json.type === "checkbox") {
            if (this.values != [] && this.values != "") {
                this.json.values = this.values;
                this.json.value = this.json.values;
            }
            // if(this.option!=[] && this.option!="") {
            //   this.json.option = this.option.split(',');
            // }
            this.json.option = this.optionArray;
            if (this.json.value == undefined || this.json.value == "") {
                this.json.value = [];
            }
            if (this.json.values == undefined || this.json.values == "") {
                this.json.values = [];
            }
        }
        if (this.json.type === "file") {
            this.json.fileTypes = this.resultArray;
        }
        // console.log(this.json);
        this.projectService.emitFormElement.emit(this.json);
        this.name = '';
        this.alias = '';
        this.helptext = '';
        if (this.json.type === "file") {
            this.json.fileTypes = "";
            this.resultArray = [];
        }
        if (this.json.type === "number" || this.json.type === "date" || this.json.type === "time" || this.json.type === "slider") {
            this.json.rangeFrom = "";
            this.json.rangeTo = "";
            this.json.value = "";
            this.value = "";
            this.rangeTo = "";
            this.rangeFrom = "";
        }
        if (this.json.type === "radio" || this.json.type === "checkbox" || this.json.type === "dropdown") {
            this.json.value = "";
            this.json.values = "";
            this.json.option = "";
            this.opti = "";
            this.optionArray = [];
            this.value = "";
            this.values = [];
            this.option = [];
        }
    };
    return FormModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormModalComponent.prototype, "newElement", void 0);
FormModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-modal',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/form-modal/form-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], FormModalComponent);

var _a;
//# sourceMappingURL=form-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-break/input-break.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-break/input-break.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row  text-center\">\n\n  <div class=\"col-10 text-center\" style=\"background-color:#0275d8; height:1.7rem; color: white; \">\n    <p>{{name}}</p>\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-break/input-break.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBreakComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputBreakComponent = (function () {
    function InputBreakComponent(projectService) {
        this.projectService = projectService;
    }
    InputBreakComponent.prototype.ngOnInit = function () { };
    InputBreakComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputBreakComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputBreakComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputBreakComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    return InputBreakComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputBreakComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputBreakComponent.prototype, "name", void 0);
InputBreakComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-break',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-break/input-break.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-break/input-break.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputBreakComponent);

var _a;
//# sourceMappingURL=input-break.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8 text-left\">\n    <input type=\"file\" accept=\"image/*\" capture=\"camera\" />\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputCameraComponent = (function () {
    function InputCameraComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputCameraComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputCameraComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputCameraComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputCameraComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputCameraComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputCameraComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputCameraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputCameraComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputCameraComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputCameraComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "fileTypes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputCameraComponent.prototype, "jsonData", void 0);
InputCameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-camera',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-camera/input-camera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputCameraComponent);

var _a;
//# sourceMappingURL=input-camera.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-6 text-left\">\n    <div *ngFor='let opt of option; let i=i' >\n\n      <input #flag type=\"checkbox\" value={{opt}} name=\"checkbox\" [checked]='checkVal(opt)'> {{opt}}\n\n    </div>\n\n  </div>\n  <div class=\"col-2\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputCheckboxComponent = (function () {
    function InputCheckboxComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.resultArray = [];
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputCheckboxComponent.prototype.ngOnInit = function () {
        this.text = this.value;
        this.resultArray = this.value;
    };
    InputCheckboxComponent.prototype.checkVal = function (opt) {
        var flg = false;
        // console.log(this.values);
        if (this.values != undefined) {
            for (var j = 0; j < this.values.length; j++) {
                if (opt == this.values[j]) {
                    flg = true;
                }
            }
        }
        if (flg) {
            return true;
        }
        else {
            return false;
        }
    };
    InputCheckboxComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputCheckboxComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputCheckboxComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputCheckboxComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputCheckboxComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputCheckboxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputCheckboxComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputCheckboxComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "option", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "values", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputCheckboxComponent.prototype, "jsonData", void 0);
InputCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-checkbox',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-checkbox/input-checkbox.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputCheckboxComponent);

var _a;
//# sourceMappingURL=input-checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-date/input-date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-date/input-date.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-6\">\n    <input class=\"form-control form-control-sm\" type=\"date\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\" [min]=rangeFrom [max]=rangeTo>\n  </div>\n  <div class=\"col-2\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-date/input-date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputDateComponent = (function () {
    function InputDateComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputDateComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputDateComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputDateComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputDateComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputDateComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputDateComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputDateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputDateComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputDateComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputDateComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "rangeFrom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "rangeTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "jsonData", void 0);
InputDateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-date',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-date/input-date.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-date/input-date.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputDateComponent);

var _a;
//# sourceMappingURL=input-date.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-6 text-left\">\n    <select [(ngModel)]=\"selectedValue\" >\n\n      <option *ngFor='let opt of option; let i=i' [ngValue]=opt  [selected]=\"opt == value\">{{opt}}</option>\n\n    </select>\n\n  </div>\n  <div class=\"col-2\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputDropdownComponent = (function () {
    function InputDropdownComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputDropdownComponent.prototype.ngOnInit = function () {
        this.selectedValue = this.value;
    };
    InputDropdownComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputDropdownComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputDropdownComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputDropdownComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputDropdownComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputDropdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputDropdownComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputDropdownComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "option", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputDropdownComponent.prototype, "jsonData", void 0);
InputDropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-dropdown',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-dropdown/input-dropdown.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputDropdownComponent);

var _a;
//# sourceMappingURL=input-dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-email/input-email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-email/input-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-3 col-form-label text-left pt-3\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-5\">\n    <input class=\"form-control mt-1 mb-1\" type=\"email\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\">\n  </div>\n  <div class=\"col-4 text-left\">\n    <i class=\"fa fa-arrow-up text-primary p-3\" aria-hidden=\"true\" (click)='upElement(id)'></i>\n    <i class=\"fa fa-arrow-down text-primary p-3\" aria-hidden=\"true\" (click)='downElement(id)'></i>\n    <i class=\"fa fa-trash-o text-danger p-3\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-email/input-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputEmailComponent = (function () {
    function InputEmailComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputEmailComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputEmailComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputEmailComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputEmailComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputEmailComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputEmailComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputEmailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputEmailComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputEmailComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputEmailComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputEmailComponent.prototype, "jsonData", void 0);
InputEmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-email',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-email/input-email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-email/input-email.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputEmailComponent);

var _a;
//# sourceMappingURL=input-email.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-file/input-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-file/input-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8 text-left\">\n    <input type=\"file\"  [accept]=fileTypes />\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-file/input-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFileComponent = (function () {
    function InputFileComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputFileComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputFileComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputFileComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputFileComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputFileComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputFileComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputFileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputFileComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "fileTypes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "jsonData", void 0);
InputFileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-file',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-file/input-file.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-file/input-file.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputFileComponent);

var _a;
//# sourceMappingURL=input-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-number/input-number.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-number/input-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-3 col-form-label text-left pt-3\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-5\">\n    <input class=\"form-control mt-1 mb-1\" type=\"number\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\" [min]=rangeFrom [max]=rangeTo>\n  </div>\n  <div class=\"col-4 text-left\" >\n    <i class=\"fa fa-arrow-up text-primary p-3\" aria-hidden=\"true\" (click)='upElement(id)'></i>\n    <i class=\"fa fa-arrow-down text-primary p-3\" aria-hidden=\"true\" (click)='downElement(id)'></i>\n    <i class=\"fa fa-trash-o text-danger p-3\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-number/input-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputNumberComponent = (function () {
    function InputNumberComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputNumberComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputNumberComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputNumberComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputNumberComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputNumberComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputNumberComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputNumberComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputNumberComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputNumberComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputNumberComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "rangeFrom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "rangeTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "jsonData", void 0);
InputNumberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-number',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-number/input-number.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-number/input-number.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputNumberComponent);

var _a;
//# sourceMappingURL=input-number.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-password/input-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-password/input-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8\">\n    <input class=\"form-control form-control-sm\" type=\"password\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\">\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-password/input-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputPasswordComponent = (function () {
    function InputPasswordComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputPasswordComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputPasswordComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputPasswordComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputPasswordComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputPasswordComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputPasswordComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputPasswordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputPasswordComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputPasswordComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputPasswordComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "jsonData", void 0);
InputPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-password',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-password/input-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-password/input-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputPasswordComponent);

var _a;
//# sourceMappingURL=input-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-6\">\n    <input class=\"form-control form-control-sm\" type=\"tel\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\">\n  </div>\n  <div class=\"col-2\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputPhoneComponent = (function () {
    function InputPhoneComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputPhoneComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputPhoneComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputPhoneComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputPhoneComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputPhoneComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputPhoneComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputPhoneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputPhoneComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputPhoneComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputPhoneComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputPhoneComponent.prototype, "jsonData", void 0);
InputPhoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-phone',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-phone/input-phone.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputPhoneComponent);

var _a;
//# sourceMappingURL=input-phone.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-6 text-left\">\n    <div *ngFor='let opt of option; let i=i' >\n\n      <input type=\"radio\" value={{opt}} name=\"radiogroup{{funID(id)}}\"  [checked]='opt == value' >  {{opt}}\n\n    </div>\n\n  </div>\n  <div class=\"col-2\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputRadioComponent = (function () {
    function InputRadioComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputRadioComponent.prototype.ngOnInit = function () {
        this.text = this.value;
        console.log(this.disabled);
    };
    InputRadioComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputRadioComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputRadioComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputRadioComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputRadioComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputRadioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputRadioComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputRadioComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "option", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputRadioComponent.prototype, "jsonData", void 0);
InputRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-radio',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-radio/input-radio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputRadioComponent);

var _a;
//# sourceMappingURL=input-radio.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8 text-left\">\n    <form oninput=\"x.value=parseInt(a.value)\" >\n      {{rangeFrom}}<input class=\" form-control-sm\"  type=\"range\"  min={{rangeFrom}} max={{rangeTo}} id=\"a\" (change)='getVal()'  >{{rangeTo}}\n\n     &nbsp; &nbsp; value =  <output #val name=\"x\" for=\"a \" > {{value}} </output>\n\n    </form>\n\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputSliderComponent = (function () {
    function InputSliderComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputSliderComponent.prototype.ngOnInit = function () {
        this.val = this.value;
    };
    InputSliderComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputSliderComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputSliderComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputSliderComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputSliderComponent.prototype.getVal = function () {
        // console.log(this.output.nativeElement.value);
        var v;
        v = this.output.nativeElement.value;
    };
    return InputSliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputSliderComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputSliderComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputSliderComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "rangeFrom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "rangeTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "jsonData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('val'),
    __metadata("design:type", Object)
], InputSliderComponent.prototype, "output", void 0);
InputSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-slider',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-slider/input-slider.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputSliderComponent);

var _a;
//# sourceMappingURL=input-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-text/input-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-text/input-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-3 col-form-label text-left pt-3\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-5\">\n    <input class=\"form-control mt-1 mb-1\" type=\"text\" [(ngModel)]='text' [disabled]=disabled  placeholder=\"\">\n  </div>\n  <div class=\"col-4 text-left\">\n    <i class=\"fa fa-arrow-up text-primary p-3\" aria-hidden=\"true\" (click)='upElement(id)'></i>\n    <i class=\"fa fa-arrow-down text-primary p-3\" aria-hidden=\"true\" (click)='downElement(id)'></i>\n    <i class=\"fa fa-trash-o text-danger p-3\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-text/input-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputTextComponent = (function () {
    function InputTextComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputTextComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputTextComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTextComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputTextComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputTextComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputTextComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputTextComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTextComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTextComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "jsonData", void 0);
InputTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-text',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-text/input-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-text/input-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputTextComponent);

var _a;
//# sourceMappingURL=input-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8 \">\n    <textarea class=\"form-control form-control-sm\" [(ngModel)]='text' [disabled]=disabled rows=\"4\" > </textarea>\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputTextareaComponent = (function () {
    function InputTextareaComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputTextareaComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputTextareaComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTextareaComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputTextareaComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputTextareaComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputTextareaComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputTextareaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputTextareaComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTextareaComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTextareaComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTextareaComponent.prototype, "jsonData", void 0);
InputTextareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-textarea',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-textarea/input-textarea.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputTextareaComponent);

var _a;
//# sourceMappingURL=input-textarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-time/input-time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-time/input-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-4\">\n    <input class=\"form-control form-control-sm\" type=\"time\" [(ngModel)]='text' [disabled]=disabled placeholder=\"\" [min]=rangeFrom [max]=rangeTo>\n  </div>\n  <div class=\"col-4\" ></div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-time/input-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputTimeComponent = (function () {
    function InputTimeComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputTimeComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputTimeComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputTimeComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputTimeComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputTimeComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputTimeComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputTimeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputTimeComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTimeComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputTimeComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "rangeFrom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "rangeTo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "jsonData", void 0);
InputTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-time',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-time/input-time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-time/input-time.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputTimeComponent);

var _a;
//# sourceMappingURL=input-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-video/input-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-video/input-video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row  text-center\">\n  <label for=\"staticEmail\" class=\"col-sm-2 col-form-label text-left\">  &nbsp; {{funID(id)}}. {{name}} </label>\n  <div class=\"col-8 text-left\">\n    <input type=\"file\" accept=\"video/*\" capture=\"camcorder\" />\n  </div>\n  <div class=\"col-2 text-left\" >\n    <!-- <i *ngIf='id > 0' class=\"fa fa-arrow-up\" aria-hidden=\"true\" (click)='upElement(id)'></i> &nbsp;\n    <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" (click)='downElement(id)'></i> &nbsp; -->\n    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteElement(id)' ></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/input-video/input-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputVideoComponent = (function () {
    function InputVideoComponent(projectService) {
        this.projectService = projectService;
        this.updatedData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = '';
        this.jsonData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputVideoComponent.prototype.ngOnInit = function () {
        this.text = this.value;
    };
    InputVideoComponent.prototype.funID = function (id) {
        return (parseInt(id) + 1);
    };
    InputVideoComponent.prototype.upElement = function (id) {
        this.projectService.emitUpElement.emit(id);
    };
    InputVideoComponent.prototype.downElement = function (id) {
        this.projectService.emitDownElement.emit(id);
    };
    InputVideoComponent.prototype.deleteElement = function (id) {
        this.projectService.emitDeleteElement.emit(id);
    };
    InputVideoComponent.prototype.getVal = function () {
        // console.log(this.text);
        // this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
    };
    return InputVideoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], InputVideoComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputVideoComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputVideoComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "fileTypes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputVideoComponent.prototype, "jsonData", void 0);
InputVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-video',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/input-video/input-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/input-video/input-video.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], InputVideoComponent);

var _a;
//# sourceMappingURL=input-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\" >\n\n  <div *ngFor=\"let array of tArray; let i = index\" class=\"col-sm-4 text-center p-3 ml-5 mr-5 mt-3 mb-3\" style=\"border: 2px solid #dcdcdc !important; border-radius:10px\">\n    <p>{{array.Details.name}}</p>\n    <button type=\"button\" class=\"btn btn-primary\" (click)='addTemplate(i)'  data-dismiss=\"modal\" >Add template</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateTabContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateTabContentComponent = (function () {
    function TemplateTabContentComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.sub = this.projectService.emitTemplateArray.subscribe(function (res) {
            // console.log(res);
            _this.tArray = res;
        });
    }
    TemplateTabContentComponent.prototype.ngOnInit = function () {
        this.projectService.getTemplateArray();
    };
    TemplateTabContentComponent.prototype.addTemplate = function (id) {
        // console.log(this.tArray[id].Elements);
        this.projectService.emitFormElementTemp.emit(this.tArray[id].Elements);
    };
    TemplateTabContentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return TemplateTabContentComponent;
}());
TemplateTabContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-template-tab-content',
        template: __webpack_require__("../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form-builder/template-tab-content/template-tab-content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], TemplateTabContentComponent);

var _a;
//# sourceMappingURL=template-tab-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 text-center\" style=\"background:#fff; box-shadow:0 1px 1px #a9a8a9; min-height:90vh\">\n    <br />\n    <button type=\"button\" class=\"btn btn-primary col-sm-5 col-md-4 col-lg-2 pt-3 pb-3\" (click)='new()'>+ New</button>\n    <ul class=\"nav nav-tabs justify-content-center mt-4\">\n      <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" href=\"#form\">Forms</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link \" data-toggle=\"tab\" role=\"tab\" href=\"#template\">Templates</a></li>\n    </ul>\n    <div class=\"col-lg-12 col-md-12 row col-sm-12 ml-0 mt-5 mb-3 justify-content-md-center fn\" style=\"display:none;\">\n      <div class=\"row col-lg-9 col-md-12 text-center bbot\">\n        <a class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 active\">Forms</a>\n        <a class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 strt\">Templates</a>\n      </div>\n    </div>\n  <div class=\"tab-content\">\n      <div class=\"tab-pane active\" id=\"form\" role=\"tabpanel\" >\n        <br>\n        <div class=\"row text-left\" >\n          <div *ngFor='let form of formArray; let i = index' class=\"col-lg-4 col-md-5 col-sm-6\" style=\"margin-bottom:15px; position: relative\">\n            <div class=\"card cbx cbx11\">\n              <div class=\"statusTag\" *ngIf=\"form.Details.status=='Online'\"> &nbsp; {{form.Details.status}} &nbsp; </div>\n              <div class=\"card-block p-0\">\n                <div class=\"col-sm-12  mt-2\">\n                  <h5 class=\"card-title col-sm-12\">{{form.Details.name | shorten: 24: '...'}}</h5>\n                  <h5 class=\"card-subtitle col-sm-12 mb-2 text-muted\"> <b> {{form.Details.project | shorten: 24: '...'}} </b> </h5>\n                </div>\n                <div class=\"col-sm-12 row m-0\">\n                  <p class=\"card-text col-sm-12\"> </p>\n\n                  <br>\n\n                  <!-- <a href=\"\" class=\"col-1\" ></a> -->\n\n                  <a class=\"col-5\" >\n                    <input type=\"checkbox\" class=\"form-check-input\" [checked]=checkStatus(form.Details.cid) (change)='changeStatus(form.Details.cid)' class=\"checkStyle\">\n                    {{form.Details.status}}\n                    <span class=\"checkmark\"></span>\n                  </a>\n\n                  <a href=\"#\"  [routerLink]=\"['../formBuilder']\" [queryParams]=\"{formID : form.Details.cid }\" style=\"font-size:1.3rem\" >View form</a>\n\n                </div>\n                <!-- <span style=\"color: #e91e63; \" > {{form.Details.responses}} </span>                 -->\n                <div class=\"col-11  pr-1 pb-4 mt-4  mb-3\">\n                  <button style=\"float: left\" (click)='rule(form.Rules, form.Details.cid, form.Elements)' type=\"button\" class=\"btn btn-primary \" data-toggle=\"modal\" data-target=\"#rules\">Rule/s</button>\n                  <button style=\"margin-left:15px; float: left\" (click)='getResponse(form.Details.cid)' type=\"button\" class=\"btn btn-primary \" data-toggle=\"modal\" data-target=\"#rules\">  Responses </button>\n                  <span class=\"responseCount\" >  {{form.Details.responses}}  </span>\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      <br>\n      <button type=\"button\" class=\"btn btn-primary mb-5 col-sm-5 col-md-4 col-lg-2 pt-3 pb-3\" (click)='syncCollectFrom($event)'><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> 1. Sync Collect Form</button>\n      &nbsp;\n      <button type=\"button\" class=\"btn btn-primary mb-5 col-sm-5 col-md-4 col-lg-2 pt-3 pb-3\" (click)='syncCollectFromRule($event)'><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> 2. Sync Collect Rules</button>\n\n      </div>\n      <div class=\"tab-pane \" id=\"template\" role=\"tabpanel\" >\n        <br>\n        <div class=\"row justify-content-center\" >\n          <div *ngFor='let temp of templateArray; let i = index' class=\"col-4 \"  style=\"margin-bottom:15px\">\n            <div class=\"card cbx\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">{{temp.Details.name}}</h4>\n                <h6 class=\"card-subtitle mb-2 text-muted\">Some text here...</h6>\n                <p class=\"card-text\">{{temp.Details.desc}}</p>\n                <a class=\"card-link\" [routerLink]=\"['../formBuilder']\" [queryParams]=\"{templateID : temp.Details.cid }\" >View template</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n<!-- rule modal starts here-->\n<div class=\"modal fade\" id=\"rules\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\" >\n    <div class=\"modal-content\"  style=\"width:703px\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Rules</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"overflow-y: auto; height:700px; width:700px\">\n          <div class=\"row justify-content-center\" >\n            <div *ngIf='rulesArray.length < 1' >\n              <h4> No Rule was created </h4>\n            </div>\n            <div *ngFor='let rule of rulesArray; let i = index ' class=\"col-5 text-center\" style=\"overflow:auto; border: 2px solid gray; border-radius: 4px; height: 230px;  margin:6px\" >\n                <h5>{{i+1}}. Rule Name: {{rule.name}} </h5>\n\n                <hr>\n                Template: <b>{{rule.tempName}}</b>\n                <hr>\n\n                <p>Q. {{rule.elementName}}</p>\n                <p>A. {{rule.elementValue}}</p>\n                <p> Match all (if multiple values): {{rule.satisfyAll}}</p>\n\n                <div *ngIf='rule.tempName == \"Form question\"'>\n                  Associate Q: {{rule.ruleFormQuestion.name}}\n                  <div *ngIf=\"rule.ruleFormQuestion.option\" >\n                    <div *ngIf=\"rule.ruleFormQuestion.option.length\" >\n                      <div *ngFor=\"let m of rule.ruleFormQuestion.option\" >\n                        <p> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i> {{m}} </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- <p>Condition: {{rule.elementValue}} </p> -->\n                <!-- <a class=\"card-link\" href=\"#\" >Edit</a> -->\n                <button type=\"button\" class=\"btn btn-primary \" (click)=\"deleteRule(rule.cid)\"> <b>X</b> </button>\n              </div>\n          </div>\n        <!-- <a href=\"#\"  class=\"text-center\">Add Rule</a> -->\n\n      </div>\n      <div class=\"modal-footer\"  >\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 \" data-toggle=\"modal\" data-target=\"#addRules\" >Add rule</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 \" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- rule modal ends here-->\n\n\n<!--Add rule modal starts here-->\n<div class=\"modal fade\" id=\"addRules\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">+ Add Rules</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n\n        <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='ruleName' placeholder=\"Rule Name\" class=\"col-12 form-control mb-5\" />\n\n        <label class=\"row ml-0 mr-0 col-12 pl-0 pr-0\">\n          <span class=\"col-4 pl-0 pr-0 pt-2 text-left\">1. Select element :</span>\n          <select [(ngModel)]=\"ruleElement\" (change)='getVal()' class=\"col-4 form-control\">\n            <option *ngFor='let opt of rnameArray; let i=i' [ngValue]=opt  >{{opt.name}}</option>\n          </select>\n        </label>\n\n        <label class=\"row ml-0 mr-0 col-12 pl-0 pr-0\">\n          <span class=\"col-4 pl-0 pr-0 pt-2 text-left\">2. Condition : Equals</span>\n        </label>\n\n        <label class=\"row ml-0 mr-0 col-12 pl-0 pr-0\">\n          <span class=\"col-4 pl-0 pr-0 pt-2 text-left\">3. Value :</span>\n\n          <input *ngIf=\"!multiOption\" type=\"text\" name=\"\" value=\"\" [(ngModel)]='ruleTarget' class=\"col-4 form-control\" />\n\n          <ss-multiselect-dropdown *ngIf=\"multiOption\" [options]=\"ruleOptions\" [(ngModel)]=\"ruleTargetM\" (ngModelChange)=\"onChangeRuleOption($event)\"></ss-multiselect-dropdown>\n\n          <br>\n          <!-- <i *ngIf='hint' > hint: {{hint}}</i>\n          <! css not Defined yet-->\n          <!-- <i>(* If multiple, saparated by commas)</i> -->\n        </label>\n\n        <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"satisfyAll\" (change)='satisfyAllCondition()'> Satisfy all conditions (Only if multiple!)\n\n        <label class=\"row ml-0 mr-0 col-12 pl-0 pr-0\">\n          <span class=\"col-4 pl-0 pr-0 pt-2 text-left\">4. Associate template:</span>\n          <select [(ngModel)]=\"ruleTempTail\" class=\"col-4 form-control\">\n            <option *ngFor='let opt of templateArray; let i=i' [ngValue]=opt  >{{opt.Details.name}}</option>\n          </select>\n        </label>\n\n        - - OR - -\n        <label class=\"row ml-0 mr-0 col-12 pl-0 pr-0\">\n          <span class=\"col-4 pl-0 pr-0 pt-2 text-left\">&nbsp;  Associate form element</span>\n          <select [(ngModel)]=\"ruleFormQuestion\" class=\"col-4 form-control\">\n            <option *ngFor='let opt of rnameArray; let i=i' [ngValue]=opt  >{{opt.name}}</option>\n          </select>\n        </label>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" (click)='conformRule()'  >Create rule</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Add rule modal ends here-->\n"

/***/ }),

/***/ "../../../../../src/app/home/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\n.cbx11 {\n  position: relative; }\n\n.cbx11BackGround {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  overflow: hidden; }\n\n.responseCount {\n  background-color: #bb2256;\n  color: #FFF;\n  font-size: 1.6rem;\n  border: 2px solid #bb2256;\n  border-radius: 3px;\n  margin-left: 14px;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.statusTag {\n  position: absolute;\n  top: 5px;\n  right: 0px;\n  background-color: #4caf50;\n  color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.formArray = [];
        this.templateArray = [];
        this.rnameArray = [];
        this.rcondition = ['equals', 'grater than', 'smaller than', 'not equals'];
        this.ruleCondition = 'equals';
        this.rulesArray = [];
        this.satisfyAll = false;
        this.fArray = this.projectService.emitFormArray.subscribe(function (res) {
            // console.log(res);
            _this.formArray = res;
        });
        this.tArray = this.projectService.emitTemplateArray.subscribe(function (res) {
            // console.log(res);
            _this.templateArray = res;
        });
    }
    FormComponent.prototype.new = function () {
        this.router.navigate(['/formBuilder']);
    };
    FormComponent.prototype.ngOnInit = function () {
        this.projectService.getFormArray();
        this.projectService.getTemplateArray();
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.fArray.unsubscribe();
        this.tArray.unsubscribe();
    };
    FormComponent.prototype.deleteRule = function (rCid) {
        this.projectService.deleteRule(this.fCid, rCid);
    };
    FormComponent.prototype.rule = function (data, cid, formElement) {
        // console.log(cid);
        // console.log(data);
        this.fCid = cid;
        this.rulesArray = data;
        this.formCIDWithRule = cid;
        this.rnameArray = formElement;
    };
    FormComponent.prototype.getFormQuestion = function (eCid) {
        var ques = "";
        console.log(eCid);
        // for(let m of this.formArray) {
        //   if(this.fCid == m.Details.cid) {
        //     for(let n of m.Elements) {
        //       if(n.cid == eCid) {
        //         ques = n.name;
        //         break;
        //       }
        //     }
        //     break;
        //   }
        // }
        return ques;
    };
    FormComponent.prototype.getVal = function () {
        if (this.ruleElement.option) {
            if (this.ruleElement.option.length) {
                this.ruleTarget = '';
                this.multiOption = true;
                this.ruleOptions = [];
                for (var i = 0; i < this.ruleElement.option.length; i++) {
                    this.ruleOptions.push({ id: (i + 1), name: this.ruleElement.option[i] });
                }
            }
        }
        else {
            this.multiOption = false;
            this.ruleTarget = '';
        }
        // console.log(this.ruleOptions);
        //
        // this.ruleOptions = [{ id: 1, name: 'Option 1' },
        //         { id: 2, name: 'Option 2' },];
        if (this.ruleElement.option) {
            this.hint = this.ruleElement.option.toString();
        }
        if (this.ruleElement.value) {
            this.hint = this.hint + "," + this.ruleElement.value;
        }
        // console.log(this.ruleCondition);
    };
    FormComponent.prototype.satisfyAllCondition = function () {
        if (this.satisfyAll) {
            this.satisfyAll = false;
        }
        else {
            this.satisfyAll = true;
        }
    };
    FormComponent.prototype.conformRule = function () {
        var tempCid = "";
        var tempName = "";
        if (this.ruleTempTail == undefined) {
        }
        else {
            tempCid = this.ruleTempTail.Details.cid;
            tempName = this.ruleTempTail.Details.name;
        }
        var now = new Date();
        var cid = now.getTime() + "" + Math.floor(1000 + Math.random() * 9000);
        var newRule = { cid: cid, name: this.ruleName, elementName: this.ruleElement.name, elementCid: this.ruleElement.cid, elementType: this.ruleElement.type, elementValue: this.ruleTarget.trim(), condition: this.ruleCondition, tempCid: tempCid, tempName: tempName, ruleFormQuestion: this.ruleFormQuestion, satisfyAll: this.satisfyAll };
        this.projectService.addNewRule(this.formCIDWithRule, newRule);
        $('#addRules').modal('hide');
        $('#rules').modal('hide');
    };
    FormComponent.prototype.onChangeRuleOption = function () {
        console.log(this.ruleOptions);
        this.ruleTarget = "";
        console.log(this.ruleTargetM);
        for (var i = 0; i < this.ruleTargetM.length; i++) {
            this.ruleTarget += this.ruleOptions[(this.ruleTargetM[i] - 1)].name + ",";
        }
        console.log(this.ruleTarget);
        this.ruleTarget = this.ruleTarget.slice(0, -1);
        console.log(this.ruleTarget);
    };
    FormComponent.prototype.syncCollectFrom = function ($event) {
        var formData = new FormData();
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        formData = new FormData();
        formData.append('form', file);
        this.projectService.uploadCollectForm(formData);
    };
    FormComponent.prototype.syncCollectFromRule = function ($event) {
        var formData = new FormData();
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        formData = new FormData();
        formData.append('rule', file);
        this.projectService.uploadCollectRule(formData);
    };
    FormComponent.prototype.checkStatus = function (fid) {
        for (var _i = 0, _a = this.formArray; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.Details.cid == fid) {
                if (m.Details.status == 'Offline') {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    FormComponent.prototype.changeStatus = function (fid) {
        for (var _i = 0, _a = this.formArray; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.Details.cid == fid) {
                if (m.Details.status == 'Offline') {
                    m.Details.status = 'Online';
                }
                else {
                    m.Details.status = 'Offline';
                }
                this.projectService.changeFormStatus(fid, m.Details.status);
                break;
            }
        }
    };
    FormComponent.prototype.getResponse = function (fid) {
        this.router.navigate(['/resTable'], { queryParams: { id: fid } });
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/home/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FormComponent);

var _a, _b;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a class=\"navbar-brand\" [routerLink]=\"['/forms/']\">Forms</a> -->\n<router-outlet></router-outlet>\n\n<!-- <app-form></app-form> -->\n<!-- <app-form-builder></app-form-builder> -->\n<!-- <app-form-modal></app-form-modal> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        // this.router.navigate(['/']);
        // this.router.navigate(['/forms']);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/organisation/assessor/assessor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th{\n  text-align: center;\n}\n.tt1 {\n    position: relative;\n    display: inline-block;\n}\n\n.tt1 .tt2 {\n    visibility: hidden;\n\n    background-color: gray;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 100%;\n    /*left: 50%;*/\n    margin-left: -150px;\n\n    /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.tt1:hover .tt2 {\n    visibility: visible;\n    opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/organisation/assessor/assessor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pb-3 text-center\" style=\"background:#fff;\">\n\n  <button type=\"button\" class=\"btn btn-primary col-sm-3 col-md-2 pt-3 pb-3\" (click)='assesor()'>+ Assesor</button>\n\n    <table *ngIf='flag' id=\"example01\" class=\"table table-striped \" cellspacing=\"0\" width=\"100%\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>assesor</th>\n                <th>Phone</th>\n                <th>Form</th>\n                <th>Details</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let res of users; let i = index'>\n                <td>{{i+1}}</td>\n                <td>{{res.name}}</td>\n                <td>{{res.phone}}</td>\n                <td>\n                    <button type=\"button\" class=\"btn btn-primary tt1\" (click)='showProjectModal(res.name, res.cid, res.form)' >\n                      {{calForms(res.form)}} Forms\n                      <span class=\"tt2\" > &nbsp; {{projectForm(res.form)}}  &nbsp; </span>\n                    </button>\n                    <!-- <span class=\"tt1\" > {{projectForm(res.form) | shorten: 5: '...'}}\n                      <span class=\"tt2\" > {{projectForm(res.form)}} </span>\n                    </span> -->\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary \">  {{res.details}}  </button>\n                </td>\n            </tr>\n      </tbody>\n    </table>\n\n</div>\n\n<!-- Add assesor model -->\n<div class=\"modal fade\" id=\"newAssessorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new assesor</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='assessorName' placeholder=\"Name\" class=\"col-8 form-control mb-5\" />\n            <br>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='assessorPhone' placeholder=\"Phone no.\" class=\"col-8 form-control mb-5\" />\n            <br>\n            <select [(ngModel)]=\"formAssociate\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of formArray; let i=i' [ngValue]=opt.Details  >{{opt.Details.name + \" \" + opt.Details.project}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='saveAssessor()'>Add user</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add assesor model -->\n\n<!-- assesor form model -->\n<div class=\"modal fade\" id=\"assessorFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Associated form for {{userProjectName}}</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n\n            {{userProjectName}} is  assigned with  form/s :  <br>\n\n            <div  class=\"col-12\" *ngFor=\"let pro of assessorFormArray; let i = index\">{{i+1}}. {{pro.name+\" \"+pro.project}} <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteFormAssessorArray(pro.cid, pro.projectcdi)' ></i> <br> </div>\n            <br>\n            <br>\n            <br>\n            <div class=\"col-12\" >Assign new project : </div>\n            <select [(ngModel)]=\"projectAs\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of formArray; let i=i' [ngValue]=opt  >{{opt.Details.name + \" \" + opt.Details.project}}</option>\n            </select>\n            <div  class=\"col-12\"></div>\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"  (click)='assignNewProject()'>Assign</button>\n\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- assesor form model -->\n"

/***/ }),

/***/ "../../../../../src/app/home/organisation/assessor/assessor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessorComponent = (function () {
    function AssessorComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.users = [];
        this.flag = false;
        this.formArray = [];
        this.assessorFormArray = [];
        this.sub = this.projectService.emitAssessors.subscribe(function (res) {
            _this.users = res;
            _this.flag = true;
            _this.display();
        });
        this.sub1 = this.projectService.emitFormArray.subscribe(function (res) {
            _this.formArray = res;
        });
    }
    AssessorComponent.prototype.ngOnInit = function () {
        this.projectService.getAssessors();
    };
    AssessorComponent.prototype.display = function () {
        if (this.flag) {
            $(document).ready(function () {
                var t = $('#example01').DataTable({
                    "columnDefs": [{
                            "orderable": false,
                            "targets": 0,
                            "bSort": false
                        }],
                    "bSort": false
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
            });
        }
    };
    AssessorComponent.prototype.assesor = function () {
        this.projectService.getFormArray();
        $("#newAssessorModal").modal('show');
    };
    AssessorComponent.prototype.saveAssessor = function () {
        // console.log(this.formAssociate);
        this.projectService.addAssessorArray(this.assessorName, this.assessorPhone, this.formAssociate);
        this.assessorName = '';
        this.assessorPhone = '';
        $("#newAssessorModal").modal('hide');
        this.router.navigate(['/org'], { queryParams: { id: "" + Math.floor(1000 + Math.random() * 9000) } });
        this.formAssociate = "";
        this.formArray = [];
    };
    AssessorComponent.prototype.calForms = function (project) {
        var j = 0;
        for (var _i = 0, project_1 = project; _i < project_1.length; _i++) {
            var i = project_1[_i];
            j++;
        }
        return "" + j;
    };
    AssessorComponent.prototype.showProjectModal = function (assessorName, assessorCid, formArray) {
        this.projectService.getFormArray();
        var n = 0;
        var temp = [];
        this.userProjectName = assessorName;
        this.userCid = assessorCid;
        this.assessorFormArray = formArray;
        $("#assessorFormModal").modal('show');
    };
    AssessorComponent.prototype.assignNewProject = function () {
        // this.projectService.assignNewProjectToUser(this.userCid,this.projectAs);
        this.projectService.assignNewFormToAssessor(this.userCid, this.projectAs);
        $("#assessorFormModal").modal('hide');
        this.formArray = [];
        this.assessorFormArray = [];
        this.projectAs = "";
        this.formArray = [];
    };
    AssessorComponent.prototype.deleteFormAssessorArray = function (formCid, projCid) {
        this.projectService.deleteFormAssessorArray(this.userCid, formCid, projCid);
        $("#assessorFormModal").modal('hide');
        this.formArray = [];
        this.assessorFormArray = [];
    };
    AssessorComponent.prototype.projectForm = function (project) {
        //{ name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' }
        var name = "";
        for (var _i = 0, project_2 = project; _i < project_2.length; _i++) {
            var n = project_2[_i];
            name += n.name + " " + n.project + ",  ";
        }
        // console.log(name);
        return name;
    };
    AssessorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    return AssessorComponent;
}());
AssessorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-assessor',
        template: __webpack_require__("../../../../../src/app/home/organisation/assessor/assessor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/organisation/assessor/assessor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AssessorComponent);

var _a, _b;
//# sourceMappingURL=assessor.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/organisation/organisation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/organisation/organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 text-center\" style=\"background:#fff; box-shadow:0 1px 1px #a9a8a9; min-height:90vh\">\n  <br>\n  <ul class=\"nav nav-tabs justify-content-center\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" href=\"#user\">Users</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" data-toggle=\"tab\" role=\"tab\" href=\"#ass\">Assessor</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" data-toggle=\"tab\" role=\"tab\" href=\"#teams\">Teams</a>\n    </li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"user\" role=\"tabpanel\" >\n      <app-user></app-user>\n    </div>\n    <div class=\"tab-pane \" id=\"ass\" role=\"tabpanel\" >\n      <app-assessor></app-assessor>\n    </div>\n    <div class=\"tab-pane \" id=\"teams\" role=\"tabpanel\" >\n      <app-teams></app-teams>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/organisation/organisation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganisationComponent = (function () {
    function OrganisationComponent() {
    }
    OrganisationComponent.prototype.ngOnInit = function () {
    };
    return OrganisationComponent;
}());
OrganisationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-organisation',
        template: __webpack_require__("../../../../../src/app/home/organisation/organisation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/organisation/organisation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrganisationComponent);

//# sourceMappingURL=organisation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/organisation/teams/teams.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th{\n  text-align: center;\n}\n.tt1 {\n    position: relative;\n    display: inline-block;\n}\n\n.tt1 .tt2 {\n    visibility: hidden;\n\n    background-color: gray;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 100%;\n    /*left: 50%;*/\n    margin-left: -150px;\n\n    /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\n    opacity: 0;\n    transition: opacity 1s;\n}\n\n.tt1:hover .tt2 {\n    visibility: visible;\n    opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/organisation/teams/teams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pb-3 text-center\" style=\"background:#fff;\">\n\n  <button type=\"button\" class=\"btn btn-primary col-sm-3 col-md-2 pt-3 pb-3\" (click)='team()'>+ Team</button>\n\n    <table *ngIf='flag' id=\"example2\" class=\"table table-striped \" cellspacing=\"0\" width=\"100%\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Name</th>\n                <th>Forms</th>\n                <th>Members</th>\n                <th>Manager</th>\n                <th>Details</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let res of teams; let i = index'>\n                <td>{{i+1}}</td>\n                <td>{{res.name}}</td>\n                <td>\n                    <button type=\"button\" class=\"btn btn-primary tt1\" (click)='showFormModal(res.name, res.cid, res.form)' >\n                      {{calForms(res.form)}} Form/s\n                      <!-- <span class=\"tt2\" > &nbsp; {{projectForm(res.form)}}  &nbsp; </span> -->\n                    </button>\n                </td>\n                <td>\n                    <button type=\"button\" class=\"btn btn-primary tt1\" (click)='showAssesorModal(res.name, res.cid, res.assesor)' >\n                      {{calForms(res.assesor)}} Assesor/s\n                    </button>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary tt1\" (click)='showManagerModal(res.name, res.cid, res.tl)' >\n                    {{calForms(res.tl)}} Manager/s\n                  </button>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary \">  {{res.details}}  </button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>\n\n<!-- Add Team model -->\n<div class=\"modal fade\" id=\"newTeamModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new team</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='teamName' placeholder=\"Team Name\" class=\"col-8 form-control mb-5\" />\n\n            <br>\n            <select [(ngModel)]=\"tl\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of asrArray; let i=i' [ngValue]=opt.cid>{{opt.name}}</option>\n            </select>\n\n            <br>\n            <select [(ngModel)]=\"formAssociate\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of formArray; let i=i' [ngValue]=opt.Details  >{{opt.Details.name + \" \" + opt.Details.project}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='saveTeam()'>Add Team</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add Team model -->\n\n<!-- assesor form model -->\n<div class=\"modal fade\" id=\"showFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Associated form for {{teamName}}</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n\n            {{teamName}} is  assigned with  form/s :  <br>\n\n            <div  class=\"col-12\" *ngFor=\"let pro of teamFormArray; let i = index\">{{i+1}}. {{pro.name+\" \"+pro.project}} <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteFormTeamArray(pro.cid)' ></i> <br> </div>\n            <br>\n            <br>\n            <br>\n            <div class=\"col-12\" >Assign new project : </div>\n            <select [(ngModel)]=\"newForm\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of formArray; let i=i' [ngValue]=opt  >{{opt.Details.name + \" \" + opt.Details.project}}</option>\n            </select>\n            <div  class=\"col-12\"></div>\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"  (click)='assignNewFrom()'>Assign</button>\n\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- assesor form model -->\n\n<!-- Add Assesor model -->\n<div class=\"modal fade\" id=\"showAssesorModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new Assesor</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n\n            {{teamName}} assesor/s :  <br>\n\n            <div  class=\"col-12\" *ngFor=\"let name of extAsrNameArray; let i=index\">{{i+1}} . {{name.name}} <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteAsrTeamArray(name.cid)' ></i> <br> </div>\n            <br>\n            <br>\n\n            <br>\n            <select [(ngModel)]=\"tl\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of asrArray; let i=i' [ngValue]=opt.cid>{{opt.name}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='addNewAssesor()'>Add assesor</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add Assesor model -->\n\n<!-- Add Manager model -->\n<div class=\"modal fade\" id=\"showManagerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new Manager</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n            <!-- <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='teamName' placeholder=\"Team Name\" class=\"col-8 form-control mb-5\" disabled/>\n\n            <div  style=\"height:130px; width:80% ; border: 2px solid gray; border-radius:3px; overflow:auto; margin-bottom:20px\">\n                  <b *ngFor=\"let name of extMgrNameArray; let i=index\" style=\"float : left\"> {{i+1}} . {{name}} </b> <br>\n            </div> -->\n\n            {{teamName}} Manager/s :  <br>\n\n            <div  class=\"col-12\" *ngFor=\"let name of extMgrNameArray; let i=index\">{{i+1}} . {{name.name}} <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteMgrTeamArray(name.cid)' ></i> <br> </div>\n            <br>\n            <br>\n\n            <br>\n            <select [(ngModel)]=\"tl\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of asrArray; let i=i' [ngValue]=opt.cid>{{opt.name}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='addNewManager()'>Add Manager</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add Manager model -->\n"

/***/ }),

/***/ "../../../../../src/app/home/organisation/teams/teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsComponent = (function () {
    function TeamsComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.teams = [];
        this.flag = false;
        this.formArray = [];
        this.asrArray = [];
        this.teamFormArray = [];
        this.extAsrArray = [];
        this.extAsrNameArray = [];
        this.extMgrNameArray = [];
        this.sub = this.projectService.emitTeams.subscribe(function (res) {
            _this.teams = res;
            _this.flag = true;
            _this.display();
        });
        this.sub1 = this.projectService.emitFormArray.subscribe(function (res) {
            _this.formArray = res;
        });
        this.sub2 = this.projectService.emitAssessors.subscribe(function (res) {
            _this.asrArray = res;
        });
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.projectService.getTeams();
    };
    TeamsComponent.prototype.display = function () {
        if (this.flag) {
            $(document).ready(function () {
                var t = $('#example2').DataTable({
                    "columnDefs": [{
                            "orderable": false,
                            "targets": 0,
                            "bSort": false
                        }],
                    "bSort": false
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
            });
        }
    };
    TeamsComponent.prototype.team = function () {
        this.projectService.getFormArray();
        $("#newTeamModal").modal('show');
    };
    TeamsComponent.prototype.saveTeam = function () {
        // console.log(this.formAssociate);
        this.projectService.addTeamArray(this.teamName, this.tl, this.formAssociate);
        this.teamName = '';
        $("#newTeamModal").modal('hide');
        this.router.navigate(['/org'], { queryParams: { id: "" + Math.floor(1000 + Math.random() * 9000) } });
        this.formAssociate = "";
        this.formArray = [];
    };
    TeamsComponent.prototype.calForms = function (project) {
        var j = 0;
        for (var _i = 0, project_1 = project; _i < project_1.length; _i++) {
            var i = project_1[_i];
            j++;
        }
        return "" + j;
    };
    TeamsComponent.prototype.showFormModal = function (teamName, teamCid, formArray) {
        this.projectService.getFormArray();
        var n = 0;
        var temp = [];
        this.teamName = teamName;
        this.teamCid = teamCid;
        this.teamFormArray = formArray;
        $("#showFormModal").modal('show');
    };
    TeamsComponent.prototype.assignNewFrom = function () {
        // this.projectService.assignNewProjectToUser(this.userCid,this.newForm);
        this.projectService.assignNewFormToTeam(this.teamCid, this.newForm);
        $("#showFormModal").modal('hide');
        this.formArray = [];
        this.teamFormArray = [];
        this.newForm = "";
        this.formArray = [];
    };
    TeamsComponent.prototype.deleteFormTeamArray = function (formCid) {
        this.projectService.deleteFormTeamArray(this.teamCid, formCid);
        $("#teamFormModal").modal('hide');
        this.formArray = [];
        this.teamFormArray = [];
        this.teamCid = "";
    };
    TeamsComponent.prototype.projectForm = function (project) {
        //{ name: 'Form2', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121',  status:'Online', cid:'a2121' }
        var name = "";
        for (var _i = 0, project_2 = project; _i < project_2.length; _i++) {
            var n = project_2[_i];
            name += n.name + " " + n.project + ",  ";
        }
        // console.log(name);
        return name;
    };
    TeamsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    TeamsComponent.prototype.showAssesorModal = function (teamName, teamCid, asrArray) {
        // this.projectService.getAssessors();
        this.extAsrNameArray = [];
        var n = 0;
        var temp = [];
        this.teamName = teamName;
        this.teamCid = teamCid;
        this.extAsrArray = asrArray;
        for (var _i = 0, _a = this.extAsrArray; _i < _a.length; _i++) {
            var m = _a[_i];
            for (var _b = 0, _c = this.asrArray; _b < _c.length; _b++) {
                var n_1 = _c[_b];
                if (m == n_1.cid) {
                    this.extAsrNameArray.push({ cid: n_1.cid, name: n_1.name });
                }
            }
        }
        $("#showAssesorModal").modal('show');
    };
    TeamsComponent.prototype.deleteAsrTeamArray = function (aCid) {
        this.projectService.deleteAsrTeamArray(this.teamCid, aCid);
        $("#showAssesorModal").modal('hide');
        this.extAsrNameArray = [];
        this.teamCid = "";
    };
    TeamsComponent.prototype.addNewAssesor = function () {
        this.projectService.addNewAssesorInTeam(this.tl, this.teamCid);
        $("#showAssesorModal").modal('hide');
    };
    TeamsComponent.prototype.showManagerModal = function (teamName, teamCid, asrArray) {
        // this.projectService.getAssessors();
        this.extMgrNameArray = [];
        var n = 0;
        var temp = [];
        this.teamName = teamName;
        this.teamCid = teamCid;
        this.extAsrArray = asrArray;
        for (var _i = 0, _a = this.extAsrArray; _i < _a.length; _i++) {
            var m = _a[_i];
            for (var _b = 0, _c = this.asrArray; _b < _c.length; _b++) {
                var n_2 = _c[_b];
                if (m == n_2.cid) {
                    this.extMgrNameArray.push({ cid: n_2.cid, name: n_2.name });
                }
            }
        }
        $("#showManagerModal").modal('show');
    };
    TeamsComponent.prototype.deleteMgrTeamArray = function (mCid) {
        this.projectService.deleteMgrTeamArray(this.teamCid, mCid);
        $("#showManagerModal").modal('hide');
        this.extMgrNameArray = [];
        this.teamCid = "";
    };
    TeamsComponent.prototype.addNewManager = function () {
        this.projectService.addNewManagerInTeam(this.tl, this.teamCid);
        $("#showManagerModal").modal('hide');
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teams',
        template: __webpack_require__("../../../../../src/app/home/organisation/teams/teams.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/organisation/teams/teams.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TeamsComponent);

var _a, _b;
//# sourceMappingURL=teams.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/organisation/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pb-3 text-center\" style=\"background:#fff;\">\n\n  <button type=\"button\" class=\"btn btn-primary col-sm-3 col-md-2 pt-3 pb-3\" (click)='user()'>+ User</button>\n\n    <table *ngIf='flag' id=\"example\" class=\"table table-striped \" cellspacing=\"0\" width=\"100%\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>User</th>\n                <th>Email</th>\n                <th>Project</th>\n                <th>Details</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let res of users; let i = index'>\n                <td>{{i+1}}</td>\n                <td>{{res.name}}</td>\n                <td>{{res.email}}</td>\n                <td>\n\n                    <button type=\"button\" class=\"btn btn-primary tt1\" (click)='showProjectModal(res.name, res.cid, res.project)' >\n                      {{calProject(res.project)}} Project/s\n                      <span class=\"tt2\" > {{ &nbsp; projectName(res.project) &nbsp; }} </span>\n                    </button>\n\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary \">  {{res.details}}  </button>\n                </td>\n            </tr>\n    </tbody>\n    </table>\n\n</div>\n\n<!-- Add user model -->\n<div class=\"modal fade\" id=\"newUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add new User</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='userName' placeholder=\"User Name\" class=\"col-8 form-control mb-5\" />\n            <br>\n            <input type=\"email\" name=\"\" value=\"\" [(ngModel)]='userEmail' placeholder=\"User Email\" class=\"col-8 form-control mb-5\" />\n            <br>\n            <select [(ngModel)]=\"projectAssociate\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of projectArray; let i=i' [ngValue]=opt  >{{opt.name}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='saveUser()'>Add user</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Add user model -->\n\n<!-- User Project model -->\n<div class=\"modal fade\" id=\"userProjectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Associated projects for {{userProjectName}}</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"height:300px; overflow-y: auto\">\n          <div class=\"row justify-content-center\" >\n\n            {{userProjectName}} is  assigned with  project/s :  <br>\n\n            <div  class=\"col-12\" *ngFor=\"let pro of userProjectArray; let i = index\">{{i+1}}. {{pro.name}} <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)='deleteProjectUserArray(pro.cid)' ></i> <br> </div>\n            <br>\n            <br>\n            <br>\n            <div class=\"col-12\" >Assign new project : </div>\n            <select [(ngModel)]=\"projectAs\" class=\"col-8 form-control mb-5\" >\n              <option *ngFor='let opt of projectArray; let i=i' [ngValue]=opt  >{{opt.name}}</option>\n            </select>\n            <div  class=\"col-12\"></div>\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"  (click)='assignNewProject()'>Assign</button>\n\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- User Project model -->\n"

/***/ }),

/***/ "../../../../../src/app/home/organisation/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  text-align: center; }\n\n.tt1 {\n  position: relative;\n  display: inline-block; }\n\n.tt1 .tt2 {\n  visibility: hidden;\n  background-color: gray;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\n  opacity: 0;\n  transition: opacity 1s; }\n\n.tt1:hover .tt2 {\n  visibility: visible;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/organisation/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.users = [];
        this.flag = false;
        this.projectArray = [];
        this.userProjectArray = [];
        this.sub = this.projectService.emitUsers.subscribe(function (res) {
            // console.log(res);
            _this.users = res;
            _this.flag = true;
            _this.display();
        });
        this.sub1 = this.projectService.emitProject.subscribe(function (res) {
            // console.log(res);
            _this.projectArray = res;
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.projectService.getUsers();
    };
    UserComponent.prototype.display = function () {
        if (this.flag) {
            $(document).ready(function () {
                var t = $('#example').DataTable({
                    "columnDefs": [{
                            "searchable": false,
                            "orderable": false,
                            "bSort": false
                        }],
                    "bSort": false
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
            });
        }
    };
    UserComponent.prototype.user = function () {
        this.projectService.getProject();
        $("#newUserModal").modal('show');
    };
    UserComponent.prototype.saveUser = function () {
        this.projectService.addUserArray(this.userName, this.userEmail, this.projectAssociate);
        this.userName = '';
        this.userEmail = '';
        $("#newUserModal").modal('hide');
        this.router.navigate(['/org'], { queryParams: { id: '1' } });
        this.projectAssociate = "";
        this.projectArray = [];
    };
    UserComponent.prototype.calProject = function (project) {
        var j = 0;
        for (var _i = 0, project_1 = project; _i < project_1.length; _i++) {
            var i = project_1[_i];
            j++;
        }
        return "" + j;
    };
    UserComponent.prototype.showProjectModal = function (userName, userCid, projectArray) {
        this.projectService.getProject();
        var n = 0;
        var temp = [];
        this.userProjectName = userName;
        this.userCid = userCid;
        this.userProjectArray = projectArray;
        for (var i = 0; i < this.userProjectArray.length; i++) {
            for (var j = 0; j < this.projectArray.length; j++) {
                if (this.userProjectArray[i].cid == this.projectArray[j].cid) {
                    temp.push(j);
                }
            }
        }
        // for(let i = 0; i<temp.length; i++) {
        //   this.projectArray.splice([temp[i]],1);
        // }
        $("#userProjectModal").modal('show');
    };
    UserComponent.prototype.assignNewProject = function () {
        this.projectService.assignNewProjectToUser(this.userCid, this.projectAs);
        $("#userProjectModal").modal('hide');
        this.projectArray = [];
        this.userProjectArray = [];
        this.projectAs = "";
    };
    UserComponent.prototype.deleteProjectUserArray = function (projCid) {
        this.projectService.deleteProjectUserArray(this.userCid, projCid);
        // console.log(this.userCid);
        $("#userProjectModal").modal('hide');
        this.projectArray = [];
        this.userProjectArray = [];
    };
    UserComponent.prototype.projectName = function (project) {
        var name = "";
        for (var _i = 0, project_2 = project; _i < project_2.length; _i++) {
            var n = project_2[_i];
            name += n.name + " ,";
        }
        // console.log(name);
        return name;
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/home/organisation/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/organisation/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project/graph1/graph1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <div class=\"row justify-content-center\" >\n\n    <div class=\"col-sm-4 text-center\" >\n      <div class=\"graph-icon\" >\n       .8 GB <br> <i class=\"fab fa-cloudversify\"></i>\n      </div>\n      <div class=\"display-size\" > Space Used </div>\n    </div>\n\n    <div class=\"col-sm-4 text-center\" >\n      <div class=\"graph-icon\" >\n        101 <br> <i class=\"fas fa-mobile-alt\"></i>\n      </div>\n      <div class=\"display-size\" > Device Connected </div>\n    </div>\n\n    <div class=\"col-sm-4 text-center\" >\n      <div class=\"graph-icon\" >\n      230   <br> <i class=\"far fa-comment-alt\"></i>\n      </div>\n      <div class=\"display-size\" > Msg Send </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/project/graph1/graph1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n\n.graph-icon {\n  height: 140px;\n  border: 3px solid #e46592;\n  margin: auto;\n  margin-top: 25px;\n  min-width: 140px;\n  max-width: 140px;\n  border-radius: 50%;\n  background: radial-gradient(circle, #bb2256, #284e71);\n  font-size: 2.3rem;\n  color: #FFF;\n  padding-top: .9rem;\n  /* Safari */\n  transition: .7s; }\n\n.graph-icon:hover {\n  border: 3px solid #284e71; }\n\n.display-size {\n  color: #284e71;\n  font-size: 1.3rem;\n  font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project/graph1/graph1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Graph1Component = (function () {
    function Graph1Component() {
    }
    Graph1Component.prototype.ngOnInit = function () {
    };
    return Graph1Component;
}());
Graph1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph1',
        template: __webpack_require__("../../../../../src/app/home/project/graph1/graph1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/project/graph1/graph1.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Graph1Component);

//# sourceMappingURL=graph1.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project/graph2/graph2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project/graph2/graph2.component.html":
/***/ (function(module, exports) {

module.exports = "Project Response\n<div echarts [options]=\"option1\" class=\"demo-chart\" style=\"height:98%; width:100%\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/home/project/graph2/graph2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Graph2Component = (function () {
    function Graph2Component() {
    }
    Graph2Component.prototype.ngOnInit = function () {
        this.getGraph1();
    };
    Graph2Component.prototype.getGraph1 = function () {
        this.option1 = {
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['ODF', 'Toilet Location', 'SAASA', 'Test Project']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['AUG', 'SEPT', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            color: ['#e91e63', '#78d4d8'],
            series: [
                {
                    name: 'ODF',
                    type: 'line',
                    stack: 'ACA',
                    areaStyle: { normal: {} },
                    data: [20, 132, 144, 154, 190, 230, 410],
                    smooth: true
                },
                {
                    name: 'Toilet Location',
                    type: 'line',
                    stack: 'ACA',
                    areaStyle: { normal: {} },
                    data: [40, 182, 191, 234, 290, 330, 310],
                    smooth: true
                },
                {
                    name: 'SAASA',
                    type: 'line',
                    stack: 'ACA',
                    areaStyle: { normal: {} },
                    data: [50, 232, 266, 354, 390, 330, 410],
                    smooth: true
                },
                {
                    name: 'Test Project',
                    type: 'line',
                    stack: 'ACA',
                    areaStyle: { normal: {} },
                    data: [120, 132, 201, 234, 330, 370, 380],
                    smooth: true
                },
            ]
        };
    };
    return Graph2Component;
}());
Graph2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph2',
        template: __webpack_require__("../../../../../src/app/home/project/graph2/graph2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/project/graph2/graph2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Graph2Component);

//# sourceMappingURL=graph2.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project/graph3/graph3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height:165px\" >\n  <div class=\"row justify-content-center\" style=\"perspective: 500px;\">\n\n    <div class=\"col-8\" >\n      <div class=\"row justify-content-center  Gdisplay-3\" >\n\n        <div class=\"col-5 graph-display01 \"> 6 &nbsp; </div>\n        <div class=\"col-7 graph-display2 \" >Projects</div>\n\n      </div>\n    </div>\n\n    <div class=\"col-8\" >\n      <div class=\"row justify-content-center  Gdisplay-3\" >\n        <div class=\"col-5 graph-display01 \" >25 &nbsp; </div>\n        <div class=\"col-7 graph-display2 \" >Online Froms</div>\n      </div>\n    </div>\n\n    <div class=\"col-8\" >\n      <div class=\"row justify-content-center  Gdisplay-3\" >\n        <div class=\"col-5 graph-display01 \" >25 &nbsp; </div>\n        <div class=\"col-7 graph-display2 \" >Offline Froms</div>\n      </div>\n    </div>\n\n    <div class=\"col-8\" >\n      <div class=\"row justify-content-center  Gdisplay-3\" >\n        <div class=\"col-5 graph-display01 \" >413 &nbsp; </div>\n        <div class=\"col-7 graph-display2 \" >Assesors</div>\n      </div>\n    </div>\n\n    <div class=\"col-8\" >\n      <div class=\"row justify-content-center  Gdisplay-3\" >\n        <div class=\"col-5 graph-display01 \" >652 &nbsp; </div>\n        <div class=\"col-7 graph-display2 \" >Responses</div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/project/graph3/graph3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n\n.graphDisplay2 {\n  margin: auto;\n  height: 35px;\n  margin-top: 7px;\n  width: 100%;\n  border: 2px solid #284e71;\n  border-radius: 5px;\n  background: linear-gradient(to bottom, #7e95a8, #284e71);\n  color: #FFF;\n  font-size: 1.6rem; }\n\n.graph-display1 {\n  color: #284e71;\n  text-align: right;\n  font-size: 1.8rem; }\n\n.graph-display01 {\n  background-color: #284e71;\n  color: #FFF;\n  border: 1px solid #FFF;\n  border-radius: 4px;\n  text-align: center; }\n\n.graph-display2 {\n  color: #284e71;\n  text-align: left; }\n\n.Gdisplay-3 {\n  margin-top: 3px;\n  /* Safari */\n  transition: .5s;\n  font-size: 1.4rem; }\n\n.Gdisplay-3:hover {\n  -webkit-transform: rotate3d(0, 1, 0, 40deg);\n          transform: rotate3d(0, 1, 0, 40deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project/graph3/graph3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Graph3Component = (function () {
    function Graph3Component() {
    }
    Graph3Component.prototype.ngOnInit = function () {
    };
    return Graph3Component;
}());
Graph3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph3',
        template: __webpack_require__("../../../../../src/app/home/project/graph3/graph3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/project/graph3/graph3.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Graph3Component);

//# sourceMappingURL=graph3.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n\n  <div class=\"row ml-0 mr-0 mb-3\" style=\"border-radius:3px\">\n    <div class=\"col-md-6 col-sm-12 p-0 mt-4\" style=\"background:#fff;box-shadow:0px 2px 2px #bbb;\">\n      <div class=\"col-md-12 p-3\"><!--background:#3399ff-->\n        <div class=\"col-sm-12 p-2 homeDivStyle\" style=\"height:240px;\">\n          <app-graph1></app-graph1>\n        </div>\n      </div>\n      <div class=\"col-md-12 p-3\">\n        <div class=\"col-sm-12 p-2 homeDivStyle\">\n          <app-graph3></app-graph3>\n          <div class=\"text-center p-3\">\n            <button type=\"button\" class=\"btn btn-primary col-lg-3 col-md-4 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#projectModal\">+ Project</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 mt-4 p-0\" style=\"background:#fff;box-shadow:1px 2px 1px #BBB;\">\n      <div class=\"col-md-12 p-3\">\n        <div class=\"col-sm-12 p-2 homeDivStyle\" style=\"height:525px;\">\n          <app-graph2></app-graph2>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\" >\n    <div *ngFor='let project of projects; let i = index' class=\"col-md-4 col-sm-12 pt-3\">\n      <div class=\"col-sm-12 pl-0 pr-0 mb-3 crdHvr\">\n        <div class=\"collapse\" id=\"collapseExample1\">\n            <i class=\"fa fa-close float-right p-3 collapsed\" aria-hidden=\"true\" data-toggle=\"collapse\" data-target=\"#collapseExample1\" aria-expanded=\"true\" aria-controls=\"collapseExample\"></i>\n            <h4 class=\"text-left col-11 pt-5 pl-4 pb-0 pr-3 mb-0\">Project Description</h4>\n            <p class=\"pt-0 pl-4 pr-4 text-justify mb-5\">{{project.desc}}</p>\n        </div>\n        <i class=\"fa fa-ellipsis-v float-right pl-3 pr-4 pt-3 pb-3\" aria-hidden=\"true\" data-toggle=\"collapse\" data-target=\"#collapseExample1\" aria-expanded=\"false\" aria-controls=\"collapseExample\"></i>\n        <h4 class=\"text-left col-11 pt-5 pl-4 pb-5 pr-3 mb-0\">\n          <span>{{project.name}}</span>\n          <small class=\"pt-2\"> {{project.cdate}}</small>\n          <small class=\"pt-2\"><u>Short Description:</u> {{project.desc}}</small>\n        </h4>\n        <div class=\"row m-0 pt-2 pb-1 bt\">\n          <p class=\"col-4 text-center mb-0 p-0\">Forms: <span>{{project.form}}</span></p>\n          <p class=\"col-4 text-center mb-0 p-0\">Users: <span>{{project.user}}</span></p>\n          <p class=\"col-4 text-center mb-0 p-0\">Assesor: <span>{{project.assesor}}</span></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"modal fade\" id=\"projectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">+ New Project</h5>\n      </div>\n      <div class=\"modal-body text-center\">\n        <label class=\"row ml-0 mr-0 mb-3\">\n          <span class=\"col-5 text-left pt-2 pl-0\">Project name:</span>\n          <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='pname' class=\"col-7 form-control\" />\n        </label>\n\n        <label class=\"row ml-0 mr-0 mb-3\">\n          <span class=\"col-5 text-left pt-2 pl-0\">Project desc:</span>\n          <input type=\"text\" name=\"\" value=\"\" [(ngModel)]='pdesc' class=\"col-7 form-control\" >\n        </label>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary col-sm-4 pt-3 pb-3\" data-target=\"#addRules\" (click)='newProject()'>Initialize project</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = (function () {
    function ProjectComponent(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.projects = [];
        this.projectService.emitProject.subscribe(function (res) {
            _this.projects = res;
            // console.log(this.projects);
        });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projectService.getProject();
    };
    ProjectComponent.prototype.newProject = function () {
        // console.log(this.pname);
        // console.log(this.pdesc);
        this.projectService.addNewProject(this.pname, this.pdesc);
        $('#projectModal').modal('hide');
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/home/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/project/project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], ProjectComponent);

var _a;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/response/response-table/response-table.component.html":
/***/ (function(module, exports) {

module.exports = "<style >\n  .responseImg{\n    max-height: 60px;\n    border-radius: 3px;\n  }\n\n  table.dataTable thead .sorting,\n  table.dataTable thead .sorting_asc,\n  table.dataTable thead .sorting_desc {\n      background : none;\n  }\n</style>\n\n<div class=\"container-fluid mt-4 pb-3 text-center\" style=\"background:#fff;\">\n  <div *ngIf='!flag'>\n    <br>\n    <br>\n    <br>\n    <br>\n    <h4> Just a moment please....</h4>\n    <br>\n    <br>\n    <br>\n  </div>\n\n  <div class=\"\" style=\" width:100%;   overflow-x: auto\">\n    <table *ngIf='flag' id=\"exampleFormResponse\" class=\" display table table-striped  table-responsive-md\" cellspacing=\"0\" >\n      <thead>\n          <tr>\n              <th></th>\n              <th>Details</th>\n              <th *ngFor=\"let head of header\" style=\"white-space: nowrap; text-overflow: ellipsis;\">\n                &nbsp;  {{head}} &nbsp;\n              </th>\n          </tr>\n      </thead>\n      <tfoot>\n        <tr>\n            <th style=\"opacity:0\" ></th>\n            <th style=\"opacity:0\" ></th>\n            <th></th>\n            <th  *ngFor=\"let head1 of headerMinusOne\"  style=\"opacity:0\">\n            </th>\n        </tr>\n      </tfoot>\n      <tbody>\n        <tr *ngFor='let res of response; let i = index'>\n              <td>{{i+1}}</td>\n              <td>\n                <button type=\"button\" class=\"btn btn-primary\" (click)='getDetails(i,res)' >  Details  </button>\n              </td>\n              <td *ngFor = 'let temp of res; let j = index' >\n\n                <span *ngIf='temp.type != \"camera\" &&  temp.type != \"file\" && temp.type != \"video\" && temp.type!= \"tag\"' >{{temp.value}}</span>  <!-- normal T E X T   V A L U E  -->\n\n                <span *ngIf='temp.type == \"tag\" ' >                                                                                              <!-- T A G G E D  V A L U E  -->\n                  <span style=\"display: none\" >{{temp.value}} </span>\n                  <button *ngIf='temp.value == \"\"' class=\"noTag\" (click)=\"changeTag(i, res)\" > &nbsp;&nbsp; No-Tag &nbsp;&nbsp; </button>\n                  <button *ngIf='temp.value == \"Flagged\"'  class=\"flaggedTag\" (click)=\"changeTag(i, res)\" disabled> &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Pending\"'  class=\"pendingTag\" (click)=\"changeTag(i, res)\" disabled> &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Verified\"' class=\"verifiedTag\"(click)=\"changeTag(i, res)\" > &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Archived\"' class=\"archivedTag\"(click)=\"changeTag(i, res)\" > &nbsp;{{temp.value}}&nbsp; </button>\n\n                </span>\n\n                <span *ngIf='temp.type == \"camera\" ' > <img *ngIf='temp.value'  class=\"responseImg\" src={{temp.value}} (click)='imageModal(temp.value)' style=\"max-width:60px\" /> <span style=\"display: none\" >{{temp.value}}</span> </span>  <!-- I M A G E   V A L U E  -->\n\n                <span *ngIf='temp.type == \"video\" ' > <video *ngIf='temp.value' class=\"responseImg\" style=\"width:200px !important\" controls> <source src={{temp.value}}> </video> <span style=\"display: none\" >{{temp.value}}</span> </span>  <!-- V I D E O   V A L U E  -->\n\n                <span *ngIf='temp.type == \"file\" ' >\n                  <button  *ngIf='temp.value' type=\"button\" class=\"btn btn-primary\" (click)='openImageNewTab(temp.value)'>  <i class=\"fa fa-download\" aria-hidden=\"true\"></i>  </button>   <!-- F I L E   V A L U E  -->\n                  <span style=\"display: none\" >{{temp.value}}</span>\n                </span>  <!-- F I L E   V A L U E  -->\n\n              </td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<!-- Details modal starts here-->\n<div class=\"modal fade\" id=\"getDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"width:600px; height:650px;\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Details</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"  height:640px;  overflow-y: auto\">\n        <div *ngFor=\"let temp of detailRes; let i = index\">\n          <hr>\n\n          <div class=\"row\" style=\"padding-left:20px\">\n            <b>{{header[i]}} : </b> &nbsp; &nbsp;\n          </div>\n\n          <div class=\"row\" style=\"padding-left:20px\">\n\n            <div class=\"col-10\" >\n              <span *ngIf='temp.type != \"camera\" &&  temp.type != \"file\" && temp.type != \"video\" && temp.type !=\"tag\" ' >{{temp.value}}</span>  <!-- normal T E X T   V A L U E  -->\n\n\n                <span *ngIf='temp.type == \"tag\" ' >                             <!-- T A G G E D  V A L U E  -->\n\n                  <button *ngIf='temp.value == \"\"' class=\"noTag\" (click)=\"changeTag(i, detailRes)\" disabled> &nbsp;&nbsp; No-Tag &nbsp;&nbsp; </button>\n                  <button *ngIf='temp.value == \"Flagged\"'  class=\"flaggedTag\" (click)=\"changeTag(i, detailRes)\"  disabled> &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Pending\"'  class=\"pendingTag\" (click)=\"changeTag(i, detailRes)\"  disabled> &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Verified\"' class=\"verifiedTag\"(click)=\"changeTag(i, detailRes)\"  disabled> &nbsp; {{temp.value}} &nbsp; </button>\n                  <button *ngIf='temp.value == \"Archived\"' class=\"archivedTag\"(click)=\"changeTag(i, detailRes)\"  disabled> &nbsp;{{temp.value}}&nbsp; </button>\n\n                </span>\n\n              <span *ngIf='temp.type == \"camera\" ' > <img *ngIf='temp.value'  class=\"\" src={{temp.value}} (click)='imageModal(temp.value)' style=\"max-width:230px\" /> <span style=\"display: none\" >{{temp.value}}</span> </span>  <!-- I M A G E   V A L U E  -->\n\n              <span *ngIf='temp.type == \"video\" ' > <video *ngIf='temp.value' class=\"\" style=\"width:200px !important\" controls> <source src={{temp.value}}> </video> <span style=\"display: none\" >{{temp.value}}</span> </span>  <!-- V I D E O   V A L U E  -->\n\n              <span *ngIf='temp.type == \"file\" ' >\n                <button  *ngIf='temp.value' type=\"button\" class=\"btn btn-primary\" (click)='openImageNewTab(temp.value)'>  <i class=\"fa fa-download\" aria-hidden=\"true\"></i>  </button>   <!-- F I L E   V A L U E  -->\n                <span style=\"display: none\" >{{temp.value}}</span>\n              </span>  <!-- F I L E   V A L U E  -->\n            </div>\n            <div class=\"col-1\" >\n              <div *ngIf='i>4' >\n                <i *ngIf=\"temp.flagged\" class=\"fa fa-flag\" aria-hidden=\"true\" (click)=\"flagCommentModal( i, detailRes[2].value, temp.cid)\"></i>\n                <i *ngIf=\"!temp.flagged\" class=\"fa fa-flag-o\" aria-hidden=\"true\" (click)=\"flagCommentModal( i, detailRes[2].value, temp.cid)\" ></i>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"verifyAll\" type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3 verifiedTag\" data-toggle=\"modal\" (click)=\"verifyTag()\" >Accept</button>\n        <button *ngIf=\"saveFlag\" type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" (click)=\"saveFlagFun()\" >Save Flag</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Details modal ends here-->\n\n<!-- Flag comment modal starts here-->\n<div class=\"modal fade\" id=\"flagComment\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"margin-top:200px; margin-left:100px\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Flag Comments </h5>\n        <h5> ( Optional ) </h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"   overflow-y: auto\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='flaggedMsg' (change)='flagMsg()'>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\" (click)='flagMsg()'>Close</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" (click)=\"saveFlagFun()\">Save Flag</button>\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\" (click)=\"cancelFlag()\">Close</button> -->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Response comment modal endss here-->\n\n<!-- Change Tag modal starts here-->\n<div class=\"modal fade\" id=\"changeTag\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"margin-top:200px; margin-left:100px\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Change Flag </h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"overflow-y: auto\">\n        <div class=\"row justify-content-md-center\" >\n\n          <div class=\"col-12\" > <button class=\"noTag\" style=\"padding:5px; margin : 8px\" (click)=\"newTag('')\" > &nbsp;&nbsp; No-Tag &nbsp;&nbsp; </button> </div>\n\n          <div class=\"col-12\" > <button class=\"verifiedTag\" style=\"padding:5px; margin : 8px \" (click)=\"newTag('Verified')\"> &nbsp; Verified &nbsp; </button> </div>\n\n          <div class=\"col-12\" > <button class=\"archivedTag\" style=\"padding:5px;  margin : 8px\" (click)=\"newTag('Archived')\"> &nbsp;Archived&nbsp; </button> </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" (click)=\"unFlagFun()\">Update</button> -->\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Change Tag comment modal endss here-->\n\n<!-- Image modal -->\n<div class=\"modal fade\" id=\"imageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"width:750px; height:700px;\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Image View</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\"overflow-y: auto\">\n        <div class=\"row justify-content-md-center\" >\n\n          <div class=\"col-7\" >\n              <img class=\"north\" src={{imgUrl}} style=\"max-width:100%\"/>\n          </div>\n          <div class=\"col-5\" >\n            <div class=\"row\" >\n              <div class=\"col-12\" style=\"height:200px\">\n                <hr>\n                <button type=\"button\" class=\"btn btn-primary\"  (click)=\"openImageNewTab(imgUrl)\">Open in new tab </button>\n              </div>\n              <div class=\"col-12\" style=\"height:100%; width:100%\">\n\n                 <!-- GOOGLE MAP -->\n\n                <!-- <iframe frameborder=\"0\" style=\"border:0\" style=\"width:100%; height:100%\"\n                [src]='sanitizer.bypassSecurityTrustResourceUrl(mapSrc)' allowfullscreen>\n              </iframe>-->\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Image modal -->\n"

/***/ }),

/***/ "../../../../../src/app/home/response/response-table/response-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/response/response-table/response-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// API KEY = AIzaSyA7ncvWAZbtaSujgwstq290g_Y1VskhlXE
var ResponseTableComponent = (function () {
    function ResponseTableComponent(projectService, activatedRoute, sanitizer) {
        var _this = this;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.response = [];
        this.header = [];
        this.flag = false;
        this.saveFlag = false;
        this.flaggedMsg = '';
        this.verifyAll = false;
        this.lat = 28.6226475;
        this.lng = 77.24714399999999;
        this.headerMinusOne = [];
        this.sub = this.projectService.emitFormResponse.subscribe(function (res) {
            console.log(res);
            _this.response = res;
            // this.projectService.sendSocketMessage('form');
            // this.projectService.connectSocket(this.formId);
            // this.projectService.openSocket();
            // this.projectService.messageSocket();
        });
        this.sub1 = this.projectService.emitTableHeader.subscribe(function (res) {
            console.log(res);
            _this.header = res;
            _this.headerMinusOne = new Array(_this.header.length - 1);
            console.log(_this.headerMinusOne);
            _this.flag = true;
            _this.display();
        });
        this.mapSrc = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA7ncvWAZbtaSujgwstq290g_Y1VskhlXE&q=" + this.lat + "," + this.lng + "";
    }
    ResponseTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.formId = params.id;
            _this.projectService.getFormResponseArray(_this.formId);
        });
    };
    ResponseTableComponent.prototype.photoURL = function () {
        return this.mapSrc;
    };
    ResponseTableComponent.prototype.display = function () {
        if (this.flag) {
            $(document).ready(function () {
                // Setup - add a text input to each footer cell
                $('#exampleFormResponse tfoot th').each(function () {
                    var title = $(this).text();
                    $(this).html('<input type="text" placeholder="Version ' + title + '" />');
                });
                $("#exampleFormResponse").DataTable({
                    aaSorting: [],
                    responsive: true,
                    dom: 'lBfrtip',
                    buttons: [
                        'csv', 'pdf',
                    ]
                });
                var table = $('#exampleFormResponse').DataTable();
                table.columns().every(function () {
                    var that = this;
                    $('input', this.footer()).on('keyup change', function () {
                        if (that.search() !== this.value) {
                            that
                                .search(this.value)
                                .draw();
                        }
                    });
                });
                // Image Roation
                var rotation = 0;
                $.fn.rotate = function (degrees) {
                    $(this).css({ 'transform': 'rotate(' + degrees + 'deg)' });
                };
                $('.north').click(function () {
                    rotation += 90;
                    $('.north').rotate(rotation);
                });
            });
        }
    };
    ResponseTableComponent.prototype.openImageNewTab = function (url) {
        window.open(url, '_blank');
    };
    ResponseTableComponent.prototype.imageModal = function (url) {
        this.imgUrl = url;
        $('#imageModal').modal('show');
    };
    ResponseTableComponent.prototype.getDetails = function (i, res) {
        console.log(i);
        console.log(res);
        this.detailPos = i;
        this.detailRes = res;
        this.tagPos = i;
        this.saveFlag = false;
        $('#getDetails').modal("show");
    };
    ResponseTableComponent.prototype.changeTag = function (i, res) {
        this.resIdForTag = res[2].value;
        this.tagPos = i;
        $("#changeTag").modal("show");
    };
    ResponseTableComponent.prototype.newTag = function (tag) {
        console.log(this.resIdForTag);
        console.log(this.tagPos);
        this.response[this.tagPos][4].value = tag;
        $("#changeTag").modal("hide");
        this.projectService.updateTag(this.resIdForTag, tag);
    };
    ResponseTableComponent.prototype.flagCommentModal = function (arrayPos, resId, cid) {
        this.elementCid = cid;
        this.resId = resId;
        this.arrayPos = arrayPos;
        if (this.response[this.detailPos][this.arrayPos].flagged) {
            this.response[this.detailPos][this.arrayPos].flagged = false;
            this.flaggedMsg = '';
            this.saveFlag = true;
            if (this.response[this.detailPos][this.arrayPos].flagMsg) {
                this.flaggedMsg = this.response[this.detailPos][this.arrayPos].flagMsg;
            }
        }
        else {
            this.response[this.detailPos][this.arrayPos].flagged = true;
            this.flaggedMsg = '';
            this.saveFlag = true;
            if (this.response[this.detailPos][this.arrayPos].flagMsg) {
                this.flaggedMsg = this.response[this.detailPos][this.arrayPos].flagMsg;
            }
            $('#flagComment').modal("show");
        }
        // Check for any responce is flagged or not
        var tag = '';
        for (var _i = 0, _a = this.response[this.detailPos]; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.flagged) {
                tag = "Pending";
                break;
            }
        }
        // Update status od flag to VERIFIED
        if (tag != "Pending" && (this.response[this.detailPos][4].value == "Pending" || this.response[this.detailPos][4].value == "Flagged")) {
            this.verifyAll = true;
            this.saveFlag = false;
        }
        else {
            this.verifyAll = false;
            this.saveFlag = true;
        }
    };
    ResponseTableComponent.prototype.flagMsg = function () {
        // console.log(this.flaggedMsg);
        this.response[this.detailPos][this.arrayPos].flagMsg = this.flaggedMsg + "";
    };
    ResponseTableComponent.prototype.saveFlagFun = function () {
        this.response[this.detailPos][4].value = "Flagged";
        console.log(this.response[this.detailPos]);
        console.log(this.resId);
        this.projectService.flagResponse(this.resId, this.response[this.detailPos]);
        this.resId = "";
        this.detailPos = "";
        this.flaggedMsg = "";
        $('#getDetails').modal("hide");
    };
    ResponseTableComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
    };
    ResponseTableComponent.prototype.verifyTag = function () {
        this.response[this.detailPos][4].value = "Verified";
        this.projectService.updateTag(this.response[this.detailPos][2].value, "Verified");
        $('#getDetails').modal("hide");
    };
    return ResponseTableComponent;
}());
ResponseTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-response-table',
        template: __webpack_require__("../../../../../src/app/home/response/response-table/response-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/response/response-table/response-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object])
], ResponseTableComponent);

var _a, _b, _c;
//# sourceMappingURL=response-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/response/response.component.html":
/***/ (function(module, exports) {

module.exports = "<style >\n  .responseImg{\n    max-height: 60px;\n    border-radius: 2px;\n  }\n\n  table.dataTable thead .sorting,\n  table.dataTable thead .sorting_asc,\n  table.dataTable thead .sorting_desc {\n      background : none;\n  }\n</style>\n\n<div class=\"container-fluid mt-4 pb-3 text-center\" style=\"background:#fff;\">\n    <h2>Response Table</h2>\n    <div *ngIf='!flag'>\n      <br>\n      <br>\n      <br>\n      <br>\n      <h4>Seems like there is not data to display! Hang on while we check....</h4>\n      <br>\n      <br>\n      <br>\n    </div>\n\n    <table *ngIf='flag' id=\"example\" class=\"table table-striped \" cellspacing=\"0\" width=\"100%\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>From</th>\n                <th>Project</th>\n                <th>Responces</th>\n                <th>Details</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor='let res of response; let i = index'>\n                <td>{{i+1}}</td>\n                <td>\n                  <span class=\"tt1\" > {{res.fname | shorten: 35: '...'}}\n                    <span class=\"tt2\" > &nbsp; {{res.fname}} &nbsp; </span>\n                  </span>\n                </td>\n                <td>\n                  <span class=\"tt1\" > {{res.pname | shorten: 35: '...'}}\n                    <span class=\"tt2\" > &nbsp; {{res.pname}} &nbsp; </span>\n                  </span>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)='getData(res.fid)' [disabled]=\"resMoreThanZero(res.responses)\" > {{res.responses}} Responses  </button>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"details(i)\">  Details  </button>\n                </td>\n            </tr>\n      </tbody>\n    </table>\n\n    <!-- <button type=\"button\" class=\"btn btn-primary col-sm-3 col-md-2 pt-3 pb-3 mt-4\" (click)='reload()'>Reload</button> -->\n</div>\n\n<!-- Form Detials Stats Here -->\n<div class=\"modal fade\" id=\"responseDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"width:600px; height:650px;\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Summary</h5>\n      </div>\n      <div class=\"modal-body text-center\" style=\" overflow-y: auto\">\n        <div class=\"container-fluid\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-10\">\n              <h4> Project Name </h4> <br>\n                <h5>Form Name</h5>\n            </div>\n            <div class=\"col-11\">\n              Form Version 1.3\n            </div>\n            <div class=\"col-11\" style=\"height:150px; overflow-y: auto; border: 2px solid gray; \">\n            </div>\n            <div class=\"col-11\" style=\"margin-top: 30px\">\n              <!-- <button type=\"button\" name=\"button\" class=\" btn  btn-primary\"> 52 Responces </button> -->\n              <h3 class=\"primaryText\" >54 Responses </h3>\n              <button type=\"button\" name=\"button\" class=\"flaggedTag\">4 Flagged</button>\n              <button type=\"button\" name=\"button\" class=\"pendingTag\">3 Pending</button>\n              <button type=\"button\" name=\"button\" class=\"verifiedTag\">6 Verified</button>\n              <button type=\"button\" name=\"button\" class=\"archivedTag\">10 Archived</button>\n\n            </div>\n\n            <div class=\"col-11 text-left\"  style=\"margin-top: 30px\">\n                <i class=\"fas fa-arrow-alt-right\"></i> <b> Created by : </b> Sam Roster <br>\n                <i class=\"fas fa-arrow-alt-right\"></i> <b> Time : </b> 31st Dec, 2017 <br>\n                <i class=\"fas fa-arrow-alt-right\"></i> <b> Description : </b> Description Goes here! <br>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-primary col-sm-3 pt-3 pb-3\" data-toggle=\"modal\" data-target=\"#addRules\" (click)='saveUser()'>Add user</button> -->\n        <button type=\"button\" class=\"btn btn-secondary col-sm-3 pt-3 pb-3\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Form Detials Ends Here -->\n"

/***/ }),

/***/ "../../../../../src/app/home/response/response.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*transitions mixins*/\n/*variables*/\nbody {\n  font-size: 600 !important; }\n\nbutton {\n  color: white !important; }\n\nbutton:hover {\n  color: #284e71 !important; }\n\n.bg-primary {\n  background-color: #284e71 !important; }\n\ntfoot input {\n  width: 50%;\n  box-sizing: border-box; }\n\ntable.dataTable tfoot th, table.dataTable tfoot td {\n  border: 0px !important; }\n\nss-multiselect-dropdown div ul li .dropdown-item.active, ss-multiselect-dropdown div ul li .dropdown-item:active, ss-multiselect-dropdown div ul li .dropdown-item:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #acd8ff !important; }\n\nth {\n  text-align: center; }\n\n.noTag {\n  font-weight: 600;\n  color: gray !important;\n  background-color: #eaeaea;\n  border: 2px solid #c5c5c5;\n  border-radius: 4px; }\n\n.flaggedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd27f;\n  border: 3px solid orange;\n  border-radius: 4px; }\n\n.pendingTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #7ff0ff;\n  border: 3px solid #2196F3;\n  border-radius: 4px; }\n\n.verifiedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #cffd9a;\n  border: 3px solid #8BC34A;\n  border-radius: 4px; }\n\n.archivedTag {\n  color: #525351 !important;\n  font-weight: bold;\n  background-color: #ffd9d7;\n  border: 3px solid #ff796f;\n  border-radius: 4px; }\n\n/*Common css*/\na:focus,\na:hover,\ninput:focus,\ninput:hover,\nbutton:hover,\n.fa:hover {\n  cursor: pointer;\n  outline: none; }\n\n/*remove box-shadow issues*/\nbutton:focus {\n  box-shadow: 0px 12px 20px -10px #999 !important; }\n\n.cl2 {\n  width: 16.67%;\n  float: float-left; }\n\n.cl8 {\n  width: 66.67%;\n  float: float-left; }\n\nbody {\n  color: #141415;\n  background-color: #eeeeef;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #ebf5f2;\n  border-radius: 0px; }\n\n::-webkit-scrollbar {\n  width: 8px;\n  background-color: #F5F5F5; }\n\n::-webkit-scrollbar-thumb {\n  border: 1px solid #386383;\n  background-color: #FFF;\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */ }\n\n::-webkit-scrollbar-thumb:hover {\n  background-image: -webkit-gradient(linear, 10% 0%, 45% 54%, from(gray), to(#386383), color-stop(0.6, #888));\n  /* 24a1b5 : 28b6cc */\n  cursor: pointer; }\n\n.btn {\n  box-shadow: 0px 15px 20px -10px #ddd;\n  /* App Button Material Shadow Surface */\n  font-weight: bold; }\n\n.btn:hover {\n  box-shadow: 0px 7px 5px -5px #aaa; }\n\n.btn-primary,\n.btn-primary:active {\n  background: #284e71;\n  border-color: #284e71;\n  color: #141415; }\n\n.btn-primary:hover {\n  background: #6dbad4;\n  border-color: #6dbad4;\n  color: #424341; }\n\n.btn-primary:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n  transition-duration: 0.15s; }\n\n.btn-secondary {\n  color: #141415 !important; }\n\n.cbx {\n  box-shadow: 0px 2px 2px #ccc;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  background: -ms-linear-gradient(to left, #e2f8ff, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.cbx:hover {\n  box-shadow: none;\n  transition: all 0.45s linear 0.04s;\n  background: linear-gradient(to left, #94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #94cbdb);\n  background: -ms-linear-gradient(#94cbdb, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF, #FFF);\n  border: 3px solid #386383;\n  border-radius: 5px; }\n\n.pos-bl {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 16.667%;\n  font-size: 10px;\n  color: #bb2256;\n  transition: all 0.15s linear 0.01s; }\n\n/*Navigation*/\n.navbar-toggleable-md {\n  box-shadow: 0px 20px 15px -15px #aaa;\n  /*App Top Menu Bar Material Shadow*/\n  height: 47px; }\n\n.navbar-toggleable-md .fa.text-white {\n  font-size: 22px;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n/*Hamburger Menu*/\n.navbar-toggleable-md .fa-bars.text-white,\n.navbar-toggleable-md .fa-times.text-white {\n  background: #284e71;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #555;\n  display: none;\n  cursor: pointer;\n  width: 47px;\n  height: 47px;\n  line-height: 47px; }\n\n.navbar-toggleable-md .fa.active {\n  display: block; }\n\n.navbar-toggleable-md .fa.active:hover {\n  background: #284e71; }\n\n/*Hamburger Menu Ends*/\n.fa-sign-out:hover {\n  color: #c9433f !important; }\n\n/*Navigation Left*/\n.slider-fix {\n  background: linear-gradient(to bottom, #386383, #bac9d4ad);\n  position: fixed;\n  top: 47px;\n  left: 0;\n  z-index: 1031;\n  box-shadow: 1px 0px 2px #a0a0a0;\n  /*App Left Menu Bar Material Shadow*/\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .frame .slider-fix,\n.left-menu-close .frame .slider-fix .nav-item.pos-bl {\n  left: -17%;\n  opacity: 0;\n  transition: all 0.15s linear 0.01s; }\n\n.left-menu-close .wrap-cont {\n  max-width: 100%;\n  transition: all 0.15s linear 0.01s; }\n\n.black-shadow {\n  opacity: 0;\n  z-index: -100;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\n.black-shadow.active {\n  opacity: 1;\n  z-index: 1030; }\n\n.frame {\n  height: 95vh; }\n\nul.nav.flex-column {\n  height: 95vh; }\n\n.slider-fix a.nav-link {\n  transition: all 0.15s linear 0.01s;\n  color: #FFF;\n  padding: 1em;\n  text-transform: capitalize; }\n\n.slider-fix a.nav-link:hover {\n  transition: all 0.15s linear 0.01s;\n  color: #284e71;\n  background: #FFF; }\n\n.fa-6 {\n  font-size: 22px;\n  width: 45px;\n  position: relative;\n  top: 3px; }\n\n/* Container\n.container\n{\n  background-color: $cont-bg1;\n} */\n/* Wrap-container */\n.wrap-cont {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  transition: all 0.15s linear 0.01s; }\n\n/*Dashboard project css*/\n.homeDivStyle {\n  border: 1px solid #94cbdb;\n  border-radius: 3px;\n  background: #fafafa;\n  box-shadow: none;\n  transition: all 0.15s linear 0.01s; }\n\n.homeDivStyle:hover {\n  border: 1px solid transparent;\n  background: #f7f7f7;\n  box-shadow: 0px 0px 3px #aaa;\n  transition: all 0.15s linear 0.01s; }\n\n.bt {\n  border-top: 1px solid #ddd; }\n\n.crdHvr {\n  height: 210px;\n  border: 3px solid #386383;\n  border-radius: 5px;\n  background: #FFF;\n  box-shadow: 0px 12px 4px -10px #bbb;\n  transition: all 0.15s linear 0.1s;\n  overflow: hidden; }\n\n.crdHvr:hover {\n  cursor: pointer;\n  border: 3px solid #6dbad4;\n  border-radius: 5px;\n  box-shadow: 0px 6px 5px -5px #999;\n  transition: all 0.15s linear 0.01s; }\n\n.crdHvr .collapse p,\n.crdHvr .collapsing p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 22px;\n  max-height: 140px;\n  font-size: 15px; }\n\n.crdHvr .fa.fa-ellipsis-v {\n  position: relative;\n  left: 3px; }\n\n.crdHvr h4 small {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 18px;\n  max-height: 40px;\n  font-size: 14px; }\n\n.crdHvr h4 span {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  line-height: 25px;\n  max-height: 25px; }\n\n.fn .bbot a:after {\n  /*fill blank space*/\n  content: \" \";\n  /*just animate*/\n  width: 0;\n  height: 0;\n  position: relative;\n  /*center content*/\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 3px;\n  /*show the content*/\n  display: block;\n  /*give some colour*/\n  background: #ffd741; }\n\n.fn .bbot a.active:after {\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n.fn .bbot a.strt:hover {\n  /* Is Sass module applicable on this transition */\n  transition: color 0.25s ease-in-out 0.05s; }\n\n.fn .bbot a.strt:hover:after {\n  -webkit-animation: widen 0.3s 1;\n  animation: widen 0.3s 1;\n  width: 70px;\n  /* sass width thing */\n  height: 5px;\n  /* sass height thing */ }\n\n@-webkit-keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 100%;\n    height: 5px; } }\n\n@keyframes widen {\n  0% {\n    width: 0;\n    height: 0px; }\n  100% {\n    width: 70px;\n    height: 5px;\n    /* sass width thing */ } }\n\n/*Datatable css*/\n.dataTables_wrapper {\n  padding-top: 4rem; }\n\n.dataTables_length label select {\n  background: #fff;\n  border-color: #ddd;\n  width: 60px;\n  height: 30px;\n  line-height: 30px;\n  padding: 3px;\n  text-indent: 3px;\n  margin: 0 5px; }\n\n.dataTables_filter label input {\n  border: 1px solid #ccc !important;\n  box-shadow: none !important;\n  padding: 3px;\n  text-indent: 3px; }\n\ntable.dataTable tfoot th,\ntable.dataTable tfoot td {\n  border-top: 1px solid #aaa; }\n\ntable.dataTable thead th,\ntable.dataTable thead td {\n  border-bottom: 1px solid #aaa; }\n\n.dataTables_info {\n  font-size: 12px; }\n\n.row th,\n.row td {\n  padding: 4px 3px !important; }\n\n/*Bootstrap modal popup changed css*/\n.modal-dialog {\n  margin: 100px auto 30px; }\n\n.modal-content {\n  border-radius: 0 0 0.3rem 0.3rem; }\n\n.modal-header {\n  background: #284e71;\n  box-shadow: 0px 15px 15px -10px #ccc;\n  border-bottom: transparent;\n  color: #fff; }\n\n.modal-body {\n  padding-top: 25px;\n  background: #fbfbfb; }\n\n.modal-backdrop.show {\n  opacity: 0.7; }\n\n.modal-footer {\n  box-shadow: -3px -15px 20px -20px #999;\n  border: none;\n  z-index: 99; }\n\n.modal-body input {\n  box-shadow: 1px 1px 1px -1px #ccc; }\n\nsmall {\n  color: #000; }\n\n.nav-tabs {\n  border-bottom: 3px solid #94cbdb !important; }\n\n/* Templates fields */\n.adf .modal-body {\n  height: 400px;\n  margin: 0;\n  padding-top: 0;\n  position: relative;\n  top: -21px;\n  padding: 0; }\n\n.adf .modal-body .nav-tabs {\n  border-bottom: 2px solid #0275d8; }\n\n.adf .modal-body .nav-tabs .nav-item {\n  margin-bottom: 0; }\n\n.adf .modal-body .nav-tabs a {\n  color: #0275d8;\n  position: relative; }\n\n.adf .modal-body .nav-tabs a.active {\n  color: #0275d8;\n  border-color: transparent;\n  border-radius: 0 !important; }\n\n.adf .modal-body .nav-tabs .nav-link:focus,\n.adf .modal-body .nav-tabs .nav-link:hover {\n  border-color: transparent;\n  border-radius: 0; }\n\n.adf .modal-body .nav-tabs .nav-link:after {\n  content: \" \";\n  border: 20px solid #0275d8;\n  display: none;\n  border-color: #0275d8 transparent transparent transparent;\n  position: absolute;\n  top: 41px;\n  border-width: 5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .modal-body .nav-tabs .nav-link.active:after,\n.adf .modal-body .nav-tabs .nav-link:hover:after {\n  display: block;\n  transition: all 0.15s linear 0.01s; }\n\n.adf .flex-column .nav-link {\n  color: #141415; }\n\n.adf .flex-column .nav-link:hover {\n  color: #424341; }\n\n.nav-tabs .nav-link.active {\n  font-size: 1.3rem;\n  color: #284e71;\n  border-color: #94cbdb;\n  border-width: 3px 3px 0px 3px !important; }\n\n.fa-arrow-up,\n.fa-arrow-down,\n.fa-trash-o {\n  opacity: 0.2;\n  transition: all 0.15s linear 0.01s; }\n\n.fa:hover {\n  opacity: 1;\n  transition: all 0.15s linear 0.01s; }\n\n@media only screen and (max-width: 1024px) {\n  .crdHvr {\n    height: 210px; }\n  .crdHvr p span {\n    display: block; } }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n.navbar-default .navbar-nav > li > a.router-link-active {\n  color: #555;\n  background-color: #e7e7e7; }\n\n@media only screen and (max-width: 992px) {\n  .slider-fix,\n  .pos-bl {\n    width: 40%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -45%;\n    transition: all 0.15s linear 0.01s; } }\n\n@media only screen and (max-width: 640px) {\n  .slider-fix,\n  .pos-bl {\n    width: 70%; }\n  .left-menu-close .frame .slider-fix,\n  .left-menu-close .frame .slider-fix .nav-item.pos-bl {\n    left: -75%;\n    transition: all 0.15s linear 0.01s; } }\n\nth {\n  text-align: center; }\n\n.tt1 {\n  position: relative;\n  display: inline-block; }\n\n.tt1 .tt2 {\n  visibility: hidden;\n  background-color: gray;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -60px;\n  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */\n  opacity: 0;\n  transition: opacity 1s; }\n\n.tt1:hover .tt2 {\n  visibility: visible;\n  opacity: 1; }\n\n.primaryText {\n  color: #284e71; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/response/response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net__ = __webpack_require__("../../../../datatables.net/js/jquery.dataTables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_datatables_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_datatables_net__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponseComponent = (function () {
    function ResponseComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.flag = false;
        this.sub = this.projectService.emitResponseSummary.subscribe(function (res) {
            // console.log(res);
            _this.response = res;
            _this.flag = true;
            _this.display();
        });
    }
    ResponseComponent.prototype.ngOnInit = function () {
        this.projectService.getResponse();
    };
    ResponseComponent.prototype.display = function () {
        if (this.flag) {
            $(document).ready(function () {
                var t = $('#example').DataTable({
                    "columnDefs": [{
                            "searchable": false,
                            "orderable": false,
                            "targets": 0
                        }],
                    "order": [[1, 'asc']],
                    aaSorting: [],
                });
                t.on('order.dt search.dt', function () {
                    t.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
                }).draw();
            });
        }
    };
    ResponseComponent.prototype.getData = function (data) {
        this.router.navigate(['/resTable'], { queryParams: { id: data } });
    };
    ResponseComponent.prototype.resMoreThanZero = function (res) {
        if (res > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ResponseComponent.prototype.details = function (id) {
        $("#responseDetails").modal('show');
    };
    ResponseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ResponseComponent;
}());
ResponseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-response',
        template: __webpack_require__("../../../../../src/app/home/response/response.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/response/response.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResponseComponent);

var _a, _b;
//# sourceMappingURL=response.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\tbackground: #eee !important;\n}\n\n.loginBox{\n     box-shadow: 15px 15px 30px #bdbdbd;\n}\n\n.wrapper {\n\tmargin-top: 150px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0,0,0,0.1);\n\n  .form-signin-heading,\n\t.checkbox {\n\t  margin-bottom: 30px;\n\t}\n\n\t.checkbox {\n\t  font-weight: normal;\n\t}\n\n\t.form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\n\tinput[type=\"text\"] {\n\t  margin-bottom: -1px;\n\t  border-bottom-left-radius: 0;\n\t  border-bottom-right-radius: 0;\n\t}\n\n\tinput[type=\"password\"] {\n\t  margin-bottom: 20px;\n\t  border-top-left-radius: 0;\n\t  border-top-right-radius: 0;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" style=\"height:100%\">\n  <form class=\"form-signin loginBox\"  >\n    <div class=\"row justify-content-md-center\" >\n      <!-- <div class=\"col-12 align-center\" >\n        <img style=\"margin-left:100px\" src=\"./assets/c1.png\" alt=\"\">\n\n      </div>\n      <div class=\"col-12 align-center\" >\n        <b><p style=\"margin-left:135px\">coal</p></b>\n      </div> -->\n    </div>\n    <br>\n    <h3 class=\"form-signin-heading\">Collect Admin</h3>\n    <br>\n    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Email Address\" required=\"\" autofocus=\"\"  [(ngModel)]='email' />\n    <br>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"  [(ngModel)]='password'/>\n    <br>\n    <label class=\"checkbox\">\n      <input type=\"checkbox\"   value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\"> Remember me\n    </label>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)='login()'>Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(projectService, router) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.projectService.checkLogin();
        this.projectService.emitUserLogin.subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var formData = new FormData();
        formData.append('email', this.email);
        formData.append('pwd', this.password);
        this.projectService.login(formData);
        localStorage.setItem('userEmail', this.email);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/APIService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIService = (function () {
    function APIService(http) {
        this.http = http;
        // projectURL: string = 'http://192.168.15.187:8000';
        this.responseSocketURL = 'ws://192.168.15.187:8000';
        // projectURL: string = 'http://192.168.15.221:8000';
        this.projectURL = 'https://qcitech.org:8083';
        this.userID = "";
    }
    APIService.prototype.createAuthorizationHeader = function (headers) {
        this.userID = localStorage.getItem('token');
        // this.userID = "319424f5b8524ebe8188c2d40217c48c";
        headers.append('Authorization', this.userID);
    };
    APIService.prototype.Login = function (data) {
        return this.http.post(this.projectURL + '/login', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.SyncAll = function (formArray, tempArray) {
        formArray = JSON.stringify(formArray);
        formArray = JSON.parse(formArray);
        formArray = JSON.stringify(formArray);
        tempArray = JSON.stringify(tempArray);
        tempArray = JSON.parse(tempArray);
        tempArray = JSON.stringify(tempArray);
        var formData = new FormData();
        formData.append('formArray', formArray);
        formData.append('tempArray', tempArray);
        return this.http.post(this.projectURL + '/savetestform', formData);
    };
    APIService.prototype.AddNewProject = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/addProject', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetAllProjects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getAllProjects', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.PushIntoForm = function (formArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        formArray = JSON.stringify(formArray);
        formArray = JSON.parse(formArray);
        formArray = JSON.stringify(formArray);
        var formData = new FormData();
        formData.append('formArray', formArray);
        return this.http.post(this.projectURL + '/addNewForm', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.PushIntoTemplate = function (tempArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        tempArray = JSON.stringify(tempArray);
        tempArray = JSON.parse(tempArray);
        tempArray = JSON.stringify(tempArray);
        var tempData = new FormData();
        tempData.append('tempArray', tempArray);
        return this.http.post(this.projectURL + '/addNewTemplate', tempData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetFormArray = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getAllForms', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetTeplateArray = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getAllTemplates', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateFormJson = function (formArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        formArray = JSON.stringify(formArray);
        formArray = JSON.parse(formArray);
        formArray = JSON.stringify(formArray);
        var formData = new FormData();
        formData.append('formArray', formArray);
        return this.http.post(this.projectURL + '/editForm', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateTempJson = function (tempArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        tempArray = JSON.stringify(tempArray);
        tempArray = JSON.parse(tempArray);
        tempArray = JSON.stringify(tempArray);
        var tempData = new FormData();
        tempData.append('tempArray', tempArray);
        return this.http.post(this.projectURL + '/editTemp', tempData, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetAllAssesors = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getAssesors', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.AddAssesorArray = function (asrArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        asrArray = JSON.stringify(asrArray);
        asrArray = JSON.parse(asrArray);
        asrArray = JSON.stringify(asrArray);
        var assesorArray = new FormData();
        assesorArray.append('asrArray', asrArray);
        return this.http.post(this.projectURL + '/addAssesorInForm', assesorArray, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getUsers', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.AddUser = function (tempObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        tempObj = JSON.stringify(tempObj);
        tempObj = JSON.parse(tempObj);
        tempObj = JSON.stringify(tempObj);
        var userObj = new FormData();
        userObj.append('tempObj', tempObj);
        return this.http.post(this.projectURL + '/addUserInProject', userObj, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetAllTeams = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getTeams', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.AddTeamArray = function (teamArray) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        teamArray = JSON.stringify(teamArray);
        teamArray = JSON.parse(teamArray);
        teamArray = JSON.stringify(teamArray);
        var tArray = new FormData();
        tArray.append('teamArray', teamArray);
        return this.http.post(this.projectURL + '/updateTeam', tArray, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetResponseSummary = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.projectURL + '/getResponseSummary', { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetFormResponse = function (formID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        var fID = new FormData();
        fID.append('formID', formID);
        return this.http.post(this.projectURL + '/getFormResponse', fID, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.UploadCollectForm = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/', form, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.UploadCollectRule = function (Rule) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/', Rule, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.ChangeFormStatus = function (fid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/changeFormStatus', fid, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.DeleteProjectUserArray = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/removeUserFromProject', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.DeleteFormAssessorArray = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/removeAssesorFromForm', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.DeleteFormTeamArray = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/removeFormFromTeam', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.DeleteAsrTeamArray = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/removeAssesorFromTeam', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateTag = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.projectURL + '/changeResponseTag', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    APIService.prototype.FlagResponse = function (rID, array) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        array = JSON.stringify(array);
        array = JSON.parse(array);
        array = JSON.stringify(array);
        var formData = new FormData();
        formData.append('array', array);
        formData.append('rID', rID);
        return this.http.post(this.projectURL + '/flagResponse', formData, { headers: headers }).map(function (res) { return res.json(); });
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=APIService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ProjectService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.emitWsMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUserLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormElementTemp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitDeleteElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitTemplateArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormWithID = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitTemplateWithID = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUpElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitDownElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitProject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitResponseSummary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitResTable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUsers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitAssessors = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitFormResponse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitTableHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitSuccessRes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitWarningRes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitErrorRes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitInfoRes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitTeams = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formArray = [];
        // { Details: { name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },    Elements:  [{type: "text", required: false, name: "Name", value:"", cid:"a1", hepltext: ""},                    {type: "email", required: false, hepltext: "", name: "Email ID", value:"", cid:"b1"},                    {type: "number", required: false, hepltext: "", name: "Number Input", value:"", cid:"c1"},],    Rules: [{cid:"211", name: 'Rule1',elementName:'Name',elementType: "text", elementValue:"sam",elementCid:"a1", tempCid: '2332b', tempName: 'template1', satisfyAll:false},], },
        this.templateArray = [];
        // { Details:   { name: 'template1', rule: 'None', project:"N/A", cid:'2332b'},  Elements:  [{type: "text", required: false, name: "Name", value:"", cid:"a1q", hepltext: ""},                  {type: "email", required: false, value:"", cid:"a1b", hepltext: "", name: "Email ID"},                  {type: "number", required: false, value:"", cid:"a1c", hepltext: "", name: "Number Input"},],    },
        this.projectArray = [];
        //{cid:"p121", cdate:"26/11/2017 10:14", name: 'Project Name Here 1', form: 2, user: 3, assesor: 5, desc:'This is a test project about different design concepts we can adopt to show a card design. Lorem iThis is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kilpsum doler sit kil This is a test project about different design concepts we can adopt to show a card design. Lorem ipsum doler sit   kil'},
        this.responseArray = [];
        //{ResCid:'1',    ResDetails:{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },    ResElements:[      {type: "text", required: false, name: "Name", value:"sammy", cid:"a1", hepltext: "", alias:" Username "},      {type: "password", required: false, name: "SecretKey", value:"sammy_password", cid:"a2", hepltext: "", alias:" Password "}    ],    ResExtra:{asrName: "", asrID: "", resDate: ""}  },
        this.userArray = [];
        //{cid:"p123", cdate:"26/11/2017 10:20", name: 'Rony', email:" test@tes.com", project:[{cid:'p121', name:'Project Name Here 1'}], details:'Details'},
        this.assessorArray = [];
        //{cid:"p120", cdate:"26/11/2017 10:14", name: 'Ram', phone:'8998671234', form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' },], details:'Details'},
        this.teamArray = [];
    }
    ProjectService.prototype.connectSocket = function (formId) {
        this.ws = new WebSocket(this.apiService.responseSocketURL + '/form/' + formId);
    };
    ProjectService.prototype.openSocket = function () {
        this.ws.onopen = function (evt) {
            console.log("***Connection Opened***");
        };
    };
    ProjectService.prototype.messageSocket = function () {
        this.ws.onmessage = function (evt) {
            console.log("Total Responses: " + evt.data);
            this.data = evt.data;
        };
        console.log(this.data);
        this.emitWsMsg.emit("" + this.data);
    };
    // sendSocketMessage(message){
    //
    //   this.socket = io(this.apiService.responseSocketURL);
    //   this.socket.emit('add-message', message);
    // }
    //
    // getSocketMessages() {
    //
    //
    //   let observable = new Observable(observer => {
    //     this.socket = io(this.apiService.responseSocketURL);
    //     this.socket.on('message', (data) => {
    //       observer.next(data);
    //     });
    //     return () => {
    //       this.socket.disconnect();
    //     };
    //   })
    //   return observable;
    // }
    ProjectService.prototype.cid = function () {
        var d = new Date();
        var cid = d.getTime() + "" + Math.floor(1000 + Math.random() * 8999);
        return cid;
    };
    ProjectService.prototype.cdate = function () {
        var d = new Date();
        var cdate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours();
        var min = d.getMinutes();
        var min2 = "";
        if (min < 10) {
            min2 = "0" + min;
        }
        else {
            min2 = "" + min;
        }
        cdate += ":" + min2;
        return cdate;
    };
    //{ cid:"t123", cdate:"26/11/2017 10:14", name: 'Team 1', tl:['a1233'], assesor:["a1233"], form:[{ name: 'Form1', rule: 'None', project: 'Project Name Here 1', projectcdi:'p121', status:'Offline', cid:'a1221' }],  details:'Details'},
    ProjectService.prototype.login = function (data) {
        var _this = this;
        this.apiService.Login(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                localStorage.setItem('token', res.token);
                _this.emitUserLogin.emit("Invalid credentials!");
            }
            else {
                _this.emitErrorRes.emit();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.checkLogin = function () {
        if (localStorage.getItem('token')) {
            this.router.navigate(['./']);
        }
    };
    ProjectService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['./login']);
    };
    ProjectService.prototype.uploadCollectForm = function (form) {
        var _this = this;
        this.apiService.UploadCollectForm(form).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.uploadCollectRule = function (rule) {
        var _this = this;
        this.apiService.UploadCollectRule(rule).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getProject = function () {
        var _this = this;
        this.apiService.GetAllProjects().subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.projectArray = res.data;
                _this.emitProject.emit(_this.projectArray);
            }
            else {
                if (!res.header) {
                    _this.logout();
                }
            }
        }, function (err) {
            console.log(err);
            if (!err.header) {
                _this.logout();
            }
        });
    };
    ProjectService.prototype.addNewProject = function (pname, pdesc) {
        var _this = this;
        var tempData;
        var cid = this.cid();
        var cdate = this.cdate();
        tempData = { cid: cid, cdate: cdate, name: pname, desc: pdesc, form: 0, user: 0, assesor: 0 };
        this.apiService.AddNewProject(tempData).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
                _this.projectArray.push(tempData);
            }
            else {
                if (!res.header) {
                    _this.logout();
                }
            }
        }, function (err) {
            if (!err.header) {
                _this.logout();
            }
            console.log(err);
            _this.emitErrorRes.emit("Somethisng went wrong");
            _this.logout();
        });
        // this.getProject();
    };
    ProjectService.prototype.getFormArray = function () {
        var _this = this;
        this.apiService.GetFormArray().subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.formArray = [];
                if (res.formArray.length) {
                    for (var i = 0; i < res.formArray.length; i++) {
                        _this.formArray.push(res.formArray[i].form_json);
                    }
                }
                _this.emitFormArray.emit(_this.formArray);
            }
            else {
                if (!res.header) {
                    _this.logout();
                }
            }
        }, function (err) {
            console.log(err);
        });
        // this.emitFormArray.emit(this.formArray);
    };
    ProjectService.prototype.getTemplateArray = function () {
        var _this = this;
        this.apiService.GetTeplateArray().subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.templateArray = [];
                if (res.tempArray.length) {
                    for (var i = 0; i < res.tempArray.length; i++) {
                        if (res.tempArray[i].temp_json.Details.name != "Form question") {
                            _this.templateArray.push(res.tempArray[i].temp_json);
                        }
                    }
                }
                _this.emitTemplateArray.emit(_this.templateArray);
            }
            else {
                if (!res.header) {
                    _this.logout();
                }
            }
        }, function (err) {
            console.log(err);
        });
        // this.emitTemplateArray.emit(this.templateArray);
    };
    ProjectService.prototype.updateFormJson = function (form) {
        this.apiService.UpdateFormJson(form).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                // this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.updateTempJson = function (temp) {
        this.apiService.UpdateTempJson(temp).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                // this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.pushIntoForm = function (data) {
        var _this = this;
        this.apiService.PushIntoForm(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
                _this.formArray.push(data);
                _this.router.navigate(['dash/form']);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.pushIntoTemplate = function (data) {
        var _this = this;
        this.apiService.PushIntoTemplate(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
                _this.templateArray.push(data);
                _this.router.navigate(['dash/form']);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        // this.templateArray.push(data);
    };
    ProjectService.prototype.addNewRule = function (fcid, newRule) {
        if (newRule.ruleFormQuestion != undefined) {
            var cid = this.cid();
            var template = { Details: {}, Elements: [] }; // generate new template
            template.Details.name = 'Form question'; // generate template properties
            template.Details.rule = '';
            template.Details.project = '';
            template.Details.cid = cid;
            template.Elements.push(newRule.ruleFormQuestion); // push elements
            this.pushIntoTemplate(template); // update server template
            this.templateArray.push(template); // push new generated template on the template array
            for (var i_1 = 0; i_1 < this.formArray.length; i_1++) {
                if (this.formArray[i_1].Details.cid == fcid) {
                    for (var j = 0; j < this.formArray[i_1].Elements.length; j++) {
                        if (this.formArray[i_1].Elements[j].cid == newRule.ruleFormQuestion.cid) {
                            this.formArray[i_1].Elements.splice(j, 1); // remove form question from from to template
                            break;
                        }
                    }
                }
            }
            newRule.tempCid = cid; // insert tempID on the rule list
            newRule.tempName = template.Details.name; // insert temp Name on the rule list
            // console.log(newRule);
        }
        // this.apiService.RulesArray(fcid,newRule);
        var i = 0;
        var temp;
        for (i = 0; i < this.formArray.length; i++) {
            if (fcid == this.formArray[i].Details.cid) {
                temp = i;
                break;
            }
        }
        if (temp != undefined) {
            this.formArray[temp].Rules.push(newRule); // update local formArray
            this.updateFormJson(this.formArray[temp]); // update server formArray
        }
        console.log(newRule);
    };
    ProjectService.prototype.deleteRule = function (fCid, rCid) {
        var temp;
        var rtemp;
        console.log(fCid);
        console.log(rCid);
        for (var m = 0; m < this.formArray.length; m++) {
            if (fCid == this.formArray[m].Details.cid) {
                temp = m;
                break;
            }
        }
        for (var n = 0; n < this.formArray[temp].Rules.length; n++) {
            if (rCid == this.formArray[temp].Rules[n].cid) {
                rtemp = n;
            }
        }
        this.formArray[temp].Rules.splice(rtemp, 1);
        this.updateFormJson(this.formArray[temp]);
    };
    ProjectService.prototype.getAssessors = function () {
        var _this = this;
        this.apiService.GetAllAssesors().subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.assessorArray = res.data;
                _this.emitAssessors.emit(_this.assessorArray);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        // this.emitAssessors.emit(this.assessorArray);
    };
    ProjectService.prototype.addAssessorArray = function (name, phone, details) {
        var _this = this;
        var cid = this.cid();
        var cdate = this.cdate();
        var formObj = [];
        formObj.push(details);
        if (name == "" || name == undefined) {
            name = 'N/A';
        }
        var tempArray = { cid: cid, cdate: cdate, name: name, phone: phone, form: formObj, details: 'Details' };
        this.apiService.AddAssesorArray(tempArray).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        this.assessorArray.push(tempArray);
        this.incAssessorCount(details.projectcdi);
    };
    ProjectService.prototype.assignNewFormToAssessor = function (cid, form) {
        var _this = this;
        var temp;
        var flag = true;
        for (var i = 0; i < this.assessorArray.length; i++) {
            if (cid == this.assessorArray[i].cid) {
                temp = i;
                break;
            }
        }
        // check if form is already assigned to assesor or not
        if (this.assessorArray[temp].form.length) {
            for (var m = 0; m < this.assessorArray[temp].form; m++) {
                if (form.Details.cid == this.assessorArray[temp].form[m].cid) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag) {
            this.assessorArray[temp].form.push(form.Details);
            this.apiService.AddAssesorArray(this.assessorArray[temp]).subscribe(function (res) {
                if (res.success) {
                    _this.emitSuccessRes.emit(res.message);
                }
                else { }
            }, function (err) {
                console.log(err);
            });
            this.incAssessorCount(form.Details.projectcdi);
        }
    };
    ProjectService.prototype.updateTag = function (rID, tag) {
        var formData = new FormData();
        formData.append("rID", rID);
        formData.append("tag", tag);
        this.apiService.UpdateTag(formData).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getTeams = function () {
        var _this = this;
        this.apiService.GetAllTeams().subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.teamArray = res.data;
                _this.emitTeams.emit(_this.teamArray);
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.emitTeams.emit(_this.teamArray);
        });
        // this.emitAssessors.emit(this.assessorArray);
    };
    ProjectService.prototype.addTeamArray = function (name, tl, details) {
        var _this = this;
        var cid = this.cid();
        var cdate = this.cdate();
        var asrObj = [];
        var tlObj = [];
        var formObj = [];
        formObj.push(details);
        if (name == "" || name == undefined) {
            name = 'N/A';
        }
        tlObj.push(tl);
        asrObj.push(tl);
        var tempArray = { cid: cid, cdate: cdate, name: name, tl: tlObj, form: formObj, assesor: asrObj, details: 'Details' };
        this.apiService.AddTeamArray(tempArray).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        this.teamArray.push(tempArray);
        // this.incAssessorCount(details.projectcdi);
    };
    ProjectService.prototype.assignNewFormToTeam = function (cid, form) {
        var _this = this;
        var temp;
        for (var i = 0; i < this.teamArray.length; i++) {
            if (cid == this.teamArray[i].cid) {
                temp = i;
                break;
            }
        }
        this.teamArray[temp].form.push(form.Details);
        this.apiService.AddTeamArray(this.teamArray[temp]).subscribe(function (res) {
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.addNewAssesorInTeam = function (asrID, teamID) {
        var _this = this;
        var temp;
        for (var i = 0; i < this.teamArray.length; i++) {
            if (teamID == this.teamArray[i].cid) {
                temp = i;
                break;
            }
        }
        this.teamArray[temp].assesor.push(asrID);
        this.apiService.AddTeamArray(this.teamArray[temp]).subscribe(function (res) {
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.addNewManagerInTeam = function (mgrId, teamID) {
        var _this = this;
        var temp;
        for (var i = 0; i < this.teamArray.length; i++) {
            if (teamID == this.teamArray[i].cid) {
                temp = i;
                break;
            }
        }
        this.teamArray[temp].tl.push(mgrId);
        this.teamArray[temp].assesor.push(mgrId);
        this.apiService.AddTeamArray(this.teamArray[temp]).subscribe(function (res) {
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.deleteFormTeamArray = function (tCid, fCid) {
        var _this = this;
        var ipos;
        var jpos;
        var formData = new FormData();
        formData.append('tID', tCid);
        formData.append('fID', fCid);
        console.log(formData);
        this.apiService.DeleteFormTeamArray(formData).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                for (var i = 0; i < _this.teamArray.length; i++) {
                    if (tCid == _this.teamArray[i].cid) {
                        ipos = i;
                        break;
                    }
                }
                for (var j = 0; j < _this.teamArray[ipos].form.length; j++) {
                    if (fCid == _this.teamArray[ipos].form[j].cid) {
                        jpos = j;
                        break;
                    }
                }
                _this.teamArray[ipos].form.splice(jpos, 1);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.deleteAsrTeamArray = function (tCid, aCid) {
        var _this = this;
        var ipos;
        var jpos;
        var formData = new FormData();
        formData.append('tID', tCid);
        formData.append('aID', aCid);
        console.log(formData);
        this.apiService.DeleteAsrTeamArray(formData).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                for (var i = 0; i < _this.teamArray.length; i++) {
                    if (tCid == _this.teamArray[i].cid) {
                        ipos = i;
                        break;
                    }
                }
                for (var j = 0; j < _this.teamArray[ipos].assesor.length; j++) {
                    if (aCid == _this.teamArray[ipos].assesor[j]) {
                        jpos = j;
                        break;
                    }
                }
                _this.teamArray[ipos].assesor.splice(jpos, 1);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.deleteMgrTeamArray = function (tCid, mCid) {
        var _this = this;
        var ipos;
        var jpos;
        var formData = new FormData();
        formData.append('tID', tCid);
        formData.append('aID', mCid);
        console.log(formData);
        this.apiService.DeleteAsrTeamArray(formData).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                for (var i = 0; i < _this.teamArray.length; i++) {
                    if (tCid == _this.teamArray[i].cid) {
                        ipos = i;
                        break;
                    }
                }
                for (var j = 0; j < _this.teamArray[ipos].tl.length; j++) {
                    if (mCid == _this.teamArray[ipos].tl[j]) {
                        jpos = j;
                        break;
                    }
                }
                _this.teamArray[ipos].tl.splice(jpos, 1);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.addUserArray = function (name, email, project) {
        var _this = this;
        var cid = this.cid();
        var cdate = this.cdate();
        var temp = { 'cid': project.cid, 'name': project.name };
        var projObj = [];
        projObj.push(temp);
        var tempObj = { cid: cid, cdate: cdate, name: name, email: email, project: projObj, details: 'Details' };
        this.apiService.AddUser(tempObj).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
                _this.userArray.push(tempObj);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        this.incUserCount(project.cid);
    };
    ProjectService.prototype.getUsers = function () {
        var _this = this;
        this.apiService.GetAllUsers().subscribe(function (res) {
            if (res) {
                _this.userArray = res.data;
                _this.emitUsers.emit(_this.userArray);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        // this.emitUsers.emit(this.userArray);
    };
    ProjectService.prototype.assignNewProjectToUser = function (cid, project) {
        var _this = this;
        var array = { cid: project.cid, name: project.name };
        var temp;
        for (var i = 0; i < this.userArray.length; i++) {
            if (cid == this.userArray[i].cid) {
                temp = i;
                break;
            }
        }
        this.userArray[temp].project.push(array);
        this.apiService.AddUser(this.userArray[temp]).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
        this.incUserCount(project.cid);
    };
    ProjectService.prototype.getResponse = function () {
        var _this = this;
        this.apiService.GetResponseSummary().subscribe(function (res) {
            console.log(res);
            if (res.data.length) {
                _this.responseArray = [];
                _this.responseArray = res.data;
                // console.log(this.responseArray);
                _this.emitResponseSummary.emit(_this.responseArray);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getFormResponseArray = function (formId) {
        var _this = this;
        var formResponse = [];
        var tableHeader = [];
        var finalResponse = [];
        this.apiService.GetFormResponse(formId).subscribe(function (res) {
            console.log(res);
            if (res) {
                if (res.header.length) {
                    tableHeader = res.header;
                }
                if (res.data.length) {
                    formResponse = res.data;
                }
                for (var i = 0; i < formResponse.length; i++) {
                    for (var j = 0; j < tableHeader.length; j++) {
                        // finalResponse[i].push();
                    }
                }
                _this.emitFormResponse.emit(formResponse);
                _this.emitTableHeader.emit(tableHeader);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.removeDuplicates = function (myArr, prop) {
        // resFormIdArray = Array.from(new Set(resFormIdArray));
        return myArr.filter(function (obj, pos, arr) {
            return arr.map(function (mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos;
        });
    };
    ProjectService.prototype.incUserCount = function (cid) {
        for (var _i = 0, _a = this.projectArray; _i < _a.length; _i++) {
            var proj = _a[_i];
            if (proj.cid === cid) {
                proj.user++;
                break;
            }
        }
    };
    ProjectService.prototype.descUserCount = function (cid) {
        for (var _i = 0, _a = this.projectArray; _i < _a.length; _i++) {
            var proj = _a[_i];
            if (proj.cid === cid) {
                proj.user--;
                break;
            }
        }
    };
    ProjectService.prototype.descAsrCount = function (cid) {
        for (var _i = 0, _a = this.projectArray; _i < _a.length; _i++) {
            var proj = _a[_i];
            if (proj.cid === cid) {
                proj.assesor--;
                break;
            }
        }
    };
    ProjectService.prototype.incAssessorCount = function (cid) {
        for (var _i = 0, _a = this.projectArray; _i < _a.length; _i++) {
            var proj = _a[_i];
            if (proj.cid === cid) {
                proj.assesor++;
                break;
            }
        }
    };
    ProjectService.prototype.incFromCount = function (cid) {
        for (var _i = 0, _a = this.projectArray; _i < _a.length; _i++) {
            var proj = _a[_i];
            if (proj.cid === cid) {
                proj.form++;
                break;
            }
        }
    };
    ProjectService.prototype.deleteProjectUserArray = function (uCid, pCid) {
        var _this = this;
        var ipos;
        var jpos;
        var formData = new FormData();
        formData.append('userID', uCid);
        formData.append('pID', pCid);
        console.log(formData);
        this.apiService.DeleteProjectUserArray(formData).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                for (var i = 0; i < _this.userArray.length; i++) {
                    if (uCid == _this.userArray[i].cid) {
                        ipos = i;
                        break;
                    }
                }
                for (var j = 0; j < _this.userArray[ipos].project.length; j++) {
                    if (pCid == _this.userArray[ipos].project[j].cid) {
                        jpos = j;
                        break;
                    }
                }
                _this.userArray[ipos].project.splice(jpos, 1);
                _this.descUserCount(pCid);
                _this.emitSuccessRes.emit(res.message);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.deleteFormAssessorArray = function (cid, fCid, pCid) {
        var _this = this;
        var ipos;
        var jpos;
        var formData = new FormData();
        formData.append('asrID', cid);
        formData.append('fID', fCid);
        this.apiService.DeleteFormAssessorArray(formData).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                for (var i = 0; i < _this.assessorArray.length; i++) {
                    if (cid == _this.assessorArray[i].cid) {
                        ipos = i;
                        break;
                    }
                }
                for (var j = 0; j < _this.assessorArray[ipos].form.length; j++) {
                    if (fCid == _this.assessorArray[ipos].form[j].cid) {
                        jpos = j;
                        break;
                    }
                }
                _this.assessorArray[ipos].form.splice(jpos, 1);
                _this.descAsrCount(pCid);
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.flagResponse = function (rID, array) {
        var _this = this;
        this.apiService.FlagResponse(rID, array).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.emitSuccessRes.emit("Flag Updated!");
            }
            else { }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getFormArrayWithID = function (cid) {
        var i = 0;
        var temp;
        for (i = 0; i < this.formArray.length; i++) {
            if (cid == this.formArray[i].Details.cid) {
                temp = i;
                break;
            }
        }
        if (temp != undefined)
            this.emitFormWithID.emit(this.formArray[temp]);
    };
    ProjectService.prototype.getTemplateArrayWithID = function (cid) {
        var i = 0;
        var temp;
        for (i = 0; i < this.templateArray.length; i++) {
            if (cid == this.templateArray[i].Details.cid) {
                temp = i;
                break;
            }
        }
        if (temp != undefined) {
            this.emitTemplateWithID.emit(this.templateArray[temp]);
        }
    };
    ProjectService.prototype.updateFormArray = function (cid, data) {
        var i = 0;
        var temp;
        for (i = 0; i < this.formArray.length; i++) {
            if (cid == this.formArray[i].Details.cid) {
                temp = i;
                break;
            }
        }
        if (temp != undefined) {
            this.formArray[temp].Elements = data;
        }
    };
    ProjectService.prototype.updateTempArray = function (cid, data) {
        var i = 0;
        var temp;
        for (i = 0; i < this.templateArray.length; i++) {
            if (cid == this.templateArray[i].Details.cid) {
                temp = i;
                break;
            }
        }
        if (temp != undefined) {
            this.templateArray[temp].Elements = data;
        }
    };
    ProjectService.prototype.calFormArrayLength = function () {
        return (this.formArray.length + '');
    };
    ProjectService.prototype.calTemplateArrayLength = function () {
        return (this.templateArray.length + '');
    };
    ProjectService.prototype.syncAll = function () {
        this.apiService.SyncAll(this.formArray, this.templateArray).subscribe(function (res) {
            console.log(res);
        });
    };
    ProjectService.prototype.emitResponseForResTable = function (data) {
        // let tempArray :any = [];
        // for(let m of this.responseArray1) {
        //     if(m.office == data) {
        //       tempArray.push(m);
        //     }
        // }
        // this.emitResTable.emit(tempArray);
    };
    ProjectService.prototype.changeFormStatus = function (fid, status) {
        var formData = new FormData();
        for (var _i = 0, _a = this.formArray; _i < _a.length; _i++) {
            var m = _a[_i];
            if (fid == m.Details.cid) {
                m.Details.status = status;
                formData.append('formID', fid);
                this.apiService.ChangeFormStatus(formData).subscribe(function (res) {
                    if (res.success) {
                    }
                    else { }
                }, function (err) {
                    console.log(err);
                });
                break;
            }
        }
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectService);

var _a, _b;
//# sourceMappingURL=ProjectService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ZAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=ZAuthGuard.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map