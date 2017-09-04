import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
  emailAddress: FormControl;
  password: FormControl;
  loginForm: FormGroup;
  loginData: any;
  loginFormData: any;


  constructor(private _authService: AuthService) {
    this.initForm();
   }
   initForm(){
    this.emailAddress = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3)]);
    
    this.loginForm = new FormGroup({
      email: this.emailAddress,
      password: this.password,

    });
   }
  ngOnInit() {
  }

  onSubmit(){
       if(this.loginForm.valid){
        this._authService.login(this.loginForm.value);
        console.log(this.loginForm.value);
        alert(this.loginForm.value.email)
    }
  }

}
