import { Injectable } from '@angular/core';
import { Item } from '../Models/Items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
items:Item[]= [
  {
    id: 0,
    title: 'MacBook Prod',
    price: 11.9,
    quantity: 3,
    completed: true
  },
  {
    id: 1,
    title: 'Windows Home',
    price: 3.9,
    quantity: 6,
    completed: false
  }
];
;
  constructor() { }
addItem(item:Item)
{
  this.items.unshift(item);
}

  getItems() {
    
    return this.items;
  }
}
