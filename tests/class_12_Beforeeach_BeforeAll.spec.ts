import { expect, test  } from "@playwright/test";
//beforeeach
test.beforeEach("Validate functions",async({page})=>{

    console.log("login started")
    await page.goto("https://testautomationpractice.blogspot.com/")
})
test("test1",async({page})=>{

    console.log("Test1")
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await expect(page).toHaveTitle("Automation Testing Practice")
})

test("Test2",async({page})=>{

    console.log("Test2")
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
})



//npx playwright codegen https://testautomationpractice.blogspot.com/