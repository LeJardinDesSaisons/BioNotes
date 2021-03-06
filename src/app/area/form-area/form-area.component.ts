import { Component, OnInit, Input } from '@angular/core';
import { AreaDbService } from '../area-db.service';
import { Area } from '../../model/area';

@Component({
  selector: 'form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.scss']
})
export class FormAreaComponent implements OnInit {

  @Input() area: Area;

  areaTypes: String[];
  isNameModifiedByUser: boolean;

  constructor(private areaDbService: AreaDbService) { }

  ngOnInit() {
    this.isNameModifiedByUser = false;

    this.areaDbService.getTypes().then((types) => this.areaTypes = types.map(type => type.name));
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

  /**
   * Updates the name of the area when its type is changed via autocompletion.
   * @param value New type
   */
  choosenOptionChanged(value: String) {
    this.area.type.name = value;
    this.updateName();
  }
}
