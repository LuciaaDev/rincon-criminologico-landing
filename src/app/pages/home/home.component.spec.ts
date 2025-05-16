import { TranslocoTestingModule } from "@jsverse/transloco";
import { HomeComponent } from "./home.component";
import { TestBed } from "@angular/core/testing";

describe('HomeComponent', () => {
    let component: HomeComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HomeComponent,
                TranslocoTestingModule
            ]
        }).compileComponents();

        component = new HomeComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});