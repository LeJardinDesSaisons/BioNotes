import { browser } from 'protractor';
import { DetailsPage } from './operations-details.po';

describe ('areas-arborescence view', function() {
    let page: DetailsPage;

    beforeEach(() => {
        page = new DetailsPage();
    });

    /**
     * Show an arborescence with at least one area
    */
    it('should get the first category', () => {
        page.navigateTo();
        browser.sleep(500);
        expect(page.getDefaultInfosCat()).toContain('Fournisseur');
    });

});