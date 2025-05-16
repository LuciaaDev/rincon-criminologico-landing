import { TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { BurgerMenuComponent } from "./burger-menu.component";
import { RouterModule } from "@angular/router";
import { BurgerMenuItem } from "../../interfaces/shared-components.model";

describe('BurgerMenuComponent', () => {
    let component: BurgerMenuComponent;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BurgerMenuComponent, 
                TranslocoTestingModule,
                RouterModule
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();

        component = new BurgerMenuComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open or close the burger menu and reset activeDropdownOption', () => {
        component.isMenuOpen = false;
        component.activeDropdownOption = 'header.language';

        component.toggleMenu();

        expect(component.isMenuOpen).toBeTruthy();
        expect(component.activeDropdownOption).toBeNull();
    });

    it('should active dropdown option if it is deactivated', () => {
        component.activeDropdownOption = null;
        component.activateDropdownOption('header.language');
        expect(component.activeDropdownOption).toBe('header.language');
    });

    it('should deactivate dropdown option if it is activated', () => {
        component.activeDropdownOption = 'header.language';
        component.activateDropdownOption('header.language');
        expect(component.activeDropdownOption).toBeNull();
    });

    it('should accept all @Input()', () => {
        const mockItems = [
        { label: 'header.about_me', type: 'link', action: () => {} }
        ] as BurgerMenuItem[];

        component.menuItemsList = mockItems;

        expect(component.menuItemsList.length).toBe(1);
        expect(component.menuItemsList[0].label).toBe('header.about_me');
    });
});