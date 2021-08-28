import {Injectable} from "@angular/core";
import {FoodModel} from "./models/food-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class FoodService{

  constructor(private httpClient:HttpClient) {

  }


  getFoods():Observable<FoodModel.FoodItem[]>{
    return this.httpClient.get<FoodModel.FoodItem[]>(environment.api + '/food/alllist')
  }

  getFoodDetail(id:number):Observable<FoodModel.FoodItem>{
    return this.httpClient.get<FoodModel.FoodItem>(environment.api + '/food/' + id)
  }

  updateFood(body:any):Observable<FoodModel.FoodItem>{
    return this.httpClient.post<FoodModel.FoodItem>(environment.api + '/food/createOrUpdate',body)
  }


  message() : string{
    return 'benden selam olsun!'
  }



}