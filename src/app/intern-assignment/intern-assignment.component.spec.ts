import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternAssignmentComponent } from './intern-assignment.component';

describe('InternAssignmentComponent', () => {
  let component: InternAssignmentComponent;
  let fixture: ComponentFixture<InternAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
