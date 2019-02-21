import { browser, by, element} from 'protractor';

export class AddAreaPage {

    navigateTo() {
        return browser.get('/tabs/tab2/area/add');
    }

    fillType() {
        element(by.name('type')).click();
        browser.sleep(500);
        element(by.css('input[type="text"]')).sendKeys('Jardin');
        browser.sleep(500);
    }

    fillNumber() {
        element(by.name('number')).click();
        browser.sleep(500);
        element(by.css('input[type="number"]')).sendKeys(1);
        browser.sleep(500);
    }

    getResult() {
        return element(by.id('path')).getText();
    }
}