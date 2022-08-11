import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  ngOnInit(): void {
  }

}
