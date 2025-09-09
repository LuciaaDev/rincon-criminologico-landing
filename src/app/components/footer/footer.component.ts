import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
    standalone: true,
    imports: [TranslocoModule],
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnDestroy {
    public copyrightUrl = '../../assets/icons/copyright_baseRCBlueFirst.svg';
    public currentYear!: number;
    private _timer!: any;

    constructor(
        private readonly _router: Router,
    ) {
        this.updateCurrentYear();
    }

    /**
     * goToHomeLanding
     * To go to home landing clicking on logo.
     */
    public goToHomeLanding(): void {
        this._router.navigate(['']);
    }

    /**
     * updateCurrentYear
     * To update current year
     */
    public updateCurrentYear(): void {
        this.currentYear = new Date().getFullYear();

        const currentDate = new Date();
        const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
        const timeUntilNextYear = nextYear.getTime() - currentDate.getTime();

        this._timer = setTimeout(() => {
            this.currentYear = new Date().getFullYear();
        }, timeUntilNextYear);
    }

    ngOnDestroy(): void {
        if (this._timer) {
            clearTimeout(this._timer);
        }
    }
}
