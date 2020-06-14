import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ImagePipe } from 'src/app/image.pipe';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {

  allCourse: any;
  constructor(private courseSer: CourseService, private imgPipe: ImagePipe) { }

  ngOnInit(): void {
    this.courseSer.getCourse().subscribe(data => {
      this.allCourse = data;
    })
  }
  imageError(event) {
    event.target.src = this.imgPipe.transform('');
  }
}
