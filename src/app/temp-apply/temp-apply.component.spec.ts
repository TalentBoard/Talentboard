import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempApplyComponent } from './temp-apply.component';

describe('TempApplyComponent', () => {
  let component: TempApplyComponent;
  let fixture: ComponentFixture<TempApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
