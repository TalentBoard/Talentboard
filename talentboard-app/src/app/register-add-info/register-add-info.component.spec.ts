import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAddInfoComponent } from './register-add-info.component';

describe('RegisterAddInfoComponent', () => {
  let component: RegisterAddInfoComponent;
  let fixture: ComponentFixture<RegisterAddInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAddInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
