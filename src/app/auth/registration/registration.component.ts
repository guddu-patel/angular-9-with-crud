import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  error = false;
  massage: string;
  datasaved = false;
  data: any;
  constructor(private fb: FormBuilder, private es: EmployeeserviceService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    })
    this.getData();
  }
  getData() {
    this.es.getemployee().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
  public get EmailId() {
    return this.regForm.get('EmailId');
  }
  public get Password() {
    return this.regForm.get('Password');
  }
  onSubmit(form) {
    this.resetMessages();
    console.log(this.regForm.value);
    if (this.regForm.valid)
      this.es.createemployee(this.regForm.value).subscribe(data => {
        this.datasaved = true;
        this.massage = "Record saved success";
        this.regForm.reset();
        this.getData();
      })
    else {
      this.massage = "Fill form properly";
      this.error = true;
    }
  }
  resetMessages() {
    this.datasaved = false;
    this.massage = "";
    this.error = false;
  }
  deleteEmp(id) {
    this.resetMessages();
    this.es.deleteemployee(id).subscribe(data => {
      console.log("delete:", data);
      this.datasaved = true;
      this.massage = "User delete";
      this.getData();
    })
  }
}
