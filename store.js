import {createStore, combineReducers} from 'redux'
import authReducer from './components/Login/store/reducers'
import todosReducer from './components/Todo/store/reducers'

const reducer = combineReducers({auth: authReducer, todos: todosReducer})
const store = createStore(reducer)

export default store
