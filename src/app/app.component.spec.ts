import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoTestingModule, TranslocoService } from '@jsverse/transloco';

describe('AppComponent', () => {
  let translocoServiceMock = TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, TranslocoTestingModule],
      providers: [ {component: TranslocoService, useClass: translocoServiceMock} ]
    }).compileComponents();
  });

  // TODO: Fix unit testing

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome rincon-criminologico-landing'
    );
  });

  it(`should have as title 'rincon-criminologico-landing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rincon-criminologico-landing');
  });
});
