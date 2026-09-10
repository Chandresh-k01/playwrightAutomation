# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.js >> TC 1 - Login and Add Product to Cart
- Location: tests\AddToCart.spec.js:8:5

# Error details

```
ReferenceError: AddToCart is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import addToCartData from '../testdata/AddToCart.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage';
  6  | 
  7  | 
  8  | test('TC 1 - Login and Add Product to Cart', async ({ page }) => {
  9  | 
  10 |   const login = new LoginPage(page);
  11 | 
> 12 |   const cart = new AddToCart(page);
     |                ^ ReferenceError: AddToCart is not defined
  13 | 
  14 |   const data = addToCartData.addToCartTests[0];
  15 | 
  16 | 
  17 |   // LOGIN
  18 |   await login.gotoURL();
  19 | 
  20 |   await login.login(
  21 |     data.username,
  22 |     data.password
  23 |   );
  24 | 
  25 | 
  26 |     // Verify Login
  27 |     await expect(login.message.first()).toHaveText('Swag Labs');
  28 | 
  29 | 
  30 |     // Open Backpack
  31 |     await cart.openProduct(cart.shirt);
  32 | 
  33 |     // Add Backpack to Cart
  34 |     await cart.addProduct(cart.addToCartButton);
  35 | 
  36 |     // Verify Cart Badge
  37 |     await expect(cart.cartBadge).toHaveText(data.expectedMsg);
  38 | 
  39 |     // Open Cart
  40 |     await cart.openCart();
  41 | 
  42 |     // Verify Product
  43 |     await expect(cart.productName).toHaveText(data.productName[2]);
  44 | 
  45 | });
```