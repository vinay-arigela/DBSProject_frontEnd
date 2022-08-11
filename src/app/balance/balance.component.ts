import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor() { }
onPressNumbers(event:any){
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}
  ngOnInit(): void {
  }

}
