import {Component} from "@angular/core";
import {UserService} from "../user-service";
import {UserModel} from "../models/user-model";
import {Router} from "@angular/router";

@Component({
  selector:'app-user-list',
  templateUrl:'./user-list.component.html',
  styleUrls:['./user-list.component.scss']
})
export class UserListComponent {

  users :UserModel.User[] = [];

  constructor(private userService:UserService,private router:Router) {
  }

  selectedUser(user:UserModel.User){
    localStorage.setItem('selectedUser',JSON.stringify(user))
    this.router.navigate(['foods'])
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(res=>{

      this.users = res;
    })
  }
}
