import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];
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
        completed:true
      }
    ];
  }

}
