import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddOperationPage } from './add-operation.page';
import { FormOperationModule } from '../form-operation/form-operation.module';

const routes: Routes = [
  {
    path: 'operations/add',
    component: AddOperationPage
  },
  {
    path: 'operations/add/:areaselected',
    component: AddOperationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormOperationModule
  ],
  declarations: [AddOperationPage]
})
export class AddOperationPageModule {}
