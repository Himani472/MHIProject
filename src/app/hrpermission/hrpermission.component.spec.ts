import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpermissionComponent } from './hrpermission.component';

describe('HrpermissionComponent', () => {
  let component: HrpermissionComponent;
  let fixture: ComponentFixture<HrpermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrpermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
