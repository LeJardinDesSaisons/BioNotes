import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningComponent } from './planning.component';
import { OperationDbService } from '../operations-db.service';
import * as data from '../operationsmock-db';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDbService } from 'src/app/area/area-db.service';
import { ActionSheetController } from '@ionic/angular';

describe('PlanningComponent', () => {
  let component: PlanningComponent;
  let fixture: ComponentFixture<PlanningComponent>;

  let getOperations: any;
  let getParentNamesSpy: any, addTypeSpy: any, addAreaSpy: any;

   beforeEach(async(() => {
    const areaDbServiceStub = jasmine.createSpyObj('AreaDbService', ['getParentNames', 'addType', 'addArea']);
    getParentNamesSpy = areaDbServiceStub.getParentNames.and.returnValue(Promise.resolve([data.mockAreas[0]]));
    addTypeSpy = areaDbServiceStub.addType.and.returnValue(Promise.resolve(data.mockAreas[0].type));
    addAreaSpy = areaDbServiceStub.addArea;

    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['getOperations']);
    getOperations = operationDbServiceStub.getOperations.and.returnValue(Promise.resolve([data.mockOperations]));

    TestBed.configureTestingModule({
      declarations: [ PlanningComponent ],
      providers: [
        {provide: AreaDbService, useValue: areaDbServiceStub},
        {provide: OperationDbService, useValue: operationDbServiceStub},
        {provide: ActionSheetController},
        {provide: VirtualScrollerModule},
        {provide: Router}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
