import { Component } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
    standalone: true,
    imports: [TranslocoModule, ButtonComponent],
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    
}