import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  foolText: boolean =false;
  directivePracticeBtnTxt: String = "Show Directive Practice";
  isShowDirectivePractice: boolean = false;
  animals = ["hen","sheep"];

  constructor(private serverService : ServerService) { }

  ngOnInit() {
    this.serverService.currentMessage.subscribe(message => this.foolText = message)
  }

  setFool(userInp)
  {
    this.foolText=userInp;
    this.serverService.changeMessage(userInp);
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
