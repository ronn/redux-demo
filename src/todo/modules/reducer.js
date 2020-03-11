//ACTIONS
import {buildFrom} from "../model/Todo";
import {Request} from "../model/Request";

const SEARCH_TODOS = 'SEARCH_TODOS';
const ERROR_SEARCHING_TODOS = 'ERROR_SEARCHING_TODOS';
const SUCCESS_SEARCHING_TODOS = 'SUCCESS_SEARCHING_TODOS';

//ACTION CREATORS
export const searchTodos = () => ({
    type: SEARCH_TODOS
})

export const errorTodos = message => ({
    type: ERROR_SEARCHING_TODOS,
    message
})

export const successTodos = todos => ({
    type: SUCCESS_SEARCHING_TODOS,
    todos
})

const initialState = {
    todos: [],
    request: Request.NONE,
    message: ''
}

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TODOS: return {
            ...state,
            request: Request.PENDING
        }

        case ERROR_SEARCHING_TODOS: return {
            ...state,
            request: Request.ERROR,
            message: action.message
        }

        case SUCCESS_SEARCHING_TODOS:
            return {
                ...state,
                request: Request.SUCCESS,
                message: '',
                todos: action.todos
            }

        default: return state
    }
}
