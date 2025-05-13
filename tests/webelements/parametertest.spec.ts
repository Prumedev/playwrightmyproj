import { test, expect } from '@playwright/test'

const dates = ['07/06/2024', '07/07/2024', '07/08/2024']

for (const pdate of dates) {

  test('test' + pdate, { tag: ['@smoke', '@reg'] }, async ({ page }, testInfo) => {

  //test('tests parameterzation ${pdate}', { tag: ['@reg'] }, async ({ page }, testInfo) => {

    await page.goto('https://jqueryui.com/datepicker/');
    //console.log('opened site');
    //await page.screenshot({path : './Screenshots/beforedrag.png'});

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const defaultss = await page.screenshot();
    testInfo.attach('default date', {
      body: defaultss,
      contentType: 'image/png',
      //image/png
    });

    await page.locator('iframe').contentFrame().locator('#datepicker').fill(pdate);
    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const hardcodedss = await page.screenshot();
    testInfo.attach('hard coded past', {
      body: hardcodedss,
      contentType: 'image/png',
      //image/png
    });
    await page.close();
  });

}


