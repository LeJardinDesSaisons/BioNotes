import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { AreaDbService } from '../../area/area-db.service';
import { Operation} from '../../model/operation';
import { Area } from '../../model/area';
import * as moment from 'moment';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  @ViewChild(VirtualScrollerComponent)
  private virtualScroller: VirtualScrollerComponent;

  operation: Operation;
  operationsStored: Operation[];
  parentAreas: String[][];
  currentId = null;
  tempDate = '3000-12-12';

  constructor(private operationDbService: OperationDbService, private areaDbService: AreaDbService,
              public actionSheetController: ActionSheetController, private router: Router) {
      this.operation = new Operation();
      this.operation.area = new Area();
      this.parentAreas = [];
   }

  ngOnInit() {
    this.operationDbService.getOperations().then((operations) => {
      this.operationsStored = operations;

      this.sortByDates();

      this.formatDatesAndGetParentAreas();

      this.virtualScroller.scrollToIndex(this.currentId);
    });
  }

  /**
   * sorts all the operations by their date
   * if a date already exists, the date is set to null so an operation isn't displayed twice
   */
  private sortByDates() {
    this.operationsStored.sort((op1, op2) => {
      const momop1 = moment('' + op1.date, 'YYYY-MM-DD');
      const momop2 = moment('' + op2.date, 'YYYY-MM-DD');
      if (momop1.isBefore(momop2)) { return -1; }
      if (momop1.isAfter(momop2)) { return 1;
        } else { return 0; }
    });
  }

  /**
   * formats the dates to a humanly readable format
   * compares the dates and get the date of the day or next day
   * if date of the day doesn't exist
   * then fetches the parents names of the operation
   */
  private formatDatesAndGetParentAreas() {
    let previousDate;
    this.operationsStored.forEach(operasto => {
      // date storing and formatting
      const dateString = operasto.date.toString(); // date into the string format
      const formatDate = moment(dateString, 'YYYY-MM-DD', 'fr').format('Do MMMM YYYY'); // date formatted for display

      if ( formatDate !== previousDate) {
        operasto.date = formatDate;
        previousDate = operasto.date;
      } else {
        operasto.date = null;
      }

      if ( moment(dateString).isSameOrAfter(moment().format('YYYY-MM-DD')) && moment(dateString).isBefore(this.tempDate) ) {
        this.tempDate = dateString;
        this.currentId = operasto.id;
      }

      this.areaDbService.getParentNames(operasto.area).then((names: String[]) => {
        this.parentAreas[+operasto.id] = names;
      });
    });

  }

  async displayActionSheet(ev: any, operation: Operation) {
    const actionSheet = await this.actionSheetController.create({
      header: operation.label.name + ' ' + operation.vegetable.variety + ' ' + operation.vegetable.name,
      buttons: [{
        text: 'Détails',
        icon: 'more',
        handler: () => {
          this.goToDetails(operation.id.toString());
        }
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  goToDetails(route: string) {
    this.router.navigateByUrl('/tabs/tab1/operations/details/' + route);
  }

}
