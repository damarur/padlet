import { browser, logging } from 'protractor';
import { AppPage } from './app.pAGE';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should click fav button', async () => {
    await page.navigateTo();
	await page.checkButtonIsDisplayed();
	await page.clickFavoriteButton();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.ALL,
    } as logging.Entry));
  });
});
