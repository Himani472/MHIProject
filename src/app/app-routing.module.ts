import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MentorComponentComponent } from './mentor-component/mentor-component.component';
import { HrComponentComponent } from './hr-component/hr-component.component';
import { InternComponentComponent } from './intern-component/intern-component.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path:'',component:DisplayComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'signup',component:SignupComponentComponent},
    { path:'login',component:LogincomponentComponent}
  ]
},
  
  {path:'Mentor',component:MentorComponentComponent},
  {path:'Hr',component:HrComponentComponent},
  {path:'Intern',component:InternComponentComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const routingComponents=[
  SignupComponentComponent,
  LogincomponentComponent,
  MentorComponentComponent,
  HrComponentComponent,
  InternComponentComponent]