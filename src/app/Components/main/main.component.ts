import { Component, OnInit, ViewChild } from '@angular/core';
import {MainService} from './Service/main.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  authenticated = false;
  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
