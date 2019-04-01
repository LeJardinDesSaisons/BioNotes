import { Component, OnInit, AfterViewChecked, ViewChild, AfterViewInit } from '@angular/core';
import { SelectAreaService } from 'src/app/area/select-area.service';
import { Area } from 'src/app/model/area';
import { Location } from '@angular/common';
import { SelectAreaPage } from 'src/app/area/select-area/select-area.page';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit, AfterViewChecked {
  @ViewChild(IonButton) ViewChild: IonButton;
  selectedArea: Area;

  constructor(private selectAreaService: SelectAreaService, private location: Location) { }

  ngOnInit() {
    this.selectedArea = null ;
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    this.getAreaFromService();
    console.log(this.selectedArea);
  }



  /**
   * Get the selected area
   */
  getAreaFromService() {
    this.selectedArea = this.selectAreaService.getArea();
  }



}
