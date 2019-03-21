import { browser, by, element} from 'protractor';

export class DetailsPage {

    /** Navigate to the arborescence page */
    navigateTo() {
        return browser.get('/tabs/tab1/operations/details');
    }

    /** Get the first category */
    getDefaultInfosCat() {
        return element(by.css('.otherinfos')).getText();
    }

}