"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var InputWithIconDirective = /** @class */ (function () {
    function InputWithIconDirective() {
        this.focus = false;
    }
    InputWithIconDirective.prototype.onFocus = function () {
        this.focus = true;
    };
    InputWithIconDirective.prototype.onBlur = function () {
        this.focus = false;
    };
    __decorate([
        core_1.HostListener('focus')
    ], InputWithIconDirective.prototype, "onFocus");
    __decorate([
        core_1.HostListener('blur')
    ], InputWithIconDirective.prototype, "onBlur");
    InputWithIconDirective = __decorate([
        core_1.Directive({
            selector: '[appInputWithIcon]'
        })
    ], InputWithIconDirective);
    return InputWithIconDirective;
}());
exports.InputWithIconDirective = InputWithIconDirective;

//# sourceMappingURL=input-with-icon.directive.js.map
