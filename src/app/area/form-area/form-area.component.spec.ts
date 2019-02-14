import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAreaComponent } from './form-area.component';

describe('FormAreaComponent', () => {
  let component: FormAreaComponent;
  let fixture: ComponentFixture<FormAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
