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

export interface NamedDbObject {
    id: Number;
    name: String;
}

export class Label implements NamedDbObject {
    id: Number;
    name: String;
}
