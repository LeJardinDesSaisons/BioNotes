import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AreaDbService {

  constructor(public storage: Storage) { }

  addArea(area: Area) {
    this.storage.get('area').then((areas) => {
      area.id = areas.length;
      areas.push(area);
      this.storage.set('area', areas);
    });
  }

}
