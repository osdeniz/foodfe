import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!localStorage.getItem('selectedUser')){
      this.router.navigate(['users'])
      return false;
    }else {
      return true;
    }
  }

}
