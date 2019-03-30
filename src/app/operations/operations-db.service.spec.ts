import { OperationDbService } from './operations-db.service';
import { async, fakeAsync, tick } from '@angular/core/testing';
import * as data from './operationsmock-db';


describe('OperationDbService', () => {

  let getStub: any, setStub: any;
  let service: OperationDbService;

  beforeEach(() => {
    const storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
    getStub = storageSpy.get;
    setStub = storageSpy.set;
    service = new OperationDbService(storageSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize an empty operation', fakeAsync(() => {
    getStub = getStub.and.returnValue(Promise.resolve(null));
    service.initOperations();
    tick();
    expect(setStub).toHaveBeenCalledTimes(5);
  }));

  it('should not initialize an empty operation', fakeAsync(() => {
    getStub = getStub.and.returnValue(Promise.resolve(data.mockOperations));
    service.initOperations();
    tick();
    expect(setStub).not.toHaveBeenCalled();
  }));

  it('should get the operations', () => {
    service.getOperations();
    expect(getStub).toHaveBeenCalledWith('operation');
  });

  it('should get the labels', () => {
    service.getLabels();
    expect(getStub).toHaveBeenCalledWith('label');
  });

  it('should get the vegetables', () => {
    service.getVegetables();
    expect(getStub).toHaveBeenCalledWith('vegetable');
  });

  it('should get the categories', () => {
    service.getCategories();
    expect(getStub).toHaveBeenCalledWith('category');
  });

  it('should get the areas', () => {
    service.getAreas();
    expect(getStub).toHaveBeenCalledWith('area');
  });

  it('should get the suppliers', () => {
    service.getSuppliers();
    expect(getStub).toHaveBeenCalledWith('supplier');
  });

  it('should get an operation from its id', async(() => {
    getStub = getStub.and.returnValue(Promise.resolve(data.mockOperations));
    service.getOperationById(data.mockOperations[0].id).then((result) => {
      expect(getStub).toHaveBeenCalledWith('operation');
      expect(result).toBe(data.mockOperations[0]);
    });
  }));

  it('should delete the operation', fakeAsync(() => {
    getStub = getStub.and.returnValue(Promise.resolve(data.mockOperations));
    service.deleteOperation(6);
    expect(getStub).toHaveBeenCalledWith('operation');
    tick();
    expect(setStub).toHaveBeenCalledWith('operation', data.mockOperations.filter((op) => op.id !== 6));
  }));

});
