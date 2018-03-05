import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MainService} from '../main/Service/main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  username: string;
  password: string;
  errorMessage = false;
  constructor(private router: Router, private mainService: MainService) {

   }

  ngOnInit() {
  }

  public authenticate(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.mainService.setUserName(this.username);
      this.router.navigate(['/homepage']);
    } else {
      this.errorMessage = true;
    }

  }

}
