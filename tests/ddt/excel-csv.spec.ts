import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import EXCEL from 'xlsx';
import { parse } from 'csv-parse/sync';
const FilePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');
const file = fs.readFileSync(FilePath);
const wb = EXCEL.read(file);
const sh = wb.Sheets[wb.SheetNames[0]];
const csv= EXCEL.utils.sheet_to_csv(sh);
const testData = parse(csv, { columns: true, skip_empty_lines: true });

for (const row of testData) {
    test('xls data test : '+ row.un, async ({ page }) => {
        await page.goto(''+process.env.HRM_URL);
        //enter un and pw
        await page.getByRole('textbox', { name: 'Username' }).fill(row.un);
        await page.getByRole('textbox', { name: 'Password' }).fill(row.pw);
        //press login
        await page.getByRole('button', { name: 'Login' }).click();
    });
  }
