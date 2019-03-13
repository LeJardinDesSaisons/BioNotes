import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AreaDbService } from './../area-db.service';
import { Area, Type } from './../../model/area';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.page.html',
  styleUrls: ['./edit-area.page.scss'],
})
export class EditAreaPage implements OnInit {

  area: Area;
  parentNames: String[];

  constructor(private areaDbService: AreaDbService, private route: ActivatedRoute, private location: Location) {
    this.area = new Area();
    this.area.type = new Type();
  }

  ngOnInit() {
    const areaId: String = this.route.snapshot.paramMap.get('id');
    if (areaId) {
      this.getAreaAndParents(areaId);
    }
  }

  async getAreaAndParents(areaId: String) {
    this.area.id = +areaId;
    this.area = await this.areaDbService.getAreaById(this.area.id);
    this.parentNames = await this.areaDbService.getParentNames(this.area);
  }

  /**
   * Submit the new area to the database
   */
  submit() {
    if (this.area.name) {
      this.areaDbService.addType(this.area.type).then((type: Type) => {
        this.area.type = type;
        this.areaDbService.editArea(this.area);
        this.location.back();
      });
    }
  }

}
