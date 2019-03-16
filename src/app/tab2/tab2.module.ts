import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AddAreaPageModule } from '../area/add-area/add-area.module';
import { AreasArborescencePageModule } from '../area/areas-arborescence/areas-arborescence.module';


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
    AreasArborescencePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
