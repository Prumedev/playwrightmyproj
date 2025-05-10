import { test, expect } from '@playwright/test';

//mock api req
test('Mocking API Response tests', async ({ page }) => {

  await page.route('*/**/api/v1/fruits', async route => {

    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'ply test12', id: 12 });
    json.push({ name: 'ply test13', id: 13 });
    json.push({ name: 'ply test14', id: 14 });
    json.push({ name: 'ply test15', id: 15 });

    await route.fulfill({ response, json });
  })

  await page.goto('https://demo.playwright.dev/api-mocking/');

  await expect(page.getByText('ply test12')).toBeVisible();
  await expect(page.getByText('ply test13')).toBeVisible();
  await expect(page.getByText('ply test14')).toBeVisible();
  await expect(page.getByText('ply test15')).toBeVisible();


});