import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {


  courses:Array<string> = ['Math', 'Physics', 'Chemistry', 'Computer Science'];

  constructor() { }

  ngOnInit() {
  }

}
