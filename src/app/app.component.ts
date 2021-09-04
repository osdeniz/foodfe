import { Component } from '@angular/core';
import {CrossService} from "./services/cross-service";
import {FoodService} from "./food/food-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';

  constructor(private crossService:CrossService,private foodService:FoodService) {
  }

  ngOnInit(){
    setTimeout(()=>{
      this.searchFoods();
    },1)
  }



  searchFoods(){
    if(this.search.length > 0){
      this.foodService.search(this.search).subscribe((res)=>{
          this.crossService.setFoods(res);
      });
    }else {
      this.foodService.getFoods().subscribe(res=>{

        this.crossService.setFoods(res);
      })
    }
  }


}
