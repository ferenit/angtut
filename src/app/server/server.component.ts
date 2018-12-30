import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  /*
  template:`----------------------------------------------------
  <br/><h6>Starting of the "{{componentName}}" Component</h6>
  Bind Example  : <input type="text" [(ngModel)]="componentName"/>
  <h6>Ending of the "{{componentName}}" Component</h6>`,*/
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles:[`
    .isFool {
      color : white;
    }
    .isNotFool {
      color : blue;
    }
  `]
})
export class ServerComponent implements OnInit {
  
  bindExample: String = 'Bind Example';
  componentName: String = 'Server App';
  eventBinding: String = 'Click to Trigger Event'
  count: number =10;
  eventBindingCount : number =0;
  buttonDisable: boolean=true;
  buttonStateString: String = 'Disabled';
  foolText: boolean =false;
  directivePracticeBtnTxt: String = "Show Directive Practice";
  isShowDirectivePractice: boolean = false;
  animals = ["hen","sheep"];

  constructor() {
    setTimeout(() => {
      this.buttonDisable=false;
      this.buttonStateString="Enabled"
    },3000)
   }

  ngOnInit() {
  }
  
  getCount()
  {
    return this.count;
  }

  onClickEventBindingBtn()
  {
    this.eventBinding="Event executed";
    this.eventBindingCount++;
  }
  setFool(userInp)
  {
    this.foolText=userInp;
  }
  getColor()
  {
    return this.foolText ? "blue" : "red";
  }
  toggleDirectivePractice()
  {
    if(this.isShowDirectivePractice)
    {
      this.directivePracticeBtnTxt="Show Directive Practice ";
      this.isShowDirectivePractice=false;
    }
    else
    {
      this.directivePracticeBtnTxt="Hide Directive Practice ";
      this.isShowDirectivePractice=true;
    }
  }
  }
