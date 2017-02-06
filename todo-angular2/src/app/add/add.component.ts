import { Component, Input } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  inputValue;

  constructor(private service: TodoService) {
  }

  addTodo(): void {
    this.service.addTodo(this.inputValue);
    this.inputValue = '';
  }
}
