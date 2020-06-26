import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { createStore } from 'redux'

// our application state
// this is a very simple counter application
// an array of todo
let init_state = []


//let's create an action to add todo
//// let add_todo_action = {
//   "type" : "add_todo_action",
//   "todo" : {}
// }
// now since our actions have data as well, we can use functions
// these are called action creators
const ADD_TODO = "add_todo"

function addTodoAction(text, completed, duedate) {
  return {
    type: ADD_TODO,
    text,
    completed,
    duedate
  }
}

// lets create store directly
let todo_store = (state = init_state, action) => {
  if (action.type == ADD_TODO) {
    return [
      ...state,
      {
        "text": action.text,
        "completed": action.completed,
        "duedate": action.duedate
      }
    ]
  }
  return state
}

const store = createStore(todo_store)


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))


store.dispatch( addTodoAction("todo 1", false, new Date()) )
store.dispatch( addTodoAction("todo 2", true, new Date()) )
store.dispatch( addTodoAction("todo 3", false, new Date()) )


// Stop listening to state updates
unsubscribe()





function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
