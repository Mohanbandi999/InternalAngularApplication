import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


   //promisee
    const promise =new Promise(resolve =>resolve('promize working'))

    promise.then(result=>console.log(result));


    //obsevable

    const obser = new Observable(obse =>{obse.next('obser next');obse.next('obser next1')});

    obser.subscribe(result=>console.log(result));

  

}}
