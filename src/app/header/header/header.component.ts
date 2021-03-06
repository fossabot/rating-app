import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStore} from '../../LocalStore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return !!this.getConnectedUser();
  }

  getConnectedUser() {
    return LocalStore.getCurrenUser();
  }

  logout() {
    LocalStore.logout();
    this.router.navigate(['/']);
  }

  toggle(el) {
    console.log(el);
    const nav = el;
    const className = nav.getAttribute('class');
    if (className === 'nav-right nav-menu') {
      nav.className = 'nav-right nav-menu is-active';
    } else {
      nav.className = 'nav-right nav-menu';
    }
  }

}
