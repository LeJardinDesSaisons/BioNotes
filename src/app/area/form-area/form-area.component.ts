import { Component, OnInit, Input } from '@angular/core';
import { AreaDbService } from '../area-db.service';
import { Area, Type } from '../../model/area';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.scss']
})
export class FormAreaComponent implements OnInit {

  @Input() area: Area;

  private areaTypes: Type[];
  private isNameModifiedByUser: boolean;

  constructor(private areaDbService: AreaDbService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isNameModifiedByUser = false;

    this.areaDbService.getTypes().then((types) => this.areaTypes = types);
  }

  /**
   * Update the name field based on the type and area number
   */
  updateName() {
    if ((!this.isNameModifiedByUser) && this.area.type.name
                                     && this.area.number !== undefined
                                     && this.area.number !== null) {
      this.area.name = `${this.area.type.name} ${this.area.number}`;
    }
  }

}
