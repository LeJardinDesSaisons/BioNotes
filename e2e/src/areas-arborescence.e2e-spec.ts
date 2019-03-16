import { AreasArborescence } from './areas-arborescence.po';
import { browser } from 'protractor';

describe ('an empty arborescence', function() {
    let page: AreasArborescence;

    beforeEach(() => {
        page = new AreasArborescence();
    });

    // /**
    //  * Show an empty arborescence
    // */
    // it('should have no element', () => {
    //   page.navigateTo();
    //   browser.sleep(500);
    //   expect(page.getResultTitle()).toContain('CONFIGURATION DES ESPACES');
    //   browser.sleep(500);
    //   console.log(page.getResultArborescence());
    // });

    /**
     * Show an arborescence with at least one area
    */
    it('should have at least one element', () => {
    page.navigateTo();
    browser.sleep(500);
    expect(page.getResultTitle()).toContain('CONFIGURATION DES ESPACES');
    browser.sleep(500);
    expect(page.getResultArborescence()).toBeDefined();
    });

});

