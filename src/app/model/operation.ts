import { Area } from './area';
import { Vegetable, Supplier } from './vegetable';

export class Operation {
    id: Number;
    date: String;
    label: Label;
    vegetable: Vegetable;
    supplier: Supplier;
    area: Area;
    observations: String;
    done: Boolean;
}

export class Label {
    id: Number;
    name: String;
}

export interface NamedDbObject {
    id: Number;
    name: String;
}
