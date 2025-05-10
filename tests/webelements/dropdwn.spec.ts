import { test, expect } from '@playwright/test';

test('Dropedown tests', async ({ page }) => {
  test.setTimeout(1 * 60 * 1000);
  //const url = process.env.FB_URL;
  await page.goto(''+process.env.FB_URL);
  await page.getByTestId('open-registration-form-button').click();
  await page.getByLabel('Month').selectOption('3');
  console.log('Mar selected');
  await page.getByLabel('Month').selectOption('Aug');
  console.log('Aug selected');
  //drop down by css locator - '#month>option'
  await expect(page.locator('//*[@*="month"]/option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
  console.log('All months verified');
  // await page.waitForTimeout(60000);
  await page.close();
});