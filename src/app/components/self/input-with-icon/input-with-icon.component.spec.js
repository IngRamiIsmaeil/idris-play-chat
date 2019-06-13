"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var input_with_icon_component_1 = require("./input-with-icon.component");
describe('InputWithIconComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [input_with_icon_component_1.InputWithIconComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(input_with_icon_component_1.InputWithIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=input-with-icon.component.spec.js.map
