"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var login_success_welcome_component_1 = require("./login-success-welcome.component");
describe('LoginSuccessWelcomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_success_welcome_component_1.LoginSuccessWelcomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(login_success_welcome_component_1.LoginSuccessWelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=login-success-welcome.component.spec.js.map
