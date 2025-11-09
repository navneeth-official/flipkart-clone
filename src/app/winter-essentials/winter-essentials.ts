import { Component } from '@angular/core';
import { winter_essentials } from '../Data/winter-essentials';
import { DesignerFurniture } from '../designer-furniture/designer-furniture';
interface designer_furniture{
  thumbnail:string,
  title:string;
  discount:string;
}
@Component({
  selector: 'app-winter-essentials',
  imports: [],
  templateUrl: './winter-essentials.html',
  styleUrl: './winter-essentials.css',
})
export class WinterEssentials {
  cards!:designer_furniture[]

  constructor(){
    this.cards=winter_essentials
  }
}
