import { test, expect } from "@playwright/test";

import * as XLSX from 'xlsx';


test("Excel data read", async ({ page }) => {

    const workbook = XLSX.readFile("data/UserData_02.xlsx"); // Reading the excel file 

    const sheet = workbook.Sheets["Sheet1"]; //Navigate to Sheet name 

    const data: any[] = XLSX.utils.sheet_to_json(sheet);

    await page.goto("https://testautomationpractice.blogspot.com/");

    for (const userdata of data) {
        await page.getByPlaceholder("Enter Name").fill(userdata.Name);

        await page.locator("//input[@placeholder='Enter EMail']").fill(userdata.Email);

        // await page.locator("//input[@placeholder='Enter Phone']").fill(userdata.PhoneNumber);

        await page.fill("#textarea",userdata.Address);

    }

})