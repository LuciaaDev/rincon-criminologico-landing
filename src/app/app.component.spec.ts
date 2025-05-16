import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslocoTestingModule, TranslocoService } from '@jsverse/transloco';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let translocoServiceMock: jest.Mocked<TranslocoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        TranslocoTestingModule,
        HeaderComponent,
        HomeComponent
      ],
      providers: [ {component: TranslocoService, useClass: translocoServiceMock} ]
    }).compileComponents();
  });

  describe('should set language', () => {
    beforeEach(() => {
      translocoServiceMock = {
          setActiveLang: jest.fn()
      } as unknown as jest.Mocked<TranslocoService>;
    });

    it('should set default language', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'ca-ES',
        configurable: true
      });

      component = new AppComponent(translocoServiceMock);

      expect(component.browserLang).toBe('ca');
      expect(component.langToSet).toBe('ca');
      expect(translocoServiceMock.setActiveLang).toHaveBeenCalledWith('ca');
    });

    it('should set default language when browser language is not supported', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'fr-FR',
        configurable: true
      });

      component = new AppComponent(translocoServiceMock);

      expect(component.browserLang).toBe('fr');
      expect(component.langToSet).toBe('es');
      expect(translocoServiceMock.setActiveLang).toHaveBeenCalledWith('es');
    });
  });
  
});
