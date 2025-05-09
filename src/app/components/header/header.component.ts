import { ChangeDetectorRef, Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DropdownComponent } from "../../shared/components/dropdown/dropdown.component";
import { BurgerSubMenuItem } from "../../shared/interfaces/shared-components.model";
import { BurgerMenuComponent } from "src/app/shared/components/burger-menu/burger-menu.component";

@Component({
    standalone: true,
    imports: [
        TranslocoModule, 
        ButtonComponent, 
        DropdownComponent,
        BurgerMenuComponent
    ],
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

    public burgerListOptions: BurgerSubMenuItem[] = [
        {
            label: 'header.contact',
            route: ''
        },
        {
            label: 'header.about_me',
            route: ''
        },
        {
            label: 'header.language',
            route: '',
            children: [
                {label: 'header.lang_spanish', value: 'es'},
                {label: 'header.lang_english', value: 'en'},
                {label: 'header.lang_valencian', value: 'ca'},
            ]
        },
        {
            label: 'header.log_in',
            route: ''
        },
    ];

    public showActionButtons = false;

    public selectedLangOption!: string;

    public activeLang = this._translocoService.getActiveLang();
    
    constructor(
        private _router: Router,
        private _translocoService: TranslocoService,
        private _changeDetectorRef: ChangeDetectorRef
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
        this._translocoService.setActiveLang(lang);
        this.selectedLangOption = lang;
        this.activeLang = lang;

        this._changeDetectorRef.detectChanges();
    }
}