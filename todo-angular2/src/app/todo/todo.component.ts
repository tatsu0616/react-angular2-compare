import { Component,Input } from '@angular/core';
import { Todo } from '../todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private service: TodoService) {
  }

  onClick(todo: Todo): void {
    this.service.toggleEnabled(todo);
  }
}
