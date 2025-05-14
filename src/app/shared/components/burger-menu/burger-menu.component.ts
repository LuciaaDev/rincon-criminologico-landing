import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { BurgerMenuItem } from "../../interfaces/shared-components.model";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [TranslocoModule, RouterModule, CommonModule],
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
    @Input() menuItemsList: BurgerMenuItem[] = [];
    @Input() color!: string;
    @Input() size!: string;
    
    public isMenuOpen = false;
    public activeDropdownOption: string | null = null;
    
    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    public toggleSubMenu(label: string): void {
        this.activeDropdownOption = this.activeDropdownOption === label ? null : label;
    }
}