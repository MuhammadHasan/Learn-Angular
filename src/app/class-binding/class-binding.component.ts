import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  name = 'Angular 7';
  successClass = 'success';
  errorClass = 'error';

  isError = false;

  multiClasses = {
    "success": !this.isError,
    "error" : this.isError,
    "important": !this.isError
  }

  constructor() { }

  ngOnInit() {
  }

}
