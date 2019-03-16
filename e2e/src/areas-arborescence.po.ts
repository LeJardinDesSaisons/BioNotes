import { browser, by, element} from 'protractor';
import { AddAreaPage } from './add-area.po';


export class AreasArborescence {

    navigateTo() {
        return browser.get('/tabs/tab2/area/list');
    }


    getResultTitle() {
        return element(by.css('ion-title')).getText();
    }

    getResultArborescence() {
        return element(by.css('p')).getText();
    }


}
