import { OperationDbService } from './operations-db.service';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { Category, Vegetable } from '../model/vegetable';
import { Label, Operation } from '../model/operation';


describe('OperationDbService', () => {

  let getStub: any, setStub: any;
  let service: OperationDbService;

  const areas: any[] = [
    {id: 1, name: 'Parcelle 1' },
    {id: 2, name: 'Serre 1', parentId: 1},
    {id: 3, name: 'Jardin 1', parentId: 2},
  ];

  const labels: Label[] = [
    {id: 1, name: 'Amendement'},
    {id: 2, name: 'Semis'},
    {id: 3, name: 'Désherbage'},
    {id: 4, name: 'Récolte'}
  ];

  const defaultcategories: Category[] = [
    {id: 1, name: 'Solanacée'},
    {id: 2, name: 'Brassicacée'},
    {id: 3, name: 'Alliacée'},
    {id: 4, name: 'Apiacée'},
    {id: 5, name: 'Curcubitacée'},
    {id: 6, name: 'Crucifère'},
    {id: 7, name: 'Astéracée'}
  ];

  const vegetables: Vegetable[] = [
    {id: 1, variety: 'Courge Butternut', category: defaultcategories[4], name: 'Waltham'},
    {id: 2, variety: 'Chicorée Frisée', category: defaultcategories[6], name: 'Wallone'},
    {id: 3, variety: 'Laitue', category: defaultcategories[6], name: 'Batavia'},
    {id: 4, variety: 'Ail', category: defaultcategories[2], name: 'Blanc'}
  ];

  const operations: Operation[] = [
    {id: 1, date: '2019-03-10', label: labels[0], vegetable: vegetables[0], area: areas[2], observations: '', done: true},
    {id: 2, date: '2019-03-15', label: labels[1], vegetable: vegetables[1], area: areas[2], observations: '', done: false},
    {id: 3, date: '2019-03-20', label: labels[2], vegetable: vegetables[2], area: areas[2], observations: '', done: false},
    {id: 4, date: '2019-03-25', label: labels[3], vegetable: vegetables[3], area: areas[2], observations: '', done: false}
  ];

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
    getStub = getStub.and.returnValue(Promise.resolve(operations));
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

  it('should get an operation from its id', async(() => {
    getStub = getStub.and.returnValue(Promise.resolve(operations));
    service.getOperationById(operations[0].id).then((result) => {
      expect(getStub).toHaveBeenCalledWith('operation');
      expect(result).toBe(operations[0]);
    });
  }));


});
