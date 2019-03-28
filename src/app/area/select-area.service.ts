import { Injectable } from '@angular/core';
import { Area } from '../model/area';

@Injectable({
  providedIn: 'root'
})
export class SelectAreaService {
  private area: Area;

  constructor() { }

  public setArea(area: Area) {
    this.area = area;
  }

  public getArea(): Area {
    return this.area;
  }
}
