import { test, expect } from '@playwright/test';
import fs from 'fs';
//import path from 'path';
import EXCEL from 'xlsx';

//define test data structure
interface tr {un : string, pw : string}

export function readexcel(filePath: string){
//const xlfile = path.join(__dirname, '../test-data/qa/testdata.xlsx');
const file = fs.readFileSync(filePath);
const wb = EXCEL.read(file);
const sh = wb.Sheets[wb.SheetNames[0]];
const rawdt: any[]= EXCEL.utils.sheet_to_json(sh, {header:1});
const rec: tr[]=rawdt.slice(1).map((column: any) => ({un : column[0], pw : column[1]}))
return rec;
}