import { Component, OnInit, AfterViewChecked, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SelectAreaService } from 'src/app/area/select-area.service';
import { Area } from 'src/app/model/area';
import { IonButton } from '@ionic/angular';
import { Operation } from 'src/app/model/operation';
import { OperationDbService } from '../operations-db.service';
import { Category, Vegetable } from '../../model/vegetable';

@Component({
  selector: 'form-operation',
  templateUrl: './form-operation.component.html',
  styleUrls: ['./form-operation.component.scss']
})
export class FormOperationComponent implements OnInit {
  @Input() operation: Operation;
  @Input() selectedArea: String;

  isNameModifiedByUser: boolean;

  varieties: String[];
  names: String[];
  suppliers: String[];
  labels: String[];

  categories: Category[];
  operations: Operation[];

  // variables to change the placeholder text on each autocomplete bar
  placeholderVariety = 'Variété';
  placeholderName = 'Nom';
  placeholderSupplier = 'Fournisseur';
  placeholderLabel = 'Libellé';

  constructor(private selectAreaService: SelectAreaService, private operationsDbService: OperationDbService) { }

  ngOnInit() {
    this.isNameModifiedByUser = false;

    this.operation.area = null ;

    if (this.selectedArea) {
      this.operation = this.selectAreaService.getOperation();
    }
    this.operationsDbService.getCategories().then((categoryList) => {
      this.categories = categoryList;
    });

    this.operationsDbService.getVegetables().then((vegetableList) => {
      this.varieties = vegetableList.map(vegetableList => vegetableList.variety);
      this.names = vegetableList.map(vegetableList => vegetableList.name);
    });

    this.operationsDbService.getSuppliers().then((supplierList) =>
      this.suppliers = supplierList.map(supplierList => supplierList.name));

    this.operationsDbService.getLabels().then((labelList) =>
      this.labels = labelList.map(labelList => labelList.name));

  }


  /**
   * Save the current operation in selectAreaService
   */
  saveOperation() {
    this.selectAreaService.setOperation(this.operation);
  }

  /**
   * Updates the variety when selected
   * @param value New variety
   */
  choosenOptionChangedVariety(value: String) {
    this.operation.vegetable.variety = value;
  }

  /**
   * Updates the name when selected
   * @param value new name
   */
  choosenOptionChangedName(value: String) {
    this.operation.vegetable.name = value;
  }

    /**
   * Updates the supplier when selected
   * @param value supplier
   */
  choosenOptionChangedSupplier(value: String) {
    this.operation.supplier.name = value;
  }

  /**
   * Updates the label when selected
   * @param value label
   */
  choosenOptionChangedLabel(value: String) {
    this.operation.label.name = value;
  }

}
