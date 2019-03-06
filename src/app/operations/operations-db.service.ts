import { Injectable } from '@angular/core';
import { Operation, Label} from '../model/operation';
import { Vegetable, Category } from '../model/vegetable';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';


//pas réussi à exporter depuis spec
const defaultcategories: Category[] = [
  {id: 1, name: 'Solanacée'},
  {id: 2, name: 'Brassicacée'},
  {id: 3, name: 'Alliacée'},
  {id: 4, name: 'Apiacée'},
  {id: 5, name: 'Curcubitacée'},
  {id: 6, name: 'Crucifère'},
  {id: 7, name: 'Astéracées'}
];

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
        this.storage.set('category', defaultcategories);
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
  * Get every area stored
  */
  async getAreas(): Promise<Area[]> {
    return this.storage.get('area');
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
