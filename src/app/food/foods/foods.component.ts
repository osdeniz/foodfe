import {Component, OnInit} from "@angular/core";
import {FoodService} from "../food-service";
import {FoodModel} from "../models/food-model";
import {Route, Router} from "@angular/router";

@Component({
  selector:'app-foods',
  templateUrl:'./foods.component.html',
  styleUrls:['./foods.component.scss']
})
export class FoodsComponent{

  title = 'Food List'

  foods : FoodModel.FoodResponse[] = [];


  constructor(private foodService:FoodService,private router:Router) {
  }


  ngOnInit(){
   this.foods = this.foodService.getFoods();
  }

  openDetail(id:number){
    this.router.navigate(['foods/'+id]);
  }

}
