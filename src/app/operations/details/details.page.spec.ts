import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPage } from './details.page';
import { OperationDbService } from '../operations-db.service';
import * as data from '../operationsmock-db';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { AreaDbService } from 'src/app/area/area-db.service';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  let getOperations: any;
  let getParentNamesSpy: any, addTypeSpy: any, addAreaSpy: any;

  beforeEach(async(() => {
    const areaDbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames', 'addType', 'addArea']);
    getParentNamesSpy = areaDbServiceStub.getParentNames.and.returnValue(Promise.resolve([data.mockAreas[0]]));
    addTypeSpy = areaDbServiceStub.addType.and.returnValue(Promise.resolve(data.mockAreas[0].type));
    addAreaSpy = areaDbServiceStub.addArea;

    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['getOperations']);
    getOperations = operationDbServiceStub.getOperations.and.returnValue(Promise.resolve([data.mockOperations]));

    const routeStub = {snapshot: {paramMap: convertToParamMap({'id': data.mockOperations[0].id})}};

    TestBed.configureTestingModule({
      declarations: [ DetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [
        {provide: AreaDbService, useValue: areaDbServiceStub},
        {provide: OperationDbService, useValue: operationDbServiceStub},
        {provide: ActivatedRoute, useValue: routeStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
