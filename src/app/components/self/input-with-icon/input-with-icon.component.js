"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var input_with_icon_directive_1 = require("../input-with-icon.directive");
var InputWithIconComponent = /** @class */ (function () {
    function InputWithIconComponent() {
    }
    InputWithIconComponent.prototype.ngAfterContentInit = function () {
        if (!this.input) {
            console.error('this custom input needs an input inside its content');
        }
    };
    Object.defineProperty(InputWithIconComponent.prototype, "isInputFocus", {
        get: function () {
            return this.input ? this.input.focus : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputWithIconComponent.prototype, "classes", {
        get: function () {
            var cssClasses = {};
            if (this.icon) {
                cssClasses['fa-' + this.icon] = true;
            }
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], InputWithIconComponent.prototype, "icon");
    __decorate([
        core_1.ContentChild(input_with_icon_directive_1.InputWithIconDirective)
    ], InputWithIconComponent.prototype, "input");
    __decorate([
        core_1.HostBinding('class.input-focus')
    ], InputWithIconComponent.prototype, "isInputFocus");
    InputWithIconComponent = __decorate([
        core_1.Component({
            selector: 'app-input-with-icon',
            templateUrl: './input-with-icon.component.html',
            styleUrls: ['./input-with-icon.component.scss']
        })
    ], InputWithIconComponent);
    return InputWithIconComponent;
}());
exports.InputWithIconComponent = InputWithIconComponent;

//# sourceMappingURL=input-with-icon.component.js.map
