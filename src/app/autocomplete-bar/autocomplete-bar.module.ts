import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteBarComponent } from './autocomplete-bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [AutocompleteBarComponent],
  exports: [AutocompleteBarComponent]
})
export class AutocompleteBarModule {}
