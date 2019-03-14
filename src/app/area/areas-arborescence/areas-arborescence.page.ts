import { Area, Type } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-areas-arborescence',
  templateUrl: './areas-arborescence.page.html',
  styleUrls: ['./areas-arborescence.page.scss'],
})
export class AreasArborescencePage implements OnInit {

  childAreas: Area[] = undefined ;
  parentArea: Area = undefined ;
  title: String = 'Arborescence';
  parentId: number;
  /**
   * This variable permit to check if the page is created (on Initialization) or if we return to it
   */
  init = true;

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {}

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
      });
    } else {
      this.areaDBService.getRootArea().then((areas: Area[]) => this.childAreas = areas);
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

  optionsClicked() {}

}
