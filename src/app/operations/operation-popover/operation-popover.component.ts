import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { OperationDbService } from '../operations-db.service';

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
              private toastController: ToastController) { }

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

}
