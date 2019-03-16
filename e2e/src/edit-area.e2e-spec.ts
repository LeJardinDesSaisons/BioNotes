import { element, by } from 'protractor';
import { EditAreaPage } from './edit-area.po';
import { AddAreaPage } from './add-area.po';

describe ('edit-area view', function() {
    let addAreaPage: AddAreaPage;
    let editAreaPage: EditAreaPage;

    beforeEach(() => {
        editAreaPage = new EditAreaPage();
        addAreaPage = new AddAreaPage();
    });

    /**
     * Add an area, access the Edit screen of this area, check if all elements are there,
     * add
     */
    it('should edit an area', () => {
        addAreaPage.navigateToList();
        addAreaPage.clickFab();
        addAreaPage.fillNumber(1);
        addAreaPage.fillType();
        addAreaPage.validate();

        editAreaPage.clickMoreOptions();
        editAreaPage.clickEdit();

        expect(element(by.css('#mat-input-1'))).toContain('Jardin');
        expect(element(by.css('input[type="number"]'))).toContain('1');
        expect(addAreaPage.getResult()).toContain('L\'espace suivant va être ajouté :\nJardin 2');

        addAreaPage.fillNumber(0);
        addAreaPage.validate();
    });

});
