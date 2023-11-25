import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, WritableSignal, computed, signal } from '@angular/core';
import { Container, ContainerState } from 'src/app/models/Container';
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
                transform: 'translate(-101%, -50%)',
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

    isVisible = signal(false);
    selectedState: WritableSignal<ContainerState | undefined> = signal(undefined)
    states = ContainerState;
    filteredContainers = computed(() => {
        console.log("Computed run ")
        if (!this.selectedState())
            return this.containers;

        return this.containers.filter((c) => this.selectedState() === c.state)
    })


    constructor() { }

    ngOnInit() { }

    closeDialog() {
        this.isVisible.set(false);
    }

    toggleVisibility() {
        this.isVisible.update(value => !value);
    }

    selectState(state: ContainerState | undefined) {
        if(state === this.selectedState())
            this.selectedState.set(undefined);
        else
            this.selectedState.set(state);
    }
}