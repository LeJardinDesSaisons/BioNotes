import { Component, OnInit, AfterViewChecked, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SelectAreaService } from 'src/app/area/select-area.service';
import { Area } from 'src/app/model/area';
import { IonButton } from '@ionic/angular';
import { Operation } from 'src/app/model/operation';
import { OperationDbService } from '../operations-db.service';
import { Category } from '../../model/vegetable';

@Component({
  selector: 'form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit {
  //@ViewChild(IonButton) ViewChild: IonButton;
  @Input() operation: Operation;
  @Input() selectedArea: String;

  categories: Category[];

  constructor(private selectAreaService: SelectAreaService, private operationsDbService: OperationDbService) { }

  ngOnInit() {
    this.operation.area = null ;

    if (this.selectedArea) {
      this.operation = this.selectAreaService.getOperation();
    }
    this.operationsDbService.getCategories().then((categoryList) => this.categories = categoryList);

  }


  /**
   * Save the current operation in selectAreaService
   */
  saveOperation() {
    this.selectAreaService.setOperation(this.operation);
  }



}
