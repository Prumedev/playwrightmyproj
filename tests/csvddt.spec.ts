import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
const csvFilePath = path.join(__dirname, '../test-data/qa/testdata.csv');
const csvData = fs.readFileSync(csvFilePath, 'utf8');
const testData = parse(csvData, { columns: true, skip_empty_lines: true });

for (const row of testData) {
    test('csv data test : '+ row.un, async ({ page }) => {
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