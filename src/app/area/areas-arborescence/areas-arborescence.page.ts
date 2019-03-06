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

  @Input() parentid: Number;
  childAreas: Area[] ;
  area: Area ;
  title: String = 'Arborescence';

  /**
   * 
   * @param areaDBService : the service
   * @param route
   */
  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {}

  ngOnInit() {
    const parentId: String = this.route.snapshot.paramMap.get('parentid');
    if (parentId) {
      // get child of the area
      this.areaDBService.getAreaById(+parentId).then((area: Area) => this.area = area);
      this.areaDBService.getChildAreaById(+parentId).then( (areas: Area[]) => this.childAreas);
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
