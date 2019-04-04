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
        element(by.css('input[name="label"]')).sendKeys('Planter');
        browser.sleep(500);
    }

    /**
     * Clicks the submit button.
     */
    clickSubmit() {
        element(by.id('submit')).click();
        browser.sleep(3000);
    }

    getResult() {
        return element(by.tagName('ion-card-title')).getText();
    }
}
