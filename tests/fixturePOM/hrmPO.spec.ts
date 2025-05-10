//import playwright module
import {test, expect} from '@playwright/test';
import {HomePage} from '../../src/pages/homepage';

//write test invalid credentials with invalid message
test('PO-My hrm invalid test invalid msg', async ({ page }) => {
    // await page.setViewportSize({
    //     width: 640,
    //     height: 480,
    // })
    console.log('Execution started');
    
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.logIn('adm','adm');
    await homePage.checkMsg('inval');
    await page.close();
});

//write test invalid credentials with valid message
test('PO-My hrm invalid test valid msg', async({page}) => {
    const homePage = new HomePage(page);
    //open orange hrm
    await homePage.goToURL();
    await homePage.logIn('admin','admin123');
    //await homePage.checkMsg('inval');
    await page.close();
});

