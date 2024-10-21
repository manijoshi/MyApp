import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'loginsignup',
        pathMatch:'full'
    },
    {
        path:'loginsignup',
        component:LoginSignupComponent,
    },
    {
        path:'user',
        component:UserComponent,
    },
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
