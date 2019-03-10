import { Injectable } from '@angular/core';
import { Operation, Label} from '../model/operation';
import { Vegetable, Category } from '../model/vegetable';
import { Area } from '../model/area';
import { Storage } from '@ionic/storage';

// pas réussi à exporter depuis spec
const defaultCategories: Category[] = [
  {id: 1, name: 'Solanacée'},
  {id: 2, name: 'Brassicacée'},
  {id: 3, name: 'Alliacée'},
  {id: 4, name: 'Apiacée'},
  {id: 5, name: 'Curcubitacée'},
  {id: 6, name: 'Crucifère'},
  {id: 7, name: 'Astéracée'}
];


// ------------ mock : à supprimer plus tard
const mockAreas: any[] = [
  {id: 1, name: 'Parcelle 1' },
  {id: 2, name: 'Serre 1', parentId: 1},
  {id: 3, name: 'Jardin 1', parentId: 2},
];

const mockLabels: Label[] = [
  {id: 1, name: 'Amendement'},
  {id: 2, name: 'Semis'},
  {id: 3, name: 'Désherbage'},
  {id: 4, name: 'Récolte'}
];

const mockVegetables: Vegetable[] = [
  {id: 1, variety: 'Courge Butternut', category: defaultCategories[4], name: 'Waltham'},
  {id: 2, variety: 'Chicorée Frisée', category: defaultCategories[6], name: 'Wallone'},
  {id: 3, variety: 'Laitue', category: defaultCategories[6], name: 'Batavia'},
  {id: 4, variety: 'Ail', category: defaultCategories[2], name: 'Blanc'}
];

const mockOperations: Operation[] = [
  {id: 1, date: '2019-03-13', label: mockLabels[0], vegetable: mockVegetables[0], area: mockAreas[2], observations: ''},
  {id: 2, date: '2019-03-15', label: mockLabels[1], vegetable: mockVegetables[1], area: mockAreas[2], observations: ''},
  {id: 3, date: '2019-03-20', label: mockLabels[2], vegetable: mockVegetables[2], area: mockAreas[2], observations: ''},
  {id: 4, date: '2019-03-25', label: mockLabels[3], vegetable: mockVegetables[3], area: mockAreas[2], observations: ''}
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
  initMocks() {
    this.storage.get('category').then((categories) => {
      if (categories === null) {
        this.storage.set('category', defaultCategories);
      }
    });
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('areas', mockAreas);
      }
    });
    this.storage.get('label').then((labels) => {
      if (labels === null) {
        this.storage.set('label', mockLabels);
      }
    });
    this.storage.get('vegetable').then((vegetables) => {
      if (vegetables === null) {
        this.storage.set('vegetable', mockVegetables);
      }
    });

    this.storage.get('operation').then((operations) => {
      if (operations === null) {
        this.storage.set('operation', mockOperations);
      }
    });
  }

  /**
   * Initialize the operations Storage key
   * This should be called at least on the first app launch
   */
  initOperations() {
    this.storage.get('category').then((categories) => {
      if (categories === null) {
        this.storage.set('category', defaultCategories);
      }
    });
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('areas', []);
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
   * Get an operation by its id
   * @param id the id of the operation to retrieve
   */
  async getOperationById(id: Number): Promise<Operation> {
    const operations = await this.storage.get('operation');
    return operations.filter((operation: Operation) => operation.id === id)[0];
  }



}
