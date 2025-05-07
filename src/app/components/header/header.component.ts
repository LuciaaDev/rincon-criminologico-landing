import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
    standalone: true,
    imports: [TranslocoModule, ButtonComponent],
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    
    constructor(private _router: Router) {}

    /**
     * To go to home landing clicking on logo.
     */
    goToHomeLanding(): void {
        this._router.navigate(['']);
    }
}