import { test, expect } from '@playwright/test';

test('iframe drag and drop tests', {tag : ['@smoke', '@reg']}, async ({ page }, testInfo) => {
    await page.goto('https://jqueryui.com/droppable/');
    //console.log('opened site');
    //await page.screenshot({path : './Screenshots/beforedrag.png'});

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const customersScreenshot = await page.screenshot();
    testInfo.attach('before drag', {
      body: customersScreenshot,
      contentType: 'image/png',
      //image/png
    });
    const dragelement = page.locator('iframe').contentFrame().locator('#draggable');
    const dropelement = page.locator('iframe').contentFrame().locator('#droppable');
    //console.log('want to drag and drop?');
    await dragelement.dragTo(dropelement);
    //await page.screenshot({path : './Screenshots/afterdrag.png'});
    //console.log('dragged and dropped');
    await page.close();
});