import { iMyArray } from './../../models/my-array';
import { Component } from '@angular/core';
import { MyArrayService } from './../../my-array.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  myArray: iMyArray[] = [];

  constructor(private myArrayService: MyArrayService) {}

  //mostra l'array completo delle tasks
  ngOnInit() {
    this.myArray = this.myArrayService.getAllTasksAndUsers();
    console.log(this.myArray);
  }

  addTask(task: any) {
    console.log(`id: ${task.id}, completed: ${task.completed}`);
  }
}
