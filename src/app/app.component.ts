import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AreaDbService } from './area/area-db.service';
import { OperationDbService } from './operations/operations-db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private areaDbService: AreaDbService,
    private operationDbService: OperationDbService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.statusBar.styleBlackTranslucent();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#897b66');
        this.splashScreen.hide();
      }
      this.areaDbService.initAreas();
      this.operationDbService.initOperations();
    });
  }
}
