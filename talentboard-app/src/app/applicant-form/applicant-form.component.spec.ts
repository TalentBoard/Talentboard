import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantFormComponent } from './applicant-form.component';

describe('ApplicantFormComponent', () => {
  let component: ApplicantFormComponent;
  let fixture: ComponentFixture<ApplicantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
