import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourse } from './Icourse';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

    return this.http
      .get<ICourse[]>(this.url)
      .pipe(
        catchError(this.errorHandler)
      )

  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
  
}
