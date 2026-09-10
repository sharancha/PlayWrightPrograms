
//th - header
//tr - row 
//td - cell




import {test , expect, Locator } from "@playwright/test"
test("WindowHandling",async({page,context})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const row = page.locator("//table[@name='BookTable']//tr");
const column = page.locator("//table[@name='BookTable']//th");

const r = await row.count();
const c = await column.count();

console.log(r);
console.log(c);


for(let i = 0; i < await row.count(); i++){
   const col =  row.nth(i).locator("td");
   ////table[@name='BookTable']//tr[i]//td
let rowData = [];
   for(let j=0;j<await col.count();j++){
rowData.push(await col.nth(j).innerText())
   }
console.log(rowData.join("|"));
}



for(let i =1;i<=await row.count();i++)
{
 const c1 = row.nth(i).locator("td");
 const c2 = await c1.nth(0).innerText();
if(c2 == "Learn Selenium"){


   const author =  await c1.nth(1).innerText();
   console.log(author);
   break;
}


}
})





// for(let i =0 ;i<await row.count();i++){

//     for(let j=0; j<await col.count() ; j++){


//         locator ("//table[@name='BookTable']//tr[i]//td[j]")
//     }
// }