import {UPDATE_PASSWORD, UPDATE_LOGIN} from './actions'

function  loginReducer(state =  {login: '', password: ''},  action) {
    switch(action.type) {
        case UPDATE_LOGIN:
            return {...state, login: action.payload}
        case UPDATE_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}

export default loginReducer
