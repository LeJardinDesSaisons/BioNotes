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

  childAreas: Area[] ;
  area: Area ;
  title: String = 'Arborescence';
  parentId: String;

  /**
   * 
   * @param areaDBService : the service
   * @param route
   */
  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.parentId = this.route.snapshot.paramMap.get('parentid');
    if (this.parentId) {
      // get child of the area
      this.areaDBService.getAreaById(+this.parentId).then((area: Area) => this.area = area);
      this.areaDBService.getChildAreaById(+this.parentId).then( (areas: Area[]) => this.childAreas = areas);
    } else {
      console.log('no parentId');
      this.areaDBService.getRootArea().then( (areas: Area[] ) => this.childAreas = areas);
    }
  }

  /**
   * TODO : Verification of child area (when touch a parcel )
   * TODO :
   */

}
