import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { ButtonComponent } from "./button.component";

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ButtonComponent, 
                TranslocoTestingModule,
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});