import { Operation } from '../../model/operation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.page.html',
  styleUrls: ['./add-operation.page.scss'],
})
export class AddOperationPage implements OnInit {

  operation: Operation;

  constructor() {
    this.operation = new Operation();
    this.operation.date = new Date().toISOString();
  }

  ngOnInit() {
  }

}
