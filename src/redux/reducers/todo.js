//src/redux/reducers/todo.js

import { TODO_ACTIONS } from "../actions/todo"

const reducer = (todoList = [], action) => {
    if (action.type === TODO_ACTIONS.ADD_TODO) {
        return [
            ...todoList,
            {
                "text": action.text,
                "completed": action.completed,
                "duedate": action.duedate
            }
        ]
    } else if (action.type === TODO_ACTIONS.DELETE_TODO) {
        return todoList.filter((ele, idx) => {
            if (idx === action.id) {
                return false
            }
            return true
        })
    } else if (action.type === TODO_ACTIONS.UPDATE_TODO) {
        return todoList.map((ele, idx) => {
            if (idx === action.id) {
                let updated_todo = {}
                if (action.text) {
                    updated_todo["text"] = action.text
                }
                if (action.duedate) {
                    updated_todo["duedate"] = action.duedate
                }
                return Object.assign({}, ele, updated_todo)
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            }
            return ele
        })
    } else if (action.type === TODO_ACTIONS.MARK_TODO) {
        return todoList.map((ele, idx) => {
            if (idx === action.id) {
                return Object.assign({}, ele, {
                    completed: !ele.completed
                })
            }
            return ele
        })
    }
    return todoList
}

export default reducer