import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url = environment.baseUrl + "/employee";
  constructor(private http: HttpClient) { }
  createemployee(emp: Employee): Observable<any> {
    return this.http.post(this.url, emp);
  }
  deleteemployee(id) {
    if (confirm('Are you sure to delte'))
      return this.http.delete(this.url + '/' + id);
    return null;
  }
  getemployee() {
    return this.http.get(this.url);
  }
  login(data) {
    let id = data.Username;
    let pass = data.Password;
    return this.http.get(this.url + `?EmailId=${id}&Password=${pass}`);
  }
}
