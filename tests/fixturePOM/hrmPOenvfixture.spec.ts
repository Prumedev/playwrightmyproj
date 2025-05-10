//import playwright module
//import {test, expect} from '@playwright/test';
import {test} from '../../src/fixure/testfixure';
// import {HomePage} from '../src/pages/homepage';

//write test invalid credentials with valid message
test('Env file Fixture POM - My hrm invalid test valid msg', async({page, homePage, hrmlgin}) => {
    // const homePage = new HomePage(page);
    //open orange hrm
    await homePage.goToURL();
    console.log(String(hrmlgin.hrmlog?.un), String(hrmlgin.hrmlog?.pw));
    await homePage.logIn(String(hrmlgin.hrmlog?.un), String(hrmlgin.hrmlog?.pw));
    //await homePage.checkMsg('inval');
    await page.close();
});

