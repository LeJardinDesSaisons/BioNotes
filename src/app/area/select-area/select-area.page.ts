import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AreaDbService } from '../area-db.service';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/model/area';
import { SelectAreaService } from '../select-area.service';

@Component({
  selector: 'app-select-area',
  templateUrl: './select-area.page.html',
  styleUrls: ['./select-area.page.scss'],
})
export class SelectAreaPage implements OnInit {

  childAreas: Area[] ;
  parentArea: Area ;
  title: String ;
  parentId: number;
  link: String;

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute, private selectAreaService: SelectAreaService,
    private navController: NavController ) {
    this.title = 'SÉLECTION D\'UN ESPACE';
    this.link = '/tabs/tab2/area/select/';
   }

  ngOnInit() {
    this.checkAreas();
  }

  /**
   * Set the areas based on the parent's ID if it exists
   * Check if we are on the root's arborescence or not
   */
  private checkAreas() {
    this.parentId = +this.route.snapshot.paramMap.get('parentid');

    if (this.parentId) {
      this.areaDBService.getAreaById(this.parentId).then((area: Area) => {
        this.parentArea = area;
      });
      this.areaDBService.getChildAreaById(this.parentId).then((areas: Area[]) => {
        this.childAreas = areas;
      });
    } else {
      this.areaDBService.getRootArea().then((areas: Area[]) => {
        this.childAreas = areas;
      });
    }
  }

  /**
   * Get the selected area,update area of SelectAreaService
   * and return to the add-operation view
   */
  private selectArea() {
    this.selectAreaService.setArea(this.parentArea);
    this.navController.navigateBack('/add-operation');
  }

  /**
   * Return to add-operation without an selected area
   */
  private goBack() {
    this.navController.navigateBack('/add-operation');
  }
}
