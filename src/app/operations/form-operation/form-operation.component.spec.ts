import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperationComponent } from './form-operation.component';

describe('FormOperationComponent', () => {
  let component: FormOperationComponent;
  let fixture: ComponentFixture<FormOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
