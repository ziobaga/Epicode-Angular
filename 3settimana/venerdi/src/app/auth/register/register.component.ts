import { Component } from '@angular/core';
import { iUsers } from '../../interfaces/users';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  registerData: Partial<iUsers> = {};

  signUp() {
    this.authSvc.register(this.registerData).subscribe((data) => {
      this.router.navigate(['/auth/login']);
    });
  }
}
