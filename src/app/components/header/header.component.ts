import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
    standalone: true,
    imports: [TranslocoModule],
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    
    constructor(private router: Router) {}

    /**
     * To go to home landing clicking on logo.
     */
    goToHomeLanding(): void {
        this.router.navigate(['']);
    }
}