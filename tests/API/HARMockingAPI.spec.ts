import { test, expect } from '@playwright/test';

//mock api req
test('Mocking API wt HAR file tests', async ({ page }) => {

  await page.routeFromHAR('./har/mock.har', {

    url : '*/**/api/v1/fruits',
    update : false
  })

  await page.goto('https://demo.playwright.dev/api-mocking/');

  await expect(page.getByText('Strawberry')).toBeVisible();
  await expect(page.getByText('ply test12')).toBeVisible();
  await expect(page.getByText('ply test13')).toBeVisible();
  await expect(page.getByText('ply test14')).toBeVisible();


});