import { Type } from './../model/area';
import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';
import * as data from '../../assets/testDb.json';

@Injectable({
  providedIn: 'root'
})
export class AreaDbService {

  constructor(public storage: Storage) { }

  /**
   * Initialize the area Storage key
   * This should be called at least on the first app launch
   */
  initAreas() {
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('area', []);
        this.initTestArea();
      } 
    });
    this.storage.get('type').then((types) => {
      if (types === null) {
        this.storage.set('type', []);
          this.initTestType();
      }
    });
  }

  initTestType() {
    this.storage.set('type', data.Types);
  }

  initTestArea(){
    this.storage.set('area', data.Areas);
  }


  /**
   * Get every area stored
   */
  async getAreas(): Promise<Area[]> {
    return this.storage.get('area');
  }

  /**
   * Get every type of area stored
   */
  async getTypes(): Promise<Type[]> {
    return this.storage.get('type');
  }

  /**
   * Get an area by its id
   * @param id the id of the area to retrieve
   */
  async getAreaById(id: Number): Promise<Area> {
    const areas = await this.storage.get('area');
    return areas.filter((area: Area) => area.id === id)[0];
  }

  /**
   * Get every childs of an area
   * @param id
   */
  async getChildAreaById(id: number): Promise <Area[]> {
    const areas = await this.storage.get('area');
    return areas.filter((currArea: Area) => currArea.parentId === id );
  }

  /**
   * Get areas without parent
   */
  async getRootArea(): Promise <Area[]> {
    const areas = await this.storage.get('area');
    return areas.filter( (currArea: Area) => !currArea.parentId );
  }

  /**
   * Fetch the names of the area ancestors, from the root to the direct parent
   * @param area the area whose parents we want to know
   */
  async getParentNames(area: Area): Promise<String[]> {
    const areas = await this.storage.get('area');

    let currParent: Area = areas.filter((currArea: Area) => currArea.id === area.parentId)[0];
    const parentNames: String[] = [currParent.name];

    while (currParent) {
      currParent = areas.filter((currArea: Area) => currArea.id === currParent.parentId)[0];
      if (currParent) {
        parentNames.unshift(currParent.name);
      }
    }
    return parentNames;
  }

  /**
   * Add a type to the Storage if it does not exist and retrieve its ID
   * @param typeName the name of the type to add
   */
  async addType(type: Type) {
    const types: Type[] = await this.storage.get('type');
    const typeInStorage = types.filter((currType: Type) => currType.name === type.name)[0];
    if (typeInStorage) {
      return typeInStorage;
    } else {
      type.id = types.length + 1;
      types.push(type);
      this.storage.set('type', types);
      return type;
    }
  }

  /**
   * Add an area to the Storage
   * @param area the area to add
   */
  addArea(area: Area) {
    this.storage.get('area').then((areas: Area[]) => {
      area.id = areas.length + 1;
      areas.push(area);
      this.storage.set('area', areas);
    });
  }


}
