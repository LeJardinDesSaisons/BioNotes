import { Component, OnInit } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { Operation, Label } from '../../model/operation';
import { Vegetable, Category } from '../../model/vegetable';
import { Area } from '../../model/area';
import * as moment from 'moment';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  operation: Operation;
  operationsStored: Operation[];
  dates = new Array();

  constructor(private operationDbService: OperationDbService) {
      this.operation = new Operation();
   }

  ngOnInit() {
    this.operationDbService.getOperations().then((operations) => {
      this.operationsStored = operations;

      this.dates = [];

      this.operationsStored.forEach(operasto => {
        const dateString = operasto.date.toString(); // date into the string format
        const formatDates = moment(dateString, 'YYYY-MM-DD', 'fr').format("Do MMMM YYYY"); // date formatted for display
        const stockedDate = { // object that will be sent to the view
          string: dateString,
          format: formatDates
        };
        this.dates.push(stockedDate);
      });

    });



  }

}
