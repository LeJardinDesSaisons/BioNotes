import { Dialogs } from '@ionic-native/dialogs/ngx';
import { OperationPopoverComponent } from './../operation-popover/operation-popover.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { AreaDbService } from '../../area/area-db.service';
import { ActivatedRoute } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { Area } from '../../model/area';
import { IonCheckbox, PopoverController } from '@ionic/angular';
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

  constructor(private operationDbService: OperationDbService,
              private areaDbService: AreaDbService,
              private route: ActivatedRoute,
              public popoverController: PopoverController) {
    this.operation = new Operation();
    this.formatDate = '';
    this.parentAreas = [];
  }

  ngOnInit() {
    const operationId: String = this.route.snapshot.paramMap.get('id');
    if (operationId) {
      this.getOperationInformations(operationId);
    }
   }

  /**
   * fetches the informations of the operation
   * to display its details
   * @param operationId id of the operation that we fetch the detail of
   */
  async getOperationInformations(operationId: String) {
    this.operation.id = +operationId;
    this.operation = await this.operationDbService.getOperationById(this.operation.id);

    const dateString = this.operation.date.toString(); // date into the string format
    this.formatDate = moment(dateString, 'YYYY-MM-DD', 'fr').format('Do MMMM YYYY'); // date formatted for display
    this.areaDbService.getParentNames(this.operation.area).then((names: String[]) => {
      this.parentAreas[+this.operation.id] = names;
    });
    this.loadCheckbox();
  }

  /*
  * loads the checkbox value according to
  * done of the operation
  */
  private loadCheckbox() {
    if (this.operation.done) {
      this.checkbox.checked = true;
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.checkbox.checked = false;
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

  /*
  * change the value of done of the operation
  * according to the state of the checkbox
  */
  changeCheckbox() {
    this.operationDbService.toggleDoneState(this.operation);
    if (this.checkbox.checked) {
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

  /**
   * Open an OperationPopoverComponent
   * @param ev the DOM event
   */
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OperationPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: { 'operationId' : this.operation.id },
    });
    return await popover.present();
  }

}
