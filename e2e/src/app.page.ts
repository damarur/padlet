import { browser, by, element, ElementFinder } from 'protractor';
import { click, waitForElementDisplaying } from '../utilities';

export class AppPage {

	private favoriteButton: ElementFinder = element(by.id('wish-1419965166'))
		.element(by.className('wish-frame'))
		.element(by.className('real-wish'))
		.element(by.className('stalker-bar'))
		.element(by.className('surface-post-reaction'))
		.element(by.className('reaction-like reaction-container'))
		.element(by.className('reaction-show'))
		.element(by.className('immaterial-icons immaterial-icons-18'));

	async navigateTo(): Promise<unknown> {
		browser.waitForAngularEnabled(false);
		return browser.get(browser.baseUrl);
	}

	public async clickFavoriteButton(): Promise<void> {
		await click(this.favoriteButton);
	}

	public async checkButtonIsDisplayed(): Promise<void> {
		await waitForElementDisplaying(this.favoriteButton);
	}

}
