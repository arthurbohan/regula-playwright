import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/specs',
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
    baseURL: 'https://faceapi.regulaforensics.com/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
})