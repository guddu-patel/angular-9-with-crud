import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule, authRoutingComponents } from './auth-routing.module';
import { EmployeeserviceService } from './employeeservice.service'

@NgModule({
  declarations: [authRoutingComponents],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeserviceService]
})
export class AuthModule { }
