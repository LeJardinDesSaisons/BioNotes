import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreasComponent } from './view-areas.component';

describe('ViewAreasComponent', () => {
  let component: ViewAreasComponent;
  let fixture: ComponentFixture<ViewAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
