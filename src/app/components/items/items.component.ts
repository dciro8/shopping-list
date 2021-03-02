import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];
  total: number =0;
  constructor() { }

  ngOnInit(): void {

    this.items=[
      {
        id:0,
        title: 'MacBook Prod',
        price:11.9,
        quantity:3,
        completed:true
      },
      {
        id:1,
        title: 'Windows Home',
        price:3.9,
        quantity:6,
        completed:false
      }
    ];
    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }
  toggleItem(item:Item){
    this.getTotal();
  }
  
  getTotal(){

    this.total=this.items.filter(x => !x.completed)
    .map(x=> x.quantity * x.price)
    .reduce((acc, x) => acc += x, 0);
  }
}
