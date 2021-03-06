import { AreaDbService } from './area-db.service';
import { async, fakeAsync, tick } from '@angular/core/testing';

describe('AreaDbService', () => {

  let getStub: any, setStub: any;
  let service: AreaDbService;

  const areas: any[] = [
    {id: 1, name: 'Parcelle 1' },
    {id: 2, name: 'Serre 1', parentId: 1},
    {id: 3, name: 'Jardin 1', parentId: 2},
  ];
  const types = [
    { id: 1, name: 'Parcelle'},
    { id: 2, name: 'Serre'},
  ];

  beforeEach(() => {
    const storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
    getStub = storageSpy.get.and.returnValue(Promise.resolve(areas));
    setStub = storageSpy.set;
    service = new AreaDbService(storageSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize an empty storage', fakeAsync(() => {
    getStub = getStub.and.returnValue(Promise.resolve(null));
    service.initAreas();
    tick();
    expect(setStub).toHaveBeenCalledTimes(2);
  }));

  it('should not initialize an existing storage', fakeAsync(() => {
    service.initAreas();
    tick();
    expect(setStub).not.toHaveBeenCalled();
  }));

  it('should get the areas', () => {
    service.getAreas();
    expect(getStub).toHaveBeenCalledWith('area');
  });

  it('should get the types', () => {
    service.getTypes();
    expect(getStub).toHaveBeenCalledWith('type');
  });

  it('should get an area from its id', async(() => {
    service.getAreaById(areas[0].id).then((result) => {
      expect(getStub).toHaveBeenCalledWith('area');
      expect(result).toBe(areas[0]);
    });
  }));

  it('should get an area\'s parent names', async(() => {
    service.getParentNames(areas[2]).then((result) => {
      expect(getStub).toHaveBeenCalledWith('area');
      expect(result).toEqual(['Parcelle 1', 'Serre 1']);
    });
  }));

  it('should return undefined when being asked for a root area\'s parents', async(() => {
    service.getParentNames(areas[0]).then((result) => {
      expect(getStub).toHaveBeenCalledWith('area');
      expect(result).toBeUndefined();
    });
  }));

  it('should retrieve a type', async(() => {
    getStub = getStub.and.returnValue(Promise.resolve(types));
    service.addType({id: null, name: 'Parcelle'}).then((result) => {
      expect(result).toEqual({id: 1, name: 'Parcelle'});
    });
  }));

  it('should add a type', async(() => {
    const newType = {id: null, name: 'Planche'};
    getStub = getStub.and.returnValue(Promise.resolve(types.slice()));
    service.addType(newType).then((result) => {
      expect(setStub).toHaveBeenCalledWith('type', types.concat(newType));
      expect(result).toEqual(newType);
    });
  }));

  it('should add an area', fakeAsync(() => {
    service.addArea(areas[0]);
    expect(getStub).toHaveBeenCalledWith('area');
    tick();
    expect(setStub).toHaveBeenCalled();
  }));

  it('should edit an area', fakeAsync(() => {
    service.editArea(areas[0]);
    expect(getStub).toHaveBeenCalledWith('area');
    tick();
    expect(setStub).toHaveBeenCalled();
  }));

  it('should not edit a non-existing area', fakeAsync(() => {
    service.editArea({id: 99, name: '', type: types[0], number: 1, parentId: null});
    expect(getStub).toHaveBeenCalledWith('area');
    tick();
    expect(setStub).not.toHaveBeenCalled();
  }));
});
