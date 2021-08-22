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


  foodItem:FoodModel.FoodResponse | undefined;

  constructor(private foodService:FoodService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(){
   const params = this.activatedRoute.snapshot.params;
   const foodId = params.id;
   this.foodItem = this.foodService.getFoods().find(item=>item.id == foodId);

  }

}
