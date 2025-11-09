import { Component } from '@angular/core';
import { top_deals } from '../Data/top_deals';
import { funiture_deals } from '../Data/furniture-deals';
interface top_deals{
  thumbnail:string;
  title:string;
  price:string
}
@Component({
  selector: 'app-furniture-deals',
  imports: [],
  templateUrl: './furniture-deals.html',
  styleUrl: './furniture-deals.css',
})
export class FurnitureDeals {
cards!:top_deals[]

constructor(){
  this.cards=funiture_deals
}
}
