import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoadServers(id:number){
   // this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
}

onLogIn()
{
// this.authService.login();
}

onLogOut(){
 //this.authService.logout();
}
}
