import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser = false;
  constructor(private router: Router, private cmnser: CommonService) {
    this.loggedUser = cmnser.isLogged();
    cmnser.getLoggedEvent.subscribe((data) => {
      this.loggedUser = cmnser.isLogged();
    });

  }

  ngOnInit(): void { }

  logout() {
    this.cmnser.logout();
  }
}
