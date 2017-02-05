import { Component } from '@angular/core';
import { Todo } from './todo';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos:Todo[];

  constructor(private service: TodoService) {
    this.todos = service.todos;
  }
}
