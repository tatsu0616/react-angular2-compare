import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() todos: Todo[];
  inputValue;

  addTodo(): void {
    if(this.inputValue){
      this.todos.push({ name: this.inputValue ,enabled: true});
      this.inputValue = '';
    }
  }
}
