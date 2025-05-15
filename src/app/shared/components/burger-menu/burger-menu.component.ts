import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { BurgerMenuItem } from "../../interfaces/shared-components.model";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [TranslocoModule, RouterModule],
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
    @Input() menuItemsList: BurgerMenuItem[] = [];
    
    public isMenuOpen = false;
    public isSubMenuOpen = false;
    public activeDropdownOption: string | null = null;
    
    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        this.activeDropdownOption = null;
    }

    public activateDropdownOption(label: string): void {
        this.activeDropdownOption = this.activeDropdownOption === label ? null : label;
    }
}