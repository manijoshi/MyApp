import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { RouterOutlet } from '@angular/router';
import { LoginSignupComponent } from "./login-signup/login-signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, LoginSignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
  users = DUMMY_USERS;
  selectedUserId ?: string;
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
  get selectedUser(){
    return this.users.find((user)=>user.id==this.selectedUserId);
  }
}
