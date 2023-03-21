import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import '@material/textfield';
import  '@material/ripple';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageFromChild: string = 'dhfhdfh';

  parentWillTakeAction(message:any){
    this.messageFromChild = message;
  }
  title = 'First-App';
  constructor( private router:Router){}
  firstNameAutofilled:any;
  lastNameAutofilled: any;
  data:string ="jhfvhsv";

  Savefunction(){
    console.log('hello world');
    this.router.navigate(['/dashboard']);
  }
  handleData(e:any){
   this.data=e.target.value;
  }
  toDashboard(){
    this.router.navigate(['/dashboard']);
  }
  toHome(){
    this.router.navigate(['/home']);
  }
}


  

