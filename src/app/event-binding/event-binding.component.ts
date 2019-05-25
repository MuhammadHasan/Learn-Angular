import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  eventType = 'null'; 
  msg = "click please"
  constructor() { }

  ngOnInit() {
  }

  pleaseClick(event){
    console.log('*** click ***: ', event);
    this.msg = "Thanks for click the button.";
    this.eventType = event.type;
  }
}
