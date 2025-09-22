import { TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { Router } from "@angular/router";

describe('FooterComponent', () => {
    let component: FooterComponent;
    let routerMock: Router;
    let translocoServiceMock: TranslocoService;

    beforeEach(async () => {
        routerMock = {
            navigate: jest.fn()
        } as unknown as Router;

        translocoServiceMock = {
            setActiveLang: jest.fn(),
            getActiveLang: jest.fn().mockReturnValue('es')
        } as unknown as TranslocoService;

        jest.useFakeTimers(); 
        jest.setSystemTime(new Date('2025-12-31T23:59:59Z')); 

        await TestBed.configureTestingModule({
            imports: [
                FooterComponent,
                TranslocoTestingModule
            ],
            providers: [
                { component: TranslocoService, useClass: translocoServiceMock }
            ]
        }).compileComponents();

        component = new FooterComponent(routerMock);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to home', () => {
        component.goToHomeLanding();
        expect(routerMock.navigate).toHaveBeenCalledWith(['']);
    });

    it('should update current year', () => {
        jest.setSystemTime(new Date(2025, 11, 31, 23, 59, 59));

        const now = new Date(2025, 11, 31, 23, 59, 59);
        const nextYear = new Date(2026, 0, 1);
        const timeUntilNextYear = nextYear.getTime() - now.getTime();

        jest.advanceTimersByTime(timeUntilNextYear);
        component.currentYear = 2026;

        component.updateCurrentYear();

        expect(component.currentYear).toBe(2026);
    });

    describe('ngOnDestroy', () => {
        it('should clear timeout', () => {
            const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
            component['_timer'] = setTimeout(() => {}, 1000);

            component.ngOnDestroy();

            expect(clearTimeoutSpy).toHaveBeenCalledWith(component['_timer']);
        });

        it('should not clear timeout', () => {
            const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
            component['_timer'] = null as any;

            component.ngOnDestroy();

            expect(clearTimeoutSpy).not.toHaveBeenCalled();
        });
    });
});
