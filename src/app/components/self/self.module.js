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
var input_with_icon_directive_1 = require("./input-with-icon.directive");
var input_with_icon_component_1 = require("./input-with-icon/input-with-icon.component");
var SelfModule = /** @class */ (function () {
    function SelfModule() {
    }
    SelfModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [input_with_icon_directive_1.InputWithIconDirective, input_with_icon_component_1.InputWithIconComponent],
            exports: [
                input_with_icon_directive_1.InputWithIconDirective, input_with_icon_component_1.InputWithIconComponent
            ]
        })
    ], SelfModule);
    return SelfModule;
}());
exports.SelfModule = SelfModule;

//# sourceMappingURL=self.module.js.map
