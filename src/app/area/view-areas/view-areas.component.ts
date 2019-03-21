import { Component, OnInit, Input } from '@angular/core';
import { Area } from 'src/app/model/area';
import { AreaPopoverComponent } from '../area-popover/area-popover.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'view-areas',
  templateUrl: './view-areas.component.html',
  styleUrls: ['./view-areas.component.scss']
})
export class ViewAreasComponent implements OnInit {

  @Input() areas: Area[];
  @Input() link: String;
  // popoverController: any;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() { }

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

