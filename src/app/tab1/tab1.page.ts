import { PlanningComponent } from '../operations/planning/planning.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, ViewChild, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('appPlanning') private planningComponent: PlanningComponent;

  ionViewDidEnter() {
    this.planningComponent.callOnLoad();
  }
}
