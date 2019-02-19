import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreaPage } from './add-area.page';
import { AreaDbService } from '../area-db.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

fdescribe('AddAreaPage', () => {
  let component: AddAreaPage;
  let fixture: ComponentFixture<AddAreaPage>;

  let getParentNamesSpy;

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames']);
    getParentNamesSpy = dbServiceStub.getParentNames.and.returnValue(Promise.resolve(types));


    TestBed.configureTestingModule({
      declarations: [ AddAreaPage ],
      providers: [
        {provide: AreaDbService, useValue: dbServiceStub },
        {provide: ActivatedRoute, useValue: routeStub},
        {provide: Location, useValue: locationStub},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
