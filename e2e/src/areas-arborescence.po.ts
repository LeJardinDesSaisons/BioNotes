import { browser, by, element} from 'protractor';
import { AddAreaPage } from './add-area.po';


export class AreasArborescence {

    /** naviate to the arborescence page */
    navigateTo() {
        return browser.get('/tabs/tab2/area/list');
        browser.sleep(500);
    }

    /** get the title of the arborescence page */
    getResultTitle() {
        return element(by.css('ion-title')).getText();
        browser.sleep(500);
    }

    /** get the empty list */
    getResultArborescenceEmpty() {
        return element(by.css('p')).getText();
        browser.sleep(500);
    }

    /** Get the first area on the list */
    getResultArborescence() {
        return element(by.css('ion-card-title'));
        browser.sleep(500);
    }


}
