import { ViewAreasComponent } from './view-areas.component';
import { AreaPopoverComponent } from '../area-popover/area-popover.component';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasArborescencePage } from '../areas-arborescence/areas-arborescence.page';

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
        IonicModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ViewAreasComponent, AreaPopoverComponent],
    exports: [ViewAreasComponent, AreaPopoverComponent]
})
export class ViewAreasModule {}

