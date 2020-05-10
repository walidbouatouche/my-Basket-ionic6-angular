import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service'
@Injectable({
  providedIn: 'root'
})

// https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
export class GuardPagesGuard implements CanActivate {
  constructor(public route: Router, public AuthService: AuthService) {

  }
  canActivate(): boolean {
    if (this.AuthService.isLogin() === true) {
      return true;
    }

    else {
      this.route.navigate(["/login"]);
      return false;
    }

  }

}
