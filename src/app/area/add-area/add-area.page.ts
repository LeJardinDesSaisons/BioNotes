import { Area } from '../../model/area';
import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {

  private area: Area;
  private parentNames: String[];

  constructor(private areaDbService: AreaDbService, private route: ActivatedRoute) {
    this.area = new Area();
  }

  ngOnInit() {
    const parentId: String = this.route.snapshot.paramMap.get('parentid');
    if (parentId) {
      this.area.parentId = +parentId;
      this.areaDbService.getParentNames(this.area).then((names: String[]) => this.parentNames = names);
    }
  }

  /**
   * Submit the new area to the database
   */
  submit() {
    this.areaDbService.addArea(this.area);
  }

}
