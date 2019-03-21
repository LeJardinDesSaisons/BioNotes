import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewAreasComponent } from './view-areas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PopoverController } from '@ionic/angular';
import * as data from '../../../assets/testDb.json';
import { Area } from 'src/app/model/area';

describe('ViewAreasComponent', () => {
  let component: ViewAreasComponent;
  let fixture: ComponentFixture<ViewAreasComponent>;
  let createSpy: any;

  const areasMock: any = data.Areas;
  const urlMock: any = '/area/list';



  beforeEach(async(() => {
    const popoverControllerStub = jasmine.createSpyObj('PopoverController', ['create']);
    createSpy = popoverControllerStub.create.and.returnValue(Promise.resolve({ present : () => Promise.resolve(null) }));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ViewAreasComponent ],
      providers: [
        {provide: PopoverController, useValue: popoverControllerStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAreasComponent);
    component = fixture.componentInstance;

    component.areas = areasMock;
    component.link = urlMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a popover', fakeAsync(() => {
    component.presentPopover(null, 0);
    expect(createSpy).toHaveBeenCalled();
  }));

  it('should have an area entry', () => {
    expect(component.areas).toBeDefined();
  });

  it('should have an link entry', () => {
    expect(component.link).toBeDefined();
  });

});
