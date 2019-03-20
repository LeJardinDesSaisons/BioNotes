import { OperationsTab } from './operationstab.po';

describe('operations tab', () => {
  let page: OperationsTab;

  beforeEach(() => {
    page = new OperationsTab();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('OPÉRATIONS');
  });
});
