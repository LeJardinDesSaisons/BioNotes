import { FormOperationComponent } from './form-operation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { SelectAreaPageModule } from 'src/app/area/select-area/select-area.module';
import { AutocompleteBarComponent } from '../autocomplete-bar/autocomplete-bar.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SelectAreaPageModule,
        RouterModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations: [FormOperationComponent,  AutocompleteBarComponent],
    exports: [FormOperationComponent,  AutocompleteBarComponent]
})
export class FormOperationModule {}
