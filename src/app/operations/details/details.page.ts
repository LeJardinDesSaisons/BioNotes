import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { AreaDbService } from '../../area/area-db.service';
import { ActivatedRoute } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { Area } from '../../model/area';
import { IonCheckbox } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @ViewChild('checkbox') checkbox: IonCheckbox;

  operation: Operation;
  parentAreas: String[][];
  checkboxtext: String;
  formatDate: String;

  constructor(private operationDbService: OperationDbService, private areaDbService: AreaDbService, private route: ActivatedRoute) {
    this.operation = new Operation();
    this.formatDate = '';
    this.parentAreas = [];
  }

  ngOnInit() {
    const operationId: String = this.route.snapshot.paramMap.get('id');
    if (operationId) {
      this.getOperationInformations(operationId);
    }
    this.loadCheckbox();
   }

  async getOperationInformations(operationId: String) {
    this.operation.id = +operationId;
    this.operation = await this.operationDbService.getOperationById(this.operation.id);

    const dateString = this.operation.date.toString(); // date into the string format
    this.formatDate = moment(dateString, 'YYYY-MM-DD', 'fr').format('Do MMMM YYYY'); // date formatted for display
    this.areaDbService.getParentNames(this.operation.area).then((names: String[]) => {
      this.parentAreas[+this.operation.id] = names;
    });
  }

  /*
  * loads the checkbox value according to
  * done of the operation
  */
  private loadCheckbox() {
    if (this.operation.done === true) {
      this.checkbox.checked = true;
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.checkbox.checked = false;
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

  /*
  * change the value of done of the operation
  * accodring to the state of the checkbox
  */
  private changeCheckbox() {
    if (this.checkbox.checked === true) {
      this.operation.done = true;
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.operation.done = false;
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

}
