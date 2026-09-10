import {test , expect , Locator} from "@playwright/test";

test("Validate Frames",async ({page})=>{
 await page.goto("https://www.leafground.com/frame.xhtml");


const frames = page.frameLocator("//iframe[@src='default.xhtml']");

await frames.locator("#Click").click();
 //await page.locator("#Click").click();

 await page.locator("//li[@id='menuform:j_idt37']").click();


 const multiframe = page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']")

multiframe.locator("#Click").click();

const iframe = page.frames()

console.log("Frames"+iframe.length)


for(const fra of iframe){
console.log("Frames"+ fra.url())
    
}
})


// https://qaplayground.com/practice