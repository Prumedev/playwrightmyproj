import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step("Navigate to Orange HRM app", async() =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  await test.step("Enter login details", async() =>{
    //element screenshot
    await page.locator('.orangehrm-demo-credentials').screenshot({path : './Screenshots/defultcred.png'});
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin1');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
    //full page screenshots
    await page.screenshot({path : './Screenshots/fullpg.png', fullPage : true});
  });

  await test.step("Click login button", async() =>{
    await page.getByRole('button', { name: 'Login' }).click();
  });

  await test.step("Validate error message", async() =>{
    await expect(page.getByRole('alert')).toContainText('Invalid credentials');
    //page screenshot
    await page.screenshot({path : './Screenshots/loginpg.png'});
  });
  await page.close();
});