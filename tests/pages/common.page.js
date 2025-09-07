import { expect } from '@playwright/test'

export default class CommonPage {
    constructor(page) {
        this.page = page
    }

    async navigate(path) {
        await this.page.goto(path)
    }

    async checkTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle)
    }

    async checkPageUrl(expectedUrl) {
        await expect(this.page).toHaveURL(expectedUrl)
    }

    async checkNewTabUrl(expectedUrl) {
        const newPage = await this.page.context().waitForEvent('page')
        await newPage.waitForLoadState()
        await expect(newPage).toHaveURL(expectedUrl)
        await newPage.close()
    }
}