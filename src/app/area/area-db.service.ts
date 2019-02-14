import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AreaDbService {

  constructor(public storage: Storage) { }

  initAreas() {
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('area', []);
      }
    });
  }

  addArea(area: Area) {
    this.storage.get('area').then((areas) => {
      area.id = areas.length;
      areas.push(area);
      this.storage.set('area', areas);
    });
  }

  async getAreaTypes(): Promise<String[]> {
    const areas = await this.storage.get('area');
    if (areas) {
      return areas.map((area: Area) => area.type);
    }
    return null;
  }

  async getAreas(): Promise<Area[]> {
    return this.storage.get('area');
  }

}
