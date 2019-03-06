import { OperationDbService } from './operations-db.service';
import { Area } from '../model/area';
import { async, fakeAsync, tick } from '@angular/core/testing';

describe('OperationDbService', () => {

  let getStub: any, setStub: any;
  let service: OperationDbService;

  const areas: any[] = [
    {id: 1, name: 'Parcelle 1' },
    {id: 2, name: 'Serre 1', parentId: 1},
    {id: 3, name: 'Jardin 1', parentId: 2},
  ];

  const labels: any[] = [
    {id: 1, name: 'Amendement'},
    {id: 2, name: 'Semis'},
    {id: 3, name: 'Désherbage'},
    {id: 4, name: 'Récolte'}
  ];

  const categories: any[] = [
    {id: 1, name: 'Solanacée'},
    {id: 2, name: 'Brassicacée'},
    {id: 3, name: 'Alliacée'},
    {id: 4, name: 'Apiacée'},
    {id: 5, name: 'Curcubitacée'},
    {id: 6, name: 'Crucifère'},
    {id: 7, name: 'Astéracées'}
  ];

  const vegetables: any[] = [
    {id: 1, variety: 'Courge Butternut', category: categories[4].name, name: 'Waltham'},
    {id: 2, variety: 'Chicorée Frisée', category: categories[6].name, name: 'Wallone'},
    {id: 3, variety: 'Laitue', category: categories[6].name, name: 'Batavia'},
    {id: 4, variety: 'Ail', category: categories[2].name, name: 'Blanc'}
  ];

  const operations: any[] = [
    {id: 1, date: '2019-03-13', label: labels[0].name, vegetable: vegetables[0].variety, area: areas[2].name},
    {id: 2, date: '2019-03-15', label: labels[1].name, vegetable: vegetables[1].variety, area: areas[2].name},
    {id: 3, date: '2019-03-20', label: labels[2].name, vegetable: vegetables[2].variety, area: areas[2].name},
    {id: 4, date: '2019-03-25', label: labels[3].name, vegetable: vegetables[3].variety, area: areas[2].name}
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
