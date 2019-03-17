import { AreaDbService } from './../area-db.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EditAreaPage } from './edit-area.page';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

describe('EditAreaPage', () => {
  let component: EditAreaPage;
  let fixture: ComponentFixture<EditAreaPage>;

  let getAreaByIdSpy: any, getParentNamesSpy: any, addTypeSpy: any, editAreaSpy: any;
  let backSpy: any;

  const areaId = '2';
  const area = {
    type: { id: 1, name: 'Parcelle' },
    number: 1,
    id: 2,
    parentId: 1,
    name: 'Parcelle 1',
  };

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames', 'addType', 'editArea', 'getAreaById']);
    getAreaByIdSpy = dbServiceStub.getAreaById.and.returnValue(Promise.resolve(area));
    getParentNamesSpy = dbServiceStub.getParentNames.and.returnValue(Promise.resolve(['Jardin 1']));

    addTypeSpy = dbServiceStub.addType.and.returnValue(Promise.resolve(area.type));
    editAreaSpy = dbServiceStub.editArea;

    const routeStub = {snapshot: {paramMap: convertToParamMap({'id': areaId})}};

    const locationStub = jasmine.createSpyObj('Location', ['back']);
    backSpy = locationStub.back;

    TestBed.configureTestingModule({
      declarations: [ EditAreaPage ],
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
    fixture = TestBed.createComponent(EditAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill its information based on the given ID', () => {
    expect(component.area.id).toBe(+areaId);
    expect(getAreaByIdSpy).toHaveBeenCalledWith(+areaId);
  });

  it('should submit the area', fakeAsync(() => {
    component.area = area;
    component.submit();
    tick();

    expect(addTypeSpy).toHaveBeenCalledWith(area.type);
    expect(component.area.type).toBe(area.type);
    expect(editAreaSpy).toHaveBeenCalledWith(area);
    expect(backSpy).toHaveBeenCalled();
  }));
});
