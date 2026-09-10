//test - current tc
//expect - Asserstion
//goto - URL action
//exce - npx playwright test Demo.spec.ts
//report - npx playwright show-report
//headed mode - npx playwright test Demo.spec.ts --headed
//run in a specific browser - npx playwright test Demo.spec.ts --project=chromium
//debug - npx playwright test Demo.spec.ts --debug 
//ui mode - npx playwright test Demo.spec.ts --ui



import {test , expect } from "@playwright/test";

test("Validate title",async ({page})=>{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await expect(page).toHaveTitle("OrangeHRM");

 let title :string =await page.title();
 console.log("Title is : "+title);

})
// let URL : string =await page.url();
//  console.log(URL)

test("Validate URL", async ({page})=>{

 let url :string =  page.url();
console.log("URL is : "+ url);

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})


//async
//await
//promise