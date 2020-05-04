import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-intern-assignment',
  templateUrl: './intern-assignment.component.html',
  styleUrls: ['./intern-assignment.component.scss']
})
export class InternAssignmentComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
  

}
