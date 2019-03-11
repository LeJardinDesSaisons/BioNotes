import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAreaPage } from './add-area.page';
import { FormAreaComponent } from '../form-area/form-area.component';
import { AutocompleteBarComponent } from '../autocomplete-bar/autocomplete-bar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  {
    path: 'area/add',
    component: AddAreaPage,
  },
  {
    path: 'area/add/:parentid',
    component: AddAreaPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AddAreaPage, FormAreaComponent, AutocompleteBarComponent]
})
export class AddAreaPageModule {}
