import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }

  addTodo(title:string): void {
    if(title){
      this.todos.push({ name: title ,enabled: true});
    }
  }

  toggleEnabled(todo: Todo): void {
    todo.enabled = ! todo.enabled;
  }
}
