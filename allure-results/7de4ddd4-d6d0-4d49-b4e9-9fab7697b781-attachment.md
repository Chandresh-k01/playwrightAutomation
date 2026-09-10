# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Login >> Login Test Case with valid user
- Location: tests\Login.spec.js:105:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.app_logo').first()
Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - button [ref=e18] [cursor=pointer]: Close Menu
        - generic [ref=e20]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e43]:
            - generic [ref=e44]: $29.99
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e55]:
            - generic [ref=e56]: $9.99
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $15.99
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e91]:
            - generic [ref=e92]: $7.99
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e103]:
            - generic [ref=e104]: $15.99
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  12  | // test('invalid username and valid password Test Case', async({ page })=> {
  13  | //     await page.goto('https://www.saucedemo.com/');
  14  | //     await page.fill('#user-name', 'stand2rd_user');
  15  | //     await page.fill('#password', 'secret_sauce');
  16  | //     await page.click('#login-button');
  17  | 
  18  | //     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
  19  |    
  20  | // });
  21  | 
  22  | // test('valid username and invalid password Test Case', async({ page })=> {
  23  | //     await page.goto('https://www.saucedemo.com/');
  24  | //     await page.fill('#user-name', 'standard_user');
  25  | //     await page.fill('#password', 'secret_sauce1');
  26  | //     await page.click('#login-button');
  27  | 
  28  | //     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
  29  |    
  30  | // });
  31  | 
  32  | // test('invalid username and invalid password Test Case', async({ page })=> {
  33  | //     await page.goto('https://www.saucedemo.com/');
  34  | //     await page.fill('#user-name', 'stand2rd_user');
  35  | //     await page.fill('#password', 'secret_sauce1');
  36  | //     await page.click('#login-button');
  37  | 
  38  | //     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
  39  |    
  40  | // });
  41  | 
  42  | // test('empty username and empty password Test Case', async({ page })=> {
  43  | //     await page.goto('https://www.saucedemo.com/');
  44  | //     await page.fill('#user-name', ' ');
  45  | //     await page.fill('#password', ' ');
  46  | //     await page.click('#login-button');
  47  | 
  48  | //     await expect(page.locator('.error-message-container')).toContainText('Epic sadface: Username is required');
  49  |    
  50  | // });
  51  | 
  52  | 
  53  | 
  54  | // import { test, expect } from '@playwright/test'; 
  55  | // import loginData from '../testdata/loginData.json'; 
  56  | // test('Login Test Case', async ({ page }) => { 
  57  | // const username = loginData.validUsers[0].username; 
  58  | // const password = loginData.validUsers[0].password; 
  59  | // await page.goto('https://www.saucedemo.com/'); 
  60  | // await page.fill('#user-name', username); 
  61  | // await page.fill('#password', password); 
  62  | // await page.click('#login-button'); 
  63  | // await expect(page.locator('.title').first()).toHaveText("Products"); 
  64  | // });
  65  | 
  66  | // loginData.validUsers.forEach((data) => { 
  67  | // test(`Login Test for ${data.username}`, async ({ page }) => { 
  68  | // await page.goto('https://www.saucedemo.com/', { waitUntil: 
  69  | // 'domcontentloaded' }); 
  70  | // await page.fill('#user-name', data.username); 
  71  | // await page.fill('#password', data.password); 
  72  | // await page.click('#login-button'); 
  73  | // await expect(page.locator('.app_logo')).toHaveText("Swag Labs"); 
  74  | // }); 
  75  | // });
  76  | 
  77  | // import {test, expect} from '@playwright/test'; 
  78  | // import loginData from '../testdata/loginData.json'; 
  79  | // import LoginPage from '../pages/LoginPage'; 
  80  | // test('Login Test Case using with Valid User' , async ({page}) => { 
  81  | // const login = new LoginPage(page); 
  82  | // //selecting first dataset from JSON 
  83  | // const data = loginData.validUsers[0]; 
  84  | // await login.gotoURL(); 
  85  | // await login.login(data.username, data.password); 
  86  | // await expect((login.message).first()).toHaveText(data.expected); 
  87  | // });
  88  | 
  89  | // loginData.inValidUsers.forEach((data)=>{
  90  | //     test(`Login Invalid Test Case ${data.username}`,async({page})=>{
  91  | //         const login = new LoginPage(page)
  92  | //         await login.gotoURL()
  93  | //         await login.login(data.username,data.password)
  94  | //         await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]')).toBeVisible()
  95  | //         await login.attachScreenshot('Invalid login');
  96  | //     })
  97  | // })
  98  | 
  99  | import { test, expect } from '../fixtures/testSetup.js';
  100 | // import {test, expect} from '@playwright/test';
  101 | import loginData from '../testdata/loginData.json' assert { type: 'json' };
  102 | import LoginPage from '../pages/LoginPage.js';
  103 | import { attachStepScreenshot } from '../Utils/screenshotUtils.js';
  104 | test.describe('Login', () => {
  105 | test('Login Test Case with valid user', async ({ page }) => {
  106 | const loginPage = new LoginPage(page);
  107 | const data = loginData.validUsers[0];
  108 | await test.step('Enter credential and login', async () => {
  109 | await loginPage.login(data.username, data.password);
  110 | });
  111 | await test.step('Verify Welcome Message on Landing page', async () => {
> 112 | await expect(loginPage.message.first()).toHaveText(data.ExpectedMsg);
      |                                         ^ Error: expect(locator).toHaveText(expected) failed
  113 | await attachStepScreenshot(page, '05 - After app logo');
  114 | });
  115 | });
  116 | })
  117 | 
```