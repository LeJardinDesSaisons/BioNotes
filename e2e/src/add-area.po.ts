import { browser, by, element} from 'protractor';

export class AddAreaPage {

    /** Navigates to the add area page. */
    navigateTo() {
        return browser.get('/tabs/tab2/area/add');
    }

    /** Navigates to the area list page. */
    navigateToList() {
        return browser.get('/tabs/tab2/area/list');
    }

    /** Fills the type input. */
    fillType() {
        element(by.css('#mat-input-0')).click();
        browser.sleep(500);
        element(by.css('#mat-input-0')).sendKeys('Jardin');
        browser.sleep(500);
    }

    /**
     * Types a specific number in the number field.
     * @param value Number that will be typed within the field
     */
    fillNumber(value: number) {
        element(by.name('number')).click();
        browser.sleep(500);
        element(by.css('input[type="number"]')).sendKeys(value);
        browser.sleep(500);
    }

    /** Checks if the result of the 2 inputs is correct. */
    getResult() {
        return element(by.tagName('helper-text')).getText();
    }

    /** Opens the add area form. */
    clickFab() {
        element(by.css('ion-fab-button')).click();
        browser.sleep(500);
    }

    /** Confirms the content of the form. */
    validate() {
        element(by.id('submit')).click();
        browser.sleep(500);
    }

    /** Types a single letter, then tries to use the autocomplete feature. */
    autocompleteType() {
        element(by.css('#mat-input-1')).click();
        browser.sleep(500);
        element(by.css('#mat-input-1')).sendKeys('J');
        browser.sleep(500);
        element(by.className('mat-option-text')).click();
        browser.sleep(500);
    }

    /** */
    getArea() {

    }
}
