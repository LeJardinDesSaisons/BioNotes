import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditAreaPage } from './edit-area.page';
import { FormAreaModule } from './../form-area/form-area.module';


const routes: Routes = [
  {
    path: 'area/edit/:id',
    component: EditAreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormAreaModule,
  ],
  declarations: [EditAreaPage]
})
export class EditAreaPageModule {}
