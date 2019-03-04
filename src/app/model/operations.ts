import { Area } from './area';
import { NAMED_ENTITIES } from '@angular/compiler';

export class Operation {
    id: Number;
    date: Date;
    label: Label;
    vegetable: Vegetable;
    area: Area;
    observations: String;
}

export class Label {
    id: Number;
    name: String;
}

export class Vegetable {
    id: Number;
    variety: String; //variété
    category: Category;
    name: String; //nom spécifique de la variété
}

export class Category {
    id: Number;
    name: String;
}

