import { Component } from '@angular/core';
import { iUsers } from '../../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users: iUsers[] = [];

  //search: string = '';
  //filterUsers: iUsers[] = this.users;

  // searchUsers(): void {
  //   this.filterUsers = this.users.filter(
  //     (user) =>
  //       user.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
  //       user.lastName.toLowerCase().includes(this.search.toLowerCase()) ||
  //       user.email.toLowerCase().includes(this.search.toLowerCase()) ||
  //       user.title.toLowerCase().includes(this.search.toLowerCase())
  //   );
  // }

  // onSearch(e: Event) {
  //   e.preventDefault();
  //   this.searchUsers();
  // }
}
