export const ADD_TODO = 'todos/ADD_TODO'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
