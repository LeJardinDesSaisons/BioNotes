import { AddOperationPage } from './add-operation.po';
describe ('add-operation view', function() {
    let page: AddOperationPage;

    beforeEach(() => {
        page = new AddOperationPage();
    });

    it('should return to operation view', () => {
        page.navigateTo();

        page.fillVariety();

        page.fillLabel();

        page.clickSubmit();

        expect(page.getResult()).toContain('Planter Fraise');
    });

    it('should autocomplete', () => {
        page.navigateTo();

        expect(page.autocompleteType()).toContain('Planter');
    });

});
