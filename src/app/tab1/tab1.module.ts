import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PlanningComponent } from '../operations/planning/planning.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DetailsPageModule } from '../operations/details/details.module';
import { AddOperationPageModule } from './../operations/add-operation/add-operation.module';

const routes = [
  {
    path: '',
    component: Tab1Page,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VirtualScrollerModule,
    DetailsPageModule,
    AddOperationPageModule,
    RouterModule.forChild(routes)
  ],
  exports : [PlanningComponent],
  declarations: [Tab1Page, PlanningComponent]
})
export class Tab1PageModule {}
