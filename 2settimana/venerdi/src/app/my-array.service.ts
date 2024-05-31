import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { iTodo } from './models/todo';
import { iUsers } from './models/users';
import { iMyArray } from './models/my-array';
import { iUsersTask } from './models/users-task';

@Injectable({
  providedIn: 'root',
})
export class MyArrayService {
  constructor(
    private todoService: TodoService,
    private usersService: UsersService
  ) {}

  toDoUsers: iMyArray[] = [];

  usersTasks: iUsersTask[] = [];

  //Ottengo tutte le tasks e gli users
  getAllTasksAndUsers(): iMyArray[] {
    return this.todoService.todo1.map((todo: iTodo) => {
      const user = this.usersService.users.find(
        (user: iUsers) => user.id === todo.userId
      );
      return { ...todo, user };
    });
  }

  //Ottengo gli utenti
  getTaskUsers(): iUsersTask[] {
    return this.usersService.users.map((user: iUsers) => {
      const todo1 = this.todoService.todo1.filter(
        (todo1: iTodo) => todo1.userId === user.id
      );
      return { ...user, todo1 };
    });
  }
}
