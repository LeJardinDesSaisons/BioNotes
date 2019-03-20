import { Component, OnInit, Input } from '@angular/core';
import { Area } from 'src/app/model/area';
import { AreaPopoverComponent } from '../area-popover/area-popover.component';

@Component({
  selector: 'view-areas',
  templateUrl: './view-areas.component.html',
  styleUrls: ['./view-areas.component.scss']
})
export class ViewAreasComponent implements OnInit {

  @Input() areas: Area[];
  popoverController: any;

  constructor() { }

  ngOnInit() {
    if (!this.areas) {
      console.log('prout');
    }
  }

    /**
   * Open a AreaPopoverComponent
   * @param ev the DOM event
   * @param areaId the ID of the selected area
   */
  async presentPopover(ev: any, areaId: Number) {
    const popover = await this.popoverController.create({
      component: AreaPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: { 'areaId' : areaId },
    });
    return await popover.present();
  }

  optionsClicked() {}

}

