import {test , expect } from "@playwright/test";


test.skip("Validate simple Alert",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const simpleAlert = await page.locator("#alertBtn");


await page.on('dialog', async alert =>{

expect(alert.type()).toContain('alert');

expect(alert.message()).toContain('I am an alert box!')

console.log(alert.type());

console.log(alert.message());

await alert.accept();

});

await simpleAlert.click();


});


test.skip ("Validate the Confirmation alert", async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

const ConfirmationAlert = await page.locator("#confirmBtn");

await page.once('dialog', async alert =>{

expect(alert.type()).toContain('confirm');

expect(alert.message()).toContain('Press a button!')

console.log("Dismiss Alert: "+alert.type());

console.log(alert.message());

await alert.dismiss();

});

await ConfirmationAlert.click();

await page.waitForTimeout(5000);

await page.once('dialog', async alert =>{

expect(alert.message()).toContain('Press a button!')

console.log("Accept Alert: "+alert.type());

console.log(alert.message());

await alert.accept();

});
await ConfirmationAlert.click();
await page.waitForTimeout(5000);




});

test ("Validate the Promt alert", async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

const PeomtAlert = await page.locator("#promptBtn");

await page.once('dialog', async alert =>{

expect(alert.type()).toContain('prompt');

expect(alert.message()).toContain('Please enter your name:')

console.log("Dismiss Alert: "+alert.type());

console.log(alert.message());

await alert.dismiss();

});

await PeomtAlert.click();

await page.waitForTimeout(5000);


const name = "sharan";
await page.once('dialog', async alert =>{

expect(alert.message()).toContain('Please enter your name:')

console.log("Accept Alert: "+alert.type());

console.log(alert.message());

await alert.accept(name);



});
await PeomtAlert.click();
await page.waitForTimeout(5000);

const value = await page.locator("#demo").textContent();

console.log(value);

expect (value). toBe("Hello "+name+"! How are you today?");




});
