import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUsers } from '../interfaces/users';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { iAuth } from '../interfaces/auth';

type AccessData = {
  accessToken: string;
  user: iUsers;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  jwtHelper: JwtHelperService = new JwtHelperService();

  userSub = new BehaviorSubject<iUsers | null>(null);
  loggedIn: boolean = false; //se l'utente è autentificato

  user$ = this.userSub.asObservable();
  logged$ = this.user$.pipe(
    map((user) => !!user),
    tap((user) => (this.loggedIn = user))
  );

  loginUrl: string = environment.loginUrl;
  registerUrl: string = environment.registerUrl;

  //registrazione
  register(newUser: Partial<iUsers>): Observable<AccessData> {
    return this.http.post<AccessData>(this.registerUrl, newUser);
  }

  //login
  login(loginData: iAuth): Observable<AccessData> {
    return this.http.post<AccessData>(this.loginUrl, loginData).pipe(
      tap((data) => {
        this.userSub.next(data.user);
        localStorage.setItem('accessData', JSON.stringify(data));

        this.autoLogout(data.accessToken); //logout auto quando scade il token
      })
    );
  }

  //logout
  logout() {
    this.userSub.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  //logout automatico
  autoLogout(jwt: string) {
    const expiredDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expiredMs = expiredDate.getTime() - new Date().getTime();
    setTimeout(() => {
      this.logout();
    }, expiredMs);
  }

  accessToken(): string {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return '';
    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return '';
    return accessData.accessToken;
  }

  //ripristino l'utente
  restoreUser() {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return;
    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;
    this.userSub.next(accessData.user);
    this.autoLogout(accessData.accessToken);
  }
}
