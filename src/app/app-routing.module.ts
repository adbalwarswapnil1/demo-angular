import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { CanActivateGuardService } from './service/can-activate-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '',redirectTo: "login", pathMatch: "full"},
  {path:'login',component: LoginComponent},
  {path:'signup', component: SignUpComponent},
  {path:'about', component: AboutComponent},

  {
    path:'employee',canActivate:[CanActivateGuardService],
    data:{expectedRole:"Employee"}, children:[
    ]
  },
  
  {
    path:'admin',canActivate:[CanActivateGuardService],
    data:{expectedRole:"Admin"}, children:[
      {path: 'dashboard', component: DashboardComponent},
      {path:'projects',component: ProjectsComponent},
      {path:'projectdetails/:projectid', component: ProjectDetailsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
