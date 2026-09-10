import {test , expect } from "@playwright/test";

test.skip("TC01 — Verify table is displayed",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const tableName = await page.locator("//table[@name='BookTable']");

    await expect(tableName).toBeVisible();



})

test.skip("TC02 — Count table rows",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const tableRow = await page.locator("//table[@name='BookTable']//tr");

    const tableColumn = await page.locator("//table[@name='BookTable']//th")

console.log(await tableRow.count());

console.log(await tableColumn.count());


})

test("TC04 — Print all book names",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const tableRow = await page.locator("//table[@name='BookTable']//tr");

    const tableColumn = await page.locator("//table[@name='BookTable']//th")

console.log(await tableRow.count());

console.log(await tableColumn.count());


for(let i = 1; i<await tableRow.count(); i++)
{
    for(let j = 0 ; j<await tableColumn.count(); j++)
        {
           const value = await page.locator("((//table[@name='BookTable']//tr)["+i+"])//td["+j+"]").textContent();

           console.log(value);
        }
    }

})
