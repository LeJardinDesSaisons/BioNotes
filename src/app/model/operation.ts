import { Area } from './area';
import { Vegetable } from './vegetable';

export class Operation {
    id: Number;
    date: String;
    label: Label;
    vegetable: Vegetable;
    area: Area;
    observations: String;
    done: Boolean;
}

export class Label {
    id: Number;
    name: String;
}
