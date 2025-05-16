import { TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { DropdownComponent } from "./dropdown.component";

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DropdownComponent, 
                TranslocoTestingModule,
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();

        component = new DropdownComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit the event if dropdown is not disabled', () => {
        component.disabled = false;
        const emitSpyOn = jest.spyOn(component.selectionChange, 'emit');
        const mockEvent = {
            target: { value: 'option1' }
        } as unknown as Event;

        component.onSelectOption(mockEvent);
        expect(emitSpyOn).toHaveBeenCalledWith('option1');
    });

    it('should not emit the event if dropdown is disabled', () => {
        component.disabled = true;
        const emitSpyOn = jest.spyOn(component.selectionChange, 'emit');
        const mockEvent = {
            target: { value: 'option1' }
        } as unknown as Event;

        component.onSelectOption(mockEvent);
        expect(emitSpyOn).not.toHaveBeenCalled();
    });

    it('should accept all @Input()', () => {
        component.optionsList = [{ label: 'Uno', value: 1 }];
        component.selectedOption = 1;
        component.color = 'primary';
        component.size = 'medium';
        component.isDisabledSelectedHidden = true;
        component.disabledSelectedHiddenText = 'Select an option';
        component.disabled = false;

        expect(component.optionsList.length).toBe(1);
        expect(component.selectedOption).toBe(1);
        expect(component.color).toBe('primary');
        expect(component.size).toBe('medium');
        expect(component.isDisabledSelectedHidden).toBe(true);
        expect(component.disabledSelectedHiddenText).toBe('Select an option');
        expect(component.disabled).toBe(false);
    });
});