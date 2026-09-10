import { test, expect } from "@playwright/test";

import * as XLSX from 'xlsx';


test("Excel data read", async ({ page }) => {

    const result = [

        {
            username: "user001",
            password: "Password001",
            status: "Active",
            data: ""
        },

{
            username: "user002",
            password: "Password002",
            status: "inActive",
            data: ""
        }

    ]


    await page.goto("https://testautomationpractice.blogspot.com/");

const data =    await page.locator("//h1[@class='title']").textContent();

    // jason to Excel 

const worksheet = XLSX.utils.json_to_sheet(result); // moving from json to Excel 

const workbook1 = XLSX.utils.book_new(); // it will create new Excel file

XLSX.utils.book_append_sheet(workbook1,worksheet,"Sheet1");// it will insert the data to that Excel Workbook1 --> worksheet --> sheet name 

XLSX.writeFile(workbook1,"data/username_03.xlsx");

})