"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var bottom_footer_component_1 = require("./bottom-footer.component");
describe('BottomFooterComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [bottom_footer_component_1.BottomFooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(bottom_footer_component_1.BottomFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=bottom-footer.component.spec.js.map
