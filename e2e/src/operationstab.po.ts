import { browser, by, element } from 'protractor';

export class OperationsTab {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }
}
