import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports: [FormsModule],
    selector: 'app-command-palette',
    templateUrl: 'command-palette.component.html'
})

export class CommandPaletteComponent implements OnInit {

    @Input({ required: true }) isVisible: boolean = false;
    @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    commandValue = signal("")

    constructor() { }

    ngOnInit() { }

    emitCommand() {
        const command = this.commandValue().trim()
        const startWithCommand = command.startsWith('start') || command.startsWith('stop') || command.startsWith('pause') || command.startsWith('remove') || command.startsWith('resume')
        if (!startWithCommand) {
            //Show error
        }
        const splittedCommand = command.split(' ');
        if (splittedCommand.length < 2) {
            //Show error
        }

        //Execute command
    }

    comandInputChanged(value: string) {
        this.commandValue.set(value)
    }

}