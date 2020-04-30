import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-mentor-component',
  templateUrl: './mentor-component.component.html',
  styleUrls: ['./mentor-component.component.scss']
})
export class MentorComponentComponent implements OnInit {
  registerForm: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }
  ngOnInit(): void {

    this.registerForm = new FormGroup({
      team: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      date: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Subject: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
     TaskDetails: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
 });
  }
onSubmit(){

}

}


