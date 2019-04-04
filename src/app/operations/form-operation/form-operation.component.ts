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
export class FormOperationComponent implements OnInit, AfterViewChecked {
  @ViewChild(IonButton) ViewChild: IonButton;
  @Input() operation: Operation;

  categories: Category[];
  selectedArea: Area;
  /**
   * this boolean is used to know when we can retrieve the selected area in SelectAreaService
   * and resolve some error in the console with ngAfterViewChecked
   */
  checkView: Boolean;

  constructor(private selectAreaService: SelectAreaService, private operationsDbService: OperationDbService) { }

  ngOnInit() {
    this.checkView = false;
    this.operation.area = null ;
    this.selectedArea = null ;
    this.selectAreaService.setArea(null);
    this.selectAreaService.setOperation(null);
    this.operationsDbService.getCategories().then((categoryList) => this.categories = categoryList);
  }

  /**
   * When the vue is checked
   * If checkview is false, the component do not call selectAreaService
   * If Checkview is true, the component retrieve the saved operation with the selected area and
   * set CheckView at false if the area in SelectAreaService is null
   * This resolve some problem in the console log
   */
  ngAfterViewChecked() {
    if (this.checkView) {
      this.operation = this.selectAreaService.getOperation();
      if (this.selectAreaService.getArea != null) {
        this.selectedArea = this.operation.area ;
        this.checkView = false;
      }
    }
  }

  /**
   * Save the current operation in selectAreaService
   * and initialise at true the variable checkView
   */
  saveOperation() {
    this.selectAreaService.setOperation(this.operation);
    this.checkView = true;
  }



}
