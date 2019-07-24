import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses = [];
  public errMsg;
  
  constructor(private _course: CourseService, private router: Router) { }

  ngOnInit() {
    this._course.getCourses().subscribe(
      data => {
        this.courses = data;
      },
      err => this.errMsg = err
    );
  }

  onClick(course){
    // navigate with route params
    this.router.navigate(['/course', course.id])
  }

}
