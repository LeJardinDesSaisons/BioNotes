import { AddAreaPage } from './add-area.po';
import { browser, by , element } from 'protractor';


describe ('add-area view', function() {
    let page: AddAreaPage;

    beforeEach(() => {
        page = new AddAreaPage();
    });

    it('should return the path', () => {
        page.navigateTo();

        page.fillType();

        page.fillNumber();

        expect(page.getResult()).toContain('Jardin 1');
      });


});
