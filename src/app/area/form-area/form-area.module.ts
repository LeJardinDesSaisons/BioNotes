import { HelperTextComponent } from './../helper-text/helper-text.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutocompleteBarComponent } from '../autocomplete-bar/autocomplete-bar.component';
import { FormAreaComponent } from '../form-area/form-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [FormAreaComponent,  AutocompleteBarComponent, HelperTextComponent],
  exports: [FormAreaComponent,  AutocompleteBarComponent, HelperTextComponent],
})
export class FormAreaModule {}
