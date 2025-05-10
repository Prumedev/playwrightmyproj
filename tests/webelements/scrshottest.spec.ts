import { test, expect } from '@playwright/test';

test('screenshot comparision', {tag : ['@smoke']}, async ({ page }, testInfo) => {

  await page.goto('https://github.com/login');
  //await page.press('body', 'F5');
  await expect(page).toHaveScreenshot('mygit.png');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('pru.dev@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('pru.dev@gmail.com');
  //await expect(page).toHaveScreenshot('mygit.png');
  await expect(page).toHaveScreenshot('mygit.png', {maxDiffPixels : 10});

  page.close();
});

test('element comparision', {tag : ['@smoke']}, async ({ page }, testInfo) => {

  await page.goto('https://github.com/login');
  //await page.press('body', 'F5');
  await expect(page.locator('//*[@class="auth-form-body mt-3"]')).toHaveScreenshot('login.png');

  await page.getByRole('textbox', { name: 'Username or email address' }).fill('pru.dev@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('pru.dev@gmail.com');
  //await expect(page).toHaveScreenshot('mygit.png');
  await expect(page.locator('//*[@class="auth-form-body mt-3"]')).toHaveScreenshot('login.png', {maxDiffPixels : 10});
  
  page.close();
});