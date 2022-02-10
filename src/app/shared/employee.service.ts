import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form:FormGroup=new FormGroup({
    $key:new FormControl('null'),
    fullname: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email:new FormControl(''),
    mobile:new FormControl('',Validators.required),
    
  });
}
