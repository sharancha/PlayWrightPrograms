import {test , expect } from "@playwright/test";

test("Validate title",async ({page})=>{

await page.goto("https://qaplayground.com/practice");

await page.locator("//h3[contains(.,'Alerts & Dialogs')]").click();



//S01
const S01_button = await page.locator("//button[contains(.,'Open Info Dialog')]");

await S01_button.click();

const GotITButton = await page.locator("//button[contains(.,'Got It')]");

await expect(GotITButton).toBeVisible();

await GotITButton.click();

await expect(GotITButton).not.toBeVisible();

//S02

const S02_button = await page.locator("//button[contains(.,'Open Confirm Dialog')]");

await S02_button.click();

const cancelBtn = await page.locator("//button[@data-testid='confirm-cancel-btn']");

await expect(cancelBtn).toBeVisible();

await cancelBtn.click();

await expect(cancelBtn).not.toBeVisible();

await S02_button.click();

await page.locator("//button[@data-testid='confirm-ok-btn']").click();


})