import React, { Component } from 'react';
import Add from './Add';
import TodoList from './TodoList';
import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.state = {todos: []};
  }

  addTodo(text) {
    const { todos } = this.state;
    this.setState(
      {
        todos: [...todos, { id: todos.length, text: text, isChecked: false }]
      }
    );
  }

  checkTodo(id) {
    const todos = [...this.state.todos];
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
    });
    this.setState(
      { todos: todos }
    );
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Add addTodo={this.addTodo} />
        <TodoList todos={todos} checkTodo={this.checkTodo} />
      </div>
    );
  }
}

export default App;
