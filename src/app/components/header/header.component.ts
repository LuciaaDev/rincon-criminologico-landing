import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DropdownComponent } from "../../shared/components/dropdown/dropdown.component";
import { DropdownOptions } from "../../shared/interfaces/dropdown.model";

@Component({
    standalone: true,
    imports: [TranslocoModule, ButtonComponent, DropdownComponent],
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public languageOptions = [
        {label: 'header.lang_spanish', value: 'es'},
        {label: 'header.lang_english', value: 'en'},
        {label: 'header.lang_valencian', value: 'ca'},
    ];

    public selectedLangOption!: string;

    public activeLang = this._translocoService.getActiveLang();
    
    constructor(
        private _router: Router,
        private _translocoService: TranslocoService
    ) {}

    /**
     * To go to home landing clicking on logo.
     */
    public goToHomeLanding(): void {
        this._router.navigate(['']);
    }

    /** 
     * To translate web page clicking on a language option
    */
    public getTranslation(lang: string): void {
        // TODO: Traducir correctamente la web
        this._translocoService.setActiveLang(lang);
        this.selectedLangOption = lang;
        this.activeLang = lang;
    }
}