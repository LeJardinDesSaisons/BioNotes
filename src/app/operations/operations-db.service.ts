import { Injectable } from '@angular/core';
import { Operation, Label} from '../model/operation';
import { Vegetable, Category, Supplier } from '../model/vegetable';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';
import * as data from './operationsmock-db';

@Injectable({
  providedIn: 'root'
})
export class OperationDbService {

  constructor(public storage: Storage) { }

  /**
   * Initalize mocks Storage keys
   * Should be called if you want to test the app
   */
  initMocks() {
      this.storage.set('category', data.defaultCategories);
      this.storage.set('area', data.mockAreas);
      this.storage.set('label', data.mockLabels);
      this.storage.set('vegetable', data.mockVegetables);
      this.storage.set('supplier', data.mockSuppliers);
      this.storage.set('operation', data.mockOperations);
  }

  /**
   * Initialize the operations Storage key
   * This should be called at least on the first app launch
   */
  initOperations() {
    this.storage.get('category').then((categories) => {
      if (categories === null) {
        this.storage.set('category', data.defaultCategories);
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

    this.storage.get('supplier').then((suppliers) => {
      if (suppliers === null) {
        this.storage.set('supplier', []);
      }
    });

    this.storage.get('operation').then((operations) => {
      if (operations === null) {
        this.storage.set('operation', []);
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
  * Get every area stored
  */
  async getSuppliers(): Promise<Supplier[]> {
    return this.storage.get('supplier');
  }

  /**
   * Get an operation by its id
   * @param id the id of the operation to retrieve
   */
  async getOperationById(id: Number): Promise<Operation> {
    const operations = await this.storage.get('operation');
    return operations.filter((operation: Operation) => operation.id === id)[0];
  }

  /**
   * Toggles the operation done state
   * @param operation the operation that we want to modify the done state of
   */
  toggleDoneState(operation: Operation) {
    this.storage.get('operation').then((operations) => {
      const storedOp = operations.filter((operat: Operation) => operat.id === operation.id)[0];
      storedOp.done = !storedOp.done;
      this.storage.set('operation', operations);
    });
  }

}
