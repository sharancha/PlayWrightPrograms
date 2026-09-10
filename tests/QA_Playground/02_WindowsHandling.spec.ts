import { test, expect } from "@playwright/test";

test("Verify clicking a link opens a new browser tab", async ({ page, context }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const popupPage = page.waitForEvent('popup');

    await page.locator("//button[contains(.,'New Tab')]").click();

    await page.locator("//button[contains(.,'Popup Windows')]").click();

    await page.locator("//button[contains(.,'Popup Windows')]").click();



    const childPage = await popupPage;

    await childPage.waitForLoadState();

    const pages = await context.pages();

    let value;

    for (const singlePage of pages) {
        console.log(singlePage.url());

        if (singlePage.url().includes("selenium")) {
            value = await singlePage;
            break;
        }
    }

    if (value) {
        await value.bringToFront();
        console.log(value.url());
        console.log(await value.title());
        await value.locator("(//a[contains(.,'Read more')])[1]").click();// If need to access the curent page need to use that page context value
        console.log(await value.title());

    }



});