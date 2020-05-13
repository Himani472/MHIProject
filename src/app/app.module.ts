
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HrComponentComponent } from './hr-component/hr-component.component';
import { MentorComponentComponent } from './mentor-component/mentor-component.component';
import { InternComponentComponent } from './intern-component/intern-component.component';
import { DisplayComponent } from './display/display.component';
import { MentorAssignmentComponent } from './mentor-assignment/mentor-assignment.component';
import { MentorSubmittedComponent } from './mentor-submitted/mentor-submitted.component';
import { InternAssignmentComponent } from './intern-assignment/intern-assignment.component';
import { IntrernFeedbackComponent } from './intrern-feedback/intrern-feedback.component';
import { InternSubmitComponent } from './intern-submit/intern-submit.component';
import { HrFeedbackComponent } from './hr-feedback/hr-feedback.component';
import { HrpermissionComponent } from './hrpermission/hrpermission.component';
import { HrFeedbacksComponent } from './hr-feedbacks/hr-feedbacks.component';
import { ActiveGuard } from './active.guard';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HrComponentComponent,
    MentorComponentComponent,
    InternComponentComponent,
    DisplayComponent,
    MentorAssignmentComponent,
    MentorSubmittedComponent,
    InternAssignmentComponent,
    IntrernFeedbackComponent,
    InternSubmitComponent,
    HrFeedbackComponent,
    HrpermissionComponent,
    HrFeedbacksComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
  ],
  providers: [ActiveGuard,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
