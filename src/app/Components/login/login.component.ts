import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  private authenticate(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/main']);
    } else {
      this.errorMessage = true;
    }

  }

}
