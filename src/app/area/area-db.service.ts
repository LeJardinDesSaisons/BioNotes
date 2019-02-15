import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';

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
      }
    });
  }

  /**
   * Get every area stored
   */
  async getAreas(): Promise<Area[]> {
    return this.storage.get('area');
  }

  /**
   * Get every type of area currently in Storage
   */
  async getAreaTypes(): Promise<String[]> {
    const areas = await this.storage.get('area');
    return areas.map((area: Area) => area.type);
  }

  /**
   * Get an area by its id
   * @param id the id of the area to retrieve
   */
  async getAreaById(id: Number): Promise<Area> {
    const areas = await this.storage.get('area');
    return areas.filter((area: Area) => area.id = id)[0];
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
   * Add an area to the Storage
   * @param area the area to add
   */
  addArea(area: Area) {
    this.storage.get('area').then((areas) => {
      area.id = areas.length + 1;
      areas.push(area);
      this.storage.set('area', areas);
    });
  }

}
