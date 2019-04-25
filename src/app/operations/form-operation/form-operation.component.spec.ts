import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperationComponent } from './form-operation.component';
import { OperationDbService } from '../operations-db.service';
import * as data from '../operationsmock-db';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormOperationComponent', () => {
  let component: FormOperationComponent;
  let fixture: ComponentFixture<FormOperationComponent>;

  let getCategoriesSpy: any;
  let getVegetablesSpy: any;
  let getSuppliersSpy: any;
  let getLabelsSpy: any;

  beforeEach(async(() => {
    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['getCategories', 'getVegetables', 'getSuppliers', 'getLabels']);
    getCategoriesSpy = operationDbServiceStub.getCategories.and.returnValue(Promise.resolve(data.defaultCategories));
    getVegetablesSpy = operationDbServiceStub.getVegetables.and.returnValue(Promise.resolve(data.mockVegetables));
    getSuppliersSpy = operationDbServiceStub.getSuppliers.and.returnValue(Promise.resolve(data.mockSuppliers));
    getLabelsSpy = operationDbServiceStub.getLabels.and.returnValue(Promise.resolve(data.mockLabels));

    TestBed.configureTestingModule({
      declarations: [ FormOperationComponent ],
      providers : [
        {provide: OperationDbService, useValue: operationDbServiceStub},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperationComponent);
    component = fixture.componentInstance;
    component.operation = data.mockOperations[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
