import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model classes/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  loginError:string="";

  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }



  onLoginClick(event:any){
    this.loginservice.Login(this.login).subscribe((data)=>{
      this.router.navigate(["admin/dashboard"]);
    },(error)=>{
      console.log(error)
      this.loginError="Invalid Username/Password";
    })
  }

}
