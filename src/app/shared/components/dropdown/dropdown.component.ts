import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";
import { DropdownOptions } from "../../interfaces/dropdown.model";

@Component({
    standalone: true,
    imports: [TranslocoModule, CommonModule],
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
    @Input() optionsList: DropdownOptions[] = [];
    @Input() selectedOption!: any;
    @Input() isDisabledSelectedHidden = false;
    @Input() disabledSelectedHiddenText!: string;
    @Input() color!: string;
    @Input() size!: string;
    @Input() disabled = false;

    @Output() selectionChange = new EventEmitter<any>();

    public onSelectOption(event: Event): void {
        if(!this.disabled) {
            const target = event.target as HTMLSelectElement | null;
            const value = target?.value;
            if (value !== null || value !== undefined) {
                this.selectionChange.emit(value);
            }
        }
    }
}