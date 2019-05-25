import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-hello', // use selector as html tag <app-hello>
  // selector: '.app-hello', //use selector as the class name .app-hello.
  selector: '[app-hello]', // we can also use this [] bracket.
  // templateUrl: './hello.component.html',
  template: `
    <div> inline Template</div>
  `,
  // styleUrls: ['./hello.component.css']
  styles: [`
    div{
      background-color: aqua;
      color: red;
    }
  `]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
