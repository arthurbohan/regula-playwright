import test, { expect } from '@playwright/test'
import { clickButtonByDescription } from '../../helpers/actions'

export default class Header {
    constructor(page) {
        this.page = page
        this.elements = [
            {
                locator: (page) => page.locator('[data-test="header-logo-link"]'),
                description: 'Header logo link',
                attribute: {
                    name: 'href',
                    value: 'https://regulaforensics.com/'
                }
            },
            {
                locator: (page) => page.locator('[data-test="button__drop-down"]'),
                description: 'Face SDK dropdown button',
                text: 'Face SDK'
            },
            {
                locator: (page) => page.locator('[data-test="navigation-link-developer-hub"]'),
                description: 'Developer Hub navigation link',
                text: 'Developer Hub',
                attribute: {
                    name: 'href',
                    value: 'https://docs.regulaforensics.com/'
                }
            },
            {
                locator: (page) => page.locator('[data-test="navigation-link-help-center"]'),
                description: 'Help Center navigation link',
                text: 'Help Center',
                attribute: {
                    name: 'href',
                    value: 'https://support.regulaforensics.com/'
                }
            },
            {
                locator: (page) => page.locator('[data-test="navigation-link-blog"]'),
                description: 'Blog navigation link',
                text: 'Blog',
                attribute: {
                    name: 'href',
                    value: 'https://regulaforensics.com/blog/'
                }
            },
            {
                locator: (page) => page.locator('button[data-test="button-get-in-touch"]'),
                description: 'Get in Touch button',
                text: 'Get in Touch'
            }
        ]
    }

    async checkVisibilityOfHeaderElements() {
        for (const { locator } of this.elements) {
            await expect(locator(this.page)).toBeVisible({ timeout: 10000 })
        }
    }

    async checkTextOfHeaderElements() {
        for (const { locator, text } of this.elements) {
            text && await expect(locator(this.page)).toHaveText(text)
        }
    }

    async checkLinksOfHeaderElements() {
        for (const { locator, attribute } of this.elements) {
            attribute && await expect(locator(this.page)).toHaveAttribute(attribute.name, attribute.value)
        }
    }

    async click(description) {
        await clickButtonByDescription(description, this.elements, this.page)
    }
}