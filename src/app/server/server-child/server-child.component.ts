import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-child',
  templateUrl: './server-child.component.html',
  styleUrls: ['./server-child.component.css']
})
export class ServerChildComponent implements OnInit {
  @Input() serverValue : {heading: string}
  @Input() serverDescriptions : [{type: string, description : string}]
  
  constructor() {
    //this.serverDescription ={type:"Yello", description : "Bull"};
   }

  ngOnInit() {
  }

}
