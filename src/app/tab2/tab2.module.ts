import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AddAreaPageModule } from '../area/add-area/add-area.module';
import { EditAreaPageModule } from '../area/edit-area/edit-area.module';
import { AreasArborescencePageModule } from '../area/areas-arborescence/areas-arborescence.module';
import { SelectAreaPageModule } from '../area/select-area/select-area.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'options',
    pathMatch: 'full',
  },
  {
    path: 'options',
    component: Tab2Page,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddAreaPageModule,
    EditAreaPageModule,
    AreasArborescencePageModule,
    SelectAreaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
