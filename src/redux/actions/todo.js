//src/redux/actions/todo.js


//let's create an action to add todo
//// let add_todo_action = {
//   "type" : "add_todo_action",
//   "todo" : {}
// }
// now since our actions have data as well, we can use functions
// these are called action creators

const ADD_TODO = "add_todo"
const DELETE_TODO = 'delete_todo'
const UPDATE_TODO = "updated_todo"
const MARK_TODO = 'mark_todo'

export const TODO_ACTIONS = {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    MARK_TODO
}

export function addTodoAction(text, completed, duedate) {
  return {
    type: ADD_TODO,
    text,
    completed,
    duedate
  }
}

export  function deleteTodoAction(idx) {
  return {
    type: DELETE_TODO,
    id: idx
  }
}

export function updateTodoAction(idx, text, duedate = false) {
  return {
    type: UPDATE_TODO,
    id: idx,
    text: text,
    duedate: duedate
  }
}
export function markTodoAction(idx) {
  return {
    type: MARK_TODO,
    id: idx
  }
}
