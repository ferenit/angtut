import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service'

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css'],
  styles:[`
    .isFool {
      color : white;
    }
    .isNotFool {
      color : blue;
    }
  `]
})
export class AttributeDirectiveComponent implements OnInit {

  foolText : boolean =false
  constructor(private serverService : ServerService) { } 

  ngOnInit() {
    this.serverService.currentMessage.subscribe(message => this.foolText=message)
  }
  getColor()
  {
    return this.foolText ? "blue" : "red";
  }


}
