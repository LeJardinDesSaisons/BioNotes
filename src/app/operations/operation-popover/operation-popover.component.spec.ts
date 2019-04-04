import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { OperationDbService } from '../operations-db.service';
import { OperationPopoverComponent } from './operation-popover.component';


describe('OperationPopoverComponent', () => {
  let component: OperationPopoverComponent;
  let fixture: ComponentFixture<OperationPopoverComponent>;

  let dismissSpy: any, backSpy: any, createAlertSpy: any, deleteSpy: any, createToastSpy: any;

  beforeEach(async(() => {
    const popoverControllerStub = jasmine.createSpyObj('PopoverController', ['dismiss']);
    dismissSpy = popoverControllerStub.dismiss;

    const locationStub = jasmine.createSpyObj('Location', ['back']);
    backSpy = locationStub.back;

    const objectToPresent = {present: () => null};

    const alertControllerStub = jasmine.createSpyObj('AlertController', ['create']);
    createAlertSpy = alertControllerStub.create.and.returnValue(Promise.resolve(objectToPresent));

    const operationDbServiceStub = jasmine.createSpyObj('OperationDbService', ['deleteOperation']);
    deleteSpy = operationDbServiceStub.deleteOperation;

    const toastControllerStub = jasmine.createSpyObj('ToastController', ['create']);
    createToastSpy = toastControllerStub.create.and.returnValue(Promise.resolve(objectToPresent));

    TestBed.configureTestingModule({
      declarations: [ OperationPopoverComponent ],
      providers: [
        {provide: PopoverController, useValue: popoverControllerStub},
        {provide: Location, useValue: locationStub},
        {provide: AlertController, useValue: alertControllerStub},
        {provide: OperationDbService, useValue: operationDbServiceStub},
        {provide: ToastController, useValue: toastControllerStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the alert dialog', () => {
    component.presentDeleteDialog();
    expect(dismissSpy).toHaveBeenCalled();
    expect(createAlertSpy).toHaveBeenCalled();
  });

  it('should delete the operation', () => {
    component.operationId = 1;
    component.deleteOperation();
    expect(createToastSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(1);
    expect(backSpy).toHaveBeenCalled();
  });
});
