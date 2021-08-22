import {Injectable} from "@angular/core";
import {FoodModel} from "./models/food-model";
import FoodResponse = FoodModel.FoodResponse;

@Injectable({
  providedIn:'root'
})
export class FoodService{


  message() : string{
    return 'benden selam olsun!'
  }

  getFoods():FoodResponse[]{
   return [{
     id:1,
     title:'food_1',
     description:'food_1_desc',
   },{
     id:2,
     title:'food_2',
     description:'food_2_desc',
   },{
     id:3,
     title:'food_3',
     description:'food_3_desc',
   },{
     id:4,
     title:'food_4',
     description:'food_4_desc',
   },{
     id:5,
     title:'food_5',
     description:'food_5_desc',
   }]

  }

}
