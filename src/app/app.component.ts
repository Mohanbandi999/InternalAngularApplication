import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {TextFieldModule} from '@angular/cdk/text-field';
import '@material/textfield';
import  '@material/ripple';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-App';
  constructor( private router:Router){}
  firstNameAutofilled:any;
  lastNameAutofilled: any;

  Savefunction(){
    console.log('hello world');
    this.router.navigate(['/login']);
  }
  Newuser(){
    this.router.navigate(['/employee']);
  }
  
}


  

