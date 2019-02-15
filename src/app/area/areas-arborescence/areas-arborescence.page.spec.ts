import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasArborescencePage } from './areas-arborescence.page';

describe('AreasArborescencePage', () => {
  let component: AreasArborescencePage;
  let fixture: ComponentFixture<AreasArborescencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasArborescencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasArborescencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
