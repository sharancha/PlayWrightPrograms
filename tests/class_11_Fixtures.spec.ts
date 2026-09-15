import{test as base, Page} from '@playwright/test'

type MyFixture = {loginpage : Page};

export const test = base.extend<MyFixture>({    

loginpage : async ({page}, use) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole('button',{name : 'Login'}).click();

    await page.getByRole('heading', {name : 'Dashboard'}).waitFor();

    await use(page);

}




})

export {expect} from '@playwright/test'

////////////////////////////////////////////


test('Dashboard validation', async({ loginpage})=>{

    expect(loginpage.getByRole('heading', {name : 'Dashboard'})).toBeVisible();

    console.log("Dashboard login Success");




})