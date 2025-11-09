import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { NavCards } from '../nav-cards/nav-cards';
import { SlidingImage } from '../sliding-image/sliding-image';
import { TopDeals } from '../top-deals/top-deals';
import { DesignerFurniture } from '../designer-furniture/designer-furniture';
import { WinterEssentials } from '../winter-essentials/winter-essentials';
import { FashionTopDeals } from '../fashion-top-deals/fashion-top-deals';
import { FurnitureDeals } from '../furniture-deals/furniture-deals';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,NavCards,SlidingImage,TopDeals,DesignerFurniture,WinterEssentials,FashionTopDeals,FurnitureDeals],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
