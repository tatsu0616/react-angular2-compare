import React from 'react';
import Todo from './Todo';
import '../styles/todoList.css';

const TodoList = (props) => {
  const { todos, checkTodo } = props;
  const list = [];
  todos.forEach((todo, index) =>
    list.push(<Todo key={index} todo={todo} checkTodo={checkTodo} />
  ));
  return (
    <ul className="todoList">
      {list}
    </ul>
  );
}

export default TodoList;
