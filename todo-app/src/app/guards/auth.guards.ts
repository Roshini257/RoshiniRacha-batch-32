import { Injectable } from '@angular/core';
import { Router, CanActivate,CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProfileComponent } from '../Profile/Profile.component';
import { LoginComponent } from '../Login/Login.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanDeactivate<ProfileComponent|LoginComponent> {
  constructor(public router: Router, private authService: AuthService) {}
  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn;
    console.log('isLoggedIn@@@@@', isLoggedIn);
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
  canDeactivate(component: ProfileComponent|LoginComponent): boolean {
    return confirm('Your changes will be lost. Are you sure you want to navigate away?');
  }
}

