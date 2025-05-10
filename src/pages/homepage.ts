import { Locator, Page, expect } from "playwright/test";

export class HomePage {
    readonly page: Page;
    readonly BRAND: Locator;
    readonly unTxt: Locator;
    readonly pwtxt: Locator;
    readonly lgibtn: Locator;
    readonly valmsg: Locator;

    constructor(page: Page) {
        this.page = page;

        this.BRAND = page.getByRole('img', { name: 'company-branding' });
        // this.unTxt = page.locator('//input[@name="username"]');
        this.unTxt = page.getByRole('textbox', { name: 'Username' });
        this.pwtxt = page.getByRole('textbox', { name: 'Password' });
        this.lgibtn = page.getByRole('button', { name: 'Login' });
        this.valmsg = page.getByText('Invalid credentials', { exact: true });
        // this.invalmsg = this.page.getByText('Invalid credential', {exact: true});
        const url = '';
    }

    async goToURL() {
        switch (process.env.TEST_EXECUTION_ENV) {
            case 'qa': {
                //statements; 
                await this.page.goto('' + process.env.QA_HRM_URL);
                console.log('Entered into : ' + process.env.TEST_EXECUTION_ENV);
                break;
            }
            case 'dev': {
                //statements; 
                await this.page.goto('' + process.env.DEV_HRM_URL);
                console.log('Entered into : ' + process.env.TEST_EXECUTION_ENV);
                break;
            }
            default: {
                //statements; 
                console.log('app details not avialable for : ' + process.env.TEST_EXECUTION_ENV);
                break;
            }
        }

        await expect(this.BRAND).toBeVisible();
    }

    async logIn(un: string, pw: string) {
        //enter un and pw
        await this.unTxt.click();
        await this.unTxt.fill(un);
        await this.pwtxt.fill(pw);
        //press login
        await this.lgibtn.click({ timeout: 3000 });
    }

    async checkMsg(msg: string) {
        //this.msg1 = msg;
        //validate message
        //this.val_msg = this.page.getByText(msg, {exact: true});
        await expect(this.valmsg).toBeVisible();
    }
}