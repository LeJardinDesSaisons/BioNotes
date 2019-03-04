import { Type } from './../model/area';
import { Injectable } from '@angular/core';
import { Operation } from '../model/operations';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OperationDbService {

  constructor(public storage: Storage) { }

  /**
   * Initialize the area Storage key
   * This should be called at least on the first app launch
   */
  }
