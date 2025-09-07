import { test } from '@playwright/test'
import MainPage from '../pages/main.page'
import user from '../data/user'
import Credentials from '../helpers/creadentials'

let mainPage
let { email } = Credentials.get()

test.describe('Main page functionality', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page)
    await mainPage.navigate('./')
    await mainPage.cookiesModal.clickIfVisible('Accept all cookies button')
  })

  test('Check main page elements', async () => {
    await test.step('Check title of the main page', async () => {
      await mainPage.checkTitle('Try Regula Face SDK for Face Matching and Liveness Detection')
    })
    await test.step('Check visibility, text and links of header elements', async () => {
      await mainPage.header.checkVisibilityOfHeaderElements()
      await mainPage.header.checkTextOfHeaderElements()
      await mainPage.header.checkLinksOfHeaderElements()
    })
    await test.step('Check visibility, text and links of mobile apps tab elements', async () => {
      await mainPage.mobileAppsTab.checkVisibilityOfAppsButtons()
      await mainPage.mobileAppsTab.checkTextOfAppsButtons()
      await mainPage.mobileAppsTab.checkLinksOfAppsButtons()
    })
  })

  test('Pass get in touch form', async () => {
    await test.step('Fill in and submit the form', async () => {
      await mainPage.checkVisibilityOf("Let's Talk Business title")
      await mainPage.setValueTo('First name input field', user.name)
      await mainPage.setValueTo('Last name input field', user.lastName)
      await mainPage.setValueTo('Job title input field', user.jobTitle)
      await mainPage.setValueTo('Company name input field', user.company)
      await mainPage.selectOptionFrom('Contact industry dropdown', user.industry)
      await mainPage.selectOptionFrom('Verifications dropdown', user.verifications)
      await mainPage.setValueTo('Phone number input field', user.phone)
      await mainPage.setValueTo('Business email input field', email)
      await mainPage.setValueTo('Message textarea', user.message)
      await mainPage.selectOptionFrom('Contact country dropdown', user.country)
      await mainPage.checkVisibilityOf('Privacy policy checkbox')
      await mainPage.click('Privacy policy checkbox')
      await mainPage.click('Send request button')
    })
    await test.step('Verify form submission', async () => {
      await mainPage.checkVisibilityOf('Thank you')
    })
  })

  test('Check redirection of App Store link', async () => {
    await test.step('Click App Store link and verify redirection', async () => {
      await mainPage.mobileAppsTab.click('App Store link')
      await mainPage.checkNewTabUrl('https://apps.apple.com/lv/app/regula-document-reader/id1001303920')
    })
  })

  test('Check redirection of Google Play link', async () => {
    await test.step('Click Google Play link and verify redirection', async () => {
      await mainPage.mobileAppsTab.click('Google Play link')
      await mainPage.checkNewTabUrl('https://play.google.com/store/apps/details?id=com.regula.documentreader')
    })
  })
})