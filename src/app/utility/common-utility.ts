export class CommonUtility {
  private static instance:CommonUtility;

  public static getInstance():CommonUtility{
    if(!CommonUtility.instance){
      CommonUtility.instance = new CommonUtility();
    }
    return CommonUtility.instance;
  }

  getSelectedUserId = (jsonString:string) =>{
    if(jsonString.length>0){
      return JSON.parse(jsonString).id;
    }
    return null;
  }
}
