import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { DropdownComponent } from "./dropdown.component";

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;
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
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});