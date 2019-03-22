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

  let getOperations: any, getOperationById: any;
  let getParentNamesSpy: any, addTypeSpy: any, addAreaSpy: any;

  const exArea = {
    type: { id: 1, name: 'Parcelle' },
    number: 1,
    id: 2,
    parentId: 1,
    name: 'Parcelle 1',
  };
  const exVegetable = {
    id: 1,
    variety: 'Courge Butternut',
    category: {id: 1, name: 'Solanacée'},
    name: 'Waltham',
  };
  const operation = {
    id: 1,
    date: '2019-03-10',
    label: {id: 1, name: 'Amendement'},
    vegetable: exVegetable,
    supplier: {id: 1, name: 'Agros'},
    area: exArea,
    observations: 'blabla',
    done: true,
  };

  beforeEach(async(() => {
    const areaDbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames', 'addType', 'addArea']);
    getParentNamesSpy = areaDbServiceStub.getParentNames.and.returnValue(Promise.resolve([exArea]));
    addTypeSpy = areaDbServiceStub.addType.and.returnValue(Promise.resolve(exArea.type));
    addAreaSpy = areaDbServiceStub.addArea;

    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['getOperations', 'getOperationById']);
    getOperations = operationDbServiceStub.getOperations.and.returnValue(Promise.resolve(data.mockOperations));
    getOperationById = operationDbServiceStub.getOperationById.and.returnValue(Promise.resolve(operation));

    const routeStub = {snapshot: {paramMap: convertToParamMap({'id': operation.id})}};

    TestBed.configureTestingModule({
      declarations: [ DetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [
        {provide: AreaDbService, useValue: areaDbServiceStub},
        {provide: OperationDbService, useValue: operationDbServiceStub},
        {provide: ActivatedRoute, useValue: routeStub}
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

  it('should fill the details according to the id', () => {
    expect(component.operation.id).toBe(operation.id);
  });

});
