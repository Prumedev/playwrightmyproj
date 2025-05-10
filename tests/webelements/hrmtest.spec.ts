//import playwright module
import {test, expect} from '@playwright/test'

//write test invalid credentials with valid message
test('My hrm invalid test valid msg', async({page}) => {
    //open orange hrm
    await page.goto(''+process.env.HRM_URL);
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    //enter un and pw
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin12');
    //press login
    await page.getByRole('button', { name: 'Login' }).click();
    //validate message
    await expect(page.getByText('Invalid credentials', {exact: true})).toBeVisible();
})

//write test invalid credentials
test('My hrm invalid test invalid msg', async({page}) => {
    //open orange hrm
    await page.goto(''+process.env.HRM_URL);
    //enter un and pw
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin12');
    //press login
    await page.getByRole('button', { name: 'Login' }).click();
    //validate message
    await expect(page.getByText('Invalid credential', {exact: true})).toBeVisible();
})

//write test valid credentials
test('My hrm valid test', async({page}) => {
    //open orange hrm
    await page.goto(''+process.env.HRM_URL);
    //enter un and pw
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.close();

})