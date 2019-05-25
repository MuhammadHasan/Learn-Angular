import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello', // use selector as html tag <app-hello>
  // selector: '.app-hello', //use selector as the class name .app-hello.
  // selector: '[app-hello]', // we can also use this [] bracket.
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string = 'hasan';

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return this.name;
  }

}
