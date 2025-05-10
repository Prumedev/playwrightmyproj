import { test, expect } from '@playwright/test';

test('First browser', { tag: ['@smoke'] }, async ({ page, browser }, testInfo) => {

    await page.goto('https://github.com/Prumedev');
    //await page.press('body', 'F5');
    await page.getByRole('banner').locator('div').filter({ hasText: 'Search or jump to... Search' }).nth(3).click();

    const git = await page.screenshot({fullPage: true});
    testInfo.attach('git', {
        body: git,
        contentType: 'image/png',
        //image/png
    });

    const page2 = (await browser.newContext()).newPage();
    await (await page2).goto('https://gmail.com/');

    const pg2tab1 = (await page2).context().newPage();
    await (await pg2tab1).goto('https://youtube.com/');

    const youtube = await(await pg2tab1).screenshot({fullPage: true});
    testInfo.attach('youtube', {
        body: youtube,
        contentType: 'image/png',
        //image/png
    });
    await page.close();
    (await page2).close();
    (await pg2tab1).close();
    
});