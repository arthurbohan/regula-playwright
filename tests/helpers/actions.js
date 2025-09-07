import { expect } from '@playwright/test'

async function clickButtonByDescription(description, elements, page) {
    try {
        const element = elements.find(el => el.description === description)
        await element.locator(page).click({ timeout: 10000 })
    } catch (error) {
        console.error(`Error clicking button with description: "${description}":`, error)
    }
}

async function checkVisibilityOfElementByDescription(description, elements, page) {
    try {
        const element = elements.find(el => el.description === description)
        await element.locator(page).scrollIntoViewIfNeeded()
        await expect(element.locator(page)).toBeVisible({ timeout: 10000 })
    } catch (error) {
        console.error(`Error checking visibility of element with description: "${description}":`, error)
    }
}

async function setValueByDescription(description, value, elements, page) {
    try {
        const element = elements.find(el => el.description === description)
        await element.locator(page).fill(value)
    } catch (error) {
        console.error(`Error setting value: ${value} for element with description: "${description}":`, error)
    }
}

async function selectOptionByDescription(description, option, elements, page) {
    try {
        const element = elements.find(el => el.description === description)
        element.tagName === 'SELECT' && await element.locator(page).selectOption(option)
    } catch (error) {
        console.error(`Error selecting option: ${option} for element with description: "${description}":`, error)
    }
}

async function clickElementByDescriptionIfVisible(description, elements, page, timeout = 5000) {
    try {
        const element = elements.find(el => el.description === description)
        await element.locator(page).click({ timeout })
    } catch (error) {
        console.log(`Error clicking element with description: "${description}" if visible:`, error)
    }
}

export {
    clickButtonByDescription,
    checkVisibilityOfElementByDescription,
    setValueByDescription,
    selectOptionByDescription,
    clickElementByDescriptionIfVisible
}