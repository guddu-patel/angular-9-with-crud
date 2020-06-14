import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ImagePipe } from 'src/app/image.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allpost = null;
  constructor(private postSer: PostService, private imgPipe: ImagePipe) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.postSer.getPost().subscribe(data => {
      console.log('post data:', data);
      this.allpost = data;
    }, err => {
      this.allpost = [];
    })
  }
  onDelete(id) {
    this.postSer.deletePost(id).subscribe(data => {
      console.log(data);
      alert('Post deleted');
      this.getPost();
    })
  }
  imageError(event) {
    event.target.src = this.imgPipe.transform('');
  }
}
