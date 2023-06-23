import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn = false;
isLoggedOut: boolean = false;


constructor() { }
logout() {
  // Perform logout logic
  this.isLoggedOut = false;
}
}