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

  register(payload:UserModel.User):Observable<UserModel.User>{
    return this.httpClient.post<UserModel.User>(environment.api + '/auth/register',payload)
  }

  update(payload:UserModel.User):Observable<UserModel.User>{
    return this.httpClient.put<UserModel.User>(environment.api + '/auth/update',payload)
  }

  getUserInfoById(id:number):Observable<UserModel.User>{
    return this.httpClient.get<UserModel.User>(environment.api + '/auth/' + id)
  }

}
