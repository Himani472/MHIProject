import { Component, OnInit ,ViewChild,HostListener} from '@angular/core';
 
@Component({
  selector: 'app-mentor-submitted',
  templateUrl: './mentor-submitted.component.html',
  styleUrls: ['./mentor-submitted.component.scss']
})
export class MentorSubmittedComponent implements OnInit {

  elements: any = [
    {id: 1, StudentNAme: 'Himani', Dateofsubmition: '1/09/2020', Task: 'Angular'},
    {id: 2, StudentNAme: 'Jacob', Dateofsubmition: '23/09/2020', Task: 'Angularjs'},
    
  {id: 2, StudentNAme: 'Jacob', Dateofsubmition: '23/09/2020', Task: 'Angularjs'},
    {id: 4, StudentNAme: 'Larry', Dateofsubmition: '3/04/2020', Task: 'Node'},
  ];

  headElements = ['ID', 'StudentNAme', 'Dateofsubmition', 'Task'];
  ngOnInit(): void {
    
  }

}
