import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthServiceService}from './auth-service.service'
@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
constructor(private authServiceService:AuthServiceService,private router:Router){


}
canActivate(){
  if(this.authServiceService.islogIn()){
    return true;
  }
  this.router.navigate(['/login']);
   return false;
}
 


}
