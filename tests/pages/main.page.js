import Header from './components/header'
import CookiesModal from './components/modals/cookies.modal'
import { checkVisibilityOfElementByDescription, clickButtonByDescription, selectOptionByDescription, setValueByDescription } from '../helpers/actions'

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
                locator: (page) => page.locator('.underline').filter({ hasText: 'Thank you' }),
                description: 'Thank you'
            }
        ]
    }

    async navigate() {
        await this.page.goto('./')
    }

    async checkVisibilityOf(description) {
        await checkVisibilityOfElementByDescription(description, this.elements, this.page)
    }

    async setValueTo(description, value) {
        await setValueByDescription(description, value, this.elements, this.page)
    }

    async selectOptionFrom(description, option) {
        await selectOptionByDescription(description, option, this.elements, this.page)
    }

    async click(description) {
        await clickButtonByDescription(description, this.elements, this.page)
    }
}