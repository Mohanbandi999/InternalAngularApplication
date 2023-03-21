import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public bookservice :BooksService) { }

  ngOnInit(): void {
  }

  Increase(){
    this.bookservice.incCounter();
  }
  Decrease(){
    this.bookservice.decCounter();
  }

}
