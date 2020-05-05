import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { MentorComponentComponent } from './mentor-component/mentor-component.component';
import { HrComponentComponent } from './hr-component/hr-component.component';
import { InternComponentComponent } from './intern-component/intern-component.component';
import { DisplayComponent } from './display/display.component';
import { MentorAssignmentComponent } from './mentor-assignment/mentor-assignment.component';
import { MentorSubmittedComponent } from './mentor-submitted/mentor-submitted.component';
import { InternAssignmentComponent } from './intern-assignment/intern-assignment.component';
import { InternSubmitComponent } from './intern-submit/intern-submit.component';
import { IntrernFeedbackComponent } from './intrern-feedback/intrern-feedback.component';
import { HrpermissionComponent } from './hrpermission/hrpermission.component';
import { HrFeedbackComponent } from './hr-feedback/hr-feedback.component';

const routes: Routes = [
  { path:'',component:DisplayComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'signup',component:SignupComponentComponent},
    { path:'login',component:LogincomponentComponent}
  ]
},
  
  {path:'Mentor',component:MentorComponentComponent,
  children: [
    { path: '', redirectTo: 'MentorAsssignment', pathMatch: 'full' },
    { path:'MentorAsssignment',component:MentorAssignmentComponent},
    { path:'Mentorsubmitted',component:MentorSubmittedComponent}
  ]
},
  {path:'Hr',component:HrComponentComponent,
  children:[
    { path: '', redirectTo: 'hrpermission', pathMatch: 'full' },
    { path:'hrpermission',component:HrpermissionComponent},
    { path:'hrfeedback ',component:HrFeedbackComponent}
     
    
    
   ]


},
  {path:'Intern',component:InternComponentComponent,
       children:[
        { path: '', redirectTo: 'InternAssignment', pathMatch: 'full' },
        { path:'InternAssignment',component:InternAssignmentComponent},
        { path:'InternSubmit',component:InternSubmitComponent},
        { path:'Interfeedback',component:IntrernFeedbackComponent}
        
       ]
}  
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
  InternComponentComponent,
  MentorAssignmentComponent,
  MentorSubmittedComponent,
  InternAssignmentComponent,
  InternSubmitComponent,
  IntrernFeedbackComponent,
  HrpermissionComponent,
  HrFeedbackComponent
]