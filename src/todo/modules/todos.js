import {buildFrom} from "../model/Todo";
import {errorTodos, searchTodos, successTodos} from "./reducer";

export const fetchTodos = () => dispatch => {
    dispatch(searchTodos)

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(handleErrors)
        .then(response => response.json())
        .then(jsonTodos => jsonTodos.map(buildFrom))
        .then(todos => dispatch(successTodos(todos)))
        .catch(error => dispatch(errorTodos("Error: " + error)))
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}