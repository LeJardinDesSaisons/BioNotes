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

  constructor(private selectAreaService: SelectAreaService, private operationsDbService: OperationDbService) { }

  ngOnInit() {
    this.operation.area = null ;
    this.selectedArea = null ;
    this.selectAreaService.setArea(null);
    this.selectAreaService.setOperation(null);
    this.operationsDbService.getCategories().then((categoryList) => this.categories = categoryList);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    this.getAreaFromService();
    this.operation = this.selectAreaService.getOperation();
    //this.operation.area = this.selectedArea ;
    //console.log(this.operation);
    //console.log(this.selectedArea);
  }



  /**
   * Get the selected area
   */
  getAreaFromService() {
    this.selectedArea = this.selectAreaService.getArea();
  }

  saveOperation() {
    this.selectAreaService.setOperation(this.operation);
  }



}
