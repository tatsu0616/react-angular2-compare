import { Component,Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;

  onClick(todo: Todo): void {
    todo.enabled = ! todo.enabled;
  }
}
