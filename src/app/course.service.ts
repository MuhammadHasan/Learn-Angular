import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from './Icourse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'assets/courses.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{
    // return [
    //   { name: "physics", duration: "4 months" },
    //   { name: "computer", duration: "2 months" },
    //   { name: "maths", duration: "4 months" }
    // ]

    return this.http.get<ICourse[]>(this.url);
  }
  
}
