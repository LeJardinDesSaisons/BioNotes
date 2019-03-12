import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AddAreaPage } from './add-area.page';
import { AreaDbService } from '../area-db.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Location } from '@angular/common';

describe('AddAreaPage', () => {
  let component: AddAreaPage;
  let fixture: ComponentFixture<AddAreaPage>;

  let getParentNamesSpy: any, addTypeSpy: any, addAreaSpy: any;
  let backSpy: any;

  const parentId = '1';
  const area = {
    type: { id: 1, name: 'Parcelle' },
    number: 1,
    id: 2,
    parentId: 1,
    name: 'Parcelle 1',
  };

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames', 'addType', 'addArea']);
    getParentNamesSpy = dbServiceStub.getParentNames.and.returnValue(Promise.resolve([area]));
    addTypeSpy = dbServiceStub.addType.and.returnValue(Promise.resolve(area.type));
    addAreaSpy = dbServiceStub.addArea;

    const routeStub = {snapshot: {paramMap: convertToParamMap({'parentid': parentId})}};

    const locationStub = jasmine.createSpyObj('Location', ['back']);
    backSpy = locationStub.back;

    TestBed.configureTestingModule({
      declarations: [ AddAreaPage ],
      providers: [
        {provide: AreaDbService, useValue: dbServiceStub},
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

  it('should fill its information based on the parent ID', () => {
    expect(component.area.parentId).toBe(+parentId);
    expect(getParentNamesSpy).toHaveBeenCalledWith(component.area);
  });

  it('should submit the area', fakeAsync(() => {
    component.area = area;
    component.submit();
    tick();

    expect(addTypeSpy).toHaveBeenCalledWith(area.type);
    expect(component.area.type).toBe(area.type);
    expect(addAreaSpy).toHaveBeenCalledWith(area);
    expect(backSpy).toHaveBeenCalled();
  }));

});
