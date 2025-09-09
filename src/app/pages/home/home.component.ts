import { Component, OnInit } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
    standalone: true,
    imports: [TranslocoModule, ButtonComponent, CardComponent],
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    public showHomeImgs = false;
    public screenSize = 768;
    public prize = 12;
    public euroSymbol = '€';

    public brainIconUrl = '../../../assets/icons/brain-red.svg';
    public newsIconUrl = '../../../assets/icons/news-red.svg';
    public reflectionIconUrl = '../../../assets/icons/reflection-red.svg';

    public questionsIconUrl = '../../../assets/icons/question-mark-red.svg';
    public contactIconUrl = '../../../assets/icons/mail-red.svg';
    public aboutMeIconUrl = '../../../assets/icons/person-red.svg';

    public questionsHoverUrl = '../../../assets/icons/question-mark-blue.svg';
    public contactHoverUrl = '../../../assets/icons/mail-blue.svg';
    public aboutMeHoverUrl = '../../../assets/icons/person-blue.svg';

    ngOnInit(): void {
        this.checkScreenSize();
    }
    
    /**
     * checkScreenSize
     * To show action buttons or burger menu depending on 
     * the size of the screen.
     */
    public checkScreenSize(): void {
        this.showHomeImgs = window.innerWidth >= this.screenSize;
    }
}