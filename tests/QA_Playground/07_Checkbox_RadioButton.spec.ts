import {test , expect } from "@playwright/test";

test("Verify Basic iframe — Fill and Submit ",async ({page})=>{
    const name = "Sharan";

page.goto("https://qaplayground.com/practice/radio-checkbox");


//S01 Scenario 1: Basic Checkbox Check / Uncheck
await page.locator("#chk-accept-terms").check();

await page.locator("#chk-accept-terms").uncheck();

//S02 Scenario 2: Radio Button Group
await page.locator("#radio-plan-starter").click();

await page.locator("#radio-plan-pro").click();

await page.locator("#radio-plan-business").click();

//S03 Scenario 3: Checkbox Group — Select All

const value = await page.locator("//div[@data-testid='rc-skill-group']//label");

const v1 = await value.count();


for (let i = 0 ; i < v1; i++)
{
    await value.nth(i).check();
}

const value1 = await page.locator("//div[@data-testid='rc-skill-group']//label").all();
for (const v of value1)
{
    await v.click();
}


//S04 Scenario 4: Assert Checked / Unchecked State

const checkBok = await page.locator("#chk-newsletter");

   await checkBok.click();


if (!(await checkBok.isChecked()))
{
   await checkBok.check();

   console.log("Check box is not checked so now it got checked");
}
else
{
    console.log("Check box is checked")
}

//S05 Scenario 5: Disabled Controls
const d1 = await page.locator("#chk-disabled");
const d2 = await page.locator("#radio-disabled");
const btn = await page.locator("//button[contains(.,'Assert disabled state')]");

if(!(await d1.isEnabled()) && !(await d2.isEnabled())){

await btn.click();

console.log("Both are disabled");

}


const result = await page.locator("#result-s05");
await expect(result).toHaveText("Both controls confirmed disabled");

console.log("done");
})