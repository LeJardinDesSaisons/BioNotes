import { FormOperationComponent } from './form-operation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { SelectAreaPageModule } from 'src/app/area/select-area/select-area.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SelectAreaPageModule,
        RouterModule,
    ],
    declarations: [FormOperationComponent],
    exports: [FormOperationComponent]
})
export class FormOperationModule {}
