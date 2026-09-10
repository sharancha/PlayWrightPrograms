import {test , expect} from "@playwright/test"

test('Alerts Handling', async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
 page.on('dialog', async alert =>{

    console.log(alert.message());
   console.log(alert.type())

   await alert.accept("Seenivasan");

//message - popup text
//type - alert,promt, confirm
//accept - ok btn 
//dismiss - cancel btn 
// accept(text )- enter the text in promt 

//test->URL launch->listners -> actions
 })
await page.locator("#promptBtn").first().click()

//await expect(page.locator("#demo")).toContainText("You pressed Cancel!")