import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddAreaPage } from './add-area.page';
import { FormAreaModule } from './../form-area/form-area.module';


const routes: Routes = [
  {
    path: 'area/add',
    component: AddAreaPage,
  },
  {
    path: 'area/add/:parentid',
    component: AddAreaPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormAreaModule,
  ],
  declarations: [AddAreaPage]
})
export class AddAreaPageModule {}
