import React, { useEffect } from 'react';
import { addTodo } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {getTodos} from './store/thunks'

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoRef = React.useRef('');

  useEffect(() => {
    dispatch(getTodos)
  }, [])

  return (
    <>
      <form action="">
        <input ref={todoRef} type="text" placeholder="Enter todo" />
        <button
          type="button"
          onClick={() =>
            dispatch(addTodo(todoRef.current.value))
          }
        >
          Add todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
