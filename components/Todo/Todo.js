import React from 'react';
import { addTodo } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoRef = React.useRef('');

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
