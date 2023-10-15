import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  signUpForm!:FormGroup;
  submitted:boolean=false;

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      firstName:new FormControl(null,[Validators.required,Validators.minLength(2)]),
      lastName:new FormControl(null),
      email:new FormControl(null),
      mobile:new FormControl(null),
      dateOfBirth:new FormControl(null),
      gender:new FormControl(null)
    });

    this.signUpForm.valueChanges.subscribe((data:any)=>{
      console.log(data)
    })
  }

  onSubmitClick(){
    console.log(this.signUpForm.value)
    this.submitted=true;
    
  }

}
