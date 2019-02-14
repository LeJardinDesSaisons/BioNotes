import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AddAreaPageModule } from '../area/add-area/add-area.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'area/list',
    pathMatch: 'full',
  },
  {
    path: 'area/list',
    component: Tab2Page,
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddAreaPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
