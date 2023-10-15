import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from '../model classes/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Signupviewmodel } from '../model classes/signupviewmodel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  
  constructor(private httpclient: HttpClient,private jwthelperservice:JwtHelperService) { 

  }
  currentUserName:string="";

  public Login(login:Login):Observable<any>{
   // this.httpclient = new HttpClient(this.httpBackend);
    return this.httpclient.post<any>('http://localhost:9090/authenticate',login).pipe(map(user=>{
      if(user){
        this.currentUserName=user.UserName;
        sessionStorage['currentUser']=JSON.stringify(user);
      }
      return user;
    }))
  }

  public Logout(){
    sessionStorage.removeItem("currentUser");
    this.currentUserName="";
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null;
    if (this.jwthelperservice.isTokenExpired())
    {
      return false; //token is not valid
    }
    else
    {
      return true; //token is valid
    }
  }

  public Register(Signupviewmodel:Signupviewmodel):Observable<any>{
    return this.httpclient.post<any>("",Signupviewmodel).pipe(map(response=>{
      if(response){
        this.currentUserName=response.body.UserName;
        sessionStorage['currentUser']=JSON.stringify(response.body)
      }
    }))
  }
}
