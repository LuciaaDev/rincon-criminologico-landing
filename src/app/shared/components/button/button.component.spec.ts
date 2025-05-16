import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { ButtonComponent } from "./button.component";
import { CommonModule } from "@angular/common";

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ButtonComponent, 
                TranslocoTestingModule,
                CommonModule
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();

        component = new ButtonComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit the event if button is not disabled', () => {
        component.disabled = false;
        const emitSpyOn = jest.spyOn(component.clickBtnChange, 'emit');

        component.onClickButton();
        expect(emitSpyOn).toHaveBeenCalled();
    });

    it('should not emit the event if button is disabled', () => {
        component.disabled = true;
        const emitSpyOn = jest.spyOn(component.clickBtnChange, 'emit');

        component.onClickButton();
        expect(emitSpyOn).not.toHaveBeenCalled();
    });

    it('should accept all @Input()', () => {
        component.text = 'test';
        component.color = 'primary';
        component.size = 'large';
        component.disabled = false;

        expect(component.text).toBe('test');
        expect(component.color).toBe('primary');
        expect(component.size).toBe('large');
        expect(component.disabled).toBe(false);
    });
});