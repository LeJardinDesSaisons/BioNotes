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
    label: String;
}

export class Vegetable {
    id: Number;
    variety: String;
    category: Category;
    name: VegetableName;
}

export class Category {
    id: Number;
    name: String;
}

export class VegetableName {
    id: Number;
    name: String;
}

