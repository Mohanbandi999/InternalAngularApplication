import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import {HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public message = "Sumitted";
  constructor(public service:EmployeeService,  public httpclient:HttpClient) { }

  ngOnInit(): void {

  }

  Onclear(){
    this.service.form.reset();
  }
  Submitbutton(){
    console.log('hello Submit');
    console.log(this.service.form.value)
    this.httpclient.post("https://sbuserfirebase-default-rtdb.firebaseio.com/users.json", this.service.form.value).subscribe(response=>console.log(response))
    alert(this.message);
  }

}
