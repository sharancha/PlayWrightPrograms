import * as XLSX from 'xlsx';
import {test } from '@playwright/test';


test("Readexcel",async ({page})=>{


  const workbook=  XLSX.readFile("data/userpass.xlsx");
  const sheet = workbook.Sheets["Sheet1"];
  const data: any[] = XLSX.utils.sheet_to_json(sheet);

  const testdata : any []= data.filter(row=> row.Result === 'pass');
  
  for(const userdata of testdata){
 
//}
  //for(const userdata of data){

    
    await page.goto("https://www.facebook.com/");
// const user = userdata[1].Username
// const pass = userdata[1].Password

    //await page.locator("").fill("");
    await page.fill("#_R_1h6kqsqppb6amH1_",userdata.Username);
    await page.fill("#_R_1hmkqsqppb6amH1_",userdata.password);
    await page.click("//span[text()='Log in']");

 }







  })