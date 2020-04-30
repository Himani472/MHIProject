import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSubmittedComponent } from './mentor-submitted.component';

describe('MentorSubmittedComponent', () => {
  let component: MentorSubmittedComponent;
  let fixture: ComponentFixture<MentorSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
