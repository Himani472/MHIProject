import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {USER_DATA} from './data';
import { Router } from '@angular/router';
import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  registerForm: FormGroup;
 

  constructor(private router: Router,
  
    ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
      
 });

  }


  checkUser(userData){
    const userInfo=USER_DATA.filter(user=>user.Email===userData.email&&user.password===userData.password);
    
   for(let user of  userInfo )
    {
      console.log( user)
      localStorage.setItem('user',JSON.stringify (user)) 
       switch(user.Designation){
        
           case 'Hr':
            this.router.navigateByUrl('Hr');
            break;

           case 'Intern':
             console.log('intren')
            this.router.navigate(['/Intern']);
             break;

           case 'Mentor':
            this.router.navigateByUrl('Mentor');
             break;
           default :
           break;  
       }

        }
       
   
  }
  onSubmit(){
      const userData=this.registerForm.value;
      this.checkUser(userData);     
    
  }

}
