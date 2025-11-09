import { Component } from '@angular/core';
import { fashions_top_deals } from '../Data/fashions-top-deals';
interface fashion_top_deals{
  thumbnail:string;
  title:string;
  discount:string;
}
@Component({
  selector: 'app-fashion-top-deals',
  imports: [],
  templateUrl: './fashion-top-deals.html',
  styleUrl: './fashion-top-deals.css',
})
export class FashionTopDeals {
cards!:fashion_top_deals[];
constructor(){
  this.cards=fashions_top_deals
}
}
