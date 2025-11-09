import { Component } from '@angular/core';
import { top_deals } from '../Data/top_deals';
interface top_deals{
  thumbnail:string;
  title:string;
  price:string
}
@Component({
  selector: 'app-top-deals',
  imports: [],
  templateUrl: './top-deals.html',
  styleUrl: './top-deals.css',
})
export class TopDeals {
cards!:top_deals[]
constructor(){
  this.cards=top_deals
}
}
