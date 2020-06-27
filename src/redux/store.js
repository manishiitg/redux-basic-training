//redux/store.js

import { createStore, combineReducers } from 'redux'

import todo from "./reducers/todo"
import login from "./reducers/login"

const reducer = combineReducers({
    todo,
    login
})

export default createStore(reducer)