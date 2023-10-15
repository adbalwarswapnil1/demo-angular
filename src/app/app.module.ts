import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtInterceptorsService } from './service/jwt-interceptors.service';
import { JwtUnAuthorisedInterceptorService } from './service/jwt-un-authorised-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ProjectsComponent,
    LoginComponent,
    SignUpComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>
        {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null)
        }
      }
    }),
    ReactiveFormsModule
  ],
  providers: [
   { 
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorsService,
    multi:true
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtUnAuthorisedInterceptorService,
    multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
