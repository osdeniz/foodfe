import {NgModule} from "@angular/core";
import {FoodsComponent} from "./foods/foods.component";
import {CommonModule} from "@angular/common";
import {FoodRoutingModule} from "./food-routing.module";
import {FoodDetailComponent} from "./food-detail/food-detail.component";

@NgModule({
  declarations:[FoodsComponent,FoodDetailComponent],
  imports:[CommonModule,FoodRoutingModule]
})
export class FoodModule{
}
