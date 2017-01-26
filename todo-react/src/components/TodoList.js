import React from 'react';
import Todo from './Todo';
import '../styles/todoList.css';

const TodoList = () => (
  <ul className="todoList">
    <Todo todo={'夕食の材料を買い物'} isChecked={false} />
    <Todo todo={'請求書の支払い'} isChecked={true} />
    <Todo todo={'ジムへ行く'} isChecked={false} />
    <Todo todo={'洗濯物を取り込み'} isChecked={false} />
  </ul>
);

export default TodoList;
