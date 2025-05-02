import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import path from 'path'; 
const jsonFilePath = path.join(__dirname, '../test-data/qa/testdata.json');
const csvData = fs.readFileSync(jsonFilePath, 'utf8');
const testData = JSON.parse(csvData); 
type td= {
    hrminv:{
        un:string,
        pw:string
    },

    hrmval:{
        un:string,
        pw:string
    },
}
const dtset = testData as td;
for (const ds in dtset) {
    const lgin = dtset[ds as keyof td];
    test('json test data : '+ lgin.un, async ({ page }) => {
        await page.goto(''+process.env.HRM_URL);
        //enter un and pw
        await page.getByRole('textbox', { name: 'Username' }).fill(lgin.un);
        await page.getByRole('textbox', { name: 'Password' }).fill(lgin.pw);
        //press login
        await page.getByRole('button', { name: 'Login' }).click();
    })
}
