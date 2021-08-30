import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import authReducer from './components/Login/store/reducers'
import todosReducer from './components/Todo/store/reducers'

const reducer = combineReducers({auth: authReducer, todos: todosReducer})
const store = createStore(reducer,  applyMiddleware(thunk))

export default store
