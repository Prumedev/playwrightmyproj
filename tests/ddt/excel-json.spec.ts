import { test, expect } from '@playwright/test';
import path from 'path';
import { readexcel } from '../../src/utilities/excelhelp';

const filepath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');
const records = readexcel(filepath);

for (const row of records) {
    test('excel to json data test : '+ row.un, async ({ page }) => {
        await page.goto(''+process.env.HRM_URL);
        //enter un and pw
        await page.getByRole('textbox', { name: 'Username' }).fill(row.un);
        await page.getByRole('textbox', { name: 'Password' }).fill(row.pw);
        //press login
        await page.getByRole('button', { name: 'Login' }).click();
    });
  }


// type td = {
//     inv : string,
//     val : string
// }

// const rec = parse{
//     fs.readFileSync(path.join(__dirname,'../test-data/qa/test-data.csv')),
//     {
//         columns : true,
//         skipEmptyLines : true
//     }
// } as td[];