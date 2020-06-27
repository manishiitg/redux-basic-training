import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import store from "./redux/store"

import { addTodoAction, deleteTodoAction, markTodoAction, updateTodoAction } from "./redux/actions/todo"


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))


store.dispatch(addTodoAction("todo 1", false, new Date()))
store.dispatch(addTodoAction("todo 2", true, new Date()))
store.dispatch(addTodoAction("todo 3", false, new Date()))


store.dispatch(deleteTodoAction(2))

store.dispatch(addTodoAction("todo 4", false, new Date()))

store.dispatch(markTodoAction(1))


store.dispatch(updateTodoAction(1, "updated todo"))

// Stop listening to state updates
unsubscribe()





function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
