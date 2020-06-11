import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule, courseRoutingComponents } from './course-routing.module';
import { CourseFeaturedComponent } from './course-featured/course-featured.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';


@NgModule({
  declarations: [courseRoutingComponents, CourseFeaturedComponent, CourseRecentComponent, CourseCategoriesComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  exports: [CourseFeaturedComponent]
})
export class CourseModule { }
