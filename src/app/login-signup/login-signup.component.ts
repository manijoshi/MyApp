import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent,RouterOutlet],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  constructor(private router: Router,private _snackBar:MatSnackBar){
  
  }
  activeForm:'login'|'register'='register';
  registerObj:RegisterModel = new RegisterModel();
  loginObj : LoginModel = new LoginModel();
  registerForm() {
    debugger;
    const localUsers = localStorage.getItem('users');
    if(localUsers!=null){
      const users = JSON.parse(localUsers);
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
    }
    else{
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
    }
    this._snackBar.open("User registered successfully",'Close',{duration: 1000});
    // this.router.navigateByUrl('/login');
    this.activeForm="login";
  }
  loginForm() {
    debugger;
    const localUsers = localStorage.getItem('users');
    if(localUsers!=null){
      const users = JSON.parse(localUsers);
      const isUserExists = users.find((user:RegisterModel)=>user.email===this.loginObj.email && user.password===this.loginObj.password);
      if(isUserExists!=undefined){
        this._snackBar.open("User logged in successfully",'Close',{duration: 1000});
        localStorage.setItem('loggedUser',JSON.stringify(isUserExists));
        this.activeForm = "login";
      }
      else{
        this._snackBar.open('Email or password is incorrect','',{duration: 1000});
      }
    }
  }
  toggleForm(form:'login'|'register'){
    this.activeForm = form;
  }
}
export class RegisterModel{
  name:string;
  email:string;
  password:string;
  constructor() {
    this.name = "",
    this.email="",
    this.password=""    
  }
}
export class LoginModel{
  email:string;
  password:string;
  constructor() {
    this.email="",
    this.password=""    
  }
}
