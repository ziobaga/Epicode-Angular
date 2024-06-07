import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UsersService } from '../../service/users.service';
import { iUsers } from '../../interfaces/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private authSvc: AuthService, private userSvc: UsersService) {}

  user: iUsers | undefined;
  users: iUsers[] = [];

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      this.user = user || undefined;
    });

    this.userSvc.getAllUsers();

    this.userSvc.users$.subscribe((user) => {
      this.users = user;
    });
  }
}
