import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { protractor } from 'protractor';

import { AreasArborescencePage } from './areas-arborescence.page';
import { AreaDbService } from '../area-db.service';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import * as data from '../../../assets/testDb.json';
import { Area } from 'src/app/model/area';
import { CommonModule } from '@angular/common';


describe('AreasArborescencePage without parentId', () => {
  let component: AreasArborescencePage;
  let fixture: ComponentFixture<AreasArborescencePage>;

  let getRootAreaSpy: any, getAreaByIdSpy: any, getChildAreaByIdSpy;

  const area1 = data.Areas[0];
  const area2 = data.Areas[1];

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDBService', ['getAreaById', 'getChildAreaById', 'getRootArea']);
    getRootAreaSpy = dbServiceStub.getRootArea.and.returnValue(Promise.resolve([area1, area2]));
    getAreaByIdSpy = dbServiceStub.getAreaById.and.returnValue(Promise.resolve(null));
    getChildAreaByIdSpy = dbServiceStub.getChildAreaById.and.returnValue(Promise.resolve(null));

    const routeStub = {snapshot: {paramMap: convertToParamMap({'parentid': '' })}};

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

  it('should make the correct calls on initialisation', () => {
    expect(getRootAreaSpy).toHaveBeenCalled();
    expect(getAreaByIdSpy).toHaveBeenCalledTimes(0);
    expect(getChildAreaByIdSpy).toHaveBeenCalledTimes(0);
  });


});

describe('AreasArborescencePage with parentId', () => {
  let component: AreasArborescencePage;
  let fixture: ComponentFixture<AreasArborescencePage>;

  let getAreaByIdSpy: any, getChildAreaByIdSpy: any, getRootAreaSpy: any;

  const parentId = '1';
  const area = data.Areas[0];
  const area2 = data.Areas[1];
  const child = data.Areas[2];


  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDBService', ['getAreaById', 'getChildAreaById', 'getRootArea']);
    getAreaByIdSpy = dbServiceStub.getAreaById.and.returnValue(Promise.resolve(area));
    getChildAreaByIdSpy = dbServiceStub.getChildAreaById.and.returnValue(Promise.resolve(child));
    getRootAreaSpy = dbServiceStub.getRootArea.and.returnValue(Promise.resolve([area, area2]));

    const routeStub = {snapshot: {paramMap: convertToParamMap({'parentid': parentId })}};

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

  it('should make the correct calls on initialisation', () => {
    expect(getAreaByIdSpy).toHaveBeenCalledWith(+parentId);
    expect(getChildAreaByIdSpy).toHaveBeenCalledWith(+parentId);
    expect(getRootAreaSpy).toHaveBeenCalledTimes(0);
  });

});

