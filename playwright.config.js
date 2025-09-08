import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/specs',
  reporter: [['html', { open: 'never' }]],
  use: {
    workers: process.env.CI ? 1 : undefined,
    headless: process.env.CI ? true : false,
    baseURL: 'https://faceapi.regulaforensics.com/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
})