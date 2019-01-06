import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  /*
  template:`----------------------------------------------------
  <br/><h6>Starting of the "{{componentName}}" Component</h6>
  Bind Example  : <input type="text" [(ngModel)]="componentName"/>
  <h6>Ending of the "{{componentName}}" Component</h6>`,*/
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  
})
export class ServerComponent implements OnInit {
  
  bindExample: String = 'Bind Example';
  componentName: String = 'Server App';
  
  constructor() {
    
   }

  ngOnInit() {
  }
 }
