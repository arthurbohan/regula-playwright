import { clickElementByDescriptionIfVisible } from '../../../helpers/actions'

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

    async clickIfVisible(description) {
        await clickElementByDescriptionIfVisible(description, this.elements, this.page)
    }
}