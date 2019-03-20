import { AreaPopoverComponent } from './../area-popover/area-popover.component';
import { Area } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-areas-arborescence',
  templateUrl: './areas-arborescence.page.html',
  styleUrls: ['./areas-arborescence.page.scss'],
})
export class AreasArborescencePage implements OnInit {

  childAreas: Area[] ;
  parentArea: Area ;
  title: String ;
  parentId: number;
  /**
   * This variable permit to check if the page is created (on Initialization) or if we return to it
   */
  init = true;

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute, public popoverController: PopoverController) {
    this.title = 'Configuration des espaces';
  }

  ngOnInit() {
    if (this.init) {
      this.checkAreas();
    }
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
        console.log('areas' + this.childAreas);
      });
    } else {
      this.areaDBService.getRootArea().then((areas: Area[]) => {
        this.childAreas = areas;
        console.log('areas' + this.childAreas);
      });
    }
  }

  /**
   * When we enter in the tabs
   */
  ionViewDidEnter() {
    if (!this.init) {
      this.checkAreas();
    } else {
      this.init = !this.init;
    }
  }
}

