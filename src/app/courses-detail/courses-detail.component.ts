import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  courses = [];
  errMsg;
  courseId;

  constructor(private _course: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this._course.getCourses().subscribe(data => {
    //   this.courses = data;
    // },
    // err => this.errMsg = err
    // );
    
    // get route params. // with snapshot aproach
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.courseId = id;

    // paramMap Obserable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.courseId = id;
    });

  }

  previous(){
    let id = this.courseId - 1;
    this.router.navigate(['/course', id])
  }

  next(){
    let id = this.courseId + 1;
    this.router.navigate(['/course', id])
  }

  back(){
    let selectedId = this.courseId ? this.courseId : null;
    // optional parameter with routing
    this.router.navigate(['/course', { id: selectedId }]);

    // ../ means go back one segment in the url.
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});

  }

  overview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  teacher(){
    this.router.navigate(['teacher'], {relativeTo: this.route});
  }

}
