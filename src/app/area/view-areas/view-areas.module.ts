import { ViewAreasComponent } from './view-areas.component';
import { AreaPopoverComponent } from '../area-popover/area-popover.component';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasArborescencePage } from '../areas-arborescence/areas-arborescence.page';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
    ],
    declarations: [ViewAreasComponent, AreaPopoverComponent],
    exports: [ViewAreasComponent],
    entryComponents: [AreaPopoverComponent],
})
export class ViewAreasModule {}

