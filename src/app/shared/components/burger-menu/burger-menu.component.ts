import { Component, Input } from "@angular/core";
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
    public barMenuList = [1, 2, 3];
    public expandedItems: Set<string> = new Set();
    
    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        console.log('this.isMenuOpen:', this.isMenuOpen);
    }

    public toggleSubMenu(label: string): void {
        console.log('SUB label:', label);
        if(this.expandedItems.has(label)) {
            console.log('SUB IF label:', label);
            this.expandedItems.delete(label);
        } else {
            console.log('SUB ELSE label:', label);
            this.expandedItems.add(label);
        }
    }

    public isExpandedItems(label: string): boolean {
        console.log('expandedItems label:', label);
        return this.expandedItems.has(label);
    }
}