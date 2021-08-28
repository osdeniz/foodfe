import {Component} from "@angular/core";
import {FoodService} from "../food-service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FoodModel} from "../models/food-model";


@Component({
  selector:'app-food-detail',
  templateUrl:'./food-detail.component.html',
  styleUrls:['./food-detail.component.scss']
})
export class FoodDetailComponent{
  title = 'Food Detail'


  foodItem:FoodModel.FoodItem | undefined;

  constructor(private foodService:FoodService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(){
   const params = this.activatedRoute.snapshot.params;
   const foodId = params.id;

   this.foodService.getFoodDetail(foodId).subscribe(food=>{
     this.foodItem = food
   });

  }

}
