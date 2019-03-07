import { AddAreaPage } from './add-area.po';
import { browser, Key } from 'protractor';

describe ('add-area view', function() {
    let page: AddAreaPage;

    beforeEach(() => {
        page = new AddAreaPage();
    });

    /* test if the form returns the path
    * with how input works
    * we can't check what is inside of it
    */
    it('should return the path', () => {
        page.navigateTo();

        page.fillType();

        page.fillNumber();

        expect(page.getResult()).toContain('L\'espace suivant va être ajouté :\nJardin 1');
      });

});
