"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var view_port_component_1 = require("./view-port.component");
describe('ViewPortComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [view_port_component_1.ViewPortComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(view_port_component_1.ViewPortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=view-port.component.spec.js.map
