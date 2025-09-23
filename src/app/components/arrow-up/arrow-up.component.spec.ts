import { TestBed } from '@angular/core/testing';
import { ArrowUpComponent } from './arrow-up.component';

describe('ArrowUpComponent', () => {
    let component: ArrowUpComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [{}]
        }).compileComponents();

        component = new ArrowUpComponent;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
