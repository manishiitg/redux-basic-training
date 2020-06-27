//redux/store.js

import { createStore, combineReducers, applyMiddleware } from 'redux'

import todo from "./reducers/todo"
import login from "./reducers/login"

const reducer = combineReducers({
    todo,
    login
})

function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

function allowOnlyLogin({ getState }) {
    return next => action => {

        if (action.type.toLowerCase().indexOf("todo") != -1) {
            console.log("todo action found")
            let state = getState()
            if (state.user) {
                if ("username" in state.user) {
                    console.log("todo action is allowed because user is logged in")
                    return next(action)
                }else{
                    console.log("only logged in users allowed")
                }
            }else{
                console.log("only logged in users allowed")
            }
        } else {
            console.log("non  todo action found")
            return next(action)
        }

    }
}

export default createStore(reducer, {}, applyMiddleware(logger, allowOnlyLogin))