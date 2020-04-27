import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternComponentComponent } from './intern-component.component';

describe('InternComponentComponent', () => {
  let component: InternComponentComponent;
  let fixture: ComponentFixture<InternComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
