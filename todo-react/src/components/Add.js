import React from 'react';
import '../styles/add.css';

const Add = () => (
  <div className="add">
    <h2 className="title">TODOサンプルアプリケーション</h2>
    <input type="text" className="inputBox" placeholder="TODOを入力" />
    <input type="button" className="addBtn" value="登録" />
  </div>
);

export default Add;
