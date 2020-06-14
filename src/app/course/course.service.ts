import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = "http://localhost:3000/course";

  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }
  getCourseById(id) {
    return this.http.get(this.url + '/' + id);
  }
  deleteCourse(id) {
    if (confirm('Are sure want to delete'))
      return this.http.delete(this.url + '/' + id);
  }
  createCourse(data) {
    return this.http.post(this.url, data);
  }
  updateCourse(id, data) {
    return this.http.put(this.url + '/' + id, data);
  }
}
