import { Operation, Label } from '../../model/operation';
import { Component, OnInit } from '@angular/core';
import { Vegetable, Category, Supplier } from 'src/app/model/vegetable';
import { OperationDbService } from '../operations-db.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.page.html',
  styleUrls: ['./add-operation.page.scss'],
})
export class AddOperationPage implements OnInit {

  operation: Operation;

  constructor(private operationDbService: OperationDbService, private navController: NavController) {
    this.operation = new Operation();
    this.operation.date = new Date().toISOString();
    this.operation.vegetable = new Vegetable();
    this.operation.vegetable.category = new Category();
    this.operation.supplier = new Supplier();
    this.operation.label = new Label();
  }

  ngOnInit() {
  }

  /**
   * Submits the new operation to the database.
   */
  submit() {
    if (this.operation.label.name) {
      this.addDependencies().then(() => {
        this.operationDbService.addVegetable(this.operation.vegetable).then((vegetable: Vegetable) => {
            this.operation.vegetable = vegetable;
            this.operationDbService.addOperation(this.operation);
            this.navController.navigateBack('tabs/tab1');
          });
      });
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

}
