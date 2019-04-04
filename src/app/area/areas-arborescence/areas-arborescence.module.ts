import { ViewAreasModule } from '../view-areas/view-areas.module';
import { FormAreaModule } from './../form-area/form-area.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreasArborescencePage } from './areas-arborescence.page';


const routes: Routes = [
  {
    path: 'area/list',
    component: AreasArborescencePage
  },
  {
    path: 'area/list/:parentid',
    component: AreasArborescencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ViewAreasModule,
    FormAreaModule
  ],
  declarations: [AreasArborescencePage],
})
export class AreasArborescencePageModule {}
