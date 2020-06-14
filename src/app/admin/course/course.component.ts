import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course/course.service';
import { ImagePipe } from 'src/app/image.pipe';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  allcourse = null;
  constructor(private courseSer: CourseService, private imgPipe: ImagePipe) { }

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse() {
    this.courseSer.getCourse().subscribe(data => {
      console.log('Course data:', data);
      this.allcourse = data;
    }, err => {
      this.allcourse = [];
    })
  }
  onDelete(id) {
    this.courseSer.deleteCourse(id).subscribe(data => {
      console.log(data);
      alert('Course deleted');
      this.getCourse();
    })
  }
  imageError(event) {
    event.target.src = this.imgPipe.transform('');
  }
}
