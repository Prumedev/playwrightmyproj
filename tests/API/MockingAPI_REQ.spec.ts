import { test, expect } from '@playwright/test';

//mock api req
test('Mocking API Request tests', async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [
      { name: 'ply test12', id: 12 },
      { name: 'ply test13', id: 13 },
      { name: 'ply test14', id: 14 },
      { name: 'ply test15', id: 15 },
    ];
    await route.fulfill({ json });
  })

  await page.goto('https://demo.playwright.dev/api-mocking/');

  await expect(page.getByText('ply test12')).toBeVisible();
  await expect(page.getByText('ply test13')).toBeVisible();
  await expect(page.getByText('ply test14')).toBeVisible();
  await expect(page.getByText('ply test15')).toBeVisible();


});