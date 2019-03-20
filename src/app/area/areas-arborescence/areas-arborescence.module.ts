// import { ViewAreasComponent } from '../view-areas/view-areas.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AreasArborescencePage } from './areas-arborescence.page';
import { ViewAreasModule } from '../view-areas/view-areas.module';


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
    ViewAreasModule
  ],
  declarations: [AreasArborescencePage],
})
export class AreasArborescencePageModule {}
