import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserModel} from "./models/user-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class UserService{

  constructor(private httpClient:HttpClient) {
  }

  getUsers():Observable<UserModel.User[]>{
    return this.httpClient.get<UserModel.User[]>(environment.api + '/auth/users')
  }

}
