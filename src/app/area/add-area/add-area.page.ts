import { AreaDbService } from '../area-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {

  constructor(private areaDbService: AreaDbService) { }

  ngOnInit() {
  }

  confirm() {
    // areaDbService.add();
  }

}
