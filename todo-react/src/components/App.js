import React, { Component } from 'react';
import Add from './Add';
import TodoList from './TodoList';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add />
        <TodoList />
      </div>
    );
  }
}

export default App;
