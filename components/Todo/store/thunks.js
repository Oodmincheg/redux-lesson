import {setTodos} from './actions'

export function getTodos(dispatch) {
        return Promise
        .resolve(['Learn React', 'Learn Redux', 'Learn toolkit', 'Learn redux-thunk'])
        .then(todos => dispatch(setTodos(todos)))
    }

