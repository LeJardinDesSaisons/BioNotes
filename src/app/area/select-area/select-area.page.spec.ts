import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAreaPage } from './select-area.page';

import * as data from '../../../assets/testDb.json';
import { AreaDbService } from '../area-db.service';
import { SelectAreaService } from '../select-area.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('SelectAreaPage without parentID', () => {
  let component: SelectAreaPage;
  let fixture: ComponentFixture<SelectAreaPage>;

  let getRootAreaSpy: any, getAreaByIdSpy: any, getChildAreaByIdSpy: any;
  let setParentAreaService: any;

  const area1 = data.Areas[0];
  const area2 = data.Areas[1];

  beforeEach(async(() => {
    const dbServiceStub = jasmine.createSpyObj('AreaDBService', ['getAreaById', 'getChildAreaById', 'getRootArea']);
    getRootAreaSpy = dbServiceStub.getRootArea.and.returnValue(Promise.resolve([area1, area2]));
    getAreaByIdSpy = dbServiceStub.getAreaById.and.returnValue(Promise.resolve(null));
    getChildAreaByIdSpy = dbServiceStub.getChildAreaById.and.returnValue(Promise.resolve(null));

    const selectAreaServiceStub = jasmine.createSpyObj('SelectAreaService', ['setArea']);
    setParentAreaService = selectAreaServiceStub.setArea.and.returnValue(null);

    const routeStub = {snapshot: {paramMap: convertToParamMap({'parentid': '' })}};

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SelectAreaPage ],
      providers: [
        {provide: AreaDbService, useValue: dbServiceStub },
        {provide: ActivatedRoute, useValue: routeStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the correct calls on initialisation', () => {
    expect(getRootAreaSpy).toHaveBeenCalled();
    expect(getAreaByIdSpy).not.toHaveBeenCalled();
    expect(getChildAreaByIdSpy).not.toHaveBeenCalled();
    expect(setParentAreaService).not.toHaveBeenCalled();
  });

});
