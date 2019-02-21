import { browser, by, element} from 'protractor';

export class AddAreaPage {

    /** navigate to the add area page */
    navigateTo() {
        return browser.get('/tabs/tab2/area/add');
    }

    /** fill the type input*/
    fillType() {
        element(by.name('type')).click();
        browser.sleep(500);
        element(by.css('input[type="text"]')).sendKeys('Jardin');
        browser.sleep(500);
    }

    /** fill the number input*/
    fillNumber() {
        element(by.name('number')).click();
        browser.sleep(500);
        element(by.css('input[type="number"]')).sendKeys(1);
        browser.sleep(500);
    }

    /** check if the result of the 2 inputs is correct*/
    getResult() {
        return element(by.css('.helper-text')).getText();
    }
}