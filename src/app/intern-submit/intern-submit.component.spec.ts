import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternSubmitComponent } from './intern-submit.component';

describe('InternSubmitComponent', () => {
  let component: InternSubmitComponent;
  let fixture: ComponentFixture<InternSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
