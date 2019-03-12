import { AddAreaPage } from './add-area.po';
import { browser, Key } from 'protractor';

describe ('add-area view', function() {
    let page: AddAreaPage;

    beforeEach(() => {
        page = new AddAreaPage();
    });

    /**
     * Tries to see if the form returns the expected path.
     * Given how inputs work,
     * we are unable to see what the "Nom complet" field contains.
     */
    it('should return the path', () => {
        page.navigateTo();

        page.fillNumber(1);

        page.fillType();

        expect(page.getResult()).toContain('L\'espace suivant va être ajouté :\nJardin 1');
      });

      /**
       * Tries to use the autocomplete feature to see if it works as intended.
       * First needs to manually add an area for the field to suggest a type.
       */
      it('should autocomplete', () => {
        page.navigateToList();
        page.clickFab();
        page.fillNumber(1);
        page.fillType();
        page.validate();

        page.clickFab();
        page.fillNumber(2);
        page.autocompleteType();
        expect(page.getResult()).toContain('L\'espace suivant va être ajouté :\nJardin 2');
      });

});
