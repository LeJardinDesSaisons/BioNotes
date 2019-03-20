import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PlanningComponent } from '../operations/planning/planning.component';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DetailsPageModule } from '../operations/details/details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VirtualScrollerModule,
    DetailsPageModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  exports : [PlanningComponent],
  declarations: [Tab1Page, PlanningComponent]
})
export class Tab1PageModule {}
