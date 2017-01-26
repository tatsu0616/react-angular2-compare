import React from 'react';
import '../styles/todo.css';

const Todo = (props) => {
  if (props.isChecked) {
    return (
      <li className="checked">{props.todo}</li>
    )
  } else {
    return (
      <li>{props.todo}</li>
    )
  }
};

export default Todo;
