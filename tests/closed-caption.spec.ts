import {expect, test} from '@playwright/test';
import {Player} from "../services/pages/player/player";
import {
    ClosedCaptionSettingMenu, ColorOption,
    FontFamilyOption, FontSizeOption,
    MenuItem, OpacityOption, TextEdgeOption
} from "../services/pages/player/closed-caption-setting-menu";


test.beforeEach(async ({page}) => {
    await page.goto('/live-tv');
});

test.describe('Closed captions menu', () => {

    test('should have required Font Family menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.FontFamily);

        for (const item of Object.values(FontFamilyOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(7);
    });

    test('should have required Font Size menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.FontSize);

        for (const item of Object.values(FontSizeOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have required Font Color menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.FontColor);

        for (const item of Object.values(ColorOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(8);
    });

    test('should have required Font Opacity menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.FontOpacity);

        for (const item of Object.values(OpacityOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have required Background Color menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.BackgroundColor);

        for (const item of Object.values(ColorOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(8);
    });

    test('should have required Background Opacity menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.BackgroundOpacity);

        for (const item of Object.values(OpacityOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have required Text Edge menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.TextEdge);

        for (const item of Object.values(TextEdgeOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have required Text Edge Color menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.TextEdgeColor);

        for (const item of Object.values(ColorOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(8);
    });

    test('should have required Text Edge Opacity menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.TextEdgeOpacity);

        for (const item of Object.values(OpacityOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have required Window Color menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.WindowColor);

        for (const item of Object.values(ColorOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(8);
    });

    test('should have required Window Opacity menu items', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();
        await closedCaptionMenu.clickOnMenuItemByName(MenuItem.WindowOpacity);

        for (const item of Object.values(OpacityOption)) {
            await closedCaptionMenu.checkMenuItemVisibility(item);
        }

        // This will check for unnecessary menu items
        const menuItems = await page.$$("li[role='menuitemradio']");
        await expect(menuItems.length).toBe(5);
    });

    test('should have predefined settings', async ({page}) => {
        const player: Player = new Player(page);
        const closedCaptionMenu: ClosedCaptionSettingMenu = new ClosedCaptionSettingMenu(page);

        await player.hoverOnPlayer();
        await player.clickOnClosedCaptionButton();
        await player.captionSettingsButton.click();
        await expect(closedCaptionMenu.settingsMenu, 'Menu window is not visible').toBeVisible();

        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.FontFamily, FontFamilyOption.SansSerif);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.FontSize, FontSizeOption.Medium);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.FontColor, ColorOption.White);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.FontOpacity, OpacityOption.OneHundred);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.BackgroundColor, ColorOption.Black);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.BackgroundOpacity, OpacityOption.SeventyFive);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.TextEdge, TextEdgeOption.NoEdge);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.TextEdgeColor, ColorOption.Black);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.TextEdgeOpacity, OpacityOption.Fifty);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.WindowColor, ColorOption.Black);
        await closedCaptionMenu.checkMenuItemCurrentSetting(MenuItem.WindowOpacity, OpacityOption.Zero);
    });
})