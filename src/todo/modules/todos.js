import {buildFrom} from "../model/Todo";

export const fetchTodos = () =>
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(handleErrors)
        .then(response => response.json())
        .then(jsonTodos => jsonTodos.map(buildFrom))

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}