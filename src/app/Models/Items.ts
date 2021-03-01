import { callbackify } from "util";

export class Item{
    id: number = 0;
    title: string = '';
    price: number = 0;
    completed: boolean=false;
    quantity: number = 0;
}