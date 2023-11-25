import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/models/Container';
import { ContainerStateToColorPipe } from "../../pipes/state-to-color.pipe";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    standalone: true,
    selector: 'app-container-dialog',
    templateUrl: 'container-dialog.component.html',
    imports: [ContainerStateToColorPipe],
    animations: [
        trigger('openClose', [
            state('open', style({
                top: '50%',
                transform: 'translateY(-50%)',
            })),
            state('closed', style({
                top: '50%',
                transform: 'translate(-102%, -50%)',
            })),
            transition('open => closed', [
                animate('150ms')
            ]),
            transition('closed => open', [
                animate('150ms')
            ]),
        ])
    ]
})

export class ContainerDialogComponent implements OnInit {

    @Input({ required: true }) container!: Container | undefined;

    @Input({ required: true }) isVisible: boolean = false;
    @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    closeDialog() {
        this.isVisibleChange.emit(false);
    }
}