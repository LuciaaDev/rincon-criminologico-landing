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
    @Input() text!: string;
    @Input() color!: string;
    @Input() size!: string;
    @Input() disabled = false;

    @Output() clickBtnChange = new EventEmitter<void>();

    public onClickButton(): void {
        if(!this.disabled) {
            this.clickBtnChange.emit();
        }
    }
}