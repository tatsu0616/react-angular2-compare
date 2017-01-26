import React from 'react';
import '../styles/todo.css';

const Todo = (props) => {
  const { todo, checkTodo } = props;
  if (todo.isChecked) {
    return (
      <li className="checked" onClick={() => checkTodo(todo.id)}>{todo.text}</li>
    )
  } else {
    return (
      <li onClick={() => checkTodo(todo.id)}>{todo.text}</li>
    )
  }
};

export default Todo;
