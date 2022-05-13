import { Component, DoCheck,  OnInit,  } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , DoCheck {

  isLogginIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogginIn = this.authService.checkAuth();
  }
  
  ngDoCheck(): void {
    this.isLogginIn = this.authService.checkAuth();
    
  }
  // this.isLogginIn = this.authService.checkAuth();

  loginUser() {
    this.authService.loggin();
  }
  logoutUser() {
    this.authService.loggout();
  }

}
