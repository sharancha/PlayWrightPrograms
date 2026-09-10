import {test,expect} from "@playwright/test";

test("Validate the Orange HR page visible" ,async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByPlaceholder("Username").fill("sharan");

await page.getByPlaceholder("Password").fill("password@2026");


})