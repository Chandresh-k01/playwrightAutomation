# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.js >> TC 1 - Login and Checkout Product
- Location: tests\Checkout.spec.js:10:5

# Error details

```
ReferenceError: CheckOut is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import checkoutData from '../testdata/CheckOut.json';
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
> 14 |     const checkout = new CheckOut(page);
     |                      ^ ReferenceError: CheckOut is not defined
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