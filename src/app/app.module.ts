
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



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HrComponentComponent,
    MentorComponentComponent,
    InternComponentComponent,
    DisplayComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
