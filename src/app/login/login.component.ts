import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {HttpClient,HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, public httpclient:HttpClient){}
  firstNameAutofilled:any;
  lastNameAutofilled: any;
  sbnewusers:any;
  fullname: any;
  password: any;
  
  

  ngOnInit(): void {
    
  }

  getUsers(){
    //let params1 = new HttpParams().set("fullname", "MviTAO6t_ziZC8UxfbJ");
   var users=this.httpclient.get<any>("https://sbuserfirebase-default-rtdb.firebaseio.com/users.json/").subscribe(
     data=>{this.sbnewusers=data}
   );

   
   
   
    this.router.navigate(['/dashboard']);
  }



}
