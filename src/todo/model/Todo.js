class Todo {
    constructor(json) {
        this.userId = json.userId;
        this.id = json.id;
        this.title = json.title;
        this.completed = json.completed;
    }
}

export const buildFrom = json => new Todo(json)