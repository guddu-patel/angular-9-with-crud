import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private cmnsrv: CommonService) { }
  canActivate() {
    if (this.cmnsrv.loggedUser) {
      return true;
    } else {
      return false;
    }
  }
}
