import {Injectable} from "@angular/core";
import {FoodModel} from "./models/food-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {CommonUtility} from "../utility/common-utility";

@Injectable({
  providedIn:'root'
})
export class FoodService{

  constructor(private httpClient:HttpClient) {

  }


  getFoods():Observable<FoodModel.FoodItem[]>{

    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<FoodModel.FoodItem[]>(environment.api + '/food/alllist?userId=' + userId)
  }

  getFoodDetail(id:number):Observable<FoodModel.FoodItem>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<FoodModel.FoodItem>(environment.api + '/food/' + id + '?userId=' + userId)
  }

  updateFood(body:any):Observable<FoodModel.FoodItem>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.post<FoodModel.FoodItem>(environment.api + '/food/createOrUpdate?userId=' + userId,body)
  }

  delete(id:number){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)

    return this.httpClient.delete(environment.api + '/food/' + id + '?userId=' + userId, { headers, responseType: 'text'});
  }

  search(search:string):Observable<FoodModel.FoodItem[]>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<FoodModel.FoodItem[]>(environment.api + '/food/search/' + search + '?userId=' + userId)
  }


  newCreateOrUpdate(body:any){
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.post<FoodModel.FoodItem>(environment.api + '/food/newCreateOrUpdate?userId=' + userId,body)
  }




}
