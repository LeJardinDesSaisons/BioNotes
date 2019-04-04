import { browser } from 'protractor';
import { SelectAreaPage } from './select-area.po';

describe ('select area view', function() {
    let page: SelectAreaPage;

    beforeEach(() => {
        page = new SelectAreaPage();
    });

    /**
     * Shows the areas that the user can select
    */
    it('should have at least one element', () => {
        page.navigateTo();
        browser.sleep(500);
        expect(page.getResultTitle()).toContain("SÉLECTION D'UN ESPACE");
        expect(page.getFirstAreaText()).toContain("Parcelle 1");
    });

});
