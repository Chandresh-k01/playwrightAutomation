# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.js >> TC 1 - Login and Checkout Product
- Location: tests\Checkout.spec.js:10:5

# Error details

```
TypeError: checkout.addProductToCart is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import checkoutData from '../testdata/CheckOut.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage.js';
  6  | 
  7  | import CheckOut from '../pages/Checkoutpage.js';
  8  | 
  9  | 
  10 | test('TC 1 - Login and Checkout Product', async ({ page }) => {
  11 | 
  12 |     const login = new LoginPage(page);
  13 | 
  14 |     const checkout = new CheckOut(page);
  15 | 
  16 |     // Selecting first dataset from JSON
  17 |     const data = checkoutData.checkoutTests[0];
  18 | 
  19 | 
  20 |     // ================= LOGIN =================
  21 | 
  22 |     await login.gotoURL();
  23 | 
  24 |     await login.login(
  25 |         data.username,
  26 |         data.password
  27 |     );
  28 | 
  29 | 
  30 |     // Verify Login
  31 |     await expect(login.message).toHaveText('Swag Labs');
  32 | 
  33 | 
  34 |     // ================= ADD PRODUCT =================
  35 | 
> 36 |     await checkout.addProductToCart();
     |                    ^ TypeError: checkout.addProductToCart is not a function
  37 | 
  38 | 
  39 |     // ================= OPEN CART =================
  40 | 
  41 |     await checkout.openCart();
  42 | 
  43 | 
  44 |     // Verify Product
  45 |     await expect(checkout.productName).toHaveText(data.productName);
  46 | 
  47 | 
  48 |     // ================= CHECKOUT =================
  49 | 
  50 |     await checkout.clickCheckout();
  51 | 
  52 | 
  53 |     // ================= CUSTOMER INFORMATION =================
  54 | 
  55 |     await checkout.enterFirstName(data.firstName);
  56 | 
  57 |     await checkout.enterLastName(data.lastName);
  58 | 
  59 |     await checkout.enterPostalCode(data.postalCode);
  60 | 
  61 | 
  62 |     // ================= CONTINUE =================
  63 | 
  64 |     await checkout.clickContinue();
  65 | 
  66 | 
  67 |     // Verify Product on Overview
  68 |     await expect(checkout.productName).toHaveText(data.productName);
  69 | 
  70 | 
  71 |     // ================= FINISH =================
  72 | 
  73 |     await checkout.clickFinish();
  74 | 
  75 | 
  76 |     // ================= VERIFY ORDER =================
  77 | 
  78 |     await expect(checkout.completeMessage).toHaveText(data.expectedMsg);
  79 | 
  80 | });
```