import { browser, by, element} from 'protractor';

export class AddOperationPage {

    /**
     * Navigates to the add operation page.
     */
    navigateTo() {
        return browser.get('/add-operation');
    }

    /**
     * Fills the variety field.
     */
    fillVariety() {
        element(by.name('variety')).click();
        browser.sleep(500);
        element(by.css('input[type="text"]')).sendKeys('Fraise');
        browser.sleep(500);
    }

    /**
     * Scrolls to the label field and fills it with text.
     */
    fillLabel() {
        const ionicLabelField = element(by.name('label')).getWebElement();
        browser.executeScript(
          `arguments[0].scrollIntoView({behavior: "smooth", block: "end"});`,
          ionicLabelField,
        );
        browser.sleep(500);
        element(by.name('label')).click();
        browser.sleep(500);
        element(by.css('#mat-input-3')).sendKeys('Planter');
        browser.sleep(500);
    }

    /**
     * Clicks the submit button.
     */
    clickSubmit() {
        element(by.id('submit')).click();
        browser.sleep(3000);
    }

    /** Types a single letter, then tries to use the autocomplete feature. */
    autocompleteType() {
        element(by.css('#mat-input-3')).click();
        browser.sleep(500);
        element(by.css('#mat-input-3')).sendKeys('P');
        browser.sleep(500);
        return element(by.className('mat-option-text')).getText();
    }

    getResult() {
        return element(by.tagName('ion-card-title')).getText();
    }

}
