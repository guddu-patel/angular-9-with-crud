import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { AuthGuardService } from '../auth-guard.service';
import { PostAddUpdateComponent } from './post-add-update/post-add-update.component';
import { CourseComponent } from './course/course.component';
import { CourseAddUpdateComponent } from './course-add-update/course-add-update.component';


const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'admin/post', component: PostComponent, canActivate: [AuthGuardService] },
  { path: 'admin/create-post', component: PostAddUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'admin/edit-post/:id', component: PostAddUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'admin/course', component: CourseComponent, canActivate: [AuthGuardService] },
  { path: 'admin/create-course', component: CourseAddUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'admin/edit-course/:id', component: CourseAddUpdateComponent, canActivate: [AuthGuardService] },

];
const components: any = [
  DashboardComponent,
  PostComponent,
  PostAddUpdateComponent,
  CourseComponent,
  CourseAddUpdateComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminRoutingComponents = components;