import { Operation, Label} from '../model/operation';
import { Vegetable, Category, Supplier } from '../model/vegetable';

export const defaultCategories: Category[] = [
    {id: 1, name: 'Solanacée'},
    {id: 2, name: 'Brassicacée'},
    {id: 3, name: 'Alliacée'},
    {id: 4, name: 'Apiacée'},
    {id: 5, name: 'Cucurbitacée'},
    {id: 6, name: 'Crucifère'},
    {id: 7, name: 'Astéracée'},
    {id: 8, name: 'Autre'}
  ];

export const mockAreas: any[] = [
    {id: 1, name: 'Parcelle 1' },
    {id: 2, name: 'Serre 1', parentId: 1},
    {id: 3, name: 'Jardin 1', parentId: 2},
  ];

 export const mockLabels: Label[] = [
    {id: 1, name: 'Amendement'},
    {id: 2, name: 'Semis'},
    {id: 3, name: 'Désherbage'},
    {id: 4, name: 'Récolte'}
  ];

  export const mockSuppliers: Supplier[] = [
    {id: 1, name: 'Agros'},
    {id: 2, name: 'Famille'},
    {id: 3, name: 'Approv'}
  ];

 export const mockVegetables: Vegetable[] = [
    {id: 1, variety: 'Courge Butternut', category: defaultCategories[4], name: 'Waltham'},
    {id: 2, variety: 'Chicorée Frisée', category: defaultCategories[6], name: 'Wallone'},
    {id: 3, variety: 'Laitue', category: defaultCategories[6], name: 'Batavia'},
    {id: 4, variety: 'Ail', category: defaultCategories[2], name: 'Blanc'}
  ];

 export const mockOperations: Operation[] = [
    {id: 1, date: '2019-03-10',
    label: mockLabels[0], vegetable: mockVegetables[0], supplier: mockSuppliers[0], area: mockAreas[2], observations: 'blabla', done: true},
    {id: 2, date: '2019-03-15',
    label: mockLabels[1], vegetable: mockVegetables[1], supplier: mockSuppliers[0], area: mockAreas[2], observations: 'yeah', done: false},
    {id: 3, date: '2019-03-20',
    label: mockLabels[2], vegetable: mockVegetables[2], supplier: mockSuppliers[0], area: mockAreas[2], observations: 'cool', done: false},
    {id: 4, date: '2019-03-25',
    label: mockLabels[3], vegetable: mockVegetables[3], supplier: mockSuppliers[0], area: mockAreas[2], observations: '!!!', done: false},
    {id: 5, date: '2019-03-9',
    label: mockLabels[0], vegetable: mockVegetables[0], supplier: mockSuppliers[1], area: mockAreas[1], observations: 'okok', done: true},
    {id: 6, date: '2019-03-15',
    label: mockLabels[1], vegetable: mockVegetables[3], supplier: mockSuppliers[1], area: mockAreas[1], observations: 'ok', done: false},
    {id: 7, date: '2019-03-20',
    label: mockLabels[2], vegetable: mockVegetables[0], supplier: mockSuppliers[1], area: mockAreas[1], observations: 'check', done: false},
    {id: 8, date: '2019-03-25',
    label: mockLabels[3], vegetable: mockVegetables[2], supplier: mockSuppliers[1], area: mockAreas[1], observations: 'ok', done: false},
    {id: 9, date: '2019-03-16',
    label: mockLabels[2], vegetable: mockVegetables[1], supplier: mockSuppliers[2], area: mockAreas[1], observations: 'yeah', done: false},
    {id: 10, date: '2019-03-10',
    label: mockLabels[3], vegetable: mockVegetables[2], supplier: mockSuppliers[2], area: mockAreas[1], observations: 'truc', done: false},
    {id: 11, date: '2019-03-7',
    label: mockLabels[2], vegetable: mockVegetables[1], supplier: mockSuppliers[2], area: mockAreas[1], observations: 'blabla', done: true},
    {id: 12, date: '2019-03-9',
    label: mockLabels[3], vegetable: mockVegetables[2], supplier: mockSuppliers[2], area: mockAreas[1], observations: 'cool', done: false}
  ];
