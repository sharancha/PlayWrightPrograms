import{test ,expect, chromium } from '@playwright/test'

test('validate browser', async({})=>{

   const browser =await chromium.launch({headless:false})

 const context1 = await browser.newContext(); 
 const context2 = await browser.newContext();

 const page1 = await context1.newPage();
 const page2=  await context2.newPage();

 await page1.goto("https://testautomationpractice.blogspot.com/");
 await page1.getByPlaceholder("Enter Name").fill("sadsadasd");


await page2.goto("https://www.leafground.com/input.xhtml");
await page2.locator("//input[@id='j_idt88:name']").click();
await page2.locator("//input[@id='j_idt88:name']").fill("dadasdasd");


})

// import{test ,expect } from '@playwright/test'

// test.describe('Reg' , () => {
// test.describe('Smoke' , () => {
    
// test('validate browser1 @run1', async ({page}) =>{
// console.log("1")

// })
// test('validate browser2 @run2', async({page})=>{
// console.log("2");

// })
// });
// test.describe('Sanity @run3' , () => {
// test('validate browser3', async({page})=>{

// console.log("3");
// })
// });

// });

//    const browser =await chromium.launch({headless:false})

//  const context1 = await browser.newContext(); 
//  //const con = await context.browser()
//   const context2 = await browser.newContext();

//   const page1 = await context1.newPage();
//  const page2=  await context2.newPage();

//  await page1.goto("https://testautomationpractice.blogspot.com/");
//  await page1.getByPlaceholder("Enter Name").fill("sadsadasd");


// await page2.goto("https://www.leafground.com/input.xhtml");
// await page2.locator("//input[@id='j_idt88:name']").click();
// await page2.locator("//input[@id='j_idt88:name']").fill("dadasdasd");


///Terminal
// npx playwright test --grep "@run1|@run2"
// npx playwright test --grep @run1
// npx playwright test --grep Sanity

// npx playwrite test --grep-invert @run2