import { browser, by, element} from 'protractor';

export class SelectAreaPage {

    /** Navigate to the arborescence page */
    navigateTo() {
        return browser.get('/tabs/tab2/area/select');
    }

    /** Get the title of the arborescence page */
    getResultTitle() {
        return element(by.css('ion-title')).getText();
    }

    /** Get the text when no elements are found */
    getEmptyResult() {
        return element(by.css('p')).getText();
    }

    /** Get the first area on the list */
    getFirstAreaText() {
        return element(by.tagName('ion-card-title')).getText();
    }
}
