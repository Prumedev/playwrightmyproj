import { test, expect } from '@playwright/test';

test('Mouse clicks', {tag : ['@smoke']}, async ({ page }, testInfo) => {

  await page.goto('https://github.com/Prumedev');
  //await page.press('body', 'F5');
  await page.getByRole('banner').locator('div').filter({ hasText: 'Search or jump to... Search' }).nth(3).click();
  await page.getByRole('link', { name: 'My-Files' }).click({
    button: 'left'
  });
  await page.locator('//*[@id="repository-details-container"]//li[1]/a').hover();
  //aria-label="You must be signed in to change notification settings"
  const customersScreenshot = await page.screenshot();
  testInfo.attach('before drag', {
    body: customersScreenshot,
    contentType: 'image/png',
    //image/png
  });
  await expect(page.getByText('You must be signed in to change notification settings')).toBeVisible();
  //await expect (page.locator('//*[@id="tooltip-cbdcb3da-277f-458b-9f22-888403b14de4"]/text()')).isEnabled();

  // await page.getByRole('link', { name: 'GitHub Channel on YouTube' }).click({
  //   button: 'right'
  // });
  // await page.locator('#repo-content-pjax-container svg').click({
  //   button: 'right'
  // });
  page.close();
});

test('Mouse clicks dup', {tag : ['@smoke', '@reg']}, async ({ page }, testInfo) => {

  await page.goto('https://github.com/Prumedev');
  //await page.press('body', 'F5');
  await page.getByRole('banner').locator('div').filter({ hasText: 'Search or jump to... Search' }).nth(3).click();
  await page.getByRole('link', { name: 'My-Files' }).click({
    button: 'left'
  });
  await page.locator('//*[@id="repository-details-container"]//li[1]/a').hover();
  //aria-label="You must be signed in to change notification settings"
  const customersScreenshot = await page.screenshot();
  testInfo.attach('before drag', {
    body: customersScreenshot,
    contentType: 'image/png',
    //image/png
  });
  await expect(page.getByText('You must be signed in to change notification settings')).toBeVisible();
  //await expect (page.locator('//*[@id="tooltip-cbdcb3da-277f-458b-9f22-888403b14de4"]/text()')).isEnabled();

  // await page.getByRole('link', { name: 'GitHub Channel on YouTube' }).click({
  //   button: 'right'
  // });
  // await page.locator('#repo-content-pjax-container svg').click({
  //   button: 'right'
  // });
  page.close();
});