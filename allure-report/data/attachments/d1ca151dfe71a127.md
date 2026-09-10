# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.js >> TC 1 - Login and Logout
- Location: tests\Logout.spec.js:8:5

# Error details

```
TypeError: _LoginPage.default.gotoAPP_URL is not a function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | import logoutData from '../testdata/LogOut.json';
  4  | 
  5  | import LoginPage from '../pages/LoginPage';
  6  | 
  7  | import Logoutpage from '../pages/Logoutpage';
  8  | test('TC 1 - Login and Logout', async ({ page }) => {
  9  | 
  10 |   const login = new LoginPage(page);
  11 | 
  12 |   const logout = new Logoutpage(page);
  13 | //   const data = logoutData.logoutTests[0];
  14 | 
> 15 |  await LoginPage.gotoAPP_URL();
     |                  ^ TypeError: _LoginPage.default.gotoAPP_URL is not a function
  16 | 
  17 |   await login.login(
  18 |     data.username,
  19 |     data.password
  20 |   );
  21 |   await expect(login.message.first()).toHaveText(data.expected);
  22 |   await logout.openMenu();
  23 |   await logout.logout();
  24 |   await expect(logout.loginButton).toBeVisible();
  25 | 
  26 | });
```