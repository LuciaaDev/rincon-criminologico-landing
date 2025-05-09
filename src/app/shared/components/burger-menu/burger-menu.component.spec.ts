import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { BurgerMenuComponent } from "./burger-menu.component";

describe('BurgerMenuComponent', () => {
    let component: BurgerMenuComponent;
    let fixture: ComponentFixture<BurgerMenuComponent>;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BurgerMenuComponent, 
                TranslocoTestingModule,
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BurgerMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});