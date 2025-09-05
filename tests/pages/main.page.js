import test, { expect } from '@playwright/test'
import Header from './components/header'
import CookiesModal from './components/modals/cookies.modal'

export default class MainPage {
    constructor(page) {
        this.page = page
        this.header = new Header(page)
        this.cookiesModal = new CookiesModal(page)
        this.elements = [
            {
                locator: (page) => page.locator('.title', { name: "Let's Talk Business" }),
                description: "Let's Talk Business title"
            },
            {
                locator: (page) => page.locator('input[name="firstname"]'),
                description: 'First name input field'
            },
            {
                locator: (page) => page.locator('input[name="lastname"]'),
                description: 'Last name input field'
            },
            {
                locator: (page) => page.locator('input[name="jobtitle"]'),
                description: 'Job title input field'
            },
            {
                locator: (page) => page.locator('input[name="company"]'),
                description: 'Company name input field'
            },
            {
                locator: (page) => page.locator('select[name="contact_industry"]'),
                description: 'Contact industry dropdown',
                tagName: 'SELECT'
            },
            {
                locator: (page) => page.locator('select[name="verifications"]'),
                description: 'Verifications dropdown',
                tagName: 'SELECT'
            },
            {
                locator: (page) => page.locator('input[name="phone"]'),
                description: 'Phone number input field'
            },
            {
                locator: (page) => page.locator('input[name="email"]'),
                description: 'Business email input field'
            },
            {
                locator: (page) => page.locator('textarea[name="message"]'),
                description: 'Message textarea'
            },
            {
                locator: (page) => page.locator('select[name="contact_country"]'),
                description: 'Contact country dropdown',
                tagName: 'SELECT'
            },
            {
                locator: (page) => page.locator('input[value="Send request"]'),
                description: 'Send request button'
            },
            {
                locator: (page) => page.locator('label').filter({ hasText: 'I have read and agree with' }),
                description: 'Privacy policy checkbox'
            },
            {
                locator: (page) => page.locator('.underline', { name: 'Thank you' }),
                description: 'Thank you'
            }
        ]
    }

    async navigate() {
        await this.page.goto('./')
    }

    async checkVisibilityOfElementByDescription(description) {
        test.step(`Check visibility of "${description}"`, async () => {
            const element = this.elements.find(el => el.description === description)
            await element.locator(this.page).scrollIntoViewIfNeeded()
            await expect(element.locator(this.page)).toBeVisible({ timeout: 10000 })
        })
    }

    async setValueByDescription(description, value) {
        test.step(`Set value in ${description}`, async () => {
            const element = this.elements.find(el => el.description === description)
            await element.locator(this.page).fill(value)
        })
    }

    async selectOptionByDescription(description, option) {
        test.step(`Select option in ${description}`, async () => {
            const element = this.elements.find(el => el.description === description)
            element.tagName === 'SELECT' && await element.locator(this.page).selectOption(option)
        })
    }

    async clickButtonByDescription(description) {
        test.step(`Click ${description}`, async () => {
            const element = this.elements.find(el => el.description === description)
            await element.locator(this.page).click({ timeout: 10000 })
        })
    }
}