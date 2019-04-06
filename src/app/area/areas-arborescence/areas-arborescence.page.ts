import { AreaPopoverComponent } from './../area-popover/area-popover.component';
import { Area } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
  link: String;
  /**
   * This variable permit to check if the page is created (on Initialization) or if we return to it
   */
  init = true;
  ancestorNames: String[];

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {
    this.title = 'Configuration des espaces';
    this.link = '/tabs/tab2/area/list/';
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
  private async checkAreas() {
    this.parentId = +this.route.snapshot.paramMap.get('parentid');

    if (this.parentId) {
      this.parentArea = await this.areaDBService.getAreaById(this.parentId);
      this.childAreas = await this.areaDBService.getChildAreaById(this.parentId);
      this.ancestorNames = await this.areaDBService.getParentNames(this.parentArea);
    } else {
      this.areaDBService.getRootArea().then((areas: Area[]) => {
        this.childAreas = areas;
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

  /**
   * Unimplemented function called when the options button is clicked
   */
  optionsClicked() { }

}

