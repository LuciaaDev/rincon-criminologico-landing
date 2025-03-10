import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService} from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [RouterModule, TranslocoModule],
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
