import {UserModel} from "../../user/models/user-model";
import {ImageModel} from "../../models/image-model";

export namespace FoodModel{

  export interface FoodDto{

  }

  export interface FoodItem{
    id:number;
    title:string
    description:string
    createDate?:Date;
    foodDeails?:string
    user?:UserModel.User,
    image:ImageModel.Image
  }

}
