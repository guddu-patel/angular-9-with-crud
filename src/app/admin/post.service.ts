import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = environment.baseUrl + "/post";

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
