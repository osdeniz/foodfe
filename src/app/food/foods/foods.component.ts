import {Component, OnDestroy, OnInit} from "@angular/core";
import {FoodService} from "../food-service";
import {FoodModel} from "../models/food-model";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'app-foods',
  templateUrl:'./foods.component.html',
  styleUrls:['./foods.component.scss']
})
export class FoodsComponent implements OnDestroy{

    title = 'Food List'

    foods : FoodModel.FoodItem[] = [];

    selectedFood: FoodModel.FoodItem | undefined;

    private sub:any;

    form:FormGroup | undefined;



    constructor(private foodService:FoodService,private router:Router,private fb:FormBuilder) {
    }

    ngOnInit(){
      this.sub = this.foodService.getFoods().subscribe(foods=>{
        this.foods = foods;
      })

    }

    openDetail(id:number){
     this.router.navigate(['foods/'+id]);
    }

    edit(food:FoodModel.FoodItem){
        this.selectedFood = food;
        this.form = this.fb.group({
          id:[food.id],
          title:[food.title,[Validators.required]],
          description:[food.description],
          list:[food.foodDeails,[Validators.required]]
        })

    }

    createOrUpdate(){

      if(this.form?.valid){
        let payload = {
          id:this.form?.controls['id'].value,
          title:this.form?.controls['title'].value,
          description:this.form?.controls['description'].value,
          foodDetails:this.form?.controls['list'].value
        }

        this.foodService.updateFood(payload).subscribe(food=>{
          console.warn(food)
        });

      }else{
        //todo hata mesajı
      }



    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();

    }



}
