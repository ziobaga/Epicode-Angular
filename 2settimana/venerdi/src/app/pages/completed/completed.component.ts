import { MyArrayService } from './../../my-array.service';
import { iMyArray } from './../../models/my-array';
import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  MyArray: iMyArray[] = [];

  constructor(private MyArrayService: MyArrayService) {}

  ngOnInit() {
    this.MyArray = this.MyArrayService.getAllTasksAndUsers();
    console.log(this.MyArray);
  }
}
