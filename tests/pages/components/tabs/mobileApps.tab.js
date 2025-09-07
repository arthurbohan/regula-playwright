import { checkAttributeOfElements, checkTextOfElements, checkVisibilityOfElements, clickButtonByDescription } from '../../../helpers/actions'

export default class MobileAppsTab {
    constructor(page) {
        this.page = page
        this.elements = [
            {
                locator: (page) => page.locator('div[data-test="mobile-apps"] a').filter({ hasText: 'App Store' }),
                description: 'App Store link',
                text: 'App Store',
                attribute: {
                    name: 'href',
                    value: 'https://apps.apple.com/lv/app/regula-document-reader/id1001303920'
                }
            },
            {
                locator: (page) => page.locator('div[data-test="mobile-apps"] a').filter({ hasText: 'Google Play' }),
                description: 'Google Play link',
                text: 'Google Play',
                attribute: {
                    name: 'href',
                    value: 'https://play.google.com/store/apps/details?id=com.regula.documentreader'
                }
            }
        ]
    }

    async checkLinksOfAppsButtons() {
        await checkAttributeOfElements(this.elements, this.page)
    }

    async checkTextOfAppsButtons() {
        await checkTextOfElements(this.elements, this.page)
    }

    async checkVisibilityOfAppsButtons() {
        await checkVisibilityOfElements(this.elements, this.page)
    }

    async click(description) {
        await clickButtonByDescription(description, this.elements, this.page)
    }
}