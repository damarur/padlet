import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions, Locator} from 'protractor';

export async function waitForElementDisplaying(pageElement: ElementFinder): Promise<void> {
  await browser.wait(ExpectedConditions.elementToBeClickable(pageElement));
}

export async function waitElementNotVisible(pageElement: ElementFinder): Promise<void> {
  await browser.wait(ExpectedConditions.invisibilityOf(pageElement));
}

export async function waitUntilSpinnerIsHidden(): Promise<void> {
  const el = browser.element(by.css('.overlay .ng-star-inserted'));
  await browser.wait(ExpectedConditions.stalenessOf(el));
}

export async function selectFirstElementInAutoComplete(): Promise<void> {
  const autoComplete: ElementArrayFinder = element.all(by.css('mat-option span'));
  await click(autoComplete.first());
}

const defaultOptions = {waitForSpinner: true};

export async function clickFistVisible(locator: Locator, options: { waitForSpinner: boolean } = defaultOptions): Promise<void> {
  if (options.waitForSpinner) {
    await waitUntilSpinnerIsHidden();
  }
  const visible = await element.all(locator).filter((e) => e.isDisplayed()).first();

  if (visible) {
    await browser.driver.sleep(500);
    await visible.click();
  }
}

export async function click(el: ElementFinder, options: { waitForSpinner: boolean } = defaultOptions): Promise<void> {
  if (options.waitForSpinner) {
    await waitUntilSpinnerIsHidden();
  }
  await waitForElementDisplaying(el);
  await browser.driver.sleep(500);
  await el.click();
}

export async function navigate(url: string): Promise<void> {
  // tslint:disable-next-line:no-console
  console.log(`Navigating to ===> ${url}`);
  await browser.driver.get(url);
}
