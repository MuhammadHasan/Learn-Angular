import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  courses = [];

  constructor(private _course: CourseService) { }

  ngOnInit() {
    this.courses = this._course.getCourses();
  }

}
