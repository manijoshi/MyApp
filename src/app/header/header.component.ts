import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { LoginSignupComponent } from "../login-signup/login-signup.component";

@Component({
    selector : 'app-header',
    standalone:true,
    imports : [RouterOutlet,LoginSignupComponent],
    templateUrl : './header.component.html',
    styleUrl:'./header.component.css'
})

export class HeaderComponent{
    loggedUser:any;
  constructor(private _router:Router){
    const localUser = localStorage.getItem('loggedUser');
    if(localUser!=null){
      this.loggedUser = JSON.parse(localUser);
    }
  }
  onLogOut() {
    localStorage.removeItem('loggedUser');
    this._router.navigateByUrl('loginsignup');
  }
}