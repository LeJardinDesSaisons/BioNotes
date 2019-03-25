import { AreasArborescencePage } from './areas-arborescence.po';
import { EditAreaPage } from './edit-area.po';
import { AddAreaPage } from './add-area.po';

describe ('edit-area view', function() {
    let editAreaPage: EditAreaPage;
    let addAreaPage: AddAreaPage;
    let areasArborescencePage: AreasArborescencePage;

    beforeEach(() => {
        editAreaPage = new EditAreaPage();
        addAreaPage = new AddAreaPage();
        areasArborescencePage = new AreasArborescencePage();
    });

    it('should edit an area', () => {
        areasArborescencePage.navigateTo();
        editAreaPage.clickMoreOptions();
        editAreaPage.clickEdit();

        editAreaPage.completeTypeField();
        expect(addAreaPage.getResult()).toContain("L'espace suivant va être ajouté :\nParcelle 1");
    });

});
