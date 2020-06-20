import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://api.npoint.io/12a0328b2aa419d1d1fd/post";

  constructor(private http: HttpClient) { }
  getPost() {
    return this.http.get(this.url);
  }
  getPostById(id) {
    return this.http.get(this.url + '/' + id);
  }
  deletePost(id) {
    if (confirm('Are sure want to delete'))
      return this.http.delete(this.url + '/' + id);
  }
  createPost(data) {
    return this.http.post(this.url, data);
  }
  updatePost(id, data) {
    return this.http.put(this.url + '/' + id, data);
  }
}
