import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import { AreaDbService } from '../area-db.service';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/model/area';

@Component({
  selector: 'app-select-area',
  templateUrl: './select-area.page.html',
  styleUrls: ['./select-area.page.scss'],
})
export class SelectAreaPage implements OnInit {
  // @Input() area: Area;
  @Output() areaSelected = new EventEmitter<Area>() ;

  childAreas: Area[] ;
  parentArea: Area ;
  title: String ;
  parentId: number;
  link: String;

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {
    this.title = 'SÉLECTION D\'UN ESPACE';
    this.link = '/tabs/tab2/area/select/';
   }

  ngOnInit() {
    this.checkAreas();
  }

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

  private selectArea() {
    this.areaSelected.emit(this.parentArea);
  }
}
