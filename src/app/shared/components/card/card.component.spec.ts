import { TestBed } from "@angular/core/testing";
import { TranslocoService, TranslocoTestingModule } from "@jsverse/transloco";
import { CardComponent } from "./card.component";

describe('CardComponent', () => {
    let component: CardComponent;
    let translocoServiceMock = TranslocoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CardComponent, 
                TranslocoTestingModule,
            ],
            providers: [
                {component: TranslocoService, useClass: translocoServiceMock}
            ]
        }).compileComponents();

        component = new CardComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});