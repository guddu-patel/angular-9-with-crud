import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  massage: string;
  constructor(private fb: FormBuilder, private es: EmployeeserviceService, private router: Router, private cmnser: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['admin@admin.com', [Validators.required]],
      Password: ['asdf1', [Validators.required]]
    })
  }
  resetMessages() {
    this.massage = "";
    this.error = false;
  }
  onSubmit(form) {
    this.resetMessages();
    console.log(this.loginForm.value);
    if (this.loginForm.valid)
      this.es.login(this.loginForm.value).subscribe(data => {
        debugger;
        if (data) {
          this.loginForm.reset();
          let tdata = data[0];
          this.cmnser.loggedIn(tdata);
        } else {
          console.log("login error", data);
          this.error = true;
          this.massage = "User ID/Password Wrong";
        }
      }, error => {
        console.log("login error", error);
        this.massage = error.statusText;
        this.error = true;
      })
    else {
      this.massage = "Fill form properly";
      this.error = true;
    }
  }
}
