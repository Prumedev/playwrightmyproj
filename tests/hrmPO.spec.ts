//import playwright module
import {test, expect} from '@playwright/test';
import {HomePage} from '../src/pages/homepage';

//write test invalid credentials with invalid message
test('PO-My hrm invalid test invalid msg', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToURL(''+process.env.HRM_URL);
    await homePage.logIn('adm','adm');
    await homePage.checkMsg('inval');
    await page.close();
});

//write test invalid credentials with valid message
test('PO-My hrm invalid test valid msg', async({page}) => {
    const homePage = new HomePage(page);
    //open orange hrm
    await homePage.goToURL(''+process.env.HRM_URL);
    await homePage.logIn('admin','admin123');
    //await homePage.checkMsg('inval');
    await page.close();
});

