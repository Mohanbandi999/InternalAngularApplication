import { Component } from '@angular/core';

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

  Savefunction(){
    console.log('hello world');
    this.router.navigate(['/Dashboard']);
  }
  
}


  

