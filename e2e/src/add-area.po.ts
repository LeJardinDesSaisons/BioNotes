import { browser, by, element} from 'protractor';

export class AddAreaPage {

    /** navigate to the add area page */
    navigateTo() {
        return browser.get('/tabs/tab2/area/add');
    }

    /** navigate to the area list page */
    navigateToList() {
        return browser.get('/tabs/tab2/area/list');
    }

    /** fill the type input*/
    fillType() {
        element(by.css('#mat-input-0')).click();
        browser.sleep(500);
        element(by.css('#mat-input-0')).sendKeys('Jardin');
        browser.sleep(500);
    }

    /** fill the number input*/
    fillNumber(value: number) {
        element(by.name('number')).click();
        browser.sleep(500);
        element(by.css('input[type="number"]')).sendKeys(value);
        browser.sleep(500);
    }

    /** check if the result of the 2 inputs is correct*/
    getResult() {
        return element(by.css('.helper-text')).getText();
    }

    /** Opens the add area form */
    clickFab() {
        element(by.css('ion-fab-button')).click();
        browser.sleep(500);
    }

    /** Confirms the content of the form */
    validate() {
        element(by.css('ion-button')).click();
        browser.sleep(500);
    }

    /** Types a single letter, then tries to use the autocomplete feature */
    autocompleteType() {
        element(by.css('#mat-input-1')).click();
        browser.sleep(500);
        element(by.css('#mat-input-1')).sendKeys('J');
        browser.sleep(500);
        element(by.className('mat-option-text')).click();
        browser.sleep(500);
    }
}
