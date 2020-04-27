import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorComponentComponent } from './mentor-component.component';

describe('MentorComponentComponent', () => {
  let component: MentorComponentComponent;
  let fixture: ComponentFixture<MentorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
