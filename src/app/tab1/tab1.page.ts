import { AreaDbService } from '../area/area-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public areaDbService: AreaDbService) {
  }

  ngOnInit() {
    this.areaDbService.getAreas().then(areas => console.log(areas));
  }
}
