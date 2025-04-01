import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService} from '@jsverse/transloco';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  standalone: true,
  imports: [TranslocoModule, HeaderComponent, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rincon-criminologico-landing';
  
  // TODO: Fix error in browser console
  constructor(
    private readonly translocoService: TranslocoService
  ) {
    const browserLang = navigator.language.split('-')[0];
    const availableLangs = ['en', 'es'];
    const lang = availableLangs.includes(browserLang) ? browserLang : 'en';
    this.translocoService.setActiveLang(lang);
  }
}
