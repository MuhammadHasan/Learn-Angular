import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  // @Input() public parentData: string;
  //we can also make alias like:
  @Input('parentData') public name: string;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  send(){
    this.childEvent.emit('hello from clild component. ');
  }

}
