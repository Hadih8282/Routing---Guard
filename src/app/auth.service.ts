import { Injectable } from '@angular/core';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;

  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }


  public checkAuth() {
    return this.loggedIn;
  }

  public loggin() {
    this.loggedIn = true;
  }

  public loggout() {
    this.loggedIn = false;
  }


}
