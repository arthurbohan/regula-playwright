import test from '@playwright/test'

export default class CookiesModal {
    constructor(page) {
        this.page = page
        this.elements = [
            {
                locator: (page) => page.locator('[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]'),
                description: 'Accept all cookies button'
            }
        ]
    }

    clickButtonByDescription(description) {
        test.step(`Click ${description}`, async () => {
            const element = this.elements.find(el => el.description === description)
            await element.locator(this.page).click({ timeout: 10000 })
        })
    }
}