import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'contactus', component: ContactUsComponent }
];
const components: any = [ContactUsComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
export const staticRoutingComponents = components;
