import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OperationPopoverComponent } from './../operation-popover/operation-popover.component';
import { DetailsPage } from './details.page';


const routes: Routes = [
  {
    path: 'operations/details',
    component: DetailsPage,
  },
  {
    path: 'operations/details/:id',
    component: DetailsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage, OperationPopoverComponent],
  entryComponents: [OperationPopoverComponent]
})
export class DetailsPageModule {}
