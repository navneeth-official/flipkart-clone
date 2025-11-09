import { Component } from '@angular/core';
import { winter_essentials } from '../Data/winter-essentials';
import { designer_furniture_1 } from '../Data/designer_furniture_1';

interface designer_furniture{
  thumbnail:string,
  title:string;
  discount:string;
}
@Component({
  selector: 'app-designer-furniture',
  imports: [],
  templateUrl: './designer-furniture.html',
  styleUrl: './designer-furniture.css',
})
export class DesignerFurniture {
  cards!:designer_furniture[]

  constructor(){
    this.cards=designer_furniture_1
  }
}
