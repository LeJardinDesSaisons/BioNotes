import { AreasArborescencePage } from './areas-arborescence.po';
import { browser } from 'protractor';

describe ('areas-arborescence view', function() {
    let page: AreasArborescencePage;

    beforeEach(() => {
        page = new AreasArborescencePage();
    });

    /**
     * Show an arborescence with at least one area
    */
    it('should have at least one element', () => {
        page.navigateTo();
        browser.sleep(1000);
        expect(page.getResultTitle()).toContain('CONFIGURATION DES ESPACES');
        expect(page.getFirstAreaText()).toContain('Parcelle 1');
    });

});

