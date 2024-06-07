import { Component } from '@angular/core';
import { iAuth } from '../../interfaces/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  auth: iAuth = {
    email: '',
    password: '',
  };
  signIn() {
    this.authSvc.login(this.auth).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });

    console.log(this.auth);
  }
}
