// https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers

// https://www.leafground.com/select.xhtml
import {test , expect, Locator } from "@playwright/test"
test("select dropdown",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

await page.getByPlaceholder("Enter Name").fill("Seeniasjkdasjdljaslkdjlsakj");
await page.getByPlaceholder("Enter EMail").type("jklsadhksahdjashdksahkdjhasdhaskdhk");
await page.getByPlaceholder("Enter EMail").press("Tab");
await page.getByPlaceholder("Enter Phone").fill("123456789");
const select : Locator = page.getByPlaceholder("Enter Phone");
await select.press("Control+A");
await page.locator("#textarea").focus();
await page.locator("#textarea").fill("hdksjasdsahkdhkjsahdkhaskdsadsadsad");
await page.locator("#textarea").blur();

await page.getByRole('checkbox',{name : "Sunday"}).check();
await page.getByRole('checkbox',{name : "Monday"}).check();
await page.getByRole('checkbox',{name : "Tuesday"}).check();
await page.getByRole('checkbox',{name : "Wednesday"}).check();
await page.getByRole('checkbox',{name : "Sunday"}).uncheck();

await page.locator(".start").first().click();
const btn : Locator = await page.locator(".submit-btn").first();
await btn.hover();
await btn.click();

const drop1 : Locator = page.getByRole('combobox',{name :"Country:"});

await drop1.selectOption({value : "germany"});

const mdrop : Locator =page.locator("#colors");

await mdrop.selectOption(["Red","Blue","Green"]);

const drag : Locator = page.getByText("Drag me to my target");
const drop : Locator = page.getByText("Drop here");

await drag.dragTo(drop);

await page.locator("#textarea").screenshot({path : "data/Fita.png"});
await page.locator("#singleFileInput").setInputFiles("data/app.html");

})