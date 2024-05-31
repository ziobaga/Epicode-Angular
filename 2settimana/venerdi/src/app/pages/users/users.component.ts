import { MyArrayService } from './../../my-array.service';
import { Component } from '@angular/core';
import { iUsersTask } from '../../models/users-task';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  usersTasks: iUsersTask[] = [];

  constructor(private MyArrayService: MyArrayService) {}

  ngOnInit() {
    this.usersTasks = this.MyArrayService.getTaskUsers();
    console.log(this.usersTasks);
  }
}
