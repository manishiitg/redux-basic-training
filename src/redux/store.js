//redux/store.js

import { createStore } from 'redux'

import todoReducer from "./reducers/todo"
// our application state
// this is a very simple counter application
// an array of todo
let init_state = []

export default createStore(todoReducer, init_state)