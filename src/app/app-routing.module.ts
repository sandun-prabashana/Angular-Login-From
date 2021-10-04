import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponentComponent } from './login-page-component/login-page-component.component';
import { SignInPageComponent } from './login-page-component/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './login-page-component/sign-up-page/sign-up-page.component';
const routes: Routes = [
  {path:'',component:LoginPageComponentComponent,children:[
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path:'signin',component:SignInPageComponent},
    {path:'signup',component:SignUpPageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
