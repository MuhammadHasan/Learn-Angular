import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  courses = [];
  errMsg;
  courseId;

  constructor(private _course: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this._course.getCourses().subscribe(data => {
    //   this.courses = data;
    // },
    // err => this.errMsg = err
    // );
    
    // get route params.
    let id = this.route.snapshot.paramMap.get('id');
    this.courseId = id;

  }

}
