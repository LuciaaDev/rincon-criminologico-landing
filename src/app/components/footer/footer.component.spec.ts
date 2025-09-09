import { TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { TranslocoTestingModule } from "@jsverse/transloco";

describe('FooterComponent', () => {
    let component: FooterComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FooterComponent,
                TranslocoTestingModule
            ]
        }).compileComponents();

        component = new FooterComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    })
});
