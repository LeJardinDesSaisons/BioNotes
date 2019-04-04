import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Operation } from '../model/operation';


@Injectable({
  providedIn: 'root'
})
export class SelectAreaService {
  private area: Area;
  private operation: Operation;

  constructor() {
    this.area = null;
    this.operation = null;
   }

  public setArea(area: Area) {
    this.area = area;
  }

  public getArea(): Area {
    return this.area;
  }

  public setOperation(operation: Operation) {
    this.operation = operation;
  }

  public getOperation() {
    this.operation.area = this.area;
    return this.operation;
  }
}
