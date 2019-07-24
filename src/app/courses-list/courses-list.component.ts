import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses = [];
  public errMsg;
  selectedId;

  constructor(private _course: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._course.getCourses().subscribe(
      data => {
        this.courses = data;
      },
      err => this.errMsg = err
    );

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onClick(course){
    // navigate with route params
    this.router.navigate(['/course', course.id])
  }

  isSelected(course){
    return course.id === this.selectedId;
  }

}
