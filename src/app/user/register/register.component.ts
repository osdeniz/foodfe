import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../models/user-model";
import {UserService} from "../user-service";
import {catchError} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'app-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.scss']
})
export class RegisterComponent{


  form:FormGroup | undefined;

  loading = false;

  status = '';


  constructor(private fb:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(){
     const id = this.activatedRoute.snapshot.params["id"];
      if(id){
        this.userService.getUserInfoById(id).subscribe(res=>{
          this.registerForm(res);
        });
      }else{
        this.registerForm();
      }
  }

  registerForm(user:UserModel.User = {}){
    this.form = this.fb.group({
      id:[user.id?user.id:null],
      firstName:[user.firstName?user.firstName:null,[Validators.required]],
      lastName:[user.lastName?user.lastName:null,[Validators.required]],
      email:[user.email?user.email:null,[Validators.required]],
      role:[user.role?user.role:null],
      image:[user.image?user.image:null],
      password:[''],
    })
  }

  saveOrUpdate(){

    this.status = '';

    if(this.form?.valid){
      this.loading = true;
      let payload = {
        id:this.form.controls['id'].value,
        firstName:this.form.controls['firstName'].value,
        lastName :this.form.controls['lastName'].value,
        email:this.form.controls['email'].value,
        role:this.form.controls['role'].value,
        image:this.form.controls['image'].value,
        password:this.form.controls['password'].value
      }

      setTimeout(()=>{
        if(payload.id){
          this.userService.update(payload).pipe(catchError(err=>{
            this.loading = false;
            this.status = 'error'
            throw err;
          })).subscribe((res=>{
            this.loading = false;
            this.status = 'success'
          }));
        }else{
          this.userService.register(payload).pipe(catchError(err=>{
            this.loading = false;
            this.status = 'error'
            throw err;
          })).subscribe((res=>{
            this.loading = false;
            this.status = 'success'
          }));
        }

      },3000)






    }
  }

  /*dynamicRegister(){
    const keys =  Object.keys(this.form?.controls || {});
    const payload = keys.reduce((acc,value)=>{
      acc =  {...acc,...{[value]:this.form?.controls[value].value}};
      return acc;
    },{});
    return payload;
  }*/


}
