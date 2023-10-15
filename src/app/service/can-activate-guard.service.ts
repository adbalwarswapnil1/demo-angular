import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate{

  constructor(private loginservice:LoginService,private router:Router,private jwthelperservice: JwtHelperService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean
  {
    //console.log(this.router.url);
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;

    //console.log(this.jwtHelperService.decodeToken(token));
    console.log(route.data['expectedRole']);
    
    
      if (this.loginservice.isAuthenticated() && route.data['expectedRole'].includes(this.jwthelperservice.decodeToken(token).role))
      {
        return true; //the user can navigate to the particular route
      }
      else
      {
        this.router.navigate(["login"]);
        return false; //the user can't navigate to the particular route
      }
    

  }
}
