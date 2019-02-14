import { Component, OnInit, Input } from '@angular/core';
import { AreaDbService } from '../area-db.service';
import { Area } from '../../model/area';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.scss']
})
export class FormAreaComponent implements OnInit {

  @Input() area: Area;

  private areaTypes: String[];
  private isNameModifiedByUser: boolean;

  constructor(private areaDbService: AreaDbService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isNameModifiedByUser = false;

    this.areaDbService.getAreaTypes().then((areas) => this.areaTypes = areas);
  }

  /**
   * Update the name field based on the type and area number
   */
  updateName() {
    if ((!this.isNameModifiedByUser) && this.area.type
                                     && this.area.number !== undefined
                                     && this.area.number !== null) {
      this.area.name = `${this.area.type} ${this.area.number}`;
    }
  }

}
