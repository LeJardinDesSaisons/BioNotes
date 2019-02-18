import { Area, Type } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {

  private area: Area;
  private parentNames: String[];

  constructor(private areaDbService: AreaDbService, private route: ActivatedRoute, private location: Location) {
    this.area = new Area();
    this.area.type = new Type();
  }

  ngOnInit() {
    const parentId: String = this.route.snapshot.paramMap.get('parentid');
    if (parentId) {
      this.area.parentId = +parentId;
      this.areaDbService.getParentNames(this.area).then((names: String[]) => this.parentNames = names);
    }
  }

  /**
   * Submit the new area to the database
   */
  submit() {
    if (this.area.name) {
      this.areaDbService.addType(this.area.type).then((type: Type) => {
        this.area.type = type;
        this.areaDbService.addArea(this.area);
        this.location.back();
      });
    }
  }

}
