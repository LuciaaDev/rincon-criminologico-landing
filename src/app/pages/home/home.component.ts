import { Component, OnInit } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
    standalone: true,
    imports: [TranslocoModule, ButtonComponent],
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    public showSloganImg = false;

    ngOnInit(): void {
        this.checkScreenSize();
    }
    
    /**
     * checkScreenSize
     * To show action buttons or burger menu depending on 
     * the size of the screen.
     */
    public checkScreenSize(): void {
        this.showSloganImg = window.innerWidth >= 768;
    }
}