import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  buttonDisable: boolean=true;
  buttonStateString: String = 'Disabled';
  
  constructor() {
    setTimeout(() => {
      this.buttonDisable=false;
      this.buttonStateString="Enabled"
    },3000)
   }

  ngOnInit() {
  }

}
