import { test, expect } from '@playwright/test';
import testData from '../test-data/qa/testdata.json';

type td= {
    hrminv:{
        un:string,
        pw:string
    },

    hrmval:{
        un:string,
        pw:string
    },
}
//type td = String;
//const td = testData;
//const td = testData;
const dtset = testData as td;
for (const ds in dtset) {
    const lgin = dtset[ds as keyof td];
    test('env test data test : '+ lgin.un, async ({ page }) => {
        await page.goto(''+process.env.HRM_URL);
        //enter un and pw
        await page.getByRole('textbox', { name: 'Username' }).fill(lgin.un);
        await page.getByRole('textbox', { name: 'Password' }).fill(lgin.pw);
        //press login
        await page.getByRole('button', { name: 'Login' }).click();
    })
}


// test('env test data test', async ({ page }) => {
//     await page.goto(''+process.env.HRM_URL);
//     await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
//     //enter un and pw
//     await page.getByRole('textbox', { name: 'Username' }).fill(testData.hrminv.un);
//     await page.getByRole('textbox', { name: 'Password' }).fill(testData.hrminv.un);
//     //press login
//     await page.getByRole('button', { name: 'Login' }).click();
//     //validate message
//     await expect(page.getByText('Invalid credentials', {exact: true})).toBeVisible();
// })

// //write test invalid credentials
// test('My hrm invalid test invalid msg', async({page}) => {
//     //open orange hrm
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     //enter un and pw
//     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//     await page.getByRole('textbox', { name: 'Password' }).fill('admin12');
//     //press login
//     await page.getByRole('button', { name: 'Login' }).click();
//     //validate message
//     await expect(page.getByText('Invalid credential', {exact: true})).toBeVisible();
// })

// //write test valid credentials
// test('My hrm valid test', async({page}) => {
//     //open orange hrm
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     //enter un and pw
//     await page.getByRole('textbox', { name: 'Username' }).click();
//     await page.getByRole('textbox', { name: 'Username' }).fill('admin');
//     await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await page.close();

// })