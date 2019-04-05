import { Injectable } from '@angular/core';
import { Area } from '../model/area';
import { Operation } from '../model/operation';


@Injectable({
  providedIn: 'root'
})
export class SelectAreaService {
  private operation: Operation;

  constructor() {
    this.operation = null;
   }

   /**
    * Set the selectedArea we want to use and add it to the operation
    * @param area the selected area
    */
  public setArea(area: Area) {
    this.operation.area = area;
  }

  /**
   * Return the selectedArea in the operation
   */
  public getArea(): Area {
    return this.operation.area;
  }

  /**
   * Save the operation in SelectAreaService
   * @param operation The operation we want to save
   */
  public setOperation(operation: Operation) {
    this.operation = operation;
  }

  /**
   * Return the saved Operation
   */
  public getOperation() {
    return this.operation;
  }
}
