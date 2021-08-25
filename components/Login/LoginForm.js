import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { UPDATE_PASSWORD, UPDATE_LOGIN } from './store/actions'

function LoginForm() {

const dispatch = useDispatch()
const login = useSelector(state => state.auth.login)
const password = useSelector(state => state.auth.password)
console.log('login ===> ', login)
    return (
        <form action="">
      <input
        type="text"
        placeholder="Enter login"
        value={login}
        onChange={(event) =>
          dispatch({ type: UPDATE_LOGIN, payload: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(event) =>
          dispatch({ type: UPDATE_PASSWORD, payload: event.target.value })
        }
      />
      <button>Submit</button>
    </form>
    )
}

export default LoginForm
