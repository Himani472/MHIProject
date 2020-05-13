import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFeedbacksComponent } from './hr-feedbacks.component';

describe('HrFeedbacksComponent', () => {
  let component: HrFeedbacksComponent;
  let fixture: ComponentFixture<HrFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
