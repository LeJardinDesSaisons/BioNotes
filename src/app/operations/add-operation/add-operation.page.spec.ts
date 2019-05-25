import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import * as data from '../operationsmock-db';
import { AddOperationPage } from './add-operation.page';
import { OperationDbService } from '../operations-db.service';
import { NavController } from '@ionic/angular';
import { convertToParamMap, ActivatedRoute } from '@angular/router';

describe('AddOperationPage', () => {
  let component: AddOperationPage;
  let fixture: ComponentFixture<AddOperationPage>;

  let addVegetableSpy: any, addOperationSpy: any, addCategorySpy: any, addLabelSpy: any,
  addSupplierSpy: any;
  let navigateBackSpy: any;

  const operation = data.mockOperations[0];
  const selectedArea = '1';

  beforeEach(async(() => {
    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['addVegetable', 'addOperation', 'addNamedDbObject']);
    addOperationSpy = operationDbServiceStub.addOperation.and.returnValue(Promise.resolve(operation));
    addVegetableSpy = operationDbServiceStub.addVegetable.and.returnValue(Promise.resolve(operation.vegetable));
    addCategorySpy = operationDbServiceStub.addNamedDbObject.and.returnValue(Promise.resolve(operation.vegetable.category));
    addLabelSpy = operationDbServiceStub.addNamedDbObject.and.returnValue(Promise.resolve(operation.label));
    addSupplierSpy = operationDbServiceStub.addNamedDbObject.and.returnValue(Promise.resolve(operation.supplier));

    const navControllerStub = jasmine.createSpyObj('navController', ['navigateBack']);
    navigateBackSpy = navControllerStub.navigateBack;

    const routeStub = {snapshot: {paramMap: convertToParamMap({'areaselected': selectedArea})}};

    TestBed.configureTestingModule({
      declarations: [ AddOperationPage ],
      providers : [
        {provide: OperationDbService, useValue: operationDbServiceStub},
        {provide: ActivatedRoute, useValue: routeStub},
        {provide: NavController, useValue: navControllerStub},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOperationPage);
    component = fixture.componentInstance;
    component.operation = operation;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add dependencies', fakeAsync(() => {
    component.addDependencies();
    tick();

    expect(addCategorySpy).toHaveBeenCalled();
    expect(component.operation.vegetable.category).toBe(operation.vegetable.category);
    expect(addLabelSpy).toHaveBeenCalled();
    expect(component.operation.label).toBe(operation.label);
    expect(addSupplierSpy).toHaveBeenCalled();
    expect(component.operation.supplier).toBe(operation.supplier);
  }));

  it('should submit', fakeAsync(() => {
    component.submit();
    tick();

    expect(addVegetableSpy).toHaveBeenCalled();
    expect(component.operation.vegetable).toBe(operation.vegetable);
    expect(addOperationSpy).toHaveBeenCalled();
    expect(component.operation).toBe(operation);

    expect(navigateBackSpy).toHaveBeenCalledWith('/tabs/tab1');
  }));
});
