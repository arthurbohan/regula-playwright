import { test } from '@playwright/test'
import MainPage from '../pages/main.page'
import user from '../data/user'

let mainPage

test.describe('Header functionality', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    await mainPage.navigate()
    await mainPage.cookiesModal.clickIfVisible('Accept all cookies button')
  })

  test('Check visibility,text and links of header elements', async () => {
    await test.step('Check visibility,text and links of header elements', async () => {
      await mainPage.header.checkVisibilityOfHeaderElements()
      await mainPage.header.checkTextOfHeaderElements()
      await mainPage.header.checkLinksOfHeaderElements()
    })
  })

  test('Pass get in touch form', async () => {
    await mainPage.checkVisibilityOf("Let's Talk Business title")
    await mainPage.setValueTo('First name input field', user.name)
    await mainPage.setValueTo('Last name input field', user.lastName)
    await mainPage.setValueTo('Job title input field', user.jobTitle)
    await mainPage.setValueTo('Company name input field', user.company)
    await mainPage.selectOptionFrom('Contact industry dropdown', user.industry)
    await mainPage.selectOptionFrom('Verifications dropdown', user.verifications)
    await mainPage.setValueTo('Phone number input field', user.phone)
    await mainPage.setValueTo('Business email input field', user.email)
    await mainPage.setValueTo('Message textarea', user.message)
    await mainPage.selectOptionFrom('Contact country dropdown', user.country)
    await mainPage.checkVisibilityOf('Privacy policy checkbox')
    await mainPage.click('Privacy policy checkbox')
    await mainPage.click('Send request button')
    await mainPage.checkVisibilityOf('Thank you')
  })
})