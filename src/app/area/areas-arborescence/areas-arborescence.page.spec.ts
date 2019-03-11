import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { protractor } from 'protractor';

import { AreasArborescencePage } from './areas-arborescence.page';
import { AreaDbService } from '../area-db.service';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import * as data from '../../../assets/testDb.json';
import { Area } from 'src/app/model/area';



describe('AreasArborescencePage', () => {
  let component: AreasArborescencePage;
  let fixture: ComponentFixture<AreasArborescencePage>;

  let getAreaByIdSpy: any, getChildAreaByIdSpy: any, getRootAreaSpy: any;

  const parentId = data.Areas[0].id; // 1
  const area = data.Areas[0];

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDBService', ['getAreaById', 'getChildAreaById', 'getRootArea']);
    getAreaByIdSpy = dbServiceStub.getAreaById.and.returnValue(Promise.resolve([area]));
    getChildAreaByIdSpy = dbServiceStub.getChildAreaById.and.returnValue(Promise.resolve([data.Areas[2]]));
    getRootAreaSpy = dbServiceStub.getRootArea;

    const routeStub = {snapshot: {paramMap: convertToParamMap({'parentid': '' })}};;
    // {snapshot: {paramMap: convertToParamMap({'parentid': parentId })}};

    TestBed.configureTestingModule({
      declarations: [ AreasArborescencePage ],
      providers: [
        {provide: AreaDbService, useValue: dbServiceStub },
        {provide: ActivatedRoute, useValue: routeStub}
      ],
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

  it('Should have children', () => {
    expect(component.childAreas).toBeTruthy();
  });

});
