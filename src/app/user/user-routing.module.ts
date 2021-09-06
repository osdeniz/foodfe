import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {UserListComponent} from "./user-list/user-list.component";
import {RegisterComponent} from "./register/register.component";

const routes :Routes = [
  { path:'',component:UserListComponent },
  { path:'register',component:RegisterComponent },
  { path:'register/:id',component:RegisterComponent }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class UserRoutingModule{

}
