"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const test_component_1 = require("./test.component");
describe('TestComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [test_component_1.TestComponent]
        });
        fixture = testing_1.TestBed.createComponent(test_component_1.TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
