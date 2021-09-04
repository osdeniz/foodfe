import {Injectable,EventEmitter} from "@angular/core";
import {FoodModel} from "../food/models/food-model";
import FoodItem = FoodModel.FoodItem;



@Injectable({
  providedIn:'root'
})
export class CrossService{
  foodUpload = new EventEmitter<FoodItem[]>();

  setFoods(foods:FoodItem[]){
    this.foodUpload.emit(foods);
  }
}
