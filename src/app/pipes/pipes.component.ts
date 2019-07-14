import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  text = 'Angular Pipes';
  message = 'Angular is Awesome';
  date = new Date();
  user = {
    name: 'hasan',
    gender: 'male'
  }

  constructor() { }

  ngOnInit() {
  }

}
