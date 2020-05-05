import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrFeedbackComponent } from './hr-feedback.component';

describe('HrFeedbackComponent', () => {
  let component: HrFeedbackComponent;
  let fixture: ComponentFixture<HrFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
