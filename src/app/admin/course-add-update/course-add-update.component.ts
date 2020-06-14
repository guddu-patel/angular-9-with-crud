import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-course-add-update',
  templateUrl: './course-add-update.component.html',
  styleUrls: ['./course-add-update.component.css']
})
export class CourseAddUpdateComponent implements OnInit {

  courseForm: FormGroup;
  error = false;
  massage: string;
  datasaved = false;
  data: any;
  edit = false;
  selectedId = null;
  constructor(private fb: FormBuilder, private courseSer: CourseService,
    private route: ActivatedRoute, private router: Router, private loc: Location) {
    route.params.subscribe(params => {
      debugger;
      if (Object.keys(params).length !== 0) {
        this.edit = true;
        this.selectedId = params['id'];
        this.getData();
      }
    })
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required]],
      createdat: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })
  }
  getData() {
    this.courseSer.getCourseById(this.selectedId).subscribe(data => {
      console.log(data);
      let tdata: any = data;
      this.courseForm.patchValue({
        title: tdata.title,
        createdat: tdata.createdat,
        description: tdata.description,
        image: tdata.image,
      })
    })
  }
  err(ctrl) {
    return this.courseForm.get(ctrl);
  }
  onSubmit(form) {
    debugger;
    if (!this.edit) {
      this.courseSer.createCourse(this.courseForm.value).subscribe(data => {
        console.log('course created', data);
        alert('course created');
        this.router.navigate(['admin/course']);
      })
    } else {
      this.courseSer.updateCourse(this.selectedId, this.courseForm.value).subscribe(data => {
        console.log('course updated', data);
        alert('course updated');
        this.router.navigate(['admin/course']);
      })
    }
  }
  goback() {
    this.loc.back();
  }
}
