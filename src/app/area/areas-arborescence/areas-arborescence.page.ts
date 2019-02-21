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
  private areas: Area[] ;
  // private list = [ 'Parcelle1' , 'Parcelle2' ];
  // private list: Array<{ id: string }> = [];
  // myParcel = this.list[0];

  constructor(private areaDBService: AreaDbService, private route: ActivatedRoute) {}

  ngOnInit() {
    const parentid: String = this.route.snapshot.paramMap.get('parentid');
    this.areaDBService.getAreas().then((areas) => this.areas = areas);
  }

}
