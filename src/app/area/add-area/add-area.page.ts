import { Area, Type } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {

  area: Area;
  parentNames: String[];
  parentId: String;

  constructor(private areaDbService: AreaDbService, private route: ActivatedRoute, private navController: NavController) {
    this.area = new Area();
    this.area.type = new Type();
  }

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('parentid');
    if (this.parentId) {
      this.area.parentId = +this.parentId;
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
        if (this.parentId) {
          this.navController.navigateBack('/tabs/tab2/area/list/' + this.parentId);
        } else {
          this.navController.navigateBack('/tabs/tab2/area/list');
        }
      });
    }
  }

}
