import { Component } from '@angular/core';
import {CrossService} from "./services/cross-service";
import {FoodService} from "./food/food-service";
import {ActivationStart, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  status = false;

  constructor(private crossService:CrossService,private foodService:FoodService,private router:Router) {

    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
       if(event.url.indexOf('users') > -1){
            this.status = false;
       }else if(event.url.indexOf('foods')){
            this.status = true;
       }
      }

      if (event instanceof ActivationStart){
        if(event.snapshot.data.page == 'list'){
          this.searchFoods();
        }
      }
    })
  }

  ngOnInit(){

  }



  searchFoods(){
    if(this.search.length > 0){
      this.foodService.search(this.search).subscribe((res)=>{
          this.crossService.setFoods(res);
          this.router.navigate(['foods'])
      });
    }else {
      this.foodService.getFoods().subscribe(res=>{

        this.crossService.setFoods(res);
      })
    }
  }


}
