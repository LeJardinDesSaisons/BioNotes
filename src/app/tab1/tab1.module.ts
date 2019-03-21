import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PlanningComponent } from '../operations/planning/planning.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DetailsPageModule } from '../operations/details/details.module';
import { DetailsPage } from '../operations/details/details.page';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VirtualScrollerModule,
    DetailsPageModule,
    Storage,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  exports : [PlanningComponent, DetailsPageModule],
  declarations: [Tab1Page, PlanningComponent, DetailsPageModule]
})
export class Tab1PageModule {}
