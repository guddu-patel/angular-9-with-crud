import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule, staticRoutingComponents } from './staticpages-routing.module';


@NgModule({
  declarations: [staticRoutingComponents],
  imports: [
    CommonModule,
    StaticpagesRoutingModule
  ]
})
export class StaticpagesModule { }
