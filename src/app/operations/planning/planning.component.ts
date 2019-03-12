import { Component, OnInit } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { AreaDbService } from '../../area/area-db.service';
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
  parentAreas: String[][];


  constructor(private operationDbService: OperationDbService, private areaDbService: AreaDbService) {
      this.operation = new Operation();
      this.operation.area = new Area();
      this.parentAreas = [];
   }

  ngOnInit() {
    this.operationDbService.getOperations().then((operations) => {
      this.operationsStored = operations;

      this.operationsStored.sort((op1,op2) =>{
        const momop1=moment("" + op1.date, 'YYYY-MM-DD');
        const momop2=moment("" + op2.date, 'YYYY-MM-DD');
        if (momop1.isBefore(momop2)) {return -1; }
        else {
          if (momop1.isAfter(momop2)) {return 1; }
          else {
            return 0;
          }
        }
      });
      let previousDate;
      this.operationsStored.forEach(operasto => {
        // date storing and formatting
        const dateString = operasto.date.toString(); // date into the string format
        const formatDate = moment(dateString, 'YYYY-MM-DD', 'fr').format("Do MMMM YYYY"); // date formatted for display

        if(formatDate!==previousDate){
          operasto.date = formatDate;
          previousDate = operasto.date;
        }
        else{
          operasto.date = null;
        }

        this.areaDbService.getParentNames(operasto.area).then((names: String[]) => {
          this.parentAreas[+operasto.id] = names;
        });
      });

    });
  }

}
