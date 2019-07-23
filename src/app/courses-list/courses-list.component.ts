import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses = [];
  public errMsg;
  
  constructor(private _course: CourseService) { }

  ngOnInit() {
    this._course.getCourses().subscribe(
      data => {
        this.courses = data;
      },
      err => this.errMsg = err
    );
  }

}
