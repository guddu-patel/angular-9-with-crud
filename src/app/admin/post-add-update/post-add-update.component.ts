import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-add-update',
  templateUrl: './post-add-update.component.html',
  styleUrls: ['./post-add-update.component.css']
})
export class PostAddUpdateComponent implements OnInit {
  postForm: FormGroup;
  error = false;
  massage: string;
  datasaved = false;
  data: any;
  edit = false;
  selectedId = null;
  constructor(private fb: FormBuilder, private ps: PostService,
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
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      createdat: ['', [Validators.required]],
      image: ['', [Validators.required]],
    })
  }
  getData() {
    this.ps.getPostById(this.selectedId).subscribe(data => {
      console.log(data);
      let tdata: any = data;
      this.postForm.patchValue({
        title: tdata.title,
        createdat: tdata.createdat,
        image: tdata.image,
      })
    })
  }
  err(ctrl) {
    return this.postForm.get(ctrl);
  }
  onSubmit(form) {
    debugger;
    if (!this.edit) {
      this.ps.createPost(this.postForm.value).subscribe(data => {
        console.log('post created', data);
        alert('post created');
        this.router.navigate(['admin/post']);
      })
    } else {
      this.ps.updatePost(this.selectedId, this.postForm.value).subscribe(data => {
        console.log('post updated', data);
        alert('post updated');
        this.router.navigate(['admin/post']);
      })
    }
  }
  goback() {
    this.loc.back();
  }

}
