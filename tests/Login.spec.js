// import {test, expect} from '@playwright/test';
// test('Login Test Case', async({ page })=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.fill('#user-name', 'standard_user');
//     await page.fill('#password', 'secret_sauce');
//     await page.click('#login-button');

//     await expect(page.locator('.title')).toHaveText('Products');
    
// });

// test('invalid username and valid password Test Case', async({ page })=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.fill('#user-name', 'stand2rd_user');
//     await page.fill('#password', 'secret_sauce');
//     await page.click('#login-button');

//     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
   
// });

// test('valid username and invalid password Test Case', async({ page })=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.fill('#user-name', 'standard_user');
//     await page.fill('#password', 'secret_sauce1');
//     await page.click('#login-button');

//     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
   
// });

// test('invalid username and invalid password Test Case', async({ page })=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.fill('#user-name', 'stand2rd_user');
//     await page.fill('#password', 'secret_sauce1');
//     await page.click('#login-button');

//     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
   
// });

// test('empty username and empty password Test Case', async({ page })=> {
//     await page.goto('https://www.saucedemo.com/');
//     await page.fill('#user-name', ' ');
//     await page.fill('#password', ' ');
//     await page.click('#login-button');

//     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username is required');
   
// });



// import { test, expect } from '@playwright/test'; 
// import loginData from '../testdata/loginData.json'; 
// test('Login Test Case', async ({ page }) => { 
// const username = loginData.validUsers[0].username; 
// const password = loginData.validUsers[0].password; 
// await page.goto('https://www.saucedemo.com/'); 
// await page.fill('#user-name', username); 
// await page.fill('#password', password); 
// await page.click('#login-button'); 
// await expect(page.locator('.title').first()).toHaveText("Products"); 
// });

// loginData.validUsers.forEach((data) => { 
// test(`Login Test for ${data.username}`, async ({ page }) => { 
// await page.goto('https://www.saucedemo.com/', { waitUntil: 
// 'domcontentloaded' }); 
// await page.fill('#user-name', data.username); 
// await page.fill('#password', data.password); 
// await page.click('#login-button'); 
// await expect(page.locator('.app_logo')).toHaveText("Swag Labs"); 
// }); 
// });

// import {test, expect} from '@playwright/test'; 
// import loginData from '../testdata/loginData.json'; 
// import LoginPage from '../pages/LoginPage'; 
// test('Login Test Case using with Valid User' , async ({page}) => { 
// const login = new LoginPage(page); 
// //selecting first dataset from JSON 
// const data = loginData.validUsers[0]; 
// await login.gotoURL(); 
// await login.login(data.username, data.password); 
// await expect((login.message).first()).toHaveText(data.expected); 
// });

// loginData.inValidUsers.forEach((data)=>{
//     test(`Login Invalid Test Case ${data.username}`,async({page})=>{
//         const login = new LoginPage(page)
//         await login.gotoURL()
//         await login.login(data.username,data.password)
//         await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]')).toBeVisible()
//         await login.attachScreenshot('Invalid login');
//     })
// })

import { test, expect } from '../fixtures/testSetup.js';
// import {test, expect} from '@playwright/test';
import loginData from '../testData/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import { attachStepScreenshot } from '../Utils/screenshotUtils.js';
test.describe('Login', () => {
test('Login Test Case with valid user', async ({ page }) => {
const loginPage = new LoginPage(page);
const data = loginData.validUsers[0];
await test.step('Enter credential and login', async () => {
await loginPage.login(data.username, data.password);
});
await test.step('Verify Welcome Message on Landing page', async () => {
await expect(loginPage.message.first()).toHaveText(data.expected);
await attachStepScreenshot(page, '05 - After app logo');
});
});
})
