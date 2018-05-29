export interface IList {
    listId: number;
    listName: string;
    creationDate: DateTimeFormat;
    completed: List;
    listItems: List;
}

export interface List {
    items: string[];
    completed: boolean;
}
