import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {USER_DATA} from './data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
     
 });
  }


  checkUser(userData){
    USER_DATA.map((user)=> {
      console.log(user);
      console.log(userData);
      if(user.Email === userData.Email){
      
        if(user.password === userData.password){
          console.log(user);
       switch(userData.Designation){
        
           case 'Hr':
            this.router.navigateByUrl('Hr');
            break;

           case 'Intern':
            this.router.navigateByUrl('Intern');
             break;

           case 'Mentor':
            this.router.navigateByUrl('Mentor');
             break;
       }

        }
        // USER_DATA.push(username);
       
      }
    })
  }
  onSubmit(){
      const userData=this.registerForm.value;
      this.checkUser(userData);     
    
  }

}
