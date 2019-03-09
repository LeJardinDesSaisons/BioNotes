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
  {id: 7, name: 'Astéracée'}
];


//------------ mock : à supprimer plus tard
const mockareas: any[] = [
  {id: 1, name: 'Parcelle 1' },
  {id: 2, name: 'Serre 1', parentId: 1},
  {id: 3, name: 'Jardin 1', parentId: 2},
];

const mocklabels: Label[] = [
  {id: 1, name: 'Amendement'},
  {id: 2, name: 'Semis'},
  {id: 3, name: 'Désherbage'},
  {id: 4, name: 'Récolte'}
];

const mockvegetables: Vegetable[] = [
  {id: 1, variety: 'Courge Butternut', category: defaultcategories[4], name: 'Waltham'},
  {id: 2, variety: 'Chicorée Frisée', category: defaultcategories[6], name: 'Wallone'},
  {id: 3, variety: 'Laitue', category: defaultcategories[6], name: 'Batavia'},
  {id: 4, variety: 'Ail', category: defaultcategories[2], name: 'Blanc'}
];

const mockoperations: Operation[] = [
  {id: 1, date: '2019-03-13', label: mocklabels[0], vegetable: mockvegetables[0], area: mockareas[2], observations: ''},
  {id: 2, date: '2019-03-15', label: mocklabels[1], vegetable: mockvegetables[1], area: mockareas[2], observations: ''},
  {id: 3, date: '2019-03-20', label: mocklabels[2], vegetable: mockvegetables[2], area: mockareas[2], observations: ''},
  {id: 4, date: '2019-03-25', label: mocklabels[3], vegetable: mockvegetables[3], area: mockareas[2], observations: ''}
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
    this.storage.get('category').then((categories) => {
      if (categories === null) {
        this.storage.set('category', defaultcategories);
      }
    });
    this.storage.get('area').then((areas) => {
      if (areas === null) {
        this.storage.set('areas', mockareas);
      }
    });
    this.storage.get('label').then((labels) => {
      if (labels === null) {
        this.storage.set('label', mocklabels);
      }
    });
    this.storage.get('vegetable').then((vegetables) => {
      if (vegetables === null) {
        this.storage.set('vegetable', mockvegetables);
      }
    });

    this.storage.get('operation').then((operations) => {
      if (operations === null) {
        this.storage.set('operation', mockoperations);
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

  /**
   * Fetch the date
   * @param id the id of the operation of the date we want to know
   */
  async getOperationDate(id: Number): Promise<String> {
    const operations = await this.storage.get('operation');
    const currDate: Operation = operations.filter((operation: Operation) => operation.id === id)[0];
    return currDate.date;
  }

  /**
   * Fetch the date
   * @param id the id of the operation of the date we want to know
   */
  async getOperationLabel(id: Number): Promise<String> {
    const operations = await this.storage.get('operation');
    const currDate: Operation = operations.filter((operation: Operation) => operation.id === id)[0];
    return currDate.date;
  }

}
