import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  templateUrl: './reference-variable.component.html',
  styleUrls: ['./reference-variable.component.css']
})
export class ReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(value){
    console.log(value);
  }
}
