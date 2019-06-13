"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var overview_component_1 = require("./chat/overview/overview.component");
var dashboard_component_1 = require("./user/dashboard/dashboard.component");
var login_component_1 = require("./start/login/login.component");
var logout_success_bye_component_1 = require("./start/logout-success-bye/logout-success-bye.component");
var login_success_welcome_component_1 = require("./start/login-success-welcome/login-success-welcome.component");
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [overview_component_1.OverviewComponent, dashboard_component_1.DashboardComponent, login_component_1.LoginComponent, logout_success_bye_component_1.LogoutSuccessByeComponent, login_success_welcome_component_1.LoginSuccessWelcomeComponent],
            exports: [overview_component_1.OverviewComponent, dashboard_component_1.DashboardComponent, login_component_1.LoginComponent, logout_success_bye_component_1.LogoutSuccessByeComponent, login_success_welcome_component_1.LoginSuccessWelcomeComponent]
        })
    ], ViewModule);
    return ViewModule;
}());
exports.ViewModule = ViewModule;

//# sourceMappingURL=view.module.js.map
