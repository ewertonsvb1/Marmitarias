import { Component } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  foodList: Food[] = [
    new Food('Carne',1),
    new Food('Arroz',2),
    new Food('Torresmo',2),
  ];

  constructor(){}

  ngOninit():void{

  }

}
