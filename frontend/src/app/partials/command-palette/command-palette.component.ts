import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-command-palette',
    templateUrl: 'command-palette.component.html'
})

export class CommandPaletteComponent implements OnInit {

    @Input({ required: true }) isVisible: boolean = false;
    @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }


}