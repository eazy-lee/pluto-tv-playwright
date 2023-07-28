import {expect, test} from '@playwright/test';
import {Player} from "../services/pages/player/player";


test.beforeEach(async ({page}) => {
    await page.goto('/live-tv');
});

test.describe('Live TV player functionality', () => {

    test('should have all required elements for "Live TV" content', async ({page}) => {
        const player: Player = new Player(page);

        await player.hoverOnPlayer();
        await test.step("should have content title", async () => {
            await player.contentTitle.isVisible();
        });
        await test.step("should have content rating", async () => {
            await player.contentRating.isVisible();
        });
        await test.step("should have content details", async () => {
            await player.contentDetails.isVisible();
        });
    });

    test('should unmute and mute video', async ({page}) => {
        const player: Player = new Player(page);
        const localStorageVolumeStateKey: string = 'ptv-volume-state';

        await test.step("Verify if unmute button is visible", async () => {
            await player.unmuteButton.isVisible();
        });

        await player.clickOnUnmuteButton();

        await test.step("Verify a video is unmuted", async () => {
            expect(await page.evaluate((key: string) => {
                return localStorage.getItem(key);
            }, localStorageVolumeStateKey)).toContain('100');
        });

        await player.hoverOnPlayer();
        await player.clickOnMuteButton();

        await test.step(("Verify the video is muted"), async () => {
            expect(await page.evaluate((key: string) => {
                return localStorage.getItem(key);
            }, localStorageVolumeStateKey)).toContain('muted');
        });
    });

    test('should be able to activate closed captions', async ({page}) => {
        const player: Player = new Player(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();

        await test.step("Verify if closed captions are visible in player", async () => {
            await player.closedCaptionVideoElement.isVisible();
        });
    });

})
