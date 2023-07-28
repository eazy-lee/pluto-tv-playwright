import {expect, Locator, Page, test} from "@playwright/test";

export enum MenuItem {
    FontFamily = 'Font Family',
    FontSize = 'Font Size',
    FontColor = 'Font Color',
    FontOpacity = 'Font Opacity',
    BackgroundColor = 'Background Color',
    BackgroundOpacity = 'Background Opacity',
    TextEdge = 'Text Edge',
    TextEdgeColor = 'Text Edge Color',
    TextEdgeOpacity = 'Text Edge Opacity',
    WindowColor = 'Window Color',
    WindowOpacity = 'Window Opacity'
}

export enum FontFamilyOption {
    Typewriter = 'Typewriter',
    Serif = 'Serif',
    Block = 'Block',
    SansSerif = 'Sans Serif',
    Casual = 'Casual',
    Cursive = 'Cursive',
    SmallCapitals = 'Small Capitals'
}

export enum FontSizeOption {
    ExtraExtraLarge = 'Extra Extra Large',
    ExtraLarge = 'Extra Large',
    Large = 'Large',
    Medium = 'Medium',
    ExtraSmall = 'Extra Small'
}

export enum ColorOption {
    Black = 'Black',
    White = 'White',
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
    Yellow = 'Yellow',
    Cyan = 'Cyan',
    Magenta = 'Magenta'
}

export enum OpacityOption {
    OneHundred = '100%',
    SeventyFive = '75%',
    Fifty = '50%',
    TwentyFive = '25%',
    Zero = '0%'
}

export enum TextEdgeOption {
    NoEdge = 'No Edge',
    Raised = 'Raised',
    Uniform = 'Uniform',
    Depressed = 'Depressed',
    DropShadow = 'Drop Shadow'
}

export class ClosedCaptionSettingMenu {

    private readonly _settingsMenu: Locator = this.page.locator('div[class*="closedCaptionsStyleSettingsPopover"]')

    constructor(public readonly page: Page) {
    }

    static readonly MENU_ITEMS = {
        FontFamily: 'Font Family',
        FontSize: 'Font Size',
        FontColor: 'Font Color',
        FontOpacity: 'Font Opacity',
        BackgroundColor: 'Background Color',
        BackgroundOpacity: 'Background Opacity',
        TextEdge: 'Text Edge',
        TextEdgeColor: 'Text Edge Color',
        TextEdgeOpacity: 'Text Edge Opacity',
        WindowColor: 'Window Color',
        WindowOpacity: 'Window Opacity'
    } as const;

    get settingsMenu(): Locator {
        return this._settingsMenu;
    }

    menuItemByName(byName: string): Locator {
        return this._settingsMenu.getByText(byName, {exact: true});
    }

    async clickOnMenuItemByName(byName: MenuItem) {
        await test.step(`Click on menu item by name ${byName}`, async () => {
            await this._settingsMenu.getByText(byName, {exact: true}).click();
        });
    }

    async checkMenuItemVisibility(item: string) {
        const menuItem = this.settingsMenu.getByText(item, {exact: true});

        await menuItem.scrollIntoViewIfNeeded();
        await expect(menuItem, `Menu item ${item} is not visible`).toBeVisible();
    }

    async checkMenuItemCurrentSetting(itemName: string, settingName: string) {
        await test.step(`Check that menu ${itemName} has the set setting ${settingName}`, async () => {
            await expect(this.menuItemByName(itemName)
                .locator('xpath=..')
                .locator('span[class="current"]'))
                .toHaveText(settingName);
        });
    }
}
