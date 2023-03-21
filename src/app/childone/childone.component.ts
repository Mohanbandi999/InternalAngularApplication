import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit,OnChanges {

  @Input() parentdata:any;
  @Output() messagetoparent = new EventEmitter();

  constructor( public bookservice: BooksService) { }

  ngOnInit(): void {1
    console.log("oninitchild")
  }
  ngOnChanges(changes:SimpleChanges){
    if (changes['parentdata']) {
    const currentValue = changes['parentdata'].currentValue;
    const previousValue = changes['parentdata'].previousValue;
    console.log('Current value:', currentValue);
    console.log('Previous value:', previousValue);
    
    }
    console.log("onchanges child", changes)
  }
  takeAction(){
    this.messagetoparent.emit('The child triggered an event');
  }
  Increase(){
    this.bookservice.incCounter();
  }
  Decrease(){
    this.bookservice.decCounter();
  }

}
