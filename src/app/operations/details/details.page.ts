import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationDbService } from '../operations-db.service';
import { ActivatedRoute } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @ViewChild('checkbox') checkbox: IonCheckbox;

  operation: Operation;
  checkboxtext: String;

  constructor(private operationDbService: OperationDbService, private route: ActivatedRoute) {
    this.operation = new Operation();
  }

  ngOnInit() {
    const operationId: String = this.route.snapshot.paramMap.get('id');
    if (operationId) {
      this.getOperationInformations(operationId);
    }
    this.loadCheckbox();
  }

  async getOperationInformations(areaId: String) {
    this.operation.id = +areaId;
    this.operation = await this.operationDbService.getOperationById(this.operation.id);
  }

  private loadCheckbox() {
    if (this.operation.done === true) {
      this.checkbox.checked = true;
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.checkbox.checked = false;
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

  changeCheckbox() {
    if (this.checkbox.checked === true) {
      this.operation.done = true;
      this.checkboxtext = ' Opération effectuée ';
    } else {
      this.operation.done = false;
      this.checkboxtext = ' Opération non effectuée ';
    }
  }

}
