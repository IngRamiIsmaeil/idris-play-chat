"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var logout_success_bye_component_1 = require("./logout-success-bye.component");
describe('LogoutSuccessByeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [logout_success_bye_component_1.LogoutSuccessByeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(logout_success_bye_component_1.LogoutSuccessByeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=logout-success-bye.component.spec.js.map
