import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectAreaPageModule } from 'src/app/area/select-area/select-area.module';
import { AutocompleteBarModule } from './../../autocomplete-bar/autocomplete-bar.module';
import { FormOperationComponent } from './form-operation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SelectAreaPageModule,
    RouterModule,
    AutocompleteBarModule,
  ],
  declarations: [FormOperationComponent],
  exports: [FormOperationComponent]
})
export class FormOperationModule {}
