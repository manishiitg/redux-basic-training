import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { createStore } from 'redux'

// our application state
// this is a very simple counter application
let init_state = 0


// our actions
// a) to increment counter
// b) to decrement counter
// type can be anything. generally "type" is used as default but it can any key you want.
let increment_action = {
  "type" : "increment"
}
let decrement_action = {
  "type" : "decrement"
}


// our reducer
const do_increment = (state) => {
  return state + 1
}

const do_decrement = (state) => {
  return state - 1
}


//store to bring it all together

function counter_store(state = init_state, action) {
  switch (action.type) {
    case 'increment':
      return do_increment(state)
    case 'decrement':
      return do_decrement(state)
    default:
      return state
  }
}


// now we actuall use redux api's
let store = createStore(counter_store)

store.subscribe( () => {
  // subscribe to any changes in state
  console.log("change happend in state")
  console.log(store.getState())
})

store.dispatch(increment_action)  //1

store.dispatch(decrement_action) // 0

store.dispatch(increment_action) // 1

store.dispatch(increment_action) // 2



let input = {
  "count" : 1
}

function dummyReducer(input){
  return {
    ...input,
    "count" : input.count + 1
  }
}

console.log(dummyReducer(input))











function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
