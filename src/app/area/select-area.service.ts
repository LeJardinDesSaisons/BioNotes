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

   /**
    * Set the selectedArea we want to use
    * @param area the selected area
    */
  public setArea(area: Area) {
    this.area = area;
  }

  /**
   * Return the selectedArea
   */
  public getArea(): Area {
    return this.area;
  }

  /**
   * Save the operation in SelectAreaService
   * @param operation The opereation we want to save
   */
  public setOperation(operation: Operation) {
    this.operation = operation;
  }

  /**
   * Return an Operation with the updated area selected
   * and set at null the old area attribut
   */
  public getOperation() {
    this.operation.area = this.area;
    this.area = null ;
    return this.operation;
  }
}
