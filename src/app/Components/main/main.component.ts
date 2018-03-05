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

  sidenavButtons = [
    {
      iconName: 'home',
      label: 'Home',
      pageAddress: 'homepage'
    },
    {
      iconName: 'date_range',
      label: 'Booking',
      pageAddress: 'booking'
    },
    {
      iconName: 'settings',
      label: 'Services',
      pageAddress: 'booking'
    },
    {
      iconName: 'group',
      label: 'About us',
      pageAddress: 'booking'
    },
    {
      iconName: 'phone',
      label: 'Contact us',
      pageAddress: 'booking'
    },
  ];
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
