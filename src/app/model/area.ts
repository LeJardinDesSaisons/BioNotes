export class Area {
    id: Number;
    number: Number;
    type: Type;
    name: String;
    parentId: Number | null;
}

export class Type {
    id: Number;
    name: String;
}
