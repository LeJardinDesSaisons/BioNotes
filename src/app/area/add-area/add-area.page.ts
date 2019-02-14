import { Area } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {

  private area: Area;

  constructor(private areaDbService: AreaDbService) {
    this.area = new Area();
  }

  ngOnInit() {
  }

  /**
   * Submit the new area to the database
   */
  submit() {
    this.areaDbService.addArea(this.area);
  }

}
