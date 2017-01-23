import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [
    { name: '夕食の材料を買い物' ,enabled: true },
    { name: '請求書の支払い'  ,enabled: true},
    { name: 'ジムへ行く'  ,enabled: true},
    { name: '洗濯物を取り込み'  ,enabled: true}
  ];
  newTask;

  onClick(task: Task): void {
    task.enabled = ! task.enabled;
  }

  addTask(): void {
    if(this.newTask){
      this.tasks.push({ name: this.newTask ,enabled: true});
      this.newTask = '';
    }
  }
}
