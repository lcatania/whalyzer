import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/models/Container';
import { ContainerStateToColorPipe } from "../../pipes/state-to-color.pipe";

@Component({
    standalone: true,
    selector: 'app-container-list',
    templateUrl: 'container-list.component.html',
    styles: `
    .pixel-border-custom {
       box-shadow: 
            3px 0 0 0 black,
            0 -3px 0 0 black,
            0 3px 0 0 black;
        }
    `,
    animations: [
        trigger('openClose', [
            state('open', style({
                top: '50%',
                transform: 'translateY(-50%)',
            })),
            state('closed', style({
                top: '50%',
                transform: 'translate(-100%, -50%)',
            })),
            transition('open => closed', [
                animate('150ms')
            ]),
            transition('closed => open', [
                animate('150ms')
            ]),
        ])
    ],
    imports: [ContainerStateToColorPipe]
})

export class ContainerListComponent implements OnInit {

    @Input() containers: Container[] = [];

    isVisible: boolean = true;

    constructor() { }

    ngOnInit() { }

    closeDialog() {
        this.isVisible = false;
    }
}