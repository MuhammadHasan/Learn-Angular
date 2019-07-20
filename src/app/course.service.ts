import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return [
      { name: "physics", duration: "4 months" },
    { name: "computer", duration: "2 months" },
    { name: "maths", duration: "4 months" }
    ]
  }
  
}
