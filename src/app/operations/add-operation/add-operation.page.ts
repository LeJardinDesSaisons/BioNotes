import { Operation, Label } from '../../model/operation';
import { Component, OnInit } from '@angular/core';
import { Vegetable, Category, Supplier } from 'src/app/model/vegetable';
import { OperationDbService } from '../operations-db.service';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SelectAreaService } from 'src/app/area/select-area.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.page.html',
  styleUrls: ['./add-operation.page.scss'],
})
export class AddOperationPage implements OnInit {

  operation: Operation;
  selectedArea: String;

  constructor(private operationDbService: OperationDbService, private navController: NavController,
    private route: ActivatedRoute,
    private selectAreaService: SelectAreaService) {
    this.operation = new Operation();
    this.operation.date = new Date().toISOString();
    this.operation.vegetable = new Vegetable();
    this.operation.vegetable.category = new Category();
    this.operation.supplier = new Supplier();
    this.operation.label = new Label();
    if (this.route.snapshot.paramMap.get('areaselected')) {
      this.selectedArea = this.route.snapshot.paramMap.get('areaselected');
    } else {
      this.selectedArea = null;
    }
  }

  ngOnInit() {
  }

  /**
   * Submits the new operation to the database.
   */
  async submit() {

    if (this.selectAreaService.getOperation() !== null ) {
      this.operation = await this.selectAreaService.getOperation();
    }

    if (this.operation.label.name) {
      await this.addDependencies();
      this.operation.vegetable = await this.operationDbService.addVegetable(this.operation.vegetable);
      this.operation = await this.operationDbService.addOperation(this.operation);
      await this.selectAreaService.setOperation(null);
      this.navController.navigateBack('/tabs/tab1/' + this.operation.id);
    }
  }

  /**
   * Adds the operations's label, supplier, and its vegetable's category to the database.
   */
  async addDependencies() {
    if (this.operation.label.name) {
      this.operation.label = await this.operationDbService
        .addNamedDbObject('label', this.operation.label);
    }
    if (this.operation.vegetable.category.name) {
      this.operation.vegetable.category = await this.operationDbService
        .addNamedDbObject('category', this.operation.vegetable.category);
    }
    if (this.operation.supplier.name) {
      this.operation.supplier = await this.operationDbService
        .addNamedDbObject('supplier', this.operation.supplier);
    }
  }

  async goBack() {
    await this.selectAreaService.setOperation(null);
  }
}
