import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loggedUser = false;
  @Output() getLoggedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {
    this.checkLogin();
  }
  loggedIn(tdata) {
    delete tdata.Password;
    localStorage.setItem("Employee", JSON.stringify(tdata));
    this.loggedUser = true;
    this.getLoggedEvent.emit();
    this.router.navigate(['admin/dashboard']);
  }
  checkLogin() {
    if (localStorage.getItem('Employee'))
      this.loggedUser = true;
    else
      this.loggedUser = false;
  }
  logout() {
    localStorage.removeItem('Employee');
    this.loggedUser = false;
    this.getLoggedEvent.emit();
    this.router.navigate(['/']);
  }
  isLogged() {
    return this.loggedUser;
  }
}
