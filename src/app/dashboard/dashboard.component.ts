import { Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Suresh', weight: "Suresh@gmail.com", symbol: 'VMone'},
  {position: 2, name: 'Satish', weight: "Satish@gmail.com", symbol: 'VMtwo'},
  {position: 3, name: 'Mohan', weight: "Mohan@gmail.com", symbol: 'VMthree'},
  {position: 4, name: 'John', weight: "John@gmail.com", symbol: 'VMfour'},
  {position: 5, name: 'Boron', weight: "Boron@gmail.com", symbol: 'VMfive'},
  {position: 6, name: 'Carbon', weight: "Carbon@gmail.com", symbol: 'VMsix'},
  {position: 7, name: 'Nitrogen', weight: "Nitrogen@gmail.com", symbol: 'VMseven'},
  {position: 8, name: 'Oxygen', weight: "Oxygen@gmail.com", symbol: 'VMeight'},
  {position: 9, name: 'Fluorine', weight: "Fluorine@gmail.com", symbol: 'VMnine'},
  {position: 10, name: 'Neon', weight: "Neon@gmail.com", symbol: 'VMten'},
];




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    
  }

  removeData() {
    this.dataSource.pop();
    
  }
}


