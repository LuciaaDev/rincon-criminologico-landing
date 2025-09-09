import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DropdownComponent } from "../../shared/components/dropdown/dropdown.component";
import { BurgerMenuItem } from "../../shared/interfaces/shared-components.model";
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
export class HeaderComponent implements OnInit {

    public languageOptions = [
        {label: 'header.lang_spanish', value: 'es'},
        {label: 'header.lang_english', value: 'en'},
        {label: 'header.lang_valencian', value: 'ca'},
    ];

    public burgerListOptions: BurgerMenuItem[] = [
        {
            label: 'header.contact',
            type: 'link',
            action: () => console.log('Contacto'),
        },
        {
            label: 'header.about_me',
            type: 'link',
            action: () => console.log('Sobre mí'),
        },
        {
            label: 'header.language',
            type: 'dropdown',
            children: [
                {label: 'header.lang_spanish', action: () => this.getTranslation('es')},
                {label: 'header.lang_english', action: () => this.getTranslation('en')},
                {label: 'header.lang_valencian', action: () => this.getTranslation('ca')},
            ]
        }
    ];

    public showActionButtons = false;
    public screenSize = 877;

    public selectedLangOption!: string;

    public activeLang = this._translocoService.getActiveLang();
    
    constructor(
        private readonly _router: Router,
        private readonly _translocoService: TranslocoService,
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.checkScreenSize();
    }

    /**
     * goToHomeLanding
     * To go to home landing clicking on logo.
     */
    public goToHomeLanding(): void {
        this._router.navigate(['']);
    }

    /** 
     * getTranslation
     * To translate web page clicking on a language option
    */
    public getTranslation(lang: string): void {
        this._translocoService.setActiveLang(lang);
        this.selectedLangOption = lang;
        this.activeLang = lang;

        this._changeDetectorRef.detectChanges();
    }

    /**
     * checkScreenSize
     * To show action buttons or burger menu depending on 
     * the size of the screen.
     */
    public checkScreenSize(): void {
        this.showActionButtons = window.innerWidth >= this.screenSize;
    }
}