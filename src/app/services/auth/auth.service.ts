import { Injectable } from '@angular/core';
import { user } from '../../models/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new user();
  constructor(public route: Router) { }

  public login(): void {
    let user: user;
    const token = 'xw12swxw212';
    localStorage.setItem('token', token);
    this.route.navigateByUrl("home");


  }

  public logout(): void {
    localStorage.removeItem('token');
    this.route.navigateByUrl('login');
  }

  public isLogin(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

}
