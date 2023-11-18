import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/models/Container';
import { ContainerStateToColorPipe } from "../../pipes/state-to-color.pipe";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    standalone: true,
    selector: 'app-container-dialog',
    templateUrl: 'container-dialog.component.html',
    imports: [ContainerStateToColorPipe],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: "translateX(-100%)" }),
                animate('150ms', style({ transform: 0 })),
            ]),
            transition(':leave', [
                animate('150ms', style({ transform: "translateX(-100%)" }))
            ])
        ]),
    ]
})

export class ContainerDialogComponent implements OnInit {

    @Input({ required: true }) container!: Container

    @Input({ required: true }) isVisible: boolean = false;
    @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    closeDialog() {
        this.isVisibleChange.emit(false);
    }
}