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

  public browserLang!: string;
  public supportedLangs!: string[];
  public langToSet!: string;
  
  constructor(
    private readonly _translocoService: TranslocoService
  ) {
    this.setLanguage();
  }

  /**
     * To set active language.
     */
  public setLanguage(): void {
    this.browserLang = navigator.language.split('-')[0];
    this.supportedLangs = ['es', 'en', 'ca'];
    this.langToSet = this.supportedLangs.includes(this.browserLang) ? this.browserLang : 'es';
    this._translocoService.setActiveLang(this.langToSet);
  }
}
