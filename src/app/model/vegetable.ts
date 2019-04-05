import { NamedDbObject } from './operation';

export class Vegetable {
    id: Number;
    variety: String; // variety
    category: Category;
    name: String; // specific name of the vegetable
}

export class Category implements NamedDbObject {
    id: Number;
    name: String;
}

export class Supplier implements NamedDbObject {
    id: Number;
    name: String;
}

