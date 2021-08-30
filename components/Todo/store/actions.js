export const ADD_TODO = 'todos/ADD_TODO'
export const SET_TODOS ='todos/SET_TODOS'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}
