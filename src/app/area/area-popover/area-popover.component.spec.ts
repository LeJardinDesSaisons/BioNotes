import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPopoverComponent } from './area-popover.component';

describe('AreaPopoverComponent', () => {
  let component: AreaPopoverComponent;
  let fixture: ComponentFixture<AreaPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
