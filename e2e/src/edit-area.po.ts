import { element, by, browser } from 'protractor';

export class EditAreaPage {

    /** Click on the ellipsis button of the first item in the list */
    clickMoreOptions() {
        element(by.css('.ellipsis-button')).click();
        browser.sleep(500);
    }

    /** Click on the edit button */
    clickEdit() {
        element(by.id('edit-button')).click();
        browser.sleep(500);
    }

    /** Complete the type field */
    completeTypeField() {
        element(by.css('#mat-input-0')).click();
        browser.sleep(500);
        element(by.css('#mat-input-0')).sendKeys('New');
        browser.sleep(500);
    }
}
