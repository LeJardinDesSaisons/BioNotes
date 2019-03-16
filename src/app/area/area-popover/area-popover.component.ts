import { Component, OnInit, Input } from '@angular/core';
import { ViewController } from '@ionic/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-popover',
  templateUrl: './area-popover.component.html',
  styleUrls: ['./area-popover.component.scss']
})
export class AreaPopoverComponent {

  @Input() areaId: Number;

  constructor(private popoverController: PopoverController, private router: Router) { }

  /**
   * Dismiss the popover and navigate
   * @param route the route to go to
   */
  changeRoute(route: string) {
    this.popoverController.dismiss();
    this.router.navigateByUrl(route);
  }

}
