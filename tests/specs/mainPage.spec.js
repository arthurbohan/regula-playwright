import { test } from '@playwright/test'
import MainPage from '../pages/main.page'
import user from '../data/user'

let mainPage

test.describe('Header functionality', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    await mainPage.navigate()
    await mainPage.cookiesModal.clickButtonByDescription('Accept all cookies button')
  })

  test('Check visibility,text and links of header elements', async () => {
    await mainPage.header.checkVisibilityOfHeaderElements()
    await mainPage.header.checkTextOfHeaderElements()
    await mainPage.header.checkLinksOfHeaderElements()
  })

  test('Pass get in touch form', async () => {
    await mainPage.checkVisibilityOfElementByDescription("Let's Talk Business title")
    await mainPage.setValueByDescription('First name input field', user.name)
    await mainPage.setValueByDescription('Last name input field', user.lastName)
    await mainPage.setValueByDescription('Job title input field', user.jobTitle)
    await mainPage.setValueByDescription('Company name input field', user.company)
    await mainPage.selectOptionByDescription('Contact industry dropdown', user.industry)
    await mainPage.selectOptionByDescription('Verifications dropdown', user.verifications)
    await mainPage.setValueByDescription('Phone number input field', user.phone)
    await mainPage.setValueByDescription('Business email input field', user.email)
    await mainPage.setValueByDescription('Message textarea', user.message)
    await mainPage.selectOptionByDescription('Contact country dropdown', user.country)
    await mainPage.checkVisibilityOfElementByDescription('Privacy policy checkbox')
    await mainPage.clickButtonByDescription('Privacy policy checkbox')
    await mainPage.clickButtonByDescription('Send request button')
    await mainPage.checkVisibilityOfElementByDescription('Thank you')
  })
})