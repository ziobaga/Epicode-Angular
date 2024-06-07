import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUsers } from '../interfaces/users';
import { environment } from '../../environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private user = new Subject<iUsers[]>();
  users$ = this.user.asObservable();

  getAllUsers() {
    return this.http
      .get<iUsers[]>(environment.usersUrl)
      .subscribe((users) => this.user.next(users));
  }
}
