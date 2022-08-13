import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {


  todayDate:Date = new Date();
  public loginForm:FormGroup;
  Acc_no='';

  constructor(private http:HttpClient , private router:Router, private fb:FormBuilder)
   {
    this.loginForm=this.fb.group
    ({
      Acc_no:''
    })
   }
  
  myFilter = (d: Date | null): boolean =>
  {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };
  sendAccNo()
  {

  }

  welcome()
  {
  this.router.navigate(['/receiver']);
  }
  keyPressNumbers(event:any)
  {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57))
  {
    event.preventDefault();
    return false;
  } 
  else
  {
    return true;
  }
}

  keyPressChars(event:any)
  {
  var regex = new RegExp("^[a-zA-Z]+$");
  var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (regex.test(str)) 
  {
      return true;
  }
  else{
    return false;
  }
  }

ngOnInit(){
  this.fetchSenderData();
}

private fetchSenderData() {
  this.http.get('http://localhost:1234/senderData')
  .subscribe((res) => {
  console.log(res);
  })
}

}

