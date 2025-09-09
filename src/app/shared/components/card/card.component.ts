import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
    standalone: true,
    imports: [TranslocoModule, CommonModule],
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() hasIcon = false;
    @Input() iconUrl!: string;
    @Input() iconHoverUrl!: string;
    @Input() cardTitle!: string;
    @Input() cardText!: string;
    @Input() hasLine = false;
    @Input() cardColor!: string;
    @Input() cardSize!: string;
    @Input() hasButton = false;
    @Input() buttonText!: string;

    @Output() clickCardChange = new EventEmitter<void>();

    public onClickCard(): void {
        this.clickCardChange.emit();
    }
}