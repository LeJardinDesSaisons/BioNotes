export class Area {
    id: Number;
    number: Number;
    type: Type;
    name: String;
    parentId: Number | null;
}

export interface AutoSuggested {
    id: Number;
    name: String;
}

export class Type implements AutoSuggested {
    id: Number;
    name: String;
}
