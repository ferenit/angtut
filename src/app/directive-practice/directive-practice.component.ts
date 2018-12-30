import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
egArray =[];

  constructor() { }

  ngOnInit() {
  }
  pushTimeToEgArray()
  {
    this.egArray.push(new Date());
  }

  initEgArray()
  {
    this.egArray=[];
  }

}
