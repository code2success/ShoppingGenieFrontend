import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  message :string = "";
  
  constructor(private fb : FormBuilder, private loginService : LoginService, private router : Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.login = this.fb.group({
      username: '',
      password: ''
    });
  }
  loginPressed(){
    console.log("Login button is pressed");
    console.log(this.login.get("username").value);
    console.log(this.login.get("password").value);
    let loggedin =  this.loginService.login(this.login.get("username").value,this.login.get("password").value);
    if(loggedin == true){
      this.message = "logged in ";
      this.router.navigateByUrl('/shopping');

    }else
    {
      this.message = "wrong username or password";
    }
  }
  cancelPressed(){
    this.message = "";
    this.login.get("username").setValue("");
    this.login.get("password").setValue("");
  }
  }


