import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public counter:number=0;

  public incCounter(){
    this.counter++;
  }

  public decCounter(){
    this.counter--;
  }
}
