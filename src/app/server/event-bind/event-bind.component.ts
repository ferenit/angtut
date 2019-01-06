import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
  eventBinding: String = 'Click to Trigger Event'
  eventBindingCount : number =0;
  
  constructor() { }

  ngOnInit() {
  }

  onClickEventBindingBtn()
  {
    this.eventBinding="Event executed";
    this.eventBindingCount++;
  }
  

}
