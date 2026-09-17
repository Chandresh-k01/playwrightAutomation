# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Checkout.spec.js >> TC 1 - Login and Checkout Product
- Location: tests\Checkout.spec.js:10:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name')
Expected: "Sauce Labs Backpack"
Error: strict mode violation: locator('.inventory_item_name') resolved to 6 elements:
    1) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Backpack</div> aka locator('[data-test="item-4-title-link"]')
    2) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bike Light</div> aka locator('[data-test="item-0-title-link"]')
    3) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    4) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Fleece Jacket</div> aka locator('[data-test="item-5-title-link"]')
    5) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Onesie</div> aka locator('[data-test="item-2-title-link"]')
    6) <div class="inventory_item_name " data-test="inventory-item-name">Test.allTheThings() T-Shirt (Red)</div> aka locator('[data-test="item-3-title-link"]')

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.inventory_item_name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 1 items" [ref=e13]:
          - generic [ref=e14]: "1"
      - generic [ref=e15]:
        - generic [ref=e16]: Products
        - generic [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Name (A to Z)
          - combobox "Sort products" [ref=e20]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e21]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - button "View details for Sauce Labs Backpack" [ref=e27]:
            - img "Sauce Labs Backpack" [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]:
              - button "View details for Sauce Labs Backpack" [ref=e31]:
                - generic [ref=e32]: Sauce Labs Backpack
              - generic [ref=e33]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e34]:
              - generic [ref=e35]: $29.99
              - button "Remove" [ref=e36] [cursor=pointer]
        - generic [ref=e37]:
          - button "View details for Sauce Labs Bike Light" [ref=e39]:
            - img "Sauce Labs Bike Light" [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]:
              - button "View details for Sauce Labs Bike Light" [ref=e43]:
                - generic [ref=e44]: Sauce Labs Bike Light
              - generic [ref=e45]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e46]:
              - generic [ref=e47]: $9.99
              - button "Add to cart" [ref=e48] [cursor=pointer]
        - generic [ref=e49]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e51]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e52]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e55]:
                - generic [ref=e56]: Sauce Labs Bolt T-Shirt
              - generic [ref=e57]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e58]:
              - generic [ref=e59]: $15.99
              - button "Add to cart" [ref=e60] [cursor=pointer]
        - generic [ref=e61]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e63]:
            - img "Sauce Labs Fleece Jacket" [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e66]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e67]:
                - generic [ref=e68]: Sauce Labs Fleece Jacket
              - generic [ref=e69]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e70]:
              - generic [ref=e71]: $49.99
              - button "Add to cart" [ref=e72] [cursor=pointer]
        - generic [ref=e73]:
          - button "View details for Sauce Labs Onesie" [ref=e75]:
            - img "Sauce Labs Onesie" [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]:
              - button "View details for Sauce Labs Onesie" [ref=e79]:
                - generic [ref=e80]: Sauce Labs Onesie
              - generic [ref=e81]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e82]:
              - generic [ref=e83]: $7.99
              - button "Add to cart" [ref=e84] [cursor=pointer]
        - generic [ref=e85]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e87]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e88]
          - generic [ref=e89]:
            - generic [ref=e90]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e91]:
                - generic [ref=e92]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e93]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e94]:
              - generic [ref=e95]: $15.99
              - button "Add to cart" [ref=e96] [cursor=pointer]
  - contentinfo [ref=e97]:
    - list [ref=e98]:
      - listitem [ref=e99]:
        - link "X" [ref=e100]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e101]:
        - link "Facebook" [ref=e102]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e103]:
        - link "LinkedIn" [ref=e104]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e105]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import checkoutData from '../testData/Checkout.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage.js';
  6  | 
  7  | import Checkout from '../pages/Checkoutpage.js';
  8  | 
  9  | 
  10 | test('TC 1 - Login and Checkout Product', async ({ page }) => {
  11 | 
  12 |     const login = new LoginPage(page);
  13 | 
  14 |     const checkout = new Checkout(page);
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
  36 |     await checkout.addToCart();
  37 | 
  38 | 
  39 |     // ================= OPEN CART =================
  40 | 
  41 |     await checkout.openCart();
  42 | 
  43 | 
  44 |     // Verify Product
> 45 |     await expect(checkout.productName).toHaveText(data.productName);
     |                                        ^ Error: expect(locator).toHaveText(expected) failed
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