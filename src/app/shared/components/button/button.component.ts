import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
    standalone: true,
    imports: [TranslocoModule, CommonModule],
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input() btnText!: string;
    @Input() btnColor!: string;
    @Input() btnSize!: string;
    @Input() btnDisabled = false;

    @Output() clickBtn = new EventEmitter<void>();

    public onClickButton(): void {
        if(!this.btnDisabled) {
            this.clickBtn.emit();
        }
    }
}