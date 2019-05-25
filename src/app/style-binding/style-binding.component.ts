import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  isError = true;
  myColor = 'green';
  multiStyles = {
    color: 'blue',
    backgroundColor: 'aqua',
    fontSize: '48px'
  }

  constructor() { }

  ngOnInit() {
  }

}
