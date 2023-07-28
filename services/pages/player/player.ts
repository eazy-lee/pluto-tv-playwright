import {Page, Locator, test} from "@playwright/test";
import {L2Category} from "../l2-category";

export class Player {
    private readonly _playerContainer: Locator = this.page.locator("section[class*='videoPlayerContainer']");
    private readonly _controlPanel: Locator = this.page.locator("div[class*='player-control']");
    private readonly _contentTitle: Locator = this.page.locator("span[class='title show-name-atc']");
    private readonly _contentRating: Locator = this.page.locator("section[class*='metadataContainer'] span.rating");
    private readonly _contentDetails: Locator = this.page.locator("div.episode-name-atc");
    private readonly _timeStart: Locator = this.page.locator(".video-player-time-start-mark-atc");
    private readonly _progressBar: Locator = this.page.locator(".video-player-progress-bar-atc");
    private readonly _timeEnd: Locator = this.page.locator(""); //TODO: wright locator
    private readonly _unmuteButton: Locator = this.page.locator("div[class*='toggleVolumeContainer'] button[class*='unmuteButton']");
    private readonly _muteButton: Locator = this.page.locator("button[aria-label='Mute Volume']");
    private readonly _toggleCaptionButton: Locator = this.page.locator(".captions-btn-atc");
    private readonly _captionSettingsButton: Locator = this.page.locator("button[class*='closedCaptionsStyleButton']");
    private readonly _addToFavoriteButton: Locator = this.page.locator(".add-to-favorite-atc");
    private readonly _addToWatchListButton: Locator = this.page.locator("button[class*='toggleWatchListButton']");
    private readonly _shareButton: Locator = this.page.locator(".share-btn-atc");
    private readonly _theatreModeButton: Locator = this.page.locator(".fullbrowser-btn-atc");
    private readonly _fullScreenModeButton: Locator = this.page.locator(".fullscreen-btn-atc");
    private readonly _closedCaptionVideoElement: Locator = this.page.locator("div[class*='videoElementClosedCaptions-']");

    constructor(public readonly page: Page) {
    }

    async hoverOnPlayer() {
        await test.step("Hover on player", async () => {
            await this._playerContainer.hover();
        });
    }

    get unmuteButton(): Locator {
        return this._unmuteButton;
    }

    async clickOnUnmuteButton() {
        await test.step("Click on unmute button", async () => {
            await this.unmuteButton.click();
        });
    }

    get muteButton(): Locator {
        return this._muteButton;
    }

    async clickOnMuteButton() {
        await test.step("Click on mute button", async () => {
            await this.muteButton.click();
        });
    }

    get playerContainer(): Locator {
        return this._playerContainer;
    }

    get controlPanel(): Locator {
        return this._controlPanel;
    }

    get contentTitle(): Locator {
        return this._contentTitle;
    }

    get contentRating(): Locator {
        return this._contentRating;
    }

    get contentDetails(): Locator {
        return this._contentDetails;
    }

    get timeStart(): Locator {
        return this._timeStart;
    }

    get progressBar(): Locator {
        return this._progressBar;
    }

    get timeEnd(): Locator {
        return this._timeEnd;
    }

    get toggleCaptionButton(): Locator {
        return this._toggleCaptionButton;
    }

    async clickOnClosedCaptionButton() {
        await test.step('Click on closed caption button', async () => {
            await this.toggleCaptionButton.click();
        })
    }

    get captionSettingsButton(): Locator {
        return this._captionSettingsButton;
    }

    async clickOnClosedCaptionsSettingsButton() {
        await test.step('Click on Closed Captions Settings button', async () => {
            await this.captionSettingsButton.click();
        });
    }

    get addToFavoriteButton(): Locator {
        return this._addToFavoriteButton;
    }

    async clickOnAddToFavoritesButton() : Promise<L2Category> {
        await test.step('Click on Add to Favorites button', async () => {
            await this.addToFavoriteButton.click();
        });
        return new L2Category(this.page);
    }

    get addToWatchListButton(): Locator {
        return this._addToWatchListButton;
    }

    get shareButton(): Locator {
        return this._shareButton;
    }

    get theatreModeButton(): Locator {
        return this._theatreModeButton;
    }

    get fullScreenModeButton(): Locator {
        return this._fullScreenModeButton;
    }

    get closedCaptionVideoElement(): Locator {
        return this._closedCaptionVideoElement;
    }
}