//import playwright module
//import {test, expect} from '@playwright/test';
import {test} from '../../src/fixure/testfixure';
// import {HomePage} from '../src/pages/homepage';

//write test invalid credentials with valid message
test('Fixture PO - My hrm invalid test valid msg', async({page, homePage}) => {
    // const homePage = new HomePage(page);
    //open orange hrm
    await homePage.goToURL();
    await homePage.logIn('admin','admin123');
    //await homePage.checkMsg('inval');
    await page.close();
});

