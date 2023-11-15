import { Pipe, PipeTransform } from '@angular/core';
import { ContainerState } from '../models/Container';

@Pipe({
    name: 'stateToColor',
    standalone: true
})

export class ContainerStateToColorPipe implements PipeTransform {
    transform(value: ContainerState | undefined): string {
        if(!value)
            return "";
        switch (value) {
            case ContainerState.CREATED:
            case ContainerState.RUNNING:
                return "bg-green-400";
            case ContainerState.PAUSED:
                return "bg-yellow-400";
            case ContainerState.RESTARTING:
                return "bg-blue-400";
            case ContainerState.DEAD:
                return "bg-white";
            case ContainerState.EXITED:
                return "bg-red-400";
        }
    }
}