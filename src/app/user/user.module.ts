import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {UserListComponent} from "./user-list/user-list.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user-routing.module";


@NgModule({
  declarations:[RegisterComponent,UserListComponent],
  imports:[CommonModule,ReactiveFormsModule,UserRoutingModule]
})
export class UserModule{

}
