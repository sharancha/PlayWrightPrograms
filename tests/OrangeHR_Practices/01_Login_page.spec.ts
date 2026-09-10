//Orange HR 
//Login page
// Username and password

import { test, expect, Locator } from "@playwright/test";



test("01 To validate Login page is dispalyed", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle("OrangeHRM");

})

test("02 To validate Login Valid username and password", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const u1 = await page.locator("//p[@class='oxd-text oxd-text--p' and contains(.,'Username')]").textContent();

    const p1 = await page.locator("//p[@class='oxd-text oxd-text--p' and contains(.,'Password')] ").textContent();

    const submitButton = await page.locator("//button[contains(.,'Login')]");



    const userNameValue = u1?.split(':')[1].trim();
    const passswordValue = p1?.split(':')[1].trim();

    console.log(userNameValue);

    console.log(passswordValue);



    const userNameField: Locator = await page.locator("//label[contains(.,'Username')]//..//following::div//input[@name='username']");

    const passwordField: Locator = await page.locator("//label[contains(.,'Username')]//..//following::div//input[@name='password']");

    await userNameField.fill(userNameValue ?? '');

    await passwordField.fill(passswordValue ?? '');

    await submitButton.click();


    // await expect(page.locator("//h6[contains(.,'Dashboard')]")).toHaveText("Dashboard");


    const admin = page.locator("//span[contains(.,'Admin') and contains(@class,'oxd-text oxd-text--span oxd-main-menu-item--name')]");

    await admin.click();

    const adminUsernameField = await page.locator("//label[contains(text(),'Username')]//../following-sibling::div/input");

    const adminUserroleField = await page.locator("(//label[contains(.,'User Role')]/following::div[contains(.,'Select') and contains(@class,'oxd-select-text-input')])[1]");

    const roleDropdown = await page.locator("//div[contains(@class,'oxd-select-option')]//span[text()='ESS']");

    const employeeName = page.getByPlaceholder("Type for hints...");

    const statusField = page.locator("//label[contains(.,'Status')]/following::div[contains(.,'Select') and contains(@class,'oxd-select-text-input')]");


    const searchButton = page.locator("//button[contains(.,'Search')]");

    const resetButton = page.locator("//button[contains(.,'Reset')]");


    await adminUsernameField.fill("Ajith");

    await adminUserroleField.click();

    await roleDropdown.click();

    await searchButton.click();

    






})

