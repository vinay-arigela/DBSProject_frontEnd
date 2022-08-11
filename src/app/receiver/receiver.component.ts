import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
 receiverForm:FormGroup=new FormGroup({

});
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  keyPressChars(event:any){

  }
goNext(){
  this.router.navigate(['/transfer']);
}
}
