import { Injectable } from '@angular/core';
import { Operation, Label} from '../model/operation';
import { Vegetable, Category } from '../model/vegetable';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OperationDbService {

  constructor(public storage: Storage) { }

  /**
   * Initialize the operations Storage key
   * This should be called at least on the first app launch
   */
  initOperations() {
    this.storage.get('operation').then((operations) => {
      if (operations === null) {
        this.storage.set('operation', []);
      }
    });
    this.storage.get('label').then((labels) => {
      if (labels === null) {
        this.storage.set('label', []);
      }
    });
    this.storage.get('vegetable').then((vegetables) => {
      if (vegetables === null) {
        this.storage.set('vegetable', []);
      }
    });
    this.storage.get('category').then((categories) => {
      if (categories === null) {
        this.storage.set('category', []);
      }
    });
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('area', []);
      }
    });
  }

  /**
  * Get every operation stored
  */
  async getOperations(): Promise<Operation[]> {
    return this.storage.get('operation');
  }
  /**
  * Get every Label stored
  */
  async getLabels(): Promise<Label[]> {
    return this.storage.get('label');
  }
  /**
  * Get every vegetable stored
  */
  async getVegetables(): Promise<Vegetable[]> {
    return this.storage.get('vegetable');
  }
  /**
   * Get every category of vegetable stored
   */
  async getCategories(): Promise<Category[]> {
    return this.storage.get('category');
  }

  /**
   * Get an operation by its id
   * @param id the id of the operation to retrieve
   */
  async getOperationById(id: Number): Promise<Operation> {
    const operations = await this.storage.get('operation');
    return operations.filter((operation: Operation) => operation.id === id)[0];
  }


}
