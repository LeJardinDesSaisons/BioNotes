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
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AreasArborescencePage]
})
export class AreasArborescencePageModule {}
