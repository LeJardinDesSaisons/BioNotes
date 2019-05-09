import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertController, PopoverController, ToastController, NavController } from '@ionic/angular';
import { OperationDbService } from '../operations-db.service';
import { SelectAreaService } from 'src/app/area/select-area.service';
import { Operation } from 'src/app/model/operation';

@Component({
  selector: 'app-operation-popover',
  templateUrl: './operation-popover.component.html',
  styleUrls: ['./operation-popover.component.scss']
})
export class OperationPopoverComponent {

  @Input() operationId: Number;

  constructor(private popoverController: PopoverController,
              private location: Location,
              private operationDbService: OperationDbService,
              private alertController: AlertController,
              private toastController: ToastController,
              private selectAreaService: SelectAreaService,
              private navController: NavController) { }

  /**
   * Dismiss the popover and open the dialog
   */
  async presentDeleteDialog() {
    this.popoverController.dismiss();

    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Supprimer l\'opération ?',
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Supprimer',
          handler: () => this.deleteOperation()
        }
      ]
    });
    await alert.present();
  }

  /**
   * Delete the current operation and get back to the planning view
   */
  deleteOperation() {
    this.toastController.create({
      message: 'L\'opération a été supprimée.',
      duration: 2000
    }).then(toast => toast.present());
    this.operationDbService.deleteOperation(this.operationId);
    this.location.back();
  }

  /**
   * function for create a new operation based on the current operation
   */
  async duplicateFunction() {
    this.popoverController.dismiss();
    console.log('before');
    this.selectAreaService.setOperation(await this.operationDbService.getOperationById(this.operationId));
    console.log('after');
    if (this.selectAreaService.getArea()) {
      this.navController.navigateForward('add-operation/' + this.selectAreaService.getArea().name );
    } else {
      this.navController.navigateForward('add-operation/');
    }

  }

}
