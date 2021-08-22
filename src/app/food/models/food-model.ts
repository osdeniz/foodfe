export namespace FoodModel{

  export interface FoodDto{

  }

  export interface FoodResponse{
    id:number;
    title:string
    description:string
    createDate?:Date;
    foodDeails?:string
  }

}
