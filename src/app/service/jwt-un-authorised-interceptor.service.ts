import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorisedInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event:HttpEvent<any>)=>{
      if(event instanceof HttpResponse){

      }
    },
    (error:any)=>{
      if(error instanceof HttpErrorResponse){
        if(error.status==401){
          console.log(error);
          alert("401 unauthorised");
        }
      }
    }))
  }
  
}
