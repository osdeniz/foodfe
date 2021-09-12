import {Component, OnDestroy, OnInit} from "@angular/core";
import {FoodService} from "../food-service";
import {FoodModel} from "../models/food-model";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {CrossService} from "../../services/cross-service";
import {UserModel} from "../../user/models/user-model";

@Component({
  selector:'app-foods',
  templateUrl:'./foods.component.html',
  styleUrls:['./foods.component.scss']
})
export class FoodsComponent implements OnDestroy{

    title = 'Food List'

    foods : FoodModel.FoodItem[] = [];

    selectedFood: FoodModel.FoodItem | undefined;



    private subCrross:any;

    form:FormGroup | undefined;

    operationStatus = false;

    deleteOperationMessage:any;

    createOrUpdateMessage:any;

    selectedFile :File | undefined;





    constructor(private foodService:FoodService,private router:Router,private fb:FormBuilder,private crossService:CrossService) {


    }

    ngOnInit(){
      this.subCrross = this.crossService.foodUpload.subscribe(foods=>{
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

    create(){
      this.form = this.fb.group({
        id:[null],
        title:['',[Validators.required]],
        description:[''],
        list:['',[Validators.required]]
      })
    }

    /*createOrUpdate(){
     if(this.form?.valid){
        let payload = {
          id:this.form?.controls['id'].value,
          title:this.form?.controls['title'].value,
          description:this.form?.controls['description'].value,
          foodDetails:this.form?.controls['list'].value
        }
        this.operationStatus = true;
        setTimeout(()=>{
          this.foodService.updateFood(payload).pipe(catchError(err => {
            this.operationStatus = false;
            this.createOrUpdateMessage = 'Sistemde bir hata oluştu.'

            setTimeout(()=>{
              this.createOrUpdateMessage = ''
            },4000)
            throw  err;
          })).subscribe(food=>{
            this.operationStatus = false;
            this.createOrUpdateMessage = 'İşlem başarılı.'
            setTimeout(()=>{
              this.createOrUpdateMessage = ''
            },4000)
            if(payload.id == null){
              this.form?.reset();
            }
          });
        },1000)

      }
    }*/

    deleteModal(food:FoodModel.FoodItem){
        this.selectedFood = food;
    }

    delete(){
        const id = this.selectedFood?.id || -1;
        this.operationStatus = true;
        setTimeout(()=>{
          this.foodService.delete(id).pipe(catchError(err=>{
            this.operationStatus = false;

            throw err;
          })).subscribe((res)=>{
            this.operationStatus = false;
            this.deleteOperationMessage = res;

            setTimeout(()=>{
              this.deleteOperationMessage = ""
            },4000)


          })
        },1000)
    }

    onFileChanged(event:any){
        this.selectedFile = event.target.files[0];
    }

    newSubmit(){

      const formData = new FormData();

      if(this.form?.valid){
        this.operationStatus = true;
        let payload = {
          id:this.form?.controls['id'].value,
          title:this.form?.controls['title'].value,
          description:this.form?.controls['description'].value,
          foodDetails:this.form?.controls['list'].value
        }

        const jsonStringPayload = JSON.stringify(payload);

        if(this.selectedFile){
          formData.append('imageFile',this.selectedFile)
          formData.append('payload',jsonStringPayload);
          this.foodService.newCreateOrUpdate(formData).pipe(catchError(err=>{
            this.operationStatus = false;
            throw err;
          })).subscribe(res=>{
            this.operationStatus = false;
            this.createOrUpdateMessage = 'İşlem başarılı.'
            setTimeout(()=>{
              this.createOrUpdateMessage = ''
            },4000)
            if(payload.id == null){
              this.form?.reset();
            }
          });
        }else{
          setTimeout(()=>{
            this.foodService.updateFood(payload).pipe(catchError(err => {
              this.operationStatus = false;
              this.createOrUpdateMessage = 'Sistemde bir hata oluştu.'

              setTimeout(()=>{
                this.createOrUpdateMessage = ''
              },4000)
              throw  err;
            })).subscribe(food=>{
              this.operationStatus = false;
              this.createOrUpdateMessage = 'İşlem başarılı.'
              setTimeout(()=>{
                this.createOrUpdateMessage = ''
              },4000)
              if(payload.id == null){
                this.form?.reset();
              }
            });
          },1000)
        }







      }


    }


    ngOnDestroy(): void {
      this.subCrross.unsubscribe();
    }



}
