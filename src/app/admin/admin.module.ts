import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { CommonLeftComponent } from './common-left/common-left.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImagePipe } from '../image.pipe';

@NgModule({
  declarations: [adminRoutingComponents, CommonLeftComponent, ImagePipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImagePipe]
})
export class AdminModule { }
