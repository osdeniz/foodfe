import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserGuard} from "./guards/user-guard";

const routes: Routes = [
  { path: '', redirectTo: '/foods', pathMatch: 'full' },
  {
    path:'foods',
    canActivate:[UserGuard],
    loadChildren:()=>import('./food/food.module').then(m=>m.FoodModule)
  },
  {
    path:'users',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
