import {test as base, expect} from '@playwright/test';
import {HomePage} from '../pages/homepage';
import { readenv } from '../utilities/JsonHelperEnv';
import { hrmlogin } from '../Interface/hrmlogin.interface';

export const test = base.extend<{ saveLogs: void; homePage : HomePage; hrmlgin : hrmlogin}>({
    saveLogs: [async({}, use) => {
        console.log("beofre Test");
        await use();
        console.log("after Test");},
        {auto: true}],
        homePage: async ({ page }, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        },
        hrmlgin: async ({}, use) => {
            const getenv = await readenv();
            await use(getenv);
        }
});

export {expect} from '@playwright/test';