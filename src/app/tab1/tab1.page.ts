import { PlanningComponent } from '../operations/planning/planning.component';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('appPlanning')
  private test: PlanningComponent ;

  ionViewDidEnter() {
    this.test.ngOnInit();
  }
}
