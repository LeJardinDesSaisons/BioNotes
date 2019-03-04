import { OperationDbService } from './operations-db.service';
import { async, fakeAsync, tick } from '@angular/core/testing';

describe('OperationDbService', () => {

  let getStub: any, setStub: any;
  let service: OperationDbService;

  const areas: any[] = [
    {id: 1, name: 'Parcelle 1' },
    {id: 2, name: 'Serre 1', parentId: 1},
    {id: 3, name: 'Jardin 1', parentId: 2},
  ];

  const labels: any[] = [
    {id: 1, name: 'Amendement'},
    {id: 2, name: 'Semis'},
    {id: 3, name: 'Désherbage'},
    {id: 4, name: 'Récolte'}
  ];

  const categories: any[] = [
    {id: 1, name: 'Solanacée'},
    {id: 2, name: 'Brassicacée'},
    {id: 3, name: 'Alliacée'},
    {id: 4, name: 'Apiacée'},
    {id: 5, name: 'Curcubitacée'},
    {id: 6, name: 'Crucifère'},
    {id: 7, name: 'Astéracées'}
  ];

  const vegetables: any[] = [
    {id: 1, variety: 'Courge Butternut', category: categories[4].name, name: 'Waltham'}, //butternut
    {id: 2, variety: 'Chicorée Frisée', category: categories[6].name, name: 'Wallone'}, //chicorée frisée
    {id: 3, variety: 'Laitue', category: categories[6].name, name: 'Batavia'}, //laitue
    {id: 4, variety: 'Ail', category: categories[2].name, name: 'Blanc'}
  ];

});