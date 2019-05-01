import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormAreaComponent } from '../form-area/form-area.component';
import { AutocompleteBarModule } from './../../autocomplete-bar/autocomplete-bar.module';
import { HelperTextComponent } from './../helper-text/helper-text.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutocompleteBarModule,
  ],
  declarations: [FormAreaComponent, HelperTextComponent],
  exports: [FormAreaComponent, HelperTextComponent],
})
export class FormAreaModule {}
