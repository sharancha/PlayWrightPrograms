import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const popuppage = page.waitForEvent('popup');
page.locator(".wikipedia-search-wiki-link").click();

const childpage = await popuppage;

await childpage.waitForLoadState();

console.log(await childpage.url());
console.log(await childpage.title());

await childpage.close();
await page.bringToFront();

await page.locator("#name").fill("seenivasan");



})

import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const newpage = [];
for(let i =1;i<=10;i++){
const popuppage = page.waitForEvent('popup');
page.locator(".wikipedia-search-wiki-link").click();
 const childpage = await popuppage;

 await childpage.waitForLoadState();
newpage.push(childpage);

}

const jump = newpage[7];
await jump.bringToFront();
console.log(await jump.title());
const jump1 = newpage[5];
await jump1.bringToFront();
console.log(await jump1.title());




})


// await page.goto("https://testautomationpractice.blogspot.com/");

// const popuppage = page.waitForEvent('popup');
// page.locator(".wikipedia-search-wiki-link").click();

// const childpage = await popuppage;

// await childpage.waitForLoadState();

// console.log(await childpage.url());
// console.log(await childpage.title());

// await childpage.close();
// await page.bringToFront();

// await page.locator("#name").fill("seenivasan");
import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const newpage = [];
for(let i =1;i<=10;i++){
const popuppage = page.waitForEvent('popup');
page.locator(".wikipedia-search-wiki-link").click();
 const childpage = await popuppage;

 await childpage.waitForLoadState();
newpage.push(childpage);

}

const jump = newpage[7];
await jump.bringToFront();
console.log(await jump.title());
const jump1 = newpage[5];
await jump1.bringToFront();
console.log(await jump1.title());




})


// await page.goto("https://testautomationpractice.blogspot.com/");

// const popuppage = page.waitForEvent('popup');
// page.locator(".wikipedia-search-wiki-link").click();

// const childpage = await popuppage;

// await childpage.waitForLoadState();

// console.log(await childpage.url());
// console.log(await childpage.title());

// await childpage.close();
// await page.bringToFront();

// await page.locator("#name").fill("seenivasan");

import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page,context})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const popuppage = page.waitForEvent('popup');
 await page.locator(".wikipedia-search-wiki-link").click();
 await page.locator(".wikipedia-search-wiki-link").click();
 await page.locator(".wikipedia-search-wiki-link").click();
  const childpage = await popuppage;
await childpage.waitForLoadState();
const pages = context.pages();

let wikipage;
for(const currentpage of pages){
console.log(currentpage.url())

if(currentpage.url().includes("Wikipedia")){

wikipage = currentpage;
break;
}

}
if(wikipage){
wikipage.bringToFront();
console.log(wikipage.url())

}


})