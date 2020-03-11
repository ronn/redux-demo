import {applyMiddleware, createStore} from "redux"
import {reducer} from "./modules/reducer"
import thunkMiddleware from 'redux-thunk'

const enhancer = applyMiddleware(thunkMiddleware);

export default createStore(reducer, enhancer)
