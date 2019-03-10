import { Component, OnInit } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { Operation, Label } from '../../model/operation';
import { Vegetable, Category } from '../../model/vegetable';
import { Area } from '../../model/area';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  operation: Operation;
  operationsStored: Operation[];
  test: 'test';

  constructor(private operationDbService: OperationDbService) {
      this.operation = new Operation();
      this.operation.area = new Area ();
      this.operation.label = new Label ();
      this.operation.vegetable = new Vegetable ();
      this.operation.vegetable.category = new Category();
   }

  ngOnInit() {
    this.operationDbService.getOperations().then((operations) => this.operationsStored = operations);
  }

}
