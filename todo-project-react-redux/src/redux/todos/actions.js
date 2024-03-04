import { ADD_TODO, CHANGE_TODO_COLOR, COMPLETE_ALL_TODO, DELETE_COMPLETED_TODO, DELETE_TODO, TODO_LOADED, TOGGLE_TODO } from "./actionTypes"

export const todoLoaded = (todos) => {
  return {
    type: TODO_LOADED,
    payload: todos
  }
}

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

export const completeAllTodo = () => {
  return {
    type: COMPLETE_ALL_TODO,
  }
}

export const deleteCompletedTodo = () => {
  return {
    type: DELETE_COMPLETED_TODO
  }
}

export const changeTodoColor = (todo) => {
  return {
    type: CHANGE_TODO_COLOR,
    payload: todo
  }
}