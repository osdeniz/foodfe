import {Component} from "@angular/core";
import {UserService} from "../user-service";
import {UserModel} from "../models/user-model";

@Component({
  selector:'app-user-list',
  templateUrl:'./user-list.component.html',
  styleUrls:['./user-list.component.scss']
})
export class UserListComponent {

  users :UserModel.User[] = [];

  constructor(private userService:UserService) {
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(res=>{

      this.users = res;
    })
  }
}
