import { Area } from './area';
import { Vegetable } from './vegetable';
import { NAMED_ENTITIES } from '@angular/compiler';

export class Operation {
    id: Number;
    date: Number;
    label: Label;
    vegetable: Vegetable;
    area: Area;
    observations: String;
}

export class Label {
    id: Number;
    name: String;
}



