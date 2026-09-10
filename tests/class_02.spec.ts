//dark blue - tagname 
//light blue - att name 
//orange - att value
//black - text


//getbyrole
//getbylabel 1
//getbyplaceholder 2
//getbytext 3
//getbytitle 
//getbytestid
//getbyaltext 4


//xpath - 

//tag[@attname = 'attvalue']
//(tag[@attname = 'attvalue'])[index]
//tag[text() = '']
//tag[contains(text(),'')]


import {test , expect , Locator} from "@playwright/test";

test("Validate title",async ({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
//  await expect(page).toHaveTitle("OrangeHRM");

//  let title :string =await page.title();
//  console.log(title);

//  let URL : string =await page.url();
//  console.log(URL)
 

//  const S :Locator = await page.getByLabel("Email:");

//  await S.fill("123@gmail.com");

 page.getByPlaceholder("Enter Phone").fill("dsfsdfds");
page.getByText("Male").click();

page.getByAltText("orangehrm-logo")

page.getByRole('link',{name:'Online Trainings'}).click();


})