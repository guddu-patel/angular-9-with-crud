import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  title = 'Course list';
  allCourse: any;
  constructor(private courseSer: CourseService) { }

  ngOnInit(): void {
    this.courseSer.getCourse().subscribe(data => {
      this.allCourse = data;
    })
  }

}
