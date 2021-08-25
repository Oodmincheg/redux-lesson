import {ADD_TODO} from './actions'

function todoReducer(state = ['Learn react'], action) {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        default:
            return state
    }
}

export default todoReducer
