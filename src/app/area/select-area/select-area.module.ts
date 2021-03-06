import { ViewAreasModule } from '../view-areas/view-areas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectAreaPage } from './select-area.page';
import { FormAreaModule } from '../form-area/form-area.module';


export const routes: Routes = [
  {
    path: 'area/select',
    component: SelectAreaPage
  },
  {
    path: 'area/select/:parentid',
    component: SelectAreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAreasModule,
    FormAreaModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectAreaPage]
})
export class SelectAreaPageModule {}
