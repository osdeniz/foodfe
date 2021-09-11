import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FoodsComponent} from "./foods/foods.component";
import {FoodDetailComponent} from "./food-detail/food-detail.component";


const routes :Routes = [
  {
    path:'',
    data:
      {
        page:'list'
      },
    component:FoodsComponent
  },
  {
    path:':id',
    component:FoodDetailComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class FoodRoutingModule{

}
