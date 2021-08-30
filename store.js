import { configureStore } from '@reduxjs/toolkit'

//TODO: what about redux-thunk and rtk
import authReducer from './components/Login/store/loginSlice'
import todosReducer from './components/Todo/store/reducers'
import { pokemonApi } from './services/jokes'

const reducer = {auth: authReducer, todos: todosReducer, [pokemonApi.reducerPath]: pokemonApi.reducer}

// const store = createStore(reducer,  applyMiddleware(thunk))
const store = configureStore({reducer})

export default store
