import { test, expect } from '@playwright/test';

test('iframe datapicker tests', {tag : ['@smoke']}, async ({ page }, testInfo) => {
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

    await page.locator('iframe').contentFrame().locator('#datepicker').fill('07/06/2024');
    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const hardcodedss = await page.screenshot();
    testInfo.attach('hard coded past', {
      body: hardcodedss,
      contentType: 'image/png',
      //image/png
    });
    
    await page.locator('iframe').contentFrame().locator('#datepicker').click();
    await page.locator('iframe').contentFrame().locator('.ui-datepicker-today').click();

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const todayss = await page.screenshot();
    testInfo.attach('pick Today', {
      body: todayss,
      contentType: 'image/png',
      //image/png
    });

    await page.locator('iframe').contentFrame().locator('#datepicker').click();
        var num:number = 2; 
        var i:number; 
        for(i = num;i>=1;i--) {
            await page.locator('iframe').contentFrame().locator('//*[@title="Prev"]').click();
            ////*[@title='Next']
            //await page.locator('iframe').contentFrame().locator('//*[@id="ui-datepicker-div"]/div/a[1]/span').click();
        }
    await page.locator('iframe').contentFrame().locator('//*[@data-date="3"]').click();

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const pastss = await page.screenshot();
    testInfo.attach('pick past Date', {
      body: pastss,
      contentType: 'image/png',
      //image/png
    });
    await page.close();
});

test('iframe datapicker tests dup', {tag : ['@smoke', '@reg']}, async ({ page }, testInfo) => {
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

    await page.locator('iframe').contentFrame().locator('#datepicker').fill('07/06/2023');
    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const hardcodedss = await page.screenshot();
    testInfo.attach('hard coded past', {
      body: hardcodedss,
      contentType: 'image/png',
      //image/png
    });
    
    await page.locator('iframe').contentFrame().locator('#datepicker').click();
    await page.locator('iframe').contentFrame().locator('.ui-datepicker-today').click();

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const todayss = await page.screenshot();
    testInfo.attach('pick Today', {
      body: todayss,
      contentType: 'image/png',
      //image/png
    });

    await page.locator('iframe').contentFrame().locator('#datepicker').click();
        var num:number = 2; 
        var i:number; 
        for(i = num;i>=1;i--) {
            await page.locator('iframe').contentFrame().locator('//*[@title="Prev"]').click();
            ////*[@title='Next']
            //await page.locator('iframe').contentFrame().locator('//*[@id="ui-datepicker-div"]/div/a[1]/span').click();
        }
    await page.locator('iframe').contentFrame().locator('//*[@data-date="3"]').click();

    //https://www.checklyhq.com/blog/attach-screenshots-to-your-playwright-test-reports/
    const pastss = await page.screenshot();
    testInfo.attach('pick past Date', {
      body: pastss,
      contentType: 'image/png',
      //image/png
    });
    await page.close();
});