import { AreasArborescence } from './areas-arborescence.po';
import { browser, Key } from 'protractor';

describe ('Empty arboresence ', function() {
    let page: AreasArborescence;

    beforeEach(() => {
        page = new AreasArborescence();
    });


      /**
       *Show an empty arborescence
       */
      it('should have no arborescence', () => {
        page.navigateTo();
        browser.sleep(500);
        expect(page.getResultTitle()).toContain('ARBORESCENCE');
        browser.sleep(500);
        expect(page.getResultArborescence()).toContain('pas trouvé');
      });

});

