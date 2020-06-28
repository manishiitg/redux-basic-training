import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import store from "./redux/store"

import { addTodoAction, deleteTodoAction, markTodoAction, updateTodoAction, TODO_ACTIONS } from "./redux/actions/todo"
import { do_user_login, do_user_logout } from "./redux/actions/login"

import { createSelector } from 'reselect'

const getTodos = state => state.todo


const getLatestTodo = createSelector(
  getTodos,
  (todos) => {
    return todos.sort((a, b) => {
      return a.duedate > b.duedate
    })[0]
  }
)

const getTodoLength = createSelector(
  getTodos,
  (todos) => {
    return todos.reduce((sum, ele) => {
      return sum + ele.text.length
    }, 0)
  }
)

const getSingleTodo = createSelector(
  getTodos,
  todos => todos[0]
)

const countTodo = createSelector(
  getTodos,
  todos => todos.length
)


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {

  console.log("state", store.getState())

  console.log("getTodo", getSingleTodo(store.getState()))

  console.log("count Todo", countTodo(store.getState()))

  console.log(" todo lengths ", getTodoLength(store.getState()))

  console.log(" latest todo ", getLatestTodo(store.getState()))

})

store.dispatch(addTodoAction("todo without login", false, new Date()))

store.dispatch(do_user_login("username", "password"))


store.dispatch(addTodoAction("todo 2", true, new Date()))
store.dispatch(addTodoAction("todo 3", false, new Date()))


store.dispatch(deleteTodoAction(2))

store.dispatch(addTodoAction("todo 4", false, new Date()))

store.dispatch(markTodoAction(1))


store.dispatch(updateTodoAction(1, "updated todo"))

store.dispatch(do_user_logout())

// Stop listening to state updates
unsubscribe()





function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
