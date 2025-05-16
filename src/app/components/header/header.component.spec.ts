import { TestBed } from "@angular/core/testing";
import { Router } from '@angular/router';
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { HeaderComponent } from "./header.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DropdownComponent } from "../../shared/components/dropdown/dropdown.component";
import { BurgerMenuComponent } from "../../shared/components/burger-menu/burger-menu.component";
import { ChangeDetectorRef } from "@angular/core";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let routerMock: Router;
    let translocoServiceMock: TranslocoService;
    let changeDetectorRefMock: ChangeDetectorRef;

    beforeEach(async () => {
        routerMock = {
            navigate: jest.fn()
        } as unknown as Router;

        translocoServiceMock = {
            setActiveLang: jest.fn(),
            getActiveLang: jest.fn().mockReturnValue('es')
        } as unknown as TranslocoService;

        changeDetectorRefMock = {
            detectChanges: jest.fn()
        } as unknown as ChangeDetectorRef;

        await TestBed.configureTestingModule({
            imports: [
                HeaderComponent, 
                TranslocoTestingModule,
                ButtonComponent,
                DropdownComponent,
                BurgerMenuComponent
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();

        component = new HeaderComponent(routerMock, translocoServiceMock, changeDetectorRefMock);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to home', () => {
        component.goToHomeLanding();
        expect(routerMock.navigate).toHaveBeenCalledWith(['']);
    });

    it('should stablish default language', () => {
        expect(component.activeLang).toBe('es');
    });

    it('should translate web page', () => {
        component.getTranslation('en');

        expect(translocoServiceMock.setActiveLang).toHaveBeenCalledWith('en');
        expect(component.selectedLangOption).toBe('en');
        expect(component.activeLang).toBe('en');
        expect(changeDetectorRefMock.detectChanges).toHaveBeenCalled();
    });

    it('should show active buttons if the screen size is equal or higher than 1024px', () => {
        global.innerWidth = 1200;
        component.checkScreenSize();
        expect(component.showActionButtons).toBeTruthy();
    });

    it('should hide active buttons if the screen size is equal or higher than 1024px', () => {
        global.innerWidth = 800;
        component.checkScreenSize();
        expect(component.showActionButtons).toBeFalsy();
    });
});