import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-intrern-feedback',
  templateUrl: './intrern-feedback.component.html',
  styleUrls: ['./intrern-feedback.component.scss']
})
export class IntrernFeedbackComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {}
  
  onSubmit(){

  }
  

}

