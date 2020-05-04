import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrernFeedbackComponent } from './intrern-feedback.component';

describe('IntrernFeedbackComponent', () => {
  let component: IntrernFeedbackComponent;
  let fixture: ComponentFixture<IntrernFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrernFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrernFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
