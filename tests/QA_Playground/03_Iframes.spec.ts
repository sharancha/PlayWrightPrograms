import {test , expect } from "@playwright/test";

test.skip("Verify Basic iframe — Fill and Submit ",async ({page})=>{
    const name = "Sharan";

page.goto("https://qaplayground.com/");

page.locator("//h3[contains(.,'iFrames')]").click();

const frame = page.frameLocator("//iframe[@title='Basic Iframe']");

await frame.locator("#iframe-name-input").fill(name);

await frame.locator("#iframe-submit-btn").click();

const value = await page.locator("#result-s01").textContent();

console.log(value);

await expect(value).toContain("Submitted: "+ name);

});



test("Verify  Multiple iFrames — Locate by Attribute  ",async ({page})=>{
page.goto("https://qaplayground.com/");

const clickValue = "Frame One: button clicked ✓ | Frame Two: activated ✓ | Frame Three: confirmed ✓";

page.locator("//h3[contains(.,'iFrames')]").click();

const frameone = page.frameLocator("//iframe[@title='Frame One']");

await frameone.locator("#f1-action-btn").click();

const frametwo = page.frameLocator("//iframe[@title='Frame Two']");

await frametwo.locator("#f2-action-btn").click();

const framethree = page.frameLocator("//iframe[@title='Frame Three']");

await framethree.locator("//button[contains(.,'Confirm Action')]").click();

await page.waitForTimeout(5000);

const value2 = await page.locator("#result-s03").textContent();

console.log(value2);

expect (value2).toContain(clickValue);

});